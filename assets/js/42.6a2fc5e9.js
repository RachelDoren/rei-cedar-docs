(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{407:function(t,e,a){},569:function(t,e,a){"use strict";var i=a(407);a.n(i).a},726:function(t,e,a){"use strict";a.r(e);a(63),a(99),a(565);var i=a(568),n={name:"css-utilities",props:{level:{type:Number,default:2},dataPath:{type:Array,default:function(){return["utility"]}}},data:function(){return{cssData:i}},mounted:function(){this.$parent.$emit("update-toc")},computed:{utilityData:function(){return this.dataPath.reduce((function(t,e){return t&&t[e]}),this.cssData)}},methods:{nextIsCategory:function(t){var e=Object.keys(t)[0];return!Object.prototype.hasOwnProperty.call(t[e],"description")},capitalize:function(t){return"".concat(t.charAt(0).toUpperCase()).concat(t.slice(1))}}},s=(a(569),a(2)),c=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"utility-wrapper"},[t._l(t.utilityData,(function(e,i){return[t.nextIsCategory(e)?[a("h"+t.level,{tag:"component",staticClass:"utility-class-title"},[t._v(t._s(t.capitalize(i)))]),t._v(" "),a("css-utilities",{attrs:{level:t.level+1,"data-path":t.dataPath.concat([i])}})]:[a("h"+t.level,{tag:"component",staticClass:"utility-class-title"},[t._v(t._s(t.capitalize(i)))]),t._v(" "),a("table",{staticClass:"utility-table cdr-mb-space-four-x"},[a("tbody",t._l(e,(function(e,i){return a("tr",[a("td",[a("p",[a("b",[t._v(t._s(i))])])]),t._v(" "),a("td",[a("p",[t._v(t._s(e.description))]),t._v(" "),a("p",[a("b",[t._v("Value:")]),t._v(" "+t._s(e.context.value))])])])})),0)])]]}))],2)}),[],!1,null,null,null);e.default=c.exports}}]);