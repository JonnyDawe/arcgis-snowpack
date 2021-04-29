import { a as t$1 } from './config-b3bf08ce.js';
import { s as s$1, U, C as U$1, bZ as pt, ak as d, bp as u$1, cm as M, A as k, cu as I } from './Identifiable-c8406192.js';
import { J } from './projection-1aa78979.js';
import { a } from './number-cadfd251.js';
import { t as t$3, a as t$4 } from './OptimizedFeatureSet-d6270f6b.js';
import { e as e$1 } from './FieldsIndex-d0d5f38b.js';
import { t as t$2 } from './json-79b5edc1.js';
import { i as i$1 } from './clientSideDefaults-97483396.js';
import { p } from './quantizationUtils-a3fdf3fa.js';
import { u as u$2 } from './FeatureStore-f508b0b3.js';
import { Z } from './QueryEngine-3966407a.js';
import './vec3f64-a6795633.js';
import './vec3-ae5ae182.js';
import './unitUtils-1b0a3531.js';
import './mat4-3619c4da.js';
import './defaultsJSON-375e89aa.js';
import './jsonUtils-d762dc00.js';
import './aaBoundingRect-a3d841c1.js';
import './featureConversionUtils-6830a580.js';
import './aaBoundingBox-5c7868ad.js';
import './PooledRBush-3f951040.js';
import './quickselect-558f6195.js';
import './_commonjsHelpers-268aa74f.js';
import './centroid-a0ceb19b.js';
import './workers-31c2755c.js';
import './watchUtils-880dbce7.js';
import './normalizeUtils-2bbe7974.js';
import './MemCache-1f56f5a2.js';
import './QueryEngineCapabilities-e92c3f75.js';
import './ItemCache-717f7581.js';
import './WhereClause-c9442cc5.js';
import './timeSupport-fe814ad8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const n=/^\s*"([\S\s]*)"\s*$/,t=/""/g,e="\n",o=[","," ",";","|","\t"];function r(n,t){const e={},o=n.length;for(let r=0;r<o;r++)e[n[r]]=t[r];return e}function*i(n,t,e){let o=0;for(;o<=n.length;){const r=n.indexOf(t,o),i=n.substring(o,r>-1?r:void 0);o+=i.length+1,e&&!i.trim()||(yield i);}}function c(n){const t=n.includes("\r\n")?"\r\n":e;return i(n,t,!0)}function f(n,t){return i(n,t,!1)}function s(n){const t=n.trim();let e=0,r="";for(const i of o){const n=t.split(i).length;n>e&&(e=n,r=i);}return ""===r?null:r}function*u(o,i,c){let s="",u="",d=0,x=[];n:for(;;){const{value:g,done:h}=o.next();if(h)return;const p=f(g,c);t:for(;;){const{value:e,done:o}=p.next();if(o)break t;if(s+=u+e,u="",d+=l(e),d%2==0){if(d>0){const e=n.exec(s);if(!e){x=[],s="",d=0;continue n}x.push(e[1].replace(t,'"'));}else x.push(s);s="",d=0;}else u=c;}0===d?(yield r(i,x),x=[]):u=e;}}function l(n){let t=0,e=0;for(e=n.indexOf('"',e);e>=0;)t++,e=n.indexOf('"',e+1);return t}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const b=i$1("esriGeometryPoint"),T=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong"],j=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point-y"],w=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point-x"],E=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,D=["csv"],q=[0,0];class S{constructor(e,t){this.x=e,this.y=t;}}const v=function(){const e=a(),t=new RegExp("^"+e.regexp+"$"),i=new RegExp("["+e.group+"\\s\\xa0]","g"),n=e.factor;return function(r){const o=t.exec(r);if(e.factor=n,!o)return NaN;let l=o[1];if(!o[1]){if(!o[2])return NaN;l=o[2],e.factor*=-1;}return l=l.replace(i,"").replace(e.decimal,"."),+l*e.factor}}(),C="isInteger"in Number?Number.isInteger:e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e;class O{constructor(){this._fieldsIndex=null,this._queryEngine=null;}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=null,this._fieldsIndex=null;}async load(e,t={}){const[i]=await Promise.all([this._fetch(e.url,t),this._checkProjection(t&&e.parsing&&e.parsing.spatialReference)]),n=this._parse(i,e);if(this._queryEngine=this._createQueryEngine(i,n),n.layerDefinition.extent=this._queryEngine.fullExtent,n.layerDefinition.timeInfo){const{start:e,end:t}=this._queryEngine.timeExtent;n.layerDefinition.timeInfo.timeExtent=[e,t];}return n}async applyEdits(){throw new s$1("csv-source:editing-not-supported","applyEdits() is not supported on CSVLayer")}queryFeatures(e={},t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e={},t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e={},t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e={},t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}async _fetch(e,n){if(!e)throw new s$1("csv-source:invalid-source","url not defined");const r=U(e);return (await U$1(r.path,{query:r.query,responseType:"text",signal:n.signal})).data}_parse(e,i){const r=i.parsing||{},o={columnDelimiter:r.columnDelimiter,layerDefinition:null,locationInfo:{latitudeFieldName:r.latitudeField,longitudeFieldName:r.longitudeField}},l=c(e);let{value:s$2}=l.next();if(!s$2)throw new s$1("csv","CSV is empty",{csv:e});if(s$2=s$2.trim(),!r.columnDelimiter){const e=s(s$2);if(!e)throw new s$1("csv-source:invalid-delimiter","Unable to detect the delimiter from CSV");o.columnDelimiter=e;}const a=s$2.split(o.columnDelimiter),d=o.layerDefinition={name:pt(i.url,D)||"csv",drawingInfo:b,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:r.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:r.spatialReference||{wkid:102100}}};if(!r.latitudeField||!r.longitudeField){const e=this._inferLocationInfo(a);if(!r.longitudeField&&!e.longitudeFieldName||!r.latitudeField&&!e.latitudeFieldName)throw new s$1("csv","Unable to identify latitudeField and/or longitudeField from CSV");o.locationInfo={longitudeFieldName:r.longitudeField||e.longitudeFieldName,latitudeFieldName:r.latitudeField||e.latitudeFieldName};}const u=this._inferFields(l,o.columnDelimiter,a,o.locationInfo);if(r.fields&&r.fields.length){const e=new Map;for(const t of r.fields)e.set(t.name.toLowerCase(),t);for(const t of u){const i=e.get(t.name.toLowerCase());if(i){const e=t.name;Object.assign(t,i),t.name=e;}}}d.fields=u;if(!d.fields.some((e=>"esriFieldTypeOID"===e.type&&(d.objectIdField=e.name,!0)))){const e={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};d.objectIdField=e.name,d.fields.unshift(e);}if(this._fieldsIndex=new e$1(d.fields),d.timeInfo){const e=d.timeInfo;if(e.startTimeField){const t=this._fieldsIndex.get(e.startTimeField);t?(e.startTimeField=t.name,t.type="esriFieldTypeDate"):e.startTimeField=null;}if(e.endTimeField){const t=this._fieldsIndex.get(e.endTimeField);t?(e.endTimeField=t.name,t.type="esriFieldTypeDate"):e.endTimeField=null;}if(e.trackIdField){const t=this._fieldsIndex.get(e.trackIdField);e.trackIdField=t?t.name:null;}e.startTimeField||e.endTimeField||(d.timeInfo=null);}return o}_inferLocationInfo(e){let t=null,i=null;const n=t=>e.find((e=>e.toLowerCase()===t));return w.some((e=>(t=n(e),!!t))),j.some((e=>(i=n(e),!!i))),{longitudeFieldName:t,latitudeFieldName:i}}_inferFields(e,t,i,n){const r=[],o=u(e,i,t),l=[];e:for(;l.length<10;){const{value:e,done:t}=o.next();if(t)break e;l.push(e);}for(const s of i)if(s===n.longitudeFieldName||s===n.latitudeFieldName)r.push({name:s,type:"esriFieldTypeDouble",alias:s});else {const e=l.map((e=>e[s])),t=this._inferFieldType(e),i={name:s,type:null,alias:s};switch(t){case"integer":i.type="esriFieldTypeInteger";break;case"double":i.type="esriFieldTypeDouble";break;case"date":i.type="esriFieldTypeDate",i.length=36;break;default:i.type="esriFieldTypeString",i.length=255;}r.push(i);}return r}_inferFieldType(e){if(!e.length)return "string";const t=/[^+-.,0-9]/;return e.map((e=>{let i=!1;if(""!==e){if(t.test(e))i=!0;else {let t=v(e);if(!isNaN(t))return /[.,]/.test(e)||!C(t)||t>214783647||t<-214783648?"double":"integer";if(-1===e.indexOf("E"))i=!0;else {if(t=Number(e),!isNaN(t))return "double";if(-1===e.indexOf(","))i=!0;else {if(e=e.replace(",","."),t=Number(e),!isNaN(t))return "double";i=!0;}}}if(i){if(!/^[-]?\d*[.,]?\d*$/.test(e)){const t=new Date(e);return this._isValidDate(t,e)?"date":"string"}return "string"}return "string"}})).reduce(((e,t)=>void 0===e||e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0))}_isValidDate(t,i){if(!t||"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))return !1;let n=!0;if(t$1("chrome")&&/\d+\W*$/.test(i)){const e=i.match(/[a-zA-Z]{2,}/);if(e){let t=!1,i=0;for(;!t&&i<=e.length;)t=!E.test(e[i]),i++;n=!t;}}return n}_createQueryEngine(e,t){const{latitudeFieldName:i,longitudeFieldName:n}=t.locationInfo,{objectIdField:l,fields:d$1,extent:c$1,timeInfo:p}=t.layerDefinition;let g=[];const F=[],_=new Set,b=new Set,j=[];for(const{name:r,type:o}of d$1)"esriFieldTypeDate"===o?_.add(r):T.indexOf(o)>-1&&b.add(r),r!==l&&j.push(r);let w=0;const E=c(e);E.next();const D=u(E,j,t.columnDelimiter);e:for(;;){const{value:e,done:t}=D.next();if(t)break e;const r=this._parseCoordinateValue(e[i]),o=this._parseCoordinateValue(e[n]);if(null!=o&&null!=r&&!isNaN(r)&&!isNaN(o)){e[i]=r,e[n]=o;for(const t in e)if(t!==i&&t!==n)if(_.has(t)){const i=new Date(e[t]);e[t]=this._isValidDate(i,e[t])?i.getTime():null;}else if(b.has(t)){const i=v(e[t]);isNaN(i)?e[t]=null:e[t]=i;}e[l]=w,w++,g.push(new S(o,r)),F.push(e);}}if(!d({wkid:4326},c$1.spatialReference))if(u$1(c$1.spatialReference))for(const r of g)[r.x,r.y]=M(r.x,r.y,q);else g=J(t$2,g,k.WGS84,c$1.spatialReference,null);const C=new u$2({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1}),O=new Z({fields:t.layerDefinition.fields,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:p,objectIdField:l,spatialReference:c$1.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:C}),V=[];for(let r=0;r<g.length;r++){const{x:e,y:t}=g[r],i=F[r];i[l]=r+1,V.push(new t$3(new t$4([],[e,t]),i,null,i[l]));}return C.addMany(V),O}_parseCoordinateValue(e){if(null==e||""===e)return null;let t=v(e);return (isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t}async _checkProjection(e){try{await p(I,e);}catch{throw new s$1("csv-layer","Projection not supported")}}}

export default O;
export { j as csvLatitudeFieldNames, w as csvLongitudeFieldNames };