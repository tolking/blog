(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{258:function(t,e,n){},273:function(t,e,n){"use strict";n(258)},282:function(t,e,n){"use strict";n.r(e);var l={data:()=>({count:2,style:"",flexFlow:"x",flexFlowList:["_","x","y","w","m"],justifyContent:"c",justifyContentList:["_","s","a","b","c","e"],alignItems:"c",alignItemsList:["_","s","b","c","e","h"],alignContent:"_",alignContentList:["_","s","a","b","c","e"]}),computed:{_flexFlow:{get(){return this.flexFlow},set(t){this.flexFlow=t,"x"!==t&&"y"!==t||(this.alignContent="")}}},methods:{changeCount(t){this.count+=t,this.count=this.count||1},setStyle(){let t="display: flex;";return this.flexFlow&&(t+={x:"flex-flow: row nowrap;",y:"flex-flow: column wrap;",w:"flex-flow: row wrap;",m:"flex-flow: column wrap;"}[this.flexFlow]),this.justifyContent&&(t+={s:"justify-content: flex-start;",a:"justify-content: space-around;",b:"justify-content: space-between;",c:"justify-content: center;",e:"justify-content: flex-end;"}[this.justifyContent]),this.alignItems&&(t+={s:"align-items: flex-start;",b:"align-items: baseline;",c:"align-items: center;",e:"align-items: flex-end;",h:"align-items: stretch;"}[this.alignItems]),this.alignContent&&(t+={s:"align-content: flex-start;",a:"align-content: space-around;",b:"align-content: space-between;",c:"align-content: center;",e:"align-content: flex-end;"}[this.alignContent]),this.style=t,t}}},i=(n(273),n(3)),s=Object(i.a)(l,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"flex"},[e("div",{staticClass:"flex-select"},[e("p",{staticStyle:{display:"inline-block"}},[t._v("flex-")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t._flexFlow,expression:"_flexFlow"}],staticClass:"select-item",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t._flexFlow=e.target.multiple?n:n[0]}}},t._l(t.flexFlowList,(function(n,l){return e("option",{key:l,domProps:{value:n}},[t._v(t._s(n))])})),0),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.justifyContent,expression:"justifyContent"}],staticClass:"select-item",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.justifyContent=e.target.multiple?n:n[0]}}},t._l(t.justifyContentList,(function(n,l){return e("option",{key:l,domProps:{value:n}},[t._v(t._s(n))])})),0),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.alignItems,expression:"alignItems"}],staticClass:"select-item",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.alignItems=e.target.multiple?n:n[0]}}},t._l(t.alignItemsList,(function(n,l){return e("option",{key:l,domProps:{value:n}},[t._v(t._s(n))])})),0),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.alignContent,expression:"alignContent"}],staticClass:"select-item",attrs:{disabled:"x"===t.flexFlow||"y"===t.flexFlow},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.alignContent=e.target.multiple?n:n[0]}}},t._l(t.alignContentList,(function(n,l){return e("option",{key:l,domProps:{value:n}},[t._v(t._s(n))])})),0)]),t._v(" "),e("div",{staticClass:"flex-btn",on:{click:function(e){return t.changeCount(1)}}},[t._v("add")]),t._v(" "),e("div",{staticClass:"flex-btn",on:{click:function(e){return t.changeCount(-1)}}},[t._v("del")]),t._v(" "),e("div",{staticClass:"flex-box",style:t.setStyle()},t._l(t.count,(function(n,l){return e("div",{key:l,staticClass:"box-item"},[t._v(t._s("box"+n))])})),0)])}),[],!1,null,"9bf93414",null);e.default=s.exports}}]);