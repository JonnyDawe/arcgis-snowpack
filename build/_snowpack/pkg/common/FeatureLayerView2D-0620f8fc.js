import { e as e$1, y, i as i$1, aM as t, o, a3 as i$2, a, n as n$1, P as r, E, s as s$2, al as m$1, b$ as z, V as a$2, ay as y$3, b2 as j$1, aa as q$1, B as g$1, c6 as A, bJ as c$2, L as L$1, M, a4 as k, a5 as M$1, J as t$2, X as C$1 } from './Identifiable-c8406192.js';
import { y as y$1, a as t$1 } from './config-b3bf08ce.js';
import { n } from './Graphic-9f79c7db.js';
import { d as d$2, C, $ as $$1 } from './watchUtils-880dbce7.js';
import { w as w$1 } from './arcgisLayerUrl-d85d6d65.js';
import g$2 from './FeatureSet-ceb33ccf.js';
import { R as R$1 } from './Query-448be42b.js';
import { N } from './definitions-681c54ec.js';
import { r as r$1 } from './capabilities-6619b906.js';
import { i as i$4 } from './MapView-287c7d57.js';
import { l as l$4, d as d$5 } from './LayerView2D-57cb193a.js';
import { s as s$3 } from './clickToleranceUtils-072a5628.js';
import { a as a$3 } from './drapedUtils-20f00662.js';
import { q as e$3, u as u$3, v as d$4, w as f, x as m$2, y as c$3, B as k$1 } from './schemaUtils-da3a1cd7.js';
import { u as u$2 } from './Container-0dd65e2f.js';
import { p as p$2 } from './jsonUtils-d762dc00.js';
import { d as d$1 } from './TimeExtent-155cb8a4.js';
import { y as y$2, I, a as a$1, U, v, L, V, g, F, c as ce } from './fieldUtils-a9f71c96.js';
import { w } from './OperationalLayer-d48a5914.js';
import { d as d$3, i as i$3 } from './popupUtils-8084719b.js';
import { p as p$3 } from './workers-31c2755c.js';
import { e as e$2 } from './TileKey-482fe256.js';
import { l as l$3 } from './TileInfoView-40300351.js';
import './PopupTemplate-77ad81c4.js';
import './symbols-a702d148.js';
import './persistableUrlUtils-b4be11a9.js';
import './uid-7967dd4d.js';
import './Field-e6fe6b12.js';
import './fieldType-769fe7ff.js';
import './CollectionFlattener-5ff807fc.js';
import './Widget-2f53b352.js';
import './HandleOwner-2c2dff93.js';
import './GoTo-21ecf3ed.js';
import './widget-0e54f9c7.js';
import './unitUtils-1b0a3531.js';
import './RelationshipQuery-1cbf03e3.js';
import './QueryTask-60c0f90b.js';
import './Task-21d7c7ba.js';
import './query-95e8633c.js';
import './normalizeUtils-2bbe7974.js';
import './queryZScale-3f81db56.js';
import './zscale-209a474d.js';
import './pbfQueryUtils-fdd38078.js';
import './OptimizedFeatureSet-d6270f6b.js';
import './pbf-02a10316.js';
import './compilerUtils-006be997.js';
import './featureConversionUtils-6830a580.js';
import './FeatureLayer-346f29ad.js';
import './Layer-d22ad00d.js';
import './MultiOriginJSONSupport-29c9a66e.js';
import './HeightModelInfo-f665a73c.js';
import './UniqueValueRenderer-6eda9445.js';
import './ColorStop-27e1a5ee.js';
import './styleUtils-062f64a7.js';
import './sizeVariableUtils-33233df0.js';
import './visualVariableUtils-66f67c57.js';
import './lengthUtils-cb1a7b62.js';
import './diffUtils-e1cd943c.js';
import './jsonUtils-abe1bd07.js';
import './LRUCache-9b61e325.js';
import './MemCache-1f56f5a2.js';
import './FieldsIndex-d0d5f38b.js';
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
import './utils-68b4615c.js';
import './vec3f64-a6795633.js';
import './ItemCache-717f7581.js';
import './mathUtils-25e61b42.js';
import './vec3-ae5ae182.js';
import './TileInfo-f085f660.js';
import './aaBoundingRect-a3d841c1.js';
import './Map-3c24a571.js';
import './TablesMixin-d10799e4.js';
import './GraphicsCollection-afd60f67.js';
import './mat3-425ec876.js';
import './vec2-f6c2e17c.js';
import './TileStrategy-ff1490fc.js';
import './unitBezier-6bff3f6f.js';
import './projection-1aa78979.js';
import './mat4-3619c4da.js';
import './MD5-944ef260.js';
import './Utils-0d5f7d82.js';
import './FramebufferObject-903a1e6f.js';
import './_commonjsHelpers-268aa74f.js';
import './MaterialKey-1dd9041e.js';
import './visualVariablesUtils-c37b8ac9.js';
import './Rect-7bb5ea0f.js';
import './BidiEngine-aa559a1b.js';
import './mat4f32-575d0c83.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var p$1;let s$1=p$1=class extends n{constructor(){super(...arguments),this.isAggregate=!0;}getEffectivePopupTemplate(e=!1){if(this.popupTemplate)return this.popupTemplate;const r=this.sourceLayer&&this.sourceLayer.featureReduction;return r&&"popupTemplate"in r&&r.popupEnabled?r.popupTemplate:null}getObjectId(){return this.objectId}clone(){return new p$1({objectId:this.objectId,...this.cloneProperties()})}};e$1([y({type:Boolean})],s$1.prototype,"isAggregate",void 0),e$1([y({type:Number,json:{read:!0}})],s$1.prototype,"objectId",void 0),s$1=p$1=e$1([i$1("esri.AggregateGraphic")],s$1);var c$1=s$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var d;const m=new t({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),u$1=new t({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let h=d=class extends a{constructor(e){super(e),this.where=null,this.geometry=null,this.spatialRelationship="intersects",this.hiddenIds=new Set,this.distance=void 0,this.objectIds=null,this.units=null,this.timeExtent=null,this.enabled=!1;}writeWhere(e,t){t.where=e||"1=1";}enable(){this._set("enabled",!0);}createQuery(e={}){const{where:r,geometry:i,spatialRelationship:s,timeExtent:o,objectIds:n,units:a,distance:p}=this;return new R$1({geometry:y$1(i),objectIds:y$1(n),spatialRelationship:s,timeExtent:y$1(o),where:r,units:a,distance:p,...e})}clone(){const{where:e,geometry:r,spatialRelationship:i,hiddenIds:s,timeExtent:o,objectIds:n,units:a,distance:p}=this,l=new Set;return s.forEach((e=>l.add(e))),new d({geometry:y$1(r),hiddenIds:l,objectIds:y$1(n),spatialRelationship:i,timeExtent:y$1(o),where:e,units:a,distance:p})}};e$1([y({type:String})],h.prototype,"where",void 0),e$1([o("where")],h.prototype,"writeWhere",null),e$1([y({types:i$2,json:{read:p$2,write:!0}})],h.prototype,"geometry",void 0),e$1([y({type:String,json:{read:{source:"spatialRel",reader:m.read},write:{target:"spatialRel",writer:m.write}}})],h.prototype,"spatialRelationship",void 0),e$1([y({json:{write:(e,t,r)=>t[r]=Array.from(e),read:e=>new Set(e)}})],h.prototype,"hiddenIds",void 0),e$1([y({type:Number,json:{write:{overridePolicy:e=>({enabled:e>0})}}})],h.prototype,"distance",void 0),e$1([y({type:[Number],json:{write:!0}})],h.prototype,"objectIds",void 0),e$1([y({type:String,json:{read:u$1.read,write:{writer:u$1.write,overridePolicy(e){return {enabled:e&&this.distance>0}}}}})],h.prototype,"units",void 0),e$1([y({type:d$1,json:{write:!0}})],h.prototype,"timeExtent",void 0),e$1([y({readOnly:!0})],h.prototype,"enabled",void 0),h=d=e$1([i$1("esri.views.layers.support.FeatureFilter")],h);var j=h;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var i;let c=i=class extends a{constructor(){super(...arguments),this.filter=null,this.includedEffect=null,this.excludedEffect=null,this.excludedLabelsVisible=!1;}clone(){return new i({filter:this.filter&&this.filter.clone(),includedEffect:this.includedEffect,excludedEffect:this.excludedEffect,excludedLabelsVisible:this.excludedLabelsVisible})}};e$1([y({type:j,json:{write:!0}})],c.prototype,"filter",void 0),e$1([y({json:{write:!0}})],c.prototype,"includedEffect",void 0),e$1([y({json:{write:!0}})],c.prototype,"excludedEffect",void 0),e$1([y({type:Boolean,json:{write:!0}})],c.prototype,"excludedLabelsVisible",void 0),c=i=e$1([i$1("esri.views.layers.support.FeatureEffect")],c);var l$2=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const q=n$1.getLogger("esri.views.layers.FeatureLayerView"),R=r$1=>{let R=class extends r$1{constructor(...e){super(...e),this._updatingRequiredFieldsPromise=null,this.effect=null,this.filter=null,this.timeExtent=null,this.layer=null,this.requiredFields=[],this.view=null;}initialize(){d$2(this,["layer.renderer","layer.labelingInfo","layer.elevationInfo.featureExpressionInfo","layer.displayField","filter","effect","layer.timeInfo","layer.floorInfo","timeExtent"],(()=>this._handleRequiredFieldsChange()),!0),C(this,"view.floors","change",(()=>this._handleRequiredFieldsChange()));}get availableFields(){const{layer:e,layer:{fields:t},requiredFields:r}=this;return "outFields"in e&&e.outFields?y$2(t,[...I(t,e.outFields),...r]):y$2(t,r)}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){q.error("#maximumNumberOfFeatures=","Setting maximum number of features is not supported");}get maximumNumberOfFeaturesExceeded(){return !1}highlight(e){throw new Error("missing implementation")}createQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference},r$1=r(this.filter)?this.filter.createQuery(e):new R$1(e);return r(this.timeExtent)&&(r$1.timeExtent=r(r$1.timeExtent)?r$1.timeExtent.intersection(this.timeExtent):this.timeExtent.clone()),r$1}queryFeatures(e,t){throw new Error("missing implementation")}queryObjectIds(e,t){throw new Error("missing implementation")}queryFeatureCount(e,t){throw new Error("missing implementation")}queryExtent(e,t){throw new Error("missing implementation")}_loadArcadeModules(e){if(e.get("expressionInfos.length"))return a$1()}_handleRequiredFieldsChange(){const e=this._updateRequiredFields();this._set("_updatingRequiredFieldsPromise",e),e.then((()=>{this._updatingRequiredFieldsPromise===e&&this._set("_updatingRequiredFieldsPromise",null);}));}async _updateRequiredFields(){if(!this.layer||!this.view)return;const e="3d"===this.view.type,{layer:r$1,layer:{fields:i,objectIdField:s,renderer:o,displayField:a}}=this,n=r$1.featureReduction,u=new Set,h=await E([o?o.collectRequiredFields(u,i):null,U(u,r$1),e?v(u,r$1):null,r(this.filter)?L(u,r$1,this.filter):null,this.effect?L(u,r$1,this.effect.filter):null,n?V(u,r$1,n):null]);r$1.timeInfo&&this.timeExtent&&g(u,r$1.fields,[r$1.timeInfo.startField,r$1.timeInfo.endField]),"feature"===r$1.type&&r$1.floorInfo&&g(u,r$1.fields,[r$1.floorInfo.floorField]);for(const t of h)t.error&&q.error(t.error);F(u,i,s),e&&a&&F(u,i,a);const F$1=Array.from(u).sort();this._set("requiredFields",F$1);}validateFetchPopupFeatures(e){const{layer:t,layer:{popupEnabled:r}}=this;if(!r)return new s$2("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:t});return d$3(this.layer,e)?void 0:new s$2("featurelayerview:fetchPopupFeatures","Layer does not define a popup template",{layer:t})}async fetchClientPopupFeatures(e){const r$1=r(e)?e.clientGraphics:null;if(!r$1||0===r$1.length)return Promise.resolve([]);const i=[],s=[],{layer:o}=this,l=d$3(o,e);if(!r(l))return Promise.resolve([]);const a=await this._loadArcadeModules(l),n=a&&a.arcadeUtils.hasGeometryOperations(l),p=await this.createPopupQuery(e),m=I(o.fields,p.outFields);for(const t of r$1)n||!ce(m,t)?s.push(t):i.push(t);return "stream"===o.type||0===s.length?Promise.resolve(i):(p.objectIds=s.map((e=>e.attributes[o.objectIdField])),o.queryFeatures(p).then((e=>i.concat(e.features))).catch((()=>s)))}async createPopupQuery(e){const r$1=this.layer,i=r$1.createQuery(),s=d$3(r$1,e),o=r(s)&&await this._loadArcadeModules(s),l=r(s)&&o&&o.arcadeUtils.hasGeometryOperations(s),a=!("point"!==r$1.geometryType&&!l);return i.returnGeometry=a,i.returnZ=a,i.returnM=a,i.outFields=await i$3(this.layer,s),i.outSpatialReference=this.view.spatialReference,i}canResume(){return !!super.canResume()&&(!r(this.timeExtent)||!this.timeExtent.isEmpty)}};return e$1([y()],R.prototype,"_updatingRequiredFieldsPromise",void 0),e$1([y({readOnly:!0})],R.prototype,"availableFields",null),e$1([y({type:l$2})],R.prototype,"effect",void 0),e$1([y({type:j})],R.prototype,"filter",void 0),e$1([y(w)],R.prototype,"timeExtent",void 0),e$1([y()],R.prototype,"layer",void 0),e$1([y({type:Number})],R.prototype,"maximumNumberOfFeatures",null),e$1([y({readOnly:!0,type:Boolean})],R.prototype,"maximumNumberOfFeaturesExceeded",null),e$1([y({readOnly:!0})],R.prototype,"requiredFields",void 0),e$1([y()],R.prototype,"suspended",void 0),e$1([y()],R.prototype,"view",void 0),R=e$1([i$1("esri.views.layers.FeatureLayerView")],R),R};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function e(e,a){if(!e)return null;switch(e.type){case"class-breaks":case"simple":case"unique-value":case"dot-density":case"dictionary":return new((await import('./SymbolTileRenderer-904ba472.js')).default)(a);case"heatmap":return new((await import('./HeatmapTileRenderer-ab8a0d8b.js')).default)(a)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function l$1(e){return Array.isArray(e)}let u=class extends m$1{constructor(e){super(e),this._startupResolver=z(),this.isReady=!1;}initialize(){this._controller=a$2(),this.addResolvingPromise(this._startWorker(this._controller.signal));}destroy(){this._controller.abort(),this._connection&&this._connection.close();}set tileRenderer(e){this.client.tileRenderer=e;}get closed(){return this._connection.closed}async startup(e,t,r,s){await this.when();const o=this._controller.signal,i=l$1(r.source)?{transferList:r.source,signal:o}:void 0,n={service:r,config:t,tileInfo:e.tileInfo.toJSON(),tiles:s};await this._connection.invoke("startup",n,i),this._startupResolver.resolve(),this._set("isReady",!0);}async updateTiles(e){return await this._startupResolver.promise,y$3(this._connection.invoke("updateTiles",e))}async update(e){const t={config:e};return await this._startupResolver.promise,this._connection.invoke("update",t)}async applyUpdate(e){return await this._startupResolver.promise,this._connection.invoke("applyUpdate",e)}async setHighlight(e){return await this._startupResolver.promise,y$3(this._connection.invoke("controller.setHighlight",e))}async refresh(){return await this._startupResolver.promise,y$3(this._connection.invoke("controller.refresh"))}async queryFeatures(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryFeatures",e.toJSON(),t)}async queryObjectIds(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryObjectIds",e.toJSON(),t)}async queryFeatureCount(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryFeatureCount",e.toJSON(),t)}async queryExtent(e,t){return this._connection.invoke("controller.queryExtent",e.toJSON(),t)}async queryLatestObservations(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryLatestObservations",e.toJSON(),t)}async queryStatistics(e){return await this._startupResolver.promise,this._connection.invoke("controller.queryStatistics",e)}async getObjectId(e){return await this._startupResolver.promise,this._connection.invoke("controller.getObjectId",e)}async getDisplayId(e){return await this._startupResolver.promise,this._connection.invoke("controller.getDisplayId",e)}async getFeature(e){return await this._startupResolver.promise,this._connection.invoke("controller.getFeature",e)}async getAggregate(e){return await this._startupResolver.promise,this._connection.invoke("controller.getAggregate",e)}async getAggregateValueRanges(){return await this._startupResolver.promise,this._connection.invoke("controller.getAggregateValueRanges")}async mapValidDisplayIds(e){return await this._startupResolver.promise,this._connection.invoke("controller.mapValidDisplayIds",e)}async onEdits(e){await this._startupResolver.promise;const{addedFeatures:t,deletedFeatures:r,updatedFeatures:s}=e;return y$3(this._connection.invoke("controller.onEdits",{addedFeatures:t,deletedFeatures:r,updatedFeatures:s}))}async enableEvent(e,t){return await this._startupResolver.promise,y$3(this._connection.invoke("controller.enableEvent",{name:e,value:t}))}async _startWorker(e){try{this._connection=await p$3("Pipeline",{client:this.client,strategy:"dedicated",signal:e});}catch(t){j$1(t);}}};e$1([y()],u.prototype,"isReady",void 0),e$1([y()],u.prototype,"client",void 0),e$1([y()],u.prototype,"tileRenderer",null),u=e$1([i$1("esri.views.2d.layers.support.FeatureLayerProxy")],u);var p=u;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const l=1e-6;class s{constructor(e){this._tiles=new Map,this.buffer=0,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,this.buffer=e.buffer;}destroy(){}clear(){this._tiles.forEach((e=>this._releaseTile(e)));}tileKeys(){const e=[];return this._tiles.forEach(((i,t)=>e.push(t))),e}update(e){const l=this.tileInfoView.getTileCoverage(e.state,this.buffer,"closest"),{spans:s,lodInfo:r}=l,{level:a}=r,o=[],d=[],h=new Set,n=new Set;for(const{row:t,colFrom:c,colTo:f}of s)for(let e=c;e<=f;e++){const l=e$2.getId(a,t,r.normalizeCol(e),r.getWorldForColumn(e)),s=this._getOrAcquireTile(o,l);h.add(l),s.isReady?s.visible=!0:n.add(s.key);}n.forEach((e=>this._addPlaceholders(h,e))),this._tiles.forEach((e=>{h.has(e.key.id)||(d.push(e.key.id),this._releaseTile(e));})),l$3.pool.release(l);return {hasMissingTiles:n.size>0,added:o,removed:d}}_getOrAcquireTile(e,t){if(!this._tiles.has(t)){const l=this.acquireTile(new e$2(t));e.push(t),this._tiles.set(t,l),l.visible=!1;}return this._tiles.get(t)}_getTile(e){return this._tiles.get(e)}_releaseTile(e){this._tiles.delete(e.key.id),this.releaseTile(e);}_addPlaceholders(e,i){const t=this._addPlaceholderChildren(e,i);if(!(Math.abs(1-t)<l)){if(!this._addPlaceholderParent(e,i)){this._getTile(i.id).visible=!0;}}}_addPlaceholderChildren(e,i){let t=0;return this._tiles.forEach((l=>{t+=this._addPlaceholderChild(e,l,i);})),t}_addPlaceholderChild(e,i,t){if(i.key.level<=t.level||!i.hasData||!t.contains(i.key))return 0;i.visible=!0,e.add(i.key.id);return 1/(1<<2*(i.key.level-t.level))}_addPlaceholderParent(i,t){let l=t.getParentKey(),s=0,r$1=null;for(;r(l);){if(i.has(l.id))return !0;const e=this._getTile(l.id);if(null!=e&&e.isReady)return e.visible=!0,i.add(e.key.id),!0;null!=e&&e.hasData&&e.patchCount>s&&(s=e.patchCount,r$1=e),l=l.getParentKey();}return !!r$1&&(r$1.visible=!0,i.add(r$1.key.id),!0)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const $=2147483648,Q=1,B=e=>(e&$)>>>31===Q;function K(e){return e&&"openPorts"in e}const W=n$1.getLogger("esri.views.2d.layers.FeatureLayerView2D");let X=class extends(R(i$4(l$4(d$5)))){constructor(){super(...arguments),this._pipelineIsUpdating=!0,this._updatingPipelineConfig=!1,this._onGoingEdits=0,this._isRefreshing=!1,this._visibilityOverrides=new Set,this._effect=null,this._highlightIds=new Map,this._lastPixelBuffer=0,this.filter=null,this.effectLists={included:new u$2,excluded:new u$2},this.doRefresh=q$1((async()=>{this.isUpdating()&&await $$1(this,"updating"),this._set("_isRefreshing",!0),this._lockGPUUploads();try{await this._proxy.refresh();}catch(e){g$1(e),0;}this._unlockGPUUploads(),this._set("_isRefreshing",!1);})),this._doUpdate=q$1((async()=>{try{if(this.destroyed||!this._hasRequiredSupport(this.layer))return;this._set("_updatingPipelineConfig",!0),await $$1(this,"_isRefreshing");const{effect:t,filter:i}=this;await this._updateRequiredFields();const{renderer:r$1}=this._getEffectiveRenderer();this._set("_effectiveRenderer",r$1);const s="feature"===this.layer.type?this.layer.historicMoment:null,n="feature"===this.layer.type?this.layer.gdbVersion:null,o={renderer:this.layer.renderer,spatialReference:this.layer.spatialReference,timeExtent:this.layer.timeExtent,definitionExpression:this.layer.definitionExpression,featureReduction:this.layer.featureReduction,fields:this.layer.fields,geometryType:this.layer.geometryType,historicMoment:s,labelsVisible:this.layer.labelsVisible,labelingInfo:this.layer.labelingInfo,availableFields:this.availableFields,effect:this.effect,filter:this.filter,gdbVersion:n,pixelBuffer:0},l=e$3(this.layer.geometryType),h=await u$3(r$1,l,this.layer.featureReduction),u=this._createConfiguration(o,i,t);this._lastPixelBuffer=0===h?0:Math.max(h,this._lastPixelBuffer),u.schema.source.pixelBuffer=this._lastPixelBuffer;const d=this._createTileRendererHash(r$1);if(d!==this._tileRendererHash){await this._initTileRenderer(r$1);const e=this._serviceOptions;this.effects.forEach((e=>r(e)&&r(e.filter)&&e.filter.enable())),this.tileRenderer.onConfigUpdate(r$1);const t={added:this._tileStrategy.tileKeys(),removed:[]},i=this.layer;"stream"!==i.type&&K(i.source)&&(e.source=await i.source.openPorts()),await this._proxy.startup(this.view.featuresTilingScheme,u,e,t),this.hasHighlight()&&await this._proxy.setHighlight(Array.from(this._highlightIds.keys())),await this._onceTilesUpdated(),this.tileRenderer.onConfigUpdate(r$1);}else {const t=await this._proxy.update(u);(t.mesh||t.targets.aggregate)&&this._lockGPUUploads();try{await this._proxy.applyUpdate(t);}catch(e){g$1(e)||W.error(e);}(t.mesh||t.targets.aggregate)&&this._unlockGPUUploads(),this.effects.forEach((e=>r(e)&&r(e.filter)&&e.filter.enable())),this.tileRenderer.onConfigUpdate(r$1),this._forceAttributeTextureUpload();}this._tileRendererHash=d,this.tileRenderer.invalidateLabels(),this.requestUpdate();}catch(e){}})),this._updateHighlight=q$1((async()=>this._proxy.setHighlight(Array.from(this._highlightIds.keys()))));}destroy(){var e,t;null==(e=this._proxy)||e.destroy(),A(this._updateClusterSizeTask,(e=>e.remove())),null==(t=this.tileRenderer)||t.destroy();}initialize(){this.addResolvingPromise(Promise.all([this._initProxy(),this._initServiceOptions()])),this.handles.add([this.on("valueRangesChanged",(e=>{this._set("_aggregateValueRanges",e.valueRanges);})),d$2(this,"effect",(e=>{this.effectLists.included.effect=null==e?void 0:e.includedEffect;})),d$2(this,"effect",(e=>{this.effectLists.excluded.effect=null==e?void 0:e.excludedEffect;}))]);}async _initProxy(){if("stream"!==this.layer.type&&"ogc-feature"!==this.layer.type&&this.layer.isTable)throw new s$2("featurelayerview:table-not-supported","table feature layer can't be displayed",{layer:this.layer});this._proxy&&this._proxy.destroy();const e=this._createClientOptions();return this._set("_proxy",new p({client:e})),this._proxy.when()}async _initServiceOptions(){this._set("_serviceOptions",await this._createServiceOptions());}get labelsVisible(){return !this.suspended&&this.layer.labelingInfo&&this.layer.labelsVisible}get effect(){return c$2(this._effect,null)}set effect(e){const t=this._effect;r(t)&&r(t.filter)&&t.filter.enabled&&r(e)&&r(e.filter)&&e.filter.enable(),this._effect=e,this.notifyChange("effect");}get effects(){return this.effect&&[this.effect]||[]}get queryMode(){return this._serviceOptions.type}get renderingConfigHash(){if(!this.layer)return null;const e=this.availableFields,t=this.layer,i=this.view.floors,{definitionExpression:r$1,renderer:s,labelingInfo:n}=t,o="feature"===t.type?t.gdbVersion:void 0,l="feature"===t.type&&t.historicMoment?t.historicMoment.getTime():void 0,{timeExtent:h}=this,u="stream"===t.type?`${JSON.stringify(t.geometryDefinition)}${t.definitionExpression}`:null,d=JSON.stringify(this.clips),p=t.featureReduction&&t.featureReduction.toJSON();return JSON.stringify({filterHash:r(this.filter)&&this.filter.toJSON(),effectHash:r(this.effect)&&this.effect.toJSON(),streamFilter:u,gdbVersion:o,definitionExpression:r$1,historicMoment:l,availableFields:e,renderer:s,labelingInfo:t.labelsVisible&&n,timeExtent:h,floors:i,clipsHash:d,featureReduction:p})}get hasEffects(){return this.effectLists.included.hasEffects||this.effectLists.excluded.hasEffects}highlight(e){let t;return e instanceof n?t=[e.getObjectId()]:"number"==typeof e||"string"==typeof e?t=[e]:L$1.isCollection(e)?t=e.map((e=>e&&e.getAttribute(this.layer.objectIdField))).toArray():Array.isArray(e)&&e.length>0&&(t="number"==typeof e[0]||"string"==typeof e[0]?e:e.map((e=>e&&e.getAttribute(this.layer.objectIdField)))),t&&t.length?(t=t.filter((e=>null!=e)),this._addHighlight(t),{remove:()=>this._removeHighlight(t)}):{remove:()=>{}}}hasHighlight(){return !!this._highlightIds.size}hitTest(e,t){return this._hitTest(e,t)}queryStatistics(){return this._proxy.queryStatistics()}queryFeatures(e,t){return this.queryFeaturesJSON(e,t).then((e=>{const t=g$2.fromJSON(e);return t.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer;})),t}))}queryFeaturesJSON(e,t){return this._proxy.queryFeatures(this._cleanUpQuery(e),t)}queryObjectIds(e,t){return this._proxy.queryObjectIds(this._cleanUpQuery(e),t)}queryFeatureCount(e,t){return this._proxy.queryFeatureCount(this._cleanUpQuery(e),t)}queryExtent(e,t){return this._proxy.queryExtent(this._cleanUpQuery(e),t).then((e=>({count:e.count,extent:M.fromJSON(e.extent)})))}setVisibility(e,t){t?this._visibilityOverrides.delete(e):this._visibilityOverrides.add(e),this._update();}update(e){if(!this._tileStrategy||!this.tileRenderer)return;const{hasMissingTiles:t,added:i,removed:r}=this._tileStrategy.update(e);(i.length||r.length)&&this._proxy.updateTiles({added:i,removed:r}),t&&this.requestUpdate(),this.notifyChange("updating");}attach(){this.view.timeline.record(`${this.layer.title} (FeatureLayer) Attach`),this._tileStrategy=new s({acquireTile:e=>this._acquireTile(e),releaseTile:e=>this._releaseTile(e),tileInfoView:this.view.featuresTilingScheme,buffer:0}),this.handles.add(d$2(this,"renderingConfigHash",(()=>this._update())),"attach"),"stream"!==this.layer.type&&this.handles.add(this.layer.on("edits",(async e=>{this._set("_onGoingEdits",this._onGoingEdits+1);try{const t="globalIdField"in this.layer&&this.layer.globalIdField,i=e.deletedFeatures.some((e=>-1===e.objectId||!e.objectId)),r=t&&this.availableFields.includes(t);if(i&&!r)return void W.error(new s$2("mapview-apply-edits",`Editing the specified service requires the layer's globalIdField, ${t} to be included the layer's outFields for updates to be reflected on the map`));await this._proxy.onEdits(e);}catch(t){g$1(t),0;}this._set("_onGoingEdits",Math.max(0,this._onGoingEdits-1));})),"attach");}detach(){this.container.removeAllChildren(),this.handles.remove("attach"),this._updatingPipelineConfig=!1,this.tileRenderer&&(this.tileRenderer.uninstall(this.container),this.tileRenderer=null),this._tileStrategy&&(this._tileStrategy.destroy(),this._tileStrategy=null),this._tileRendererHash=null;}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){this.requestUpdate();}async fetchPopupFeatures(e,t){if(r(t)&&t.clientGraphics.length){const e=t.clientGraphics[0];if(e instanceof c$1)return [e]}const i=this.validateFetchPopupFeatures(t);if(i)throw i;if(r(t)&&0===t.clientGraphics.length)return [];const r$1=this.fetchClientPopupFeatures(t);if(!e)return r$1;const s=this._fetchServicePopupFeatures(e,t);return k([r$1,s]).then(M$1)}async _fetchServicePopupFeatures(e,t){if("stream"===this.layer.type||"ogc-feature"===this.layer.type)return [];const i=await this.createPopupQuery(t),{layer:r$1}=this,{renderer:s}=r$1,n=r(t)?t.event:null,o=s$3({renderer:s,event:n});i.geometry=this.createFetchPopupFeaturesQueryGeometry(e,o);const l=new Set,{objectIdField:h}=r$1,u=r(t)?t.clientGraphics:null;if(u)for(const a of u)l.add(a.attributes[h]);return r$1.queryFeatures(i).then((e=>e.features.filter((e=>!l.has(e.attributes[h])))))}createFetchPopupFeaturesQueryGeometry(e,t){return a$3(e,t,this.view)}isUpdating(){return null!=this.layer.renderer&&(null!=this._updatingRequiredFieldsPromise||null==this.tileRenderer||!this._proxy||!this._proxy.isReady||this._pipelineIsUpdating||this._updatingPipelineConfig||this.tileRenderer.updating||this._onGoingEdits>0)}_createClientOptions(){return {setUpdating:e=>{this._set("_pipelineIsUpdating",e);},emitEvent:e=>{this.emit(e.name,e.event);}}}async _detectQueryMode(e){if("path"in e&&w$1(e.path)&&"feature"===this.layer.type&&"point"===this.layer.geometryType&&!this.layer.capabilities.operations.supportsEditing&&t$1("featurelayer-snapshot-enabled"))try{const e=await this.layer.queryFeatureCount();if(e<=t$1("featurelayer-snapshot-point-min-threshold"))return {mode:"snapshot",featureCount:e};const i=t$1("featurelayer-snapshot-point-max-threshold"),r=t$1("featurelayer-snapshot-point-coverage"),s=this.view.extent,a=this.layer.fullExtent,n=null==a?void 0:a.clone().intersection(s),o=(null==n?void 0:n.width)*(null==n?void 0:n.height),l=(null==a?void 0:a.width)*(null==a?void 0:a.height),h=0===l?0:o/l;if(e<=i&&h>=r)return {mode:"snapshot",featureCount:e}}catch(i){W.warn("mapview-feature-layer","Encountered an error when querying for featureCount",{error:i});}return {mode:"on-demand"}}async _createServiceOptions(){const e=this.layer;if("stream"===e.type)return null;const{capabilities:t,objectIdField:r}=e,s=e.fields.map((e=>e.toJSON())),a=e.fullExtent&&e.fullExtent.toJSON(),n=e$3(e.geometryType),o=e.timeInfo&&e.timeInfo.toJSON()||null,l=e.spatialReference?e.spatialReference.toJSON():null,h="feature"===e.type?e.customParameters:null,u="feature"===e.type?e.globalIdField:null;let d;"ogc-feature"===e.type?d=e.source.getFeatureDefinition():K(e.source)?d=await e.source.openPorts():e.parsedUrl&&(d=y$1(e.parsedUrl),"dynamicDataSource"in e&&e.dynamicDataSource&&(d.query={layer:JSON.stringify({source:e.dynamicDataSource})}));const{mode:p,featureCount:c}=await this._detectQueryMode(d);return {type:p,featureCount:c,globalIdField:u,maxRecordCount:t.query.maxRecordCount,tileMaxRecordCount:t.query.tileMaxRecordCount,capabilities:t,fields:s,fullExtent:a,geometryType:n,objectIdField:r,source:d,timeInfo:o,spatialReference:l,customParameters:h}}async _createMemoryServiceOptions(e){const t=await e.openPorts();return {...this._createServiceOptions(),type:"memory",source:t}}_cleanUpQuery(e){const t=R$1.from(e)||this.createQuery();return t.outSpatialReference||(t.outSpatialReference=this.view.spatialReference),t}_createUpdateClusterSizeTask(e,t){return this.watch("_aggregateValueRanges",(async i=>{this._updateClusterEffectiveRendererSizeVariable(e,t,i),this._updatingPipelineConfig||this.tileRenderer.onConfigUpdate(this._effectiveRenderer);}))}async _updateClusterEffectiveRendererSizeVariable(e,t,i){if(e.dynamicClusterSize&&"visualVariables"in e&&e.visualVariables){const r$1=d$4(e.visualVariables);if(r(r$1)&&"cluster_count"===r$1.field){const s=e.visualVariables.indexOf(r$1);e.visualVariables[s]=f(t,i);const a=e.clone();a.dynamicClusterSize=!0,this._set("_effectiveRenderer",a);}}}_getEffectiveRenderer(){const e=this.layer.renderer,t=this.layer.featureReduction;if(r(this._updateClusterSizeTask)&&(this._updateClusterSizeTask.remove(),this._updateClusterSizeTask=null),t&&"cluster"===t.type&&m$2(e)){const i=t,s=[],a=c$3(s,e,i,this._aggregateValueRanges);return A(this._updateClusterSizeTask,(e=>e.remove())),this._updateClusterSizeTask=this._createUpdateClusterSizeTask(a,i),{renderer:a,aggregateFields:s,featureReduction:t}}return {renderer:e,aggregateFields:[],featureReduction:null}}_acquireTile(e){const t=this.tileRenderer.acquireTile(e);return t.once("attach",(()=>{this.requestUpdate();})),t}_releaseTile(e){this.tileRenderer.releaseTile(e);}async _initTileRenderer(e$1){const t=await e(e$1,{layerView:this,tileInfoView:this.view.featuresTilingScheme,layer:this.layer});return this.tileRenderer&&(this._tileStrategy.clear(),this.tileRenderer.uninstall(this.container),this.tileRenderer.destroy(),this.tileRenderer=null),this.destroyed?null:(this._proxy.tileRenderer=t,this._set("tileRenderer",t),this.tileRenderer.install(this.container),this.tileRenderer.onConfigUpdate(e$1),this.requestUpdate(),this.tileRenderer)}_createTileRendererHash(e){return `${"heatmap"===e.type?"heatmap":"symbol"}.${"dot-density"===e.type}`}_createFeatureDataHash(e,t,i){const r$1=e.getAttributeHash(),s=JSON.stringify(t),n=r(i)&&JSON.stringify(i.filter),o=JSON.stringify(this.timeExtent);let l="";return this._visibilityOverrides.forEach((e=>l+=e)),`${r$1}.${s}.${n}.${o}.${l}`}get hasFilter(){const e=!!("floorInfo"in this.layer&&this.layer.floorInfo&&this.view.floors&&this.view.floors.length);return !!this.filter||e||!!this._visibilityOverrides.size||!!this.timeExtent}_injectOverrides(e){const t=r(e)?e.timeExtent:null,i=r(this.timeExtent)&&r(t)?this.timeExtent.intersection(t):this.timeExtent||t;let r$1=null;const s="floorInfo"in this.layer&&this.layer.floorInfo;if(s){const t=r(e)&&e.where;r$1=this._addFloorFilterClause(t);}if(!this._visibilityOverrides.size&&!i&&!s)return e;const n=r(e)&&e.clone()||new j;return n.hiddenIds=this._visibilityOverrides,n.timeExtent=i,r$1&&(n.where=r$1),n}_addFloorFilterClause(e){const t=this.layer;let i=e||"";if("floorInfo"in t&&t.floorInfo){var r$1;let e=this.view.floors;if(!e||!e.length)return i;null!=(r$1=t.floorInfo.viewAllLevelIds)&&r$1.length&&(e=t.floorInfo.viewAllLevelIds);const s=e.filter((e=>""!==e)).map((e=>"'"+e+"'"));s.push("''");const n=t.floorInfo.floorField;let o="("+n+" IN ({ids}) OR "+n+" IS NULL)";if(o=o.replace("{ids}",s.join(", ")),r(i)&&i.includes(n)){let e=new RegExp("AND \\("+n+".*NULL\\)","g");i=i.replace(e,""),e=new RegExp("\\("+n+".*NULL\\)","g"),i=i.replace(e,""),i=i.replace(/\s+/g," ").trim();}i=""!==i?"("+i+") AND "+o:o;}return ""!==i?i:null}_createConfiguration(e,t,i){const r$2="feature"===this.layer.type&&this.layer.historicMoment?this.layer.historicMoment.getTime():void 0,s="feature"===this.layer.type?this.layer.gdbVersion:void 0,o=new Array(N),l=this._injectOverrides(t);o[0]=r(l)?l.toJSON():null,o[1]=r(i)&&i.filter?i.filter.toJSON():null;const h=k$1(e);if(t$2(h))return null;const u=r$1();return {definitionExpression:this.layer.definitionExpression,availableFields:this.availableFields,gdbVersion:s,historicMoment:r$2,devicePixelRatio:window.devicePixelRatio||1,filters:o,schema:h,supportsTextureFloat:u.supportsTextureFloat,maxTextureSize:u.maxTextureSize}}_hasRequiredSupport(e){var t;return !("dot-density"===(null==(t=e.renderer)?void 0:t.type)&&!r$1().supportsTextureFloat)||(W.error(new s$2("webgl-missing-extension","Missing WebGL extension OES_Texture_Float which is required for DotDensity")),!1)}_onceTilesUpdated(){return this.requestUpdate(),$$1(this,"_pipelineIsUpdating",!1)}_lockGPUUploads(){this.tileRenderer&&this.tileRenderer.lockGPUUploads();}_unlockGPUUploads(){this.tileRenderer&&this.tileRenderer.unlockGPUUploads();}_forceAttributeTextureUpload(){this.tileRenderer&&this.tileRenderer.forceAttributeTextureUpload();}_update(){this.view.timeline.begin(`${this.layer.title} (FeatureLayer) Initial Pipeline Config`);const e=this._doUpdate();this._updatingPromise=e;const t=()=>{e===this._updatingPromise&&this._set("_updatingPipelineConfig",!1),this.view&&this.view.timeline.end(`${this.layer.title} (FeatureLayer) Initial Pipeline Config`);};e.then(t).catch((e=>{g$1(e)||W.error(e),t();}));}_addHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1);}else this._highlightIds.set(t,1);this._updateHighlight().catch((e=>{g$1(e)||W.error(e);}));}_removeHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;0===e?this._highlightIds.delete(t):this._highlightIds.set(t,e);}this._updateHighlight().catch((e=>{g$1(e)||W.error(e);}));}_createHittestResult(e){return e.layer=this.layer,e.sourceLayer=this.layer,r(e.geometry)&&(e.geometry.spatialReference=this.view.spatialReference),e}async _hitTest(e,t){if(this.suspended||!this.tileRenderer)return null;const i=await this.tileRenderer.hitTest(e,t);if(0===i.length)return await C$1(1),null;const s=i[0];if(!B(s)){const e=await this._proxy.getFeature(s);return A(e,(e=>this._createHittestResult(n.fromJSON(e))))}const o=await this._proxy.getAggregate(s);if(t$2(o))return null;if(r(o.referenceId)){const e=await this._proxy.getFeature(o.referenceId);return A(e,(e=>this._createHittestResult(n.fromJSON(e))))}return this._createHittestResult(c$1.fromJSON(o))}};e$1([y()],X.prototype,"_serviceOptions",void 0),e$1([y()],X.prototype,"_proxy",void 0),e$1([y()],X.prototype,"_pipelineIsUpdating",void 0),e$1([y()],X.prototype,"_updatingPipelineConfig",void 0),e$1([y()],X.prototype,"_effectiveRenderer",void 0),e$1([y()],X.prototype,"_aggregateValueRanges",void 0),e$1([y()],X.prototype,"_onGoingEdits",void 0),e$1([y()],X.prototype,"_isRefreshing",void 0),e$1([y()],X.prototype,"labelsVisible",null),e$1([y({type:j})],X.prototype,"filter",void 0),e$1([y({type:l$2})],X.prototype,"effect",null),e$1([y({readOnly:!0})],X.prototype,"effects",null),e$1([y({readOnly:!0})],X.prototype,"queryMode",null),e$1([y()],X.prototype,"renderingConfigHash",null),e$1([y()],X.prototype,"tileRenderer",void 0),e$1([y()],X.prototype,"updating",void 0),X=e$1([i$1("esri.views.2d.layers.FeatureLayerView2D")],X);var Y=X;

export default Y;
