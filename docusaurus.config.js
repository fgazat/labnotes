// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ON LEARNING',
  tagline: 'Сайт с конспектами лекций',
  url: 'https://onlearning.ru',
  baseUrl: '/',
  trailingSlash: true,
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
          blogSidebarTitle: 'Все новости',
          blogSidebarCount: 'ALL',
          routeBasePath: 'news',
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

          {to: '/news', label: 'Новости', position: 'left'},
          // {
          //   href: 'https://www.tinkoff.ru/cf/VsoSs5bulN',
          //   label: 'Поддержать',
          //   position: 'right',
          // },
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
                href: 'https://vk.com/onlearning',
              },
              {
                label: 'Телеграм',
                href: 'https://t.me/+YTBy1RcJfKxiN2U6',
              }
            ],
          },
          {
            title: 'Еще',
            items: [
              {
                label: 'Новости',
                to: '/news',
              },
              // {
              //   label: 'Поддержать',
              //   href: 'https://www.tinkoff.ru/cf/VsoSs5bulN',
              // },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ON LEARNING.`,
      },
      announcementBar: {
        id: 'announcementBar-2',
        content:
        '🙏 Если вам нравится сайт, подпишитесь на наш <a target="_blank" rel="noopener noreferrer" href="https://t.me/+EdUnDQcUWrI2MGJi">Телеграм-канал</a>.',
      },
      colorMode: {
        disableSwitch: true
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
