(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return h});var a=n(0),i=n.n(a),r=n(153),o=n.n(r),l=n(151),c=n.n(l),s=n(159),m=n(160),d=n(163),u=n(186),g=n(164),h="3966730884";t.default=function(e){var t=e.data,n=t.contentfulPage,a=n.title,r=n.slug,l=n.body,h=t.contentfulPage;return i.a.createElement(s.a,null,i.a.createElement(o.a,null,i.a.createElement("title",null,a+" - "+c.a.siteTitle)),i.a.createElement(g.a,{pagePath:r,postNode:h,pageSEO:!0}),i.a.createElement(m.a,null,i.a.createElement(d.a,null,a),i.a.createElement(u.a,{body:l})))}},151:function(e,t){e.exports={siteTitle:"Rozet",siteTitleAlt:"Özel Rozet Aile Danışma Merkezi",publisher:"Rozet",siteDescription:"A starter template to build amazing static websites with Gatsby, Contentful and Netlify",siteUrl:"https://www.rozetdanismanlik.com",postsPerHomePage:7,postsPerPage:6,author:"Tahsin Kocaman",authorUrl:"https://github.com/t5k6",userTwitter:"@twitter",shortTitle:"Rozet App",shareImage:"/logos/share.jpg",shareImageWidth:900,shareImageHeight:600,siteLogo:"/logos/logo.png",backgroundColor:"#e9e9e9",themeColor:"#121212",copyright:"Copyright © 2018 Rozet"}},152:function(e,t,n){var a;e.exports=(a=n(157))&&a.default||a},154:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return g}),n.d(t,"StaticQuery",function(){return h});var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(150),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(26);n.d(t,"waitForRouteChange",function(){return s.c});var m=n(152),d=n.n(m);n.d(t,"PageRenderer",function(){return d.a});var u=n(37);n.d(t,"parsePath",function(){return u.a});var g=i.a.createContext({}),h=function(e){return i.a.createElement(g.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},156:function(e,t,n){e.exports=n.p+"static/favicon-47f075d2e2aa8a911521a734e22d3851.ico"},157:function(e,t,n){"use strict";n.r(t);n(38);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(50),c=n(1),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},158:function(e,t,n){e.exports=n.p+"static/logo-32cffae0f976eba89d3a4690a63cdb85.png"},159:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(149),o=n(153),l=n.n(o),c=n(156),s=n.n(c),m=n(166),d=n.n(m);function u(){var e=d()(['\n  /* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n  */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n\n  /* Added to Fix Footer to bottom of viewport */\n  html, body {\n    height: 100%;\n  }\n  .siteRoot {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n  }\n  .siteContent {\n    flex: 1 0 auto;\n  }\n  footer {\n    width: 100%;\n  }\n\n  /* End Fix to Place Footer on Bottom of Viewport */\n\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n\n  @media screen and (min-width: 35em) {\n    html {\n      margin-right: calc(-100vw + 100%);\n      overflow-x: hidden;\n    }\n  }\n\n  ol, ul, li {\n    list-style: none;\n  }\n\n  blockquote, q {\n    quotes: none;\n  }\n\n  blockquote::before, blockquote::after,\n  q::before, q::after {\n    content: \'\';\n    content: none;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  body {\n    background: white;\n    line-height: 1;\n    font-size: 100%;\n    font-variant-ligatures: none;\n    text-rendering: optimizeLegibility;\n    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;\n    font-weight: 400;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  }\n\n  img {\n    display: block;\n  \twidth: 100%;\n  \theight: auto;\n  }\n']);return u=function(){return e},e}Object(r.c)(u());var g={colors:{base:"#121212",secondary:"#e9e9e9",tertiary:"#f3f3f3",highlight:"#5b8bf7"},sizes:{maxWidth:"1050px",maxWidthCentered:"650px"},responsive:{small:"35em",medium:"50em",large:"70em"}},h=n(151),p=n.n(h),f=n(154),b=n(158),y=n.n(b),w=r.b.header.withConfig({displayName:"Menu__Header",componentId:"wkpo2c-0"})(["background:",";width:100%;padding:1em 0;"],function(e){return e.theme.colors.base}),E=r.b.nav.withConfig({displayName:"Menu__Nav",componentId:"wkpo2c-1"})(["width:100%;height:20px;max-width:",";margin:0 auto;padding:0 1.5em;.logo{max-width:240px;margin-top:-7px;border:1px solid lightsteelblue;background:rgba(255,255,255,0.9);}ul{display:flex;justify-content:space-between;}li{display:inline-block;margin-left:1em;&:first-child{position:relative;margin:0;flex-basis:100%;}}a{text-decoration:none;color:DarkGray;font-weight:600;transition:all 0.2s;&:hover{color:yellow;}}"],function(e){return e.theme.sizes.maxWidth}),I={color:"white"},v=function(){return i.a.createElement(w,null,i.a.createElement(E,null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(f.Link,{to:"/",activeStyle:I},i.a.createElement("img",{className:"logo",src:y.a}))),i.a.createElement("li",null,i.a.createElement(f.Link,{to:"/",activeStyle:I},"AnaSayfa")),i.a.createElement("li",null,i.a.createElement(f.Link,{to:"/hakkimizda/",activeStyle:I},"Hakkımızda")),i.a.createElement("li",null,i.a.createElement(f.Link,{to:"/ekibimiz/",activeStyle:I},"Ekibimiz")),i.a.createElement("li",null,i.a.createElement(f.Link,{to:"/hizmetlerimiz/",activeStyle:I},"Hizmetlerimiz")),i.a.createElement("li",null,i.a.createElement(f.Link,{to:"/contact/",activeStyle:I},"İletişim")))))},k=(n(155),n(167)),x=r.b.footer.withConfig({displayName:"Footer__Wrapper",componentId:"sc-1n6n1ir-0"})(['background:#222 url("data:image/svg+xml;base64,PHN2ZyBpZD0icGF0dGVybiIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiPgogIDxkZWZzPgogICAgPHBhdHRlcm4gaWQ9ImhhdGNoIiB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjQiIGhlaWdodD0iNCIgZmlsbD0iIzMzMyIgLz4KICAgICAgPHJlY3QgeD0iMiIgeT0iMCIgd2lkdGg9IjIiIGhlaWdodD0iMiIgZmlsbD0iIzNCM0IzQiIgLz4KICAgICAgPHJlY3QgeD0iMCIgeT0iMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIgZmlsbD0iIzNCM0IzQiIgLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3QgZmlsbD0idXJsKCNoYXRjaCkiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIC8+Cjwvc3ZnPgo=");position:relative;color:#bcbcbc;margin-bottom:0;text-align:center;padding:0 5em;hr{border-top:1px solid black;border-bottom:1px solid #575757;margin:1px 0px 10px 0px;-webkit-margin-before:0;}']),z=r.b.ul.withConfig({displayName:"Footer__List",componentId:"sc-1n6n1ir-1"})(["display:flex;flex-flow:row wrap;justify-content:space-between;align-items:flex-start;width:100%;margin:0 1.5em;"]),C=r.b.li.withConfig({displayName:"Footer__Item",componentId:"sc-1n6n1ir-2"})(["display:inline-block;padding:0.25em 0;@media screen and (min-width:","){width:auto;}a{font-weight:600;margin-right:0.5em;transition:all 0.2s;color:",";&:hover{color:",";}}"],function(e){return e.theme.responsive.small},function(e){return e.theme.colors.base},function(e){return e.theme.colors.highlight}),P=function(){return i.a.createElement(x,null,i.a.createElement("hr",null),i.a.createElement(z,null,i.a.createElement(C,null,i.a.createElement("a",{href:"https://www.contentful.com/",rel:"nofollow noopener noreferrer",target:"_blank"},i.a.createElement("img",{src:"https://images.ctfassets.net/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg",style:{width:"100px"},alt:"Powered by Contentful"}))),i.a.createElement(C,null,"Adresimiz: Altınşehir Mahallesi 205. Sokak No:38/1 Nilüfer Bursa"),i.a.createElement(C,null,i.a.createElement("a",{href:"https://www.instagram.com/rozetdanismanlik/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(k.b,{size:"40"})),i.a.createElement("a",{href:"https://www.facebook.com/pg/rozetdanismanlik/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(k.a,{size:"40"})))))};t.a=function(e){var t=e.children;return i.a.createElement("div",{className:"siteRoot"},i.a.createElement(l.a,null,i.a.createElement("title",null,p.a.siteTitle),i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),i.a.createElement("link",{rel:"icon",href:s.a}),i.a.createElement("meta",{name:"description",content:p.a.siteDescription}),i.a.createElement("meta",{property:"og:title",content:p.a.siteTitle}),i.a.createElement("meta",{property:"og:url",content:p.a.siteUrl}),i.a.createElement("meta",{property:"og:locale",content:"tr_TR"}),i.a.createElement("meta",{property:"og:type",content:"website"}),i.a.createElement("meta",{property:"og:site_name",content:p.a.siteTitle}),i.a.createElement("link",{className:"gf-headline",href:"https://fonts.googleapis.com/css?family=Pacifico:400&subset=",rel:"stylesheet",type:"text/css"})),i.a.createElement(r.a,{theme:g},i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"siteContent"},i.a.createElement(v,null),t),i.a.createElement(P,null))))}},160:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(149).b.section.withConfig({displayName:"Container__Wrapper",componentId:"sc-18g01lm-0"})(["margin:0 auto;max-width:",";padding:3em 1.5em 2em;"],function(e){return e.theme.sizes.maxWidth});t.a=function(e){return i.a.createElement(r,null,e.children)}},163:function(e,t,n){"use strict";n(155);var a=n(0),i=n.n(a),r=n(149).b.h1.withConfig({displayName:"PageTitle__Title",componentId:"sc-9e4mtp-0"})(["font-size:",";text-transform:capitalize;font-weight:600;text-align:center;margin:0 0 3rem 0;margin:",";line-height:1.2;span{margin:0 0 0 0.25em;}a{transition:all 0.2s;color:",";&:hover{color:",";}}"],function(e){return e.small?"2em":"3em"},function(e){return e.small?"1rem 0 4rem 0":"0 0 3rem 0"},function(e){return e.theme.colors.base},function(e){return e.theme.colors.highlight});t.a=function(e){return i.a.createElement(r,{small:e.small},e.children)}},164:function(e,t,n){"use strict";var a=n(7),i=n.n(a),r=n(0),o=n.n(r),l=n(153),c=n.n(l),s=n(151),m=n.n(s),d=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e,t,n,a,i,r,l=this.props,s=l.postNode,d=l.pagePath,u=l.postSEO,g=l.pageSEO,h=l.customTitle;e=m.a.siteTitle,t=m.a.siteDescription,n=m.a.siteUrl+m.a.shareImage,a=m.a.shareImageWidth,i=m.a.shareImageHeight,r=m.a.siteUrl,h&&(e=s.title,r=m.a.siteUrl+"/"+d+"/"),(u||g)&&(e=s.title,t=null===s.metaDescription?s.body.childMarkdownRemark.excerpt:s.metaDescription.internal.content,r=m.a.siteUrl+"/"+d+"/"),u&&(n="https:"+s.heroImage.ogimg.src,a=s.heroImage.ogimg.width,i=s.heroImage.ogimg.height);var p=[{"@context":"http://schema.org","@type":"WebSite",url:m.a.siteUrl,name:m.a.siteTitle,alternateName:m.a.siteTitleAlt?m.a.siteTitleAlt:""}];return u&&p.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":m.a.siteUrl,name:m.a.siteTitle}},{"@type":"ListItem",position:2,item:{"@id":r,name:e}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:r,name:e,alternateName:m.a.siteTitleAlt?m.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:n,width:a,height:i},author:{"@type":"Person",name:m.a.author,url:m.a.authorUrl},publisher:{"@type":"Organization",name:m.a.publisher,url:m.a.siteUrl},datePublished:s.publishDateISO,mainEntityOfPage:r}),g&&p.push({"@context":"http://schema.org","@type":"WebPage",url:r,name:e}),o.a.createElement(c.a,null,o.a.createElement("meta",{name:"image",content:n}),o.a.createElement("meta",{name:"description",content:t}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(p)),o.a.createElement("meta",{property:"og:title",content:e}),u?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:url",content:r}),o.a.createElement("meta",{property:"og:image",content:n}),o.a.createElement("meta",{property:"og:image:width",content:a}),o.a.createElement("meta",{property:"og:image:height",content:i}),o.a.createElement("meta",{property:"og:description",content:t}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:m.a.userTwitter?m.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:e}),o.a.createElement("meta",{name:"twitter:image",content:n}),o.a.createElement("meta",{name:"twitter:description",content:t}))},t}(r.Component);t.a=d},186:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(149);n(187);var o=r.b.div.withConfig({displayName:"PageBody__Body",componentId:"sc-2wwtab-0"})(["margin:0 auto;max-width:",";box-shadow:inset 0 0 1px #000000;padding:2em 5em;border-radius:25px;h1,h2,h3{font-weight:600;line-height:1.25;margin:0 0 1rem 0;text-transform:capitalize;}h1{font-size:1.5em;}h2{font-size:1.25em;}h3{font-size:1em;}p{line-height:1.6;margin:0 0 2em 0;}a{transition:0.2s;color:",";&:hover{color:",";}}del{text-decoration:line-through;}strong{font-weight:600;}em{font-style:italic;}ul,ol{margin:0 0 2em 0;}ul{li{list-style:disc;list-style-position:inside;line-height:1.25;&:last-child{margin:0;}}}ol{li{list-style:decimal;list-style-position:inside;line-height:1.25;&:last-child{margin:0;}}}hr{border-style:solid;border-color:",";margin:0 0 2em 0;}blockquote{font-style:italic;border-left:4px solid ",";padding:0 0 0 0.5em;}pre{margin:0 0 2em 0;border-radius:2px;background:"," !important;span{background:inherit !important;}}"],function(e){return e.theme.sizes.maxWidthCentered},function(e){return e.theme.colors.base},function(e){return e.theme.colors.highlight},function(e){return e.theme.colors.secondary},function(e){return e.theme.colors.secondary},function(e){return e.theme.colors.secondary});t.a=function(e){return i.a.createElement(o,{dangerouslySetInnerHTML:{__html:e.body.childMarkdownRemark.html}})}},187:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-page-js-ff9dad7a0a8ea8bb139b.js.map