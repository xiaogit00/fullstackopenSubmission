(this.webpackJsonppart2=this.webpackJsonppart2||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var r=t(14),c=t.n(r),u=t(4),a=t(1),i=t(0),o=function(e){var n=e.value,t=e.handle;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("p",{children:["Filter shown with:",Object(i.jsx)("input",{value:n,onChange:t})]})})},s=t(3),l=t.n(s),d="api/persons",j=function(){return l.a.get(d).then((function(e){return e.data}))},b=function(e){return l.a.post(d,e).then((function(e){return e.data}))},f=function(e,n){return l.a.put("".concat(d,"/").concat(e),n).then((function(e){return e.data}))},h=function(e){return l.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))},m=function(e){var n=e.person,t=e.deleteHandler;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("p",{children:[" ",n.name," ",n.number," ",Object(i.jsx)("button",{onClick:function(){return t(n.id)},children:" Delete "})," "]})})},O=function(e){var n=e.persons,t=e.deleteHandler;return Object(i.jsx)(i.Fragment,{children:n.map((function(e,n){return Object(i.jsx)(m,{person:e,deleteHandler:t},n)}))})},p=function(e){return Object(i.jsxs)("form",{onSubmit:e.submitHandler,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:e.nameInput,onChange:e.nameHandle})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{value:e.numberInput,onChange:e.numberHandle})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})},x=function(e){var n=e.message;return null===n?null:Object(i.jsx)("div",{className:"error",children:n.error})},v=(t(38),function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),s=Object(u.a)(c,2),l=s[0],d=s[1],m=Object(a.useState)(""),v=Object(u.a)(m,2),g=v[0],H=v[1],w=Object(a.useState)(""),S=Object(u.a)(w,2),k=S[0],C=S[1],I=Object(a.useState)(null),y=Object(u.a)(I,2),F=y[0],D=y[1];Object(a.useEffect)((function(){j().then((function(e){return r(e)}))}),[]);console.log(F);var E=""===k?t:t.filter((function(e){return e.name.toLowerCase().includes(k)}));return Object(i.jsxs)("div",{children:[Object(i.jsx)(x,{message:F}),Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(o,{value:k,handle:function(e){C(e.target.value)}}),Object(i.jsx)(p,{submitHandler:function(e){e.preventDefault();var n={name:l,number:g};if(t.some((function(e){return e.name===l}))){if(window.confirm("".concat(l," is already added to phonebook,\n        replace the old number with the new one?"))){var c=t.filter((function(e){return e.name===l}))[0].id;f(c,n).then((function(e){r(t.map((function(e){return e.id===c?n:e})))}))}}else b(n).then((function(e){r(t.concat(e)),d(""),H("")})).catch((function(e){D(e.response.data),setTimeout((function(){D(null)}),5e3)}))},nameInput:l,nameHandle:function(e){d(e.target.value)},numberInput:g,numberHandle:function(e){H(e.target.value)}}),Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsx)(O,{persons:E,deleteHandler:function(e){h(e).then((function(){alert("Successfully deleted"),r(t.filter((function(n){return n.id!==e})))}))}})]})});c.a.render(Object(i.jsx)(v,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.34d30e49.chunk.js.map