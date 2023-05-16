"use strict";(self.webpackChunktweets=self.webpackChunktweets||[]).push([[105],{7869:function(n,e,r){r.r(e),r.d(e,{default:function(){return B}});var a=r(9439),t=r(2791),i=r(5218),o=[{value:"all",label:"all"},{value:"follow",label:"follow"},{value:"following",label:"following"}],s=r(4165),l=r(5861),c=r(1243);c.Z.defaults.baseURL="https://64594dab8badff578e0a558e.mockapi.io/";var p=function(){var n=(0,l.Z)((0,s.Z)().mark((function n(){var e,r;return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("users");case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();function x(){return JSON.parse(localStorage.getItem("isFollowing"))}function d(n){localStorage.setItem("isFollowing",JSON.stringify(n))}var u,A,f,g,w,h,v=r(3433),b=r(1413),m=r(4925),j=r(168),R=r(4313),U=R.ZP.button(u||(u=(0,j.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 196px;\n  height: 50px;\n  padding: 14px 28px;\n  gap: 6px;\n  margin-top: 20px;\n  font-family: 'Montserrat', sans-serif;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  color: var(--primary);\n  background: var(--second);\n  border: none;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n  &[data-isfollow='true'] {\n    background: var(--active);\n  }\n  cursor: pointer;\n  :hover {\n    background: var(--shadow);\n  }\n"]))),Y=r(184),C=["onClick","children"],k=function(n){var e=n.onClick,r=n.children,a=(0,m.Z)(n,C);return(0,Y.jsx)(U,(0,b.Z)((0,b.Z)({onClick:e},a),{},{children:r}))},y=r.p+"static/media/tweet.010ab3c33bc13f300d33.png",H=R.ZP.li(A||(A=(0,j.Z)(["\n  display: flex;\n  padding-top: 28px;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  width: 380px;\n  font-family: 'Montserrat', sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 24px;\n  text-transform: uppercase;\n  color: var(--second);\n  background: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\n  border-radius: 20px;\n\n  &::before {\n    position: absolute;\n    content: '';\n    width: 380px;\n    height: 8px;\n    left: 0px;\n    top: 214px;\n    background: var(--second);\n    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n      inset 0px -1.71846px 3.43693px #ae7be3,\n      inset 0px 3.43693px 2.5777px #fbf8ff;\n  }\n\n  & .logo {\n    position: absolute;\n    width: 76px;\n    height: 22px;\n    top: 20px;\n    left: 20px;\n    background-image: url('","');\n    background-size: cover;\n  }\n  & .tweet {\n    display: inline-block;\n    width: 308px;\n    height: 168px;\n    background-image: url('","');\n    background-size: cover;\n  }\n\n  & .avatar {\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    top: 218px;\n    left: 180px;\n    transform: translate(-50%, -50%);\n    width: 80px;\n    height: 80px;\n    background: var(--second);\n    overflow: hidden;\n    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),\n      inset 0px -2.19582px 4.39163px #ae7be3,\n      inset 0px 4.39163px 3.29372px #fbf8ff;\n\n    border-radius: 50%;\n  }\n\n  & .avatar img {\n    width: 62px;\n    height: 62px;\n    object-fit: cover;\n    border-radius: 50%;\n    background-color: var(--back_primary);\n  }\n  & .tweets {\n    margin-top: 88px;\n    margin-bottom: 16px;\n  }\n\n  & button {\n    margin-top: 26px;\n    margin-bottom: 36px;\n  }\n"])),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKGSURBVHgB1VixThtBEJ2L4sJICVJIQREKUpDiGkdK4xRpqPPHSZPCFCmSAgosAcVRuMANBS7OknnvbhaNlzvvnsF4edLIe765vd2nmTezly0Wi5+yfdzB/mRZVrY5YJ1f8fNJtow3kgZ2YAN5BUiFMGIfUfRFEkdKhBFHIG1fEkZqhBEDkLYjiSJFwnqwIUjrSYJ4G+k3h13AprAZrC+1UB/A9hr8b2GF+pfqf6AWA1cE/sp6mMDOdHwI+6zjE6krchu4zu8r7kcRRoJGKPn2RRyTjAKRcIRfK9Zj+J57c1T+8B3rgvoSRlUEGuaKwdytF3PM7Tq8fSwBvhJCKCWXyGKawHY9jdk148JuUP0ffHWekdQRGwMWgdiojAHX/lHtIeXdf9KcLUsIRdiNIYsb/yG1xvD6Uup0s1VtbBbBNMh1zDlOOBcN10zv2BYih/9UngffzPg3rNR9DSUSoQi7NmNqCskiKf+l1qmZjhkxtx65uXnWb0y7EFAVAYnX240itAib7053piDmxjqpjpUNvtLy30y6IRON7G0jFGFWq9wm+4yghrL/3owZfb5OWZJiRN+B84ykO8kbQYgwK4JMPS6aqXUsjwWyp8Ipeog+Nfdc6jp0EfLTVZXtpRFKyUOQUDixxvUv1aey5csCU7NKV9xny8F+qGc3rM/HHn/YohSSEEIR5rrupdbAkqUHZnd/D9cDl670ayBrKHF6NFmzB9soYioPN3nMSJO6g57rc0xJppa/+ar7h/+V1FomAf8m+CncFR/0+xnxrsUn16a2U/Xt4tz1aJPLeqhEftXHxMj3hw7wa30VSfHw/S8lkfeRGmEU+YkkjJQIS1LkfaRC2FNF/sVwDzHOB2t0D1rCAAAAAElFTkSuQmCC",y),I=function(n){var e=n.userInfo,r=n.rerender,i=(0,t.useState)(!1),o=(0,a.Z)(i,2),s=o[0],l=o[1],c=e.id,p=e.avatar,u=e.followers,A=e.tweets,f=e.user;(0,t.useEffect)((function(){var n,e=null===(n=x())||void 0===n?void 0:n.some((function(n){return n.id===c}));l(!!e)}),[c]);var g=(u+s).toLocaleString("en-US");return(0,Y.jsxs)(H,{children:[(0,Y.jsx)("span",{className:"logo"}),(0,Y.jsx)("span",{className:"tweet"}),(0,Y.jsx)("div",{className:"avatar",children:(0,Y.jsx)("img",{src:p||"data:image/png;base64,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",alt:f,width:62,height:62})}),(0,Y.jsxs)("p",{className:"tweets",children:[" ",A," TWEETS"]}),(0,Y.jsxs)("p",{className:"followers",children:[g," FOLLOWERS"]}),(0,Y.jsx)(k,{type:"button",onClick:function(){l(!s),d(!1===s?[].concat((0,v.Z)(x()),[{id:c,isFollow:!0}]):x().filter((function(n){return n.id!==c}))),r()},"data-isfollow":s,children:s?"FOLLOWING":"FOLLOW"})]})},S=r(7689),M=r(4373),K=r(1087),J=(0,R.ZP)(K.rU)(f||(f=(0,j.Z)(["\n  display: flex;\n  padding: 10px;\n  justify-content: space-evenly;\n  align-items: center;\n  font-size: 24px;\n  text-shadow: 1px 1px 2px var(--shadow);\n  color: var(--second);\n  background-color: var(--back_primary);\n  border: 1px solid var(--primary);\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n"]))),L=function(){var n,e,r=null!==(n=null===(e=(0,S.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,Y.jsxs)(J,{to:r,children:[(0,Y.jsx)(M.Oul,{})," back"]})},P=r(861),Z=R.ZP.aside(g||(g=(0,j.Z)(["\n  position: fixed;\n  left: 0;\n  padding: 15px;\n  min-width: 163.7px;\n"]))),O=(0,R.ZP)(P.ZP)(w||(w=(0,j.Z)(["\n  padding: 14px 8px;\n  margin-top: 20px;\n  font-family: 'Montserrat', sans-serif;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  color: var(--primary);\n  background: var(--second);\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n  cursor: pointer;\n  :hover {\n    background: var(--shadow);\n  }\n"]))),D=function(n){var e=n.choice,r=(0,t.useState)(o[0]),i=(0,a.Z)(r,2),s=i[0],l=i[1];return(0,Y.jsxs)(Z,{children:[(0,Y.jsx)(L,{}),(0,Y.jsx)(O,{value:s,onChange:function(n){l(n),e(n)},options:o})]})},X=R.ZP.div(h||(h=(0,j.Z)(["\n  padding: 110px 50px 110px;\n\n  & .users_cards {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-left: 120px;\n  }\n  & ul {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    gap: 35px;\n    max-width: 1600px;\n  }\n"]))),B=function(){var n=(0,t.useState)([]),e=(0,a.Z)(n,2),r=e[0],s=e[1],l=(0,t.useState)(3),c=(0,a.Z)(l,2),u=c[0],A=c[1],f=(0,t.useState)(r),g=(0,a.Z)(f,2),w=g[0],h=g[1],v=(0,t.useRef)(!0),b=(0,t.useRef)(o[0].label);(0,t.useEffect)((function(){v.current&&(d([]),v.current=!1,p().then((function(n){var e=n;if(!e.length)throw new Error("\u043d\u0435\u043c\u0430\u0454 \u043d\u0456 \u043e\u0434\u043d\u043e\u0433\u043e \u044e\u0437\u0435\u0440\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0456");s(e),h(e)})).catch((function(n){i.Am.error("".concat(n.message))})))}),[]);var m=(null===w||void 0===w?void 0:w.length)>u&&u<(null===w||void 0===w?void 0:w.length),j=function(n){switch(b.current!==n&&A(3),b.current=n,n.label){case o[0].label:h(r);break;case o[1].label:var e=r.filter((function(n){var e;return!(null!==(e=x())&&void 0!==e&&e.find((function(e){return e.id===n.id})))}));h(e);break;case o[2].label:var a=r.filter((function(n){var e;return null===(e=x())||void 0===e?void 0:e.find((function(e){return e.id===n.id}))}));h(a)}},R=function(){b.current.label!==o[0].label&&j(b.current)};return(0,Y.jsxs)(X,{children:[(0,Y.jsx)(D,{choice:j}),(0,Y.jsxs)("div",{className:"users_cards",children:[(0,Y.jsx)("ul",{children:null===w||void 0===w?void 0:w.slice(0,u).map((function(n){return(0,Y.jsx)(I,{userInfo:n,rerender:R},n.id)}))}),m&&(0,Y.jsx)(k,{onClick:function(){return A(u+3)},children:"LOAD MORE"})]})]})}}}]);
//# sourceMappingURL=105.77455270.chunk.js.map