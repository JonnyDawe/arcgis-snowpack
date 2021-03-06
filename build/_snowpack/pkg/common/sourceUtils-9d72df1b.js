import { an as s } from './Identifiable-c8406192.js';
import { X, B, l as ee, p as ne, q as fe } from './fieldUtils-a9f71c96.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class o{constructor(){this.code=null,this.description=null;}}class l{constructor(t){this.error=new o,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t;}}function u(t){return new l(t)}class a{constructor(t){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t;}}function c(t){return new a(t)}const f=new Set;function d(t,e,r,s,o=!1,l){f.clear();for(const a in s){const e=t.get(a);if(!e)continue;const c=s[a],d=m(e,c);if(d!==c&&l&&l.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:e,originalValue:c,sanitizedValue:d}}),f.add(e.name),e&&(o||e.editable)){const t=ne(e,d);if(t)return u(fe(t,e,d));r[e.name]=d;}}for(const n of e)if(!f.has(n.name))return u(`missing required field "${n.name}"`);return null}function m(t,n){let i=n;return "string"==typeof n&&X(t)?i=parseFloat(n):null!=n&&B(t)&&"string"!=typeof n&&(i=String(n)),ee(i)}let p;function h(e,n){if(!e||!s(n))return e;if("rings"in e||"paths"in e){if(!p)throw new TypeError("geometry engine not loaded");return p.simplify(n,e)}return e}async function g(){return p||(p=await import('./geometryEngineJSON-f00f02e9.js'),p)}async function y(e,n){!s(e)||"esriGeometryPolygon"!==n&&"esriGeometryPolyline"!==n||await g();}

export { c, d, h, u, y };
