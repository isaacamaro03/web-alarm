(this["webpackJsonpweb-alarm"]=this["webpackJsonpweb-alarm"]||[]).push([[0],{41:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(10),i=a.n(c),o=(a(41),a(70)),s=a(66),l=a(12);var j=a(2),d=Object(r.createContext)(),m=function(e){var t=e.children,a=e.preventStoreLoading,n=Object(r.useState)([]),c=Object(l.a)(n,2),i=c[0],o=c[1];return Object(r.useEffect)((function(){if(!a){var e=function(){var e=localStorage.getItem("@alarms-app/alarms");if(e)return JSON.parse(e)}();e&&o(e)}}),[]),Object(r.useEffect)((function(){!function(e){localStorage.setItem("@alarms-app/alarms",JSON.stringify(e||[]))}(i)}),[i]),Object(j.jsx)(d.Provider,{value:[i,o],children:t})},u=a(68);var b=a(20),f=a.n(b);var p=Object(s.a)({root:{"& > time":{fontSize:"2.5rem",fontWeight:"300"}}}),h=function(e){var t,a=e.startDate,n=e.onDateChange,c=p(),i=function(e){var t=Object(r.useState)(e),a=Object(l.a)(t,2),n=a[0],c=a[1];return Object(r.useEffect)((function(){setInterval((function(){c(new Date)}),1e3)}),[]),n}(a);return i!==a&&n&&n(i),Object(j.jsx)("div",{className:c.root,children:Object(j.jsx)("time",{"data-testid":"clock-time",children:i?(t=i,f()(t,"h:MM TT")):"00:00:00"})})},O=Object(s.a)((function(e){return{root:{display:"flex",justifyContent:"space-between",alignItems:"center",fontWeight:"300"},titleWrapper:{display:"inline-block",fontWeight:"500"},descWrapper:{"& > span":{fontSize:".8rem"},"& > a":{fontSize:".8rem",marginLeft:".25rem",fontWeight:"bold",color:e.palette.primary.dark}},title:{fontSize:"2rem",fontWeight:"500"}}})),x=function(){var e=O();return Object(j.jsxs)("header",{className:e.root,children:[Object(j.jsxs)("div",{className:e.titleWrapper,children:[Object(j.jsx)(u.a,{variant:"h1",className:e.title,children:"web-alarm"}),Object(j.jsxs)("div",{className:e.descWrapper,children:[Object(j.jsx)("span",{children:"designed by"}),Object(j.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/isaacamaro03","data-testid":"author-link",children:"Isaac Amaro"})]})]}),Object(j.jsx)(h,{startDate:new Date})]})},g=a(35),v=a(71),y=a(72),w=Object(s.a)({root:{alignSelf:"center"}}),S=function(e){var t=e.onClick,a=w();return Object(j.jsx)(v.a,{className:a.root,color:"secondary",onClick:t,children:Object(j.jsx)(y.a,{})})},k=a(25);var N=Object(s.a)((function(e){return{root:{padding:".5rem",borderRadius:"8px",background:Object(k.a)(e.palette.primary.light,.15),boxShadow:"0 2px 1px 1px ".concat(Object(k.a)(e.palette.primary.light,.2)),"& > time":{fontSize:"1.5rem",fontWeight:"500"}}}})),W=function(e){var t,a=e.alarmData,r=N();return Object(j.jsx)("div",{"data-testid":"alarm-item",className:r.root,children:Object(j.jsx)("time",{"data-testid":"alarm-item-time",children:(t=a.time,f()(t,"h:MM TT"))})})},C=Object(s.a)({root:{display:"flex",flexFlow:"column",flex:1,marginBottom:"1rem",overflow:"auto","& > img":{margin:"auto 0"}},wrapper:{display:"flex",flexFlow:"column",gap:"1rem",padding:"0 .25rem .25rem .25rem"}}),D=function(e){var t=e.alarms,a=C(),r=function(){return Object(j.jsx)("img",{src:"./clock_illustration.svg",alt:"a clock to serve as a space filler when there's no alarms configured"})};return Object(j.jsx)("div",{className:a.root,children:t.length?Object(j.jsx)("div",{className:a.wrapper,children:t.map((function(e){return Object(j.jsx)(W,{alarmData:e})}))}):Object(j.jsx)(r,{})})},M=Object(s.a)({root:{display:"flex",flexFlow:"column",overflow:"visible"}}),I=function(){var e=M(),t=Object(r.useContext)(d),a=Object(l.a)(t,2),n=a[0],c=a[1];return Object(j.jsxs)("main",{className:e.root,children:[Object(j.jsx)(D,{alarms:n}),Object(j.jsx)(S,{onClick:function(){c((function(e){return[].concat(Object(g.a)(e),[{time:new Date,isActive:!0}])}))}})]})},T=Object(s.a)({app:{display:"grid",gridTemplateRows:"auto minmax(0px, 1fr)",gap:"2rem",height:"100%",width:"444px",margin:"0 auto",padding:"1rem 0"}}),z=function(){var e=T();return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(m,{children:Object(j.jsxs)("div",{className:e.app,children:[Object(j.jsx)(x,{}),Object(j.jsx)(I,{})]})})})},F=a(34),B=a(69),E=Object(F.a)({overrides:{MuiCssBaseline:{"@global":{body:{color:"hsl(353deg 20% 40%)"}}},MuiPaper:{rounded:{borderRadius:"8px"}},MuiButton:{root:{textTransform:"none",borderRadius:"8px",lineHeight:"1.25rem"}}},palette:{background:{default:"hsla(0, 50%, 96%, 1)",paper:"hsla(0, 50%, 96%, 1)"},primary:{main:"hsl(354, 89%, 55%)"},secondary:{main:"hsl(231, 88%, 58%)"}},typography:{fontFamily:["system-ui","sans-serif"].join(",")}}),J=function(e){var t=e.children;return Object(j.jsx)(B.a,{theme:E,children:t})};var R=function(){return Object(j.jsxs)(J,{children:[Object(j.jsx)(o.a,{}),Object(j.jsx)(z,{})]})};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(R,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.a2400398.chunk.js.map