import{m as b,h as v,I as h,r as f,o as i,G as g,w as a,d as s,b as t,f as o,a as r,j as c,R as l,J as y}from"./index.ecdfc6f0.js";import{s as n}from"./button.esm.36a23c8c.js";const k={width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",role:"img",focusable:"false"};function C(u,e){return{name:u,render(){return b("svg",Object.assign(Object.assign({},k),{innerHTML:e}))}}}const w=C("BIconList",'<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>');const x={id:"buttons-nav-container"},B={class:"generic-label"},z={key:0},H={class:"generic-label"},I={key:0},V={class:"generic-label"},L={key:0},R={name:"SideBar",setup(u){const e=v(!1),d=h();function p(){localStorage.removeItem("user"),d.push({name:"login"})}return(j,_)=>{const m=f("va-sidebar");return i(),g(m,{minimized:e.value,textColor:"dark",width:"11rem",minimizedWidth:"64px"},{default:a(()=>[s("button",{id:"button-show",onClick:_[0]||(_[0]=N=>e.value=!e.value)},[t(o(w))]),s("div",x,[s("div",B,[e.value?c("",!0):(i(),r("p",z,"Geral")),t(o(l),{to:"/home/inventario"},{default:a(()=>[t(o(n),{label:!e.value&&"Invent\xE1rio",class:"p-button-outlined p-button-secondary",icon:"pi pi-box"},null,8,["label"])]),_:1}),t(o(n),{label:!e.value&&"Sair",class:"p-button-outlined p-button-secondary",icon:"pi pi-sign-out",onClick:p},null,8,["label"])]),s("div",H,[e.value?c("",!0):(i(),r("p",I,"Colaboradores")),t(o(l),{to:"/home/contribuitors/cadastro"},{default:a(()=>[t(o(n),{label:!e.value&&"Cadastrar",class:"p-button-outlined p-button-secondary",icon:"pi pi-plus"},null,8,["label"])]),_:1}),t(o(l),{to:"/home/contribuitors/listar"},{default:a(()=>[t(o(n),{label:!e.value&&"Listar",class:"p-button-outlined p-button-secondary",icon:"pi pi-list"},null,8,["label"])]),_:1})]),s("div",V,[e.value?c("",!0):(i(),r("p",L,"Produtos")),t(o(l),{to:"/home/items/cadastro"},{default:a(()=>[t(o(n),{label:!e.value&&"Cadastrar",class:"p-button-outlined p-button-secondary",icon:"pi pi-plus"},null,8,["label"])]),_:1}),t(o(l),{to:"/home/items/emprestimo"},{default:a(()=>[t(o(n),{label:!e.value&&"Empr\xE9stimos",class:"p-button-outlined p-button-secondary emprestimo",icon:"pi pi-share-alt"},null,8,["label"])]),_:1})])])]),_:1},8,["minimized"])}}};const S={class:"demo-content"},$={class:"view-content"},M={name:"HomeView",setup(u){return(e,d)=>(i(),r("div",S,[t(R),s("div",$,[t(o(y))])]))}};export{M as default};
