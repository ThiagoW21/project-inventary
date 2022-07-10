import{u as f,t as w,a1 as q,i as V,r as v,o as y,G as D,w as x,b as a,f as e,s as I,a2 as M,c as T,h as F,a as E,F as R,H as g,d as s,a3 as $,a4 as k}from"./index.ecdfc6f0.js";import{s as h}from"./button.esm.36a23c8c.js";import{u as L,c as N,a as r,F as O,_ as d}from"./TextInput.085c8950.js";import{D as P}from"./DropDown.198f130e.js";import{_ as B,a as U}from"./NavBar.44e31a9b.js";const A={name:"TextArea",props:{value:{type:String},name:{type:String,required:!0},label:{type:String,required:!0},placeholder:{type:String}},setup(t){const i=t,m=f(),n=w(i,"name"),o=q(()=>m.getters.resetForm),{value:l,errorMessage:p}=L(n,void 0,{initialValue:i.value});return V(o,()=>{l.value=""}),(_,c)=>{const u=v("b-form-textarea"),b=v("b-form-group");return y(),D(b,{id:`fieldset-${e(n)}`,label:t.label,"label-for":"input-1",state:_.state},{default:x(()=>[a(u,{id:e(n),name:e(n),placeholder:t.placeholder,modelValue:e(l),"onUpdate:modelValue":c[0]||(c[0]=S=>I(l)?l.value=S:null),state:e(p)&&!e(p),size:"lg",trim:""},null,8,["id","name","placeholder","modelValue","state"])]),_:1},8,["id","label","state"])}}};const C=t=>($("data-v-92a17e1c"),t=t(),k(),t),G={id:"dados-principais"},z=C(()=>s("h1",null,"Dados principais",-1)),H={class:"input-container"},j=C(()=>s("h1",null,"Dados complementares",-1)),J={class:"input-container"},K={class:"input-container"},Q={id:"button-container"},W={name:"CadastroItemView",setup(t){const i=f(),m=M(),n=N().shape({title:r().required("T\xEDtulo \xE9 um campo obrigat\xF3rio"),category:r().required("Categoria \xE9 um campo obrigat\xF3rio"),url_image:r().required("URL \xE9 um campo obrigat\xF3rio"),model:r().required("Modelo \xE9 um campo obrigat\xF3rio"),brand:r().required("Marca \xE9 um campo obrigat\xF3rio"),description:r().required("Marca \xE9 um campo obrigat\xF3rio"),code:r().required("C\xF3digo \xE9 um campo obrigat\xF3rio").min(6,"O c\xF3digo precisa ter pelo menos 6 d\xEDgitos"),price:r().required("Pre\xE7o um campo obrigat\xF3rio")}),o=T(()=>i.getters.item);function l(){i.commit("RESET_FORM")}async function p(c){const u="https://inventary-v1.herokuapp.com/items";i.commit("SET_LOADING"),o.value.id?await g.put(u+`/${o.value.id}`,c):await g.post(u,c),l(),i.commit("SET_LOADING"),m.show({title:"Tudo certo!",body:"O produto foi registrado no banco de dados",delay:3e3})}const _=F(["Notebook","Computadores","Perif\xE9ricos","Pe\xE7as","Escrit\xF3rio"]);return(c,u)=>{const b=v("b-container");return y(),E(R,null,[a(U),a(b,{toast:{root:!0},fluid:"sm",position:"position-absolute",style:{top:"50px",left:"-200px"}}),a(e(O),{onSubmit:p,"validation-schema":e(n)},{default:x(()=>[s("div",G,[z,s("div",H,[a(d,{name:"code",type:"number",value:e(o)&&e(o).code,label:"C\xF3digo:",placeholder:"C\xF3digo do produto"},null,8,["value"]),a(d,{name:"title",type:"text",label:"T\xEDtulo:",value:e(o)&&e(o).title,placeholder:"T\xEDtulo do produto"},null,8,["value"]),a(P,{name:"category",type:"text",label:"Categoria:",value:e(o)&&e(o).category,options:_.value,placeholder:"Categoria do produto"},null,8,["value","options"])]),j,s("div",J,[a(d,{name:"price",type:"text",label:"Pre\xE7o:",value:e(o)&&e(o).price,placeholder:"Pre\xE7o do produto"},null,8,["value"]),a(d,{name:"url_image",type:"text",label:"URL da imagem:",value:e(o)&&e(o).url_image,placeholder:"URL da imagem do produto"},null,8,["value"])]),s("div",K,[a(d,{name:"brand",type:"text",label:"Marca:",value:e(o)&&e(o).brand,placeholder:"Marca do produto"},null,8,["value"]),a(d,{name:"model",type:"text",label:"Modelo:",value:e(o)&&e(o).model,placeholder:"Modelo do produto"},null,8,["value"])]),a(A,{name:"description",label:"Descri\xE7\xE3o:",value:e(o)&&e(o).description,placeholder:"Descri\xE7\xE3o do produto"},null,8,["value"]),s("div",Q,[a(e(h),{label:"Limpar",onClick:l,class:"p-button-raised p-button-warning"}),a(e(h),{label:"Enviar",type:"submit",class:"p-button-raised p-button-success"})])])]),_:1},8,["validation-schema"])],64)}}};var ae=B(W,[["__scopeId","data-v-92a17e1c"]]);export{ae as default};
