import { ak as d, J as t$1 } from './Identifiable-c8406192.js';
import { T } from './unitUtils-1b0a3531.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function t(t,c,l){if(t$1(c)||t$1(l)||l.vcsWkid||d(c,l))return null;const u=T(c)/T(l);if(1===u)return null;switch(t){case"point":case"esriGeometryPoint":return n=>i(n,u);case"polyline":case"esriGeometryPolyline":return n=>s(n,u);case"polygon":case"esriGeometryPolygon":return n=>r(n,u);case"multipoint":case"esriGeometryMultipoint":return n=>f(n,u);default:return null}}function i(n,o){n&&null!=n.z&&(n.z*=o);}function r(n,o){if(n)for(const e of n.rings)for(const n of e)n.length>2&&(n[2]*=o);}function s(n,o){if(n)for(const e of n.paths)for(const n of e)n.length>2&&(n[2]*=o);}function f(n,o){if(n)for(const e of n.points)e.length>2&&(e[2]*=o);}function c(n,o,e){if(null==n.hasM||n.hasZ)for(const t of o)for(const n of t)n.length>2&&(n[2]*=e);}function l(n,o,t){if(!n&&!o||!t)return;const i=T(t);u(n,t,i),u(o,t,i);}function u(n,o,e){if(n)for(const t of n)a(t.geometry,o,e);}function a(n,t,i){if(!n||!n.spatialReference||d(n.spatialReference,t))return;const r=T(n.spatialReference)/i;if(1!==r)if("x"in n)null!=n.z&&(n.z*=r);else if("rings"in n)c(n,n.rings,r);else if("paths"in n)c(n,n.paths,r);else if("points"in n&&(null==n.hasM||n.hasZ))for(const o of n.points)o.length>2&&(o[2]*=r);}

export { l, t };
