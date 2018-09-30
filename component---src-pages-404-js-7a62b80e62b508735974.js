(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{144:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(149),o=n(153),l=n.n(o),c=n(159),s=r.b.div.withConfig({displayName:"sc-404__Box",componentId:"y3m7qn-0"})(["margin:0 auto;padding:3em 1.5em 2em;text-align:center;"]),m=r.b.p.withConfig({displayName:"sc-404__Text",componentId:"y3m7qn-1"})(["text-align:center;line-height:1.6;margin:0 0 1em 0;"]),d=r.b.h1.withConfig({displayName:"sc-404__Title",componentId:"y3m7qn-2"})(["font-size:3em;text-transform:capitalize;font-weight:600;margin:0 0 3rem 0;line-height:1.2;"]);t.default=function(){return i.a.createElement(c.a,null,i.a.createElement(l.a,null,i.a.createElement("title",null,"404 - Page Not Found"),i.a.createElement("meta",{name:"description",content:"Page not found"})),i.a.createElement(s,null,i.a.createElement(d,null,"Error 404"),i.a.createElement(m,null,"Sorry, that page can't be found")))}},151:function(e,t){e.exports={siteTitle:"GCN",siteTitleAlt:"GCN Gatsby Starter",publisher:"Publisher named GCN",siteDescription:"A starter template to build amazing static websites with Gatsby, Contentful and Netlify",siteUrl:"https://gcn.netlify.com",postsPerHomePage:7,postsPerPage:6,author:"GCN User",authorUrl:"https://gcn.netlify.com/about/",userTwitter:"@twitter",shortTitle:"GCN App",shareImage:"/logos/share.jpg",shareImageWidth:900,shareImageHeight:600,siteLogo:"/logos/logo-512.png",backgroundColor:"#e9e9e9",themeColor:"#121212",copyright:"Copyright © 2018 GCN User"}},152:function(e,t,n){var a;e.exports=(a=n(157))&&a.default||a},154:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return g}),n.d(t,"StaticQuery",function(){return p});var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(150),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(26);n.d(t,"waitForRouteChange",function(){return s.c});var m=n(152),d=n.n(m);n.d(t,"PageRenderer",function(){return d.a});var u=n(37);n.d(t,"parsePath",function(){return u.a});var g=i.a.createContext({}),p=function(e){return i.a.createElement(g.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},156:function(e,t,n){e.exports=n.p+"static/favicon-47f075d2e2aa8a911521a734e22d3851.ico"},157:function(e,t,n){"use strict";n.r(t);n(38);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(50),c=n(1),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},158:function(e,t,n){e.exports=n.p+"static/logo-32cffae0f976eba89d3a4690a63cdb85.png"},159:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(149),o=n(153),l=n.n(o),c=n(156),s=n.n(c),m=n(166),d=n.n(m);function u(){var e=d()(['\n  /* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n  */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n\n  /* Added to Fix Footer to bottom of viewport */\n  html, body {\n    height: 100%;\n  }\n  .siteRoot {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n  }\n  .siteContent {\n    flex: 1 0 auto;\n  }\n  footer {\n    width: 100%;\n  }\n\n  /* End Fix to Place Footer on Bottom of Viewport */\n\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n\n  @media screen and (min-width: 35em) {\n    html {\n      margin-right: calc(-100vw + 100%);\n      overflow-x: hidden;\n    }\n  }\n\n  ol, ul, li {\n    list-style: none;\n  }\n\n  blockquote, q {\n    quotes: none;\n  }\n\n  blockquote::before, blockquote::after,\n  q::before, q::after {\n    content: \'\';\n    content: none;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  body {\n    background: white;\n    line-height: 1;\n    font-size: 100%;\n    font-variant-ligatures: none;\n    text-rendering: optimizeLegibility;\n    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;\n    font-weight: 400;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  }\n\n  img {\n    display: block;\n  \twidth: 100%;\n  \theight: auto;\n  }\n']);return u=function(){return e},e}Object(r.c)(u());var g={colors:{base:"#121212",secondary:"#e9e9e9",tertiary:"#f3f3f3",highlight:"#5b8bf7"},sizes:{maxWidth:"1050px",maxWidthCentered:"650px"},responsive:{small:"35em",medium:"50em",large:"70em"}},p=n(151),h=n.n(p),f=n(154),b=n(158),y=n.n(b),w=r.b.header.withConfig({displayName:"Menu__Header",componentId:"wkpo2c-0"})(["background:",";width:100%;padding:1em 0;"],function(e){return e.theme.colors.base}),I=r.b.nav.withConfig({displayName:"Menu__Nav",componentId:"wkpo2c-1"})(["width:100%;height:20px;max-width:",";margin:0 auto;padding:0 1.5em;.logo{max-width:240px;margin-top:-7px;border:1px solid lightsteelblue;background:rgba(255,255,255,0.9);}ul{display:flex;justify-content:space-between;}li{display:inline-block;margin-left:1em;&:first-child{position:relative;margin:0;flex-basis:100%;}}a{text-decoration:none;color:DarkGray;font-weight:600;transition:all 0.2s;&:hover{color:yellow;}}"],function(e){return e.theme.sizes.maxWidth}),E={color:"white"},v=function(){return i.a.createElement(w,null,i.a.createElement(I,null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(f.Link,{to:"/",activeStyle:E},i.a.createElement("img",{className:"logo",src:y.a}))),i.a.createElement("li",null,i.a.createElement(f.Link,{to:"/",activeStyle:E},"AnaSayfa")),i.a.createElement("li",null,i.a.createElement(f.Link,{to:"/hakkimizda/",activeStyle:E},"Hakkımızda")),i.a.createElement("li",null,i.a.createElement(f.Link,{to:"/ekibimiz/",activeStyle:E},"Ekibimiz")),i.a.createElement("li",null,i.a.createElement(f.Link,{to:"/hizmetlerimiz/",activeStyle:E},"Hizmetlerimiz")),i.a.createElement("li",null,i.a.createElement(f.Link,{to:"/contact/",activeStyle:E},"İletişim")))))},k=(n(155),n(167)),x=r.b.footer.withConfig({displayName:"Footer__Wrapper",componentId:"sc-1n6n1ir-0"})(['background:#222 url("data:image/svg+xml;base64,PHN2ZyBpZD0icGF0dGVybiIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiPgogIDxkZWZzPgogICAgPHBhdHRlcm4gaWQ9ImhhdGNoIiB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjQiIGhlaWdodD0iNCIgZmlsbD0iIzMzMyIgLz4KICAgICAgPHJlY3QgeD0iMiIgeT0iMCIgd2lkdGg9IjIiIGhlaWdodD0iMiIgZmlsbD0iIzNCM0IzQiIgLz4KICAgICAgPHJlY3QgeD0iMCIgeT0iMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIgZmlsbD0iIzNCM0IzQiIgLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3QgZmlsbD0idXJsKCNoYXRjaCkiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIC8+Cjwvc3ZnPgo=");position:relative;color:#bcbcbc;margin-bottom:0;text-align:center;padding:0 5em;hr{border-top:1px solid black;border-bottom:1px solid #575757;margin:1px 0px 10px 0px;-webkit-margin-before:0;}']),C=r.b.ul.withConfig({displayName:"Footer__List",componentId:"sc-1n6n1ir-1"})(["display:flex;flex-flow:row wrap;justify-content:space-between;align-items:flex-start;width:100%;margin:0 1.5em;"]),z=r.b.li.withConfig({displayName:"Footer__Item",componentId:"sc-1n6n1ir-2"})(["display:inline-block;padding:0.25em 0;@media screen and (min-width:","){width:auto;}a{font-weight:600;margin-right:0.5em;transition:all 0.2s;color:",";&:hover{color:",";}}"],function(e){return e.theme.responsive.small},function(e){return e.theme.colors.base},function(e){return e.theme.colors.highlight}),N=function(){return i.a.createElement(x,null,i.a.createElement("hr",null),i.a.createElement(C,null,i.a.createElement(z,null,i.a.createElement("a",{href:"https://www.contentful.com/",rel:"nofollow noopener noreferrer",target:"_blank"},i.a.createElement("img",{src:"https://images.ctfassets.net/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg",style:{width:"100px"},alt:"Powered by Contentful"}))),i.a.createElement(z,null,"Adresimiz: Altınşehir Mahallesi 205. Sokak No:38/1 Nilüfer Bursa"),i.a.createElement(z,null,i.a.createElement("a",{href:"https://www.instagram.com/rozetdanismanlik/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(k.b,{size:"40"})),i.a.createElement("a",{href:"https://www.facebook.com/pg/rozetdanismanlik/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(k.a,{size:"40"})))))};t.a=function(e){var t=e.children;return i.a.createElement("div",{className:"siteRoot"},i.a.createElement(l.a,null,i.a.createElement("title",null,h.a.siteTitle),i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),i.a.createElement("link",{rel:"icon",href:s.a}),i.a.createElement("meta",{name:"description",content:h.a.siteDescription}),i.a.createElement("meta",{property:"og:title",content:h.a.siteTitle}),i.a.createElement("meta",{property:"og:url",content:h.a.siteUrl}),i.a.createElement("meta",{property:"og:locale",content:"tr_TR"}),i.a.createElement("meta",{property:"og:type",content:"website"}),i.a.createElement("meta",{property:"og:site_name",content:h.a.siteTitle}),i.a.createElement("link",{className:"gf-headline",href:"https://fonts.googleapis.com/css?family=Pacifico:400&subset=",rel:"stylesheet",type:"text/css"})),i.a.createElement(r.a,{theme:g},i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"siteContent"},i.a.createElement(v,null),t),i.a.createElement(N,null))))}}}]);
//# sourceMappingURL=component---src-pages-404-js-7a62b80e62b508735974.js.map