(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[592],{7506:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/category",function(){return s(7920)}])},7920:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>x});var i=s(4848),n=s(3540),a=s(1106),l=s.n(a),r=s(6540),d=s(9965),o=s.n(d),c=s(7597);s(6794);var h=s(2324),g=s(1884);let u=n.I4.div.withConfig({componentId:"sc-c87ad1f6-0"})(["background-color:white;height:100%;font-size:1.6rem;padding-top:2px;"]),p=n.I4.div.withConfig({componentId:"sc-c87ad1f6-1"})(["display:flex;"]);function x(){let[e,t]=(0,r.useContext)(c.F).isMobile,[s,n]=(0,r.useContext)(c.F).isLoading,[a,d]=(0,r.useState)([]);(0,r.useEffect)(()=>{!async function(){n(!0);let e=(0,g.P)((0,g.rJ)(h.k,"largeCategory"),(0,g._M)("use","==","Y"),(0,g._M)("categoryDisplay","==","Y"),(0,g._M)("categoryIcon","!=",""),(0,g.My)("index")),t=await (0,g.GG)(e);if(t.docs.length>0){let e=t.docs.map(e=>({id:e.id,...e.data()})),s=(0,g.P)((0,g.rJ)(h.k,"middleCategory"),(0,g._M)("use","==","Y"),(0,g.My)("largeCategory"),(0,g.My)("index")),i=await (0,g.GG)(s);if(i.docs.length>0){let s=[],n="",a=0;i.docs.map((l,r)=>{r===i.docs.length-1?(s.push(l.data().title),e[a=t.docs.findIndex(e=>e.id===l.data().largeCategory)]={...e[a],subs:s},s=[]):0===r?s.push(l.data().title):n!==l.data().largeCategory?(e[a=t.docs.findIndex(e=>e.id===n)]={...e[a],subs:s},(s=[]).push(l.data().title)):s.push(l.data().title),n=l.data().largeCategory})}d(e)}n(!1)}()},[]);let[x,f]=(0,r.useState)(null),[y,m]=(0,r.useState)(99);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(u,{children:[(0,i.jsx)("ul",{children:a.map((t,s)=>(0,i.jsxs)("li",{children:[(0,i.jsx)(l(),{href:"/",onClick:e=>{e.preventDefault(),y!==s?m(s):m(99)},children:(0,i.jsxs)(p,{style:e?{alignItems:"center",height:"50px",justifyContent:"space-between",marginLeft:"10px"}:{alignItems:"center",height:"56px",justifyContent:"space-between",marginLeft:"10px"},onMouseOver:()=>f(s),children:[(0,i.jsxs)(p,{style:{alignItems:"center"},children:[(0,i.jsx)(o(),{alt:"",src:x===s&&t.categorymOverIcon?t.categorymOverIcon:t.categoryIcon,width:40,height:40}),"\xa0",(0,i.jsx)("span",{style:y===s?{color:"#0077ed",fontWeight:"bold"}:{},children:t.title})]}),t.subs?(0,i.jsx)(o(),{alt:"",src:"https://wisely.store/custom/img/icon_down_arrow.svg",style:y===s?{transform:"rotate(180deg)",transition:"all 500ms",width:"12px",height:"12px",marginRight:"10px"}:{transition:"all 500ms",width:"12px",height:"12px",marginRight:"10px"},width:12,height:12}):null]})}),t.subs&&y===s?(0,i.jsx)(p,{style:{backgroundColor:"#F4F4F4",fontSize:"1.4rem"},children:(0,i.jsx)("ul",{style:{marginLeft:"55px",width:"100%"},children:t.subs.map((e,t)=>(0,i.jsx)("li",{children:(0,i.jsx)(l(),{href:"/list",children:(0,i.jsx)(p,{style:{height:"42px",alignItems:"center"},children:(0,i.jsx)("span",{children:e})})})},t))})}):null]},s))}),(0,i.jsx)("div",{style:{marginBottom:"150px"}})]})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[636,593,792],()=>t(7506)),_N_E=e.O()}]);