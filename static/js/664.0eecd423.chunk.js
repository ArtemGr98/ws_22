"use strict";(self.webpackChunkway_of_the_samurai_2022=self.webpackChunkway_of_the_samurai_2022||[]).push([[664],{2664:function(e,n,r){r.r(n),r.d(n,{default:function(){return m}});var i=r(8687),t=r(5705),o=r(132),s=r(2281),a=r(7586),u=r(6871),d=r(184),p=(0,t.j0)({mapPropsToValues:function(){return{email:"",password:"",rememberMe:!1}},validationSchema:o.Ry().shape({email:o.Z_().email().required("Required"),password:o.Z_().min(8,"Must be longer than 8 characters").required("Required")}),handleSubmit:function(e,n){n.props.authLogin(e,n.setStatus).then((function(e){n.setSubmitting(!1),0===e&&n.resetForm({})}))},displayName:"LoginForm"})((function(e){return e.isAuthMe?(0,d.jsx)(u.Fg,{to:"/profile"}):(0,d.jsxs)(t.l0,{children:[(0,d.jsx)("h1",{children:"Login"}),(0,d.jsxs)("div",{children:[(0,d.jsx)(t.gN,{type:"email",name:"email",component:s.M5}),(0,d.jsx)(t.Bc,{name:"email",component:s.p8})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)(t.gN,{type:"password",name:"password",component:s.M5}),(0,d.jsx)(t.Bc,{name:"password",component:s.p8})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)(t.gN,{type:"checkbox",name:"rememberMe",id:"rememberMe"}),(0,d.jsx)("label",{htmlFor:"rememberMe",children:"rememberMe"})]}),(0,d.jsx)(s.p8,{children:e.status}),(0,d.jsx)(a.z,{type:"submit",disabled:e.isSubmitting,children:"Submit"})]})})),c=r(1024),m=(0,i.$j)((function(e){return{isAuthMe:e.authMe.isAuthMe}}),{authLogin:c.eU})(p)},7586:function(e,n,r){r.d(n,{z:function(){return o}});var i,t=r(168),o=r(6031).ZP.button(i||(i=(0,t.Z)(["\n  background: deepskyblue;\n  color: white;\n  border-radius: 8px;\n  cursor: pointer;\n  padding: 10px;\n  border: none;\n  :disabled {\n    opacity: 0.4;\n  }\n"])))},2281:function(e,n,r){r.d(n,{M5:function(){return b},p8:function(){return h},pk:function(){return f}});var i,t,o,s=r(8683),a=r(5987),u=r(168),d=r(6031),p=r(184),c=["field","form"],m=d.ZP.textarea(i||(i=(0,u.Z)(["\n  resize: none;\n  border-radius: 8px;\n  padding: 10px;\n  height: 50px;\n  width: 200px;\n"]))),l=d.ZP.input(t||(t=(0,u.Z)(["\n  border-radius: 6px;\n  padding: 5px 10px;\n  width: 200px;\n  border: 1px solid gray;\n"]))),h=d.ZP.div(o||(o=(0,u.Z)(["\n  font-weight: bold;\n  color: red;\n"]))),x=function(e){return function(n){var r=n.field,i=n.form,t=(i.touched,i.errors,(0,a.Z)(n,c));return(0,p.jsx)(e,(0,s.Z)((0,s.Z)({},r),t))}},b=x(l),f=x(m)}}]);
//# sourceMappingURL=664.0eecd423.chunk.js.map