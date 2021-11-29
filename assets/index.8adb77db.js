var ce=Object.defineProperty,le=Object.defineProperties;var _e=Object.getOwnPropertyDescriptors;var X=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var Y=(e,t,n)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,P=(e,t)=>{for(var n in t||(t={}))pe.call(t,n)&&Y(e,n,t[n]);if(X)for(var n of X(t))de.call(t,n)&&Y(e,n,t[n]);return e},k=(e,t)=>le(e,_e(t));import{_ as T,s as W,P as J,a as me}from"./index.d4c4c153.js";import{a3 as C,aF as a,ax as p,Q as m,b0 as i,a1 as d,aA as fe,ay as he,a0 as E,W as y,V as A,D as B,U as V,aD as S,I as R,C as x,r as N,k as D,am as ge,v as G,aH as z,aX as ye}from"./@vue.2024b520.js";import{u as Z}from"./vue-i18n.ef7124cf.js";import{a as M}from"./axios.7aed06b8.js";import{l as Q}from"./qs.43937605.js";import{c as ve,g as Ee,i as ee}from"./lodash-es.15514399.js";import{b as be,c as Be,d as Ie}from"./@arco-design.b05ae4e0.js";import{u as Te,o as Ce,b as $e}from"./vue-router.16fefd61.js";import"./vuex.0301cfac.js";import"./mockjs.9e2e7544.js";import"./vite-plugin-mock.9ba12ae1.js";import"./path-to-regexp.3eda823b.js";import"./resize-observer-polyfill.8deb1e21.js";import"./number-precision.08b8c2db.js";import"./dayjs.817f9a76.js";import"./b-tween.87ffe365.js";import"./b-validate.1d278ec9.js";import"./lodash.isequal.878bd568.js";import"./scroll-into-view-if-needed.90f76059.js";import"./compute-scroll-into-view.b7c2d4bc.js";import"./@intlify.2ae32138.js";import"./source-map.8e70e1f9.js";import"./vue.aa2161e7.js";import"./side-channel.53524602.js";import"./get-intrinsic.1675b33e.js";import"./has-symbols.caae0f97.js";import"./function-bind.cb3858f2.js";import"./has.c1051c46.js";import"./call-bind.0b5a4f26.js";import"./object-inspect.d3557b5c.js";const Ae="_layout_6ma0z_1",Fe="_layoutNavbar_6ma0z_5",Oe="_layoutSider_6ma0z_14",Le="_collapseBtn_6ma0z_35",Pe="_menuWrapper_6ma0z_52",De="_layoutContent_6ma0z_56",ke="_spin_6ma0z_63";var Se={layout:Ae,layoutNavbar:Fe,layoutSider:Oe,collapseBtn:Le,menuWrapper:Pe,layoutContent:De,spin:ke};const Re={headerSetting:{headerHeight:"60px"}};var Me="/arco-design-pro-vue/assets/logo.f6830a7d.svg";const je=C({name:"Logo",setup(){return{collapsed:!1}}}),we=e=>(fe("data-v-563900b5"),e=e(),he(),e),Ue=we(()=>y("img",{src:Me,alt:""},null,-1)),Ve=E("Arco Design Pro");function xe(e,t,n,o,r,_){const u=a("a-typography-title"),s=a("a-space");return p(),m(s,{size:8,class:"logo"},{default:i(()=>[Ue,d(u,{class:"title",heading:5},{default:i(()=>[Ve]),_:1})]),_:1})}var Ne=T(je,[["render",xe],["__scopeId","data-v-563900b5"]]);const Ge=Object.prototype.toString;function H(e,t){return Ge.call(e)===`[object ${t}]`}function F(e){return H(e,"Function")}const ze=e=>e!==null&&H(e,"Object");function j(e){return H(e,"String")}let O=new Map;const te=e=>[e.method,e.url,Q.stringify(e.data),Q.stringify(e.params)].join("&");class He{addPending(t){this.removePending(t);const n=te(t);t.cancelToken=t.cancelToken||new M.CancelToken(o=>{O.has(n)||O.set(n,o)})}removeAllPending(){O.forEach(t=>{t&&F(t)&&t()}),O.clear()}removePending(t){const n=te(t);if(O.has(n)){const o=O.get(n);o&&o(n),O.delete(n)}}reset(){O=new Map}}class qe{constructor(t){this.options=t,this.axiosInstance=M.create(t),this.setupInterceptors()}createAxios(t){this.axiosInstance=M.create(t)}getTransform(){const{transform:t}=this.options;return t}getAxios(){return this.axiosInstance}configAxios(t){!this.axiosInstance||this.createAxios(t)}setHeader(t){!this.axiosInstance||Object.assign(this.axiosInstance.defaults.headers,t)}setupInterceptors(){const t=this.getTransform();if(!t)return;const{requestInterceptors:n,requestInterceptorsCatch:o,responseInterceptors:r,responseInterceptorsCatch:_}=t,u=new He;this.axiosInstance.interceptors.request.use(s=>{const{headers:{ignoreCancelToken:l}={ignoreCancelToken:!1}}=s;return!l&&u.addPending(s),n&&F(n)&&(s=n(s)),s},void 0),o&&F(o)&&this.axiosInstance.interceptors.request.use(void 0,o),this.axiosInstance.interceptors.response.use(s=>(s&&u.removePending(s.config),r&&F(r)&&(s=r(s)),s),void 0),_&&F(_)&&this.axiosInstance.interceptors.response.use(void 0,_)}request(t,n){let o=ve(t);const r=this.getTransform(),{requestOptions:_}=this.options,u=Object.assign({},_,n),{beforeRequestHook:s,requestCatch:l,transformRequestData:c}=r||{};return s&&F(s)&&(o=s(o,u)),new Promise((h,v)=>{this.axiosInstance.request(o).then(g=>{const b=M.isCancel(g);if(c&&F(c)&&!b){const I=c(g,u);return h(I)}v(g)}).catch(g=>{if(l&&F(l)){v(l(g));return}v(g)})})}}const Ke=e=>`__PRODUCTION__${e.VITE_GLOB_APP_SHORT_NAME||"__APP"}__CONF__`.toUpperCase().replace(/\s/g,""),Xe="ArcoDesignProVue";function ne(e){console.warn(`[${Xe} warn]:${e}`)}function Ye(){const e=Ke({VITE_USE_MOCK:"true",VITE_PUBLIC_PATH:"/",VITE_BASE_URL:"/",VITE_DROP_CONSOLE:"true",VITE_GLOB_API_URL:"",VITE_GLOB_UPLOAD_URL:"",VITE_GLOB_IMG_URL:"",VITE_GLOB_API_URL_PREFIX:"/api",VITE_BUILD_COMPRESS:"none",VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE:"false",VITE_GLOB_PROD_MOCK:"true",VITE_GLOB_APP_TITLE:"ArcoDesignProVue",VITE_GLOB_APP_SHORT_NAME:"ArcoDesignProVue",VITE_PORT:"8001",VITE_APP_TITLE:"ArcoDesignProVue",BASE_URL:"/arco-design-pro-vue/",MODE:"production",DEV:!1,PROD:!0});console.log(!1,e);const t=window[e];console.log(t);const{VITE_GLOB_APP_TITLE:n,VITE_GLOB_API_URL:o,VITE_GLOB_APP_SHORT_NAME:r,VITE_GLOB_API_URL_PREFIX:_,VITE_GLOB_UPLOAD_URL:u,VITE_GLOB_PROD_MOCK:s,VITE_GLOB_IMG_URL:l}=t;return/^[a-zA-Z\_]*$/.test(r)||ne("VITE_GLOB_APP_SHORT_NAME Variables can only be characters/underscores, please modify in the environment variables and re-running."),{VITE_GLOB_APP_TITLE:n,VITE_GLOB_API_URL:o,VITE_GLOB_APP_SHORT_NAME:r,VITE_GLOB_API_URL_PREFIX:_,VITE_GLOB_UPLOAD_URL:u,VITE_GLOB_PROD_MOCK:s,VITE_GLOB_IMG_URL:l}}const We=()=>{const{VITE_GLOB_APP_TITLE:e,VITE_GLOB_API_URL:t,VITE_GLOB_APP_SHORT_NAME:n,VITE_GLOB_API_URL_PREFIX:o,VITE_GLOB_UPLOAD_URL:r,VITE_GLOB_PROD_MOCK:_,VITE_GLOB_IMG_URL:u}=Ye();return/[a-zA-Z\_]*/.test(n)||ne("VITE_GLOB_APP_SHORT_NAME Variables can only be characters/underscores, please modify in the environment variables and re-running."),{title:e,apiUrl:t,shortName:n,urlPrefix:o,uploadUrl:r,prodMock:_,imgUrl:u}};var q;(function(e){e.JSON="application/json;charset=UTF-8",e.TEXT="text/plain;charset=UTF-8",e.FORM_URLENCODED="application/x-www-form-urlencoded;charset=UTF-8",e.FORM_DATA="multipart/form-data;charset=UTF-8"})(q||(q={}));var K;(function(e){e.GET="GET",e.POST="POST",e.PATCH="PATCH",e.PUT="PUT",e.DELETE="DELETE"})(K||(K={}));var w;(function(e){e[e.SUCCESS=0]="SUCCESS",e[e.ERROR=-1]="ERROR",e[e.TIMEOUT=10042]="TIMEOUT",e.TYPE="success"})(w||(w={}));const Je="YYYY-MM-DD HH:mm";function oe(e,t=!1){if(!e)return t?"":{};const n=new Date().getTime();return t?`?_t=${n}`:{_t:n}}function se(e){if(Object.prototype.toString.call(e)==="[object Object]")for(const t in e){if(e[t]&&e[t]._isAMomentObject&&(e[t]=e[t].format(Je)),j(t)){const n=e[t];if(n)try{e[t]=j(n)?n.trim():n}catch(o){throw new Error(o)}}ze(e[t])&&se(e[t])}}function Ze(e,t){let n="",o="";for(const r in t)n+=r+"="+encodeURIComponent(t[r])+"&";return n=n.replace(/&$/,""),/\?$/.test(e)?o=e+n:o=e.replace(/\/?$/,"?")+n,o}function Qe(e,t,n){switch(e){case 400:n.error(`${t}`);break;case 401:n.error("\u7528\u6237\u6CA1\u6709\u6743\u9650\uFF08\u4EE4\u724C\u3001\u7528\u6237\u540D\u3001\u5BC6\u7801\u9519\u8BEF\uFF09!");break;case 403:n.error("\u7528\u6237\u5F97\u5230\u6388\u6743\uFF0C\u4F46\u662F\u8BBF\u95EE\u662F\u88AB\u7981\u6B62\u7684\u3002!");break;case 404:n.error("\u7F51\u7EDC\u8BF7\u6C42\u9519\u8BEF,\u672A\u627E\u5230\u8BE5\u8D44\u6E90!");break;case 405:n.error("\u7F51\u7EDC\u8BF7\u6C42\u9519\u8BEF,\u8BF7\u6C42\u65B9\u6CD5\u672A\u5141\u8BB8!");break;case 408:n.error("\u7F51\u7EDC\u8BF7\u6C42\u8D85\u65F6!");break;case 500:n.error("\u670D\u52A1\u5668\u9519\u8BEF,\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458!");break;case 501:n.error("\u7F51\u7EDC\u672A\u5B9E\u73B0!");break;case 502:n.error("\u7F51\u7EDC\u9519\u8BEF!");break;case 503:n.error("\u670D\u52A1\u4E0D\u53EF\u7528\uFF0C\u670D\u52A1\u5668\u6682\u65F6\u8FC7\u8F7D\u6216\u7EF4\u62A4!");break;case 504:n.error("\u7F51\u7EDC\u8D85\u65F6!");break;case 505:n.error("http\u7248\u672C\u4E0D\u652F\u6301\u8BE5\u8BF7\u6C42!");break;default:n.error(t)}}const ae=We(),re=ae.urlPrefix||"",et={transformRequestData:(e,t)=>{const{$message:n,$dialog:o}=window,{isShowMessage:r=!0,isShowErrorMessage:_,isShowSuccessMessage:u,successMessageText:s,errorMessageText:l,isTransformResponse:c,isReturnNativeResponse:h}=t;if(h)return e;if(!c)return e.data;const v=Promise.reject,g=e.data;if(!g)return v(g);const{code:b,data:I,message:f}=g,$=g&&Reflect.has(g,"code")&&b===w.SUCCESS;if(r&&($&&(s||u)?n.success(s||f||"\u64CD\u4F5C\u6210\u529F\uFF01"):!$&&(l||_)?n.error(f||l||"\u64CD\u4F5C\u5931\u8D25\uFF01"):!$&&t.errorMessageMode==="modal"&&o.info({title:"\u63D0\u793A",content:f,okText:"\u786E\u5B9A",onOk:()=>{},onCancel:()=>{}})),b===w.SUCCESS)return I;if(b===w.ERROR){if(f)n.error(f),Promise.reject(new Error(f));else{const U="\u64CD\u4F5C\u5931\u8D25,\u7CFB\u7EDF\u5F02\u5E38!";n.error(U),Promise.reject(new Error(U))}return v()}return $?I:v(new Error(f))},beforeRequestHook:(e,t)=>{var c;const{apiUrl:n,joinPrefix:o,joinParamsToUrl:r,formatDate:_,joinTime:u=!0}=t;o&&(e.url=`${re}${e.url}`),n&&j(n)&&(e.url=`${n}${e.url}`);const s=e.params||{},l=e.data||!1;return((c=e.method)==null?void 0:c.toUpperCase())===K.GET?j(s)?(e.url=e.url+s+`${oe(u,!0)}`,e.params=void 0):e.params=Object.assign(s||{},oe(u,!1)):j(s)?(e.url=e.url+s,e.params=void 0):(_&&se(s),Reflect.has(e,"data")&&e.data&&Object.keys(e.data).length?(e.data=l,e.params=s):(e.data=s,e.params=void 0),r&&(e.url=Ze(e.url,Object.assign({},e.params,e.data)))),e},requestInterceptors:e=>{const t="1234";return e.headers&&(e.headers.token=t),e},responseInterceptorsCatch:e=>{const{$message:t,$dialog:n}=window,{response:o,code:r,message:_}=e||{},u=o&&o.data&&o.data.message?o.data.message:"",s=e.toString();try{if(r==="ECONNABORTED"&&_.indexOf("timeout")!==-1){t.error("\u63A5\u53E3\u8BF7\u6C42\u8D85\u65F6,\u8BF7\u5237\u65B0\u9875\u9762\u91CD\u8BD5!");return}if(s&&s.includes("Network Error")){n.info({title:"\u7F51\u7EDC\u5F02\u5E38",content:"\u8BF7\u68C0\u67E5\u60A8\u7684\u7F51\u7EDC\u8FDE\u63A5\u662F\u5426\u6B63\u5E38!",okText:"\u786E\u5B9A",onOk:()=>{},onCancel:()=>{}});return}}catch(c){throw new Error(c)}return M.isCancel(e)?t.warning("\u8BF7\u6C42\u88AB\u53D6\u6D88\uFF01"):Qe(e.response&&e.response.status,u,console),e}},tt=new qe({timeout:10*1e3,prefixUrl:re,headers:{"Content-Type":q.JSON},transform:et,requestOptions:{joinPrefix:!0,isReturnNativeResponse:!1,isTransformResponse:!0,joinParamsToUrl:!1,formatDate:!0,errorMessageMode:"none",apiUrl:ae.apiUrl},withCredentials:!1});function nt(e){return tt.request({url:"/message/list",method:"get",params:e})}const ot=C({name:"MessageList",props:{list:{type:Array,default:null}},setup(){return{}}}),st={style:{cursor:"pointer"}},at=["src"],rt={key:0,style:{"text-align":"center"}};function ut(e,t,n,o,r,_){const u=a("a-avatar"),s=a("icon-github"),l=a("a-typography-text"),c=a("a-space"),h=a("a-list-item-meta"),v=a("a-list-item"),g=a("a-button"),b=a("a-list"),I=a("a-empty");return e.list?(p(),m(b,{key:0,bordered:!1},{footer:i(()=>[e.list.length>0?(p(),A("div",rt,[d(g,{type:"text"},{default:i(()=>[E(B(e.$t("messageBox.allRead")),1)]),_:1})])):V("",!0)]),default:i(()=>[(p(!0),A(R,null,S(e.list,f=>(p(),m(v,{key:f.id,"action-layout":"vertical",style:x([{opacity:f.status?.5:1},{"border-bottom":"1px solid var(--color-fill-3)"}])},{default:i(()=>[y("div",st,[d(h,null,{avatar:i(()=>[f.avatar?(p(),m(u,{key:0,shape:"circle"},{default:i(()=>[y("img",{src:f.avatar},null,8,at)]),_:2},1024)):(p(),m(u,{key:1,style:{"background-color":"rgb(15, 198, 194)"}},{default:i(()=>[d(s)]),_:1}))]),title:i(()=>[d(c,{size:"4"},{default:i(()=>[y("span",null,B(f.title),1),d(l,{type:"secondary"},{default:i(()=>[E(B(f.subTitle),1)]),_:2},1024)]),_:2},1024)]),description:i(()=>[y("div",null,[y("div",null,B(f.content),1),d(l,{type:"secondary"},{default:i(()=>[E(B(f.time),1)]),_:2},1024)])]),_:2},1024)])]),_:2},1032,["style"]))),128))]),_:1})):(p(),m(I,{key:1}))}var it=T(ot,[["render",ut]]);const ct=C({name:"MessageContent",components:{MessageList:it},setup(){const{t:e}=Z(),t=N({messageList:[],groupData:D({}),messageLoading:!0}),n=[{key:"message",title:e("messageBox.tab.title.message"),titleIcon:be},{key:"notice",title:e("messageBox.tab.title.notice"),titleIcon:Be},{key:"approve",title:e("messageBox.tab.title.approve"),titleIcon:Ie,avatar:""}],o=async()=>{t.messageList=await nt({}),t.groupData=Ee(t.messageList,"type"),t.messageLoading=!1},r=_=>(t.groupData[_]||[]).filter(s=>!s.status).length;return ge(()=>{o()}),k(P({},G(t)),{tabList:n,tabListCont:r})}});function lt(e,t,n,o,r,_){const u=a("MessageList"),s=a("a-tab-pane"),l=a("a-tabs"),c=a("a-spin");return p(),m(c,{loading:e.messageLoading,style:{width:"100%"}},{default:i(()=>[d(l,{type:"rounded","default-active-key":"message",destroyOnHide:""},{default:i(()=>[(p(!0),A(R,null,S(e.tabList,h=>(p(),m(s,{key:h.key},{title:i(()=>[(p(),m(z(h.titleIcon))),E(" "+B(h.title)+" "+B(e.tabListCont(h.key)?"("+e.tabListCont(h.key)+")":""),1)]),default:i(()=>[d(u,{list:e.groupData&&e.groupData[h.key],avatar:"123"},null,8,["list"])]),_:2},1024))),128))]),_:1})]),_:1},8,["loading"])}var _t=T(ct,[["render",lt],["__scopeId","data-v-e5809328"]]);const pt=C({name:"MessageBox",components:{MessageContent:_t},setup(){return{}}}),dt={class:"messageBoxTrigger"},mt={class:"messageBox"};function ft(e,t,n,o,r,_){const u=a("icon-notification"),s=a("a-badge"),l=a("message-content"),c=a("a-dropdown");return p(),m(c,{trigger:"click",position:"br"},{content:i(()=>[y("div",mt,[d(l)])]),default:i(()=>[y("div",dt,[d(s,{count:9,dot:""},{default:i(()=>[d(u)]),_:1})])]),_:1})}var ht=T(pt,[["render",ft],["__scopeId","data-v-5989a3ec"]]);const gt=C({name:"NavBar",components:{Logo:Ne,MessageBox:ht},setup(){const e=N({options:[{label:"\u4E2D\u6587",value:"zh-CN"},{label:"English",value:"en-US"}],language:localStorage.getItem("arco-lang"),theme:W.get("theme"),docs:"https://arco.design/vue/docs/start"}),{locale:t}=Z(),n=r=>{r&&(t.value=r,localStorage.setItem("arco-lang",r))},o=r=>{r==="dark"?document.body.setAttribute("arco-theme","dark"):document.body.removeAttribute("arco-theme"),W.set("theme",r),e.theme=r};return k(P({},G(e)),{changeTheme:o,setLang:n})}}),yt={class:"navbar"},vt={class:"left"},Et={class:"right"},bt=["href"],Bt=E("Arco"),It=E(" \u738B\u7ACB\u7FA4 "),Tt=E("\u767B\u51FA");function Ct(e,t,n,o,r,_){const u=a("Logo"),s=a("MessageBox"),l=a("a-option"),c=a("a-select"),h=a("icon-moon-fill"),v=a("icon-sun-fill"),g=a("a-button"),b=a("a-tooltip"),I=a("a-avatar"),f=a("a-typography-text"),$=a("a-doption"),U=a("a-dropdown");return p(),A("div",yt,[y("div",vt,[d(u)]),y("ul",Et,[y("li",null,[d(s)]),y("li",null,[y("a",{target:"_blank",href:e.docs},B(e.$t("navbar.docs")),9,bt)]),y("li",null,[d(c,{modelValue:e.language,"onUpdate:modelValue":t[0]||(t[0]=L=>e.language=L),onChange:t[1]||(t[1]=L=>e.setLang(e.language))},{default:i(()=>[(p(!0),A(R,null,S(e.options,L=>(p(),m(l,{key:L.value,value:L.value},{default:i(()=>[E(B(L.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),y("li",null,[d(b,{content:e.theme==="light"?"\u70B9\u51FB\u5207\u6362\u4E3A\u6697\u9ED1\u6A21\u5F0F"+e.theme:"\u70B9\u51FB\u5207\u6362\u4E3A\u4EAE\u8272\u6A21\u5F0F"+e.theme},{default:i(()=>[d(g,{onClick:t[2]||(t[2]=L=>e.changeTheme(e.theme==="light"?"dark":"light")),class:"p-0 w-8 h-8",type:"text",style:{"font-size":"20px"}},{default:i(()=>[e.theme==="light"?(p(),m(h,{key:0})):(p(),m(v,{key:1}))]),_:1})]),_:1},8,["content"])]),y("li",null,[d(I,{class:"mr-2",size:24,style:{backgroundColor:"#14a9f8",marginRight:8}},{default:i(()=>[Bt]),_:1}),d(U,null,{content:i(()=>[d($,null,{default:i(()=>[Tt]),_:1})]),default:i(()=>[d(f,null,{default:i(()=>[It]),_:1})]),_:1})])])])}var $t=T(gt,[["render",Ct],["__scopeId","data-v-6126fe5b"]]);function At(e){var t,n;return((t=e.meta)==null?void 0:t.alwaysShow)!=!0&&((n=e.children)==null?void 0:n.length)===1}function Ft(e){return e.filter(t=>{var n;return(((n=t.meta)==null?void 0:n.hidden)||!1)!=!0&&!["/:path(.*)*","/",J.REDIRECT,J.BASE_LOGIN].includes(t.path)})}function ue(e){return Ft(e).map(t=>{var _,u,s;const n=At(t);let o=t;n&&(t.children[0].path=t.path+"/"+t.children[0].path,o=t.children[0]);const r=k(P(P({},o),o.meta),{label:(_=o.meta)==null?void 0:_.title,key:o.name,icon:n?(u=t.meta)==null?void 0:u.icon:(s=o.meta)==null?void 0:s.icon});return o.children&&o.children.length>0&&(r.children=ue(o.children)),r})}function ie(e){return/^(https?:|mailto:|tel:)/.test(e)}const Ot=C({name:"MenuItem",components:{},props:{item:{type:Object,required:!0},basePath:{type:String,default:""}},setup(e){const t=(...o)=>{let r="",_=[...new Set(o)],u=!1,s=!1;for(let l=0;l<_.length;l++){let c=_[l];c==""||c=="/"||(c=c.replace("\\","/"),u=c.charAt(0)=="/",s=c.charAt(c.length-1)=="/",u||(c="/"+c),s&&(c=c.substring(0,c.length-1)),r+=c)}return r};return{isArray:ee,resolvePath:o=>ie(o)?o:ie(e.basePath)?e.basePath:t(e.basePath,o),resolve:t}}}),Lt={key:0};function Pt(e,t,n,o,r,_){const u=a("a-menu-item"),s=a("router-link"),l=a("menu-item",!0),c=a("a-sub-menu");return e.item.hidden?V("",!0):(p(),A("div",Lt,[!e.item.children&&!e.isArray(e.item.children)?(p(),m(s,{key:0,to:e.resolvePath(e.item.path)},{default:i(()=>[d(u,null,{default:i(()=>[(p(),m(z(e.item.meta.icon))),E(" "+B(e.$t("menu."+e.item.name)),1)]),_:1})]),_:1},8,["to"])):(p(),m(c,{key:1},{title:i(()=>[(p(),m(z(e.item.meta.icon))),E(" "+B(e.$t("menu."+e.item.name)),1)]),default:i(()=>[(p(!0),A(R,null,S(e.item.children,h=>(p(),m(l,{item:h,"base-path":e.item.path,key:h},null,8,["item","base-path"]))),128))]),_:1}))]))}var Dt=T(Ot,[["render",Pt]]);const kt=C({name:"Menu",components:{MenuItem:Dt},setup(){const e=ue(me);return console.log(e),{menus:e,isArray:ee}}});function St(e,t,n,o,r,_){const u=a("menu-item"),s=a("a-menu");return p(),m(s,{defaultOpenKeys:["1"],defaultSelectedKeys:["0_2"]},{default:i(()=>[(p(!0),A(R,null,S(e.menus,l=>(p(),m(u,{key:l.name,item:l},null,8,["item"]))),128))]),_:1})}var Rt=T(kt,[["render",St]]);const Mt=C({name:"LoadingBar",setup(){const e=D(),t=N({percent:D(30),hide:D(!0)}),n=()=>{t.hide=!1,t.percent=30,e.value=setInterval(()=>{t.percent<=98&&(t.percent=t.percent>80?t.percent+1:t.percent+10)},1e3)},o=()=>{clearInterval(e.value),t.percent=100,console.log(t.percent),setTimeout(()=>{t.hide=!0},300)};return k(P({},G(t)),{loading:n,success:o})}});function jt(e,t,n,o,r,_){const u=a("a-progress");return e.hide?V("",!0):(p(),m(u,{key:0,percent:e.percent,animation:"","show-text":!1,style:{position:"absolute",height:"2px",top:"-1px","z-index":"9999"},status:e.percent>=98?"success":"normal"},null,8,["percent","status"]))}var wt=T(Mt,[["render",jt]]);const Ut=C({name:"Layout",components:{NavBar:$t,Menu:Rt,LoadingBar:wt},setup:function(){const e=D(null),{headerSetting:t}=Re,n=Te(),o=D(!1),r=()=>{o.value=!o.value};return Ce(()=>{e.value&&e.value.success()}),$e(()=>{e.value&&e.value.success()}),ye(()=>n.path,()=>{e.value&&e.value.loading()}),{styles:Se,headerSetting:t,loading:e,collapsed:o,fold:r}}}),Vt={class:"layoutNavbar"},xt=E("1111");function Nt(e,t,n,o,r,_){const u=a("LoadingBar"),s=a("NavBar"),l=a("icon-caret-right"),c=a("icon-caret-left"),h=a("Menu"),v=a("a-layout-sider"),g=a("router-view"),b=a("a-layout-content"),I=a("a-layout-footer"),f=a("a-layout");return p(),m(f,{class:"layout"},{default:i(()=>[d(u,{ref:"loading"},null,512),y("div",Vt,[d(s)]),d(f,null,{default:i(()=>[d(v,{collapsible:"",collapsed:e.collapsed,onCollapse:e.fold,class:"layoutSider",style:x([{"padding-top":"60px"},{width:e.collapsed?"48px":"220px"}])},{trigger:i(({collapsed:$})=>[$?(p(),m(l,{key:0})):(p(),m(c,{key:1}))]),default:i(()=>[d(h)]),_:1},8,["collapsed","onCollapse","style"]),d(f,{class:"layoutContent",style:x([{"padding-top":"60px"},{paddingLeft:e.collapsed?"48px":"220px"}])},{default:i(()=>[d(b,null,{default:i(()=>[d(g)]),_:1}),d(I,null,{default:i(()=>[xt]),_:1})]),_:1},8,["style"])]),_:1})]),_:1})}var bn=T(Ut,[["render",Nt],["__scopeId","data-v-3fbfc4e8"]]);export{bn as default};
