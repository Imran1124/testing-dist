import{j as e,a as y,_ as l}from"./index-Ckpgczvk.js";import{r as v,d as F}from"./router-Bu5b4_LN.js";import{u as b,P as R}from"./index-DBoQfh-a.js";import{u as N}from"./FileUpload-DRAtH2em.js";import{F as P,R as E,c as S,a as f,b as q}from"./RHFTextField-Bgg7dTSw.js";import{o as O}from"./yup-BUr1D_ak.js";import{g as w}from"./services-KQnp_8oA.js";import{B as k}from"./ButtonLoading-NqmcDfp2.js";import"./input-B--ZfOPM.js";import{u as L}from"./useTimer-B_7DHncw.js";import{R as T}from"./RHFPasswordField-CYxKnkRA.js";import"./axios-DmypytPv.js";import"./select-C4NWgVNz.js";const A=S({email:f().email().required()});function $({next:c,data:r}){const m=b({}),a=N({defaultValues:{email:r.email},resolver:O(A)}),x=async o=>{var n,u,p,t;try{const s=await m.mutateAsync({api:y.sendOtpViaEmail,data:o});(n=s==null?void 0:s.data)!=null&&n.success?(c({...o,email:o==null?void 0:o.email,token:(u=s==null?void 0:s.data)==null?void 0:u.token}),l.success((p=s==null?void 0:s.data)==null?void 0:p.message)):l.error((t=s==null?void 0:s.data)==null?void 0:t.message)}catch(s){l.error(w(s))}};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"px-6 lg:px-0 mx-auto max-w-sm mb-4",children:[e.jsx("div",{className:"flex justify-center"}),e.jsx("h1",{className:"text-3xl font-bold text-center mt-4 text-green-400",children:"Send OTP"}),e.jsx("p",{className:"text-center mt-2 text-muted-foreground text-xs",children:"Enter your email to send OTP to your email address"})]}),e.jsx(P,{methods:a,onSubmit:a.handleSubmit(x),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"space-y-2",children:e.jsx(E,{className:"rounded-xl py-6 px-5 w-full bg-background",name:"email",inputValidation:["email","removeSpace"],placeholder:"Enter your email"})}),e.jsx("div",{children:e.jsx(k,{type:"submit",isLoading:a.formState.isSubmitting,className:"w-full rounded-xl py-5 px-4 mt-2 shadow-none",variant:"outline",children:"Send OTP"})})]})})]})}const C=S({email:f().email().required(),otp:f().required(),token:f().required()});function D({next:c,data:r,setData:m,prev:a}){const{minutes:x,seconds:o,togglerTimer:n,runTimer:u}=L(.5),p=b({}),t=N({defaultValues:{email:r.email,otp:r.otp,token:r.token},resolver:O(C)}),s=async h=>{var g,j,i;try{const d=await p.mutateAsync({api:y.verifyOtp,data:h});(g=d==null?void 0:d.data)!=null&&g.success?(c({...h,otp:h==null?void 0:h.otp}),l.success((j=d==null?void 0:d.data)==null?void 0:j.message)):l.error((i=d==null?void 0:d.data)==null?void 0:i.message)}catch(d){l.error(w(d))}};v.useEffect(()=>(n(),()=>{n()}),[]);const V=async()=>{var h,g,j;try{const i=await p.mutateAsync({api:y.sendOtpViaEmail,data:{email:r.email}});(h=i==null?void 0:i.data)!=null&&h.success?(l.success((g=i==null?void 0:i.data)==null?void 0:g.message),m({...r,otp:""}),t.setValue("otp",""),n()):l.error((j=i==null?void 0:i.data)==null?void 0:j.message)}catch(i){l.error(w(i))}};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"px-6 lg:px-0 mx-auto max-w-sm mb-4",children:[e.jsx("div",{className:"flex justify-center"}),e.jsx("h1",{className:"text-3xl font-bold text-center mt-4 text-green-400",children:"Verify OTP"}),e.jsxs("h1",{className:"text-center mt-2 text-muted-foreground text-xs",children:["Verify your OTP to reset your password",e.jsxs("p",{className:"text-center text-muted-foreground text-xs text-green-400",children:[r.email,"  ",e.jsx("button",{onClick:()=>a(r),className:"text-center mt-2  text-sm text-green-400 cursor-pointer hover:text-green-500 underline",children:"Edit"})]})]})]}),e.jsx(P,{methods:t,onSubmit:t.handleSubmit(s),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"space-y-2",children:e.jsx(E,{className:"rounded-xl py-6 px-5 w-full bg-background",name:"otp",inputValidation:["number","removeSpace"],placeholder:"Enter your OTP"})}),e.jsx("div",{children:e.jsx(k,{type:"submit",isLoading:t.formState.isSubmitting,className:"w-full rounded-xl py-5 px-4 mt-2 shadow-none",variant:"outline",children:"Verify OTP"})}),e.jsxs("div",{className:"text-center text-muted-foreground text-xs",children:[e.jsx("span",{children:"Didn't receive the OTP? "}),u?e.jsxs("span",{className:"text-center mt-2  text-sm text-green-400 cursor-pointer hover:text-green-500 underline",children:[x,":",o]}):e.jsx("button",{className:"text-center mt-2  text-sm text-green-400 cursor-pointer hover:text-green-500 underline",onClick:V,children:"Resend OTP"})]})]})})]})}const B=S({email:f().email().required(),token:f().required(),password:f().required(),confirmPassword:f().required().oneOf([q("password"),""],"Passwords must match")});function H({data:c}){const r=F(),m=b({}),a=N({defaultValues:{email:c.email,password:c.password,confirmPassword:c.confirmPassword,token:c.token},resolver:O(B)}),x=async o=>{var n,u,p;try{const t=await m.mutateAsync({api:y.resetPassword,data:{email:o.email,password:o.password,token:o.token}});(n=t==null?void 0:t.data)!=null&&n.success?(l.success((u=t==null?void 0:t.data)==null?void 0:u.message),r("/lms-app/auth/login")):l.error((p=t==null?void 0:t.data)==null?void 0:p.message)}catch(t){l.error(w(t))}};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"px-6 lg:px-0 mx-auto max-w-sm mb-4",children:[e.jsx("div",{className:"flex justify-center"}),e.jsx("h1",{className:"text-3xl font-bold text-center mt-4 text-green-400",children:"Reset Password"}),e.jsx("h1",{className:"text-center mt-2 text-muted-foreground text-xs",children:"Reset your password to login to your account"})]}),e.jsx(P,{methods:a,onSubmit:a.handleSubmit(x),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"space-y-2",children:e.jsx(T,{className:"rounded-xl py-6 px-5 w-full bg-background",name:"password",placeholder:"Enter your OTP"})}),e.jsx("div",{className:"space-y-2",children:e.jsx(T,{className:"rounded-xl py-6 px-5 w-full bg-background",name:"confirmPassword",placeholder:"Enter your OTP"})}),e.jsx("div",{children:e.jsx(k,{type:"submit",isLoading:a.formState.isSubmitting,className:"w-full rounded-xl py-5 px-4 mt-2 shadow-none",variant:"outline",children:"Reset Password"})})]})})]})}function ee(){const[c,r]=v.useState(0),[m,a]=v.useState({email:"",otp:"",password:"",confirmPassword:"",token:""}),x=(n,u=!1)=>{a({...m,...n}),!u&&r(c+1)},o=n=>{a({...m,...n}),r(c-1)};return e.jsx(R,{title:"Login",children:e.jsx("div",{className:"flex flex-col w-full justify-center h-screen px-6 lg:px-0 mx-auto max-w-sm",children:{0:e.jsx($,{next:x,data:m}),1:e.jsx(D,{next:x,prev:o,data:m,setData:a}),2:e.jsx(H,{prev:o,data:m,setData:a})}[c]||null})})}export{ee as default};
