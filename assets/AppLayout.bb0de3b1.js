import{_ as u,a as n,u as d,t as l}from"./index.cf167ba9.js";import{a1 as _,R as v,G as t,x as y,K as b,M as e,H as a}from"./@vue.ff41095b.js";import"./pinia.8245b70d.js";import"./vue-gtag.ca39f9ea.js";import"./vuestic-ui.8fbf3162.js";import"./colortranslator.1acd5564.js";import"./cleave.js.09ba90ad.js";import"./tslib.6d8141ce.js";import"./asva-executors.b6e509c3.js";import"./@popperjs.031b8b1a.js";import"./vue-router.f31f395a.js";import"./axios.70cb0bcf.js";import"./lodash.2dcc3f5e.js";const f={name:"app-layout",components:{navbar:_(()=>n(()=>import("./Navbar.c62c0f8d.js"),["assets/Navbar.c62c0f8d.js","assets/Navbar.9c018297.css","assets/lodash.2dcc3f5e.js","assets/axios.70cb0bcf.js","assets/index.cf167ba9.js","assets/@vue.ff41095b.js","assets/pinia.8245b70d.js","assets/vue-gtag.ca39f9ea.js","assets/vuestic-ui.8fbf3162.js","assets/vuestic-ui.83b0d8b0.css","assets/colortranslator.1acd5564.js","assets/cleave.js.09ba90ad.js","assets/tslib.6d8141ce.js","assets/asva-executors.b6e509c3.js","assets/@popperjs.031b8b1a.js","assets/vue-router.f31f395a.js"])),breadcrumbs:_(()=>n(()=>import("./Breadcrumbs.f24db7af.js"),["assets/Breadcrumbs.f24db7af.js","assets/Breadcrumbs.e9d773eb.css","assets/index.cf167ba9.js","assets/@vue.ff41095b.js","assets/pinia.8245b70d.js","assets/vue-gtag.ca39f9ea.js","assets/vuestic-ui.8fbf3162.js","assets/vuestic-ui.83b0d8b0.css","assets/colortranslator.1acd5564.js","assets/cleave.js.09ba90ad.js","assets/tslib.6d8141ce.js","assets/asva-executors.b6e509c3.js","assets/@popperjs.031b8b1a.js","assets/vue-router.f31f395a.js","assets/axios.70cb0bcf.js","assets/lodash.2dcc3f5e.js"]))},setup(){const o=d();return o.$subscribe((p,r)=>l("main",r)),v(()=>{o.loadCompany(),o.loadUser()}),{store:o}}},x={class:"app-layout"},h={class:"app-layout__content"},A={class:"app-layout__page"},E={class:"layout fluid gutter--xl pa-2"};function L(o,p,r,s,V,g){const c=t("navbar"),i=t("breadcrumbs"),m=t("router-view");return y(),b("div",x,[e(c,{company:s.store.company,user:s.store.user},null,8,["company","user"]),a("div",h,[a("div",A,[e(i),a("div",E,[e(m)])])])])}var T=u(f,[["render",L]]);export{T as default};
