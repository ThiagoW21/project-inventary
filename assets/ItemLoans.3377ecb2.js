import{s as h}from"./button.esm.36a23c8c.js";import{s as V}from"./dialog.esm.0cf18bed.js";import{u as y,h as o,c as k,o as v,G as b,f as i,H as D,p as $,r as S,a as B,b as d,d as p,w as g,F as M,a3 as F,a4 as L}from"./index.ecdfc6f0.js";import{s as q,I as E}from"./ItemDetail.31e32240.js";import{_ as N,a as P}from"./NavBar.44e31a9b.js";const T={name:"DropDownLoans",props:{borrowed:{type:String,required:!0},loading:{type:Boolean,required:!0},item:{type:String,required:!0}},setup(a){const r=y(),s=o(),u=o(!1);async function _(c){c.borrowed_to=s;const e=`https://inventary-v1.herokuapp.com/items/${c.id}`;u.value=!0,await D.put(e,c),u.value=!1}const f=k(()=>r.getters.contribuitorsName);return(c,e)=>(v(),b(i(q),{modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=l=>s.value=l),options:i(f),placeholder:a.borrowed,onChange:e[1]||(e[1]=l=>_(a.item)),loading:u.value},null,8,["modelValue","options","placeholder","loading"]))}};const C=a=>(F("data-v-00710afe"),a=a(),L(),a),U={id:"view-container"},A={class:"search-container"},G={class:"p-float-label p-input-icon-left"},H=C(()=>p("i",{class:"pi pi-search"},null,-1)),R=C(()=>p("label",{for:"inputtext"},"Digite o t\xEDtulo do item",-1)),j={name:"ItemLoans",setup(a){const r=y();$(async()=>{await r.dispatch("getItens"),await r.dispatch("getContribuitors")});const s=o(!1),u=o(),_=k(()=>r.getters.items.map(t=>({Patrim\u00F4nio:t.code,T\u00EDtulo:t.title,Categoria:t.category,borrowed:t.borrowed_to,values:t})));function f(t){u.value=t,s.value=!0}const c=o(["Patrim\xF4nio","T\xEDtulo","Categoria","Emprestado","Detalhes"]),e=o(!1),l=o(""),I=o("");function w(){r.dispatch(e.value?"removeFilter":"filterItems",{key:"title",value:l.value}),e.value=!e.value,l.value="",I.value=""}return(t,m)=>{const x=S("b-table");return v(),B(M,null,[d(P),p("div",U,[p("div",A,[p("span",G,[H,d(i(V),{modelValue:l.value,"onUpdate:modelValue":m[0]||(m[0]=n=>l.value=n),id:"inputtext"},null,8,["modelValue"]),R]),e.value?(v(),b(i(h),{key:0,label:"Remover filtro",icon:"pi pi-trash",class:"p-button-danger",onClick:w})):(v(),b(i(h),{key:1,type:"button",label:"Buscar",icon:"pi pi-search",onClick:w}))]),p("div",null,[d(x,{striped:"",hover:"",items:i(_),fields:c.value},{"cell(Emprestado)":g(n=>[d(T,{item:n.item.values,borrowed:n.item.borrowed},null,8,["item","borrowed"])]),"cell(Detalhes)":g(n=>[d(i(h),{type:"button",label:"Mostrar",onClick:z=>f(n.item.values),class:"p-button-secondary"},null,8,["onClick"])]),_:1},8,["items","fields"])]),d(E,{showModal:s.value,item:u.value,onShowModal:m[1]||(m[1]=n=>s.value=!1)},null,8,["showModal","item"])])],64)}}};var X=N(j,[["__scopeId","data-v-00710afe"]]);export{X as default};