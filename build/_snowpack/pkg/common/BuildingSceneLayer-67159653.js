import { z as r, e as e$1, y as y$1, a1 as e$2, N, i as i$3, n as n$3, k as f, aj as n$4, P as r$1, C as U, J as t$3, s as s$1, M, A as k, r as r$2, aM as t$4, L, aU as t$5, cK as i$4, a as a$5, a$ as o, aX as D, bR as w, d as n$7 } from './Identifiable-c8406192.js';
import { y as y$2 } from './config-b3bf08ce.js';
import { l as l$9 } from './CollectionFlattener-5ff807fc.js';
import { b } from './Layer-d22ad00d.js';
import { O, l as l$8 } from './MultiOriginJSONSupport-29c9a66e.js';
import { u as u$5, x, c as c$6, l as l$7, v, m as m$5 } from './OperationalLayer-d48a5914.js';
import { p as p$6 } from './ArcGISService-7a5cc3ad.js';
import { u as u$7 } from './PortalLayer-8f26d9e1.js';
import { s as s$3 } from './ScaleRangeLayer-8feef0dd.js';
import { M as M$1 } from './PopupTemplate-77ad81c4.js';
import './UniqueValueRenderer-6eda9445.js';
import { n as n$6 } from './jsonUtils-abe1bd07.js';
import { e as e$3 } from './FieldsIndex-d0d5f38b.js';
import { l as l$6 } from './fieldProperties-b389086f.js';
import { a as a$4 } from './popupUtils-5e9c2795.js';
import { R as R$1 } from './Query-448be42b.js';
import { k as ke } from './FeatureLayer-346f29ad.js';
import { s, l as l$a } from './FetchAssociatedFeatureLayer-5b2ea6a3.js';
import { n as n$5, R as R$2 } from './SceneService-e53eb3f3.js';
import { s as s$2, l as l$5, u as u$6, m as m$4 } from './I3SLayerDefinitions-e96db853.js';
import { z as t$6 } from './symbols-a702d148.js';
import './persistableUrlUtils-b4be11a9.js';
import './TimeExtent-155cb8a4.js';
import './fieldUtils-a9f71c96.js';
import './lengthUtils-cb1a7b62.js';
import './unitUtils-1b0a3531.js';
import './arcgisLayerUrl-d85d6d65.js';
import './ColorStop-27e1a5ee.js';
import './styleUtils-062f64a7.js';
import './sizeVariableUtils-33233df0.js';
import './visualVariableUtils-66f67c57.js';
import './compilerUtils-006be997.js';
import './Graphic-9f79c7db.js';
import './jsonUtils-d762dc00.js';
import './uid-7967dd4d.js';
import './diffUtils-e1cd943c.js';
import './LRUCache-9b61e325.js';
import './MemCache-1f56f5a2.js';
import './Field-e6fe6b12.js';
import './fieldType-769fe7ff.js';
import './HeightModelInfo-f665a73c.js';
import './FeatureSet-ceb33ccf.js';
import './workers-31c2755c.js';
import './watchUtils-880dbce7.js';
import './zscale-209a474d.js';
import './queryZScale-3f81db56.js';
import './BlendLayer-f2f3b180.js';
import './FeatureType-a62beea1.js';
import './RefreshableLayer-cf71b273.js';
import './TimeInfo-190b35f7.js';
import './TemporalLayer-c333d449.js';
import './labelingInfo-21494a5d.js';
import './LabelClass-c61f8b70.js';
import './labelUtils-5176895f.js';
import './defaults-91b05a2c.js';
import './defaultsJSON-375e89aa.js';
import './styleUtils-f2703dfb.js';
import './RelationshipQuery-1cbf03e3.js';
import './resourceUtils-9c620d32.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let l$4=class extends(r(O)){constructor(r){super(r),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.visible=!0,this.opacity=1;}readTitle(r,o){return "string"==typeof o.alias?o.alias:"string"==typeof o.name?o.name:""}readIdOnlyOnce(r){return -1!==this.id?this.id:"number"==typeof r?r:void 0}};e$1([y$1({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],l$4.prototype,"title",void 0),e$1([e$2("service","title",["alias","name"])],l$4.prototype,"readTitle",null),e$1([y$1()],l$4.prototype,"layer",void 0),e$1([y$1({type:N,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],l$4.prototype,"id",void 0),e$1([e$2("service","id")],l$4.prototype,"readIdOnlyOnce",null),e$1([y$1(u$5(String))],l$4.prototype,"modelName",void 0),e$1([y$1(u$5(Boolean))],l$4.prototype,"isEmpty",void 0),e$1([y$1({type:Boolean,json:{name:"visibility",write:!0}})],l$4.prototype,"visible",void 0),e$1([y$1({type:Number,json:{write:!0}})],l$4.prototype,"opacity",void 0),l$4=e$1([i$3("esri.layers.buildingSublayers.BuildingSublayer")],l$4);var n$2=l$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const P$1=n$3.getLogger("esri.layers.buildingSublayers.BuildingComponentSublayer"),E$1=l$6();let Q=class extends(f.LoadableMixin(n$4(n$2))){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.fields=null,this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object";}get parsedUrl(){return this.layer?{path:`${this.layer.parsedUrl.path}/sublayers/${this.id}`,query:this.layer.parsedUrl.query}:null}get fieldsIndex(){return new e$3(this.fields)}readAssociatedLayer(e,t){const o=this.layer.associatedFeatureServiceItem,s=t.associatedLayerID;return r$1(o)&&"number"==typeof s?new ke({portalItem:o,layerId:s}):null}get objectIdField(){if(null!=this.fields)for(const e of this.fields)if("oid"===e.type)return e.name;return null}get displayField(){return r$1(this.associatedLayer)?this.associatedLayer.displayField:null}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const t=r$1(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t).then((()=>{this.indexInfo=n$5(this.parsedUrl.path,this.rootNode,this.nodePages,P$1,t);}))),Promise.resolve(this)}createPopupTemplate(e){return a$4(this,e)}async _fetchService(e){const r=(await U(this.parsedUrl.path,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(r,{origin:"service",url:this.parsedUrl});}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){const r=this.getField(e);return r&&r.domain?r.domain:null}get geometryType(){return "3d-object"===this.layerType?"mesh":"point"}get profile(){return "3d-object"===this.layerType?"mesh-pyramids":"points"}get capabilities(){const e=r$1(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:s,{query:t,data:{supportsZ:o,supportsM:s$1,isVersioned:i}}=e;return {query:t,data:{supportsZ:o,supportsM:s$1,isVersioned:i}}}createQuery(){const e=new R$1;return "mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,r){return this._getAssociatedLayerForQuery().then((t=>t.queryExtent(e||this.createQuery(),r)))}queryFeatureCount(e,r){return this._getAssociatedLayerForQuery().then((t=>t.queryFeatureCount(e||this.createQuery(),r)))}queryFeatures(e,r){return this._getAssociatedLayerForQuery().then((t=>t.queryFeatures(e||this.createQuery(),r))).then((e=>{if(e&&e.features)for(const r of e.features)r.layer=this.layer,r.sourceLayer=this;return e}))}queryObjectIds(e,r){return this._getAssociatedLayerForQuery().then((t=>t.queryObjectIds(e||this.createQuery(),r)))}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:r$1(this.associatedLayer)}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return r$1(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),t$3(this.associatedLayer))throw new s$1("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load();}catch(e){throw new s$1("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};e$1([y$1({readOnly:!0})],Q.prototype,"parsedUrl",null),e$1([y$1({type:s$2,readOnly:!0})],Q.prototype,"nodePages",void 0),e$1([y$1({type:[l$5],readOnly:!0})],Q.prototype,"materialDefinitions",void 0),e$1([y$1({type:[u$6],readOnly:!0})],Q.prototype,"textureSetDefinitions",void 0),e$1([y$1({type:[m$4],readOnly:!0})],Q.prototype,"geometryDefinitions",void 0),e$1([y$1({readOnly:!0})],Q.prototype,"serviceUpdateTimeStamp",void 0),e$1([y$1({readOnly:!0})],Q.prototype,"store",void 0),e$1([y$1({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],Q.prototype,"rootNode",void 0),e$1([y$1({readOnly:!0})],Q.prototype,"attributeStorageInfo",void 0),e$1([y$1(E$1.fields)],Q.prototype,"fields",void 0),e$1([y$1({readOnly:!0})],Q.prototype,"fieldsIndex",null),e$1([y$1({readOnly:!0,type:ke})],Q.prototype,"associatedLayer",void 0),e$1([e$2("service","associatedLayer",["associatedLayerID"])],Q.prototype,"readAssociatedLayer",null),e$1([y$1(E$1.outFields)],Q.prototype,"outFields",void 0),e$1([y$1({type:String,readOnly:!0})],Q.prototype,"objectIdField",null),e$1([y$1({readOnly:!0,type:String,json:{read:!1}})],Q.prototype,"displayField",null),e$1([y$1({readOnly:!0,type:M,aliasOf:"layer.fullExtent"})],Q.prototype,"fullExtent",void 0),e$1([y$1({readOnly:!0,type:k,aliasOf:"layer.spatialReference"})],Q.prototype,"spatialReference",void 0),e$1([y$1({readOnly:!0,aliasOf:"layer.version"})],Q.prototype,"version",void 0),e$1([y$1({readOnly:!0,type:x,aliasOf:"layer.elevationInfo"})],Q.prototype,"elevationInfo",void 0),e$1([y$1({readOnly:!0,type:Number,aliasOf:"layer.minScale"})],Q.prototype,"minScale",void 0),e$1([y$1({readOnly:!0,type:Number,aliasOf:"layer.maxScale"})],Q.prototype,"maxScale",void 0),e$1([y$1({type:["hide","show"],json:{write:!0}})],Q.prototype,"listMode",void 0),e$1([y$1({types:n$6,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],Q.prototype,"renderer",void 0),e$1([y$1({type:String,json:{origins:{service:{read:!1,write:!1}},read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression"}}})],Q.prototype,"definitionExpression",void 0),e$1([y$1(c$6)],Q.prototype,"popupEnabled",void 0),e$1([y$1({type:M$1,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],Q.prototype,"popupTemplate",void 0),e$1([y$1({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],Q.prototype,"normalReferenceFrame",void 0),e$1([y$1({readOnly:!0,json:{read:!1}})],Q.prototype,"defaultPopupTemplate",null),e$1([y$1({json:{write:!1}}),r$2(new t$4({"3DObject":"3d-object",Point:"point"}))],Q.prototype,"layerType",void 0),e$1([y$1()],Q.prototype,"geometryType",null),e$1([y$1()],Q.prototype,"profile",null),e$1([y$1({readOnly:!0,json:{read:!1}})],Q.prototype,"capabilities",null),Q=e$1([i$3("esri.layers.buildingSublayers.BuildingComponentSublayer")],Q);var R=Q;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var p$5;const a$3={type:L,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:l$3}}},read:!1}};function l$3(r,e,s){if(r&&Array.isArray(r))return new L(r.map((r=>{const e=y(r);if(e){const o=new e;return o.read(r,s),o}s&&s.messages&&r&&s.messages.push(new t$5("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(r.type||"unknown")+"' are not supported",{definition:r,context:s}));})))}let c$5=p$5=class extends n$2{constructor(r){super(r),this.type="building-group",this.listMode="show",this.sublayers=null;}loadAll(){return i$4(this,(r=>p$5.forEachSublayer(this.sublayers,(e=>{"building-group"!==e.type&&r(e);}))))}};function y(r){return "group"===r.layerType?c$5:R}e$1([y$1({type:["hide","show","hide-children"],json:{write:!0}})],c$5.prototype,"listMode",void 0),e$1([y$1(a$3)],c$5.prototype,"sublayers",void 0),c$5=p$5=e$1([i$3("esri.layers.buildingSublayers.BuildingGroupSublayer")],c$5),function(r){function e(r,o){r.forEach((r=>{o(r),"building-group"===r.type&&e(r.sublayers,o);}));}r.sublayersProperty=a$3,r.readSublayers=l$3,r.forEachSublayer=e;}(c$5||(c$5={}));var d$2=c$5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let e=class extends a$5{constructor(){super(...arguments),this.type=null;}};e$1([y$1({type:String,readOnly:!0,json:{write:!0}})],e.prototype,"type",void 0),e=e$1([i$3("esri.layers.support.BuildingFilterAuthoringInfo")],e);var p$4=e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var p$3;let i$2=p$3=class extends a$5{constructor(){super(...arguments),this.filterType=null,this.filterValues=null;}clone(){return new p$3({filterType:this.filterType,filterValues:y$2(this.filterValues)})}};e$1([y$1({type:String,json:{write:!0}})],i$2.prototype,"filterType",void 0),e$1([y$1({type:[String],json:{write:!0}})],i$2.prototype,"filterValues",void 0),i$2=p$3=e$1([i$3("esri.layers.support.BuildingFilterAuthoringInfoType")],i$2);var l$2=i$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var c$4;const l$1=L.ofType(l$2);let m$3=c$4=class extends a$5{clone(){return new c$4({filterTypes:y$2(this.filterTypes)})}};e$1([y$1({type:l$1,json:{write:!0}})],m$3.prototype,"filterTypes",void 0),m$3=c$4=e$1([i$3("esri.layers.support.BuildingFilterAuthoringInfoBlock")],m$3);var u$4=m$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var c$3;const l=L.ofType(u$4);let n$1=c$3=class extends p$4{constructor(){super(...arguments),this.type="checkbox";}clone(){return new c$3({filterBlocks:y$2(this.filterBlocks)})}};e$1([y$1({type:["checkbox"]})],n$1.prototype,"type",void 0),e$1([y$1({type:l,json:{write:!0}})],n$1.prototype,"filterBlocks",void 0),n$1=c$3=e$1([i$3("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],n$1);var u$3=n$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let t$2=class extends a$5{};e$1([y$1({readOnly:!0,json:{read:!1}})],t$2.prototype,"type",void 0),t$2=e$1([i$3("esri.layers.support.BuildingFilterMode")],t$2);var p$2=t$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var t$1;let p$1=t$1=class extends p$2{constructor(){super(...arguments),this.type="solid";}clone(){return new t$1}};e$1([y$1({type:["solid"],readOnly:!0,json:{write:!0}})],p$1.prototype,"type",void 0),p$1=t$1=e$1([i$3("esri.layers.support.BuildingFilterModeSolid")],p$1);var i$1=p$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var c$2;let m$2=c$2=class extends p$2{constructor(){super(...arguments),this.type="wire-frame",this.edges=null;}clone(){return new c$2({edges:y$2(this.edges)})}};e$1([r$2({wireFrame:"wire-frame"})],m$2.prototype,"type",void 0),e$1([y$1(t$6)],m$2.prototype,"edges",void 0),m$2=c$2=e$1([i$3("esri.layers.support.BuildingFilterModeWireFrame")],m$2);var a$2=m$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var t;let p=t=class extends p$2{constructor(){super(...arguments),this.type="x-ray";}clone(){return new t}};e$1([y$1({type:["x-ray"],readOnly:!0,json:{write:!0}})],p.prototype,"type",void 0),p=t=e$1([i$3("esri.layers.support.BuildingFilterModeXRay")],p);var i=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var a$1;const d$1={nonNullable:!0,types:{key:"type",base:p$2,typeMap:{solid:i$1,"wire-frame":a$2,"x-ray":i}},json:{read:r=>{switch(r&&r.type){case"solid":return i$1.fromJSON(r);case"wireFrame":return a$2.fromJSON(r);case"x-ray":return i.fromJSON(r);default:return}},write:{enabled:!0,isRequired:!0}}};let u$2=a$1=class extends a$5{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new i$1,this.title="";}clone(){return new a$1({filterExpression:this.filterExpression,filterMode:y$2(this.filterMode),title:this.title})}};e$1([y$1({type:String,json:{write:{enabled:!0,isRequired:!0}}})],u$2.prototype,"filterExpression",void 0),e$1([y$1(d$1)],u$2.prototype,"filterMode",void 0),e$1([y$1({type:String,json:{write:{enabled:!0,isRequired:!0}}})],u$2.prototype,"title",void 0),u$2=a$1=e$1([i$3("esri.layers.support.BuildingFilterBlock")],u$2);var c$1=u$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var u$1;const d=L.ofType(c$1);let m$1=u$1=class extends a$5{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=o(),this.name=null;}clone(){return new u$1({description:this.description,filterBlocks:y$2(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:y$2(this.filterAuthoringInfo)})}};e$1([y$1({type:String,json:{write:!0}})],m$1.prototype,"description",void 0),e$1([y$1({type:d,json:{write:{enabled:!0,isRequired:!0}}})],m$1.prototype,"filterBlocks",void 0),e$1([y$1({types:{key:"type",base:p$4,typeMap:{checkbox:u$3}},json:{read:r=>{switch(r&&r.type){case"checkbox":return u$3.fromJSON(r);default:return null}},write:!0}})],m$1.prototype,"filterAuthoringInfo",void 0),e$1([y$1({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],m$1.prototype,"id",void 0),e$1([y$1({type:String,json:{write:{enabled:!0,isRequired:!0}}})],m$1.prototype,"name",void 0),m$1=u$1=e$1([i$3("esri.layers.support.BuildingFilter")],m$1);var a=m$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const u=n$3.getLogger("esri.layers.support.BuildingSummaryStatistics");let n=class extends a$5{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null;}};e$1([y$1({type:String})],n.prototype,"fieldName",void 0),e$1([y$1({type:String})],n.prototype,"modelName",void 0),e$1([y$1({type:String})],n.prototype,"label",void 0),e$1([y$1({type:Number})],n.prototype,"min",void 0),e$1([y$1({type:Number})],n.prototype,"max",void 0),e$1([y$1({json:{read:r=>Array.isArray(r)&&(r.every((r=>"string"==typeof r))||r.every((r=>"number"==typeof r)))?r.slice():null}})],n.prototype,"mostFrequentValues",void 0),e$1([y$1({type:[Number]})],n.prototype,"subLayerIds",void 0),n=e$1([i$3("esri.layers.support.BuildingFieldStatistics")],n);let m=class extends(f.LoadableMixin(n$4(a$5))){constructor(){super(...arguments),this.url=null;}get fields(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(u.error("building summary statistics are not loaded"),null)}load(r){const t=r$1(r)?r.signal:null;return this.addResolvingPromise(this._fetchService(t)),Promise.resolve(this)}async _fetchService(r){const e=(await U(this.url,{query:{f:"json"},responseType:"json",signal:r})).data;this.read(e,{origin:"service"});}};e$1([y$1({constructOnly:!0,type:String})],m.prototype,"url",void 0),e$1([y$1({readOnly:!0,type:[n],json:{read:{source:"summary"}}})],m.prototype,"fields",null),m=e$1([i$3("esri.layers.support.BuildingSummaryStatistics")],m);var c=m;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const B=n$3.getLogger("esri.layers.BuildingSceneLayer"),E=L.ofType(a),_=y$2(d$2.sublayersProperty);_.json.origins["web-scene"]={type:[R],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},_.json.origins["portal-item"]={type:[R],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};let A=class extends(R$2(p$6(l$7(u$7(s$3(l$8(b))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new l$9({root:this,rootCollectionNames:["sublayers"],getChildrenFunction:e=>"building-group"===e.type?e.sublayers:null}),this.sublayers=null,this.sublayerOverrides=null,this.filters=new E,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.type="building-scene";}normalizeCtorArgs(e){return "string"==typeof e?{url:e}:e}destroy(){this.allSublayers.destroy();}readSublayers(e,r,t){const s=d$2.readSublayers(e,r,t);return d$2.forEachSublayer(s,(e=>e.layer=this)),this.sublayerOverrides&&(this.applySublayerOverrides(s,this.sublayerOverrides),this.sublayerOverrides=null),s}applySublayerOverrides(e,{overrides:r,context:t}){d$2.forEachSublayer(e,(e=>e.read(r.get(e.id),t)));}readSublayerOverrides(e,r){const t=new Map;for(const s of e)null!=s&&"object"==typeof s&&"number"==typeof s.id?t.set(s.id,s):r.messages.push(new s$1("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:s}));return {overrides:t,context:r}}writeSublayerOverrides(e,r,t){const s=[];d$2.forEachSublayer(this.sublayers,(e=>{const r=e.write({},t);Object.keys(r).length>1&&s.push(r);})),s.length>0&&(r.sublayers=s);}writeUnappliedOverrides(e,t){t.sublayers=[],e.overrides.forEach((e=>{t.sublayers.push(y$2(e));}));}write(e,r){return e=super.write(e,r),!r||"web-scene"!==r.origin&&"portal-item"!==r.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,r):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,e)),e}read(e,r){if(super.read(e,r),r&&("web-scene"===r.origin||"portal-item"===r.origin)&&null!=e&&Array.isArray(e.sublayers)){const t=this.readSublayerOverrides(e.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,t):this.sublayerOverrides=t;}}readSummaryStatistics(e,r){if("string"==typeof r.statisticsHRef){const e=D(this.parsedUrl.path,r.statisticsHRef);return new c({url:e})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo();}load(e){const r=r$1(e)?e.signal:null,s=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(w).then((()=>this._fetchService(r))).then((()=>this._fetchAssociatedFeatureService(r)));return this.addResolvingPromise(s),Promise.resolve(this)}loadAll(){return n$7(this,(e=>{d$2.forEachSublayer(this.sublayers,(r=>{"building-group"!==r.type&&e(r);})),this.summaryStatistics&&e(this.summaryStatistics);}))}async saveAs(e,r){return this._debouncedSaveOperations(1,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(!e.layerType||"Building"!==e.layerType)throw new s$1("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return ["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&B.warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&B.warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"));}async _fetchAssociatedFeatureService(e){const r=new l$a(this.parsedUrl,this.portalItem,e);try{this.associatedFeatureServiceItem=await r.fetchPortalItem();}catch(t){B.warn("Associated feature service item could not be loaded",t);}}};e$1([y$1({type:["BuildingSceneLayer"]})],A.prototype,"operationalLayerType",void 0),e$1([y$1({readOnly:!0})],A.prototype,"allSublayers",void 0),e$1([y$1(_)],A.prototype,"sublayers",void 0),e$1([e$2("service","sublayers")],A.prototype,"readSublayers",null),e$1([y$1({type:E,nonNullable:!0,json:{write:!0}})],A.prototype,"filters",void 0),e$1([y$1({type:String,json:{write:!0}})],A.prototype,"activeFilterId",void 0),e$1([y$1({readOnly:!0,type:c})],A.prototype,"summaryStatistics",void 0),e$1([e$2("summaryStatistics",["statisticsHRef"])],A.prototype,"readSummaryStatistics",null),e$1([y$1({type:[String],json:{read:!1}})],A.prototype,"outFields",void 0),e$1([y$1(v)],A.prototype,"fullExtent",void 0),e$1([y$1({type:["show","hide","hide-children"]})],A.prototype,"listMode",void 0),e$1([y$1(u$5(k))],A.prototype,"spatialReference",void 0),e$1([y$1(m$5)],A.prototype,"elevationInfo",null),e$1([y$1({json:{read:!1},readOnly:!0})],A.prototype,"type",void 0),e$1([y$1()],A.prototype,"associatedFeatureServiceItem",void 0),A=e$1([i$3("esri.layers.BuildingSceneLayer")],A);var P=A;

export default P;
