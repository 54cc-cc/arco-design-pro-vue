var e=(e,t,i)=>new Promise(((s,n)=>{var a=e=>{try{o(i.next(e))}catch(t){n(t)}},r=e=>{try{o(i.throw(e))}catch(t){n(t)}},o=e=>e.done?s(e.value):Promise.resolve(e.value).then(a,r);o((i=i.apply(e,t)).next())}));/* empty css              */import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{d as i,t as s,v as n,g as a,r,c as o,o as l,_ as u,O as c,N as d,al as p,aG as v,E as f,e as z,G as g,H as m,A as S,h as x,n as h,B as y,C as w,ac as P,aH as b,s as $,j as C,f as R,a as j}from"./index.af0d19b4.js";import{R as N,u as _}from"./resize-trigger.e9272a1f.js";import"./ResizeObserver.es.bd9ff68d.js";function M(e){const t=c(e)?parseFloat(e):e;let i="";return i=d(e)||String(t)===e?t>1?"px":"%":"px",{size:t,unit:i,isPx:"px"===i}}function H({size:e,defaultSize:t,containerSize:i}){const s=M(null!=e?e:t);return s.isPx?s.size:s.size*i}var T=u(i({name:"Split",components:{ResizeTrigger:N},props:{component:{type:String,default:"div"},direction:{type:String,default:"horizontal"},size:{type:[Number,String],default:void 0},defaultSize:{type:[Number,String],default:.5},min:{type:[Number,String]},max:{type:[Number,String]},disabled:{type:Boolean,default:!1}},emits:{moveStart:e=>!0,moving:e=>!0,moveEnd:e=>!0,"update:size":e=>!0},setup(t,{emit:i}){const{direction:u,size:c,defaultSize:d,min:f,max:z}=s(t),g=n(0),m=n(),S=a("split"),[x,h]=_(d.value,r({value:c})),y=o((()=>M(x.value))),w=o((()=>"horizontal"===u.value)),P=o((()=>[S,{[`${S}-horizontal`]:w.value,[`${S}-vertical`]:!w.value}])),$=o((()=>{const{size:e,unit:t,isPx:i}=y.value;return{flex:`0 0 calc(${i?e:100*e}${t} - ${g.value/2}px)`}})),C={startPageX:0,startPageY:0,startContainerSize:0,startSize:0};function R(){return e(this,null,(function*(){const e=()=>{var e,t;return w.value?null==(e=m.value)?void 0:e.clientWidth:(null==(t=m.value)?void 0:t.clientHeight)||0};return m.value&&!e()||(yield p()),e()}))}function j(e,t){if(!t)return;const s=y.value.isPx?`${e}px`:(n=t,parseFloat(e)/parseFloat(n));var n;x.value!==s&&(h(s),i("update:size",s))}function N(e,t){const i=H({size:e,containerSize:t}),s=H({size:f.value,defaultSize:"0px",containerSize:t}),n=H({size:z.value,defaultSize:`${t}px`,containerSize:t});let a=i;return a=Math.max(a,s),a=Math.min(a,n),a}function T({startContainerSize:e,startSize:t,startPosition:i,endPosition:s}){return N(`${H({size:t,containerSize:e})+(s-i)}px`,e)}function X(e){i("moving",e);j(w.value?T({startContainerSize:C.startContainerSize,startSize:C.startSize,startPosition:C.startPageX,endPosition:e.pageX}):T({startContainerSize:C.startContainerSize,startSize:C.startSize,startPosition:C.startPageY,endPosition:e.pageY}),C.startContainerSize)}function Y(e){b(window,"mousemove",X),b(window,"mouseup",Y),b(window,"contextmenu",Y),document.body.style.cursor="default",i("moveEnd",e)}return l((()=>e(this,null,(function*(){const e=yield R();j(N(x.value,e),e)})))),{prefixCls:S,classNames:P,isHorizontal:w,wrapperRef:m,onMoveStart:function(t){return e(this,null,(function*(){i("moveStart",t),C.startPageX=t.pageX,C.startPageY=t.pageY,C.startContainerSize=yield R(),C.startSize=x.value,v(window,"mousemove",X),v(window,"mouseup",Y),v(window,"contextmenu",Y),document.body.style.cursor=w.value?"col-resize":"row-resize"}))},onTriggerResize:function(e){const{width:t,height:i}=e.contentRect;g.value=w.value?t:i},firstPaneStyles:$}}}),[["render",function(e,t,i,s,n,a){const r=f("ResizeTrigger");return z(),g(P(e.component),{ref:"wrapperRef",class:h(e.classNames)},{default:m((()=>[S("div",{class:h([`${e.prefixCls}-pane`,`${e.prefixCls}-pane-first`]),style:y(e.firstPaneStyles)},[x(e.$slots,"first")],6),e.disabled?w("v-if",!0):(z(),g(r,{key:0,"prefix-cls":`${e.prefixCls}-trigger`,direction:e.isHorizontal?"vertical":"horizontal",onMousedown:e.onMoveStart,onResize:e.onTriggerResize},{default:m((()=>[x(e.$slots,"resize-trigger")])),icon:m((()=>[x(e.$slots,"resize-trigger-icon")])),_:3},8,["prefix-cls","direction","onMousedown","onResize"])),S("div",{class:h([`${e.prefixCls}-pane`,`${e.prefixCls}-pane-second`])},[x(e.$slots,"second")],2)])),_:3},8,["class"])}]]);const X=Object.assign(T,{install:(e,t)=>{$(e,t);const i=C(t);e.component(i+T.name,T)}});const Y=i({name:"SplitDemo",setup:()=>({})}),k={class:"container"},B=S("div",{style:{"background-color":"#f38181",width:"100%",height:"100%"}},"Right",-1),E=S("div",{style:{"background-color":"#fce38a",width:"100%",height:"100%"}},"Top",-1),F=S("div",{style:{"background-color":"#95e1d3",width:"100%",height:"100%"}},"Bottom ",-1);var O=t(Y,[["render",function(e,t,i,s,n,a){const r=X;return z(),R("div",k,[j(r,{style:y({height:"500px",border:"1px solid var(--color-border)"})},{first:m((()=>[B])),second:m((()=>[S("div",null,[j(r,{direction:"vertical",style:{height:"495px"}},{first:m((()=>[E])),second:m((()=>[F])),_:1})])])),_:1},8,["style"])])}]]);export{O as default};
