(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{147:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(153),o=n.n(r),l=n(151),s=n.n(l),c=n(159),d=(n(155),n(185)),u=n.n(d),m=n(149),h=m.b.section.withConfig({displayName:"Hero__Wrapper",componentId:"sc-1hk88wk-0"})(["position:relative;min-height:300px;"]),p=Object(m.b)(u.a).withConfig({displayName:"Hero__BgImg",componentId:"sc-1hk88wk-1"})(["position:absolute;top:0;left:0;width:100%;z-index:-1;min-height:300px;height:auto;@media (min-width:","){height:",";}& > img{object-fit:"," !important;object-position:"," !important;}&::before{content:'';background:rgba(0,0,0,0.25);position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;z-index:1;}"],function(e){return e.theme.responsive.small},function(e){return e.height||"auto"},function(e){return e.fit||"cover"},function(e){return e.position||"50% 50%"}),g=m.b.h1.withConfig({displayName:"Hero__Title",componentId:"sc-1hk88wk-2"})(["font-size:3em;text-transform:capitalize;font-weight:600;position:absolute;width:100%;max-width:",";padding:0 1rem;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;color:white;"],function(e){return e.theme.sizes.maxWidthCentered}),f=function(e){return i.a.createElement(h,null,i.a.createElement(p,{height:e.height,fluid:e.image.fluid,backgroundColor:"#eeeeee"}),i.a.createElement(g,null,e.title),i.a.createElement("h1",null,"Sitemiz yapım aşamasında  ",i.a.createElement("br",null),i.a.createElement("i",null,"Çok yakında sizinle birlikte olacağız!")))},b=n(160),y=n(186),w=(n(51),n(154)),E=m.b.ul.withConfig({displayName:"TagList__List",componentId:"sc-1gzb9be-0"})(["margin:0 auto 2em auto;max-width:",";"],function(e){return e.theme.sizes.maxWidthCentered}),v=m.b.li.withConfig({displayName:"TagList__Tag",componentId:"sc-1gzb9be-1"})(["display:inline-block;a{transition:0.2s;background:",";padding:0.5em;border-radius:2px;text-transform:capitalize;margin:0 0.5em 0 0;text-decoration:none;color:",";border:1px solid ",";&:hover{background:",";}}"],function(e){return e.theme.colors.tertiary},function(e){return e.theme.colors.base},function(e){return e.theme.colors.secondary},function(e){return e.theme.colors.secondary}),I=function(e){return i.a.createElement(E,null,e.tags.map(function(e){return i.a.createElement(v,{key:e.id},i.a.createElement(w.Link,{to:"/tag/"+e.slug+"/"},e.title))}))},k=m.b.div.withConfig({displayName:"PostLinks__Wrapper",componentId:"val61k-0"})(["display:flex;justify-content:space-between;margin:0 auto;max-width:",";a{background:",";color:white;padding:1em;border-radius:2px;text-decoration:none;transition:0.2s;&:hover{background:",";}}"],function(e){return e.theme.sizes.maxWidthCentered},function(e){return e.theme.colors.base},function(e){return e.theme.colors.highlight}),x=Object(m.b)(w.Link).withConfig({displayName:"PostLinks__PreviousLink",componentId:"val61k-1"})(["margin-right:auto;order:1;"]),C=Object(m.b)(w.Link).withConfig({displayName:"PostLinks__NextLink",componentId:"val61k-2"})(["margin-left:auto;order:2;"]),z=function(e){return i.a.createElement(k,null,e.previous&&i.a.createElement(x,{to:"/"+e.previous.slug+"/"},"← Prev Post"),e.next&&i.a.createElement(C,{to:"/"+e.next.slug+"/"},"Next Post →"))},S=m.b.div.withConfig({displayName:"PostDate__Wrapper",componentId:"ktggmu-0"})(["margin:0 auto 2em;max-width:",";"],function(e){return e.theme.sizes.maxWidthCentered}),L=m.b.p.withConfig({displayName:"PostDate__Date",componentId:"ktggmu-1"})(["display:inline-block;span{font-weight:600;}"]),N=function(e){return i.a.createElement(S,null,i.a.createElement(L,null,i.a.createElement("span",null,"Published:")," ",e.date))},_=n(164);n.d(t,"query",function(){return P});var P="3654209428";t.default=function(e){var t=e.data,n=e.pageContext,a=t.contentfulPost,r=a.title,l=a.slug,d=a.heroImage,u=a.body,m=a.publishDate,h=a.tags,p=t.contentfulPost,g=n.prev,w=n.next;return i.a.createElement(c.a,null,i.a.createElement(o.a,null,i.a.createElement("title",null,r+" - "+s.a.siteTitle)),i.a.createElement(_.a,{pagePath:l,postNode:p,postSEO:!0}),i.a.createElement(f,{title:r,image:d,height:"50vh"}),i.a.createElement(b.a,null,h&&i.a.createElement(I,{tags:h}),i.a.createElement(N,{date:m}),i.a.createElement(y.a,{body:u}),i.a.createElement(z,{previous:g,next:w})))}},151:function(e,t){e.exports={siteTitle:"GCN",siteTitleAlt:"GCN Gatsby Starter",publisher:"Publisher named GCN",siteDescription:"A starter template to build amazing static websites with Gatsby, Contentful and Netlify",siteUrl:"https://gcn.netlify.com",postsPerHomePage:7,postsPerPage:6,author:"GCN User",authorUrl:"https://gcn.netlify.com/about/",userTwitter:"@twitter",shortTitle:"GCN App",shareImage:"/logos/share.jpg",shareImageWidth:900,shareImageHeight:600,siteLogo:"/logos/logo-512.png",backgroundColor:"#e9e9e9",themeColor:"#121212",copyright:"Copyright © 2018 GCN User"}},152:function(e,t,n){var a;e.exports=(a=n(157))&&a.default||a},154:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return h}),n.d(t,"StaticQuery",function(){return p});var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(150),s=n.n(l);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var c=n(26);n.d(t,"waitForRouteChange",function(){return c.c});var d=n(152),u=n.n(d);n.d(t,"PageRenderer",function(){return u.a});var m=n(37);n.d(t,"parsePath",function(){return m.a});var h=i.a.createContext({}),p=function(e){return i.a.createElement(h.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},156:function(e,t,n){e.exports=n.p+"static/favicon-47f075d2e2aa8a911521a734e22d3851.ico"},157:function(e,t,n){"use strict";n.r(t);n(38);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(50),s=n(1),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},158:function(e,t,n){e.exports=n.p+"static/logo-32cffae0f976eba89d3a4690a63cdb85.png"},159:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(149),o=n(153),l=n.n(o),s=n(156),c=n.n(s),d=n(166),u=n.n(d);function m(){var e=u()(['\n  /* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n  */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n\n  /* Added to Fix Footer to bottom of viewport */\n  html, body {\n    height: 100%;\n  }\n  .siteRoot {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n  }\n  .siteContent {\n    flex: 1 0 auto;\n  }\n  footer {\n    width: 100%;\n  }\n\n  /* End Fix to Place Footer on Bottom of Viewport */\n\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n\n  @media screen and (min-width: 35em) {\n    html {\n      margin-right: calc(-100vw + 100%);\n      overflow-x: hidden;\n    }\n  }\n\n  ol, ul, li {\n    list-style: none;\n  }\n\n  blockquote, q {\n    quotes: none;\n  }\n\n  blockquote::before, blockquote::after,\n  q::before, q::after {\n    content: \'\';\n    content: none;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  body {\n    background: white;\n    line-height: 1;\n    font-size: 100%;\n    font-variant-ligatures: none;\n    text-rendering: optimizeLegibility;\n    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;\n    font-weight: 400;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  }\n\n  img {\n    display: block;\n  \twidth: 100%;\n  \theight: auto;\n  }\n']);return m=function(){return e},e}Object(r.c)(m());var h={colors:{base:"#121212",secondary:"#e9e9e9",tertiary:"#f3f3f3",highlight:"#5b8bf7"},sizes:{maxWidth:"1050px",maxWidthCentered:"650px"},responsive:{small:"35em",medium:"50em",large:"70em"}},p=n(151),g=n.n(p),f=n(154),b=n(158),y=n.n(b),w=r.b.header.withConfig({displayName:"Menu__Header",componentId:"wkpo2c-0"})(["background:",";width:100%;padding:1em 0;"],function(e){return e.theme.colors.base}),E=r.b.nav.withConfig({displayName:"Menu__Nav",componentId:"wkpo2c-1"})(["width:100%;height:20px;max-width:",";margin:0 auto;padding:0 1.5em;.logo{max-width:240px;margin-top:-7px;border:1px solid lightsteelblue;background:rgba(255,255,255,0.9);}ul{display:flex;justify-content:space-between;}li{display:inline-block;margin-left:1em;&:first-child{position:relative;margin:0;flex-basis:100%;}}a{text-decoration:none;color:DarkGray;font-weight:600;transition:all 0.2s;&:hover{color:yellow;}}"],function(e){return e.theme.sizes.maxWidth}),v={color:"white"},I=function(){return i.a.createElement(w,null,i.a.createElement(E,null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(f.Link,{to:"/",activeStyle:v},i.a.createElement("img",{className:"logo",src:y.a}))),i.a.createElement("li",null,i.a.createElement(f.Link,{to:"/",activeStyle:v},"AnaSayfa")),i.a.createElement("li",null,i.a.createElement(f.Link,{to:"/hakkimizda/",activeStyle:v},"Hakkımızda")),i.a.createElement("li",null,i.a.createElement(f.Link,{to:"/ekibimiz/",activeStyle:v},"Ekibimiz")),i.a.createElement("li",null,i.a.createElement(f.Link,{to:"/hizmetlerimiz/",activeStyle:v},"Hizmetlerimiz")),i.a.createElement("li",null,i.a.createElement(f.Link,{to:"/contact/",activeStyle:v},"İletişim")))))},k=(n(155),n(167)),x=r.b.footer.withConfig({displayName:"Footer__Wrapper",componentId:"sc-1n6n1ir-0"})(['background:#222 url("data:image/svg+xml;base64,PHN2ZyBpZD0icGF0dGVybiIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiPgogIDxkZWZzPgogICAgPHBhdHRlcm4gaWQ9ImhhdGNoIiB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjQiIGhlaWdodD0iNCIgZmlsbD0iIzMzMyIgLz4KICAgICAgPHJlY3QgeD0iMiIgeT0iMCIgd2lkdGg9IjIiIGhlaWdodD0iMiIgZmlsbD0iIzNCM0IzQiIgLz4KICAgICAgPHJlY3QgeD0iMCIgeT0iMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIgZmlsbD0iIzNCM0IzQiIgLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3QgZmlsbD0idXJsKCNoYXRjaCkiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIC8+Cjwvc3ZnPgo=");position:relative;color:#bcbcbc;margin-bottom:0;text-align:center;padding:0 5em;hr{border-top:1px solid black;border-bottom:1px solid #575757;margin:1px 0px 10px 0px;-webkit-margin-before:0;}']),C=r.b.ul.withConfig({displayName:"Footer__List",componentId:"sc-1n6n1ir-1"})(["display:flex;flex-flow:row wrap;justify-content:space-between;align-items:flex-start;width:100%;margin:0 1.5em;"]),z=r.b.li.withConfig({displayName:"Footer__Item",componentId:"sc-1n6n1ir-2"})(["display:inline-block;padding:0.25em 0;@media screen and (min-width:","){width:auto;}a{font-weight:600;margin-right:0.5em;transition:all 0.2s;color:",";&:hover{color:",";}}"],function(e){return e.theme.responsive.small},function(e){return e.theme.colors.base},function(e){return e.theme.colors.highlight}),S=function(){return i.a.createElement(x,null,i.a.createElement("hr",null),i.a.createElement(C,null,i.a.createElement(z,null,i.a.createElement("a",{href:"https://www.contentful.com/",rel:"nofollow noopener noreferrer",target:"_blank"},i.a.createElement("img",{src:"https://images.ctfassets.net/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg",style:{width:"100px"},alt:"Powered by Contentful"}))),i.a.createElement(z,null,"Adresimiz: Altınşehir Mahallesi 205. Sokak No:38/1 Nilüfer Bursa"),i.a.createElement(z,null,i.a.createElement("a",{href:"https://www.instagram.com/rozetdanismanlik/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(k.b,{size:"40"})),i.a.createElement("a",{href:"https://www.facebook.com/pg/rozetdanismanlik/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(k.a,{size:"40"})))))};t.a=function(e){var t=e.children;return i.a.createElement("div",{className:"siteRoot"},i.a.createElement(l.a,null,i.a.createElement("title",null,g.a.siteTitle),i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),i.a.createElement("link",{rel:"icon",href:c.a}),i.a.createElement("meta",{name:"description",content:g.a.siteDescription}),i.a.createElement("meta",{property:"og:title",content:g.a.siteTitle}),i.a.createElement("meta",{property:"og:url",content:g.a.siteUrl}),i.a.createElement("meta",{property:"og:locale",content:"tr_TR"}),i.a.createElement("meta",{property:"og:type",content:"website"}),i.a.createElement("meta",{property:"og:site_name",content:g.a.siteTitle}),i.a.createElement("link",{className:"gf-headline",href:"https://fonts.googleapis.com/css?family=Pacifico:400&subset=",rel:"stylesheet",type:"text/css"})),i.a.createElement(r.a,{theme:h},i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"siteContent"},i.a.createElement(I,null),t),i.a.createElement(S,null))))}},160:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(149).b.section.withConfig({displayName:"Container__Wrapper",componentId:"sc-18g01lm-0"})(["margin:0 auto;max-width:",";padding:3em 1.5em 2em;"],function(e){return e.theme.sizes.maxWidth});t.a=function(e){return i.a.createElement(r,null,e.children)}},164:function(e,t,n){"use strict";var a=n(7),i=n.n(a),r=n(0),o=n.n(r),l=n(153),s=n.n(l),c=n(151),d=n.n(c),u=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e,t,n,a,i,r,l=this.props,c=l.postNode,u=l.pagePath,m=l.postSEO,h=l.pageSEO,p=l.customTitle;e=d.a.siteTitle,t=d.a.siteDescription,n=d.a.siteUrl+d.a.shareImage,a=d.a.shareImageWidth,i=d.a.shareImageHeight,r=d.a.siteUrl,p&&(e=c.title,r=d.a.siteUrl+"/"+u+"/"),(m||h)&&(e=c.title,t=null===c.metaDescription?c.body.childMarkdownRemark.excerpt:c.metaDescription.internal.content,r=d.a.siteUrl+"/"+u+"/"),m&&(n="https:"+c.heroImage.ogimg.src,a=c.heroImage.ogimg.width,i=c.heroImage.ogimg.height);var g=[{"@context":"http://schema.org","@type":"WebSite",url:d.a.siteUrl,name:d.a.siteTitle,alternateName:d.a.siteTitleAlt?d.a.siteTitleAlt:""}];return m&&g.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":d.a.siteUrl,name:d.a.siteTitle}},{"@type":"ListItem",position:2,item:{"@id":r,name:e}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:r,name:e,alternateName:d.a.siteTitleAlt?d.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:n,width:a,height:i},author:{"@type":"Person",name:d.a.author,url:d.a.authorUrl},publisher:{"@type":"Organization",name:d.a.publisher,url:d.a.siteUrl},datePublished:c.publishDateISO,mainEntityOfPage:r}),h&&g.push({"@context":"http://schema.org","@type":"WebPage",url:r,name:e}),o.a.createElement(s.a,null,o.a.createElement("meta",{name:"image",content:n}),o.a.createElement("meta",{name:"description",content:t}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(g)),o.a.createElement("meta",{property:"og:title",content:e}),m?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:url",content:r}),o.a.createElement("meta",{property:"og:image",content:n}),o.a.createElement("meta",{property:"og:image:width",content:a}),o.a.createElement("meta",{property:"og:image:height",content:i}),o.a.createElement("meta",{property:"og:description",content:t}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:d.a.userTwitter?d.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:e}),o.a.createElement("meta",{name:"twitter:image",content:n}),o.a.createElement("meta",{name:"twitter:description",content:t}))},t}(r.Component);t.a=u},185:function(e,t,n){"use strict";var a=n(27);t.__esModule=!0,t.default=void 0;var i,r=a(n(7)),o=a(n(52)),l=a(n(171)),s=a(n(76)),c=a(n(0)),d=a(n(4)),u=function(e){var t=(0,s.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},m={},h=function(e){var t=u(e),n=t.fluid?t.fluid.src:t.fixed.src;return!!m[n]||(m[n]=!0,!1)},p=[];var g=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),p.push([e,t])},f=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+n+"/>":"",i=e.srcSet?'<source srcSet="'+e.srcSet+'" '+n+"/>":"",r=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+a+i+"<img "+l+s+t+o+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=c.default.forwardRef(function(e,t){var n=e.style,a=e.onLoad,i=e.onError,r=(0,l.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,s.default)({},r,{onLoad:a,onError:i,ref:t,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});b.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var y=function(e){function t(t){var n;n=e.call(this,t)||this;var a=!0,i=!0,r=!1,l=t.fadeIn,s=h(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=!1,i=!1,r=!0),"undefined"==typeof window&&(a=!1,i=!1),t.critical&&(a=!0,i=!1,r=!1);var d=!(n.props.critical&&!n.props.fadeIn);return n.state={isVisible:a,imgLoaded:i,IOSupported:r,fadeIn:l,hasNoScript:d,seenBefore:s},n.imageRef=c.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,o.default)((0,o.default)(n))),n.handleRef=n.handleRef.bind((0,o.default)((0,o.default)(n))),n}(0,r.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.handleRef=function(e){var t=this;this.state.IOSupported&&e&&g(e,function(){t.setState({isVisible:!0})})},n.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e,t=u(this.props),n=t.title,a=t.alt,i=t.className,r=t.style,o=void 0===r?{}:r,l=t.imgStyle,d=void 0===l?{}:l,m=t.placeholderStyle,h=void 0===m?{}:m,p=t.fluid,g=t.fixed,y=t.backgroundColor,w=t.Tag;e="boolean"==typeof y?"lightgray":y;var E=(0,s.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},d,h),v=(0,s.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},d);if(p){var I=p;return c.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},o),ref:this.handleRef},c.default.createElement(w,{style:{width:"100%",paddingBottom:100/I.aspectRatio+"%"}}),I.base64&&c.default.createElement(b,{alt:a,title:n,src:I.base64,style:E}),I.tracedSVG&&c.default.createElement(b,{alt:a,title:n,src:I.tracedSVG,style:E}),e&&c.default.createElement(w,{title:n,style:{backgroundColor:e,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,I.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),c.default.createElement("source",{srcSet:I.srcSet,sizes:I.sizes}),c.default.createElement(b,{alt:a,title:n,src:I.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:f((0,s.default)({alt:a,title:n},I))}}))}if(g){var k=g,x=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},o);return"inherit"===o.display&&delete x.display,c.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:x,ref:this.handleRef},k.base64&&c.default.createElement(b,{alt:a,title:n,src:k.base64,style:E}),k.tracedSVG&&c.default.createElement(b,{alt:a,title:n,src:k.tracedSVG,style:E}),e&&c.default.createElement(w,{title:n,style:{backgroundColor:e,width:k.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:k.height}}),this.state.isVisible&&c.default.createElement("picture",null,k.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),c.default.createElement("source",{srcSet:k.srcSet,sizes:k.sizes}),c.default.createElement(b,{alt:a,title:n,width:k.width,height:k.height,src:k.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:f((0,s.default)({alt:a,title:n,width:k.width,height:k.height},k))}}))}return null},t}(c.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),E=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});y.propTypes={resolutions:w,sizes:E,fixed:w,fluid:E,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,Tag:d.default.string};var v=y;t.default=v},186:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(149);n(187);var o=r.b.div.withConfig({displayName:"PageBody__Body",componentId:"sc-2wwtab-0"})(["margin:0 auto;max-width:",";box-shadow:inset 0 0 1px #000000;padding:2em 5em;border-radius:25px;h1,h2,h3{font-weight:600;line-height:1.25;margin:0 0 1rem 0;text-transform:capitalize;}h1{font-size:1.5em;}h2{font-size:1.25em;}h3{font-size:1em;}p{line-height:1.6;margin:0 0 2em 0;}a{transition:0.2s;color:",";&:hover{color:",";}}del{text-decoration:line-through;}strong{font-weight:600;}em{font-style:italic;}ul,ol{margin:0 0 2em 0;}ul{li{list-style:disc;list-style-position:inside;line-height:1.25;&:last-child{margin:0;}}}ol{li{list-style:decimal;list-style-position:inside;line-height:1.25;&:last-child{margin:0;}}}hr{border-style:solid;border-color:",";margin:0 0 2em 0;}blockquote{font-style:italic;border-left:4px solid ",";padding:0 0 0 0.5em;}pre{margin:0 0 2em 0;border-radius:2px;background:"," !important;span{background:inherit !important;}}"],function(e){return e.theme.sizes.maxWidthCentered},function(e){return e.theme.colors.base},function(e){return e.theme.colors.highlight},function(e){return e.theme.colors.secondary},function(e){return e.theme.colors.secondary},function(e){return e.theme.colors.secondary});t.a=function(e){return i.a.createElement(o,{dangerouslySetInnerHTML:{__html:e.body.childMarkdownRemark.html}})}},187:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-post-js-763e5e436ff81e68fe31.js.map