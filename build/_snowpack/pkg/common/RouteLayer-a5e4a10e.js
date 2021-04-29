import { e, y, L, a1 as e$1, i } from './Identifiable-c8406192.js';
import './config-b3bf08ce.js';
import { b } from './Layer-d22ad00d.js';
import { l as l$1 } from './MultiOriginJSONSupport-29c9a66e.js';
import { l } from './OperationalLayer-d48a5914.js';
import { u } from './PortalLayer-8f26d9e1.js';
import { k as ke } from './FeatureLayer-346f29ad.js';
import './persistableUrlUtils-b4be11a9.js';
import './TimeExtent-155cb8a4.js';
import './fieldUtils-a9f71c96.js';
import './lengthUtils-cb1a7b62.js';
import './unitUtils-1b0a3531.js';
import './PopupTemplate-77ad81c4.js';
import './symbols-a702d148.js';
import './arcgisLayerUrl-d85d6d65.js';
import './HeightModelInfo-f665a73c.js';
import './UniqueValueRenderer-6eda9445.js';
import './ColorStop-27e1a5ee.js';
import './styleUtils-062f64a7.js';
import './sizeVariableUtils-33233df0.js';
import './visualVariableUtils-66f67c57.js';
import './compilerUtils-006be997.js';
import './Graphic-9f79c7db.js';
import './jsonUtils-d762dc00.js';
import './uid-7967dd4d.js';
import './diffUtils-e1cd943c.js';
import './jsonUtils-abe1bd07.js';
import './LRUCache-9b61e325.js';
import './MemCache-1f56f5a2.js';
import './FieldsIndex-d0d5f38b.js';
import './FeatureSet-ceb33ccf.js';
import './Field-e6fe6b12.js';
import './fieldType-769fe7ff.js';
import './workers-31c2755c.js';
import './watchUtils-880dbce7.js';
import './zscale-209a474d.js';
import './queryZScale-3f81db56.js';
import './ArcGISService-7a5cc3ad.js';
import './BlendLayer-f2f3b180.js';
import './FeatureType-a62beea1.js';
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
import './Query-448be42b.js';
import './styleUtils-f2703dfb.js';
import './popupUtils-5e9c2795.js';
import './RelationshipQuery-1cbf03e3.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let p=class extends(l(u(l$1(b)))){constructor(...e){super(...e),this.type="route";}get barrierLines(){return this._getNamedFeatureLayer("PolylineBarriers")}get barrierPoints(){return this._getNamedFeatureLayer("Barriers")}get barrierPolygons(){return this._getNamedFeatureLayer("PolygonBarriers")}get directionLines(){return this._getNamedFeatureLayer("DirectionLines")}get directionPoints(){return this._getNamedFeatureLayer("DirectionPoints")}readFeatureCollectionsFromItem(e,t,r){return this.revert("featureCollections","portal-item"),t.layers.map((e=>{const t=new ke;return t.read(e,r),t}))}readFeatureCollectionsFromWebMap(e,t,r){return t.featureCollection.layers.map((e=>{const t=new ke;return t.read(e,r),t}))}get fullExtent(){const e=null;return this.featureCollections?this.featureCollections.reduce(((e,t)=>e?e.union(t.fullExtent):t.fullExtent),e):e}get maxScale(){const e=null;return this.featureCollections?this.featureCollections.reduce(((e,t)=>null==e?t.maxScale:Math.min(e,t.maxScale)),e):0}set maxScale(e){this.featureCollections.forEach((t=>{t.maxScale=e;})),this._set("maxScale",e);}get minScale(){const e=null;return this.featureCollections?this.featureCollections.reduce(((e,t)=>null==e?t.minScale:Math.min(e,t.minScale)),e):0}set minScale(e){this.featureCollections.forEach((t=>{t.minScale=e;})),this._set("minScale",e);}get routeInfo(){return this._getNamedFeatureLayer("RouteInfo")}get stops(){return this._getNamedFeatureLayer("Stops")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}_getNamedFeatureLayer(e){if(this.featureCollections)return this.featureCollections.find((t=>t.title===e))}};e([y()],p.prototype,"barrierLines",null),e([y()],p.prototype,"barrierPoints",null),e([y()],p.prototype,"barrierPolygons",null),e([y()],p.prototype,"directionLines",null),e([y()],p.prototype,"directionPoints",null),e([y({type:L.ofType(ke)})],p.prototype,"featureCollections",void 0),e([e$1("portal-item","featureCollections",["layers"])],p.prototype,"readFeatureCollectionsFromItem",null),e([e$1("web-map","featureCollections",["featureCollection.layers"])],p.prototype,"readFeatureCollectionsFromWebMap",null),e([y({readOnly:!0})],p.prototype,"fullExtent",null),e([y({type:["show","hide"]})],p.prototype,"listMode",void 0),e([y()],p.prototype,"maxScale",null),e([y()],p.prototype,"minScale",null),e([y()],p.prototype,"routeInfo",null),e([y()],p.prototype,"stops",null),e([y({readOnly:!0,json:{read:!1}})],p.prototype,"type",void 0),p=e([i("esri.layers.RouteLayer")],p);var c=p;

export default c;
