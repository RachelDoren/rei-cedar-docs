(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{444:function(t,n,e){},662:function(t,n,e){"use strict";var c=e(444);e.n(c).a},729:function(t,n,e){"use strict";e.r(n);e(113);var c=e(507),a=(e(12),e(652)),s=e.n(a),i=e(653),o=e.n(i),r={name:"TokensSpaceExample",props:{name:String,isInset:{type:Boolean,default:!1}},data:function(){return{tokens:s.a}},computed:{spaceValue:function(){return this.tokens[o()(this.name)]},pad:function(){var t=this.spaceValue;if(t.indexOf(" ")<=0)return"".concat(t," ").concat(t);if(t.indexOf("*")>0){var n=t.split(") "),e=Object(c.a)(n,2),a=e[0],s=e[1];return"".concat(a,") ").concat(s)}var i=t.split(" "),o=Object(c.a)(i,2),r=o[0],u=o[1];return"".concat(r," ").concat(u)},inset:function(){var t=this.spaceValue;if(t.indexOf(" ")<=0)return this.getInset(t,t,"-".concat(t),"-".concat(t));if(t.indexOf("*")>0){var n=t.split(") "),e=Object(c.a)(n,2),a=e[0],s=e[1],i="".concat(a.slice(0,5),"-").concat(a.slice(5),")");return this.getInset("".concat(a,")"),s,i,"-".concat(s))}var o=t.split(" "),r=Object(c.a)(o,2),u=r[0],p=r[1];return this.getInset(u,p,"-".concat(u),"-".concat(p))}},methods:{getInset:function(t,n,e,c){return"inset ".concat(c," ").concat(e," 0 rgb(199, 220, 191), inset ").concat(n," ").concat(t," 0 rgb(199, 220, 191)")}}},u=(e(662),e(2)),p=Object(u.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{class:[this.isInset?"":"space-wrapper","cdr-mb-space-one-x"]},[this.isInset?n("div",{staticClass:"inset-example",style:{boxShadow:this.inset,padding:this.pad}},[this._v("content")]):n("div",{staticClass:"space-example",style:{width:this.spaceValue,height:this.spaceValue}})])}),[],!1,null,null,null);n.default=p.exports}}]);