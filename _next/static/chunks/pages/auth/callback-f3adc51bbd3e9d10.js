(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[620],{8866:(a,e,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/callback",function(){return t(4350)}])},4350:(a,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>h});var o=t(4848),c=t(6715),i=t(6540),n=t(3540),r=t(6794),s=t(1884),u=t(2324),k=t(7597);let l=n.I4.div.withConfig({componentId:"sc-55db8a12-0"})(["display:flex;justify-content:center;align-items:center;height:100%;background-color:white;font-size:1.6rem;"]);function h(){let[a,e]=(0,i.useContext)(k.F).isLoading,t=(0,c.useRouter)(),[n,h]=(0,i.useState)("");return(0,i.useEffect)(()=>{let{code:a}=t.query;a&&h(a)},[t.query]),(0,i.useEffect)(()=>{async function a(){let a=null;try{e(!0);let t=await fetch("https://kauth.kakao.com/oauth/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"},body:new URLSearchParams({grant_type:"authorization_code",client_id:"e1b6041d0f218eca10e9620d7f07a426",redirect_uri:"http://localhost:3000/auth/callback",code:n})}),o=(await t.json()).access_token,c=await fetch("https://kapi.kakao.com/v2/user/me",{headers:{Authorization:"Bearer ".concat(o),"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"}});a=await c.json(),await (0,r.x9)(u.j,"kakao_"+a.kakao_account.email,"kakao_"+a.id)}catch(e){if("auth/invalid-credential"===e.code){console.log("신규 가입시 400 에러 정상");try{let e=await (0,r.eJ)(u.j,"kakao_"+a.kakao_account.email,"kakao_"+a.id);await (0,r.r7)(e.user,{displayName:a.kakao_account.profile.nickname}),await (0,s.gS)((0,s.rJ)(u.k,"users"),{uid:e.user.uid,email:"kakao_"+a.kakao_account.email,password:"kakao_"+a.id,name:a.kakao_account.profile.nickname,postNumber:"",address:"",detailAddress:"",phone1:"",phone2:"",phone3:"",birthYear:"",birthMonth:"",birthDay:"",sex:"N",knowWisely:"",chk0:!0,chk1:!0,chk2:!1,chk3:!1,pb:"P",createdAt:s.Dc.now(),social:"Y"})}catch(a){alert(a)}}}finally{e(!1),t.push("/")}}n&&a()},[n]),(0,o.jsx)(l,{children:"카카오 로그인 중..."})}}},a=>{var e=e=>a(a.s=e);a.O(0,[636,593,792],()=>e(8866)),_N_E=a.O()}]);