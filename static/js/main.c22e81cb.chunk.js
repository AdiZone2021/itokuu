(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(e,t,s){},43:function(e,t,s){},44:function(e,t,s){"use strict";s.r(t);var c=s(5),j=s.n(c),r=s(12),b=s.n(r),i=(s(17),s(7)),a=s(6),l=s(0);var h=function(e){var t=e.Login,s=e.error,j=Object(c.useState)({name:"",email:"",password:""}),r=Object(i.a)(j,2),b=r[0],h=r[1];return Object(l.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(b)},children:Object(l.jsxs)("div",{className:"form-inner",children:[Object(l.jsx)("h2",{children:"\u041a\u0430\u0442\u0442\u0430\u043b\u0443\u0443"}),""!=s?Object(l.jsx)("div",{className:"error",children:s}):"",Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"name",children:"\u0410\u0442\u044b \u0436\u04e9\u043d\u04af:"}),Object(l.jsx)("input",{placeholder:"\u041b\u043e\u0433\u0438\u043d",type:"text",name:"name",id:"name",onChange:function(e){return h(Object(a.a)(Object(a.a)({},b),{},{name:e.target.value}))},value:b.name})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"email",children:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u0434\u0443\u043a \u0434\u0430\u0440\u0435\u043a:"}),Object(l.jsx)("input",{placeholder:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u0434\u0443\u043a \u043f\u043e\u0447\u0442\u0430",type:"email",name:"email",id:"email",onChange:function(e){return h(Object(a.a)(Object(a.a)({},b),{},{email:e.target.value}))},value:b.email})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"password",children:"\u041f\u0430\u0440\u043e\u043b\u044c:"}),Object(l.jsx)("input",{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",name:"password",id:"password",onChange:function(e){return h(Object(a.a)(Object(a.a)({},b),{},{password:e.target.value}))},value:b.password})]}),Object(l.jsx)("input",{type:"submit",value:"\u041a\u0438\u0440\u0443\u0443"})]})})},n=s(4),O=s.n(n),o=(s(43),s.p+"static/media/one.9910070a.png"),d=s.p+"static/media/two.3e23e33a.png",x=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{className:"foto",src:o})}),Object(l.jsx)("div",{children:Object(l.jsx)("img",{className:"foto",src:d})}),Object(l.jsx)("div",{children:Object(l.jsx)("img",{className:"foto",src:"data:image/png;base64,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"})})]})})};var u=function(){var e="Okuuit@gmail.com",t="nomad2022",s=Object(c.useState)({name:"",email:""}),j=Object(i.a)(s,2),r=j[0],b=j[1],a=Object(c.useState)(""),n=Object(i.a)(a,2),o=n[0],d=n[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(x,{}),Object(l.jsx)("div",{className:"log",children:""!=r.email?Object(l.jsxs)("div",{className:"welcome",children:[Object(l.jsxs)("h2",{children:[" \u041a\u043e\u0448 \u043a\u0435\u043b\u0434\u0438\u04a3\u0438\u0437, ",Object(l.jsx)("span",{children:r.name})]}),Object(l.jsx)("button",{className:"btn",onClick:function(){b({name:"",email:""})},children:"\u0427\u044b\u0433\u0443\u0443"}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"player",children:[Object(l.jsx)("h3",{children:"#1-\u0441\u0430\u0431\u0430\u043a. HTML \u0434\u0435\u0433\u0435\u043d \u044d\u043c\u043d\u0435? \u041a\u0438\u0440\u0438\u0448\u04af\u04af \u0441\u0430\u0431\u0430\u043a"}),Object(l.jsx)("br",{}),Object(l.jsx)(O.a,{controls:!0,url:"https://youtu.be/9Udl8WvTba4",fluid:!1,width:500,height:400})]}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"player",children:[Object(l.jsx)("h4",{children:"#2-HTML \u0441\u0430\u0431\u0430\u043a\u0442\u0430\u0440. HTML \u0442\u0435\u0433\u0442\u0435\u0440. Div HEADER Footer NAV \u0431\u043b\u043e\u043a \u0442\u0435\u0433\u0438 \u0436\u04e9\u043d\u04af\u043d\u0434\u04e9 \u0441\u04e9\u0437 \u0431\u043e\u043b\u043e\u0442."}),Object(l.jsx)("br",{}),Object(l.jsx)(O.a,{controls:!0,url:"https://youtu.be/dSMWopvbBnA",fluid:!1,width:500,height:400})]}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"player",children:[Object(l.jsxs)("h5",{children:["#3 HTML \u0441\u0430\u0431\u0430\u043a\u0442\u0430\u0440. \u0411\u0443\u043b \u0441\u0430\u0431\u0430\u043a\u0442\u0430, \u043e\u0448\u043e\u043d\u0434\u043e\u0439 \u044d\u043b\u0435 \u043c\u0430\u0437\u043c\u0443\u043d\u0443 \u0431\u0435\u0442\u0442\u0435\u0433\u0438,",Object(l.jsx)("br",{})," \u0422\u0435\u043a\u0441\u0442 \u0421\u04af\u0440\u04e9\u0442\u0442\u04e9\u0440 \u043c\u0435\u043d\u0435\u043d \u0431\u0430\u0448\u043a\u0430\u0447\u0430 \u0430\u0439\u0442\u043a\u0430\u043d\u0434\u0430 \u043c\u0430\u0437\u043c\u0443\u043d\u0443 \u043c\u0435\u043d\u0435\u043d \u0438\u0448\u0442\u04e9\u04e9 \u04af\u0447\u04af\u043d \u0442\u0435\u0433\u0442\u0435\u0440 \u043c\u0435\u043d\u0435\u043d \u0442\u0430\u0430\u043d\u044b\u0448\u0430\u0431\u044b\u0437.",Object(l.jsx)("br",{})," H1-H6 \u0442\u0435\u0433\u0438 , a, SPAN, P, IMG, ul\\OL\\LI \u0436\u0430\u043d\u0430 BR."]}),Object(l.jsx)("br",{}),Object(l.jsx)(O.a,{controls:!0,url:"https://youtu.be/PA9QIhDagZc",fluid:!1,width:500,height:400})]}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"player",children:[Object(l.jsxs)("h5",{children:["#4  \u0411\u04e9\u043b\u04af\u043c \u21164.  FORM, INPUT, TEXTAREA, SELECT, OPTION \u0438 BUTTON,",Object(l.jsx)("br",{})," \u043e\u0448\u043e\u043d\u0434\u043e\u0439 \u044d\u043b\u0435 \u0430\u043b\u0430\u0440\u0434\u044b\u043d \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0442\u0430\u0440\u044b\u043d \u0438\u0437\u0438\u043b\u0434\u04e9\u04e9.",Object(l.jsx)("br",{})," \u0421\u0430\u0431\u0430\u043a\u0442\u044b\u043d \u0430\u044f\u0433\u044b\u043d\u0434\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0430\u043b\u044b\u043a \u0442\u0430\u043f\u0448\u044b\u0440\u043c\u0430 \u0431\u043e\u043b\u043e\u0442:)"]}),Object(l.jsx)("br",{}),Object(l.jsx)(O.a,{controls:!0,url:"https://youtu.be/MGKs8JHk8uA",fluid:!1,width:500,height:400})]}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"player",children:[Object(l.jsxs)("h5",{children:["#5 CSS \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441\u0438. CSS \u0441\u0442\u0438\u043b\u0434\u0435\u0440 \u043a\u0430\u0441\u043a\u0430\u0434\u0434\u044b\u043a \u0436\u0430\u0434\u044b\u0431\u0430\u043b\u0434\u0430\u0440 \u043c\u0435\u043d\u0435\u043d \u0442\u0430\u0430\u043d\u044b\u0448\u0430 \u0430\u043b\u0430\u0441\u044b\u0437. ",Object(l.jsx)("br",{}),"CSS \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0442\u0438  \u0438\u0437\u0438\u043b\u0434\u04e9\u04e9"]}),Object(l.jsx)("br",{}),Object(l.jsx)(O.a,{controls:!0,url:"https://youtu.be/sq-rtWIstoY",fluid:!1,width:500,height:400})]}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"player",children:[Object(l.jsx)("h5",{children:"\u2116 6.  \u0422\u0435\u043a\u0441\u0442 \u0436\u0430\u043d\u0430 \u0442\u0430\u043c\u0433\u0430\u043b\u0430\u0440 \u043c\u0435\u043d\u0435\u043d \u0438\u0448\u0442\u04e9\u04e9 \u04af\u0447\u04af\u043d \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043b\u0435\u0440 \u043c\u0435\u043d\u0435\u043d \u0442\u0430\u0430\u043d\u044b\u0448\u0430\u0431\u044b\u0437."}),Object(l.jsx)("br",{}),Object(l.jsx)(O.a,{controls:!0,url:"https://youtu.be/Qvv-sZs_gRU",fluid:!1,width:500,height:400})]}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"player",children:[Object(l.jsx)("h5",{children:"#7.\u041a\u0430\u0441\u0438\u0435\u0442\u0442\u0435\u0440\u0438 \u0431\u043b\u043e\u043a\u0442\u043e\u0440. \u0427\u0435\u0433\u0438\u043d\u04af\u04af \u043c\u04af\u043d\u04e9\u0437\u0434\u04e9\u043c\u04e9\u0441\u04af \u04e9\u043b\u0447\u04e9\u043c\u0434\u04e9\u0440\u04af."}),Object(l.jsx)("br",{}),Object(l.jsx)(O.a,{controls:!0,url:"https://youtu.be/n1TcgBRqX5A",fluid:!1,width:500,height:400})]}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"player",children:[Object(l.jsx)("h5",{children:"#8 \u041a\u0430\u0441\u0438\u0435\u0442\u0442\u0435\u0440\u0438 \u0436\u0430\u043d\u0430 \u0442\u04af\u0440\u0434\u04af\u04af \u0431\u043b\u043e\u043a\u0442\u043e\u0440 \u0441\u0442\u0438\u043b\u0434\u0435\u0440\u0438. CSS opacity."}),Object(l.jsx)("br",{}),Object(l.jsx)(O.a,{controls:!0,url:"https://youtu.be/cUoiiS9_dGs",fluid:!1,width:500,height:400})]}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"player",children:[Object(l.jsx)("h5",{children:"#9 CSS \u043c\u04af\u043b\u043a BACKGROUND."}),Object(l.jsx)("br",{}),Object(l.jsx)(O.a,{controls:!0,url:"https://youtu.be/pOIQBQdwFCo",fluid:!1,width:500,height:400})]}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"player",children:[Object(l.jsx)("h5",{children:"#9 CSS \u043c\u04af\u043b\u043a BACKGROUND."}),Object(l.jsx)("br",{}),Object(l.jsx)(O.a,{controls:!0,url:"https://youtu.be/ZtNAqvUZg2E",fluid:!1,width:500,height:400})]})]}):Object(l.jsx)(h,{Login:function(s){console.log(s),s.email==e&&s.password==t?(console.log("Logged in"),b({name:s.name,email:s.email})):(console.log("Details do not match!"),d("\u041c\u0430\u0430\u043b\u044b\u043c\u0430\u0442\u0442\u0430\u0440 \u0434\u0430\u043b \u043a\u0435\u043b\u0433\u0435\u043d \u0436\u043e\u043a!"))},error:o})})]})},g=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,45)).then((function(t){var s=t.getCLS,c=t.getFID,j=t.getFCP,r=t.getLCP,b=t.getTTFB;s(e),c(e),j(e),r(e),b(e)}))};b.a.render(Object(l.jsx)(j.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),g()}},[[44,1,2]]]);
//# sourceMappingURL=main.c22e81cb.chunk.js.map