import { e as e$1, y, N, i as i$1, a as a$3, C as U, bw as j$1, bx as i$2, M, P as r$2 } from './Identifiable-c8406192.js';
import { a as t$3 } from './config-b3bf08ce.js';
import g from './FeatureSet-ceb33ccf.js';
import { R, K } from './Query-448be42b.js';
import { u as u$1, l as l$2 } from './RelationshipQuery-1cbf03e3.js';
import { r as r$1, p as p$2 } from './Task-21d7c7ba.js';
import { t as t$1, p as p$1, S, f, y as y$1, c as c$1 } from './query-95e8633c.js';
import { n as n$7 } from './compilerUtils-006be997.js';
import { a as ae, e as ee } from './featureConversionUtils-6830a580.js';
import { t as t$2 } from './zscale-209a474d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function n$6(n){const{exifInfo:e,exifName:a,tagName:u}=n;if(!e||!a||!u)return null;const f=e.find((n=>n.name===a));return f?t({tagName:u,tags:f.tags}):null}function t(n){const{tagName:t,tags:e}=n;if(!e||!t)return null;const a=e.find((n=>n.name===t));return a&&a.value||null}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var n$5;const p={1:{id:1,rotation:0,mirrored:!1},2:{id:2,rotation:0,mirrored:!0},3:{id:3,rotation:180,mirrored:!1},4:{id:4,rotation:180,mirrored:!0},5:{id:5,rotation:-90,mirrored:!0},6:{id:6,rotation:90,mirrored:!1},7:{id:7,rotation:90,mirrored:!0},8:{id:8,rotation:-90,mirrored:!1}};let l$1=n$5=class extends a$3{constructor(o){super(o),this.contentType=null,this.exifInfo=null,this.id=null,this.globalId=null,this.keywords=null,this.name=null,this.parentGlobalId=null,this.parentObjectId=null,this.size=null,this.url=null;}get orientationInfo(){const{exifInfo:o}=this,t=n$6({exifName:"Exif IFD0",tagName:"Orientation",exifInfo:o});return p[t]||null}clone(){return new n$5({contentType:this.contentType,exifInfo:this.exifInfo,id:this.id,globalId:this.globalId,keywords:this.keywords,name:this.name,parentGlobalId:this.parentGlobalId,parentObjectId:this.parentObjectId,size:this.size,url:this.url})}};e$1([y({type:String})],l$1.prototype,"contentType",void 0),e$1([y()],l$1.prototype,"exifInfo",void 0),e$1([y({readOnly:!0})],l$1.prototype,"orientationInfo",null),e$1([y({type:N})],l$1.prototype,"id",void 0),e$1([y({type:String})],l$1.prototype,"globalId",void 0),e$1([y({type:String})],l$1.prototype,"keywords",void 0),e$1([y({type:String})],l$1.prototype,"name",void 0),e$1([y({json:{read:!1}})],l$1.prototype,"parentGlobalId",void 0),e$1([y({json:{read:!1}})],l$1.prototype,"parentObjectId",void 0),e$1([y({type:N})],l$1.prototype,"size",void 0),e$1([y({json:{read:!1}})],l$1.prototype,"url",void 0),l$1=n$5=e$1([i$1("esri.layers.support.AttachmentInfo")],l$1);var d$1=l$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function n$4(t){const o=t.toJSON();return o.attachmentTypes&&(o.attachmentTypes=o.attachmentTypes.join(",")),o.keywords&&(o.keywords=o.keywords.join(",")),o.globalIds&&(o.globalIds=o.globalIds.join(",")),o.objectIds&&(o.objectIds=o.objectIds.join(",")),o.size&&(o.size=o.size.join(",")),o}function a$2(e,s){const n={};for(const a of e){const{parentObjectId:e,parentGlobalId:c,attachmentInfos:i}=a;for(const a of i){const{id:i}=a,m=j$1(i$2(`${s}/${e}/attachments/${i}`)),p=d$1.fromJSON(a);p.set({url:m,parentObjectId:e,parentGlobalId:c}),n[e]?n[e].push(p):n[e]=[p];}}return n}function c(t,o,r){let a={query:t$1({...t.query,f:"json",...n$4(o)})};return r&&(a={...r,...a,query:{...r.query,...a.query}}),U(t.path+"/queryAttachments",a)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function s$3(s,a,m){const n=r$1(s);return c(n,u$1.from(a),{...m}).then((t=>a$2(t.data.attachmentGroups,n.path)))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function s$2(s,n,m){const p=r$1(s);return p$1(p,R.from(n),{...m}).then((o=>o.data.count))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function m(m,n,s){const p=r$1(m);return S(p,R.from(n),{...s}).then((o=>({count:o.data.count,extent:M.fromJSON(o.data.extent)})))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function s$1(s,e,m){const n=r$1(s);return f(n,R.from(e),{...m}).then((o=>o.data.objectIds))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function e(r,a,e){const n=r$1(r),i={...e},p=R.from(a),{data:u}=await y$1(n,p,p.sourceSpatialReference,i);return u}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function i(e,t){return t}function o$1(e,t,r,s){switch(r){case 0:return u(e,t+s,0);case 1:return "lowerLeft"===e.originPosition?u(e,t+s,1):d(e,t+s,1)}}function n$3(e,t,r,s){switch(r){case 2:return u(e,t,2);default:return o$1(e,t,r,s)}}function a$1(e,t,r,s){switch(r){case 2:return u(e,t,3);default:return o$1(e,t,r,s)}}function h(e,t,r,s){switch(r){case 3:return u(e,t,3);default:return n$3(e,t,r,s)}}function u({translate:e,scale:t},r,s){return e[s]+r*t[s]}function d({translate:e,scale:t},r,s){return e[s]-r*t[s]}class l{constructor(e){this.options=e,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=i,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this.AttributesConstructor=function(){};}createFeatureResult(){return {fields:[],features:[]}}finishFeatureResult(e){if(this.options.applyTransform&&(e.transform=null),this.AttributesConstructor=function(){},this.coordinateBuffer=null,this.lengths.length=0,!e.hasZ)return;const t=t$2(e.geometryType,this.options.sourceSpatialReference,e.spatialReference);if(t)for(const r of e.features)t(r.geometry);}createSpatialReference(){return {}}addField(e,t){e.fields.push(t);const r=e.fields.map((e=>e.name));this.AttributesConstructor=function(){for(const e of r)this[e]=null;};}addFeature(e,t){e.features.push(t);}prepareFeatures(t){switch(this.transform=t.transform,this.options.applyTransform&&t.transform&&(this.applyTransform=this.deriveApplyTransform(t)),this.vertexDimension=2,t.hasZ&&this.vertexDimension++,t.hasM&&this.vertexDimension++,t.geometryType){case"esriGeometryPoint":this.addCoordinate=(e,t,r)=>this.addCoordinatePoint(e,t,r),this.createGeometry=e=>this.createPointGeometry(e);break;case"esriGeometryPolygon":this.addCoordinate=(e,t,r)=>this.addCoordinatePolygon(e,t,r),this.createGeometry=e=>this.createPolygonGeometry(e);break;case"esriGeometryPolyline":this.addCoordinate=(e,t,r)=>this.addCoordinatePolyline(e,t,r),this.createGeometry=e=>this.createPolylineGeometry(e);break;case"esriGeometryMultipoint":this.addCoordinate=(e,t,r)=>this.addCoordinateMultipoint(e,t,r),this.createGeometry=e=>this.createMultipointGeometry(e);break;default:n$7(t.geometryType);}}createFeature(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,{attributes:new this.AttributesConstructor}}allocateCoordinates(){}addLength(e,t,r){0===this.lengths.length&&(this.toAddInCurrentPath=t),this.lengths.push(t);}addQueryGeometry(e,s){const{queryGeometry:i,queryGeometryType:o}=s,n=ae(i.clone(),i,!1,!1,this.transform),a=ee(n,o,!1,!1);e.queryGeometryType=o,e.queryGeometry={...a};}createPointGeometry(e){const t={x:0,y:0,spatialReference:e.spatialReference};return e.hasZ&&(t.z=0),e.hasM&&(t.m=0),t}addCoordinatePoint(e,t,r){switch(t=this.applyTransform(this.transform,t,r,0),r){case 0:e.x=t;break;case 1:e.y=t;break;case 2:"z"in e?e.z=t:e.m=t;break;case 3:e.m=t;}}transformPathLikeValue(e,t){let r=0;return t<=1&&(r=this.previousCoordinate[t],this.previousCoordinate[t]+=e),this.applyTransform(this.transform,e,t,r)}addCoordinatePolyline(e,t,r){this.dehydratedAddPointsCoordinate(e.paths,t,r);}addCoordinatePolygon(e,t,r){this.dehydratedAddPointsCoordinate(e.rings,t,r);}addCoordinateMultipoint(e,t,r){0===r&&e.points.push([]);const s=this.transformPathLikeValue(t,r);e.points[e.points.length-1].push(s);}createPolygonGeometry(e){return {rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}createPolylineGeometry(e){return {paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}createMultipointGeometry(e){return {points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}dehydratedAddPointsCoordinate(e,t,r){0===r&&0==this.toAddInCurrentPath--&&(e.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);const s=this.transformPathLikeValue(t,r),i=e[e.length-1];0===r&&(this.coordinateBufferPtr=0,this.coordinateBuffer=new Array(this.vertexDimension),i.push(this.coordinateBuffer)),this.coordinateBuffer[this.coordinateBufferPtr++]=s;}deriveApplyTransform(e){const{hasZ:t,hasM:r}=e;return t&&r?h:t?n$3:r?a$1:o$1}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function n$2(r,s,n){const p=r$1(r),i={...n},u=R.from(s),m=!u.quantizationParameters,{data:f}=await c$1(p,u,new l({sourceSpatialReference:u.sourceSpatialReference,applyTransform:m}),i);return f}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function o(e,t){const o=e.toJSON();return o.objectIds&&(o.objectIds=o.objectIds.join(",")),o.orderByFields&&(o.orderByFields=o.orderByFields.join(",")),!o.outFields||null!=t&&t.returnCountOnly?delete o.outFields:-1!==o.outFields.indexOf("*")?o.outFields="*":o.outFields=o.outFields.join(","),o.outSpatialReference&&(o.outSR=o.outSR.wkid||JSON.stringify(o.outSR.toJSON()),delete o.outSpatialReference),o.dynamicDataSource&&(o.layer=JSON.stringify({source:o.dynamicDataSource}),delete o.dynamicDataSource),o}async function r(e,t,o){const r=await s(e,t,o),n=r.data,a=n.geometryType,d=n.spatialReference,i={};for(const s of n.relatedRecordGroups){const e={fields:void 0,objectIdFieldName:void 0,geometryType:a,spatialReference:d,hasZ:!!n.hasZ,hasM:!!n.hasM,features:s.relatedRecords};if(null!=s.objectId)i[s.objectId]=e;else for(const t in s)s.hasOwnProperty(t)&&"relatedRecords"!==t&&(i[s[t]]=e);}return {...r,data:i}}async function n$1(e,t,o){const r=await s(e,t,o,{returnCountOnly:!0}),n=r.data,a={};for(const s of n.relatedRecordGroups)null!=s.objectId&&(a[s.objectId]=s.count);return {...r,data:a}}async function s(r,n,s={},a){const d=t$1({...r.query,f:"json",...a,...o(n,a)});return U(r.path+"/queryRelatedRecords",{...s,query:{...s.query,...d}})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function n(s,n,a){n=l$2.from(n);const u=r$1(s);return r(u,n,a).then((r=>{const e=r.data,o={};return Object.keys(e).forEach((r=>o[r]=g.fromJSON(e[r]))),o}))}async function a(t,o,n){o=l$2.from(o);const a=r$1(t);return n$1(a,o,{...n}).then((t=>t.data))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let j=class extends p$2{constructor(e){super(e),this.dynamicDataSource=null,this.format="json",this.gdbVersion=null,this.sourceSpatialReference=null;}execute(e,r){return this.executeJSON(e,r).then((e=>g.fromJSON(e)))}async executeJSON(e$1,t){var o;const s={...this.requestOptions,...t},i=this._normalizeQuery(e$1),u=null!=(null==(o=e$1.outStatistics)?void 0:o[0]),a=t$3("featurelayer-pbf-statistics"),n=!u||a;let c;if("pbf"===this.format&&n)try{c=await n$2(this.url,i,s);}catch(m){if("query:parsing-pbf"!==m.name)throw m;this.format="json";}return "json"!==this.format&&n||(c=await e(this.url,i,s)),this._normalizeFields(c.fields),c}executeForCount(e,r){const t={...this.requestOptions,...r},o=this._normalizeQuery(e);return s$2(this.url,o,t)}executeForExtent(e,r){const t={...this.requestOptions,...r},o=this._normalizeQuery(e);return m(this.url,o,t)}executeForIds(e,r){const t={...this.requestOptions,...r},o=this._normalizeQuery(e);return s$1(this.url,o,t)}executeRelationshipQuery(e,r){e=l$2.from(e);const t={...this.requestOptions,...r};return (this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),n(this.url,e,t)}executeRelationshipQueryForCount(e,r){e=l$2.from(e);const t={...this.requestOptions,...r};return (this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),a(this.url,e,t)}executeAttachmentQuery(e,r){const t={...this.requestOptions,...r};return s$3(this.url,e,t)}_normalizeQuery(e){const r=R.from(e);if(r.sourceSpatialReference=r.sourceSpatialReference||this.sourceSpatialReference,!this.gdbVersion&&!this.dynamicDataSource)return r;const t=r===e?r.clone():r;return t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?K.from(e.dynamicDataSource):this.dynamicDataSource,t}_normalizeFields(e){if(r$2(this.fieldsIndex)&&r$2(e))for(const r of e){const e=this.fieldsIndex.get(r.name);e&&Object.assign(r,e.toJSON());}}};e$1([y({type:K})],j.prototype,"dynamicDataSource",void 0),e$1([y()],j.prototype,"fieldsIndex",void 0),e$1([y()],j.prototype,"format",void 0),e$1([y()],j.prototype,"gdbVersion",void 0),e$1([y()],j.prototype,"sourceSpatialReference",void 0),j=e$1([i$1("esri.tasks.QueryTask")],j);var x=j;

export { a$2 as a, d$1 as d, x };
