(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{107:function(t,n,e){var r=e(5),i=e(49),o=e(31)("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[o])?!!n:"RegExp"==i(t))}},113:function(t,n,e){"use strict";var r=e(107),i=e(9),o=e(248),c=e(120),s=e(58),a=e(121),u=e(83),l=e(6),f=Math.min,p=[].push,v=!l((function(){RegExp(4294967295,"y")}));e(122)("split",2,(function(t,n,e,l){var d;return d="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(this);if(void 0===t&&0===n)return[];if(!r(t))return e.call(i,t,n);for(var o,c,s,a=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,v=void 0===n?4294967295:n>>>0,d=new RegExp(t.source,l+"g");(o=u.call(d,i))&&!((c=d.lastIndex)>f&&(a.push(i.slice(f,o.index)),o.length>1&&o.index<i.length&&p.apply(a,o.slice(1)),s=o[0].length,f=c,a.length>=v));)d.lastIndex===o.index&&d.lastIndex++;return f===i.length?!s&&d.test("")||a.push(""):a.push(i.slice(f)),a.length>v?a.slice(0,v):a}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,r){var i=t(this),o=null==e?void 0:e[n];return void 0!==o?o.call(e,i,r):d.call(String(i),e,r)},function(t,n){var r=l(d,t,this,n,d!==e);if(r.done)return r.value;var u=i(t),p=String(this),h=o(u,RegExp),x=u.unicode,g=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(v?"y":"g"),_=new h(v?u:"^(?:"+u.source+")",g),y=void 0===n?4294967295:n>>>0;if(0===y)return[];if(0===p.length)return null===a(_,p)?[p]:[];for(var m=0,b=0,w=[];b<p.length;){_.lastIndex=v?b:0;var E,S=a(_,v?p:p.slice(b));if(null===S||(E=f(s(_.lastIndex+(v?0:b)),p.length))===m)b=c(p,b,x);else{if(w.push(p.slice(m,b)),w.length===y)return w;for(var C=1;C<=S.length-1;C++)if(w.push(S[C]),w.length===y)return w;b=m=E}}return w.push(p.slice(m)),w}]}))},119:function(t,n,e){var r=e(45),i=e(36);t.exports=function(t){return function(n,e){var o,c,s=String(i(n)),a=r(e),u=s.length;return a<0||a>=u?t?"":void 0:(o=s.charCodeAt(a))<55296||o>56319||a+1===u||(c=s.charCodeAt(a+1))<56320||c>57343?t?s.charAt(a):o:t?s.slice(a,a+2):c-56320+(o-55296<<10)+65536}}},120:function(t,n,e){"use strict";var r=e(119)(!0);t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},121:function(t,n,e){"use strict";var r=e(128),i=RegExp.prototype.exec;t.exports=function(t,n){var e=t.exec;if("function"==typeof e){var o=e.call(t,n);if("object"!=typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,n)}},122:function(t,n,e){"use strict";e(168);var r=e(37),i=e(32),o=e(6),c=e(36),s=e(31),a=e(83),u=s("species"),l=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2===e.length&&"a"===e[0]&&"b"===e[1]}();t.exports=function(t,n,e){var p=s(t),v=!o((function(){var n={};return n[p]=function(){return 7},7!=""[t](n)})),d=v?!o((function(){var n=!1,e=/a/;return e.exec=function(){return n=!0,null},"split"===t&&(e.constructor={},e.constructor[u]=function(){return e}),e[p](""),!n})):void 0;if(!v||!d||"replace"===t&&!l||"split"===t&&!f){var h=/./[p],x=e(c,p,""[t],(function(t,n,e,r,i){return n.exec===a?v&&!i?{done:!0,value:h.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}})),g=x[0],_=x[1];r(String.prototype,t,g),i(RegExp.prototype,p,2==n?function(t,n){return _.call(t,this,n)}:function(t){return _.call(t,this)})}}},128:function(t,n,e){var r=e(49),i=e(31)("toStringTag"),o="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?e:o?r(n):"Object"==(c=r(n))&&"function"==typeof n.callee?"Arguments":c}},168:function(t,n,e){"use strict";var r=e(83);e(42)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},248:function(t,n,e){var r=e(9),i=e(68),o=e(31)("species");t.exports=function(t,n){var e,c=r(t).constructor;return void 0===c||null==(e=r(c)[o])?n:i(e)}},31:function(t,n,e){var r=e(44)("wks"),i=e(41),o=e(7).Symbol,c="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=c&&o[t]||(c?o:i)("Symbol."+t))}).store=r},32:function(t,n,e){var r=e(8),i=e(48);t.exports=e(4)?function(t,n,e){return r.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},34:function(t,n){var e=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=e)},35:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},36:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},37:function(t,n,e){var r=e(7),i=e(32),o=e(35),c=e(41)("src"),s=e(77),a=(""+s).split("toString");e(34).inspectSource=function(t){return s.call(t)},(t.exports=function(t,n,e,s){var u="function"==typeof e;u&&(o(e,"name")||i(e,"name",n)),t[n]!==e&&(u&&(o(e,c)||i(e,c,t[n]?""+t[n]:a.join(String(n)))),t===r?t[n]=e:s?t[n]?t[n]=e:i(t,n,e):(delete t[n],i(t,n,e)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[c]||s.call(this)}))},41:function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},42:function(t,n,e){var r=e(7),i=e(34),o=e(32),c=e(37),s=e(52),a=function(t,n,e){var u,l,f,p,v=t&a.F,d=t&a.G,h=t&a.S,x=t&a.P,g=t&a.B,_=d?r:h?r[n]||(r[n]={}):(r[n]||{}).prototype,y=d?i:i[n]||(i[n]={}),m=y.prototype||(y.prototype={});for(u in d&&(e=n),e)f=((l=!v&&_&&void 0!==_[u])?_:e)[u],p=g&&l?s(f,r):x&&"function"==typeof f?s(Function.call,f):f,_&&c(_,u,f,t&a.U),y[u]!=f&&o(y,u,p),x&&m[u]!=f&&(m[u]=f)};r.core=i,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},44:function(t,n,e){var r=e(34),i=e(7),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(61)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},45:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},48:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},49:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},52:function(t,n,e){var r=e(68);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,i){return t.call(n,e,r,i)}}return function(){return t.apply(n,arguments)}}},58:function(t,n,e){var r=e(45),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},61:function(t,n){t.exports=!1},68:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},722:function(t,n,e){"use strict";e.r(n);e(113);var r={name:"TextDocOverView",methods:{formatTitle:function(t){return t.split("-").map((function(t){return t.charAt(0).toUpperCase()+t.substring(1)})).join(" ")}},data:function(){return{text:{"heading-serif":[200,300,400,500,600,700,800,900,1100,1200],"heading-serif-strong":[600,700,800,900,1100,1200],"heading-sans":[200,300,400,500,600],"subheading-sans":[300,400,500,600],eyebrow:[100],body:[300,400,500],"body-strong":[300,400,500],utility:[100,200,300,400,500,600,700,800],"utility-strong":[100,200,300,400,500,600,700,800],"utility-serif":[200,300,400,500,600,700,800],"utility-serif-strong":[200,300,400,500,600,700,800]}}}},i=e(2),o=Object(i.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._l(Object.keys(t.text),(function(n){return e("div",{staticClass:"cdr-mb-space-one-x"},[e("cdr-text",{staticClass:"cdr-mb-space-one-x",attrs:{tag:"h3",modifier:"heading-500"}},[t._v("\n        "+t._s(t.formatTitle(n))+"\n    ")]),t._v(" "),e("table",[t._m(0,!0),t._v(" "),e("tbody",t._l(t.text[n],(function(r){return e("tr",{key:n+"-"+r},[e("td",[e("cdr-text",{attrs:{modifier:n+"-"+r}},[t._v(t._s(n)+"-"+t._s(r))])],1),t._v(" "),e("td",[e("cdr-text",[t._v("cdr-text-"+t._s(n)+"-"+t._s(r))])],1),t._v(" "),e("td",[e("cdr-text",[t._v("cdr-text--"+t._s(n)+"-"+t._s(r))])],1),t._v(" "),e("td",[e("cdr-text",[t._v(t._s(n)+"-"+t._s(r))])],1)])})),0)])],1)})),t._v(" "),e("cdr-text",{staticClass:"cdr-mb-space-one-x",attrs:{tag:"h3",modifier:"heading-500"}},[t._v("\n    Helpers\n  ")]),t._v(" "),e("table",[t._m(1),t._v(" "),e("tbody",[e("tr",[e("td",[e("cdr-text",{attrs:{modifier:"italic"}},[t._v("italic")])],1),t._v(" "),e("td",[e("cdr-text",[t._v(" N/A ")])],1),t._v(" "),e("td",[e("cdr-text",[t._v("cdr-text--italic")])],1),t._v(" "),e("td",[e("cdr-text",[t._v("italic")])],1)]),t._v(" "),e("tr",[e("td",[e("cdr-text",{attrs:{modifier:"strong"}},[t._v("strong")])],1),t._v(" "),e("td",[e("cdr-text",[t._v(" N/A ")])],1),t._v(" "),e("td",[e("cdr-text",[t._v("cdr-text--strong")])],1),t._v(" "),e("td",[e("cdr-text",[t._v("strong")])],1)])])]),t._v(" "),e("cdr-text",{staticClass:"cdr-mb-space-one-x",attrs:{tag:"h3",modifier:"heading-500"}},[t._v("\n    Mobile App Tokens\n  ")]),t._v(" "),e("tokens-typography",{attrs:{platform:"native",type:"header"}},[e("cdr-text",{staticClass:"cdr-mb-space-one-x",attrs:{tag:"h4",modifier:"heading-400"}},[t._v("\n    Headings\n  ")])],1),t._v(" "),e("tokens-typography",{attrs:{platform:"native",type:"body"}},[e("cdr-text",{staticClass:"cdr-mb-space-one-x",attrs:{tag:"h4",modifier:"heading-400"}},[t._v("\n    Body\n  ")])],1),t._v(" "),e("tokens-typography",{attrs:{platform:"native",type:"button"}},[e("cdr-text",{staticClass:"cdr-mb-space-one-x",attrs:{tag:"h4",modifier:"heading-400"}},[t._v("\n    Buttons\n  ")])],1)],2)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("thead",[n("tr",[n("th",[this._v("Example")]),this._v(" "),n("th",[this._v("Token")]),this._v(" "),n("th",[this._v("Utility class")]),this._v(" "),n("th",[this._v("Component Modifier")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("thead",[n("tr",[n("th",[this._v("Example")]),this._v(" "),n("th",[this._v("Token")]),this._v(" "),n("th",[this._v("Utility class")]),this._v(" "),n("th",[this._v("Component Modifier")])])])}],!1,null,null,null);n.default=o.exports},75:function(t,n,e){"use strict";var r=e(9);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},77:function(t,n,e){t.exports=e(44)("native-function-to-string",Function.toString)},83:function(t,n,e){"use strict";var r,i,o=e(75),c=RegExp.prototype.exec,s=String.prototype.replace,a=c,u=(r=/a/,i=/b*/g,c.call(r,"a"),c.call(i,"a"),0!==r.lastIndex||0!==i.lastIndex),l=void 0!==/()??/.exec("")[1];(u||l)&&(a=function(t){var n,e,r,i,a=this;return l&&(e=new RegExp("^"+a.source+"$(?!\\s)",o.call(a))),u&&(n=a.lastIndex),r=c.call(a,t),u&&r&&(a.lastIndex=a.global?r.index+r[0].length:n),l&&r&&r.length>1&&s.call(r[0],e,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)})),r}),t.exports=a}}]);