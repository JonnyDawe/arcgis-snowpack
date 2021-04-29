import { e, y, _ as j$1, a1 as e$1, aJ as m, au as x, i, a, A as k, P as r, C as U } from './Identifiable-c8406192.js';
import './config-b3bf08ce.js';
import { r as r$1, p as p$1 } from './Task-21d7c7ba.js';
import { L } from './normalizeUtils-2bbe7974.js';
import { c as c$2, a as c$3, l as l$1, u, d as d$1, n as n$1, o, b as u$1 } from './NAServiceDescription-1bf4fdea.js';
import { n } from './Graphic-9f79c7db.js';
import g$1 from './FeatureSet-ceb33ccf.js';
import './jsonUtils-d762dc00.js';
import './GPMessage-425ae8ef.js';
import './PopupTemplate-77ad81c4.js';
import './fieldUtils-a9f71c96.js';
import './symbols-a702d148.js';
import './persistableUrlUtils-b4be11a9.js';
import './uid-7967dd4d.js';
import './Field-e6fe6b12.js';
import './fieldType-769fe7ff.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function d(r$1){return r$1.features.map((o=>{const t=k.fromJSON(r$1.spatialReference),s=n.fromJSON(o);return r(s.geometry)&&(s.geometry.spatialReference=t),s}))}function f(r){return g$1.fromJSON(r).features.map((r=>r.geometry))}let j=class extends a{constructor(r){super(r),this.directions=null,this.facilities=null,this.incidents=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routes=null;}readFacilities(r){return f(r)}readIncidents(r){return f(r)}readPointBarriers(r,e){return f(e.barriers)}readPolylineBarriers(r){return f(r)}readPolygonBarriers(r){return f(r)}readRoutes(r){return d(r)}};e([y({type:[c$2]})],j.prototype,"directions",void 0),e([y({type:[j$1]})],j.prototype,"facilities",void 0),e([e$1("facilities")],j.prototype,"readFacilities",null),e([y({type:[j$1]})],j.prototype,"incidents",void 0),e([e$1("incidents")],j.prototype,"readIncidents",null),e([y({type:[c$3]})],j.prototype,"messages",void 0),e([y({type:[j$1]})],j.prototype,"pointBarriers",void 0),e([e$1("pointBarriers",["barriers"])],j.prototype,"readPointBarriers",null),e([y({type:[m]})],j.prototype,"polylineBarriers",void 0),e([e$1("polylineBarriers")],j.prototype,"readPolylineBarriers",null),e([y({type:[x]})],j.prototype,"polygonBarriers",void 0),e([e$1("polygonBarriers")],j.prototype,"readPolygonBarriers",null),e([y({type:[n]})],j.prototype,"routes",void 0),e([e$1("routes")],j.prototype,"readRoutes",null),j=e([i("esri.tasks.support.ClosestFacilitySolveResult")],j);var g=j;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const l=o({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});async function c$1(i,c,m){const f=[],p=[],y={},B={},d=r$1(i);return c.incidents&&c.incidents.features&&l$1(c.incidents.features,p,"incidents.features",y),c.facilities&&c.facilities.features&&l$1(c.facilities.features,p,"facilities.features",y),c.pointBarriers&&c.pointBarriers.features&&l$1(c.pointBarriers.features,p,"pointBarriers.features",y),c.polylineBarriers&&c.polylineBarriers.features&&l$1(c.polylineBarriers.features,p,"polylineBarriers.features",y),c.polygonBarriers&&c.polygonBarriers.features&&l$1(c.polygonBarriers.features,p,"polygonBarriers.features",y),L(p).then((e=>{for(const r in y){const t=y[r];f.push(r),B[r]=e.slice(t[0],t[1]);}return u(B,f)?d$1(d.path):Promise.resolve({dontCheck:!0})})).then((r=>{("dontCheck"in r?r.dontCheck:r.hasZ)||n$1(B,f);for(const e in B)B[e].forEach(((r,t)=>{c.get(e)[t].geometry=r;}));let t={query:{...d.query,f:"json",...l.toQueryParams(c)}};return m&&(t={...m,...t}),U(`${d.path}/solveClosestFacility`,t)})).then((e=>g.fromJSON(e.data)))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let p=class extends(u$1(p$1)){constructor(r){super(r),this.url=null;}solve(r,s){return c$1(this.url,r,s)}};e([y()],p.prototype,"url",void 0),p=e([i("esri.tasks.ClosestFacilityTask")],p);var c=p;

export default c;
