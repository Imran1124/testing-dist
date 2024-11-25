import{j as e,A as w,d as A,e as k,H as C,g as D}from"./index-Ckpgczvk.js";import{d as $,r as a}from"./router-Bu5b4_LN.js";import{C as F}from"./card-BXWGEJ-w.js";import{a as I,P as z}from"./index-DBoQfh-a.js";import{L as B,P as M}from"./index-8d7qnEGm.js";import{S as U}from"./index-4k9Y5EUK.js";import{h as t}from"./moment-BjLXg0w5.js";import{E as q}from"./eye-DjvEq7pQ.js";import"./axios-DmypytPv.js";import"./select-C4NWgVNz.js";import"./input-B--ZfOPM.js";function X(){var n,o,x,d,h,p,j,b,f;const P=$(),[i,l]=a.useState(1),[m,L]=a.useState(5),[c,E]=a.useState(""),r=I({api:`${D.getAllExpiredSubscription}?page=${i}&limit=${m}&q=${c}`,key:"exp-list",value:[i,m],options:{enabled:!0}});return e.jsxs(z,{title:"Expired Subscription",children:[e.jsx("div",{className:"flex items-center justify-between mt-4",children:e.jsxs("h1",{className:"text-base font-semibold text-muted-foreground",children:["Expired Subscription List(",(n=r.data)==null?void 0:n.data.totalDocs,")"]})}),e.jsx("div",{className:"border-t border-secondary mt-3 mb-2"}),e.jsx(U,{search:c,setSearch:E,refetch:r.refetch,isFetching:r.isFetching,setPage:l}),e.jsx("div",{className:"border-t border-secondary mt-1 mb-1"}),e.jsxs(B,{dataLength:(x=(o=r.data)==null?void 0:o.data)==null?void 0:x.docs.length,isLoading:r.isLoading,children:[e.jsx("div",{className:"grid grid-cols-1 gap-3 mt-2",children:(h=(d=r.data)==null?void 0:d.data)==null?void 0:h.docs.map((s,S)=>{var g,N,u,v,y;return e.jsxs(F,{children:[e.jsx("div",{className:"p-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs(w,{className:"w-12 h-12 border dark:border-gray-700",children:[e.jsx(A,{src:(g=s==null?void 0:s.member)==null?void 0:g.fullImgUrl,alt:"@shadcn"}),e.jsx(k,{className:"text-base text-primary",children:(N=s==null?void 0:s.member)==null?void 0:N.memberName.charAt(0).toUpperCase()})]}),e.jsxs("div",{children:[e.jsxs("h1",{className:"text-primary font-semibold text-sm",children:[(u=s==null?void 0:s.member)==null?void 0:u.memberName," "]}),e.jsx("div",{className:"text-primary font-bold ",children:e.jsx("h1",{className:"text-muted-foreground text-xs",children:(v=s==null?void 0:s.member)==null?void 0:v.generatedId})})]})]}),e.jsx("div",{children:e.jsx("h1",{className:"text-primary font-semibold text-sm",children:t(s.endDate).diff(t(),"days")<=0?e.jsx("span",{className:"text-red-500",children:"Expired"}):e.jsx("span",{className:"text-red-500",children:t(s.endDate).diff(t(),"days")+" days left"})})})]})}),e.jsx("div",{className:"px-4 mb-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-primary font-semibold text-xs",children:(y=s==null?void 0:s.member)==null?void 0:y.mobile}),e.jsx("small",{className:"text-muted-foreground font-semibold text-xs",children:"Mobile"})]}),e.jsx("div",{children:e.jsx("h1",{className:"text-primary font-semibold text-xs",children:s==null?void 0:s.planName})})]})}),e.jsx("div",{className:"flex items-center justify-between px-4 mb-4 gap-3",children:e.jsxs(C,{variant:"outline",size:"sm",className:"text-primary w-full h-6 ",onClick:()=>P(`/gym-app/view-member/${s==null?void 0:s.member._id}`),children:[e.jsx(q,{size:16}),e.jsx("h1",{className:"ms-1 text-xs",children:"View"})]})})]},S+1)})}),e.jsx("div",{className:"flex justify-end mt-3",children:e.jsx(M,{page:i,perPage:m,totalPage:(p=r.data)==null?void 0:p.data.totalDocs,hasNextPage:(b=(j=r.data)==null?void 0:j.data)==null?void 0:b.hasNextPage,hasPrevPage:(f=r.data)==null?void 0:f.data.hasPrevPage,setPage:l,setPerPage:L})})]})]})}export{X as default};
