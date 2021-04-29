import { t as t$2 } from './config-b3bf08ce.js';
import { aM as t$1, e as e$1, y, i as i$3, M, a1 as e$2, A as k, Y as e$3, _ as j, aJ as m, a as a$1, P as r, s, C as U, U as U$1 } from './Identifiable-c8406192.js';
import { r as r$1, p as p$3 } from './Task-21d7c7ba.js';
import { n as n$2 } from './Graphic-9f79c7db.js';
import g from './FeatureSet-ceb33ccf.js';
import { a } from './GPMessage-425ae8ef.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const t=t=>{if(!Array.isArray(t))return !1;const[e]=t;return "number"==typeof e||"string"==typeof e};class e{constructor(t={}){this._options=t;}toQueryParams(e){if(!e)return null;const o=e.toJSON(),n={};return Object.keys(o).forEach((e=>{const r=this._options[e];if(r){const s="boolean"!=typeof r&&r.name?r.name:e,i="boolean"!=typeof r&&r.getter?r.getter(o):o[e];null!=i&&(n[s]=t(i)?i.join(","):"object"==typeof i?JSON.stringify(i):i);}else n[e]=o[e];}),this),n}}function o(t){return new e(t)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const p$2=new t$1({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});let i$2=class extends a{constructor(r){super(r),this.type=null;}};e$1([y({type:String,json:{read:p$2.read,write:p$2.write}})],i$2.prototype,"type",void 0),i$2=e$1([i$3("esri.tasks.support.NAMessage")],i$2);var c$3=i$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let u$4=class extends g{constructor(e){super(e),this.extent=null,this.features=null,this.geometryType="polyline",this.routeId=null,this.routeName=null,this.totalDriveTime=null,this.totalLength=null,this.totalTime=null;}readFeatures(e,r){(e||[]).forEach((e=>{this._decompressFeatureGeometry(e,r.summary.envelope.spatialReference);}));const o=k.fromJSON(r.spatialReference);return e.map((e=>{const r=n$2.fromJSON(e),s=e.geometry&&e.geometry.spatialReference;return r.geometry&&!s&&(e$3(r.geometry).spatialReference=o),r.strings=e.strings,r.events=(e.events||[]).map((t=>{const r=new n$2({geometry:new j({x:t.point.x,y:t.point.y,z:t.point.z,hasZ:void 0!==t.point.z,spatialReference:e.geometry&&e.geometry.spatialReference}),attributes:{ETA:t.ETA,arriveTimeUTC:t.arriveTimeUTC}});return r.strings=t.strings,r})),r}))}get mergedGeometry(){if(!this.features)return null;const e=this.features.map((({geometry:e})=>e$3(e))),r=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(e,r)}get strings(){return this.features.map((({strings:e})=>e))}_decompressFeatureGeometry(e,t){e.geometry=this._decompressGeometry(e.compressedGeometry,t);}_decompressGeometry(e,t){let r=0,o=0,s=0,a=0;const p=[];let n,i,m,l,u,c,y,g,h=0,f=0,d=0;if(u=e.match(/((\+|\-)[^\+\-\|]+|\|)/g),u||(u=[]),0===parseInt(u[h],32)){h=2;const e=parseInt(u[h],32);h++,c=parseInt(u[h],32),h++,1&e&&(f=u.indexOf("|")+1,y=parseInt(u[f],32),f++),2&e&&(d=u.indexOf("|",f)+1,g=parseInt(u[d],32),d++);}else c=parseInt(u[h],32),h++;for(;h<u.length&&"|"!==u[h];){n=parseInt(u[h],32)+r,h++,r=n,i=parseInt(u[h],32)+o,h++,o=i;const e=[n/c,i/c];f&&(l=parseInt(u[f],32)+s,f++,s=l,e.push(l/y)),d&&(m=parseInt(u[d],32)+a,d++,a=m,e.push(m/g)),p.push(e);}return {paths:[p],hasZ:f>0,hasM:d>0,spatialReference:t}}_mergePolylinesToSinglePath(e,t){let r=[];(e||[]).forEach((e=>{e.paths.forEach((e=>{r=r.concat(e);}));}));const o=[];let s=[0,0];return r.forEach((e=>{e[0]===s[0]&&e[1]===s[1]||(o.push(e),s=e);})),new m({paths:[o]},t)}};e$1([y({type:M,json:{read:{source:"summary.envelope"}}})],u$4.prototype,"extent",void 0),e$1([y()],u$4.prototype,"features",void 0),e$1([e$2("features")],u$4.prototype,"readFeatures",null),e$1([y()],u$4.prototype,"geometryType",void 0),e$1([y({readOnly:!0})],u$4.prototype,"mergedGeometry",null),e$1([y()],u$4.prototype,"routeId",void 0),e$1([y()],u$4.prototype,"routeName",void 0),e$1([y({value:null,readOnly:!0})],u$4.prototype,"strings",null),e$1([y({json:{read:{source:"summary.totalDriveTime"}}})],u$4.prototype,"totalDriveTime",void 0),e$1([y({json:{read:{source:"summary.totalLength"}}})],u$4.prototype,"totalLength",void 0),e$1([y({json:{read:{source:"summary.totalTime"}}})],u$4.prototype,"totalTime",void 0),u$4=e$1([i$3("esri.tasks.support.DirectionsFeatureSet")],u$4);var c$2=u$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let i$1=class extends a$1{constructor(o){super(o),this.directions=null,this.route=null,this.routeName=null,this.stops=null;}};e$1([y({type:c$2,json:{write:!0}})],i$1.prototype,"directions",void 0),e$1([y({type:n$2,json:{write:!0}})],i$1.prototype,"route",void 0),e$1([y({type:String,json:{write:!0}})],i$1.prototype,"routeName",void 0),e$1([y({type:[n$2],json:{write:!0}})],i$1.prototype,"stops",void 0),i$1=e$1([i$3("esri.tasks.support.RouteResult")],i$1);var u$3=i$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function n$1(r){return r&&g.fromJSON(r).features.map((r=>r))}let u$2=class extends a$1{constructor(r){super(r),this.barriers=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routeResults=null;}readPointBarriers(r,o){return n$1(o.barriers||o.pointBarriers)}readPolylineBarriers(r){return n$1(r)}readPolygonBarriers(r){return n$1(r)}};e$1([y({aliasOf:"pointBarriers"})],u$2.prototype,"barriers",void 0),e$1([y({type:[c$3]})],u$2.prototype,"messages",void 0),e$1([y({type:[n$2]})],u$2.prototype,"pointBarriers",void 0),e$1([e$2("pointBarriers",["barriers","pointBarriers"])],u$2.prototype,"readPointBarriers",null),e$1([y({type:[n$2]})],u$2.prototype,"polylineBarriers",void 0),e$1([e$2("polylineBarriers")],u$2.prototype,"readPolylineBarriers",null),e$1([y({type:[n$2]})],u$2.prototype,"polygonBarriers",void 0),e$1([e$2("polygonBarriers")],u$2.prototype,"readPolygonBarriers",null),e$1([y({type:[u$3]})],u$2.prototype,"routeResults",void 0),u$2=e$1([i$3("esri.tasks.support.RouteResultsContainer")],u$2);var c$1=u$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function l$1(e,t,r,s){s[r]=[t.length,t.length+e.length],e.forEach((e=>{t.push(e.geometry);}));}function n(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)e.z=void 0;}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.");}function i(e){const t=[],r=[],{directions:s=[],routes:{features:o=[],spatialReference:l=null}={},stops:{features:n=[],spatialReference:i=null}={},barriers:u,polygonBarriers:d,polylineBarriers:p,messages:f}=e.data,c="esri.tasks.RouteTask.NULL_ROUTE_NAME";let v,m,h=!0;const g=o&&l||n&&i||u&&u.spatialReference||d&&d.spatialReference||p&&p.spatialReference;s.forEach((e=>{t.push(v=e.routeName),r[v]={directions:e};})),o.forEach((e=>{-1===t.indexOf(v=e.attributes.Name)&&(t.push(v),r[v]={}),e.geometry&&(e.geometry.spatialReference=g),r[v].route=e;})),n.forEach((e=>{m=e.attributes,-1===t.indexOf(v=m.RouteName||c)&&(t.push(v),r[v]={}),v!==c&&(h=!1),e.geometry&&(e.geometry.spatialReference=g),null==r[v].stops&&(r[v].stops=[]),r[v].stops.push(e);})),n.length>0&&!0===h&&(r[t[0]].stops=r[c].stops,delete r[c],t.splice(t.indexOf(c),1));const T=t.map((e=>(r[e].routeName=e===c?null:e,r[e])));return c$1.fromJSON({routeResults:T,pointBarriers:u,polygonBarriers:d,polylineBarriers:p,messages:f})}function u$1(e,r$1){for(let s=0;s<r$1.length;s++){const o=e[r$1[s]];if(o&&o.length)for(const e of o)if(r(e)&&e.hasZ)return !0}return !1}async function d(e){if(!e)throw new s("network-service:missing-url","Url to Network service is missing");const{data:t}=await U(e,{query:{f:"json"}});t.supportedTravelModes||(t.supportedTravelModes=[]);for(let r=0;r<t.supportedTravelModes.length;r++)t.supportedTravelModes[r].id||(t.supportedTravelModes[r].id=t.supportedTravelModes[r].itemId);const o=t.currentVersion>=10.4?f(e):p$1(e),{defaultTravelMode:a,supportedTravelModes:l}=await o;return t.defaultTravelMode=a,t.supportedTravelModes=l,t}async function p$1(t){const{data:r}=await U(t.substring(0,t.indexOf("/rest/")+6)+"info",{query:{f:"json"}});if(!r||!r.owningSystemUrl)return {supportedTravelModes:[],defaultTravelMode:null};t=r.owningSystemUrl;const{data:a}=await U(t+("/"===t[t.length-1]?"":"/")+"sharing/rest/portals/self",{query:{f:"json"}}),l=t$2("helperServices.routingUtilities.url",a);if(!l)return {supportedTravelModes:[],defaultTravelMode:null};const n=r$1(t),i=/\/solve$/.test(n.path)?"Route":/\/solveClosestFacility$/.test(n.path)?"ClosestFacility":"ServiceAreas",u=await U(l+("/"===l[l.length-1]?"":"/")+"GetTravelModes/execute",{query:{f:"json",serviceName:i}}),d=[];let p=null;if(u&&u.data&&u.data.results&&u.data.results.length){const e=u.data.results;for(const t of e)if("supportedTravelModes"===t.paramName){if(t.value&&t.value.features)for(const{attributes:e}of t.value.features)if(e){const t=JSON.parse(e.TravelMode);d.push(t);}}else "defaultTravelMode"===t.paramName&&(p=t.value);}return {supportedTravelModes:d,defaultTravelMode:p}}async function f(e){try{const{data:{supportedTravelModes:t,defaultTravelMode:r}}=await U(e+("/"===e[e.length-1]?"":"/")+"retrieveTravelModes",{query:{f:"json"}});return {supportedTravelModes:t,defaultTravelMode:r}}catch(t){throw new s("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:t})}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function l(e,r){try{const{data:{supportedTravelModes:t,defaultTravelMode:s}}=await U(e+("/"===e[e.length-1]?"":"/")+"retrieveTravelModes",{query:{f:"json",token:r}});return {supportedTravelModes:t,defaultTravelMode:s}}catch(t){throw new s("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:t})}}async function c(e,t){const{data:s}=await U(e.substring(0,e.indexOf("/rest/")+6)+"info",{query:{f:"json",token:t}});if(!s||!s.owningSystemUrl)return {supportedTravelModes:[],defaultTravelMode:null};e=s.owningSystemUrl;const{data:o}=await U(e+("/"===e[e.length-1]?"":"/")+"sharing/rest/portals/self",{query:{f:"json",token:t}}),n=t$2("helperServices.routingUtilities.url",o);if(!n)return {supportedTravelModes:[],defaultTravelMode:null};const l=U$1(e),c=/\/solveClosestFacility$/.test(l.path)?"Route":/\/solveClosestFacility$/.test(l.path)?"ClosestFacility":"ServiceAreas",u=await U(n+("/"===n[n.length-1]?"":"/")+"GetTravelModes/execute",{query:{f:"json",serviceName:c,token:t}}),p=[];let d=null;if(u&&u.data&&u.data.results&&u.data.results.length){const e=u.data.results;for(const r of e)if("supportedTravelModes"===r.paramName){if(r.value&&r.value.features)for(const{attributes:e}of r.value.features)if(e){const r=JSON.parse(e.TravelMode);p.push(r);}}else "defaultTravelMode"===r.paramName&&(d=r.value);}return {supportedTravelModes:p,defaultTravelMode:d}}const u=r$1=>{let i=class extends r$1{async getServiceDescription(e){return this._serviceDescriptionPromise||(this._serviceDescriptionPromise=this._fetchServiceDescription(e)),this._serviceDescriptionPromise}async _fetchServiceDescription(e){if(!this.url||!this.parsedUrl)throw new s("network-service:missing-url","Url to Network service is missing");const r=this.url,{data:t}=await U(r,{query:{f:"json",token:e}});t.supportedTravelModes||(t.supportedTravelModes=[]);for(let o=0;o<t.supportedTravelModes.length;o++)t.supportedTravelModes[o].id||(t.supportedTravelModes[o].id=t.supportedTravelModes[o].itemId);const s$1=t.currentVersion>=10.4?l(r,e):c(r,e),{defaultTravelMode:i,supportedTravelModes:n}=await s$1;return t.defaultTravelMode=i,t.supportedTravelModes=n,t}_isInputGeometryZAware(e,r$1){for(let s=0;s<r$1.length;s++){const o=e[r$1[s]];if(o&&o.length)for(const e of o)if(r(e)&&e.hasZ)return !0}return !1}_dropZValuesOffInputGeometry(e,r){for(let t=0;t<r.length;t++){const s=e[r[t]];if(s&&s.length)for(const e of s)e.z=void 0;}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.");}};return i=e$1([i$3("esri.tasks.mixins.NAServiceDescription")],i),i};let p=class extends(u(p$3)){};p=e$1([i$3("esri.tasks.mixins.NAServiceDescription")],p);

export { c$3 as a, u as b, c$2 as c, d, i, l$1 as l, n, o, u$1 as u };
