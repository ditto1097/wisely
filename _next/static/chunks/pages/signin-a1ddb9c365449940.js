(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[126],{3210:(e,s,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/signin",function(){return n(5270)}])},5270:(e,s,n)=>{"use strict";n.r(s),n.d(s,{default:()=>S});var t=n(4848),l=n(6794),r=n(2324),i=n(1884),a=n(6540),c=n(3540),o=n(1106),d=n.n(o),x=n(4650),h=n(7597),p=n(6715);let u=c.I4.div.withConfig({componentId:"sc-84eaad92-0"})(["text-align:start;height:100%;background-color:white;font-size:1.6rem;"]),m=c.I4.div.withConfig({componentId:"sc-84eaad92-1"})(["display:flex;"]);c.I4.input.withConfig({componentId:"sc-84eaad92-2"})(["height:42px;width:100%;border:1px solid #cccccc;border-radius:5px;padding:10px;"]);let j=c.I4.select.withConfig({componentId:"sc-84eaad92-3"})(["height:42px;width:100%;border:1px solid #cccccc;border-radius:5px;padding:10px;"]),g=c.I4.div.withConfig({componentId:"sc-84eaad92-4"})(["display:flex;background-color:white;cursor:pointer;color:#0077ed;height:42px;border-radius:5px;justify-content:center;align-items:center;border:1px solid #0077ed;"]),y=c.I4.p.withConfig({componentId:"sc-84eaad92-5"})(["margin-left:5px;font-size:1.9rem;color:tomato;"]),f=c.I4.p.withConfig({componentId:"sc-84eaad92-6"})(["font-size:1.4rem;color:#cccccc;"]),b=c.I4.p.withConfig({componentId:"sc-84eaad92-7"})(["font-size:1.4rem;color:tomato;"]),C=c.I4.p.withConfig({componentId:"sc-84eaad92-8"})(["margin-left:5px;font-size:1.6rem;color:gray;"]),v=c.I4.input.withConfig({componentId:"sc-84eaad92-9"})(["width:20px;height:20px;border:solid 10px white;"]),k=c.I4.span.withConfig({componentId:"sc-84eaad92-10"})(["font-size:1.4rem;margin-left:13px;color:gray;"]),w=c.I4.div.withConfig({componentId:"sc-84eaad92-11"})(["display:none;position:absolute;top:20%;z-index:3;width:560px;height:600px;@media (max-width:560px){position:fixed;top:0;width:100vw;}"]),N=c.I4.div.withConfig({componentId:"sc-84eaad92-12"})(["z-index:3;width:560px;height:86.7%;@media (max-width:560px){width:100vw;height:91vh;}"]);function S(){let[e,s]=(0,a.useContext)(h.F).isLoading,n=(0,p.useRouter)(),[c,o]=(0,a.useState)(""),[S,I]=(0,a.useState)(!0),[T,R]=(0,a.useState)(""),[z,L]=(0,a.useState)("로그인 아이디로 사용할 이메일을 입력해 주세요."),[_,A]=(0,a.useState)(!0),[M,E]=(0,a.useState)(!1),[D,W]=(0,a.useState)(!0),[B,F]=(0,a.useState)(""),[O,P]=(0,a.useState)(""),[Z,G]=(0,a.useState)(""),[J,Y]=(0,a.useState)(""),[$,V]=(0,a.useState)(""),[X,q]=(0,a.useState)(""),[H,Q]=(0,a.useState)(!0),[K,U]=(0,a.useState)("010"),[ee,es]=(0,a.useState)(""),[en,et]=(0,a.useState)(""),[el,er]=(0,a.useState)(!1),[ei,ea]=(0,a.useState)("휴대폰 번호를 입력하세요."),[ec,eo]=(0,a.useState)("000000"),[ed,ex]=(0,a.useState)(""),[eh,ep]=(0,a.useState)(!1),[eu,em]=(0,a.useState)(180),[ej,eg]=(0,a.useState)(""),[ey,ef]=(0,a.useState)(""),[eb,eC]=(0,a.useState)(""),[ev,ek]=(0,a.useState)("M"),[ew,eN]=(0,a.useState)(""),[eS,eI]=(0,a.useState)(!1),[eT,eR]=(0,a.useState)(!1),[ez,eL]=(0,a.useState)(!1),[e_,eA]=(0,a.useState)(!1),[eM,eE]=(0,a.useState)(!1),eD=(0,a.useRef)(null),eW=(0,a.useRef)(null),eB=(0,a.useRef)(null),eF=(0,a.useRef)(null),eO=(0,a.useRef)(null),eP=(0,a.useRef)(null),eZ=(0,a.useRef)(null),eG=(0,a.useRef)(null),eJ=(0,a.useRef)(null),eY=(0,a.useRef)(null),e$=(0,a.useRef)(null),eV=(0,a.useRef)(null),eX=(0,a.useRef)(null),eq=(0,a.useRef)(null),eH=/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,eQ=/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{10,16}$/,eK=e=>{eQ.test(B)?(E(!1),A(!0)):A(!1),B===O?W(!0):W(!1)},eU=async e=>{if(""===T)return alert("이메일을 입력하세요."),eB.current.focus();if("이미"===eF.current.innerHTML.substring(0,2))return alert("이미 가입된 이메일 주소입니다.\n쇼핑몰 가입 여부를 다시 확인하여 주시거나 관리자에게 문의하여 주세요."),eB.current.focus();if(!1===S)return alert("입력하신 이메일을 사용할 수 없습니다."),eB.current.focus();if(""===J)return alert("주소를 입력해주세요."),eG.current.focus();if(""===X)return alert("주소를 입력해주세요."),eJ.current.focus();if(ee.length<4)return alert("휴대전화를 입력해주세요."),e$.current.focus();if(en.length<4)return alert("휴대전화를 입력해주세요."),eV.current.focus();if(""===Z)return alert("이름 항목은 필수 입력값입니다."),eZ.current.focus();if(!eh)return alert("휴대폰 번호를 인증해주시기 바랍니다."),e$.current.focus();if(!_)return alert("비밀번호 양식이 맞지 않습니다."),eO.current.focus();if(!D)return alert("비밀번호가 일치하지 않습니다."),eP.current.focus();if(!eT)return alert("필수 이용약관 동의해주세요."),eX.current.focus();if(!ez)return alert("필수 개인정보 수집 및 이용 동의해주세요."),eq.current.focus();try{s(!0);let e=await (0,l.eJ)(r.j,T,B);await (0,l.r7)(e.user,{displayName:Z}),await (0,i.gS)((0,i.rJ)(r.k,"users"),{uid:e.user.uid,email:T,password:B,name:Z,postNumber:J,address:$,detailAddress:X,phone1:K,phone2:ee,phone3:en,birthYear:ej,birthMonth:ey,birthDay:eb,sex:ev,knowWisely:ew,chk0:eT,chk1:ez,chk2:e_,chk3:eM,pb:"P",createdAt:i.Dc.now(),social:"N"})}catch(e){alert(e.message),o("error");return}finally{s(!1)}n.push("/")},e0=e=>{let{target:{name:s,value:n,type:t,maxLength:l}}=e;"number"===t&&n.length>l||("email"===s?R(n):"password"===s?F(n):"passwordCheck"===s?P(n):"name"===s?G(n):"postNumber"===s?Y(n):"address"===s?V(n):"detailAddress"===s?q(n):"phone1"===s?U(n):"phone2"===s?(es(n),4===n.length&&eV.current.focus()):"phone3"===s?et(n):"inputVerifyNumber"===s?ex(n):"birthYear"===s?eg(n):"birthMonth"===s?ef(n):"birthDay"===s?eC(n):"sex"===s?ek(n):"knowWisely"===s&&eN(n))},e1=e=>{let{target:{name:s,checked:n}}=e;"chkAll"===s?(eI(n),n?(eR(!0),eL(!0),eA(!0),eE(!0)):(eR(!1),eL(!1),eA(!1),eE(!1))):"chk0"===s?(eR(n),n&&ez&&e_&&eM?eI(!0):eI(!1)):"chk1"===s?(eL(n),eT&&n&&e_&&eM?eI(!0):eI(!1)):"chk2"===s?(eA(n),eT&&ez&&n&&eM?eI(!0):eI(!1)):"chk3"===s&&(eE(n),eT&&ez&&e_&&n?eI(!0):eI(!1))},e2=async e=>{let s=(0,i.P)((0,i.rJ)(r.k,"users"),(0,i._M)("email","==",T));(await (0,i.GG)(s)).docs.length>0?(I(!1),L("이미 사용중인 이메일입니다. 다른 이메일로 다시 시도해 주세요.")):eH.test(T)?(I(!0),L("사용 가능한 이메일입니다.")):""===T?(I(!1),L("이메일을 입력해주세요.")):(I(!1),L("유효한 이메일을 입력해주세요."))},e4=e=>{""===ee||""===en?(ea("휴대폰 번호를 입력하세요."),Q(!1)):Q(!0)},e5=e=>{eD.current.style.display="none"},e6=async e=>{if(eh)return;let s=(0,i.P)((0,i.rJ)(r.k,"users"),(0,i._M)("phone1","==",K),(0,i._M)("phone2","==",ee),(0,i._M)("phone3","==",en));if((await (0,i.GG)(s)).docs.length>0){ea("사용하려는 휴대폰 번호는 이미 다른 계정에 등록되어 있습니다."),Q(!1);return}if(el&&eu>170){ea("10초 이내에는 재전송할 수 없습니다."),Q(!1);return}4===ee.length&&4===en.length?(er(!0),em(180),function(){let e=String(Math.floor(1e6*Math.random())).padStart(6,"0");alert(e),eo(e)}()):(ea("유효하지 않은 휴대폰 번호입니다. 입력한 번호를 확인해 주세요."),Q(!1))};return(0,a.useEffect)(()=>{let e=setInterval(()=>{em(e=>e-1)},1e3);return 0===eu&&clearInterval(e),()=>clearInterval(e)},[eu]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("title",{children:"회원가입 페이지"}),(0,t.jsx)(u,{children:(0,t.jsx)("div",{className:"pageDafaultDiv",children:(0,t.jsxs)("form",{children:[(0,t.jsx)("div",{style:{marginTop:"5px"},children:(0,t.jsx)("p",{children:"기본정보"})}),(0,t.jsxs)(m,{style:{marginTop:"15px"},children:[(0,t.jsx)("b",{children:"이메일"})," ",(0,t.jsx)(y,{children:"*"})]}),(0,t.jsx)("input",{className:"InputCommon",type:"email",name:"email",ref:eB,value:T,onChange:e0,onBlur:e2}),(0,t.jsx)("div",{style:{fontSize:"1.2rem",marginTop:"5px"},children:(0,t.jsx)(f,{ref:eF,style:S?{color:"#cccccc"}:{color:"tomato"},children:z})}),(0,t.jsxs)(m,{style:{marginTop:"20px"},children:[(0,t.jsx)("b",{children:"비밀번호"})," ",(0,t.jsx)(y,{children:"*"})]}),(0,t.jsx)("input",{className:"InputCommon",type:"password",name:"password",onChange:e0,onFocus:e=>{E(!0),A(!0)},onBlur:eK,ref:eO,value:B}),M?(0,t.jsx)("div",{style:{marginTop:"5px"},children:(0,t.jsx)(f,{style:_?{color:"#cccccc"}:{color:"tomato"},children:"(영문 소문자 / 숫자 / 특수문자 필수, 10자~16자)"})}):null,(0,t.jsxs)(m,{style:{marginTop:"20px"},children:[(0,t.jsx)("b",{children:"비밀번호 확인"}),(0,t.jsx)(y,{children:"*"})]}),(0,t.jsx)("input",{className:"InputCommon",type:"password",name:"passwordCheck",value:O,onChange:e0,onBlur:eK,ref:eP}),D?null:(0,t.jsx)("div",{style:{marginTop:"10px"},children:(0,t.jsx)(b,{children:"비밀번호가 일치하지 않습니다."})}),(0,t.jsxs)(m,{style:{marginTop:"25px"},children:[(0,t.jsx)("b",{children:"이름"}),(0,t.jsx)(y,{children:"*"})]}),(0,t.jsx)("input",{className:"InputCommon",type:"text",name:"name",value:Z,ref:eZ,onChange:e0}),(0,t.jsxs)(m,{style:{marginTop:"15px"},children:[(0,t.jsx)("b",{children:"주소"}),(0,t.jsx)(y,{children:"*"})]}),(0,t.jsxs)(m,{children:[(0,t.jsx)("input",{className:"InputCommon",id:"sample2_postcode",style:{flex:"4"},type:"text",placeholder:"우편번호",ref:eG,name:"postNumber",value:J,onChange:e0,readOnly:!0}),(0,t.jsx)(g,{style:{flex:"1",marginLeft:"10px"},onClick:function(){eD.current.style.display="block",new daum.Postcode({oncomplete:function(e){var s="",n="";s="R"===e.userSelectedType?e.roadAddress:e.jibunAddress,"R"===e.userSelectedType&&(""!==e.bname&&/[동|로|가]$/g.test(e.bname)&&(n+=e.bname),""!==e.buildingName&&"Y"===e.apartment&&(n+=""!==n?", "+e.buildingName:e.buildingName),""!==n&&(n=" ("+n+")")),Y(e.zonecode),V(s),document.getElementById("sample2_detailAddress").focus(),eW.current.style.display="none",eD.current.style.display="none"},width:"100%",height:"100%",maxSuggestItems:5}).embed(eW.current),eW.current.style.display="block"},children:"주소검색"})]}),(0,t.jsx)("div",{style:{marginTop:"10px"},children:(0,t.jsx)("input",{className:"InputCommon",id:"sample2_address",type:"text",placeholder:"기본주소",name:"address",value:$,onChange:e0,readOnly:!0})}),(0,t.jsx)("div",{style:{marginTop:"10px"},children:(0,t.jsx)("input",{className:"InputCommon",id:"sample2_detailAddress",name:"detailAddress",type:"text",placeholder:"나머지 주소",ref:eJ,value:X,onChange:e0})}),(0,t.jsxs)(m,{style:{marginTop:"15px"},children:[(0,t.jsx)("b",{children:"휴대폰 번호"}),(0,t.jsx)(y,{children:"*"})]}),(0,t.jsxs)(m,{style:{alignItems:"center"},children:[(0,t.jsxs)(j,{style:{flex:"0.82"},name:"phone1",value:K,onChange:e0,ref:eY,children:[(0,t.jsx)("option",{children:"010"}),(0,t.jsx)("option",{children:"011"}),(0,t.jsx)("option",{children:"016"}),(0,t.jsx)("option",{children:"017"}),(0,t.jsx)("option",{children:"018"}),(0,t.jsx)("option",{children:"019"})]}),(0,t.jsx)("div",{style:{marginLeft:"5px",marginRight:"5px"},children:(0,t.jsx)("p",{children:"-"})}),(0,t.jsx)("input",{className:"InputCommon",style:{flex:"0.82"},type:"number",name:"phone2",value:ee,onChange:e0,onBlur:e4,ref:e$,maxLength:"4"}),(0,t.jsx)("div",{style:{marginLeft:"5px",marginRight:"5px"},children:(0,t.jsx)("p",{children:"-"})}),(0,t.jsx)("input",{className:"InputCommon",style:{flex:"0.82"},type:"number",name:"phone3",value:en,onChange:e0,onBlur:e4,ref:eV,maxLength:"4"}),(0,t.jsx)(g,{style:{flex:"1",marginLeft:"10px"},onClick:e6,children:eh?"인증완료":el?"재전송":"인증하기"})]}),H?null:(0,t.jsx)("div",{style:{marginTop:"5px"},children:(0,t.jsx)(b,{children:ei})}),el?(0,t.jsxs)("div",{children:[(0,t.jsxs)(m,{style:{marginTop:"20px"},children:[(0,t.jsx)("b",{children:"인증번호"}),(0,t.jsx)(y,{children:"*"})]}),(0,t.jsxs)(m,{style:{position:"relative",alignItems:"center"},children:[(0,t.jsx)("input",{className:"InputCommon",style:{flex:"3.1"},maxLength:"6",value:ed,name:"inputVerifyNumber",onChange:e0}),(0,t.jsx)("span",{style:{color:"tomato",position:"absolute",right:"27%"},children:"".concat(parseInt(eu%3600/60),":").concat(String(eu%60).padStart(2,"0"))}),(0,t.jsx)(g,{style:{flex:"1",marginLeft:"10px"},onClick:e=>{ec===ed?(console.log(!0),ep(!0),er(!1),Q(!0),e$.current.readOnly=!0,eV.current.readOnly=!0,eY.current.disabled=!0):console.log(!1)},children:"확인"})]}),(0,t.jsx)("div",{style:{marginTop:"10px",color:"#cccccc",fontSize:"1.4rem"},children:(0,t.jsx)("p",{children:"- 인증번호가 문자로 발송되었습니다"})}),(0,t.jsx)("div",{style:{marginTop:"5px",color:"#cccccc",fontSize:"1.4rem"},children:(0,t.jsx)("p",{children:"- 인증번호를 받지 못하셨다면 휴대폰 번호를 확인해 주세요"})}),(0,t.jsx)("div",{style:{marginTop:"5px",color:"#cccccc",fontSize:"1.4rem"},children:(0,t.jsx)("p",{children:"- 인증번호는 3분 내에 입력해 주세요"})})]}):null,(0,t.jsx)("div",{style:{marginTop:"50px"},children:(0,t.jsx)("p",{children:"추가정보"})}),(0,t.jsx)("div",{style:{marginTop:"15px"},children:(0,t.jsx)("b",{children:"생년월일"})}),(0,t.jsxs)(m,{style:{fontSize:"1.6rem",marginTop:"5px",alignItems:"center"},children:[(0,t.jsx)("input",{className:"InputCommon",style:{flex:"1"},type:"number",name:"birthYear",value:ej,onChange:e0,maxLength:"4"}),(0,t.jsx)("div",{style:{marginLeft:"10px",marginRight:"10px",fontSize:"1.8rem"},children:(0,t.jsx)("p",{children:"/"})}),(0,t.jsx)("input",{className:"InputCommon",style:{flex:"1"},type:"number",name:"birthMonth",value:ey,onChange:e0,maxLength:"2"}),(0,t.jsx)("div",{style:{marginLeft:"10px",marginRight:"10px",fontSize:"1.8rem"},children:(0,t.jsx)("p",{children:"/"})}),(0,t.jsx)("input",{className:"InputCommon",style:{flex:"1"},type:"number",name:"birthDay",value:eb,onChange:e0,maxLength:"2"})]}),(0,t.jsx)("div",{style:{marginTop:"17px"},children:(0,t.jsx)("b",{children:"성별"})}),(0,t.jsxs)(m,{style:{marginTop:"10px",alignItems:"center"},children:[(0,t.jsxs)("label",{className:"radioCustomLabel",style:{},children:[(0,t.jsx)(v,{type:"radio",name:"sex",value:"M",defaultChecked:!0,onChange:e0}),(0,t.jsx)("span",{className:"customRadio"}),(0,t.jsx)(C,{children:"남자"})]}),(0,t.jsxs)("label",{className:"radioCustomLabel",style:{marginLeft:"40px"},children:[(0,t.jsx)(v,{type:"radio",name:"sex",value:"F",onChange:e0}),(0,t.jsx)("span",{className:"customRadio"}),(0,t.jsx)(C,{children:"여자"})]}),(0,t.jsxs)("label",{className:"radioCustomLabel",style:{marginLeft:"40px"},children:[(0,t.jsx)(v,{type:"radio",name:"sex",value:"N",onChange:e0}),(0,t.jsx)("span",{className:"customRadio"}),(0,t.jsx)(C,{children:"선택안함"})]})]}),(0,t.jsx)("div",{style:{marginTop:"15px"},children:(0,t.jsx)("b",{children:"와이즐리를 어떻게 알게 되셨나요?"})}),(0,t.jsxs)(m,{style:{marginTop:"13px"},children:[(0,t.jsxs)("label",{className:"radioCustomLabel",style:{flex:"1"},children:[(0,t.jsx)(v,{type:"radio",name:"knowWisely",value:"0",onChange:e0}),(0,t.jsx)("span",{className:"customRadio"}),(0,t.jsx)(C,{children:"오프라인 광고"})]}),(0,t.jsxs)("label",{className:"radioCustomLabel",style:{flex:"1"},children:[(0,t.jsx)(v,{type:"radio",name:"knowWisely",value:"1",onChange:e0}),(0,t.jsx)("span",{className:"customRadio"}),(0,t.jsx)(C,{children:"주변 지인 추천"})]})]}),(0,t.jsxs)(m,{style:{marginTop:"20px"},children:[(0,t.jsxs)("label",{className:"radioCustomLabel",style:{flex:"1"},children:[(0,t.jsx)(v,{type:"radio",name:"knowWisely",value:"2",onChange:e0}),(0,t.jsx)("span",{className:"customRadio"}),(0,t.jsx)(C,{children:"온라인 배너 광고"})]}),(0,t.jsxs)("label",{className:"radioCustomLabel",style:{flex:"1"},children:[(0,t.jsx)(v,{type:"radio",name:"knowWisely",value:"3",onChange:e0}),(0,t.jsx)("span",{className:"customRadio"}),(0,t.jsx)(C,{children:"소셜미디어 후기"})]})]}),(0,t.jsx)(m,{style:{marginTop:"20px"},children:(0,t.jsxs)("label",{className:"radioCustomLabel",style:{flex:"1"},children:[(0,t.jsx)(v,{type:"radio",name:"knowWisely",value:"4",onChange:e0}),(0,t.jsx)("span",{className:"customRadio"}),(0,t.jsx)(C,{children:"기타"})]})}),(0,t.jsx)("div",{style:{marginTop:"60px"},children:(0,t.jsx)("p",{children:"이용약관동의"})}),(0,t.jsx)("div",{style:{marginTop:"15px"},children:(0,t.jsxs)("label",{style:{cursor:"pointer"},children:[(0,t.jsx)("input",{type:"checkbox",className:"checkCustom",name:"chkAll",checked:eS,onChange:e1}),(0,t.jsx)("i",{className:"circle"}),(0,t.jsx)("span",{style:{fontSize:"1.6rem",marginLeft:"15px"},children:(0,t.jsx)("b",{children:"전체 동의합니다"})})]})}),(0,t.jsx)("div",{style:{marginTop:"5px",color:"#cccccc",fontSize:"1.4rem"},children:(0,t.jsx)("p",{children:"선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다"})}),(0,t.jsx)("div",{style:{marginTop:"40px"},children:(0,t.jsxs)("label",{style:{cursor:"pointer"},children:[(0,t.jsx)("input",{type:"checkbox",className:"checkCustom",name:"chk0",checked:eT,onChange:e1,ref:eX}),(0,t.jsx)("i",{className:"circle"}),(0,t.jsx)(k,{children:"[필수] 이용약관 동의"})]})}),(0,t.jsx)("div",{style:{marginTop:"5px"},children:(0,t.jsxs)("label",{style:{cursor:"pointer"},children:[(0,t.jsx)("input",{type:"checkbox",className:"checkCustom",name:"chk1",checked:ez,onChange:e1,ref:eq}),(0,t.jsx)("i",{className:"circle"}),(0,t.jsx)(k,{children:"[필수] 개인정보 수집 및 이용 동의"})]})}),(0,t.jsx)("div",{style:{marginTop:"5px"},children:(0,t.jsxs)("label",{style:{cursor:"pointer"},children:[(0,t.jsx)("input",{type:"checkbox",className:"checkCustom",name:"chk2",checked:e_,onChange:e1}),(0,t.jsx)("i",{className:"circle"}),(0,t.jsx)(k,{children:"[선택] SMS (문자, 카카오톡 등)으로 혜택과 유용한 정보를 보내드려도 될까요?"})]})}),(0,t.jsx)("div",{style:{marginTop:"5px"},children:(0,t.jsxs)("label",{style:{cursor:"pointer"},children:[(0,t.jsx)("input",{type:"checkbox",className:"checkCustom",name:"chk3",checked:eM,onChange:e1}),(0,t.jsx)("i",{className:"circle"}),(0,t.jsx)(k,{children:"[선택] 이메일로 혜택과 정보를 보내드려도 될까요?"})]})}),(0,t.jsxs)("div",{style:{marginTop:"15px",textAlign:"center",fontSize:"1.15rem",color:"gray"},children:[(0,t.jsxs)("p",{children:["본인은 만 14세 이상이며,"," ",(0,t.jsx)(d(),{href:"/wisely",style:{textDecoration:"underline"},target:"_blank",children:"이용약관"}),", ",(0,t.jsx)(d(),{href:"https://wisely.store/member/privacy.html",style:{textDecoration:"underline"},target:"_blank",children:"개인정보 수집 및 이용 내용"}),"을"]}),(0,t.jsx)("p",{children:"확인 하였으며, 동의합니다"})]}),(0,t.jsx)("div",{className:"divButtonCommon",style:{marginTop:"15px"},onClick:eU,children:"가입하기"})]})})}),(0,t.jsxs)(w,{ref:eD,children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",height:"39px",backgroundColor:"#666666",color:"white",fontSize:"1.5rem",alignItems:"center"},children:[(0,t.jsx)("p",{style:{marginLeft:"20px"},children:"우편번호 검색"}),(0,t.jsx)(x.WQq,{style:{fontSize:"2.7rem",margin:"7px",marginRight:"13px"},onClick:e5})]}),(0,t.jsx)(N,{ref:eW}),(0,t.jsx)("div",{style:{height:"40.67px",backgroundColor:"#E5E5E5",display:"flex",justifyContent:"center",alignItems:"center",borderTop:"1px solid gray"},children:(0,t.jsx)("div",{style:{width:"70px",fontSize:"1.2rem",backgroundColor:"#FCFCFC",cursor:"pointer",textAlign:"center",border:"1px solid gray"},onClick:e5,children:"닫기"})})]})]})}}},e=>{var s=s=>e(e.s=s);e.O(0,[636,593,792],()=>s(3210)),_N_E=e.O()}]);