(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(6),a=n.n(o),i=n(8),u=n(2),s=n(17),j=n(0),b=function(e){var t=e.number,n=void 0===t?"":t,c=e.name,r=void 0===c?"":c,o=e.onFormSubmit,a=e.onInpuChangeName,i=e.onInpuChangeNumber;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsxs)("form",{onSubmit:o,children:[Object(j.jsx)("h2",{children:"Name"}),Object(j.jsx)("input",{type:"text",value:r,onChange:a}),Object(j.jsx)("h2",{children:"Number"}),Object(j.jsx)("input",{type:"text",value:n,onChange:i}),Object(j.jsx)("button",{type:"submit",children:" add contact "})]})]})},l=function(e){var t=e.onSubmit,n=Object(c.useState)(""),r=Object(u.a)(n,2),o=r[0],a=r[1],i=Object(c.useState)(""),l=Object(u.a)(i,2),m=l[0],d=l[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(b,{name:o,number:m,onFormSubmit:function(e){if(e.preventDefault(),o&&m){var n={id:Object(s.a)(),name:o,number:m};t(n),a(""),d("")}},onInpuChangeName:function(e){a(e.target.value)},onInpuChangeNumber:function(e){d(e.target.value)}})})},m=function(e){var t=e.todos,n=e.onDeleteContact;return Object(j.jsx)("ul",{children:t.map((function(e){var t=e.id,c=e.name,r=e.number;return Object(j.jsxs)("li",{children:[c,": ",r,Object(j.jsx)("button",{onClick:function(){return n(t)},children:"x"})]},t)}))})},d=function(e){var t=e.filter,n=e.onChengeFilter;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:" Find contacts by name "}),Object(j.jsx)("input",{type:"text",value:t,onChange:n})]})},O=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(""),a=Object(u.a)(o,2),s=a[0],b=a[1],O=s.toLowerCase(),h=n.filter((function(e){return e.name.toLowerCase().includes(O)}));return Object(c.useEffect)((function(){r(JSON.parse(localStorage.getItem("todos")))}),[]),Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l,{onSubmit:function(e){n.find((function(t){var n=t.name,c=t.number;return n===e.name||c===e.number}))?alert("".concat(e.name," is already in contacts")):r((function(t){return[e].concat(Object(i.a)(t))}))}}),n.length>1&&Object(j.jsx)(d,{filter:s,onChengeFilter:function(e){b(e.target.value)}}),Object(j.jsx)(m,{todos:h,onDeleteContact:function(e){r((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})},h=n(7),f=n.n(h),x=function(){return Object(j.jsx)("div",{className:f.a.mainContainer,children:Object(j.jsx)(O,{})})};n(14);a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={mainContainer:"styles_mainContainer__2dGI2"}}},[[15,1,2]]]);
//# sourceMappingURL=main.c954d4a1.chunk.js.map