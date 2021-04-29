import { n as n$3 } from './compilerUtils-006be997.js';
import { n, P as r, j as o, J as t } from './Identifiable-c8406192.js';
import { n as n$1 } from './Graphic-9f79c7db.js';
import { m as m$1 } from './lengthUtils-cb1a7b62.js';
import { n as n$2, e } from './sizeVariableUtils-33233df0.js';
import './config-b3bf08ce.js';
import './jsonUtils-d762dc00.js';
import './PopupTemplate-77ad81c4.js';
import './fieldUtils-a9f71c96.js';
import './symbols-a702d148.js';
import './persistableUrlUtils-b4be11a9.js';
import './uid-7967dd4d.js';
import './unitUtils-1b0a3531.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const c=n.getLogger("esri.renderers.visualVariables.support.visualVariableUtils"),u=new n$1,f=Math.PI,p=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;function d(e,r$1,i){const t="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"color"===e.type))[0]:e;if(!t)return;if("esri.renderers.visualVariables.ColorVariable"!==t.declaredClass)return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable");const s="number"==typeof r$1,o$1=s?null:r$1,l=o$1&&o$1.attributes;let u=s?r$1:null;const f=t.field,{ipData:p,hasExpression:d}=t.cache;let v=t.cache.compiledFunc;if(!f&&!d){const e=t.stops;return e&&e[0]&&e[0].color}if("number"!=typeof u)if(d){if(!r(i)||!r(i.arcade))return void c.error("Use of arcade expressions requires an arcade context");const e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},r$1=i.arcade.arcadeUtils,n=r$1.getViewInfo(e),s=r$1.createExecContext(o$1,n);if(!v){const e=r$1.createSyntaxTree(t.valueExpression);v=r$1.createFunction(e),t.cache.compiledFunc=v;}u=r$1.executeFunction(v,s);}else l&&(u=l[f]);const b=t.normalizationField,h=l?parseFloat(l[b]):void 0;if(null!=u&&(!b||s||!isNaN(h)&&0!==h)){isNaN(h)||s||(u/=h);const e=C(u,p);if(e){const r$1=e[0],s=e[1],o$1=r$1===s?t.stops[r$1].color:o.blendColors(t.stops[r$1].color,t.stops[s].color,e[2],r(i)?i.color:void 0);return new o(o$1)}}}function v(e,a,i){const n="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"opacity"===e.type))[0]:e;if(!n)return;if("esri.renderers.visualVariables.OpacityVariable"!==n.declaredClass)return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable");const t$1="number"==typeof a,s=t$1?null:a,o=s&&s.attributes;let l=t$1?a:null;const u=n.field,{ipData:f,hasExpression:p}=n.cache;let d=n.cache.compiledFunc;if(!u&&!p){const e=n.stops;return e&&e[0]&&e[0].opacity}if("number"!=typeof l)if(p){if(t(i)||t(i.arcade))return void c.error("Use of arcade expressions requires an arcade context");const e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},a=i.arcade.arcadeUtils,t$1=a.getViewInfo(e),o=a.createExecContext(s,t$1);if(!d){const e=a.createSyntaxTree(n.valueExpression);d=a.createFunction(e),n.cache.compiledFunc=d;}l=a.executeFunction(d,o);}else o&&(l=o[u]);const v=n.normalizationField,b=o?parseFloat(o[v]):void 0;if(null!=l&&(!v||t$1||!isNaN(b)&&0!==b)){isNaN(b)||t$1||(l/=b);const e=C(l,f);if(e){const a=e[0],r=e[1];if(a===r)return n.stops[a].opacity;{const i=n.stops[a].opacity;return i+(n.stops[r].opacity-i)*e[2]}}}}function b(e,a,i){const n="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"rotation"===e.type))[0]:e;if(!n)return;if("esri.renderers.visualVariables.RotationVariable"!==n.declaredClass)return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable");const t$1=n.axis||"heading",s="heading"===t$1&&"arithmetic"===n.rotationType?90:0,o="heading"===t$1&&"arithmetic"===n.rotationType?-1:1,l="number"==typeof a?null:a,u=l&&l.attributes,f=n.field,{hasExpression:p}=n.cache;let d=n.cache.compiledFunc,v=0;if(!f&&!p)return v;if(p){if(t(i)||t(i.arcade))return void c.error("Use of arcade expressions requires an arcade context");const e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},a=i.arcade.arcadeUtils,t$1=a.getViewInfo(e),s=a.createExecContext(l,t$1);if(!d){const e=a.createSyntaxTree(n.valueExpression);d=a.createFunction(e),n.cache.compiledFunc=d;}v=a.executeFunction(d,s);}else u&&(v=u[f]||0);return v="number"!=typeof v||isNaN(v)?null:s+o*v,v}function h(e$1,i,n){const t$1="number"==typeof i,s=t$1?null:i,o=s&&s.attributes;let u=t$1?i:null;const{isScaleDriven:f}=e$1.cache;let p=e$1.cache.compiledFunc;if(f){const r$1=r(n)?n.scale:void 0,i=r(n)?n.view:void 0;u=null==r$1||"3d"===i?m(e$1):r$1;}else if(!t$1)switch(e$1.inputValueType){case"expression":{if(t(n)||t(n.arcade))return void c.error("Use of arcade expressions requires an arcade context");const a={viewingMode:n.viewingMode,scale:n.scale,spatialReference:n.spatialReference},i=n.arcade.arcadeUtils,t$1=i.getViewInfo(a),o=i.createExecContext(s,t$1);if(!p){const a=i.createSyntaxTree(e$1.valueExpression);p=i.createFunction(a),e$1.cache.compiledFunc=p;}u=i.executeFunction(p,o);break}case"field":o&&(u=o[e$1.field]);break;case"unknown":u=null;}if(!e(u))return null;if(t$1||!e$1.normalizationField)return u;const d=o?parseFloat(o[e$1.normalizationField]):null;return e(d)&&0!==d?u/d:null}function m(e){let a=null,r=null;const i=e.stops;return i?(a=i[0].value,r=i[i.length-1].value):(a=e.minDataValue||0,r=e.maxDataValue||0),(a+r)/2}function V(e,a,r){const i="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"size"===e.type))[0]:e;if(!i)return;if("esri.renderers.visualVariables.SizeVariable"!==i.declaredClass)return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable");const n=M(h(i,a,r),i,a,r,i.cache.ipData);return null==n||isNaN(n)?0:n}function x(e$1,a,r){return null==e$1?null:n$2(e$1)?V(e$1,a,r):e(e$1)?e$1:null}function y(e$1,a,r){return e(r)&&e$1>r?r:e(a)&&e$1<a?a:e$1}function w(e,a,r,i){return e+(x(a.minSize,r,i)||a.minDataValue)}function g(e,a,r){const i=e.stops;let n=i&&i.length&&i[0].size;return null==n&&(n=e.minSize),x(n,a,r)}function z(e,r$1,i,n){const t=(e-r$1.minDataValue)/(r$1.maxDataValue-r$1.minDataValue),s=x(r$1.minSize,i,n),o=x(r$1.maxSize,i,n),l=r(n)?n.shape:void 0;if(e<=r$1.minDataValue)return s;if(e>=r$1.maxDataValue)return o;if("area"===r$1.scaleBy&&l){const e="circle"===l,a=e?f*(s/2)**2:s*s,r=a+t*((e?f*(o/2)**2:o*o)-a);return e?2*Math.sqrt(r/f):Math.sqrt(r)}return s+t*(o-s)}function F(e,r$1,i,n){const t=r(n)?n.shape:void 0,s=e/r$1.minDataValue,o=x(r$1.minSize,i,n),l=x(r$1.maxSize,i,n);let c=null;return c="circle"===t?2*Math.sqrt(s*(o/2)**2):"square"===t||"diamond"===t||"image"===t?Math.sqrt(s*o**2):s*o,y(c,o,l)}function S(e,a,r,i,n){const[t,s,o]=C(e,n);if(t===s)return x(a.stops[t].size,r,i);{const e=x(a.stops[t].size,r,i);return e+(x(a.stops[s].size,r,i)-e)*o}}function E(e,r$1,i,n){const t=(r(n)&&n.resolution?n.resolution:1)*m$1[r$1.valueUnit],o=x(r$1.minSize,i,n),l=x(r$1.maxSize,i,n),{valueRepresentation:c}=r$1;let u=null;return u="area"===c?2*Math.sqrt(e/f)/t:"radius"===c||"distance"===c?2*e/t:e/t,y(u,o,l)}function D(e){return e}function M(e,a,r,i,n){switch(a.transformationType){case"additive":return w(e,a,r,i);case"constant":return g(a,r,i);case"clamped-linear":return z(e,a,r,i);case"proportional":return F(e,a,r,i);case"stops":return S(e,a,r,i,n);case"real-world-size":return E(e,a,r,i);case"identity":return D(e);case"unknown":return null}}function U(e,a,r){const{isScaleDriven:i}=e.cache;if(!(i&&"3d"===r||a))return null;const n={scale:a,view:r};let t=x(e.minSize,u,n),s=x(e.maxSize,u,n);if(null!=t||null!=s){if(t>s){const e=s;s=t,t=e;}return {minSize:t,maxSize:s}}}function k(e,a,r){if(!e.visualVariables)return;const i=[],n=[],t=[],s=[],o=[];for(const l of e.visualVariables)switch(l.type){case"color":n.push(l);break;case"opacity":t.push(l);break;case"rotation":o.push(l);break;case"size":s.push(l);}return n.forEach((e=>{const n=d(e,a,r);i.push({variable:e,value:n});})),t.forEach((e=>{const n=v(e,a,r);i.push({variable:e,value:n});})),o.forEach((e=>{const n=b(e,a,r);i.push({variable:e,value:n});})),s.forEach((e=>{const n=V(e,a,r);i.push({variable:e,value:n});})),i.filter((e=>null!=e.value))}function C(e,a){if(!a)return;let r=0,i=a.length-1;return a.some(((a,n)=>e<a?(i=n,!0):(r=n,!1))),[r,i,(e-a[r])/(a[i]-a[r])]}function N(a,r,i){const n=["proportional","proportional","proportional"];for(const t of a){const a=t.useSymbolValue?"symbol-value":V(t,r,i);switch(t.axis){case"width":n[0]=a;break;case"depth":n[1]=a;break;case"height":n[2]=a;break;case"width-and-depth":n[0]=a,n[1]=a;break;case"all":case void 0:case null:n[0]=a,n[1]=a,n[2]=a;break;default:n$3(t.axis);}}return n}

export { N as getAllSizes, d as getColor, v as getOpacity, b as getRotationAngle, V as getSize, M as getSizeForValue, x as getSizeFromNumberOrVariable, U as getSizeRangeAtScale, k as getVisualVariableValues, p as viewScaleRE };