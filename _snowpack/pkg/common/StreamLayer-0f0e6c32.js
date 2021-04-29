import { e, y, i as i$1, a, n, aM as t$1, A as k, s as s$1, P as r, C as U, a1 as e$3, o as o$2, M, N, aZ as u$2 } from './Identifiable-c8406192.js';
import { e as e$1 } from './config-b3bf08ce.js';
import { b as c$1, m as m$1 } from './fieldUtils-a9f71c96.js';
import { M as M$1 } from './PopupTemplate-77ad81c4.js';
import { M as M$2 } from './symbols-a702d148.js';
import { b } from './Layer-d22ad00d.js';
import { l as l$1 } from './MultiOriginJSONSupport-29c9a66e.js';
import { l, x, p as p$3, d, S, j, c as c$2, a as l$2, f as f$1 } from './OperationalLayer-d48a5914.js';
import { P } from './UniqueValueRenderer-6eda9445.js';
import { p as p$2, m, o as o$1, a as m$2, n as n$1 } from './jsonUtils-abe1bd07.js';
import { y as y$1 } from './Field-e6fe6b12.js';
import { e as e$2 } from './FieldsIndex-d0d5f38b.js';
import { p as p$1 } from './ArcGISService-7a5cc3ad.js';
import { t as t$2 } from './BlendLayer-f2f3b180.js';
import { u } from './PortalLayer-8f26d9e1.js';
import { o } from './RefreshableLayer-cf71b273.js';
import { s } from './ScaleRangeLayer-8feef0dd.js';
import { f } from './TemporalLayer-c333d449.js';
import { E } from './LabelClass-c61f8b70.js';
import { u as u$1, c, s as s$2, r as r$1 } from './labelingInfo-21494a5d.js';
import { t as t$3 } from './styleUtils-f2703dfb.js';
import { a as a$1 } from './popupUtils-5e9c2795.js';
import { R } from './Query-448be42b.js';
import './persistableUrlUtils-b4be11a9.js';
import './TimeExtent-155cb8a4.js';
import './lengthUtils-cb1a7b62.js';
import './unitUtils-1b0a3531.js';
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
import './fieldType-769fe7ff.js';
import './arcgisLayerUrl-d85d6d65.js';
import './TimeInfo-190b35f7.js';
import './labelUtils-5176895f.js';
import './defaults-91b05a2c.js';
import './defaultsJSON-375e89aa.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var t;let p=t=class extends a{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1;}clone(){return new t({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};e([y({type:Number,json:{write:!0}})],p.prototype,"age",void 0),e([y({type:Number,json:{write:!0}})],p.prototype,"ageReceived",void 0),e([y({type:Number,json:{write:!0}})],p.prototype,"displayCount",void 0),e([y({type:Number,json:{write:!0}})],p.prototype,"maxObservations",void 0),p=t=e([i$1("esri.layers.support.PurgeOptions")],p);var i=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const $=n.getLogger("esri.layers.StreamLayer"),ee=new t$1({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"});let re=class extends(t$2(f(s(o(p$1(l(u(l$1(b))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new i,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=k.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null;}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}load(e){if(!("WebSocket"in e$1))return this.addResolvingPromise(Promise.reject(new s$1("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const o=r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service"]},e).catch((e=>e)).then((()=>this._fetchService(o)))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}readFeatureReduction(e,r){return u$1(e,r)}writeWebSceneFeatureReduction(e,r,t,o){c(e,r,"layerDefinition.featureReduction",o);}get fieldsIndex(){return new e$2(this.fields)}set renderer(e){c$1(e,this.fields),this._set("renderer",e);}readRenderer(e,r,t){const o=(r=r.layerDefinition||r).drawingInfo&&r.drawingInfo.renderer||void 0;if(o){const e=p$2(o,r,t)||void 0;return e||$.error("Failed to create renderer",{rendererDefinition:r.drawingInfo.renderer,layer:this,context:t}),e}if(r.defaultSymbol)return r.types&&r.types.length?new P({defaultSymbol:te(r.defaultSymbol,r,t),field:r.typeIdField,uniqueValueInfos:r.types.map((e=>({id:e.id,symbol:te(e.symbol,e,t)})))}):new m({symbol:te(r.defaultSymbol,r,t)})}writeRenderer(e,r,t,o){o$1(e,r,t,o);}writeWebSceneRenderer(e,r,t,o){o$1(e,r,"layerDefinition.drawingInfo.renderer",o);}createPopupTemplate(e){return a$1(this,e)}createQuery(){const e=new R;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,r){if(!this.fields)return null;let t=null;return this.fields.some((r=>(r.name===e&&(t=r.domain),!!t))),t}getField(e){return this.fieldsIndex.get(e)}async _fetchService(e){var r;if(!!this.webSocketUrl){var t;if(null==(t=this.timeInfo)||!t.trackIdField)throw new s$1("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new s$1("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new s$1("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new s$1("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl;}else if(!this.sourceJSON){const{data:r}=await U(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=r;}return this.sourceJSON={...null!=(r=this.sourceJSON)?r:{},objectIdField:"__esri_stream_id__"},this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),c$1(this.renderer,this.fields),m$1(this.timeInfo,this.fields),t$3(this,{origin:"service"})}};e([y({type:String})],re.prototype,"copyright",void 0),e([y({readOnly:!0})],re.prototype,"defaultPopupTemplate",null),e([y({type:String,json:{read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression"}}})],re.prototype,"definitionExpression",void 0),e([y({type:String})],re.prototype,"displayField",void 0),e([y({type:x})],re.prototype,"elevationInfo",void 0),e([e$3("featureReduction",["layerDefinition.featureReduction"])],re.prototype,"readFeatureReduction",null),e([o$2("web-scene","featureReduction",{"layerDefinition.featureReduction":{types:s$2}})],re.prototype,"writeWebSceneFeatureReduction",null),e([y({type:[y$1]})],re.prototype,"fields",void 0),e([y({readOnly:!0})],re.prototype,"fieldsIndex",null),e([y({type:M})],re.prototype,"geometryDefinition",void 0),e([y({type:["point","polygon","polyline","multipoint"],json:{read:{reader:ee.read}}})],re.prototype,"geometryType",void 0),e([y(p$3)],re.prototype,"labelsVisible",void 0),e([y({type:[E],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:r$1},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],re.prototype,"labelingInfo",void 0),e([y(d)],re.prototype,"legendEnabled",void 0),e([y({type:["show","hide"]})],re.prototype,"listMode",void 0),e([y({type:N})],re.prototype,"maxReconnectionAttempts",void 0),e([y({type:N})],re.prototype,"maxReconnectionInterval",void 0),e([y(S)],re.prototype,"maxScale",void 0),e([y(j)],re.prototype,"minScale",void 0),e([y({type:String})],re.prototype,"objectIdField",void 0),e([y({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],re.prototype,"operationalLayerType",void 0),e([y(c$2)],re.prototype,"popupEnabled",void 0),e([y({type:M$1,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],re.prototype,"popupTemplate",void 0),e([y({type:i})],re.prototype,"purgeOptions",void 0),e([y({types:m$2,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],re.prototype,"renderer",null),e([e$3("service","renderer",["drawingInfo.renderer","defaultSymbol"]),e$3("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],re.prototype,"readRenderer",null),e([o$2("renderer")],re.prototype,"writeRenderer",null),e([o$2("web-scene","renderer",{"layerDefinition.drawingInfo.renderer":{types:n$1}})],re.prototype,"writeWebSceneRenderer",null),e([y(l$2)],re.prototype,"screenSizePerspectiveEnabled",void 0),e([y({type:k,json:{origins:{service:{read:{source:"spatialReference"}}}}})],re.prototype,"spatialReference",void 0),e([y({json:{read:!1}})],re.prototype,"type",void 0),e([y(f$1)],re.prototype,"url",void 0),e([y({type:Number})],re.prototype,"updateInterval",void 0),e([y({type:String})],re.prototype,"webSocketUrl",void 0),re=e([i$1("esri.layers.StreamLayer")],re);const te=u$2({types:M$2});var oe=re;

export default oe;
