import { s } from './config-b3bf08ce.js';
import { s as s$1, aT as w } from './Identifiable-c8406192.js';
import { a } from './ProjectParameters-8b435286.js';
import './jsonUtils-d762dc00.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function i(o=null,i){if(s.geometryServiceUrl){return new((await import('./GeometryService-794e4b03.js')).default)({url:s.geometryServiceUrl})}if(!o)throw new s$1("internal:geometry-service-url-not-configured");let n;if(n="portal"in o?o.portal||w.getDefault():o,await n.load({signal:i}),n.helperServices&&n.helperServices.geometry&&n.helperServices.geometry.url){return new((await import('./GeometryService-794e4b03.js')).default)({url:n.helperServices.geometry.url})}throw new s$1("internal:geometry-service-url-not-configured")}async function n(e,t,n=null,a$1){const l=await i(n,a$1),s=new a;s.geometries=[e],s.outSpatialReference=t;const c=await l.project(s,{signal:a$1});if(c&&Array.isArray(c)&&1===c.length)return c[0];throw new s$1("internal:geometry-service-projection-failed")}

export { i as create, n as projectGeometry };
