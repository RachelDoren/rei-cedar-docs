(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{274:function(n,t,e){"use strict";var r=e(139),i=e(138),o=e(14),a=e(19),c=e(275),l=e(140),s=e(16),u=e(141),f=e(55),p=e(3),d=[].push,g=Math.min,h=!p((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(n,t,e){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(n,e){var r=String(a(this)),o=void 0===e?4294967295:e>>>0;if(0===o)return[];if(void 0===n)return[r];if(!i(n))return t.call(r,n,o);for(var c,l,s,u=[],p=(n.ignoreCase?"i":"")+(n.multiline?"m":"")+(n.unicode?"u":"")+(n.sticky?"y":""),g=0,h=new RegExp(n.source,p+"g");(c=f.call(h,r))&&!((l=h.lastIndex)>g&&(u.push(r.slice(g,c.index)),c.length>1&&c.index<r.length&&d.apply(u,c.slice(1)),s=c[0].length,g=l,u.length>=o));)h.lastIndex===c.index&&h.lastIndex++;return g===r.length?!s&&h.test("")||u.push(""):u.push(r.slice(g)),u.length>o?u.slice(0,o):u}:"0".split(void 0,0).length?function(n,e){return void 0===n&&0===e?[]:t.call(this,n,e)}:t,[function(t,e){var i=a(this),o=null==t?void 0:t[n];return void 0!==o?o.call(t,i,e):r.call(String(i),t,e)},function(n,i){var a=e(r,n,this,i,r!==t);if(a.done)return a.value;var f=o(n),p=String(this),d=c(f,RegExp),v=f.unicode,x=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(h?"y":"g"),y=new d(h?f:"^(?:"+f.source+")",x),_=void 0===i?4294967295:i>>>0;if(0===_)return[];if(0===p.length)return null===u(y,p)?[p]:[];for(var m=0,S=0,C=[];S<p.length;){y.lastIndex=h?S:0;var k,w=u(y,h?p:p.slice(S));if(null===w||(k=g(s(y.lastIndex+(h?0:S)),p.length))===m)S=l(p,S,v);else{if(C.push(p.slice(m,S)),C.length===_)return C;for(var b=1;b<=w.length-1;b++)if(C.push(w[b]),C.length===_)return C;S=m=k}}return C.push(p.slice(m)),C}]}),!h)},275:function(n,t,e){var r=e(14),i=e(85),o=e(4)("species");n.exports=function(n,t){var e,a=r(n).constructor;return void 0===a||null==(e=r(a)[o])?t:i(e)}},278:function(n,t,e){var r=e(7),i=e(146);n.exports=function(n,t,e){var o,a;return i&&"function"==typeof(o=t.constructor)&&o!==e&&r(a=o.prototype)&&a!==e.prototype&&i(n,a),n}},282:function(n,t,e){"use strict";var r=e(35),i=e(8),o=e(4),a=e(9),c=o("species");n.exports=function(n){var t=r(n),e=i.f;a&&t&&!t[c]&&e(t,c,{configurable:!0,get:function(){return this}})}},286:function(n,t,e){var r=e(9),i=e(5),o=e(145),a=e(278),c=e(8).f,l=e(57).f,s=e(138),u=e(144),f=e(148),p=e(22),d=e(3),g=e(34).set,h=e(282),v=e(4)("match"),x=i.RegExp,y=x.prototype,_=/a/g,m=/a/g,S=new x(_)!==_,C=f.UNSUPPORTED_Y;if(r&&o("RegExp",!S||C||d((function(){return m[v]=!1,x(_)!=_||x(m)==m||"/a/i"!=x(_,"i")})))){for(var k=function(n,t){var e,r=this instanceof k,i=s(n),o=void 0===t;if(!r&&i&&n.constructor===k&&o)return n;S?i&&!o&&(n=n.source):n instanceof k&&(o&&(t=u.call(n)),n=n.source),C&&(e=!!t&&t.indexOf("y")>-1)&&(t=t.replace(/y/g,""));var c=a(S?new x(n,t):x(n,t),r?this:y,k);return C&&e&&g(c,{sticky:e}),c},w=function(n){n in k||c(k,n,{configurable:!0,get:function(){return x[n]},set:function(t){x[n]=t}})},b=l(x),E=0;b.length>E;)w(b[E++]);y.constructor=k,k.prototype=y,p(i,"RegExp",k)}h("RegExp")},287:function(n,t,e){"use strict";var r=e(22),i=e(14),o=e(3),a=e(144),c=RegExp.prototype,l=c.toString,s=o((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),u="toString"!=l.name;(s||u)&&r(RegExp.prototype,"toString",(function(){var n=i(this),t=String(n.source),e=n.flags;return"/"+t+"/"+String(void 0===e&&n instanceof RegExp&&!("flags"in c)?a.call(n):e)}),{unsafe:!0})},350:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));e(150),e(20),e(286),e(54),e(287),e(83),e(274);function r(n){var t="àáäâèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;",e=new RegExp(t.split("").join("|"),"g");return n.toString().toLowerCase().replace(/\s+/g,"-").replace(e,(function(n){return"aaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------".charAt(t.indexOf(n))})).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}},429:function(n,t,e){},675:function(n,t,e){"use strict";var r=e(429);e.n(r).a},688:function(n,t,e){"use strict";e.r(t);e(143),e(56),e(153),e(350);var r={name:"CdrDocLocalAnchorNav",components:{CdrList:e(312).CdrList},props:{parentSelectors:{type:String,default:"h2"},childSelectors:{type:[String,Boolean],default:"h3"},stickyTopOffset:{type:String,default:"48"},tabPanelOffset:{type:String,default:"12"},appendedItems:{type:Array,default:function(){return[]}},links:{type:Array,default:function(){return[]}}},computed:{pageData:function(){return this.$page.frontmatter},seeAlsoLinks:function(){return(this.pageData.see_also||[]).map((function(n){return n.isChild=!!n.href,n}))},linksGroupedByHeading:function(){return this.links.concat(this.seeAlsoLinks).reduce((function(n,t){return t.isChild||n.push([]),n[n.length-1].push(t),n}),[])}}},i=(e(675),e(33)),o=Object(i.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("nav",{ref:"localNav",staticClass:"cdr-doc-local-anchor-nav"},n._l(n.linksGroupedByHeading,(function(t){return e("cdr-list",{staticClass:"cdr-doc-local-anchor-nav__list",attrs:{modifier:"inline unordered compact"}},n._l(t,(function(r,i){return e("li",{staticClass:"cdr-doc-local-anchor-nav__list-item"},[r.href?e("cdr-link",{class:{"cdr-doc-local-anchor-nav__link--parent":!r.isChild,"cdr-doc-local-anchor-nav__link--child":r.isChild},attrs:{modifier:"standalone",href:r.href}},[n._v("\n          "+n._s(r.text)+"\n          "+n._s(!r.isChild&&t.length>1?":":"")+"\n      ")]):e("span",{staticClass:"cdr-doc-local-anchor-nav__header"},[n._v("\n        "+n._s(r.text)+n._s(t.length>1?":":"")+"\n      ")])],1)})),0)})),1)}),[],!1,null,null,null);t.default=o.exports}}]);