(this.webpackJsonpclearcal=this.webpackJsonpclearcal||[]).push([[0],{46:function(e,t,n){},71:function(e,t,n){e.exports=n(91)},76:function(e,t,n){},82:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(5),o=n.n(r),l=(n(76),n(24),n(6));n(46),n(77),n(44),n(56);var i=n(57),u=n(26),s=function(){function e(){Object(i.a)(this,e)}return Object(u.a)(e,null,[{key:"updateEvent",value:function(e,t,n){return fetch("http://127.0.0.1:8000/api/events/".concat(e,"/"),{method:"PUT",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Token ".concat(n)},body:JSON.stringify(t)}).then((function(e){return e.json()}))}},{key:"createEvent",value:function(e,t){return fetch("http://127.0.0.1:8000/api/events/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(t)},body:JSON.stringify(e)}).then((function(e){return e.json()}))}},{key:"deleteEvent",value:function(e,t,n){return fetch("http://127.0.0.1:8000/api/events/".concat(e,"/"),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(t)},body:JSON.stringify(n)})}},{key:"loginUser",value:function(e){return fetch("http://127.0.0.1:8000/auth/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()}))}}]),e}(),d=n(108);n(58),n(81);var p=function(e){var t=Object(d.a)(["cc-token"]),n=Object(l.a)(t,1)[0],r=Object(d.a)(["cc-user-id"]),o=Object(l.a)(r,1)[0],i=Object(a.useState)(""),u=Object(l.a)(i,2),p=u[0],h=u[1],m=Object(a.useState)(""),b=Object(l.a)(m,2),E=b[0],f=b[1],v=Object(a.useState)(""),j=Object(l.a)(v,2),O=j[0],g=j[1],y=Object(a.useState)(""),k=Object(l.a)(y,2),T=k[0],w=k[1];return Object(a.useEffect)((function(){e.eventToEdit?(h(e.eventToEdit.title),f(e.eventToEdit.description)):(h(""),f(""))}),[e.eventToEdit]),c.a.createElement("div",null,e.eventToEdit?c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"title"},"Title"),c.a.createElement("br",null),c.a.createElement("input",{id:"title",type:"text",placeholder:"title",value:p,onChange:function(e){return h(e.target.value)}}),c.a.createElement("br",null),c.a.createElement("label",{htmlFor:"description",id:"description"},"Description"),c.a.createElement("br",null),c.a.createElement("textarea",{id:"description",type:"text",placeholder:"description",value:E,onChange:function(e){return f(e.target.value)}}),c.a.createElement("br",null),c.a.createElement("button",{onClick:function(){s.updateEvent(e.eventToEdit.id,{title:p,description:E,all_day:!1,start:e.eventToEdit.start,end:e.eventToEdit.end,organizer:o["cc-user-id"],shifts:[]},n["cc-token"]).then((function(t){return e.updateEvents(t)})).catch((function(e){return console.log(e)}))}},"Update")):c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"title"},"Title"),c.a.createElement("br",null),c.a.createElement("input",{id:"title",type:"text",placeholder:"title",value:p,onChange:function(e){return h(e.target.value)}}),c.a.createElement("br",null),c.a.createElement("label",{htmlFor:"description",id:"description"},"Description"),c.a.createElement("br",null),c.a.createElement("textarea",{id:"description",type:"text",placeholder:"description",value:E,onChange:function(e){return f(e.target.value)}}),c.a.createElement("br",null),c.a.createElement("label",{htmlFor:"start",id:"start"},"Start"),c.a.createElement("br",null),c.a.createElement("textarea",{id:"start",type:"date",placeholder:"start",value:O,onChange:function(e){return g(e.target.value)}}),c.a.createElement("br",null),c.a.createElement("label",{htmlFor:"end",id:"end"},"End"),c.a.createElement("br",null),c.a.createElement("textarea",{id:"end",type:"date",placeholder:"end",value:T,onChange:function(e){return w(e.target.value)}}),c.a.createElement("br",null),c.a.createElement("button",{onClick:function(){s.createEvent({title:p,description:E,all_day:!1,start:O,end:T,organizer:"1",shifts:[]},n["cc-token"]).then((function(e){return console.log(e)})).then(window.location.href="/").catch((function(e){return console.log(e)}))}},"Add")))};n(82),n(59),n(111),n(60),n(61),n(62),n(109);n(64),n(113),n(31);var h=function(){var e=Object(d.a)(["cc-token"]),t=Object(l.a)(e,3),n=t[0],c=(t[1],t[2],Object(d.a)(["cc-user-id"])),r=Object(l.a)(c,3),o=(r[0],r[1],r[2],Object(a.useState)(null)),i=Object(l.a)(o,2),u=(i[0],i[1],Object(a.useState)([])),s=Object(l.a)(u,2),p=(s[0],s[1]),h=Object(a.useState)(!1),m=Object(l.a)(h,2),b=(m[0],m[1],Object(a.useState)(!1)),E=Object(l.a)(b,2),f=(E[0],E[1]);Object(a.useEffect)((function(){fetch("http://127.0.0.1:8000/api/events/",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return v(e)})).catch((function(e){return console.log(e)}))}),[]),Object(a.useEffect)((function(){n["cc-token"]?f(!0):f(!1)}),[n]);var v=function(e){var t=e.map((function(e){return{id:e.id,title:e.title,description:e.title,allDay:!1,start:new Date(e.start),end:new Date(e.end),organizer:e.organizer}}));console.log(t),p(t)}};var m=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(""),i=Object(l.a)(o,2),u=i[0],p=i[1],h=Object(d.a)(["cc-token"]),m=Object(l.a)(h,2),b=m[0],E=m[1],f=Object(d.a)(["cc-user-id"]),v=Object(l.a)(f,2),j=(v[0],v[1]);return Object(a.useEffect)((function(){console.log(b),b["cc-token"]&&(window.location.href="/")}),[b]),c.a.createElement("div",null,c.a.createElement("h1",null,"Login"),c.a.createElement("label",{htmlFor:"username"},"Username"),c.a.createElement("br",null),c.a.createElement("input",{id:"username",type:"text",placeholder:"username",value:n,onChange:function(e){return r(e.target.value)}}),c.a.createElement("br",null),c.a.createElement("label",{htmlFor:"password",id:"password"},"Password"),c.a.createElement("br",null),c.a.createElement("input",{id:"password",type:"password",placeholder:"password",value:u,onChange:function(e){return p(e.target.value)}}),c.a.createElement("br",null),c.a.createElement("button",{onClick:function(){s.loginUser({username:n,password:u}).then((function(e){j("cc-user-id",e.id),E("cc-token",e.token)})).catch((function(e){return console.log(e)}))}},"Login"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=n(65),E=n(9),f=n(112);o.a.render(c.a.createElement(f.a,null,c.a.createElement(b.a,null,c.a.createElement(E.a,{exact:!0,path:"/auth",component:m}),c.a.createElement(E.a,{exact:!0,path:"/create-event",component:p}),c.a.createElement(E.a,{exact:!0,path:"/",component:h}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[71,1,2]]]);
//# sourceMappingURL=main.f4b78e72.chunk.js.map