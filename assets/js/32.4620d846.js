(window.webpackJsonp=window.webpackJsonp||[]).push([[32,36],{178:function(t,e,r){"use strict";r(179)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},179:function(t,e,r){var a=r(42),n=r(6),i=r(36),s=/"/g,c=function(t,e,r,a){var n=String(i(t)),c="<"+e;return""!==r&&(c+=" "+r+'="'+String(a).replace(s,"&quot;")+'"'),c+">"+n+"</"+e+">"};t.exports=function(t,e){var r={};r[t]=e(c),a(a.P+a.F*n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",r)}},180:function(t,e,r){"use strict";var a=r(84);r.n(a).a},196:function(t,e,r){"use strict";r.r(e);r(178);var a=r(74),n={props:{item:{required:!0}},computed:{link:function(){return Object(a.b)(this.item.link)}},methods:{isExternal:a.f,isMailto:a.g}},i=(r(180),r(2)),s=Object(i.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isExternal(t.link)?r("a",{staticClass:"nav-link cdr-doc-side-navigation__link",attrs:{href:t.link,target:t.isMailto(t.link)?null:"_blank",rel:t.isMailto(t.link)?null:"noopener noreferrer"}},[t._v(t._s(t.item.text))]):r("router-link",{staticClass:"nav-link cdr-doc-side-navigation__link",attrs:{to:t.link,exact:"/"===t.link}},[t._v(t._s(t.item.text))])}),[],!1,null,null,null);e.default=s.exports},221:function(t,e,r){},306:function(t,e,r){"use strict";var a=r(221);r.n(a).a},501:function(t,e,r){"use strict";r.r(e);var a={components:{NavLink:r(196).default},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},n=(r(306),r(2)),i=Object(n.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("div",{staticClass:"hero cdr-mb-space-four-x"},[t.data.heroImage?r("cdr-img",{staticClass:"hero__image",attrs:{src:t.$withBase(t.data.heroImage),ratio:"2-1",crop:"y-center x-center",cover:"",alt:"hero"}}):t._e(),t._v(" "),r("div",{staticClass:"hero__container cdr-text-center"},[r("cdr-text",{staticClass:"cdr-mb-space-one-x",attrs:{modifier:"heading-700 display-900@md display-1100@lg"}},[t._v(t._s(t.data.heroTitle))]),t._v(" "),r("p",{staticClass:"hero__description"},[t._v(t._s(t.data.heroDescription))])],1)],1),t._v(" "),r("div",{staticClass:"cdr-container"},[r("cdr-row",{staticClass:"cdr-mb-space-four-x",attrs:{cols:"1 2@md",align:"middle"}},[r("cdr-col",[r("cdr-img",{staticClass:"getting-started-image",attrs:{src:t.$withBase("home/gettingstarted_icon.png"),ratio:"16-9",cover:"",radius:"rounded"}})],1),t._v(" "),r("cdr-col",[r("div",[r("h2",{staticClass:"home-heading"},[t._v("Getting Started")]),t._v(" "),r("p",{staticClass:"home-subheading"},[t._v("Learn how to start using Cedar components with handy onboarding guides.")]),t._v(" "),r("cdr-row",{attrs:{cols:"auto",justify:"around left@md"}},[r("cdr-col",[r("cdr-button",{attrs:{tag:"a",href:t.$withBase("/getting-started/as-a-designer/"),modifier:"secondary"}},[t._v("View Designer Guide")])],1),t._v(" "),r("cdr-col",[r("cdr-button",{attrs:{tag:"a",href:t.$withBase("/getting-started/as-a-developer/"),modifier:"secondary"}},[t._v("View Developer Guide")])],1)],1)],1)])],1),t._v(" "),r("div",{staticClass:"home-hr cdr-mb-space-four-x",attrs:{role:"presentation"}}),t._v(" "),r("cdr-row",{staticClass:"cdr-mb-space-four-x",attrs:{cols:"1 2@md"}},[r("cdr-col",[r("div",{staticClass:"cdr-text-center"},[r("cdr-img",{staticClass:"home-start-image",attrs:{src:t.$withBase("home/foundation_icon.png"),ratio:"square",radius:"rounded",cover:""}}),t._v(" "),r("h2",{staticClass:"home-heading"},[t._v("Foundation")]),t._v(" "),r("cdr-text",{staticClass:"cdr-mb-space-one-x"},[t._v("Build cohesive digital experiences with the basic design elements that comprise the Cedar visual language.")]),t._v(" "),r("cdr-link",{attrs:{href:t.$withBase("/foundation/color/"),modifier:"standalone"}},[t._v("Start with color")])],1)]),t._v(" "),r("cdr-col",[r("div",{staticClass:"cdr-text-center"},[r("cdr-img",{staticClass:"home-start-image",attrs:{src:t.$withBase("home/components_icon.png"),ratio:"square",radius:"rounded",cover:""}}),t._v(" "),r("h2",{staticClass:"home-heading"},[t._v("Components")]),t._v(" "),r("cdr-text",{staticClass:"cdr-mb-space-one-x"},[t._v("Use components as building blocks to create new digital products - usage, visual guidelines, and code included.")]),t._v(" "),r("cdr-link",{attrs:{href:t.$withBase("/components/buttons/"),modifier:"standalone"}},[t._v("Start with buttons")])],1)])],1),t._v(" "),r("div",{staticClass:"home-hr-tree cdr-mb-space-four-x"},[r("cdr-img",{staticClass:"home-hr-tree__image",attrs:{src:t.$withBase("home/hr_tree.png"),role:"presentation"}})],1),t._v(" "),r("h2",{staticClass:"home-heading cdr-text-center cdr-mb-space-four-x"},[t._v("Resources")]),t._v(" "),r("cdr-row",{staticClass:"cdr-mb-space-four-x",attrs:{cols:"1 2@md"}},[r("cdr-col",[r("div",{staticClass:"home-card cdr-space-inset-one-x"},[r("cdr-row",{attrs:{align:"middle"}},[r("cdr-col",{attrs:{span:"9"}},[r("div",[r("cdr-text",{staticClass:"cdr-mb-space-one-x",attrs:{tag:"h3",modifier:"heading-sans-400"}},[t._v("Cedar Sketch UI toolkit")]),t._v(" "),r("cdr-link",{attrs:{href:t.$withBase("/getting-started/as-a-designer/"),modifier:"standalone"}},[t._v("Download the Sketch library")])],1)]),t._v(" "),r("cdr-col",{attrs:{span:"3"}},[r("div",[r("cdr-img",{staticClass:"home-resource-icon",attrs:{src:t.$withBase("sketch_icon.png")}})],1)])],1)],1)]),t._v(" "),r("cdr-col",[r("div",{staticClass:"home-card cdr-space-inset-one-x"},[r("cdr-row",{attrs:{align:"middle"}},[r("cdr-col",{attrs:{span:"9"}},[r("div",[r("cdr-text",{staticClass:"cdr-mb-space-one-x",attrs:{tag:"h3",modifier:"heading-sans-400"}},[t._v("Vue.js components")]),t._v(" "),r("cdr-link",{attrs:{href:"https://www.npmjs.com/package/@rei/cedar",target:"_blank",modifier:"standalone"}},[t._v("View the NPM repository")])],1)]),t._v(" "),r("cdr-col",{attrs:{span:"3"}},[r("div",[r("cdr-img",{staticClass:"home-resource-icon",attrs:{src:t.$withBase("vue_icon.png")}})],1)])],1)],1)]),t._v(" "),r("cdr-col",[r("div",{staticClass:"home-card cdr-space-inset-one-x"},[r("cdr-text",{staticClass:"cdr-mb-space-one-x",attrs:{tag:"h3",modifier:"heading-sans-400"}},[t._v("Contribute to Cedar")]),t._v(" "),r("cdr-text",{staticClass:"cdr-mb-space-one-x"},[t._v("The Cedar team welcomes contributions from the community. Learn how to become a pilot contributor.  ")]),t._v(" "),r("cdr-link",{attrs:{href:t.$withBase("/about/contributing-to-cedar/"),modifier:"standalone"}},[t._v("Help build Cedar")])],1)]),t._v(" "),r("cdr-col",[r("div",{staticClass:"home-card cdr-space-inset-one-x"},[r("cdr-text",{staticClass:"cdr-mb-space-one-x",attrs:{tag:"h3",modifier:"heading-sans-400"}},[t._v("Feedback & support")]),t._v(" "),r("cdr-text",{staticClass:"cdr-mb-space-one-x"},[t._v("Questions, ideas, or comments? Your feedback can help improve Cedar. ")]),t._v(" "),r("cdr-link",{attrs:{href:"mailto:cedar@rei.com",modifier:"standalone"}},[t._v("Get in touch")])],1)])],1)],1)])}),[],!1,null,null,null);e.default=i.exports},74:function(t,e,r){"use strict";r.d(e,"d",(function(){return a})),r.d(e,"a",(function(){return i})),r.d(e,"i",(function(){return s})),r.d(e,"h",(function(){return c})),r.d(e,"f",(function(){return o})),r.d(e,"g",(function(){return d})),r.d(e,"b",(function(){return l})),r.d(e,"e",(function(){return u})),r.d(e,"k",(function(){return h})),r.d(e,"l",(function(){return f})),r.d(e,"c",(function(){return m})),r.d(e,"j",(function(){return p}));r(63),r(113),r(129),r(80);var a=/#.*$/,n=/\.(md|html)$/,i=/\/$/,s=/^(https?:|mailto:)/;function c(t){return t.replace(a,"").replace(n,"")}function o(t){return s.test(t)}function d(t){return/^mailto:/.test(t)}function l(t){if(o(t))return t;var e=t.match(a),r=e?e[0]:"",n=c(t);return i.test(n)?t:n+".html"+r}function u(t,e){var r=t.hash,n=function(t){var e=t.match(a);if(e)return e[0]}(e);return(!n||r===n)&&c(t.path)===c(e)}function h(t,e,r){r&&(e=function(t,e,r){var a=t.charAt(0);if("/"===a)return t;if("?"===a||"#"===a)return e+t;var n=e.split("/");r&&n[n.length-1]||n.pop();for(var i=t.replace(/^\//,"").split("/"),s=0;s<i.length;s++){var c=i[s];".."===c?n.pop():"."!==c&&n.push(c)}""!==n[0]&&n.unshift("");return n.join("/")}(e,r));for(var a=c(e),n=0;n<t.length;n++)if(c(t[n].path)===a)return Object.assign({},t[n],{type:"page",path:l(e)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function f(t,e,r,a){if("auto"===t.frontmatter.sidebar)return function(t){var e=m(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}(t);var n=r.pages,i=r.themeConfig,s=(a&&i.locales&&i.locales[a]||i).sidebar||i.sidebar;if(s){var c=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var r in e)if(0===(a=t.path,/(\.html|\/)$/.test(a)?a:a+"/").indexOf(r))return{base:r,config:e[r]};var a;return{}}(e,s),o=c.base,d=c.config;return d?d.map((function(t){return function t(e,r,a,n){if("string"==typeof e)return h(r,e,a);if(Array.isArray(e))return Object.assign(h(r,e[0],a),{title:e[1]});n&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");var i=e.children||[];return{type:"group",title:e.title,children:i.map((function(e){return t(e,r,a,!0)})),collapsable:!1!==e.collapsable}}(t,n,o)})):[]}return[]}function m(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function p(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},84:function(t,e,r){}}]);