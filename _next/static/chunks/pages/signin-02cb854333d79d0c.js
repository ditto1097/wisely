(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[176],{7752:(e,s,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/signin",function(){return n(4045)}])},4045:(e,s,n)=>{"use strict";n.r(s),n.d(s,{default:()=>N});var t=n(5893),r=n(4055),l=n(6611),i=n(109),a=n(7294),c=n(1686),o=n(1664),d=n(303),x=n(6224),h=n(1163);let p=c.zo.div.withConfig({componentId:"sc-9b5ce654-0"})(["text-align:start;height:100%;background-color:white;font-size:1.6rem;"]),u=c.zo.div.withConfig({componentId:"sc-9b5ce654-1"})(["display:flex;"]),m=c.zo.input.withConfig({componentId:"sc-9b5ce654-2"})(["height:42px;width:100%;border:1px solid #cccccc;border-radius:5px;padding:10px;"]),j=c.zo.select.withConfig({componentId:"sc-9b5ce654-3"})(["height:42px;width:100%;border:1px solid #cccccc;border-radius:5px;padding:10px;"]),g=c.zo.div.withConfig({componentId:"sc-9b5ce654-4"})(["background-color:white;cursor:pointer;color:#0077ed;height:42px;border-radius:5px;align-content:center;text-align:center;border:1px solid #0077ed;"]),y=c.zo.p.withConfig({componentId:"sc-9b5ce654-5"})(["margin-left:5px;font-size:1.9rem;color:tomato;"]),f=c.zo.p.withConfig({componentId:"sc-9b5ce654-6"})(["font-size:1.4rem;color:#cccccc;"]),b=c.zo.p.withConfig({componentId:"sc-9b5ce654-7"})(["font-size:1.4rem;color:tomato;"]),C=c.zo.p.withConfig({componentId:"sc-9b5ce654-8"})(["margin-left:5px;font-size:1.6rem;color:gray;"]),v=c.zo.input.withConfig({componentId:"sc-9b5ce654-9"})(["width:20px;height:20px;border:solid 10px white;"]),k=c.zo.span.withConfig({componentId:"sc-9b5ce654-10"})(["font-size:1.4rem;margin-left:13px;color:gray;"]),w=c.zo.div.withConfig({componentId:"sc-9b5ce654-11"})(["display:none;position:absolute;top:20%;z-index:3;width:560px;height:600px;@media (max-width:560px){position:fixed;top:0;width:100vw;}"]),S=c.zo.div.withConfig({componentId:"sc-9b5ce654-12"})(["z-index:3;width:560px;height:86.7%;@media (max-width:560px){width:100vw;height:91vh;}"]);function N(){let[e,s]=(0,a.useContext)(x.k).isLoading,n=(0,h.useRouter)(),[c,N]=(0,a.useState)(""),[T,z]=(0,a.useState)(!0),[R,L]=(0,a.useState)(""),[I,_]=(0,a.useState)("로그인 아이디로 사용할 이메일을 입력해 주세요."),[A,E]=(0,a.useState)(!0),[M,O]=(0,a.useState)(!1),[B,D]=(0,a.useState)(!0),[W,F]=(0,a.useState)(""),[$,P]=(0,a.useState)(""),[Y,J]=(0,a.useState)(""),[X,V]=(0,a.useState)(""),[Z,H]=(0,a.useState)(""),[Q,q]=(0,a.useState)(""),[G,K]=(0,a.useState)(!0),[U,ee]=(0,a.useState)("010"),[es,en]=(0,a.useState)(""),[et,er]=(0,a.useState)(""),[el,ei]=(0,a.useState)(!1),[ea,ec]=(0,a.useState)("휴대폰 번호를 입력하세요."),[eo,ed]=(0,a.useState)("000000"),[ex,eh]=(0,a.useState)(""),[ep,eu]=(0,a.useState)(!1),[em,ej]=(0,a.useState)(180),[eg,ey]=(0,a.useState)(""),[ef,eb]=(0,a.useState)(""),[eC,ev]=(0,a.useState)(""),[ek,ew]=(0,a.useState)("M"),[eS,eN]=(0,a.useState)(""),[eT,ez]=(0,a.useState)(!1),[eR,eL]=(0,a.useState)(!1),[eI,e_]=(0,a.useState)(!1),[eA,eE]=(0,a.useState)(!1),[eM,eO]=(0,a.useState)(!1),eB=(0,a.useRef)(null),eD=(0,a.useRef)(null),eW=(0,a.useRef)(null),eF=(0,a.useRef)(null),e$=(0,a.useRef)(null),eP=(0,a.useRef)(null),eY=(0,a.useRef)(null),eJ=(0,a.useRef)(null),eX=(0,a.useRef)(null),eV=(0,a.useRef)(null),eZ=(0,a.useRef)(null),eH=(0,a.useRef)(null),eQ=(0,a.useRef)(null),eq=(0,a.useRef)(null),eG=/^(?=.*[a-zA-Z])(?=.*[0-9]).{10,16}$/,eK=/^(?=.*[a-zA-Z])(?=.*[!@#$%^&*?_]).{10,16}$/,eU=/^(?=.*[0-9])(?=.*[!@#$%^&*?_]).{10,16}$/,e0=e=>{eG.test(W)||eK.test(W)||eU.test(W)?(O(!1),E(!0)):E(!1),W===$?D(!0):D(!1)},e1=async e=>{if(console.log(l.R),""===R)return alert("이메일을 입력하세요."),eW.current.focus();if("이미"===eF.current.innerHTML.substring(0,2))return alert("이미 가입된 이메일 주소입니다.\n쇼핑몰 가입 여부를 다시 확인하여 주시거나 관리자에게 문의하여 주세요."),eW.current.focus();if(!1===T)return alert("입력하신 이메일을 사용할 수 없습니다."),eW.current.focus();if(""===X)return alert("주소를 입력해주세요."),eJ.current.focus();if(""===Q)return alert("주소를 입력해주세요."),eX.current.focus();if(es.length<4)return alert("휴대전화를 입력해주세요."),eZ.current.focus();if(et.length<4)return alert("휴대전화를 입력해주세요."),eH.current.focus();if(""===Y)return alert("이름 항목은 필수 입력값입니다."),eY.current.focus();if(!ep)return alert("휴대폰 번호를 인증해주시기 바랍니다."),eZ.current.focus();if(!A)return alert("비밀번호 양식이 맞지 않습니다."),e$.current.focus();if(!B)return alert("비밀번호가 일치하지 않습니다."),eP.current.focus();if(!eR)return alert("필수 이용약관 동의해주세요."),eQ.current.focus();if(!eI)return alert("필수 개인정보 수집 및 이용 동의해주세요."),eq.current.focus();try{s(!0);let e=await (0,r.Xb)(l.I,R,W);await (0,r.ck)(e.user,{displayName:Y}),await (0,i.ET)((0,i.hJ)(l.R,"users"),{uid:e.user.uid,email:R,password:W,name:Y,postNumber:X,address:Z,detailAddress:Q,phone1:U,phone2:es,phone3:et,birthYear:eg,birthMonth:ef,birthDay:eC,sex:ek,knowWisely:eS,chk0:eR,chk1:eI,chk2:eA,chk3:eM})}catch(e){alert(e.message),N("error");return}finally{s(!1)}n.push("/")},e5=e=>{let{target:{name:s,value:n}}=e;"email"===s?L(n):"password"===s?F(n):"passwordCheck"===s?P(n):"name"===s?J(n):"postNumber"===s?V(n):"address"===s?H(n):"detailAddress"===s?q(n):"phone1"===s?ep||ee(n):"phone2"===s?(en(n),4===n.length&&eH.current.focus()):"phone3"===s?er(n):"inputVerifyNumber"===s?eh(n):"birthYear"===s?ey(n):"birthMonth"===s?eb(n):"birthDay"===s?ev(n):"sex"===s?ew(n):"knowWisely"===s&&eN(n)},e6=e=>{let{target:{name:s,checked:n}}=e;"chkAll"===s?(ez(n),n?(eL(!0),e_(!0),eE(!0),eO(!0)):(eL(!1),e_(!1),eE(!1),eO(!1))):"chk0"===s?(eL(n),n&&eI&&eA&&eM?ez(!0):ez(!1)):"chk1"===s?(e_(n),eR&&n&&eA&&eM?ez(!0):ez(!1)):"chk2"===s?(eE(n),eR&&eI&&n&&eM?ez(!0):ez(!1)):"chk3"===s&&(eO(n),eR&&eI&&eA&&n?ez(!0):ez(!1))},e4=async e=>{let s=(0,i.IO)((0,i.hJ)(l.R,"users"),(0,i.ar)("email","==",R));(await (0,i.PL)(s)).docs.length>0?(z(!1),_("이미 사용중인 이메일입니다. 다른 이메일로 다시 시도해 주세요.")):R.includes("@")&&R.includes(".")?(z(!0),_("사용 가능한 이메일입니다.")):""===R?(z(!1),_("이메일을 입력해주세요.")):(z(!1),_("유효한 이메일을 입력해주세요."))},e2=e=>{""===es||""===et?(ec("휴대폰 번호를 입력하세요."),K(!1)):K(!0)},e9=e=>{eB.current.style.display="none"},e3=async e=>{if(ep)return;let s=(0,i.IO)((0,i.hJ)(l.R,"users"),(0,i.ar)("phone1","==",U),(0,i.ar)("phone2","==",es),(0,i.ar)("phone3","==",et));if((await (0,i.PL)(s)).docs.length>0){ec("사용하려는 휴대폰 번호는 이미 다른 계정에 등록되어 있습니다."),K(!1);return}if(el&&em>170){ec("10초 이내에는 재전송할 수 없습니다."),K(!1);return}4===es.length&&4===et.length?(ei(!0),ej(180),function(){let e=String(Math.floor(1e6*Math.random())).padStart(6,"0");alert(e),ed(e)}()):(ec("유효하지 않은 휴대폰 번호입니다. 입력한 번호를 확인해 주세요."),K(!1))};return(0,a.useEffect)(()=>{let e=setInterval(()=>{ej(e=>e-1)},1e3);return 0===em&&clearInterval(e),()=>clearInterval(e)},[em]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("title",{children:"회원가입 페이지"}),(0,t.jsx)(p,{children:(0,t.jsx)("div",{className:"pageDafaultDiv",children:(0,t.jsxs)("form",{children:[(0,t.jsx)("div",{style:{marginTop:"5px"},children:(0,t.jsx)("p",{children:"기본정보"})}),(0,t.jsxs)(u,{style:{marginTop:"15px"},children:[(0,t.jsx)("b",{children:"이메일"})," ",(0,t.jsx)(y,{children:"*"})]}),(0,t.jsx)(m,{type:"email",name:"email",ref:eW,value:R,onChange:e5,onBlur:e4}),(0,t.jsx)("div",{style:{fontSize:"1.2rem",marginTop:"5px"},children:(0,t.jsx)(f,{ref:eF,style:T?{color:"#cccccc"}:{color:"tomato"},children:I})}),(0,t.jsxs)(u,{style:{marginTop:"20px"},children:[(0,t.jsx)("b",{children:"비밀번호"})," ",(0,t.jsx)(y,{children:"*"})]}),(0,t.jsx)(m,{type:"password",name:"password",onChange:e5,onFocus:e=>{O(!0),E(!0)},onBlur:e0,ref:e$,value:W}),M?(0,t.jsx)("div",{style:{marginTop:"5px"},children:(0,t.jsx)(f,{style:A?{color:"#cccccc"}:{color:"tomato"},children:"(영문 대소문자 / 숫자 / 특수문자 중 2가지 이상 조합, 10자~16자)"})}):null,(0,t.jsxs)(u,{style:{marginTop:"20px"},children:[(0,t.jsx)("b",{children:"비밀번호 확인"}),(0,t.jsx)(y,{children:"*"})]}),(0,t.jsx)(m,{type:"password",name:"passwordCheck",value:$,onChange:e5,onBlur:e0,ref:eP}),B?null:(0,t.jsx)("div",{style:{marginTop:"10px"},children:(0,t.jsx)(b,{children:"비밀번호가 일치하지 않습니다."})}),(0,t.jsxs)(u,{style:{marginTop:"25px"},children:[(0,t.jsx)("b",{children:"이름"}),(0,t.jsx)(y,{children:"*"})]}),(0,t.jsx)(m,{type:"text",name:"name",value:Y,ref:eY,onChange:e5}),(0,t.jsxs)(u,{style:{marginTop:"15px"},children:[(0,t.jsx)("b",{children:"주소"}),(0,t.jsx)(y,{children:"*"})]}),(0,t.jsxs)(u,{children:[(0,t.jsx)(m,{id:"sample2_postcode",style:{flex:"4"},type:"text",placeholder:"우편번호",ref:eJ,name:"postNumber",value:X,onChange:e5,readOnly:!0}),(0,t.jsx)(g,{style:{flex:"1",marginLeft:"10px"},onClick:function(){eB.current.style.display="block",new daum.Postcode({oncomplete:function(e){var s="",n="";s="R"===e.userSelectedType?e.roadAddress:e.jibunAddress,"R"===e.userSelectedType&&(""!==e.bname&&/[동|로|가]$/g.test(e.bname)&&(n+=e.bname),""!==e.buildingName&&"Y"===e.apartment&&(n+=""!==n?", "+e.buildingName:e.buildingName),""!==n&&(n=" ("+n+")")),V(e.zonecode),H(s),document.getElementById("sample2_detailAddress").focus(),eD.current.style.display="none",eB.current.style.display="none"},width:"100%",height:"100%",maxSuggestItems:5}).embed(eD.current),eD.current.style.display="block"},children:"주소검색"})]}),(0,t.jsx)("div",{style:{marginTop:"10px"},children:(0,t.jsx)(m,{id:"sample2_address",type:"text",placeholder:"기본주소",name:"address",value:Z,onChange:e5,readOnly:!0})}),(0,t.jsx)("div",{style:{marginTop:"10px"},children:(0,t.jsx)(m,{id:"sample2_detailAddress",name:"detailAddress",type:"text",placeholder:"나머지 주소",ref:eX,value:Q,onChange:e5})}),(0,t.jsxs)(u,{style:{marginTop:"15px"},children:[(0,t.jsx)("b",{children:"휴대폰 번호"}),(0,t.jsx)(y,{children:"*"})]}),(0,t.jsxs)(u,{style:{alignItems:"center"},children:[(0,t.jsxs)(j,{style:{flex:"0.82"},name:"phone1",value:U,onChange:e5,ref:eV,children:[(0,t.jsx)("option",{children:"010"}),(0,t.jsx)("option",{children:"011"}),(0,t.jsx)("option",{children:"016"}),(0,t.jsx)("option",{children:"017"}),(0,t.jsx)("option",{children:"018"}),(0,t.jsx)("option",{children:"019"})]}),(0,t.jsx)("div",{style:{marginLeft:"5px",marginRight:"5px"},children:(0,t.jsx)("p",{children:"-"})}),(0,t.jsx)(m,{style:{flex:"0.82"},type:"number",name:"phone2",value:es,onChange:e5,onBlur:e2,ref:eZ,maxLength:"4"}),(0,t.jsx)("div",{style:{marginLeft:"5px",marginRight:"5px"},children:(0,t.jsx)("p",{children:"-"})}),(0,t.jsx)(m,{style:{flex:"0.82"},type:"number",name:"phone3",value:et,onChange:e5,onBlur:e2,ref:eH,maxLength:"4"}),(0,t.jsx)(g,{style:{flex:"1",marginLeft:"10px"},onClick:e3,children:ep?"인증완료":el?"재전송":"인증하기"})]}),G?null:(0,t.jsx)("div",{style:{marginTop:"5px"},children:(0,t.jsx)(b,{children:ea})}),el?(0,t.jsxs)("div",{children:[(0,t.jsxs)(u,{style:{marginTop:"20px"},children:[(0,t.jsx)("b",{children:"인증번호"}),(0,t.jsx)(y,{children:"*"})]}),(0,t.jsxs)(u,{style:{position:"relative",alignItems:"center"},children:[(0,t.jsx)(m,{style:{flex:"3.1"},maxLength:"6",value:ex,name:"inputVerifyNumber",onChange:e5}),(0,t.jsx)("span",{style:{color:"tomato",position:"absolute",right:"27%"},children:"".concat(parseInt(em%3600/60),":").concat(String(em%60).padStart(2,"0"))}),(0,t.jsx)(g,{style:{flex:"1",marginLeft:"10px"},onClick:e=>{eo===ex?(console.log(!0),eu(!0),ei(!1),K(!0),eZ.current.readOnly=!0,eH.current.readOnly=!0):console.log(!1)},children:"확인"})]}),(0,t.jsx)("div",{style:{marginTop:"10px",color:"#cccccc",fontSize:"1.4rem"},children:(0,t.jsx)("p",{children:"- 인증번호가 문자로 발송되었습니다"})}),(0,t.jsx)("div",{style:{marginTop:"5px",color:"#cccccc",fontSize:"1.4rem"},children:(0,t.jsx)("p",{children:"- 인증번호를 받지 못하셨다면 휴대폰 번호를 확인해 주세요"})}),(0,t.jsx)("div",{style:{marginTop:"5px",color:"#cccccc",fontSize:"1.4rem"},children:(0,t.jsx)("p",{children:"- 인증번호는 3분 내에 입력해 주세요"})})]}):null,(0,t.jsx)("div",{style:{marginTop:"50px"},children:(0,t.jsx)("p",{children:"추가정보"})}),(0,t.jsx)("div",{style:{marginTop:"15px"},children:(0,t.jsx)("b",{children:"생년월일"})}),(0,t.jsxs)(u,{style:{fontSize:"1.6rem",marginTop:"5px",alignItems:"center"},children:[(0,t.jsx)(m,{style:{flex:"1"},type:"number",name:"birthYear",value:eg,onChange:e5,maxLength:"4"}),(0,t.jsx)("div",{style:{marginLeft:"10px",marginRight:"10px",fontSize:"1.8rem"},children:(0,t.jsx)("p",{children:"/"})}),(0,t.jsx)(m,{style:{flex:"1"},type:"number",name:"birthMonth",value:ef,onChange:e5,maxLength:"2"}),(0,t.jsx)("div",{style:{marginLeft:"10px",marginRight:"10px",fontSize:"1.8rem"},children:(0,t.jsx)("p",{children:"/"})}),(0,t.jsx)(m,{style:{flex:"1"},type:"number",name:"birthDay",value:eC,onChange:e5,maxLength:"2"})]}),(0,t.jsx)("div",{style:{marginTop:"17px"},children:(0,t.jsx)("b",{children:"성별"})}),(0,t.jsxs)(u,{style:{marginTop:"10px",alignItems:"center"},children:[(0,t.jsxs)("label",{className:"radioCustomLabel",style:{},children:[(0,t.jsx)(v,{type:"radio",name:"sex",value:"M",defaultChecked:!0,onChange:e5}),(0,t.jsx)("span",{className:"customRadio"}),(0,t.jsx)(C,{children:"남자"})]}),(0,t.jsxs)("label",{className:"radioCustomLabel",style:{marginLeft:"40px"},children:[(0,t.jsx)(v,{type:"radio",name:"sex",value:"F",onChange:e5}),(0,t.jsx)("span",{className:"customRadio"}),(0,t.jsx)(C,{children:"여자"})]}),(0,t.jsxs)("label",{className:"radioCustomLabel",style:{marginLeft:"40px"},children:[(0,t.jsx)(v,{type:"radio",name:"sex",value:"N",onChange:e5}),(0,t.jsx)("span",{className:"customRadio"}),(0,t.jsx)(C,{children:"선택안함"})]})]}),(0,t.jsx)("div",{style:{marginTop:"15px"},children:(0,t.jsx)("b",{children:"와이즐리를 어떻게 알게 되셨나요?"})}),(0,t.jsxs)(u,{style:{marginTop:"13px"},children:[(0,t.jsxs)("label",{className:"radioCustomLabel",style:{flex:"1"},children:[(0,t.jsx)(v,{type:"radio",name:"knowWisely",value:"0",onChange:e5}),(0,t.jsx)("span",{className:"customRadio"}),(0,t.jsx)(C,{children:"오프라인 광고"})]}),(0,t.jsxs)("label",{className:"radioCustomLabel",style:{flex:"1"},children:[(0,t.jsx)(v,{type:"radio",name:"knowWisely",value:"1",onChange:e5}),(0,t.jsx)("span",{className:"customRadio"}),(0,t.jsx)(C,{children:"주변 지인 추천"})]})]}),(0,t.jsxs)(u,{style:{marginTop:"20px"},children:[(0,t.jsxs)("label",{className:"radioCustomLabel",style:{flex:"1"},children:[(0,t.jsx)(v,{type:"radio",name:"knowWisely",value:"2",onChange:e5}),(0,t.jsx)("span",{className:"customRadio"}),(0,t.jsx)(C,{children:"온라인 배너 광고"})]}),(0,t.jsxs)("label",{className:"radioCustomLabel",style:{flex:"1"},children:[(0,t.jsx)(v,{type:"radio",name:"knowWisely",value:"3",onChange:e5}),(0,t.jsx)("span",{className:"customRadio"}),(0,t.jsx)(C,{children:"소셜미디어 후기"})]})]}),(0,t.jsx)(u,{style:{marginTop:"20px"},children:(0,t.jsxs)("label",{className:"radioCustomLabel",style:{flex:"1"},children:[(0,t.jsx)(v,{type:"radio",name:"knowWisely",value:"4",onChange:e5}),(0,t.jsx)("span",{className:"customRadio"}),(0,t.jsx)(C,{children:"기타"})]})}),(0,t.jsx)("div",{style:{marginTop:"60px"},children:(0,t.jsx)("p",{children:"이용약관동의"})}),(0,t.jsx)("div",{style:{marginTop:"15px"},children:(0,t.jsxs)("label",{style:{cursor:"pointer"},children:[(0,t.jsx)("input",{type:"checkbox",className:"checkCustom",name:"chkAll",checked:eT,onChange:e6}),(0,t.jsx)("i",{className:"circle"}),(0,t.jsx)("span",{style:{fontSize:"1.6rem",marginLeft:"15px"},children:(0,t.jsx)("b",{children:"전체 동의합니다"})})]})}),(0,t.jsx)("div",{style:{marginTop:"5px",color:"#cccccc",fontSize:"1.4rem"},children:(0,t.jsx)("p",{children:"선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다"})}),(0,t.jsx)("div",{style:{marginTop:"40px"},children:(0,t.jsxs)("label",{style:{cursor:"pointer"},children:[(0,t.jsx)("input",{type:"checkbox",className:"checkCustom",name:"chk0",checked:eR,onChange:e6,ref:eQ}),(0,t.jsx)("i",{className:"circle"}),(0,t.jsx)(k,{children:"[필수] 이용약관 동의"})]})}),(0,t.jsx)("div",{style:{marginTop:"5px"},children:(0,t.jsxs)("label",{style:{cursor:"pointer"},children:[(0,t.jsx)("input",{type:"checkbox",className:"checkCustom",name:"chk1",checked:eI,onChange:e6,ref:eq}),(0,t.jsx)("i",{className:"circle"}),(0,t.jsx)(k,{children:"[필수] 개인정보 수집 및 이용 동의"})]})}),(0,t.jsx)("div",{style:{marginTop:"5px"},children:(0,t.jsxs)("label",{style:{cursor:"pointer"},children:[(0,t.jsx)("input",{type:"checkbox",className:"checkCustom",name:"chk2",checked:eA,onChange:e6}),(0,t.jsx)("i",{className:"circle"}),(0,t.jsx)(k,{children:"[선택] SMS (문자, 카카오톡 등)으로 혜택과 유용한 정보를 보내드려도 될까요?"})]})}),(0,t.jsx)("div",{style:{marginTop:"5px"},children:(0,t.jsxs)("label",{style:{cursor:"pointer"},children:[(0,t.jsx)("input",{type:"checkbox",className:"checkCustom",name:"chk3",checked:eM,onChange:e6}),(0,t.jsx)("i",{className:"circle"}),(0,t.jsx)(k,{children:"[선택] 이메일로 혜택과 정보를 보내드려도 될까요?"})]})}),(0,t.jsxs)("div",{style:{marginTop:"15px",textAlign:"center",fontSize:"1.15rem",color:"gray"},children:[(0,t.jsxs)("p",{children:["본인은 만 14세 이상이며,"," ",(0,t.jsx)(o,{href:"/wisely",style:{textDecoration:"underline"},target:"_blank",children:"이용약관"}),", ",(0,t.jsx)(o,{href:"https://wisely.store/member/privacy.html",style:{textDecoration:"underline"},target:"_blank",children:"개인정보 수집 및 이용 내용"}),"을"]}),(0,t.jsx)("p",{children:"확인 하였으며, 동의합니다"})]}),(0,t.jsx)("div",{className:"divButtonCommon",style:{marginTop:"15px"},onClick:e1,children:"가입하기"})]})})}),(0,t.jsxs)(w,{ref:eB,children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",height:"39px",backgroundColor:"#666666",color:"white",fontSize:"1.5rem",alignItems:"center"},children:[(0,t.jsx)("p",{style:{marginLeft:"20px"},children:"우편번호 검색"}),(0,t.jsx)(d.QAE,{style:{fontSize:"2.7rem",margin:"7px",marginRight:"13px"},onClick:e9})]}),(0,t.jsx)(S,{ref:eD}),(0,t.jsx)("div",{style:{height:"40.67px",backgroundColor:"#E5E5E5",display:"flex",justifyContent:"center",alignItems:"center",borderTop:"1px solid gray"},children:(0,t.jsx)("div",{style:{width:"70px",fontSize:"1.2rem",backgroundColor:"#FCFCFC",cursor:"pointer",textAlign:"center",border:"1px solid gray"},onClick:e9,children:"닫기"})})]})]})}}},e=>{var s=s=>e(e.s=s);e.O(0,[888,774,179],()=>s(7752)),_N_E=e.O()}]);