(this["webpackJsonpkeeper-app"]=this["webpackJsonpkeeper-app"]||[]).push([[0],{14:function(e,t,n){e.exports=n(29)},29:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(8),c=n.n(l),o=n(12),u=n(5);var i=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Keeper"))};var m=function(){var e=(new Date).getFullYear();return r.a.createElement("footer",null,r.a.createElement("p",null,"Copyright \u24d2 ",e))},f=n(9),E=n.n(f),p=n(10),v=n.n(p);var s=function(e){return r.a.createElement("div",{className:"note"},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.content),r.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},r.a.createElement(E.a,{animation:v.a})))},d=n(6),b=n(41);var h=function(e){var t=Object(a.useState)({title:"",content:""}),n=Object(u.a)(t,2),l=n[0],c=n[1];function o(e){var t=e.target,n=t.name,a=t.value;c((function(e){return Object(d.a)(Object(d.a)({},e),{},{[n]:a})}))}return r.a.createElement("div",null,r.a.createElement("form",{className:"create-note"},r.a.createElement("input",{name:"title",onChange:o,value:l.title,placeholder:"Title"}),r.a.createElement("textarea",{name:"content",onChange:o,value:l.content,placeholder:"Take a note...",rows:"3"}),r.a.createElement("button",{onClick:function(t){e.onAdd(l),c({title:"",content:""}),t.preventDefault()}},r.a.createElement(b.a,{style:{fontSize:30}},"+"))))};var k=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],l=t[1];function c(e){l((function(t){return t.filter((function(t,n){return n!==e}))}))}return r.a.createElement("div",null,r.a.createElement(i,null),r.a.createElement(h,{onAdd:function(e){l((function(t){return[].concat(Object(o.a)(t),[e])}))}}),n.map((function(e,t){return r.a.createElement(s,{key:t,id:t,title:e.title,content:e.content,onDelete:c})})),r.a.createElement(m,null))};c.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.c18ff6d3.chunk.js.map