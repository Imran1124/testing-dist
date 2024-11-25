import{j as e,S as W,O as J,g as R,_ as j}from"./index-Ckpgczvk.js";import{C as K}from"./card-BXWGEJ-w.js";import{b as Q,a as U,P as X}from"./index-DBoQfh-a.js";import{h as o}from"./moment-BjLXg0w5.js";import{T as Z,a as ee,b as H,c as i,d as se,e as u}from"./table-Cd-p8XpK.js";import{d as ae,e as te,r as q}from"./router-Bu5b4_LN.js";import{u as ne,e as re}from"./FileUpload-DRAtH2em.js";import{F as de,R as oe,c as O,f as le,a as x,g as N}from"./RHFTextField-Bgg7dTSw.js";import{B as me}from"./ButtonLoading-NqmcDfp2.js";import"./input-B--ZfOPM.js";import{C as ce}from"./index-CMNcp6Vq.js";import"./axios-DmypytPv.js";import"./select-C4NWgVNz.js";O().shape({subData:le().of(O().shape({id:x(),amount:N(),paidAmount:N().required("Paid Amount is required"),dueAmount:N(),paidStatus:N(),startDate:x(),endDate:x(),planName:x(),month:x()}))});function Ae(){var v,D,A,P,S,M,w,Y,$,E,I,T,C,F,_,k,B;const g=ae(),y=Q({}),{id:h}=te(),l=U({api:`${R.getDueSubscription}/${h}`,key:"get-member-detail-view-payment",value:[h],options:{enabled:!!h}}),p=q.useMemo(()=>{var s,t,r,d;return{subData:(d=(r=(t=(s=l.data)==null?void 0:s.data)==null?void 0:t.subscription)==null?void 0:r.filter)==null?void 0:d.call(r,n=>n.paidStatus==0).map(n=>({id:n._id,amount:n==null?void 0:n.amount,paidAmount:n==null?void 0:n.amount,dueAmount:0,paidStatus:n==null?void 0:n.paidStatus,startDate:n.startDate||"",endDate:n.endDate||"",planName:n.planName||"",month:n.month||""}))}},[(D=(v=l.data)==null?void 0:v.data)==null?void 0:D.subscription]),b=ne({defaultValues:p}),{handleSubmit:V,watch:m,control:z}=b,{fields:f}=re({control:z,name:"subData"}),G=async s=>{var n,L;const t=(n=s==null?void 0:s.subData)==null?void 0:n.map(a=>({id:a.id,paidAmount:Number(a.paidAmount)+Number(a.dueAmount),dueAmount:(a==null?void 0:a.amount)-a.paidAmount-a.dueAmount,planName:a.planName,amount:a.amount,startDate:a.startDate,endDate:a.endDate,month:a.month,prevDueAmount:a.dueAmount})),r=(L=c(2))==null?void 0:L.map(a=>({id:a._id,paidAmount:Number(a.paidAmount)+Number(a.dueAmount),dueAmount:(a==null?void 0:a.amount)-a.paidAmount-(a==null?void 0:a.dueAmount),planName:a.planName,amount:a.amount,startDate:a.startDate,endDate:a.endDate,month:a.month,prevDueAmount:a.dueAmount})),d=[...t||[],...r||[]];if(d!=null&&d.some(a=>a.paidAmount==0))return j.error("Please enter paid amount");ce("Are you sure?","You want to pay amount for this Member?",async()=>{try{const a=await y.mutateAsync({api:R.updateSubscription,data:{memberId:h,subData:d}});a.data.success?(j.success(a.data.message),g(`/gym-app/payment-receipt/${a.data.data._id}`)):j.error(a.data.message)}catch{j.error("Something went wrong")}})};q.useEffect(()=>{p&&b.reset(p)},[p]);const c=s=>{var t,r,d;return(d=(r=(t=l==null?void 0:l.data)==null?void 0:t.data)==null?void 0:r.subscription)==null?void 0:d.filter(n=>n.paidStatus==s)};return l.isLoading?e.jsx("div",{className:"flex justify-center items-center h-screen",children:e.jsx(W,{})}):e.jsxs(X,{title:"Payment",children:[e.jsx(K,{className:"mt-4 p-4 shadow-none bg-secondary",children:e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-xs font-semibold text-muted-foreground",children:"Member Name"}),e.jsx("h1",{className:"text-sm font-semibold",children:(P=(A=l.data)==null?void 0:A.data)==null?void 0:P.memberName})]}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-xs font-semibold text-muted-foreground",children:"Member ID"}),e.jsx("h1",{className:"text-sm font-semibold",children:(M=(S=l.data)==null?void 0:S.data)==null?void 0:M.generatedId})]})]})}),((($=(Y=(w=l.data)==null?void 0:w.data)==null?void 0:Y.subscription)==null?void 0:$.length)??0)==0?e.jsx("div",{className:"flex items-center justify-center h-[500px]",children:e.jsxs("div",{children:[e.jsx("div",{className:"text-center flex justify-center items-center",children:e.jsx(J,{src:"/check.svg",alt:"No data",className:"h-24 w-24"})}),e.jsxs("div",{className:"text-center mt-1",children:[e.jsx("h1",{className:"text-sm font-semibold text-muted-foreground",children:"No Due Amount"}),e.jsx("h1",{className:"text-sm font-semibold",children:"All dues are cleared"})]}),e.jsx("div",{className:"text-center mt-4",children:e.jsx("button",{onClick:()=>g(-1),className:"text-xs font-semibold text-primary",children:"Go Back"})})]})}):e.jsxs(e.Fragment,{children:[((E=c(2))==null?void 0:E.length)>0&&e.jsxs("div",{className:"mt-6",children:[e.jsx("h1",{className:"text-sm font-semibold text-muted-foreground",children:"Due Amount List"}),e.jsx("div",{className:"",children:e.jsxs(Z,{children:[e.jsx(ee,{children:e.jsxs(H,{children:[e.jsx(i,{className:"py-1",children:e.jsx("small",{children:e.jsx("strong",{children:"Plan"})})}),e.jsx(i,{className:"py-1",children:e.jsx("small",{children:e.jsx("strong",{children:"Expire"})})}),e.jsx(i,{className:"py-1",children:e.jsx("small",{children:"Amount"})}),e.jsx(i,{className:"py-1",children:e.jsx("small",{children:"Paid"})}),e.jsx(i,{className:"py-1",children:e.jsx("small",{children:"Due"})})]})}),e.jsx(se,{children:(I=c(2))==null?void 0:I.map(s=>e.jsxs(H,{children:[e.jsx(u,{className:"py-2",children:e.jsx("small",{children:s.planName})}),e.jsx(u,{className:"py-2",children:o(s.endDate).diff(o(),"days")<0?"Expired":o(s.endDate).diff(o(),"days")+" days"}),e.jsx(u,{className:"py-2",children:s.amount}),e.jsx(u,{className:"py-2",children:s.paidAmount}),e.jsx(u,{className:"py-2",children:s==null?void 0:s.dueAmount})]},s._id))})]})})]}),e.jsx("div",{className:"border-t border-gray-100 mt-5"}),e.jsx(de,{methods:b,onSubmit:V(G),children:e.jsxs("div",{className:"mt-4",children:[f==null?void 0:f.map((s,t)=>e.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[e.jsxs("div",{className:"col-span-3",children:[e.jsx("h1",{className:"text-xs font-semibold text-muted-foreground",children:"Plan"}),e.jsxs("h1",{className:"text-xs font-semibold",children:[s.planName," (",s.month," month)",e.jsx("small",{className:"text-muted-foreground text-xs"})]})]}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-xs font-semibold text-muted-foreground",children:"Start Date"}),e.jsx("h1",{className:"text-xs font-semibold",children:o(s.startDate).format("DD-MMM-YYYY")})]}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-xs font-semibold text-muted-foreground",children:"End Date"}),e.jsx("h1",{className:"text-xs font-semibold",children:o(s.endDate).format("DD-MMM-YYYY")})]}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-xs font-semibold text-muted-foreground",children:"Expired In"}),o(s.endDate).diff(o(),"days")<0?e.jsxs("h1",{className:"text-xs font-semibold text-red-600",children:[" ","Expired"]}):e.jsx("h1",{className:"text-xs font-semibold text-green-600",children:o(s.endDate).diff(o(),"days")+" days"})]}),e.jsx("div",{className:"border-t border-gray-200 py-0 col-span-3"}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-xs font-semibold text-muted-foreground",children:"Amount"}),e.jsx("h1",{className:"text-xs font-semibold",children:s.amount})]}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-xs font-semibold text-muted-foreground",children:"Paid"}),e.jsx("h1",{className:"text-xs font-semibold",children:m(`subData[${t}].paidAmount`)})]}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-xs font-semibold text-muted-foreground",children:"Due"}),e.jsx("h1",{className:"text-xs font-semibold",children:s.amount-parseInt(m(`subData[${t}].paidAmount`))})]}),e.jsx("div",{className:"col-span-3",children:e.jsx(oe,{className:"w-full",name:`subData[${t}].paidAmount`,type:"number",onInput:r=>{parseInt(r.target.value)>s.amount&&(r.target.value=s.amount)}})}),e.jsx("div",{className:"border-t border-gray-200 py-2 col-span-3"}),e.jsx("div",{className:"border-t border-gray-200 py-2 col-span-3"})]},s.id)),e.jsxs("div",{className:"grid grid-cols-2 gap-x-10 gap-y-2",children:[e.jsx("div",{className:"text-green-700",children:e.jsx("h1",{className:"text-xs font-semibold",children:"Amount"})}),e.jsx("div",{className:"text-green-700",children:e.jsxs("h1",{className:"text-xs font-semibold",children:["₹",(T=m("subData"))==null?void 0:T.reduce((s,t)=>s+Number(t==null?void 0:t.amount),0)]})}),e.jsx("div",{className:"text-blue-700",children:e.jsxs("h1",{className:"text-xs font-semibold",children:[" ","Previous due amount"]})}),e.jsx("div",{className:"text-blue-700",children:e.jsxs("h1",{className:"text-xs font-semibold",children:["+₹",(C=c(2))==null?void 0:C.reduce((s,t)=>s+Number(t==null?void 0:t.dueAmount),0)]})}),e.jsx("div",{className:"text-cyan-700",children:e.jsx("h1",{className:"text-xs font-semibold",children:" Current due amount"})}),e.jsx("div",{className:"text-cyan-700",children:e.jsxs("h1",{className:"text-xs font-semibold",children:["-₹",((F=m("subData"))==null?void 0:F.reduce((s,t)=>s+Number(t==null?void 0:t.amount),0))-((_=m("subData"))==null?void 0:_.reduce((s,t)=>s+Number(t==null?void 0:t.paidAmount),0))]})}),e.jsx("div",{className:"text-red-700",children:e.jsx("h1",{className:"text-xs font-semibold ",children:"Paid amount"})}),e.jsx("div",{className:"text-red-700",children:e.jsxs("h1",{className:"text-xs font-semibold",children:["₹",((k=m("subData"))==null?void 0:k.reduce((s,t)=>s+Number(t.paidAmount),0))+((B=c(2))==null?void 0:B.reduce((s,t)=>s+Number(t==null?void 0:t.dueAmount),0))]})})]}),e.jsx("div",{className:"py-2"}),e.jsx("div",{className:"border-t border-gray-200 py-2"}),e.jsx("div",{className:"flex justify-center items-center mt-4",children:e.jsx(me,{type:"submit",size:"sm",isLoading:y.isPending,children:e.jsx("small",{className:"font-bold w-24",children:"PAY NOW"})})})]})})]})]})}export{Ae as default};
