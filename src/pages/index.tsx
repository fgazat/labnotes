/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useState, useMemo, useEffect} from 'react';

import Layout from '@theme/Layout';
import clsx from 'clsx';

import {
  readSearchTags,
} from './_components/ShowcaseTagSelect';
import {
  Operator,
  readOperator,
} from './_components/ShowcaseFilterToggle';
import ShowcaseCard from './_components/ShowcaseCard';
import {sortedUsers, User, TagType} from '@site/src/data/users';

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import {useLocation} from '@docusaurus/router';

import styles from './styles.module.css';
const TITLE = 'ON LEARNING';
const DESCRIPTION = 'Конспекты лекций по химии';

type UserState = {
  scrollTopPosition: number;
  focusedElementId: string | undefined;
};

function restoreUserState(userState: UserState | null) {
  const {scrollTopPosition, focusedElementId} = userState ?? {
    scrollTopPosition: 0,
    focusedElementId: undefined,
  };
  // @ts-expect-error: if focusedElementId is undefined it returns null
  document.getElementById(focusedElementId)?.focus();
  window.scrollTo({top: scrollTopPosition});
}

export function prepareUserState(): UserState | undefined {
  if (ExecutionEnvironment.canUseDOM) {
    return {
      scrollTopPosition: window.scrollY,
      focusedElementId: document.activeElement?.id,
    };
  }

  return undefined;
}

function filterUsers(
  users: User[],
  selectedTags: TagType[],
  operator: Operator,
) {
  if (selectedTags.length === 0) {
    return users;
  }
  return users.filter((user) => {
    if (user.tags.length === 0) {
      return false;
    }
    if (operator === 'AND') {
      return selectedTags.every((tag) => user.tags.includes(tag));
    } else {
      return selectedTags.some((tag) => user.tags.includes(tag));
    }
  });
}

function useFilteredUsers() {
  const selectedTags = useSelectedTags();
  const location = useLocation<UserState>();
  const [operator, setOperator] = useState<Operator>('OR');
  useEffect(() => {
    setOperator(readOperator(location.search));
    restoreUserState(location.state);
  }, [location]);
  return useMemo(
    () => filterUsers(sortedUsers, selectedTags, operator),
    [selectedTags, operator],
  );
}

function useSelectedTags() {
  // The search query-string is the source of truth!
  const location = useLocation<UserState>();

  // On SSR / first mount (hydration) no tag is selected
  const [selectedTags, setSelectedTags] = useState<TagType[]>([]);

  // Sync tags from QS to state (delayed on purpose to avoid SSR/Client hydration mismatch)
  useEffect(() => {
    setSelectedTags(readSearchTags(location.search));
    restoreUserState(location.state);
  }, [location]);

  return selectedTags;
}

function ShowcaseHeader() {

  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <h1>{TITLE}</h1>
      <p>{DESCRIPTION}</p>
      {/* {link_button} */}
    </section>
  );
}

function ShowcaseFooter() {
  const TEXT = "Если наш сайт помог вам, расскажите о нем одногруппникам, добавьте сайт в закладки и делитесь ссылками через социальные сети."
  return (
    <section className={clsx("margin-top--lg", "margin-bottom--lg", "text--center", "container")}>
      <p>{TEXT}</p>
      <p>Сайт создан для помощи студентам в учебе.</p>
      {/* {link_button} */}
    </section>
  );
}


const chemistyUsers = sortedUsers.filter((user) =>
  user.tags.includes('chemistry'),
);
const otherUsers = sortedUsers.filter(
  (user) => !user.tags.includes('favorite'),
);

function ShowcaseCards() {
  const selectedTags = useSelectedTags();
  const filteredUsers = useFilteredUsers();

  if (filteredUsers.length === 0) {
    return (
      <section className="margin-top--lg margin-bottom--xl">
        <div className="container padding-vert--md text--center">
          <h2>No result</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="margin-top--lg margin-bottom--xl">
      {selectedTags.length === 0 ? (
        <>
          <div className={styles.showcaseFavorite}>
            <div className="container">
              <div
                className={clsx(
                  'margin-bottom--md',
                  styles.showcaseFavoriteHeader,
                )}>
                <h2>🧪 Химия</h2>
              </div>
              <ul className={clsx('container', styles.showcaseList)}>
                {chemistyUsers.map((user) => (
                  <ShowcaseCard key={user.title} user={user} />
                ))}
              </ul>
            </div>
          </div>
          {/* <div className="container margin-top--lg">
            <h2 className={styles.showcaseHeader}>All sites</h2>
            <ul className={styles.showcaseList}>
              {otherUsers.map((user) => (
                <ShowcaseCard key={user.title} user={user} />
              ))}
            </ul>
          </div> */}
        </>
      ) : (
        <div className="container">
          <ul className={styles.showcaseList}>
            {filteredUsers.map((user) => (
              <ShowcaseCard key={user.title} user={user} />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

function Showcase(): JSX.Element {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className="margin-vert--lg">
        <ShowcaseHeader />
        <ShowcaseCards />
        <ShowcaseFooter />
      </main>
    </Layout>
  );
}

export default Showcase;
