import{u as V,b as w}from"./vue-router.f31f395a.js";import{u as S,a as T}from"./utils.5c84b0e6.js";import{_ as y,u as z}from"./index.cf167ba9.js";import{j as r,r as B,R as H,G as d,x as f,K as b,H as n,C as u,M as l,U as k,V as N,z as C,B as m}from"./@vue.ff41095b.js";import"./pinia.8245b70d.js";import"./stores.c5b1d3c0.js";import"./useMetaData.fed50f3d.js";import"./@vueuse.450f3a45.js";import"./vue-gtag.ca39f9ea.js";import"./vuestic-ui.8fbf3162.js";import"./colortranslator.1acd5564.js";import"./cleave.js.09ba90ad.js";import"./tslib.6d8141ce.js";import"./asva-executors.b6e509c3.js";import"./@popperjs.031b8b1a.js";import"./axios.70cb0bcf.js";import"./lodash.2dcc3f5e.js";const j=[{label:"0:30",value:1800},{label:"1:00",value:3600},{label:"1:30",value:5400},{label:"2:00",value:7200},{label:"3:00",value:3*3600},{label:"4:00",value:4*3600},{label:"5:00",value:5*3600},{label:"6:00",value:6*3600},{label:"7:00",value:7*3600},{label:"8:00",value:8*3600},{label:"9:00",value:9*3600},{label:"10:00",value:10*3600},{label:"12:00",value:12*3600},{label:"15:00",value:15*3600},{label:"20:00",value:20*3600},{label:"24:00",value:24*3600}];const A={name:"AddTime",setup(){const s=S(),o=z(),x=V(),e=w(),h=r(()=>s.loading.item),i=r(()=>s.item),c=r(()=>o.user.id),a=B({date:new Date,duration:1800,note:"",user_id:c.value}),v=r(()=>Math.floor(a.value.duration/3600)),_=r(()=>Math.floor(a.value.duration%3600/60)),t=p=>{a.value.duration+=p*3600},g=p=>{a.value.duration+=p*60},M=()=>{T(o,i.value)};return H(()=>{s.fetchItem(e.params.id).then(()=>M())}),{form:a,loading:h,item:i,spentTimes:j,onSave:()=>{s.addTime(i.value.id,a.value),x.push({name:"project.show",params:{id:i.value.fk_project}})},hours:v,minutes:_,changeHours:t,changeMinutes:g}}},D=n("h5",{class:"display-5"},"Add time to task",-1),R={class:"title mt-3"},U={class:"row"},I={class:"row pa-3"},E={class:"flex xs5 text--end"},F={class:"hm-label title pa-2"},G=m(" h. "),K={class:"flex xs2"},L={class:"flex xs5 text--start"},q={class:"hm-label title pa-2"},J=m(" m. "),O=m(" Save ");function P(s,o,x,e,h,i){const c=d("va-date-input"),a=d("va-button"),v=d("va-divider"),_=d("va-input");return f(),b(k,null,[D,n("div",R,u(e.item.label),1),l(c,{class:"mt-3",label:"date",modelValue:e.form.date,"onUpdate:modelValue":o[0]||(o[0]=t=>e.form.date=t),outline:""},null,8,["modelValue"]),n("div",U,[(f(!0),b(k,null,N(e.spentTimes,t=>(f(),b("div",{class:"flex xs3 sm2 md2 lg1 xl1",key:t.value},[l(a,{size:"small",rounded:!1,outline:t.value!==e.form.duration,class:"mr-4",onClick:g=>e.form.duration=t.value},{default:C(()=>[m(u(t.label),1)]),_:2},1032,["outline","onClick"])]))),128))]),n("div",I,[n("div",E,[l(a,{color:"warning",outline:"",size:"small",icon:"remove",onClick:o[1]||(o[1]=t=>e.changeHours(-1))}),n("span",F,u(e.hours),1),G,l(a,{color:"warning",outline:"",size:"small",icon:"add",onClick:o[2]||(o[2]=t=>e.changeHours(1))})]),n("div",K,[l(v,{vertical:""})]),n("div",L,[l(a,{color:"warning",outline:"",size:"small",icon:"remove",onClick:o[3]||(o[3]=t=>e.changeMinutes(-1))}),n("span",q,u(e.minutes),1),J,l(a,{color:"warning",outline:"",size:"small",icon:"add",onClick:o[4]||(o[4]=t=>e.changeMinutes(1))})])]),l(_,{outline:"",class:"mb-4",modelValue:e.form.note,"onUpdate:modelValue":o[5]||(o[5]=t=>e.form.note=t),type:"textarea",label:"Note"},null,8,["modelValue"]),l(a,{block:"",onClick:e.onSave},{default:C(()=>[O]),_:1},8,["onClick"])],64)}var ce=y(A,[["render",P]]);export{ce as default};
