import{u as y,s as b}from"./utils.85103822.js";import{_ as j,u as B}from"./index.cf167ba9.js";import{j as d,R as k,G as t,x as r,y as M,z as a,H as c,K as l,V as S,M as o,C as p,B as m,U as V}from"./@vue.ff41095b.js";import"./pinia.8245b70d.js";import"./stores.c5b1d3c0.js";import"./useMetaData.fed50f3d.js";import"./@vueuse.450f3a45.js";import"./vue-gtag.ca39f9ea.js";import"./vuestic-ui.8fbf3162.js";import"./colortranslator.1acd5564.js";import"./cleave.js.09ba90ad.js";import"./tslib.6d8141ce.js";import"./asva-executors.b6e509c3.js";import"./@popperjs.031b8b1a.js";import"./vue-router.f31f395a.js";import"./axios.70cb0bcf.js";import"./lodash.2dcc3f5e.js";const C={setup(){const e=y(),_=B(),i=d(()=>e.loading.data),s=d(()=>e.data);return k(()=>{b(_),e.fetchData()}),{store:e,data:s,loading:i}}},D={class:"row"},N={class:"row justify--space-between"},L={class:"card-title"},P=m(" Open ");function $(e,_,i,s,z,E){const u=t("va-badge"),v=t("va-card-title"),f=t("va-card-content"),g=t("va-button"),x=t("va-card-actions"),h=t("va-card"),w=t("va-inner-loading");return r(),M(w,{loading:s.loading},{default:a(()=>[c("div",D,[(r(!0),l(V,null,S(s.data,n=>(r(),l("div",{class:"flex xs12 sm6 md6 lg4 xl3",key:n.ref},[o(h,null,{default:a(()=>[o(v,null,{default:a(()=>[c("span",N,[o(u,{text:n.ref,color:"warning",class:"mr-4"},null,8,["text"]),c("span",L,p(n.title),1)])]),_:2},1024),o(f,null,{default:a(()=>[m(p(n.description),1)]),_:2},1024),o(x,{align:"right"},{default:a(()=>[o(g,{to:{name:"project.show",params:{id:n.id}}},{default:a(()=>[P]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024)]))),128))])]),_:1},8,["loading"])}var tt=j(C,[["render",$],["__scopeId","data-v-6a5efa18"]]);export{tt as default};