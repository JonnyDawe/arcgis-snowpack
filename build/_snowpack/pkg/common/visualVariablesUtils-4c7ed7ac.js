import { J as t } from './Identifiable-c8406192.js';
import { o as o$2, t as u$1 } from './symbols-a702d148.js';
import { c as c$1 } from './definitions-681c54ec.js';
import { w, A } from './Utils-0d5f7d82.js';
import { o as o$1 } from './visualVariablesUtils-c37b8ac9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function o(r,n=0,t=!1){const u=r[n+3];return r[n+0]*=u,r[n+1]*=u,r[n+2]*=u,t||(r[n+3]*=255),r}function i(n){if(!n)return 0;const{r:t,g:u,b:o,a:c}=n;return w(t*c,u*c,o*c,255*c)}function f$1(n){if(!n)return 0;const[t,u,o,c]=n;return w(t*(c/255),u*(c/255),o*(c/255),c)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const n=(n,l)=>n&&((...n)=>l.warn("DEBUG:",...n))||(()=>null),l=!1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function r(e,t){if(!e||!t)return e;switch(t){case"radius":case"distance":return 2*e;case"diameter":case"width":return e;case"area":return Math.sqrt(e)}return e}function a(e){return {value:e.value,size:o$2(e.size)}}function u(e){return e.map((e=>a(e)))}function c(e){if("string"==typeof e||"number"==typeof e)return o$2(e);const s=e;return {type:"size",expression:s.expression,stops:u(s.stops)}}const f=e=>{const t=[],o=[],i=u(e),l=i.length;for(let r=0;r<6;r++){const e=i[Math.min(r,l-1)];t.push(e.value),o.push(null==e.size?c$1:u$1(e.size));}return {values:new Float32Array(t),sizes:new Float32Array(o)}};function m(e){const t=e&&e.length>0?{}:null,s=t?{}:null;if(!t)return {vvFields:t,vvRanges:s};for(const n of e)if(n.field&&(t[n.type]=n.field),"size"===n.type){s.size||(s.size={});const e=n;switch(o$1(e)){case A.SIZE_MINMAX_VALUE:s.size.minMaxValue={minDataValue:e.minDataValue,maxDataValue:e.maxDataValue,minSize:c(e.minSize),maxSize:c(e.maxSize)};break;case A.SIZE_SCALE_STOPS:s.size.scaleStops={stops:u(e.stops)};break;case A.SIZE_FIELD_STOPS:if(e.levels){const t={};for(const s in e.levels)t[s]=f(e.levels[s]);s.size.fieldStops={type:"level-dependent",levels:t};}else s.size.fieldStops={type:"static",...f(e.stops)};break;case A.SIZE_UNIT_VALUE:s.size.unitValue={unit:e.valueUnit,valueRepresentation:e.valueRepresentation};}}else if("color"===n.type)s.color=y(n);else if("opacity"===n.type)s.opacity=v(n);else if("rotation"===n.type){const e=n;s.rotation={type:e.rotationType};}return {vvFields:t,vvRanges:s}}function v(e){const t={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if("string"==typeof e.field){if(!e.stops)return null;{if(e.stops.length>8)return null;const s=e.stops;for(let e=0;e<8;++e){const n=s[Math.min(e,s.length-1)];t.values[e]=n.value,t.opacities[e]=n.opacity;}}}else {if(!(e.stops&&e.stops.length>=0))return null;{const s=e.stops&&e.stops.length>=0&&e.stops[0].opacity;for(let e=0;e<8;e++)t.values[e]=1/0,t.opacities[e]=s;}}return t}function g(e,t,s){e[4*t+0]=s.r/255,e[4*t+1]=s.g/255,e[4*t+2]=s.b/255,e[4*t+3]=s.a;}function y(t$1){if(t(t$1))return null;if(t$1.normalizationField)return null;const s={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};if("string"==typeof t$1.field){if(!t$1.stops)return null;{if(t$1.stops.length>8)return null;s.field=t$1.field;const e=t$1.stops;for(let t=0;t<8;++t){const n=e[Math.min(t,e.length-1)];s.values[t]=n.value,g(s.colors,t,n.color);}}}else {if(!(t$1.stops&&t$1.stops.length>=0))return null;{const e=t$1.stops&&t$1.stops.length>=0&&t$1.stops[0].color;for(let t=0;t<8;t++)s.values[t]=1/0,g(s.colors,t,e);}}for(let e=0;e<32;e+=4)o(s.colors,e,!0);return s}

export { f$1 as f, i, l, m, n, r };
