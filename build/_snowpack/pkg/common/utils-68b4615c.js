import './config-b3bf08ce.js';
import { j as o, P as r, J as t, br as n } from './Identifiable-c8406192.js';
import { a as c, x as x$1, l } from './symbols-a702d148.js';
import { l as l$1 } from './vec3f64-a6795633.js';
import { e } from './ItemCache-717f7581.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
new e(1e3);new o([128,128,128]);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const p=new o("white");function k(e,t){if(null==t)return e;const r=e.toRgba();return r[3]=r[3]*t,new o(r)}function L(e,r$1,o){const i=e.symbolLayers;if(!i)return;const l$1=e=>{const n=r(e)?e:null;return k(r$1=r$1||n||null!=o&&p,o)};i.forEach((e=>{if("object"!==e.type||null==e.resource.href||r$1)if("water"===e.type)e.color=l$1(e.color);else {const r$1=r(e.material)?e.material.color:null,i=l$1(r$1);t(e.material)?e.material=new l({color:i}):e.material.color=i,null!=o&&"outline"in e&&r(e.outline)&&r(e.outline.color)&&(e.outline.color=k(e.outline.color,o));}}));}function z(e,t,r){(t=t||e.color)&&(e.color=k(t,r)),null!=r&&"outline"in e&&e.outline&&e.outline.color&&(e.outline.color=k(e.outline.color,r));}function v(e,t,r){e&&(t||null!=r)&&(t&&(t=new o(t)),c(e)?L(e,t,r):x$1(e)&&z(e,t,r));}async function x(e,t){const r=e.symbolLayers;r&&await n(r,(async e=>S(e,t)));}async function S(e,t){switch(e.type){case"extrude":O(e,t);break;case"icon":case"line":case"text":U(e,t);break;case"path":$(e,t);break;case"object":await R(e,t);}}function U(e,r$1){const o=E(r$1);r(o)&&(e.size=o);}function E(e){for(const t of e)if("number"==typeof t)return t;return null}function O(e,t){e.size="number"==typeof t[2]?t[2]:0;}async function R(e,t){const{resourceSize:r,symbolSize:o}=await C(e),n=A(t,r,o);e.width=D(t[0],o[0],r[0],n),e.depth=D(t[1],o[1],r[1],n),e.height=D(t[2],o[2],r[2],n);}function $(e,t){const r=A(t,l$1,[e.width,void 0,e.height]);e.width=D(t[0],e.width,1,r),e.height=D(t[2],e.height,1,r);}function A(e,t,r){for(let o=0;o<3;o++){const n=e[o];switch(n){case"symbol-value":return null!=r[o]?r[o]/t[o]:1;case"proportional":break;default:if(n&&t[o])return n/t[o]}}return 1}async function C(e){const t=await import('./symbolLayerUtils-458461e3.js'),r=await t.computeObjectLayerResourceSize(e,10),{width:o,height:n,depth:i}=e,l=[o,i,n];let s=1;for(let c=0;c<3;c++)if(null!=l[c]){s=l[c]/r[c];break}for(let c=0;c<3;c++)null==l[c]&&(l[c]=r[c]*s);return {resourceSize:r,symbolSize:l}}function D(e,t,r,o){switch(e){case"proportional":return r*o;case"symbol-value":return null!=t?t:r;default:return e}}function I(e,t$1){const r=E(t$1);if(!t(r))switch(e.type){case"simple-marker":e.size=r;break;case"picture-marker":{const t=e.width/e.height;t>1?(e.width=r,e.height=r*t):(e.width=r*t,e.height=r);break}case"simple-line":e.width=r;break;case"text":e.font.size=r;}}async function M(e,t){if(e&&t)return c(e)?x(e,t):void(x$1(e)&&I(e,t))}function q(e,t,r){if(e&&null!=t)if(c(e)){const o=e.symbolLayers;o&&o.forEach((e=>{if(e&&"object"===e.type)switch(r){case"tilt":e.tilt=t;break;case"roll":e.roll=t;break;default:e.heading=t;}}));}else x$1(e)&&("simple-marker"!==e.type&&"picture-marker"!==e.type&&"text"!==e.type||(e.angle=t));}

export { M, q, v };
