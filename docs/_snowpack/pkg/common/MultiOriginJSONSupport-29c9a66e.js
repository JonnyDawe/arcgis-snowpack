import { bA as r$1, b7 as m, e, i, bB as e$1, bC as u$2, bD as n, u as u$3, bE as t, bF as g } from './Identifiable-c8406192.js';
import { y } from './config-b3bf08ce.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class r{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(r$1),this._values=new Map;}clone(s){const i=new r,o=this._originStores[0];o&&o.forEach(((s,e)=>{i.set(e,y(s),0);}));for(let r=2;r<r$1;r++){const e=this._originStores[r];e&&e.forEach(((e,o)=>{s&&s.has(o)||i.set(o,y(e),r);}));}return i}get(t,s){const e=void 0===s?this._values:this._originStores[s];return e?e.get(t):void 0}keys(t){const s=null==t?this._values:this._originStores[t];return s?[...s.keys()]:[]}set(t,e,r=6){let i=this._originStores[r];if(i||(i=new Map,this._originStores[r]=i),i.set(t,e),!this._values.has(t)||m(this._propertyOriginMap.get(t))<=r){const s=this._values.get(t);return this._values.set(t,e),this._propertyOriginMap.set(t,r),s!==e}return !1}delete(t,s=6){const e=this._originStores[s];if(!e)return;const r=e.get(t);if(e.delete(t),this._values.has(t)&&this._propertyOriginMap.get(t)===s){this._values.delete(t);for(let e=s-1;e>=0;e--){const s=this._originStores[e];if(s&&s.has(t)){this._values.set(t,s.get(t)),this._propertyOriginMap.set(t,e);break}}}return r}has(t,s){const e=void 0===s?this._values:this._originStores[s];return !!e&&e.has(t)}revert(t,s){for(;s>0&&!this.has(t,s);)--s;const e=this._originStores[s],r=e&&e.get(t),i=this._values.get(t);return this._values.set(t,r),this._propertyOriginMap.set(t,s),i!==r}originOf(t){return this._propertyOriginMap.get(t)||0}forEach(t){this._values.forEach(t);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const a=n$1=>{let a=class extends n$1{constructor(...r$1){super(...r$1);const s=m(e$1(this)),o=s.metadatas,i=s.store,n=new r;s.store=n,i.keys().forEach((r=>{n.set(r,i.get(r),0);})),Object.keys(o).forEach((r=>{s.internalGet(r)&&n.set(r,s.internalGet(r),0);}));}read(r,t){u$2(this,r,t);}getAtOrigin(r,t$1){const e=u$1(this),s=t(t$1);if("string"==typeof r)return e.get(r,s);const o={};return r.forEach((r=>{o[r]=e.get(r,s);})),o}originOf(r){return n(this.originIdOf(r))}originIdOf(r){return u$1(this).originOf(r)}revert(r,t$1){const s=u$1(this),o=t(t$1),n=e$1(this);let c;c="string"==typeof r?"*"===r?s.keys(o):[r]:r,c.forEach((r=>{n.propertyInvalidated(r),s.revert(r,o),n.propertyCommitted(r);}));}};return a=e([i("esri.core.ReadOnlyMultiOriginJSONSupport")],a),a};function u$1(r){return e$1(r).store}let f=class extends(a(u$3)){};f=e([i("esri.core.ReadOnlyMultiOriginJSONSupport")],f);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const p=i$1=>{let n=class extends i$1{constructor(...r){super(...r);}clear(r,t$1="user"){return u(this).delete(r,t(t$1))}write(r={},t){return g(this,r=r||{},t),r}setAtOrigin(r,s,o){e$1(this).setAtOrigin(r,s,t(o));}removeOrigin(r){const t$1=u(this),s=t(r),o=t$1.keys(s);for(const e of o)t$1.originOf(e)===s&&t$1.set(e,t$1.get(e,s),6);}updateOrigin(r,t$1){const s=u(this),i=t(t$1),c=this.get(r);for(let e=i+1;e<r$1;++e)s.delete(r,e);s.set(r,c,i);}toJSON(r){return this.write({},r)}};return n=e([i("esri.core.WriteableMultiOriginJSONSupport")],n),n.prototype.toJSON.isDefaultToJSON=!0,n};function u(r){return e$1(r).store}const l=t=>{let e$1=class extends(p(a(t))){constructor(...r){super(...r);}};return e$1=e([i("esri.core.MultiOriginJSONSupport")],e$1),e$1};let O=class extends(l(u$3)){};O=e([i("esri.core.MultiOriginJSONSupport")],O);

export { O, l };
