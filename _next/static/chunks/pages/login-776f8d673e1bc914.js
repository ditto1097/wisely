(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{6429:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return r(8487)}])},8487:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>g});var i=r(5893),s=r(7294),n=r(1686),c=r(1664),l=r(6224),o=r(4055),a=r(6611);r(4970);var p=r(1163);let d=n.zo.div.withConfig({componentId:"sc-4a9d4e5e-0"})(["text-align:center;height:100%;background-color:white;font-size:1.6rem;"]),x=n.zo.input.withConfig({componentId:"sc-4a9d4e5e-1"})(["height:42px;width:100%;margin-top:10px;border:1px solid #cccccc;border-radius:5px;padding:10px;"]),h=n.zo.div.withConfig({componentId:"sc-4a9d4e5e-2"})(["background-color:white;cursor:pointer;height:44px;border-radius:5px;align-content:center;margin-top:10px;border:1px solid #cccccc;"]);function g(){let[e,t]=(0,s.useContext)(l.k).isLoading,[r,n]=(0,s.useContext)(l.k).beforeUrl,[g,u]=(0,s.useState)(!1),[m,f]=(0,s.useState)(""),[j,y]=(0,s.useState)(""),[k,w]=(0,s.useState)(!1),[v,C]=(0,s.useState)(!0),b=(0,p.useRouter)(),_=(0,s.useRef)(null),S=(0,s.useRef)(null),N=e=>{let{target:{name:t,value:r}}=e;"email"===t?f(r):"password"===t?y(r):"chkEmailSave"===t&&w(e.target.checked)},E=async e=>{if(""===m)return alert("아이디 항목은 필수 입력값입니다."),_.current.focus();if(""===j)return alert("패스워드 항목은 필수 입력값입니다."),S.current.focus();if(j.length<4)return alert("패스워드 항목이 4자(개) 이상으로 해주십시오."),S.current.focus();try{t(!0),await (0,o.e5)(a.I,m,j)}catch(e){alert("아이디 또는 비밀번호가 일치하지 않습니다.");return}finally{t(!1)}b.push(r),n("/")};return(0,s.useEffect)(()=>{console.log("a")},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("title",{children:"로그인 페이지"}),(0,i.jsx)(d,{children:(0,i.jsxs)("div",{className:"pageDafaultDiv",children:[(0,i.jsxs)("p",{style:{fontSize:"1.8rem",paddingTop:"2px"},children:[(0,i.jsx)("b",{children:"로그인 및 회원가입"}),"을"]}),(0,i.jsx)("p",{style:{fontSize:"1.8rem"},children:"시작합니다"}),(0,i.jsxs)("div",{style:{backgroundColor:"#FEE500",display:"flex",height:"44px",borderRadius:"5px",justifyContent:"center",alignItems:"center",marginTop:"35px"},children:[(0,i.jsx)("img",{style:{width:"17px",height:"24px",marginRight:"10px"},src:"https://wisely.store/custom/img/icon_kakao.svg"}),(0,i.jsx)("p",{children:" 카톡 로그인 업데이트 중"})]}),(0,i.jsxs)("div",{onClick:e=>{u(!g)},style:{display:"flex",marginTop:"12px",justifyContent:"center",cursor:"pointer"},children:[(0,i.jsx)("p",{style:{color:"gray",marginRight:"10px",marginBottom:"10px"},children:"이메일로 시작하기"}),(0,i.jsx)("img",{style:g?{height:"6px",marginTop:"10px",transform:"rotate(180deg)"}:{height:"6px",marginTop:"10px"},src:"https://wisely.store/custom/img/icon_down_arrow.svg"})]}),g?(0,i.jsx)("div",{children:(0,i.jsxs)("form",{children:[(0,i.jsx)(x,{onChange:N,type:"email",name:"email",value:m,placeholder:"이메일을 입력해주세요",ref:_}),(0,i.jsx)(x,{onChange:N,type:"password",name:"password",value:j,placeholder:"패스워드",ref:S}),(0,i.jsxs)("div",{style:{display:"flex",textAlign:"start",marginBottom:"20px"},children:[(0,i.jsxs)("label",{style:{marginTop:"7px",cursor:"pointer"},children:[(0,i.jsx)("input",{className:"checkCustom",type:"checkbox",onChange:N,checked:k,name:"chkEmailSave"}),(0,i.jsx)("i",{className:"circle"}),(0,i.jsx)("span",{style:{fontSize:"1.4rem"},children:" 아이디 저장"})]}),(0,i.jsxs)("label",{style:{marginTop:"7px",marginLeft:"43px",marginBottom:"10px",cursor:"pointer"},children:[(0,i.jsx)("input",{className:"checkCustom",type:"checkbox",checked:v,name:"chkSecurity",readOnly:!0}),(0,i.jsx)("i",{className:"circle"}),(0,i.jsxs)("span",{style:{fontSize:"1.4rem",marginLeft:"13px"},children:[" ","보안접속"]})]})]}),(0,i.jsx)("div",{className:"divButtonCommon",onClick:E,children:"로그인"}),(0,i.jsx)(c,{href:"/signin",children:(0,i.jsx)(h,{children:"회원가입"})}),(0,i.jsxs)("div",{style:{display:"flex",fontSize:"1.4rem",justifyContent:"center",color:"gray",marginTop:"10px"},children:[(0,i.jsx)("p",{children:"이메일 찾기"}),(0,i.jsx)("p",{style:{marginLeft:"5px",marginRight:"5px"},children:"|"}),(0,i.jsx)("p",{children:"비밀번호 찾기"})]})]})}):null]})})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[970,888,774,179],()=>t(6429)),_N_E=e.O()}]);