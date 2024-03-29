/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  vms: [
    {
      type: 'category',
      collapsible: false,
      label: 'Химия ВМС',
      link: {type: 'doc', id: 'vms/index'},
      items: [
        // 'vms/index',
        'vms/opredeleniya',
        'vms/klassifikatsiya-polimerov',
        'vms/vazhnejshie-polimery',
        {
          type: 'category',
          label: 'Полимеризация',
          collapsed: false,
          link: {
            type: 'generated-index',
            title: ' Полимеризация',
            description: 'Полимеризация — процесс получения ВМС из низкомолекулярных соединений без выделения побочных продуктов. Данный процесс осуществляется за счет кратных связей ( С=С, С=О и др.) или раскрытия циклов, содержащих гетероатомы (N, S, O). Продукты полимеризации имеют тот же элементный состав, что и исходные мономеры.',
            slug: 'vms/polimerizaciya',
          },
          items: [
            'vms/radikalnaya-polimerizaciya',
            'vms/sopolimerizatsiya',
            'vms/kationnaya-polimerizatsiya',
            'vms/anionnaya-polimerizatsiya',
            'vms/anionno-koordinatsionnaya-polimerizatsiya',
            'vms/stupenchataya-polimerizatsiya',
            'vms/sposoby-provedeniya-polimerizatsii',
          ],
        },
        'vms/polikondensatsiya',
        {
          type: 'category',
          label: 'Реакции звеньев',
          collapsed: false,
          link: {
            type: 'generated-index',
            title: ' Реакции звеньев',
            description: 'Реакции звеньев — химические превращения полимеров, в процессе которых не меняется степень полимеризации ВМС.',
            slug: 'vms/reaktsii-zvenev',
          },

          items: [
            'vms/polimeranalogichnye-prevrashcheniya',
            'vms/vnutrimolekulyarnye-prevrashcheniya',
          ],
        },
        {
          type: 'category',
          label: 'Реакции макромолекул',
          collapsed: false,
          link: {
            type: 'generated-index',
            title: ' Реакции макромолекул',
            description: 'Реакции макромолекул — химические превращения полимеров, которые приводят к изменению степени полимеризации ВМС.',
            slug: 'vms/reaktsii-makromolekul',
          },
          items: [
            'vms/reakcii-destrukcii',
            'vms/reakcii-sshivaniya',
          ],
        },
        {
          type: 'category',
          label: 'Структура полимеров',
          collapsed: false, 
          items: [
            'vms/gibkost-cepi-polimera',
          ],
        },
      ]}
  ],
  fizicheskaya: [{
    type: 'category',
    collapsible: false,
    label: 'Физическая химия',
    link: {type: 'doc', id: 'fizicheskaya-himiya/index'},
    items: [
      // 'fizicheskaya-himiya/index',
      'fizicheskaya-himiya/opredeleniya',
      {
        type: 'category',
        label: 'Первое начало термодинамики',
        link: {type: 'doc', id: 'fizicheskaya-himiya/pervoe-nachalo-termodinamiki'},
        collapsed: false, 
        items: [
          'fizicheskaya-himiya/termicheskie-uravneniya-sostoyaniya',
          'fizicheskaya-himiya/termicheskie-koehfficienty',
          'fizicheskaya-himiya/primenenie-pervogo-nachala-termodinamiki',
          'fizicheskaya-himiya/zakon-kirhgofa',
          'fizicheskaya-himiya/sootnosheniya-teplovyh-ehffektov',
        ],
      },
      {
        type: 'category',
        label: 'Второе начало термодинамики',
        link: {type: 'doc', id: 'fizicheskaya-himiya/vtoroe-nachalo-termodinamiki'},
        collapsed: false, 
        items: [
          'fizicheskaya-himiya/kaloricheskie-vyrazheniya-vtorogo-nachala-termodinamiki',
          'fizicheskaya-himiya/izmenenie-ehntropii',
          'fizicheskaya-himiya/statisticheskij-smysl-ehntropii',
          'fizicheskaya-himiya/problema-opredeleniya-absolyutnogo-znacheniya-ehntropii',
        ],
      },
      {
        type: 'category',
        label: 'Термодинамические потенциалы',
        collapsed: false, 
        items: [
          'fizicheskaya-himiya/kriterii-napravlennosti',
          'fizicheskaya-himiya/harakteristicheskie-funkcii',
          'fizicheskaya-himiya/termodinamicheskie-potencialy',
          'fizicheskaya-himiya/zavisimost-himicheskogo-potenciala',
          'fizicheskaya-himiya/izmenenie-funkcii-gibbsa',
        ],
      },
      {
        type: 'category',
        label: 'Химическое равновесие',
        collapsed: false, 
        items: [
          'fizicheskaya-himiya/himicheskoe-ravnovesie',
        ],
      },
    ]}],
  kvantovaya: [{
    type: 'category',
    collapsible: false,
    label: 'Квантовая химия',
    link: {type: 'doc', id: 'kvantovaya-himiya/index'},
    items: [
      // 'kvantovaya-himiya/index',
      'kvantovaya-himiya/postulaty-kvantovoj-mekhaniki',
      'kvantovaya-himiya/prostranstvo-volnovykh-funktsij',
      'kvantovaya-himiya/osnovnye-operatory-kvantovoj-mekhaniki',
      'kvantovaya-himiya/svojstva-operatorov',
      'kvantovaya-himiya/operatornye-uravneniya',
      'kvantovaya-himiya/matrichnoe-predstavlenie-operatorov',
    ]
  }],
  kolloidnaya: [{
    type: 'category',
    collapsible: false,
    label: 'Коллоидная химия',
    link: {type: 'doc', id: 'kolloidnaya-himiya/index'},
    items: [
      // 'kolloidnaya-himiya/index',
      'kolloidnaya-himiya/opredeleniya',
      'kolloidnaya-himiya/opticheskie-svojstva',
      'kolloidnaya-himiya/poverkhnostnye-yavleniya',
      'kolloidnaya-himiya/metody-opredeleniya-poverkhnostnogo-natyazheniya',
      'kolloidnaya-himiya/osobye-svojstva-poverhnosti-tverdogo-tela',
      'kolloidnaya-himiya/adsorbciya',
      'kolloidnaya-himiya/teorii-adsorbcii',
      'kolloidnaya-himiya/klassifikatsiya-sorbentov',
    ]
  }]
};

module.exports = sidebars;
