import { e, y, _ as j, a1 as e$1, aJ as m, au as x, i as i$1, a, A as k, Y as e$2, C as U } from './Identifiable-c8406192.js';
import './config-b3bf08ce.js';
import { r, p as p$1 } from './Task-21d7c7ba.js';
import { L } from './normalizeUtils-2bbe7974.js';
import { a as c$1, l as l$1, u as u$1, d as d$1, n as n$1, o, b as u$2 } from './NAServiceDescription-1bf4fdea.js';
import { p } from './jsonUtils-d762dc00.js';
import { n } from './Graphic-9f79c7db.js';
import './FeatureSet-ceb33ccf.js';
import './Field-e6fe6b12.js';
import './fieldUtils-a9f71c96.js';
import './fieldType-769fe7ff.js';
import './PopupTemplate-77ad81c4.js';
import './symbols-a702d148.js';
import './persistableUrlUtils-b4be11a9.js';
import './uid-7967dd4d.js';
import './GPMessage-425ae8ef.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function u(r){return r.features.map((o=>{const t=k.fromJSON(r.spatialReference),s=n.fromJSON(o);return e$2(s.geometry).spatialReference=t,s}))}function d(r){return r.features.map((e=>(e.geometry.spatialReference=r.spatialReference,p(e.geometry))))}let f$1=class extends a{constructor(r){super(r),this.facilities=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.serviceAreaPolylines=null,this.serviceAreaPolygons=null;}readFacilities(r){return d(r)}readPointBarriers(r,e){return d(e.barriers)}readPolylineBarriers(r){return d(r)}readPolygonBarriers(r){return d(r)}readIncidents(r,e){return u(e.saPolylines)}readServiceAreaPolygons(r,e){return u(e.saPolygons)}};e([y({type:[j]})],f$1.prototype,"facilities",void 0),e([e$1("facilities")],f$1.prototype,"readFacilities",null),e([y({type:[c$1]})],f$1.prototype,"messages",void 0),e([y({type:[j]})],f$1.prototype,"pointBarriers",void 0),e([e$1("pointBarriers",["barriers"])],f$1.prototype,"readPointBarriers",null),e([y({type:[m]})],f$1.prototype,"polylineBarriers",void 0),e([e$1("polylineBarriers")],f$1.prototype,"readPolylineBarriers",null),e([y({type:[x]})],f$1.prototype,"polygonBarriers",void 0),e([e$1("polygonBarriers")],f$1.prototype,"readPolygonBarriers",null),e([y({type:[n]})],f$1.prototype,"serviceAreaPolylines",void 0),e([e$1("serviceAreaPolylines",["saPolylines"])],f$1.prototype,"readIncidents",null),e([y({type:[n]})],f$1.prototype,"serviceAreaPolygons",void 0),e([e$1("serviceAreaPolygons",["saPolygons"])],f$1.prototype,"readServiceAreaPolygons",null),f$1=e([i$1("esri.tasks.support.ServiceAreaSolveResult")],f$1);var g=f$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const l=o({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,defaultBreaks:!0,facilities:!0,outSpatialReference:{name:"outSR",getter:r=>r.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},travelMode:!0});async function f(i,f,c){const p=[],m=[],B={},y={},h=r(i);return f.facilities&&f.facilities.features&&l$1(f.facilities.features,m,"facilities.features",B),f.pointBarriers&&f.pointBarriers.features&&l$1(f.pointBarriers.features,m,"pointBarriers.features",B),f.polylineBarriers&&f.polylineBarriers.features&&l$1(f.polylineBarriers.features,m,"polylineBarriers.features",B),f.polygonBarriers&&f.polygonBarriers.features&&l$1(f.polygonBarriers.features,m,"polygonBarriers.features",B),L(m).then((r=>{for(const e in B){const t=B[e];p.push(e),y[e]=r.slice(t[0],t[1]);}return u$1(y,p)?d$1(h.path).catch((()=>({dontCheck:!0}))):Promise.resolve({dontCheck:!0})})).then((e=>{("dontCheck"in e?e.dontCheck:e.hasZ)||n$1(y,p);for(const r in y)y[r].forEach(((e,t)=>{f.get(r)[t].geometry=e;}));let t={query:{...h.query,f:"json",...l.toQueryParams(f)}};return c&&(t={...c,...t}),U(`${h.path}/solveServiceArea`,t)})).then((r=>g.fromJSON(r.data)))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let i=class extends(u$2(p$1)){constructor(r){super(r),this.url=null;}solve(r,s){return f(this.url,r,s)}};e([y()],i.prototype,"url",void 0),i=e([i$1("esri.tasks.ServiceAreaTask")],i);var c=i;

export default c;
