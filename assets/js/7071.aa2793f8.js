"use strict";(self.webpackChunkonlearning=self.webpackChunkonlearning||[]).push([[7071],{7306:(e,t,a)=>{a.d(t,{Z:()=>b});var s=a(67294),n=a(36905),r=a(74618),l=a(13488),i=a(34791),o=a(97325),c=a(16550),m=a(69003);function d(e){const{pathname:t}=(0,c.TH)();return(0,s.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,m.Mg)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var g=a(85893);function h(e){let{sidebar:t}=e;const a=d(t.items);return(0,g.jsx)("aside",{className:"col col--3",children:(0,g.jsxs)("nav",{className:(0,n.Z)(u.sidebar,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,g.jsx)("div",{className:(0,n.Z)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,g.jsx)("ul",{className:(0,n.Z)(u.sidebarItemList,"clean-list"),children:a.map((e=>(0,g.jsx)("li",{className:u.sidebarItem,children:(0,g.jsx)(i.Z,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var x=a(53086);function j(e){let{sidebar:t}=e;const a=d(t.items);return(0,g.jsx)("ul",{className:"menu__list",children:a.map((e=>(0,g.jsx)("li",{className:"menu__list-item",children:(0,g.jsx)(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function p(e){return(0,g.jsx)(x.Zo,{component:j,props:e})}function f(e){let{sidebar:t}=e;const a=(0,l.i)();return t?.items.length?"mobile"===a?(0,g.jsx)(p,{sidebar:t}):(0,g.jsx)(h,{sidebar:t}):null}function b(e){const{sidebar:t,toc:a,children:s,...l}=e,i=t&&t.items.length>0;return(0,g.jsx)(r.Z,{...l,children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)(f,{sidebar:t}),(0,g.jsx)("main",{className:(0,n.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),children:s}),a&&(0,g.jsx)("div",{className:"col col--2",children:a})]})})})}},61570:(e,t,a)=>{a.d(t,{Z:()=>y});a(67294);var s=a(36905),n=a(79107),r=a(85893);function l(e){let{children:t,className:a}=e;return(0,r.jsx)("article",{className:a,children:t})}var i=a(34791);const o={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:l}=(0,n.C)(),{permalink:c,title:m}=a,d=l?"h1":"h2";return(0,r.jsx)(d,{className:(0,s.Z)(o.title,t),children:l?m:(0,r.jsx)(i.Z,{to:c,children:m})})}var m=a(97325),d=a(23777),u=a(53991);const g={container:"container_mt6G"};function h(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,d.c)();return t=>{const a=Math.ceil(t);return e(a,(0,m.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,r.jsx)(r.Fragment,{children:a(t)})}function x(e){let{date:t,formattedDate:a}=e;return(0,r.jsx)("time",{dateTime:t,children:a})}function j(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function p(e){let{className:t}=e;const{metadata:a}=(0,n.C)(),{date:l,readingTime:i}=a,o=(0,u.P)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,s.Z)(g.container,"margin-vert--md",t),children:[(0,r.jsx)(x,{date:l,formattedDate:(c=l,o.format(new Date(c)))}),void 0!==i&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j,{}),(0,r.jsx)(h,{readingTime:i})]})]});var c}function f(e){return e.href?(0,r.jsx)(i.Z,{...e}):(0,r.jsx)(r.Fragment,{children:e.children})}function b(e){let{author:t,className:a}=e;const{name:n,title:l,url:i,imageURL:o,email:c}=t,m=i||c&&`mailto:${c}`||void 0;return(0,r.jsxs)("div",{className:(0,s.Z)("avatar margin-bottom--sm",a),children:[o&&(0,r.jsx)(f,{href:m,className:"avatar__photo-link",children:(0,r.jsx)("img",{className:"avatar__photo",src:o,alt:n})}),n&&(0,r.jsxs)("div",{className:"avatar__intro",children:[(0,r.jsx)("div",{className:"avatar__name",children:(0,r.jsx)(f,{href:m,children:(0,r.jsx)("span",{children:n})})}),l&&(0,r.jsx)("small",{className:"avatar__subtitle",children:l})]})]})}const v={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function N(e){let{className:t}=e;const{metadata:{authors:a},assets:l}=(0,n.C)();if(0===a.length)return null;const i=a.every((e=>{let{name:t}=e;return!t}));return(0,r.jsx)("div",{className:(0,s.Z)("margin-top--md margin-bottom--sm",i?v.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,r.jsx)("div",{className:(0,s.Z)(!i&&"col col--6",i?v.imageOnlyAuthorCol:v.authorCol),children:(0,r.jsx)(b,{author:{...e,imageURL:l.authorsImageUrls[t]??e.imageURL}})},t)))})}function _(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(c,{}),(0,r.jsx)(p,{}),(0,r.jsx)(N,{})]})}var Z=a(63905),k=a(20641);function P(e){let{children:t,className:a}=e;const{isBlogPostPage:l}=(0,n.C)();return(0,r.jsx)("div",{id:l?Z.blogPostContainerID:void 0,className:(0,s.Z)("markdown",a),children:(0,r.jsx)(k.Z,{children:t})})}var C=a(23702),I=a(53669),w=a(74597);function T(){return(0,r.jsx)("b",{children:(0,r.jsx)(m.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function L(e){const{blogPostTitle:t,...a}=e;return(0,r.jsx)(i.Z,{"aria-label":(0,m.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,r.jsx)(T,{})})}function R(){const{metadata:e,isBlogPostPage:t}=(0,n.C)(),{tags:a,title:l,editUrl:i,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:m}=e,d=!t&&o,u=a.length>0;if(!(u||d||i))return null;if(t){const e=!!(i||m||c);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,r.jsx)("div",{className:(0,s.Z)("row","margin-top--sm",C.k.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(w.Z,{tags:a})})}),e&&(0,r.jsx)(I.Z,{className:(0,s.Z)("margin-top--sm",C.k.blog.blogFooterEditMetaRow),editUrl:i,lastUpdatedAt:m,lastUpdatedBy:c})]})}return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,r.jsx)("div",{className:(0,s.Z)("col",{"col--9":d}),children:(0,r.jsx)(w.Z,{tags:a})}),d&&(0,r.jsx)("div",{className:(0,s.Z)("col text--right",{"col--3":u}),children:(0,r.jsx)(L,{blogPostTitle:l,to:e.permalink})})]})}function y(e){let{children:t,className:a}=e;const i=function(){const{isBlogPostPage:e}=(0,n.C)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(l,{className:(0,s.Z)(i,a),children:[(0,r.jsx)(_,{}),(0,r.jsx)(P,{children:t}),(0,r.jsx)(R,{})]})}},23672:(e,t,a)=>{a.d(t,{Z:()=>l});a(67294);var s=a(36905),n=a(34791),r=a(85893);function l(e){const{permalink:t,title:a,subLabel:l,isNext:i}=e;return(0,r.jsxs)(n.Z,{className:(0,s.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,r.jsx)("div",{className:"pagination-nav__label",children:a})]})}},53852:(e,t,a)=>{a.d(t,{Z:()=>i});a(67294);var s=a(36905),n=a(34791);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=a(85893);function i(e){let{permalink:t,label:a,count:i,description:o}=e;return(0,l.jsxs)(n.Z,{href:t,title:o,className:(0,s.Z)(r.tag,i?r.tagWithCount:r.tagRegular),children:[a,i&&(0,l.jsx)("span",{children:i})]})}},74597:(e,t,a)=>{a.d(t,{Z:()=>o});a(67294);var s=a(36905),n=a(97325),r=a(53852);const l={tags:"tags_jXut",tag:"tag_QGVx"};var i=a(85893);function o(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,s.Z)(l.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,i.jsx)("li",{className:l.tag,children:(0,i.jsx)(r.Z,{...e})},e.permalink)))})]})}},79107:(e,t,a)=>{a.d(t,{C:()=>o,n:()=>i});var s=a(67294),n=a(43768),r=a(85893);const l=s.createContext(null);function i(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const i=function(e){let{content:t,isBlogPostPage:a}=e;return(0,s.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return(0,r.jsx)(l.Provider,{value:i,children:t})}function o(){const e=(0,s.useContext)(l);if(null===e)throw new n.i6("BlogPostProvider");return e}},23777:(e,t,a)=>{a.d(t,{c:()=>c});var s=a(67294),n=a(39962);const r=["zero","one","two","few","many","other"];function l(e){return r.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=o();return{selectMessage:(t,a)=>function(e,t,a){const s=e.split("|");if(1===s.length)return s[0];s.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const n=a.select(t),r=a.pluralForms.indexOf(n);return s[Math.min(r,s.length-1)]}(a,t,e)}}}}]);