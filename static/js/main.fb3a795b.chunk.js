(this["webpackJsonpweb-alarm"]=this["webpackJsonpweb-alarm"]||[]).push([[0],{41:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(10),i=a.n(c),o=(a(41),a(70)),s=a(66),l=a(12);var j=a(2),d=Object(r.createContext)(),m=function(e){var t=e.children,a=e.preventStoreLoading,n=Object(r.useState)([]),c=Object(l.a)(n,2),i=c[0],o=c[1];return Object(r.useEffect)((function(){if(!a){var e=function(){var e=localStorage.getItem("@alarms-app/alarms");if(e)return JSON.parse(e)}();e&&o(e)}}),[]),Object(r.useEffect)((function(){!function(e){localStorage.setItem("@alarms-app/alarms",JSON.stringify(e||[]))}(i)}),[i]),Object(j.jsx)(d.Provider,{value:[i,o],children:t})},u=a(68),b=Object(s.a)((function(e){return{root:{fontSize:"3.75rem","& > div":{fontSize:".8rem",lineHeight:1,"& > a":{marginLeft:".25rem",fontWeight:"500",color:e.palette.primary.dark}}}}})),f=function(){var e=b();return Object(j.jsxs)("header",{className:e.root,children:[Object(j.jsx)(u.a,{variant:"h2",children:"Web Alarm"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:"designed by"}),Object(j.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/isaacamaro03","data-testid":"author-link",children:"Isaac Amaro"})]})]})},p=a(35),O=a(71),h=a(72),x=Object(s.a)({root:{alignSelf:"center"}}),g=function(e){var t=e.onClick,a=x();return Object(j.jsx)(O.a,{className:a.root,color:"secondary",onClick:t,children:Object(j.jsx)(h.a,{})})},v=a(25),y=a(24),w=a.n(y);var S=Object(s.a)((function(e){return{root:{padding:".5rem",borderRadius:"8px",background:Object(v.a)(e.palette.primary.light,.15),boxShadow:"0 2px 1px 1px ".concat(Object(v.a)(e.palette.primary.light,.2)),"& > time":{fontSize:"1.5rem",fontWeight:"500"}}}})),k=function(e){var t,a=e.alarmData,r=S();return Object(j.jsx)("div",{"data-testid":"alarm-item",className:r.root,children:Object(j.jsx)("time",{"data-testid":"alarm-item-time",children:(t=a.time,w()(t,"h:MM TT"))})})},N=Object(s.a)({root:{flex:1,marginBottom:"1rem",overflow:"auto"},wrapper:{display:"flex",flexFlow:"column",gap:"1rem",padding:"0 .25rem .25rem .25rem"}}),D=function(e){var t=e.alarms,a=N();return Object(j.jsx)("div",{className:a.root,children:Object(j.jsx)("div",{className:a.wrapper,children:t.map((function(e){return Object(j.jsx)(k,{alarmData:e})}))})})};var M=Object(s.a)({root:{padding:".5rem 0",textAlign:"end","& > time":{fontSize:"2.5rem",fontWeight:"500"}}}),C=function(e){var t,a=e.startDate,n=e.onDateChange,c=M(),i=function(e){var t=Object(r.useState)(e),a=Object(l.a)(t,2),n=a[0],c=a[1];return Object(r.useEffect)((function(){setInterval((function(){c(new Date)}),1e3)}),[]),n}(a);return i!==a&&n&&n(i),Object(j.jsx)("div",{className:c.root,children:Object(j.jsx)("time",{"data-testid":"clock-time",children:i?(t=i,w()(t,"h:MM TT")):"00:00:00"})})},T=Object(s.a)({root:{display:"flex",flexFlow:"column",overflow:"visible"}}),I=function(){var e=T(),t=Object(r.useContext)(d),a=Object(l.a)(t,2),n=a[0],c=a[1];return Object(j.jsxs)("main",{className:e.root,children:[Object(j.jsx)(C,{startDate:new Date}),Object(j.jsx)(D,{alarms:n}),Object(j.jsx)(g,{onClick:function(){c((function(e){return[].concat(Object(p.a)(e),[{time:new Date,isActive:!0}])}))}})]})},z=Object(s.a)({app:{display:"grid",gridTemplateRows:"auto minmax(0px, 1fr)",gap:"2rem",height:"100%",width:"444px",margin:"0 auto",padding:"1rem 0"}}),A=function(){var e=z();return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(m,{children:Object(j.jsxs)("div",{className:e.app,children:[Object(j.jsx)(f,{}),Object(j.jsx)(I,{})]})})})},B=a(34),E=a(69),F=Object(B.a)({overrides:{MuiCssBaseline:{"@global":{body:{color:"hsl(353deg 20% 40%)"}}},MuiPaper:{rounded:{borderRadius:"8px"}},MuiButton:{root:{textTransform:"none",borderRadius:"8px",lineHeight:"1.25rem"}}},palette:{background:{default:"hsla(0, 50%, 96%, 1)",paper:"hsla(0, 50%, 96%, 1)"},primary:{main:"hsl(354, 89%, 55%)"},secondary:{main:"hsl(231, 88%, 58%)"}},typography:{fontFamily:["system-ui","sans-serif"].join(",")}}),J=function(e){var t=e.children;return Object(j.jsx)(E.a,{theme:F,children:t})};var R=function(){return Object(j.jsxs)(J,{children:[Object(j.jsx)(o.a,{}),Object(j.jsx)(A,{})]})};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(R,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.fb3a795b.chunk.js.map