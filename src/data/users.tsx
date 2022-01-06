/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import {sortBy} from '@site/src/utils/jsUtils';

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export type TagType =
  | 'favorite'
  | 'chemistry'
  | 'physics'
  | 'biology'
  | 'programming'
  | 'economy';

export type User = {
  title: string;
  description: string;
  preview: any;
  website: string;
  tags: TagType[];
};

// LIST OF AVAILABLE TAGS
// Available tags to assign to your site
// Please choose all tags that you think might apply.
// We'll remove inappropriate tags, but it's less likely that we add tags.
export const Tags: Record<TagType, Tag> = {
  // DO NOT USE THIS TAG: we choose sites to add to favorites
  favorite: {
    label: 'Favorite',
    description:
      'Our favorite Docusaurus sites that you must absolutely check-out!',
    color: '#e9669e',
  },

  // For open-source sites, a link to the source code is required
  chemistry: {
    label: 'Химия',
    description: 'Химия — наука о веществах, их свойствах и превращениях.',
    color: '#39ca30',
  },

  physics: {
    label: 'Физика',
    description: 'Docusaurus sites associated to a commercial product!',
    color: '#dfd545',
  },

  biology: {
    label: 'Биология',
    description:
      'Beautiful Docusaurus sites, polished and standing out from the initial template!',
    color: '#a44fb7',
  },

  programming: {
    label: 'Программирование',
    description:
      'Translated Docusaurus sites using the internationalization support with more than 1 locale.',
    color: '#127f82',
  },

  economy: {
    label: 'Экономика',
    description:
      'Docusaurus sites using the versioning feature of the docs plugin to manage multiple versions.',
    color: '#fe6829',
  },
};

// Add your site to this list
// prettier-ignore
const Users: User[] = [
  {
    title: 'Химия ВМС',
    description:
      'О синтезе, свойствах и возможностях применения высокомолекулярных соединений.',
    preview: require('./showcase/aide_jeune.png'),
    website: 'vms/',
    tags: ['chemistry'],
  },
  /*
  Pro Tip: add your site in alphabetical order.
  Appending your site here (at the end) is more likely to produce Git conflicts.
   */
];

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes('favorite'));
  return result;
}

export const sortedUsers = sortUsers();
