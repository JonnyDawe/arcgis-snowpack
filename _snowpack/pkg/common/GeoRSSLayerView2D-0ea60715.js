import { L, e, i as i$1 } from './Identifiable-c8406192.js';
import './config-b3bf08ce.js';
import { M } from './PopupTemplate-77ad81c4.js';
import { n } from './Graphic-9f79c7db.js';
import { d } from './watchUtils-880dbce7.js';
import { c, m } from './jsonUtils-abe1bd07.js';
import g$1 from './FeatureSet-ceb33ccf.js';
import { l, d as d$1 } from './LayerView2D-57cb193a.js';
import { e as et } from './BaseGraphicContainer-3565dd41.js';
import { i } from './GraphicContainer-e43c3754.js';
import './fieldUtils-a9f71c96.js';
import './jsonUtils-d762dc00.js';
import './symbols-a702d148.js';
import './persistableUrlUtils-b4be11a9.js';
import './uid-7967dd4d.js';
import './UniqueValueRenderer-6eda9445.js';
import './ColorStop-27e1a5ee.js';
import './styleUtils-062f64a7.js';
import './sizeVariableUtils-33233df0.js';
import './visualVariableUtils-66f67c57.js';
import './compilerUtils-006be997.js';
import './lengthUtils-cb1a7b62.js';
import './unitUtils-1b0a3531.js';
import './diffUtils-e1cd943c.js';
import './LRUCache-9b61e325.js';
import './MemCache-1f56f5a2.js';
import './Field-e6fe6b12.js';
import './fieldType-769fe7ff.js';
import './HandleOwner-2c2dff93.js';
import './Container-0dd65e2f.js';
import './mat4f32-575d0c83.js';
import './mat4-3619c4da.js';
import './vec3f64-a6795633.js';
import './vec3-ae5ae182.js';
import './_commonjsHelpers-268aa74f.js';
import './aaBoundingRect-a3d841c1.js';
import './defaults-91b05a2c.js';
import './defaultsJSON-375e89aa.js';
import './definitions-681c54ec.js';
import './capabilities-6619b906.js';
import './normalizeUtils-2bbe7974.js';
import './schemaUtils-da3a1cd7.js';
import './MD5-944ef260.js';
import './Utils-0d5f7d82.js';
import './FramebufferObject-903a1e6f.js';
import './MaterialKey-1dd9041e.js';
import './visualVariablesUtils-c37b8ac9.js';
import './vec2-f6c2e17c.js';
import './TileStrategy-ff1490fc.js';
import './TileInfoView-40300351.js';
import './TileKey-482fe256.js';
import './Rect-7bb5ea0f.js';
import './BidiEngine-aa559a1b.js';
import './WGLMeshFactory-30b8f0b9.js';
import './ComputedAttributeStorage-2aa309af.js';
import './Query-448be42b.js';
import './TimeExtent-155cb8a4.js';
import './quickselect-558f6195.js';
import './featureConversionUtils-6830a580.js';
import './OptimizedFeatureSet-d6270f6b.js';
import './FeatureSetReader-a4e80fde.js';
import './centroid-a0ceb19b.js';
import './FieldsIndex-d0d5f38b.js';
import './visualVariablesUtils-4c7ed7ac.js';
import './tileUtils-aab0f1e2.js';
import './TurboLine-5afa5e0b.js';
import './GeometryUtils-04b09680.js';
import './quantizationUtils-a3fdf3fa.js';
import './projection-1aa78979.js';
import './json-79b5edc1.js';
import './VertexArrayObject-21aea4dd.js';
import './FeatureContainer-c35a73f4.js';
import './TileContainer-21a4a969.js';
import './mat3-425ec876.js';
import './MapView-287c7d57.js';
import './CollectionFlattener-5ff807fc.js';
import './workers-31c2755c.js';
import './Widget-2f53b352.js';
import './GoTo-21ecf3ed.js';
import './widget-0e54f9c7.js';
import './RelationshipQuery-1cbf03e3.js';
import './QueryTask-60c0f90b.js';
import './Task-21d7c7ba.js';
import './query-95e8633c.js';
import './queryZScale-3f81db56.js';
import './zscale-209a474d.js';
import './pbfQueryUtils-fdd38078.js';
import './pbf-02a10316.js';
import './FeatureLayer-346f29ad.js';
import './Layer-d22ad00d.js';
import './MultiOriginJSONSupport-29c9a66e.js';
import './arcgisLayerUrl-d85d6d65.js';
import './HeightModelInfo-f665a73c.js';
import './OperationalLayer-d48a5914.js';
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
import './fieldProperties-b389086f.js';
import './styleUtils-f2703dfb.js';
import './popupUtils-5e9c2795.js';
import './utils-68b4615c.js';
import './ItemCache-717f7581.js';
import './mathUtils-25e61b42.js';
import './TileInfo-f085f660.js';
import './Map-3c24a571.js';
import './TablesMixin-d10799e4.js';
import './GraphicsCollection-afd60f67.js';
import './unitBezier-6bff3f6f.js';
import './WGLContainer-c91d6469.js';
import './vec4f32-27a1bf8c.js';
import './ShaderCompiler-c2405d4f.js';
import './earcut-d6248195.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let y=class extends(l(d$1)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}hitTest(e,r){if(this.suspended||!this.graphicsViews.length)return Promise.resolve(null);const s=this.graphicsViews.reverse().map((s=>s.hitTest(e,r)));return Promise.all(s).then((e=>e.filter(((e,r)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[r]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.layer.featureCollections.forEach((e=>{const r=g$1.fromJSON(e.featureSet),t=new(L.ofType(n))(r.features);let p;if(this._graphicsViewMap[r.geometryType])p=this._graphicsViewMap[r.geometryType],p.graphics.addMany(t);else {const s=e.layerDefinition.drawingInfo,o=e.popupInfo?M.fromJSON(e.popupInfo):null,l=c(s.renderer);p=new et({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:t,renderer:l,container:new i(this.view.featuresTilingScheme)}),this._graphicsViewMap[r.geometryType]=p,this._popupTemplates.set(p,o),"polygon"!==r.geometryType||this.layer.polygonSymbol?"polyline"!==r.geometryType||this.layer.lineSymbol?"point"!==r.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=l.symbol):this.layer.lineSymbol=l.symbol:this.layer.polygonSymbol=l.symbol,this.graphicsViews.push(p),this.container.addChild(p.container);}})),this.handles.add([d(this.layer,"polygonSymbol",(e=>{this._graphicsViewMap.polygon.renderer=new m({symbol:e});})),d(this.layer,"lineSymbol",(e=>{this._graphicsViewMap.polyline.renderer=new m({symbol:e});})),d(this.layer,"pointSymbol",(e=>{this._graphicsViewMap.point.renderer=new m({symbol:e});}))]);}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this.graphicsViews.length=0;}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}};y=e([i$1("esri.views.2d.layers.GeoRSSLayerView2D")],y);var g=y;

export default g;