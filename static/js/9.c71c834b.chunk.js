(this.webpackJsonpenter=this.webpackJsonpenter||[]).push([[9],{124:function(e,t,n){e.exports={loginHolder:"Login_loginHolder__36CgU",register:"Login_register__3wnff",alert:"Login_alert__2XWIN",leftSide:"Login_leftSide__k6a4Y",registerForm:"Login_registerForm__3hOeP",lead:"Login_lead__1iB_7",title:"Login_title__1PdWF",info:"Login_info__1uVr_",registerInput:"Login_registerInput__1wdSC",passInput:"Login_passInput__2qJl8",registerSubmitBtn:"Login_registerSubmitBtn__3Bi_4",signIn:"Login_signIn__1GEZZ",orStyle:"Login_orStyle__1s3W7",signInLink:"Login_signInLink__11JxG",rightSide:"Login_rightSide__1lhZg",appeal:"Login_appeal__1F9wh",brandName:"Login_brandName__2kGOk",message:"Login_message__2B0AY",appealBtn:"Login_appealBtn__1kbt3"}},140:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var s=n(11),a=n(1),i=n(4),r=n(95),c=n(40),l=n(124),o=n.n(l),_=n(0),d=function(e){var t=e.setToken,n=Object(a.useRef)(null),l=Object(a.useRef)(null),d=Object(a.useState)(!1),g=Object(s.a)(d,2),u=g[0],j=g[1];Object(a.useEffect)((function(){n.current.value="eve.holt@reqres.in",l.current.value="cityslicka"}),[]);return Object(_.jsxs)("div",{className:o.a.loginHolder,children:[Object(_.jsx)("div",{className:"container",children:Object(_.jsxs)("div",{className:o.a.register,children:[Object(_.jsxs)("div",{className:o.a.leftSide,children:[Object(_.jsxs)("form",{className:o.a.registerForm,onSubmit:function(e){e.preventDefault(),r.a.post("/login",{email:n.current.value,password:l.current.value}).then((function(e){window.localStorage.setItem("sessionToken",e.data.token),t(e.data.token)})).catch((function(e){alert(e),console.error(e),j(!0)}))},children:[Object(_.jsxs)("div",{className:o.a.lead,children:[Object(_.jsx)("h3",{className:o.a.title,children:"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0430\u044f \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(_.jsxs)("h2",{className:o.a.info,children:["(",Object(_.jsx)("a",{href:"https://reqres.in",target:"_blank",children:"ReqRes.in"})," API)"]})]}),Object(_.jsx)("input",{className:"".concat(o.a.registerInput," ").concat(o.a.emailInput),ref:n,type:"text",placeholder:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b",required:!0}),Object(_.jsx)("input",{className:"".concat(o.a.registerInput," ").concat(o.a.passInput),ref:l,type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0}),Object(_.jsx)("button",{className:o.a.registerSubmitBtn,type:"submit",children:"\u0414\u0430\u043b\u0435\u0435"}),u&&Object(_.jsx)("h2",{className:o.a.alert,children:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430 \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u043d\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b!"})]}),Object(_.jsxs)("div",{className:o.a.signIn,children:[Object(_.jsx)("span",{className:o.a.orStyle,children:"\u0438\u043b\u0438"}),Object(_.jsx)(i.b,{className:o.a.signInLink,to:"/login",children:"\u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443, \u0435\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442 enter.uz"})]})]}),Object(_.jsx)("div",{className:o.a.rightSide,children:Object(_.jsxs)("div",{className:o.a.appeal,children:[Object(_.jsx)("h2",{className:o.a.brandName,children:"enter"}),Object(_.jsx)("p",{className:o.a.message,children:"\u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u0434\u043b\u044f \u0441\u0435\u0431\u044f \u0446\u0435\u043b\u0443\u044e \u043f\u043b\u043e\u0448\u0430\u0434\u043a\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0434\u0430\u0436\u0435"}),Object(_.jsx)("button",{className:o.a.appealBtn,children:"\u041a\u0430\u043a \u044d\u0442\u043e \u0434\u0435\u043b\u0430\u0442\u044c?"})]})})]})}),Object(_.jsx)(c.a,{})]})}},95:function(e,t,n){"use strict";var s=n(96),a=n.n(s),i=window.localStorage.getItem("sessionToken"),r=a.a.create({baseURL:"https://reqres.in/api",headers:{token:i||""}});t.a=r}}]);
//# sourceMappingURL=9.c71c834b.chunk.js.map