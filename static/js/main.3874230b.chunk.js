(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{20:function(e,n,t){"use strict";t.r(n);var r,c,a,i,o,d,s,j,b,u,l,m,O,h,p=t(0),f=t.n(p),g=t(9),x=t.n(g),v=t(4),y=t(2),S=t(3),w=t(1),k="https://student-json-api.lidemy.me/comments",z=S.a.div(r||(r=Object(y.a)(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: #333a;\n  color: #fff;\n  font-size: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),J=S.a.div(c||(c=Object(y.a)(["\n  width: 600px;\n  margin: 0 auto;\n"]))),A=S.a.h1(a||(a=Object(y.a)(["\n  color: #333;\n"]))),C=S.a.form(i||(i=Object(y.a)(["\n  margin-top: 1rem;\n"]))),D=S.a.input(o||(o=Object(y.a)(["\n  border: 1px solid #333;\n  border-radius: 0.25rem;\n  margin-bottom: 0.5rem;\n  padding: 0.5rem;\n  font-size: 1.25rem;\n"]))),E=S.a.textarea(d||(d=Object(y.a)(["\n  width: 99%;\n  height: 5rem;\n  resize: vertical;\n  border-radius: 0.25rem;\n  padding: 0.5rem;\n  font-size: 1.25rem;\n"]))),F=S.a.button(s||(s=Object(y.a)(["\ndisplay: block;\nwidth: 100%;\nmargin-top: 0.5rem;\npadding: 0.5rem;\nborder: none;\nborder-radius: 0.5rem;\n"]))),L=S.a.div(j||(j=Object(y.a)(["\n  margin-top: 0.5rem;\n  padding: 0.5rem;\n  border: 1px solid #3335;\n  border-radius: 0.5rem;\n"]))),N=S.a.div(b||(b=Object(y.a)(["\n  padding: 1rem 0.5rem;\n"]))),_=S.a.div(u||(u=Object(y.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid #3335;\n"]))),B=S.a.div(l||(l=Object(y.a)([""]))),I=S.a.div(m||(m=Object(y.a)([""]))),M=S.a.div(O||(O=Object(y.a)(["\n  margin-top: 0.5rem;\n"]))),P=S.a.h2(h||(h=Object(y.a)(["\n  color: #f009;\n"])));function T(e){var n=e.author,t=e.time,r=e.children;return Object(w.jsxs)(N,{children:[Object(w.jsxs)(_,{children:[Object(w.jsx)(B,{children:n}),Object(w.jsx)(I,{children:t})]}),Object(w.jsx)(M,{children:r})]})}var q=function(){var e=Object(p.useState)(null),n=Object(v.a)(e,2),t=n[0],r=n[1],c=Object(p.useState)(null),a=Object(v.a)(c,2),i=a[0],o=a[1],d=Object(p.useState)(""),s=Object(v.a)(d,2),j=s[0],b=s[1],u=Object(p.useState)(""),l=Object(v.a)(u,2),m=l[0],O=l[1],h=Object(p.useState)(null),f=Object(v.a)(h,2),g=f[0],x=f[1],y=Object(p.useState)(!1),S=Object(v.a)(y,2),N=S[0],_=S[1],B=function(){return x(null)};Object(p.useEffect)((function(){return I()}),[]);var I=function(){fetch("".concat(k,"?_sort=createdAt&_order=desc")).then((function(e){return e.json()})).then((function(e){return r(e)})).catch((function(e){return o(e.toString())}))};return Object(w.jsxs)(J,{children:[(!t||N)&&Object(w.jsx)(z,{children:"Loading..."}),Object(w.jsx)(A,{children:"\u7c21\u6613\u7559\u8a00\u677f\u5566\u5225\u8981\u6c42\u592a\u591a"}),Object(w.jsxs)(C,{onSubmit:function(e){e.preventDefault(),N||(_(!0),fetch(k,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nickname:j,body:m})}).then((function(e){return e.json()})).then((function(e){if(_(!1),0===e.ok)return x(e.message);b(""),O(""),I()})).catch((function(e){_(!1),x(e.toString())})))},children:[Object(w.jsx)(D,{value:j,onChange:function(e){return b(e.target.value)},onFocus:B,placeholder:"nickname"}),Object(w.jsx)(E,{value:m,onChange:function(e){return O(e.target.value)},onFocus:B,placeholder:"content"}),Object(w.jsx)(F,{children:"\u9001\u51fa"})]}),g&&Object(w.jsx)(P,{children:g}),i&&Object(w.jsxs)(P,{children:["Something went wrong: ",i]}),t&&Object(w.jsxs)(L,{children:[0===t.length&&Object(w.jsx)("p",{children:"No messages."}),t.map((function(e){return Object(w.jsx)(T,{author:e.nickname,time:new Date(e.createdAt).toLocaleString(),children:e.body},e.id)}))]})]})};x.a.render(Object(w.jsx)(f.a.StrictMode,{children:Object(w.jsx)(q,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.3874230b.chunk.js.map