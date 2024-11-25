import{j as s,g as u,_ as n,H as P,S as B}from"./index-Ckpgczvk.js";import{u as F,b as A,a as C,P as T}from"./index-DBoQfh-a.js";import{r as m}from"./router-Bu5b4_LN.js";import{h as $}from"./moment-BjLXg0w5.js";import{C as E,a as k,d as H,b as I}from"./card-BXWGEJ-w.js";import{T as _,a as z,b as w,c as N,d as R,e as b}from"./table-Cd-p8XpK.js";import{u as Y}from"./FileUpload-DRAtH2em.js";import{F as D,R as q,c as G,a as J}from"./RHFTextField-Bgg7dTSw.js";import{o as K}from"./yup-BUr1D_ak.js";import{B as O}from"./ButtonLoading-NqmcDfp2.js";import"./input-B--ZfOPM.js";import{S as L}from"./separator-B6jE5r42.js";import{D as Q}from"./index-CUxpgM_C.js";import{S as U}from"./index-4k9Y5EUK.js";import"./axios-DmypytPv.js";import"./select-C4NWgVNz.js";const V=G().shape({planName:J().required("Month name is required")});function W({open:S,setOpen:h,title:v,id:p,edit:r,setEdit:x,refetch:y}){const j=F({}),f=A({}),{data:e,isFetching:M}=C({api:`${u.getPlanById}/${p}`,options:{enabled:r}}),i=Y({resolver:K(V)}),g=async c=>{var l,o,d,a;try{if(r&&c){const t=await f.mutateAsync({api:`${u.updatePlanById}/${p}`,data:c});(l=t.data)!=null&&l.success?n.success((o=t==null?void 0:t.data)==null?void 0:o.message):n.error(t.data.message)}else{const t=await j.mutateAsync({api:u.createPlan,data:c});(d=t.data)!=null&&d.success?n.success((a=t==null?void 0:t.data)==null?void 0:a.message):n.error("Month not created successfully"),i.reset({planName:""})}h(!1),x(!1),y()}catch{}};return m.useEffect(()=>{r&&e?i.reset({planName:e.data.planName}):i.reset({planName:""})},[r,e]),s.jsx(Q,{open:S,setOpen:h,title:v,setEdit:x,edit:r,isLoading:M,children:s.jsx(D,{methods:i,onSubmit:i.handleSubmit(g),children:s.jsxs("div",{className:"gap-y-4 gap-x-2 grid grid-cols-1",children:[s.jsx("div",{children:s.jsx(q,{name:"planName",placeholder:"Enter plan name"})}),s.jsx(L,{}),s.jsx("div",{children:s.jsx(O,{size:"sm",isLoading:i.formState.isSubmitting,type:"submit",className:"w-full",children:"Submit"})})]})})})}function X(){var g,c,l,o,d;const S=A({}),[h,v]=m.useState(""),[p,r]=m.useState(!1),[x,y]=m.useState(""),[j,f]=m.useState(!1),e=C({api:`${(g=u)==null?void 0:g.getAllPlans}`,key:"planList",options:{enabled:!0}}),M=a=>{f(!0),r(!0),y(a)},i=async a=>{try{const t=await S.mutateAsync({api:`${u.updatePlanStatusById}/${a}`});t.data.success?(n.success(t.data.message),e.refetch()):n.error(t.data.message)}catch{n.error("Something went wrong")}};return s.jsxs("main",{className:"grid items-start",children:[s.jsx(W,{open:p,setOpen:r,title:j?"Edit Month":"Add Month",id:x,edit:j,setEdit:f,refetch:e.refetch}),s.jsxs("div",{className:"grid auto-rows-max items-start gap-4 md:gap-2 lg:col-span-2",children:[s.jsxs("div",{className:"flex justify-between w-full gap-2",children:[s.jsx("div",{children:s.jsx(U,{search:h,setSearch:v,refetch:e.refetch,isFetching:e.isLoading})}),s.jsx("div",{children:s.jsx(P,{size:"sm",className:"flex items-center gap-2",onClick:()=>r(!0),children:"Add New"})})]}),s.jsxs(E,{className:"w-full overflow-scroll",children:[s.jsx(k,{className:"px-7",children:s.jsxs(H,{children:["Total Month: ",(l=(c=e==null?void 0:e.data)==null?void 0:c.data)==null?void 0:l.length]})}),s.jsx(I,{children:e.isLoading?s.jsx("div",{className:"flex justify-center items-center h-32",children:s.jsx(B,{})}):s.jsxs(s.Fragment,{children:[s.jsxs(_,{children:[s.jsx(z,{children:s.jsxs(w,{children:[s.jsx(N,{className:"",children:"PLan Name"}),s.jsx(N,{className:"",children:"Created at"}),s.jsx(N,{className:"",children:"Status"}),s.jsx(N,{className:"text-center",children:"Action"})]})}),s.jsx(R,{children:(d=(o=e==null?void 0:e.data)==null?void 0:o.data)==null?void 0:d.map(a=>s.jsxs(w,{children:[s.jsx(b,{children:a.planName}),s.jsx(b,{children:$(a.createdAt).format("DD-MM-YYYY")}),s.jsx(b,{children:a.status==1?"Active":"Inactive"}),s.jsx(b,{children:s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(P,{size:"sm",className:"bg-primary",onClick:()=>M(a._id),children:"Edit"}),s.jsx(P,{size:"sm",className:a.status==1?"bg-destructive":"bg-green-700",onClick:()=>i(a._id),children:a.status==1?"Deactivate":"Activate"})]})})]},a._id))})]}),s.jsx(L,{className:"mt-4 mb-2"})]})})]})]})]})}function xs(){return s.jsx(T,{title:"Plan List",children:s.jsx("div",{className:" mt-3 mb-2",children:s.jsx(X,{})})})}export{xs as default};
