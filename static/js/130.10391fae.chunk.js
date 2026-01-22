"use strict";(self.webpackChunkimmersive_journey=self.webpackChunkimmersive_journey||[]).push([[130],{1318:function(r,e,t){t.d(e,{ok:function(){return i}});var a=t(5043),s=t(2689);function i(r){let e=(0,a.useRef)(n(r)),t=(0,s.zy)(),i=(0,a.useMemo)(()=>{let r=n(t.search);for(let t of e.current.keys())r.has(t)||e.current.getAll(t).forEach(e=>{r.append(t,e)});return r},[t.search]),o=(0,s.Zp)();return[i,(0,a.useCallback)((r,e)=>{o("?"+n(r),e)},[o])]}function n(r){return void 0===r&&(r=""),new URLSearchParams("string"===typeof r||Array.isArray(r)||r instanceof URLSearchParams?r:Object.keys(r).reduce((e,t)=>{let a=r[t];return e.concat(Array.isArray(a)?a.map(r=>[t,r]):[[t,a]])},[]))}},1637:function(r,e,t){t.d(e,{A:function(){return D}});var a=t(8587),s=t(8168),i=t(5043),n=t(8387),o=t(8610),c=t(3290),l=t(6803),u=t(8206),d=t(4535),h=t(2532),f=t(2372);function m(r){return(0,f.Ay)("MuiCircularProgress",r)}(0,h.A)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var v=t(579);const k=["className","color","disableShrink","size","style","thickness","value","variant"];let y,p,A,S,g=r=>r;const x=44,b=(0,c.i7)(y||(y=g`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),w=(0,c.i7)(p||(p=g`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),C=(0,d.Ay)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,e[t.variant],e[`color${(0,l.A)(t.color)}`]]}})(({ownerState:r,theme:e})=>(0,s.A)({display:"inline-block"},"determinate"===r.variant&&{transition:e.transitions.create("transform")},"inherit"!==r.color&&{color:(e.vars||e).palette[r.color].main}),({ownerState:r})=>"indeterminate"===r.variant&&(0,c.AH)(A||(A=g`
      animation: ${0} 1.4s linear infinite;
    `),b)),P=(0,d.Ay)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),M=(0,d.Ay)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.circle,e[`circle${(0,l.A)(t.variant)}`],t.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>(0,s.A)({stroke:"currentColor"},"determinate"===r.variant&&{transition:e.transitions.create("stroke-dashoffset")},"indeterminate"===r.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>"indeterminate"===r.variant&&!r.disableShrink&&(0,c.AH)(S||(S=g`
      animation: ${0} 1.4s ease-in-out infinite;
    `),w));var D=i.forwardRef(function(r,e){const t=(0,u.b)({props:r,name:"MuiCircularProgress"}),{className:i,color:c="primary",disableShrink:d=!1,size:h=40,style:f,thickness:y=3.6,value:p=0,variant:A="indeterminate"}=t,S=(0,a.A)(t,k),g=(0,s.A)({},t,{color:c,disableShrink:d,size:h,thickness:y,value:p,variant:A}),b=(r=>{const{classes:e,variant:t,color:a,disableShrink:s}=r,i={root:["root",t,`color${(0,l.A)(a)}`],svg:["svg"],circle:["circle",`circle${(0,l.A)(t)}`,s&&"circleDisableShrink"]};return(0,o.A)(i,m,e)})(g),w={},D={},R={};if("determinate"===A){const r=2*Math.PI*((x-y)/2);w.strokeDasharray=r.toFixed(3),R["aria-valuenow"]=Math.round(p),w.strokeDashoffset=`${((100-p)/100*r).toFixed(3)}px`,D.transform="rotate(-90deg)"}return(0,v.jsx)(C,(0,s.A)({className:(0,n.A)(b.root,i),style:(0,s.A)({width:h,height:h},D,f),ownerState:g,ref:e,role:"progressbar"},R,S,{children:(0,v.jsx)(P,{className:b.svg,ownerState:g,viewBox:"22 22 44 44",children:(0,v.jsx)(M,{className:b.circle,style:w,ownerState:g,cx:x,cy:x,r:(x-y)/2,fill:"none",strokeWidth:y})})}))})}}]);
//# sourceMappingURL=130.10391fae.chunk.js.map