import { t as t$2 } from './pbfQueryUtils-fdd38078.js';
import { n } from './compilerUtils-006be997.js';
import { A as k } from './Identifiable-c8406192.js';
import { e } from './uid-7967dd4d.js';
import { y as y$1 } from './Field-e6fe6b12.js';
import { a as ae, e as ee } from './featureConversionUtils-6830a580.js';
import { t as t$1 } from './zscale-209a474d.js';
import './config-b3bf08ce.js';
import { i } from './aaBoundingRect-a3d841c1.js';
import { a } from './aaBoundingBox-5c7868ad.js';
import './OptimizedFeatureSet-d6270f6b.js';
import './unitUtils-1b0a3531.js';
import './pbf-02a10316.js';
import './fieldUtils-a9f71c96.js';
import './fieldType-769fe7ff.js';
import './jsonUtils-d762dc00.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class j{constructor(e,t,s){this.uid=e,this.geometry=t,this.attributes=s,this.visible=!0,this.objectId=null,this.centroid=null;}}class N{constructor(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null;}}a();i();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function u(t,e){return e}function l(t,e,r,s){switch(r){case 0:return f(t,e+s,0);case 1:return "lowerLeft"===t.originPosition?f(t,e+s,1):y(t,e+s,1)}}function c(t,e,r,s){switch(r){case 2:return f(t,e,2);default:return l(t,e,r,s)}}function d(t,e,r,s){switch(r){case 2:return f(t,e,3);default:return l(t,e,r,s)}}function p(t,e,r,s){switch(r){case 3:return f(t,e,3);default:return c(t,e,r,s)}}function f({translate:t,scale:e},r,s){return t[s]+r*e[s]}function y({translate:t,scale:e},r,s){return t[s]-r*e[s]}class m{constructor(t){this.options=t,this.geometryTypes=["point","multipoint","polyline","polygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=u,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this.AttributesConstructor=function(){};}createFeatureResult(){return new N}finishFeatureResult(t){if(this.options.applyTransform&&(t.transform=null),this.AttributesConstructor=function(){},this.coordinateBuffer=null,this.lengths.length=0,!t.hasZ)return;const e=t$1(t.geometryType,this.options.sourceSpatialReference,t.spatialReference);if(e)for(const r of t.features)e(r.geometry);}createSpatialReference(){return new k}addField(t,e){t.fields.push(y$1.fromJSON(e));const r=t.fields.map((t=>t.name));this.AttributesConstructor=function(){for(const t of r)this[t]=null;};}addFeature(t,e){const r=this.options.maxStringAttributeLength?this.options.maxStringAttributeLength:0;if(r>0)for(const s in e.attributes){const t=e.attributes[s];"string"==typeof t&&t.length>r&&(e.attributes[s]="");}t.features.push(e);}addQueryGeometry(t,e){const{queryGeometry:r,queryGeometryType:s}=e,n=ae(r.clone(),r,!1,!1,this.transform),a=ee(n,s,!1,!1);let h=null;switch(s){case"esriGeometryPoint":h="point";break;case"esriGeometryPolygon":h="polygon";break;case"esriGeometryPolyline":h="polyline";break;case"esriGeometryMultipoint":h="multipoint";}a.type=h,t.queryGeometryType=s,t.queryGeometry=a;}prepareFeatures(e){switch(this.transform=e.transform,this.options.applyTransform&&e.transform&&(this.applyTransform=this.deriveApplyTransform(e)),this.vertexDimension=2,e.hasZ&&this.vertexDimension++,e.hasM&&this.vertexDimension++,e.geometryType){case"point":this.addCoordinate=(t,e,r)=>this.addCoordinatePoint(t,e,r),this.createGeometry=t=>this.createPointGeometry(t);break;case"polygon":this.addCoordinate=(t,e,r)=>this.addCoordinatePolygon(t,e,r),this.createGeometry=t=>this.createPolygonGeometry(t);break;case"polyline":this.addCoordinate=(t,e,r)=>this.addCoordinatePolyline(t,e,r),this.createGeometry=t=>this.createPolylineGeometry(t);break;case"multipoint":this.addCoordinate=(t,e,r)=>this.addCoordinateMultipoint(t,e,r),this.createGeometry=t=>this.createMultipointGeometry(t);break;default:n(e.geometryType);}}createFeature(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,new j(e(),null,new this.AttributesConstructor)}allocateCoordinates(){const t=this.lengths.reduce(((t,e)=>t+e),0);this.coordinateBuffer=new Float64Array(t*this.vertexDimension),this.coordinateBufferPtr=0;}addLength(t,e,r){0===this.lengths.length&&(this.toAddInCurrentPath=e),this.lengths.push(e);}createPointGeometry(t){const e={type:"point",x:0,y:0,spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM};return e.hasZ&&(e.z=0),e.hasM&&(e.m=0),e}addCoordinatePoint(t,e,r){switch(e=this.applyTransform(this.transform,e,r,0),r){case 0:t.x=e;break;case 1:t.y=e;break;case 2:t.hasZ?t.z=e:t.m=e;break;case 3:t.m=e;}}transformPathLikeValue(t,e){let r=0;return e<=1&&(r=this.previousCoordinate[e],this.previousCoordinate[e]+=t),this.applyTransform(this.transform,t,e,r)}addCoordinatePolyline(t,e,r){this.dehydratedAddPointsCoordinate(t.paths,e,r);}addCoordinatePolygon(t,e,r){this.dehydratedAddPointsCoordinate(t.rings,e,r);}addCoordinateMultipoint(t,e,r){0===r&&t.points.push([]);const s=this.transformPathLikeValue(e,r);t.points[t.points.length-1].push(s);}createPolygonGeometry(t){return {type:"polygon",rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}createPolylineGeometry(t){return {type:"polyline",paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}createMultipointGeometry(t){return {type:"multipoint",points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}dehydratedAddPointsCoordinate(t,e,r){0===r&&0==this.toAddInCurrentPath--&&(t.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);const s=this.transformPathLikeValue(e,r),o=t[t.length-1];0===r&&o.push(new Float64Array(this.coordinateBuffer.buffer,this.coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT,this.vertexDimension)),this.coordinateBuffer[this.coordinateBufferPtr++]=s;}deriveApplyTransform(t){const{hasZ:e,hasM:r}=t;return e&&r?p:e?c:r?d:l}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class t{_parseFeatureQuery(t){const s=t$2(t.buffer,new m(t.options)),o={...s,spatialReference:s.spatialReference.toJSON(),fields:s.fields?s.fields.map((e=>e.toJSON())):void 0};return Promise.resolve(o)}}function s(){return new t}

export default s;
