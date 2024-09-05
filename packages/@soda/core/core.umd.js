(function(s,i){arguments[0]["sodaCore"] = {"version":"1.0.0"}; typeof exports=="object"&&typeof module<"u"?i(exports,require("react"),require("mobx"),require("mobx-react"),require("axios"),require("@soda/designer")):typeof define=="function"&&define.amd?define(["exports","react","mobx","mobx-react","axios","@soda/designer"],i):(s=typeof globalThis<"u"?globalThis:s||self,i(s.sodaCore=s.sodaCore||{},s.window.React,s.window.mobx,s.window.mobxReact,s.axios,s.window.sodaDesigner))})(this,function(s,i,d,P,_,R){"use strict";var z=Object.defineProperty;var Q=(s,i,d)=>i in s?z(s,i,{enumerable:!0,configurable:!0,writable:!0,value:d}):s[i]=d;var p=(s,i,d)=>Q(s,typeof i!="symbol"?i+"":i,d);var v={exports:{}},h={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=i,$=Symbol.for("react.element"),S=Symbol.for("react.fragment"),N=Object.prototype.hasOwnProperty,U=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,q={key:!0,ref:!0,__self:!0,__source:!0};function w(r,e,t){var n,o={},c=null,a=null;t!==void 0&&(c=""+t),e.key!==void 0&&(c=""+e.key),e.ref!==void 0&&(a=e.ref);for(n in e)N.call(e,n)&&!q.hasOwnProperty(n)&&(o[n]=e[n]);if(r&&r.defaultProps)for(n in e=r.defaultProps,e)o[n]===void 0&&(o[n]=e[n]);return{$$typeof:$,type:r,key:c,ref:a,props:o,_owner:U.current}}h.Fragment=S,h.jsx=w,h.jsxs=w,v.exports=h;var l=v.exports;function g(r){return P.observer.call(r,r),class extends r{constructor(e){super(e),d.makeObservable(this)}}}var O=Object.defineProperty,D=Object.getOwnPropertyDescriptor,M=(r,e,t)=>e in r?O(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,j=(r,e,t,n)=>{for(var o=n>1?void 0:n?D(e,t):e,c=r.length-1,a;c>=0;c--)(a=r[c])&&(o=(n?a(e,t,o):a(o))||o);return n&&o&&O(e,t,o),o},B=(r,e,t)=>M(r,e+"",t);class m extends i.Component{constructor(){super(...arguments);p(this,"state",{})}setState(){throw new Error("setState is not allowed")}componentDidCatch(t,n){console.log(t,n)}}s.BaseComponent=class extends m{constructor(){super(...arguments);p(this,"lock")}get __mode(){return this.props.__mode}render(){throw new Error("没有实现 render 方法")}},B(s.BaseComponent,"__sodaComponent",!0),j([d.observable],s.BaseComponent.prototype,"lock",2),s.BaseComponent=j([g],s.BaseComponent);class f extends s.BaseComponent{get canDesign(){return this.props.mode==="DESIGN"}render(){const{placeholder:e="拖拽组件到此",className:t="",style:n}=this.props,{children:o}=this.props;return this.canDesign?l.jsx("div",{style:n,className:`${t}`,children:Array.isArray(o)&&o.length>0?o:l.jsx("div",{className:"default-page-containerEmpty",children:l.jsx("div",{className:"default-page-containerPlaceholder",children:e})})}):l.jsx(l.Fragment,{children:o})}}p(f,"__isContainer__",!0);class L{render(){throw new Error("Method not implemented.")}}async function A(r){return r.status===200?r.data.code===200?r.data.data:r.data:r}class F{constructor(e="",t=A,n=!0){this.baseUrl=e,this.responseHandler=t,this.useProxy=n}async request(e,t){t.headers||(t.headers={}),t.headers["origin-url"]=e;const n=this.useProxy?await _("/soda-app",t):await _(e,t);return this.responseHandler(n)}get(e,t={},n={}){return this.request(`${this.baseUrl}${e}`,{method:"GET",...n,params:t})}delete(e,t={},n={}){return this.request(`${this.baseUrl}${e}`,{method:"DELETE",...n,data:t})}post(e,t={},n={}){return this.request(`${this.baseUrl}${e}`,{method:"POST",...n,data:t})}put(e,t={},n={}){return this.request(`${this.baseUrl}${e}`,{method:"PUT",...n,data:t})}upload(e,t={},n={}){const o={"Content-Type":"multipart/form-data"};return this.request(`${this.baseUrl}${e}`,{method:"POST",...n,data:t,headers:o})}}function W(r,{responseHandler:e,useProxy:t}={}){return new F(r,e,t)}const H=_;function G(r){const e=r.match(/^@([^/]+)/);let t="";e&&(t=e[1].toLowerCase(),r=r[t.length+2].toUpperCase()+r.slice(t.length+3));const n=r.split(/-/).map((o,c)=>c===0&&t.length===0?o.toLowerCase():o.charAt(0).toUpperCase()+o.slice(1).toLowerCase()).join("");return t?`${t}${n}`:n}function I(r){return(r==null?void 0:r.length)>0?r.split(".")[0]:"1"}class T extends f{render(){const{children:e}=this.props;return l.jsx("div",{className:"default-page",style:{width:"100%",height:"100%"},children:e})}}class k extends m{constructor(){super(...arguments);p(this,"refsMap",{})}get $refs(){return this.refsMap}getComponent(t,n){const o=({package:u,version:C,componentName:b})=>{const y=G(u)+I(C);return n[y][b]},c=this.props.schema.components.find(({componentName:u})=>t===u);let a=c?o(c):null;return a||(t==="Page"?a=T:a=i.forwardRef(()=>l.jsxs("div",{children:[t,"组件不存在"]}))),a.__componentMeta=c,a}schemasToComponent(t,n=this.props.componentMap){return t.map(o=>{const{componentName:c,id:a,children:u,props:C,advanced:{isContainer:b}={isContainer:!1}}=o,y=this.getComponent(c,n),E=Array.isArray(u)?this.schemasToComponent(u,n):null;return l.jsx(y,{id:a,...this.calcProps(C),ref:Y=>this.refsMap[a]=Y,children:b?l.jsx(f,{mode:R.globalState.environment.mode,children:E}):E},a)})}calcProps(t={}){const n={};return Object.keys(t).forEach(o=>{n[o]=t[o]}),n}}class J extends k{render(){const{componentsTree:e}=this.props.schema;return l.jsx(l.Fragment,{children:this.schemasToComponent(e)})}modifyNodeProps(e,t,n){this.$refs&&this.$refs[e]&&this.$refs[e][t]&&(this.$refs[e][t]=n)}}class V extends m{}Object.defineProperty(s,"action",{enumerable:!0,get:()=>d.action}),Object.defineProperty(s,"computed",{enumerable:!0,get:()=>d.computed}),Object.defineProperty(s,"makeObservable",{enumerable:!0,get:()=>d.makeObservable}),Object.defineProperty(s,"reactive",{enumerable:!0,get:()=>d.observable}),Object.defineProperty(s,"Provider",{enumerable:!0,get:()=>P.Provider}),s.Component=m,s.Container=f,s.Page=T,s.ReactRenderer=L,s.TypeEditor=V,s.WebRender=J,s.Widget=g,s.axios=H,s.createRequest=W,Object.defineProperty(s,Symbol.toStringTag,{value:"Module"})});
