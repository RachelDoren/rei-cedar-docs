(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{343:function(e,t,o){"use strict";function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}o.d(t,"a",(function(){return n}))},426:function(e,t,o){},672:function(e,t,o){"use strict";var a=o(426);o.n(a).a},694:function(e,t,o){"use strict";o.r(t);o(143),o(81),o(150),o(56),o(338),o(84),o(82);var a=o(343),r=o(390),n={name:"CdrDocExampleCodePair",props:{backgroundToggle:{type:Boolean,default:!0},backgroundColors:{type:Object,default:function(){return{}}},backgroundColor:{type:String,default:"light"},interactive:{type:Boolean,default:!0},label:{type:[String,Boolean],default:!1},showExampleLabels:{type:Boolean,default:!0},copyButton:{default:!0,type:Boolean},lineNumbers:{default:!0,type:Boolean},codeMaxHeight:{default:!1,type:Boolean},repositoryHref:{default:!1,type:[String,Boolean]},sandboxHref:{default:!1,type:[String,Boolean]},sandboxData:{default:!1,type:[Object,Boolean]},sandboxTitle:{default:!1,type:[String,Boolean]},loadSprite:{default:!1,type:Boolean},codeToggle:{default:!0,type:Boolean},hideCode:{default:!0,type:Boolean},model:{type:Object,default:function(){}}},data:function(){return{exampleCount:0,backgroundToggleStates:{},templateSources:{},slotNames:[]}},computed:{instanceId:function(){return this._uid},sandboxCode:function(){var e=this;return this.slotNames.map((function(t){return e.templateSources[t]})).join("\n<br>\n")}},beforeMount:function(){var e=this;for(var t in this.$slots)this.backgroundColors[t]?this.$set(this.backgroundToggleStates,t,this.backgroundColors[t]):this.$set(this.backgroundToggleStates,t,this.backgroundColor);this.slotNames=Object.keys(this.$slots),this.exampleCount=Object.keys(this.$slots).length;var o=function(t){var o=e.extractCodeNodeFromVnodeTree(e.$slots[t][0]),n=e.getStoredTemplateSourceForExample(t,o),c=e.model;e.$options.components["cdr-doc-html-example-".concat(t,"-").concat(e.instanceId)]=Object(a.a)({data:function(){return Object(a.a)({},c)}},r.a.compile("<div>".concat(n,"</div>")))};for(var n in this.$slots)o(n)},methods:{getStoredTemplateSourceForExample:function(e,t){var o=this.templateSources[e];return o||(o=this.extractTextFromVnode(t,""),this.templateSources[e]=o),o},extractTextFromVnode:function(e,t){var o=this,a=t;if(e.text)a+=e.text;else{if(!e.children)return"";e.children.forEach((function(e){a+=o.extractTextFromVnode(e,"")}))}return a},extractCodeNodeFromVnodeTree:function(e){var t=this,o=!1;return"code"===e.tag?o=e:e.children&&e.children.some((function(e){return!1!==(o=t.extractCodeNodeFromVnodeTree(e))})),o}}},c=(o(672),o(33)),l=Object(c.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"cdr-doc-example-code-pair",class:{"cdr-doc-example-code-pair--not-interactive":!e.interactive}},[e._l(e.$slots,(function(t,a){return o("div",{staticClass:"cdr-doc-example-code-pair__item",class:"cdr-doc-example-code-pair__item-background--"+e.backgroundToggleStates[a]},[e.backgroundToggle?o("div",{staticClass:"cdr-doc-example-code-pair__item-background-toggle"},[o("label",{staticClass:"cdr-doc-item-background-toggle__button",class:{"cdr-doc-item-background-toggle__button--active":"primary"===e.backgroundToggleStates[a]}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.backgroundToggleStates[a],expression:"backgroundToggleStates[slotLabel]"}],staticClass:"cdr-doc-item-background-toggle__input",attrs:{type:"radio",value:"primary"},domProps:{checked:e._q(e.backgroundToggleStates[a],"primary")},on:{change:function(t){return e.$set(e.backgroundToggleStates,a,"primary")}}}),e._v("\n          Primary\n      ")]),e._v(" "),o("label",{staticClass:"cdr-doc-item-background-toggle__button",class:{"cdr-doc-item-background-toggle__button--active":"secondary"===e.backgroundToggleStates[a]}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.backgroundToggleStates[a],expression:"backgroundToggleStates[slotLabel]"}],staticClass:"cdr-doc-item-background-toggle__input",attrs:{type:"radio",value:"secondary"},domProps:{checked:e._q(e.backgroundToggleStates[a],"secondary")},on:{change:function(t){return e.$set(e.backgroundToggleStates,a,"secondary")}}}),e._v("\n        Secondary\n      ")])]):e._e(),e._v(" "),e.exampleCount>1&&e.showExampleLabels||e.label?o("span",{staticClass:"cdr-doc-example-code-pair__item-label"},[e._v("\n      "+e._s(e.label||a)+"\n    ")]):e._e(),e._v(" "),o("div",{staticClass:"cdr-doc-example-code-pair__item-example"},[o("cdr-doc-html-example-"+a+"-"+e.instanceId,{tag:"component"})],1)])})),e._v(" "),o("cdr-doc-code-snippet",{attrs:{"copy-button":e.copyButton,"line-numbers":e.lineNumbers,"max-height":e.codeMaxHeight,"repository-href":e.repositoryHref,"sandbox-href":e.sandboxHref,"sandbox-data":Object.assign({},e.sandboxData,{code:e.sandboxCode,loadSprite:e.loadSprite}),model:e.model,"code-toggle":e.codeToggle,"hide-code":e.hideCode}},[e._t(e.slotNames[0])],2)],2)}),[],!1,null,null,null);t.default=l.exports}}]);