(window.webpackJsonp=window.webpackJsonp||[]).push([[31,40],{293:function(t,a,n){},352:function(t,a,n){"use strict";var e=n(293);n.n(e).a},371:function(t,a,n){"use strict";n.r(a);var e={name:"TokenMotionExample",props:{prop:Object,useGroupAnimate:{type:Boolean,default:!1},groupAnimate:{type:Boolean,default:!1}},computed:{animationPlayState:function(){return this.useGroupAnimate?this.groupAnimate?"running":"paused":this.animate?"running":"paused"}},data:function(){return{animate:!1}}},i=(n(352),n(33)),o=Object(i.a)(e,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"token-motion-example"},[t.useGroupAnimate?t._e():n("div",{staticClass:"animation-controls"},[n("cdr-button",{directives:[{name:"show",rawName:"v-show",value:"paused"===t.animationPlayState,expression:"animationPlayState === 'paused'"}],attrs:{"icon-only":!0},on:{click:function(a){t.animate=!0}}},[n("cdr-icon",{attrs:{use:"#play-fill",alt:"Play animation"}})],1),t._v(" "),n("cdr-button",{directives:[{name:"show",rawName:"v-show",value:"running"===t.animationPlayState,expression:"animationPlayState === 'running'"}],attrs:{"icon-only":!0},on:{click:function(a){t.animate=!1}}},[n("cdr-icon",{attrs:{use:"#pause-fill",alt:"Pause animation"}})],1)],1),t._v(" "),n("div",{staticClass:"motion-background"},["duration"===t.prop.docs.example?n("div",{staticClass:"motion-example duration",style:{"animation-play-state":t.animationPlayState,"animation-duration":t.prop.value}}):t._e(),t._v(" "),"timing"===t.prop.docs.example?n("div",{staticClass:"motion-example",style:{"animation-play-state":t.animationPlayState,"animation-timing-function":t.prop.value}}):t._e()])])}),[],!1,null,null,null);a.default=o.exports},470:function(t,a,n){"use strict";n.r(a);var e={name:"TypeMotion",components:{TokenMotionExample:n(371).default},props:{prop:Object},data:function(){return{animate:!1}}},i=n(33),o=Object(i.a)(e,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("tr",[n("td",[n("token-motion-example",{attrs:{prop:t.prop}})],1),t._v(" "),n("td",[t._v(t._s(t.prop.name))]),t._v(" "),n("td",[t._v(t._s(t.prop.value))])])}),[],!1,null,null,null);a.default=o.exports}}]);