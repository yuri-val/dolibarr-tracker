import{_ as u,u as l}from"./index.cf167ba9.js";import{j as d,G as c,x as a,K as o,H as b,M as e,z as m,U as v,V as f,B as i,C as x}from"./@vue.ff41095b.js";import"./pinia.8245b70d.js";import"./vue-gtag.ca39f9ea.js";import"./vuestic-ui.8fbf3162.js";import"./colortranslator.1acd5564.js";import"./cleave.js.09ba90ad.js";import"./tslib.6d8141ce.js";import"./asva-executors.b6e509c3.js";import"./@popperjs.031b8b1a.js";import"./vue-router.f31f395a.js";import"./axios.70cb0bcf.js";import"./lodash.2dcc3f5e.js";const B={name:"Breadcrumbs",setup(){const t=l();return{items:d(()=>t.breadcrumbs),mainStore:t}}},h={class:"row pa-2"},k=i("Home");function g(t,p,y,_,V,C){const s=c("va-icon"),n=c("router-link");return a(),o("div",h,[b("span",null,[e(s,{name:"home",class:"breadcrumb-icon pa-1"}),e(n,{class:"title breadcrumb",to:"/"},{default:m(()=>[k]),_:1})]),(a(!0),o(v,null,f(_.items,r=>(a(),o("span",{key:r.label},[e(s,{name:"navigate_next",class:"breadcrumb-icon pa-1"}),e(n,{class:"title breadcrumb",to:r.route},{default:m(()=>[i(x(r.label),1)]),_:2},1032,["to"])]))),128))])}var K=u(B,[["render",g],["__scopeId","data-v-ae6e772e"]]);export{K as default};