import { n, K as L, O as S, H as m$1, s as s$1 } from './Identifiable-c8406192.js';
import { s, X, T } from './fieldUtils-a9f71c96.js';
import { e } from './FieldsIndex-d0d5f38b.js';
import { x, _ } from './labelUtils-5176895f.js';
import './config-b3bf08ce.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const c=n.getLogger("esri.layers.support.labelFormatUtils"),f={type:"simple",evaluate:()=>null},m={getAttribute:(e,t)=>e.field(t)};async function d(e$1,a,o){if(!e$1||!e$1.symbol)return f;const i=e$1.where,l=x(e$1),d=i?await import('./WhereClause-c9442cc5.js'):null;let g;if("arcade"===l.type){const e=await s(l.expression,o,a);g={type:"arcade",evaluate(r){try{const t=e.evaluate({$feature:"attributes"in r?e.repurposeFeature(r):e.repurposeAdapter(r)});if(null!=t)return t.toString()}catch(a){c.error(new s$1("bad-arcade-expression","Encountered an error when evaluating label expression for feature",{feature:r,expression:l}));}return null},needsHydrationToEvaluate:()=>null==_(l.expression)};}else g={type:"simple",evaluate:e=>l.expression.replace(/{[^}]*}/g,(t=>{const r=t.slice(1,-1),o=T(a,r);if(!o)return t;let i=null;if("attributes"in e){e&&e.attributes&&(i=e.attributes[o.name]);}else i=e.field(o.name);return null==i?"":y(i,o)}))};if(i){let e$1;try{e$1=d.WhereClause.create(i,new e(a));}catch(b){return f}const t=g.evaluate;g.evaluate=r=>{const a="attributes"in r?void 0:m;return e$1.testFeature(r,a)?t(r):null};}return g}function y(e,t){if(null==e)return "";const r=t.domain;if(r)if("codedValue"===r.type||"coded-value"===r.type){const t=e;for(const e of r.codedValues)if(e.code===t)return e.name}else if("range"===r.type){const t=+e,a="range"in r?r.range[0]:r.minValue,n="range"in r?r.range[1]:r.maxValue;if(a<=t&&t<=n)return r.name}let n=e;return "date"===t.type||"esriFieldTypeDate"===t.type?n=L(n,S("short-date")):X(t)&&(n=m$1(+n)),n||""}

export { d as createLabelFunction, y as formatField };
