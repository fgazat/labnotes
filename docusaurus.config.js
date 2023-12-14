// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lab Notes',
  tagline: 'Сайт с лабораторными заметками Азата',
  url: 'https://labnotes.ru',
  baseUrl: '/',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'fgazat', // Usually your GitHub org/user name.
  projectName: 'labnotes', // Usually your repo name.
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          editUrl: 'https://github.com/fgazat/labnotes/blob/master',
          showLastUpdateTime: true,
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          blogTitle: 'Заметки',
          blogDescription: 'Заметки',
          blogSidebarTitle: 'Все заметки',
          blogSidebarCount: 'ALL',
          editUrl: 'https://github.com/fgazat/labnotes/blob/master',
          routeBasePath: 'notes',
          postsPerPage: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-85912797-1',
          anonymizeIP: true,
        },
        gtag: {
          trackingID: 'G-CXYZWL70YN',
          anonymizeIP: true,
        },
      }),
    ],
  ],
  stylesheets: [
{
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Lab Notes',
        logo: {
          alt: 'Lab Notes Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Химия',
            position: 'left',
            items: [
              {
                type: 'doc',
                docId: 'vms/index',
                label: 'ВМС',
              },
              {
                type: 'doc',
                docId: 'fizicheskaya-himiya/index',
                label: 'Физическая химия',
              },
              {
                type: 'doc',
                docId: 'kolloidnaya-himiya/index',
                label: 'Коллоидная химия',
              },
              {
                type: 'doc',
                docId: 'kvantovaya-himiya/index',
                label: 'Квантовая химия',
              },
            ],
          },
          { to: '/notes', label: 'Заметки', position: 'left' },
          {
            href: 'https://github.com/fgazat/labnotes',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Химия',
            items: [
              {
                to: 'vms/',
                label: 'ВМС',
              },
              {
                to: 'fizicheskaya-himiya/',
                label: 'Физическая химия',
              },
              {
                to: 'kolloidnaya-himiya/',
                label: 'Коллоидная химия',
              },
              {
                to: 'kvantovaya-himiya/',
                label: 'Квантовая химия',
              },
            ],
          },
          {
            title: 'Социальные сети',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/fgazat0',
              },
              {
                label: 'Телеграм',
                href: 'https://t.me/+YTBy1RcJfKxiN2U6',
              },
            ],
          },
          {
            title: 'Еще',
            items: [
              {
                label: 'Заметки',
                to: '/notes',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/fgazat/labnotes',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Lab Notes.`,
      },
      announcementBar: {
        id: 'announcementBar-2',
        content:
          '🙏 Если вам нравится сайт, подпишитесь на наш <a target="_blank" rel="noopener noreferrer" href="https://t.me/+EdUnDQcUWrI2MGJi">Телеграм-канал</a>.',
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
  plugins: ['@docusaurus/plugin-ideal-image'],
};

module.exports = config;
