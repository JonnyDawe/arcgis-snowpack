import { e, y, i, k as f, P as r, M, a1 as e$1, A as k } from './Identifiable-c8406192.js';
import { a as t } from './config-b3bf08ce.js';
import { m, p as p$1 } from './persistableUrlUtils-b4be11a9.js';
import { R } from './Query-448be42b.js';
import { k as ke } from './FeatureLayer-346f29ad.js';
import { t as t$1 } from './QueryEngineCapabilities-e92c3f75.js';
import { p } from './workers-31c2755c.js';
import g from './FeatureSet-ceb33ccf.js';
import './jsonUtils-d762dc00.js';
import './TimeExtent-155cb8a4.js';
import './Field-e6fe6b12.js';
import './fieldUtils-a9f71c96.js';
import './fieldType-769fe7ff.js';
import './PopupTemplate-77ad81c4.js';
import './symbols-a702d148.js';
import './Layer-d22ad00d.js';
import './MultiOriginJSONSupport-29c9a66e.js';
import './arcgisLayerUrl-d85d6d65.js';
import './HeightModelInfo-f665a73c.js';
import './unitUtils-1b0a3531.js';
import './OperationalLayer-d48a5914.js';
import './lengthUtils-cb1a7b62.js';
import './UniqueValueRenderer-6eda9445.js';
import './ColorStop-27e1a5ee.js';
import './styleUtils-062f64a7.js';
import './sizeVariableUtils-33233df0.js';
import './visualVariableUtils-66f67c57.js';
import './compilerUtils-006be997.js';
import './Graphic-9f79c7db.js';
import './uid-7967dd4d.js';
import './diffUtils-e1cd943c.js';
import './jsonUtils-abe1bd07.js';
import './LRUCache-9b61e325.js';
import './MemCache-1f56f5a2.js';
import './FieldsIndex-d0d5f38b.js';
import './zscale-209a474d.js';
import './queryZScale-3f81db56.js';
import './ArcGISService-7a5cc3ad.js';
import './BlendLayer-f2f3b180.js';
import './FeatureType-a62beea1.js';
import './PortalLayer-8f26d9e1.js';
import './RefreshableLayer-cf71b273.js';
import './ScaleRangeLayer-8feef0dd.js';
import './TimeInfo-190b35f7.js';
import './TemporalLayer-c333d449.js';
import './labelingInfo-21494a5d.js';
import './LabelClass-c61f8b70.js';
import './labelUtils-5176895f.js';
import './defaults-91b05a2c.js';
import './defaultsJSON-375e89aa.js';
import './fieldProperties-b389086f.js';
import './styleUtils-f2703dfb.js';
import './popupUtils-5e9c2795.js';
import './RelationshipQuery-1cbf03e3.js';
import './watchUtils-880dbce7.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let u=class extends f{constructor(e){super(e),this.type="csv";}load(e){const t=r(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;null==(e=this._connection)||e.close(),this._connection=null;}openPorts(){return this.load().then((()=>this._connection.openPorts()))}queryFeatures(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))).then((e=>g.fromJSON(e)))}queryFeaturesJSON(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)))}queryFeatureCount(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)))}queryObjectIds(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)))}queryExtent(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t))).then((e=>({count:e.count,extent:M.fromJSON(e.extent)})))}querySnapping(e,t={}){return this.load(t).then((()=>this._connection.invoke("querySnapping",e,t)))}async _startWorker(e){this._connection=await p("CSVSourceWorker",{strategy:t("feature-layers-workers")?"dedicated":"local",signal:e});const o=await this._connection.invoke("load",{url:this.url,parsing:{columnDelimiter:this.delimiter,fields:this.fields&&this.fields.map((e=>e.toJSON())),latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference&&this.spatialReference.toJSON(),timeInfo:this.timeInfo&&this.timeInfo.toJSON()}},{signal:e});this.locationInfo=o.locationInfo,this.sourceJSON=o.layerDefinition,this.columnDelimiter=o.columnDelimiter;}};e([y()],u.prototype,"type",void 0),e([y()],u.prototype,"url",void 0),e([y()],u.prototype,"delimiter",void 0),e([y()],u.prototype,"fields",void 0),e([y()],u.prototype,"latitudeField",void 0),e([y()],u.prototype,"longitudeField",void 0),e([y()],u.prototype,"spatialReference",void 0),e([y()],u.prototype,"timeInfo",void 0),e([y()],u.prototype,"locationInfo",void 0),e([y()],u.prototype,"sourceJSON",void 0),e([y()],u.prototype,"columnDelimiter",void 0),u=e([i("esri.layers.graphics.sources.CSVSource")],u);var a=u;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let d=class extends ke{constructor(...e){super(...e),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.portalItem=null,this.spatialReference=k.WGS84,this.source=null,this.type="csv";}normalizeCtorArgs(e,t){return "string"==typeof e?{url:e,...t}:e}get capabilities(){return {data:{supportsAttachment:!1,supportsM:!1,supportsZ:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsQuery:!0,supportsResizeAttachments:!1,supportsUpdate:!1},query:t$1,queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},editing:{supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}get isTable(){return this.loaded&&null==this.geometryType}readWebMapLabelsVisible(e,t){return null!=t.showLabels?t.showLabels:!!(t.layerDefinition&&t.layerDefinition.drawingInfo&&t.layerDefinition.drawingInfo.labelingInfo)}set url(e){this._set("url",e);}async createGraphicsSource(e){const t=new a({delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference,timeInfo:this.timeInfo,url:this.url});return this._set("source",t),await t.load({signal:e}),this.read({locationInfo:t.locationInfo,columnDelimiter:t.columnDelimiter},{origin:"service",url:this.parsedUrl}),t}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(R.from(e)||this.createQuery()))).then((e=>{if(e&&e.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(R.from(e)||this.createQuery())))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(R.from(e)||this.createQuery())))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(R.from(e)||this.createQuery())))}write(e,t){return super.write(e,{...t,writeLayerSchema:!0})}_verifyFields(){}_verifySource(){}_hasMemorySource(){return !1}};e([y({readOnly:!0,dependsOn:["loaded"],json:{read:!1,write:!1}})],d.prototype,"capabilities",null),e([y({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],d.prototype,"delimiter",void 0),e([y({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],d.prototype,"editingEnabled",void 0),e([y({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],d.prototype,"fields",void 0),e([y({type:Boolean,readOnly:!0})],d.prototype,"isTable",null),e([e$1("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],d.prototype,"readWebMapLabelsVisible",null),e([y({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],d.prototype,"latitudeField",void 0),e([y({type:["show","hide"]})],d.prototype,"listMode",void 0),e([y({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],d.prototype,"locationType",void 0),e([y({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],d.prototype,"longitudeField",void 0),e([y({type:["CSV"]})],d.prototype,"operationalLayerType",void 0),e([y()],d.prototype,"outFields",void 0),e([y({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],d.prototype,"path",void 0),e([y({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],d.prototype,"portalItem",void 0),e([y({json:{read:!1},cast:null,type:a,readOnly:!0})],d.prototype,"source",void 0),e([y({json:{read:!1},value:"csv",readOnly:!0})],d.prototype,"type",void 0),e([y({json:{read:m,write:{isRequired:!0,ignoreOrigin:!0,writer:p$1}}})],d.prototype,"url",null),d=e([i("esri.layers.CSVLayer")],d);var c=d;

export default c;
