(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[295],{5576:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n(714)}])},714:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>y});var i=n(4848),r=n(6540),s=n(3540),o=n(1106),a=n.n(o),c=n(7597),l=n(6794),u=n(2324),d=n(9965),p=n.n(d),h=n(6715);let m=()=>((0,h.useRouter)(),(0,r.useEffect)(()=>{window.Kakao.isInitialized()||window.Kakao.init("81c45beed11715b18c797fa2f0f64635")},[]),(0,i.jsxs)("div",{style:{backgroundColor:"#FEE500",display:"flex",height:"44px",borderRadius:"5px",justifyContent:"center",alignItems:"center",marginTop:"35px",cursor:"pointer"},onClick:()=>{console.log(window.location.origin),window.Kakao.Auth.authorize({redirectUri:"https://ditto1097.github.io/wisely/auth/callback"})},children:[(0,i.jsx)(p(),{alt:"",style:{width:"17px",height:"24px",marginRight:"10px"},src:"https://wisely.store/custom/img/icon_kakao.svg",width:17,height:24}),(0,i.jsx)("p",{children:"카톡으로 쉽게 시작하기"})]}));function x(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)e[i]=n[i]}return e}var f=function e(t,n){function i(e,i,r){if("undefined"!=typeof document){"number"==typeof(r=x({},n,r)).expires&&(r.expires=new Date(Date.now()+864e5*r.expires)),r.expires&&(r.expires=r.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var s="";for(var o in r)r[o]&&(s+="; "+o,!0!==r[o]&&(s+="="+r[o].split(";")[0]));return document.cookie=e+"="+t.write(i,e)+s}}return Object.create({set:i,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],i={},r=0;r<n.length;r++){var s=n[r].split("="),o=s.slice(1).join("=");try{var a=decodeURIComponent(s[0]);if(i[a]=t.read(o,a),e===a)break}catch(e){}}return e?i[e]:i}},remove:function(e,t){i(e,"",x({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,x({},this.attributes,t))},withConverter:function(t){return e(x({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});let g=s.I4.div.withConfig({componentId:"sc-c410b012-0"})(["text-align:center;height:100%;background-color:white;font-size:1.6rem;"]);function y(){let[e,t]=(0,r.useContext)(c.F).isLoading,[n,s]=(0,r.useContext)(c.F).beforeUrl,[o,d]=(0,r.useContext)(c.F).footerIndex,[x,y]=(0,r.useState)(!1),[j,v]=(0,r.useState)(""),[w,k]=(0,r.useState)(""),[C,b]=(0,r.useState)(!1),[E,S]=(0,r.useState)(!0),R=(0,h.useRouter)(),_=(0,r.useRef)(null),I=(0,r.useRef)(null),N=e=>{let{target:{name:t,value:n,checked:i}}=e;"email"===t?v(n):"password"===t?k(n):"chkEmailSave"===t&&b(i)},T=async e=>{if(""===j)return alert("아이디 항목은 필수 입력값입니다."),_.current.focus();if(""===w)return alert("패스워드 항목은 필수 입력값입니다."),I.current.focus();if(w.length<4)return alert("패스워드 항목이 4자(개) 이상으로 해주십시오."),I.current.focus();try{t(!0),await (0,l.x9)(u.j,j,w)}catch(e){alert("아이디 또는 비밀번호가 일치하지 않습니다.");return}finally{t(!1)}C?(f.set("email",j,{expires:30}),f.set("chkEmailSave",C,{expires:30})):(f.remove("email"),f.remove("chkEmailSave")),R.push(n),s("/")};(0,r.useEffect)(()=>{(0,l.hg)(u.j,e=>{e&&R.push("/")})},[u.j]),(0,r.useEffect)(()=>{let e=f.get("email"),t="true"===f.get("chkEmailSave");e&&t&&(v(e),b(!0),y(!0)),"/my"===n?d(4):"/like"===n&&d(3)},[]);let{queryEmail:z}=R.query;return(0,r.useEffect)(()=>{R.isReady&&z&&(v(z),y(!0))},[R.isReady,z]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("title",{children:"로그인 페이지"}),(0,i.jsx)(g,{children:(0,i.jsxs)("div",{className:"pageDafaultDiv",children:[(0,i.jsxs)("p",{style:{fontSize:"1.8rem",paddingTop:"2px"},children:[(0,i.jsx)("b",{children:"로그인 및 회원가입"}),"을"]}),(0,i.jsx)("p",{style:{fontSize:"1.8rem"},children:"시작합니다"}),(0,i.jsx)(m,{}),(0,i.jsxs)("div",{onClick:e=>{y(!x)},style:{display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",height:"44px"},children:[(0,i.jsx)("p",{style:{color:"gray",marginRight:"10px"},children:"이메일로 시작하기"}),(0,i.jsx)(p(),{alt:"",style:x?{width:12,height:12,transform:"rotate(180deg)"}:{width:12,height:12},src:"https://wisely.store/custom/img/icon_down_arrow.svg",width:12,height:12})]}),x?(0,i.jsx)("div",{children:(0,i.jsxs)("form",{children:[(0,i.jsx)("input",{className:"InputCommon",onChange:N,type:"email",name:"email",value:j,placeholder:"이메일을 입력해주세요",ref:_,style:{marginTop:"10px"}}),(0,i.jsx)("input",{className:"InputCommon",onChange:N,type:"password",name:"password",value:w,placeholder:"패스워드",ref:I,onKeyUp:e=>{"Enter"===e.key&&T()},style:{marginTop:"10px"}}),(0,i.jsxs)("div",{style:{display:"flex",textAlign:"start",marginBottom:"20px"},children:[(0,i.jsxs)("label",{style:{marginTop:"7px",cursor:"pointer"},children:[(0,i.jsx)("input",{className:"checkCustom",type:"checkbox",onChange:N,checked:C,name:"chkEmailSave"}),(0,i.jsx)("i",{className:"circle"}),(0,i.jsx)("span",{style:{fontSize:"1.4rem"},children:" 아이디 저장"})]}),(0,i.jsxs)("label",{style:{marginTop:"7px",marginLeft:"43px",marginBottom:"10px",cursor:"pointer"},children:[(0,i.jsx)("input",{className:"checkCustom",type:"checkbox",checked:E,name:"chkSecurity",readOnly:!0}),(0,i.jsx)("i",{className:"circle"}),(0,i.jsxs)("span",{style:{fontSize:"1.4rem",marginLeft:"13px"},children:[" ","보안접속"]})]})]}),(0,i.jsx)("div",{className:"divButtonCommon",onClick:T,children:"로그인"}),(0,i.jsx)(a(),{href:"/signin",children:(0,i.jsx)("div",{className:"divButtonCommonGray",style:{marginTop:"10px"},children:"회원가입"})}),(0,i.jsxs)("div",{style:{display:"flex",fontSize:"1.4rem",justifyContent:"center",color:"gray",marginTop:"10px"},children:[(0,i.jsx)(a(),{href:"/findid",children:(0,i.jsx)("p",{children:"이메일 찾기"})}),(0,i.jsx)("p",{style:{marginLeft:"5px",marginRight:"5px"},children:"|"}),(0,i.jsx)(a(),{href:"/findpw",children:(0,i.jsx)("p",{children:"비밀번호 찾기"})})]})]})}):null]})})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[636,593,792],()=>t(5576)),_N_E=e.O()}]);