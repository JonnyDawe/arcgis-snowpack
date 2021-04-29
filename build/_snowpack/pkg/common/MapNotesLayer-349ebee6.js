import { e, y, i, A as k$1, L, M, J as t$1, s as s$1, P as r, ak as d$1, aU as t$2, a1 as e$1, o as o$1 } from './Identifiable-c8406192.js';
import { y as y$4, o } from './config-b3bf08ce.js';
import { u as u$1, f as d, y as y$2, m as y$3 } from './symbols-a702d148.js';
import { n as n$1 } from './Graphic-9f79c7db.js';
import { b } from './Layer-d22ad00d.js';
import { l as l$1 } from './MultiOriginJSONSupport-29c9a66e.js';
import { n as nn, V, D, H } from './projection-1aa78979.js';
import { x, l } from './OperationalLayer-d48a5914.js';
import { L as L$1 } from './normalizeUtils-2bbe7974.js';
import { y as y$1 } from './Field-e6fe6b12.js';
import { t } from './BlendLayer-f2f3b180.js';
import { u as u$2 } from './PortalLayer-8f26d9e1.js';
import { s } from './ScaleRangeLayer-8feef0dd.js';
import { k as ke } from './FeatureLayer-346f29ad.js';
import { m, u } from './GraphicsCollection-afd60f67.js';
import { n as n$2 } from './objectIdUtils-28a385ba.js';
import './fieldUtils-a9f71c96.js';
import './persistableUrlUtils-b4be11a9.js';
import './jsonUtils-d762dc00.js';
import './PopupTemplate-77ad81c4.js';
import './uid-7967dd4d.js';
import './vec3f64-a6795633.js';
import './vec3-ae5ae182.js';
import './unitUtils-1b0a3531.js';
import './mat4-3619c4da.js';
import './TimeExtent-155cb8a4.js';
import './lengthUtils-cb1a7b62.js';
import './fieldType-769fe7ff.js';
import './arcgisLayerUrl-d85d6d65.js';
import './HeightModelInfo-f665a73c.js';
import './UniqueValueRenderer-6eda9445.js';
import './ColorStop-27e1a5ee.js';
import './styleUtils-062f64a7.js';
import './sizeVariableUtils-33233df0.js';
import './visualVariableUtils-66f67c57.js';
import './compilerUtils-006be997.js';
import './diffUtils-e1cd943c.js';
import './jsonUtils-abe1bd07.js';
import './LRUCache-9b61e325.js';
import './MemCache-1f56f5a2.js';
import './FieldsIndex-d0d5f38b.js';
import './FeatureSet-ceb33ccf.js';
import './workers-31c2755c.js';
import './watchUtils-880dbce7.js';
import './zscale-209a474d.js';
import './queryZScale-3f81db56.js';
import './ArcGISService-7a5cc3ad.js';
import './FeatureType-a62beea1.js';
import './RefreshableLayer-cf71b273.js';
import './TimeInfo-190b35f7.js';
import './TemporalLayer-c333d449.js';
import './labelingInfo-21494a5d.js';
import './LabelClass-c61f8b70.js';
import './labelUtils-5176895f.js';
import './defaults-91b05a2c.js';
import './defaultsJSON-375e89aa.js';
import './fieldProperties-b389086f.js';
import './Query-448be42b.js';
import './styleUtils-f2703dfb.js';
import './popupUtils-5e9c2795.js';
import './RelationshipQuery-1cbf03e3.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let n=class extends(t(s(b))){constructor(r){super(r),this.elevationInfo=null,this.graphics=new m,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1;}destroy(){this.removeAll(),this.graphics.destroy();}add(r){return this.graphics.add(r),this}addMany(r){return this.graphics.addMany(r),this}removeAll(){return this.graphics.removeAll(),this}remove(r){this.graphics.remove(r);}removeMany(r){this.graphics.removeMany(r);}on(r,e){return super.on(r,e)}graphicChanged(r){this.emit("graphic-update",r);}};e([y({type:x})],n.prototype,"elevationInfo",void 0),e([y(u())],n.prototype,"graphics",void 0),e([y({type:["show","hide"]})],n.prototype,"listMode",void 0),e([y()],n.prototype,"screenSizePerspectiveEnabled",void 0),e([y({readOnly:!0})],n.prototype,"type",void 0),e([y({constructOnly:!0})],n.prototype,"internal",void 0),n=e([i("esri.layers.GraphicsLayer")],n);var h=n;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function F(e){return e.layers.some((e=>null!=e.layerDefinition.visibilityField))}const G=new y$1({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),_=new y$1({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let P=class extends h{constructor(){super(...arguments),this.visibilityMode="inherited";}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",(e=>{e.item.sourceLayer=this.layer;})),this.graphics.on("after-remove",(e=>{e.item.sourceLayer=null;}));}get sublayers(){return this.graphics}};e([y({readOnly:!0})],P.prototype,"sublayers",null),e([y()],P.prototype,"layer",void 0),e([y({readOnly:!0})],P.prototype,"visibilityMode",void 0),P=e([i("esri.layers.MapNotesLayer.MapNotesSublayer")],P);const k=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",layerId:"polygonLayer",title:"Polygons",identifyingSymbol:(new u$1).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",layerId:"polylineLayer",title:"Polylines",identifyingSymbol:(new d).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",layerId:"multipointLayer",title:"Multipoints",identifyingSymbol:(new y$2).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"pointLayer",title:"Points",identifyingSymbol:(new y$2).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"textLayer",title:"Text",identifyingSymbol:(new y$3).toJSON()}];let z=class extends(t(s(l(u$2(l$1(b)))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.minScale=0,this.maxScale=0,this.spatialReference=k$1.WGS84,this.sublayers=new L(k.map((e=>new P({id:e.layerId,title:e.title,layer:this})))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited";}readCapabilities(e,t,r){return {operations:{supportsMapNotesEditing:!F(t)&&"portal-item"!==(null==r?void 0:r.origin)}}}readFeatureCollections(e,t,r){if(!F(t))return null;const o=t.layers.map((e=>{const t=new ke;return t.read(e,r),t}));return new L({items:o})}readLegacyfeatureCollectionJSON(e,r){return F(r)?y$4(r.featureCollection):null}readFullExtent(e,t){if(!t.layers.length)return new M({xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:k$1.WGS84});const r=k$1.fromJSON(t.layers[0].layerDefinition.spatialReference);return t.layers.reduce(((e,t)=>{const r=t.layerDefinition.extent;return r?M.fromJSON(r).union(e):e}),new M({spatialReference:r}))}readMinScale(e,t){for(const r of t.layers)if(null!=r.layerDefinition.minScale)return r.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const r of t.layers)if(null!=r.layerDefinition.maxScale)return r.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?k$1.fromJSON(t.layers[0].layerDefinition.spatialReference):k$1.WGS84}readSublayers(e,t,r){if(F(t))return null;const o=[];for(let l=0;l<t.layers.length;l++){var i;const{layerDefinition:e,featureSet:r}=t.layers[l],a=null!=(i=e.geometryType)?i:r.geometryType,n=k.find((t=>{var r,o,i;return a===t.geometryTypeJSON&&(null==(r=e.drawingInfo)||null==(o=r.renderer)||null==(i=o.symbol)?void 0:i.type)===t.identifyingSymbol.type}));if(n){const t=new P({id:n.layerId,title:e.name,layer:this,graphics:r.features.map((({geometry:e,symbol:t,attributes:r,popupInfo:o})=>n$1.fromJSON({attributes:r,geometry:e,symbol:t,popupTemplate:o})))});o.push(t);}}return new L(o)}writeSublayers(e,t,l,a){const{minScale:n,maxScale:s}=this;if(t$1(e))return;const p=e.some((e=>e.graphics.length>0));if(!this.capabilities.operations.supportsMapNotesEditing){var m;if(p)null==a||null==(m=a.messages)||m.push(new s$1("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"));return}const u=[];let c=this.spatialReference.toJSON();e:for(const r$1 of e)for(const e of r$1.graphics)if(r(e.geometry)){c=e.geometry.spatialReference.toJSON();break e}for(const r of k){const t=e.find((e=>r.layerId===e.id));this._writeMapNoteSublayer(u,t,r,n,s,c,a);}o("featureCollection.layers",u,t);}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,r){"featureCollection"in e&&(e=y$4(e),Object.assign(e,e.featureCollection)),super.read(e,r);}async beforeSave(){if(t$1(this.sublayers))return;let e=null;const t=[];for(const o of this.sublayers)for(const r$1 of o.graphics)if(r(r$1.geometry)){const o=r$1.geometry;e?d$1(o.spatialReference,e)||(nn(o.spatialReference,e)||V()||await D(),r$1.geometry=H(o,e)):e=o.spatialReference,t.push(r$1);}const r$1=await L$1(t.map((e=>e.geometry)));t.forEach(((e,t)=>e.geometry=r$1[t]));}_findSublayer(e){var t,r;return t$1(this.sublayers)?null:null!=(t=null==(r=this.sublayers)?void 0:r.find((t=>t.id===e)))?t:null}_writeMapNoteSublayer(e,r,i,l,a,n,s){const p=[];if(!t$1(r)){for(const e of r.graphics)this._writeMapNote(p,e,i.geometryType,s);this._normalizeObjectIds(p,G),e.push({layerDefinition:{name:r.title,drawingInfo:{renderer:{type:"simple",symbol:y$4(i.identifyingSymbol)}},geometryType:i.geometryTypeJSON,minScale:l,maxScale:a,objectIdField:"OBJECTID",fields:[G.toJSON(),_.toJSON()],spatialReference:n},featureSet:{features:p,geometryType:i.geometryTypeJSON}});}}_writeMapNote(e,t,r$1,l){if(t$1(t))return;const{geometry:a,symbol:s,popupTemplate:p}=t;if(t$1(a))return;var y,m;if(a.type!==r$1)return void(null==l||null==(y=l.messages)||y.push(new t$2("map-notes-layer:invalid-geometry-type",`Geometry "${a.type}" cannot be saved in "${r$1}" layer`,{graphic:t})));if(t$1(s))return void(null==l||null==(m=l.messages)||m.push(new t$2("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t})));const u={attributes:{...t.attributes},geometry:a.toJSON(),symbol:s.toJSON()};r(p)&&(u.popupInfo=p.toJSON()),e.push(u);}_normalizeObjectIds(e,t){const r=t.name;let o=n$2(r,e)+1;const i=new Set;for(const l of e){l.attributes||(l.attributes={});const{attributes:e}=l;(null==e[r]||i.has(e[r]))&&(e[r]=o++),i.add(e[r]);}}};e([y({readOnly:!0})],z.prototype,"capabilities",void 0),e([e$1(["portal-item","web-map"],"capabilities",["layers"])],z.prototype,"readCapabilities",null),e([y({readOnly:!0})],z.prototype,"featureCollections",void 0),e([e$1(["web-map","portal-item"],"featureCollections",["layers"])],z.prototype,"readFeatureCollections",null),e([y({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],z.prototype,"featureCollectionJSON",void 0),e([e$1(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],z.prototype,"readLegacyfeatureCollectionJSON",null),e([y({readOnly:!0,json:{read:!1,write:{enabled:!0,ignoreOrigin:!0}}})],z.prototype,"featureCollectionType",void 0),e([y({json:{write:!1}})],z.prototype,"fullExtent",void 0),e([e$1(["web-map","portal-item"],"fullExtent",["layers"])],z.prototype,"readFullExtent",null),e([y({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return {enabled:null!=this.featureCollectionJSON}}}}}}})],z.prototype,"legendEnabled",void 0),e([y({type:["show","hide"]})],z.prototype,"listMode",void 0),e([y({type:Number,nonNullable:!0,json:{write:!1}})],z.prototype,"minScale",void 0),e([e$1(["web-map","portal-item"],"minScale",["layers"])],z.prototype,"readMinScale",null),e([y({type:Number,nonNullable:!0,json:{write:!1}})],z.prototype,"maxScale",void 0),e([e$1(["web-map","portal-item"],"maxScale",["layers"])],z.prototype,"readMaxScale",null),e([y({readOnly:!0})],z.prototype,"multipointLayer",null),e([y({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],z.prototype,"operationalLayerType",void 0),e([y({readOnly:!0})],z.prototype,"pointLayer",null),e([y({readOnly:!0})],z.prototype,"polygonLayer",null),e([y({readOnly:!0})],z.prototype,"polylineLayer",null),e([y({type:k$1})],z.prototype,"spatialReference",void 0),e([e$1(["web-map","portal-item"],"spatialReference",["layers"])],z.prototype,"readSpatialReference",null),e([y({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],z.prototype,"sublayers",void 0),e([e$1("web-map","sublayers",["layers"])],z.prototype,"readSublayers",null),e([o$1("web-map","sublayers")],z.prototype,"writeSublayers",null),e([y({readOnly:!0})],z.prototype,"textLayer",null),e([y()],z.prototype,"title",void 0),e([y({readOnly:!0,json:{read:!1}})],z.prototype,"type",void 0),z=e([i("esri.layers.MapNotesLayer")],z);var B=z;

export default B;
