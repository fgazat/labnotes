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

function ShowcaseFooter() {
  return (
    <section className={clsx("margin-top--lg", "margin-bottom--lg", "container")}>
      <div className="row">
        <div className="col">
          <h2>О сайте</h2>
          <p>📚 <b>ON LEARNING</b> — сайт с учебными материалами по химии. Материалы написаны с использованием конспектов лекций и информации из книг.</p>
          <p>🆘 Сайт создан, чтобы помочь студентам в учебе.</p>
          <p>🙏 Если наш сайт помог вам, расскажите о нем друзьям и одногруппникам.  И подпишитесь на наш <a target="_blank" rel="noopener noreferrer" href="https://t.me/labnotesru">Телеграм-канал</a>.</p>
        </div>
        <div className="col">
        </div>
      </div>
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
      <section className="margin-top--md margin-bottom--xl">
        <div className="container padding-vert--md text--center">
          <h2>No result</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="margin-top--xs margin-bottom--md">
      {selectedTags.length === 0 ? (
        <>
          <div className={styles.showcaseFavorite}>
            <div className="container">
              <div
                className={clsx(
                  'margin-bottom--md',
                  styles.showcaseFavoriteHeader,
                )}>
                <h1 className="margin-top--md margin-bottom--md text--center">🧪 Химия</h1>
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
    <Layout title="Конспекты лекций по химии" description={DESCRIPTION}>
      <main className="margin-vert--md">
        <ShowcaseCards />
        <ShowcaseFooter />
      </main>
    </Layout>
  );
}

export default Showcase;
