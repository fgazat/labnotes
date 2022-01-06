// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'On Learning',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru']
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // blogTitle: 'Docusaurus blog!',
          // blogDescription: 'A Docusaurus powered blog!',
          blogSidebarTitle: 'Все посты',
          blogSidebarCount: 'ALL',
          postsPerPage: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      integrity:
        'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ON LEARNING',
        logo: {
          alt: 'ON LEARNING Logo',
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

          {to: '/blog', label: 'Блог', position: 'left'},
          {
            href: 'https://www.tinkoff.ru/cf/VsoSs5bulN',
            label: 'Поддержать',
            position: 'right',
          },
        ],
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
                label: 'Вконтакте',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Телеграм',
                href: 'https://t.me/labnotesru',
              },
              {
                label: 'Мой инстаграм',
                href: 'https://instagram.com/fgazat',
              },
            ],
          },
          {
            title: 'Еще',
            items: [
              {
                label: 'Блог',
                to: '/blog',
              },
              {
                label: 'Поддержать',
                href: 'https://www.tinkoff.ru/cf/VsoSs5bulN',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ON LEARNING.`,
      },
      announcementBar: {
        id: 'announcementBar-1',
        content:
        '🙏 Если вам нравится сайт, подпишитесь на наш <a target="_blank" rel="noopener noreferrer" href="https://t.me/labnotesru">Телеграм-канал</a>.',
      },
      hideableSidebar: true,
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: ['@docusaurus/plugin-ideal-image'],
};

module.exports = config;
