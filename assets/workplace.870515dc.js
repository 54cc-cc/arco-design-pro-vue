var x=Object.defineProperty;var _=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var l=(e,o,t)=>o in e?x(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,m=(e,o)=>{for(var t in o||(o={}))$.call(o,t)&&l(e,t,o[t]);if(_)for(var t of _(o))w.call(o,t)&&l(e,t,o[t]);return e};import{N as C}from"./@arco-design.f2016b93.js";import{u as B}from"./vuex.f2627569.js";import{_ as u}from"./index.d618acf9.js";import{a3 as f,aF as a,ax as h,Q as N,b0 as n,a1 as r,a0 as i,r as S,k as I,am as F,v as T,V,W as s,D as b,I as q,aA as W,ay as D}from"./@vue.e02a3834.js";import"./resize-observer-polyfill.8deb1e21.js";import"./number-precision.08b8c2db.js";import"./dayjs.2a7a7c2f.js";import"./@kangc.df515874.js";import"./vue.f69c86df.js";import"./@babel.a2cac5d0.js";import"./markdown-it-emoji.952032df.js";import"./b-tween.87ffe365.js";import"./b-validate.bae5bacf.js";import"./lodash.isequal.201cba8d.js";import"./scroll-into-view-if-needed.90f76059.js";import"./compute-scroll-into-view.b7c2d4bc.js";import"./vue-router.2b72e281.js";import"./vue-i18n.9faaa2f1.js";import"./@intlify.5f0d6149.js";import"./source-map.8e70e1f9.js";import"./highlight.js.6e93349b.js";import"./codemirror.2278e5f7.js";import"./mockjs.bc28d6dc.js";import"./vite-plugin-mock.5cc45201.js";import"./path-to-regexp.3eda823b.js";const E=f({name:"WorkplaceBanner",setup(){return{}}}),M=i(" \u6B22\u8FCE "),R=i(" \u54C8\u54C8\u54C8, 123456789@qq.com ");function z(e,o,t,j,v,g){const d=a("a-typography-title"),c=a("a-typography-text"),y=a("a-col"),k=a("a-row");return h(),N(k,{class:"banner"},{default:n(()=>[r(y,{span:8},{default:n(()=>[r(d,{heading:5,style:{"margin-top":"0"}},{default:n(()=>[M]),_:1}),r(c,{type:"secondary"},{default:n(()=>[R]),_:1})]),_:1})]),_:1})}var A=u(E,[["render",z]]);const H=f({name:"WorkPlace",components:{Banner:A},setup(){const e=B(),o=S({theme:I(e.getters.getTheme)}),t=()=>{C.info({content:"This is an info message!"})};return F(()=>{}),m({openNotification:t},T(o))}}),p=e=>(W("data-v-2db58baa"),e=e(),D(),e),O={class:"container"},P=p(()=>s("h1",null,"1234",-1)),Q=p(()=>s("div",{class:"dark"},[s("span",{class:"cursor-pointer p-1 text-white dark:text-white container1"},"2345")],-1)),G=i("Top Right Message"),J={class:"cursor-pointer"},K=p(()=>s("div",{class:"text-red-1 bg-arcoblue-6 border-arco-border-1 border-solid"}," Should Fill Something Here ",-1)),L=p(()=>s("div",{class:"p-20"},null,-1)),U=i("Outline");function X(e,o,t,j,v,g){const d=a("banner"),c=a("a-button");return h(),V(q,null,[s("div",O,[r(d)]),P,Q,r(c,{onClick:e.openNotification},{default:n(()=>[G]),_:1},8,["onClick"]),s("span",J,b(e.$t("menu.lang")),1),K,L,r(c,{type:"outline"},{default:n(()=>[U]),_:1}),i(" "+b(e.theme),1)],64)}var $e=u(H,[["render",X],["__scopeId","data-v-2db58baa"]]);export{$e as default};
