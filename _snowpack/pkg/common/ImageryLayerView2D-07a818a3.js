import { e, y as y$1, i, s, P as r, _ as j$1, n as n$1, r as r$1, u as u$1, aa as q, M, X as C, B as g$1, C as U } from './Identifiable-c8406192.js';
import './config-b3bf08ce.js';
import { d as d$2, h } from './watchUtils-880dbce7.js';
import { i as i$2 } from './MapView-287c7d57.js';
import { l, d as d$3 } from './LayerView2D-57cb193a.js';
import { w } from './OperationalLayer-d48a5914.js';
import { R } from './Query-448be42b.js';
import { d as d$1 } from './popupUtils-8084719b.js';
import { c } from './symbols-a702d148.js';
import { n as n$2 } from './Graphic-9f79c7db.js';
import { p as p$1 } from './vectorFieldUtils-e8711a52.js';
import { m } from './GraphicsCollection-afd60f67.js';
import { g as g$2 } from './rasterProjectionHelper-b07e4f07.js';
import { r as r$2 } from './Container-0dd65e2f.js';
import { e as et } from './BaseGraphicContainer-3565dd41.js';
import { i as i$1 } from './GraphicContainer-e43c3754.js';
import { m as m$1 } from './pixelUtils-5dbb0680.js';
import { e as e$1 } from './Bitmap-a7ead8ae.js';
import { t } from './BitmapContainer-fdcd30a9.js';
import { S } from './ExportStrategy-e1a091c6.js';
import './CollectionFlattener-5ff807fc.js';
import './workers-31c2755c.js';
import './Widget-2f53b352.js';
import './HandleOwner-2c2dff93.js';
import './PopupTemplate-77ad81c4.js';
import './fieldUtils-a9f71c96.js';
import './GoTo-21ecf3ed.js';
import './widget-0e54f9c7.js';
import './unitUtils-1b0a3531.js';
import './RelationshipQuery-1cbf03e3.js';
import './QueryTask-60c0f90b.js';
import './FeatureSet-ceb33ccf.js';
import './jsonUtils-d762dc00.js';
import './Field-e6fe6b12.js';
import './fieldType-769fe7ff.js';
import './persistableUrlUtils-b4be11a9.js';
import './uid-7967dd4d.js';
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
import './arcgisLayerUrl-d85d6d65.js';
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
import './TimeExtent-155cb8a4.js';
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
import './TileInfoView-40300351.js';
import './TileKey-482fe256.js';
import './mathUtils-25e61b42.js';
import './vec3-ae5ae182.js';
import './TileInfo-f085f660.js';
import './aaBoundingRect-a3d841c1.js';
import './Map-3c24a571.js';
import './TablesMixin-d10799e4.js';
import './mat3-425ec876.js';
import './vec2-f6c2e17c.js';
import './TileStrategy-ff1490fc.js';
import './unitBezier-6bff3f6f.js';
import './projection-1aa78979.js';
import './mat4-3619c4da.js';
import './capabilities-6619b906.js';
import './mat4f32-575d0c83.js';
import './_commonjsHelpers-268aa74f.js';
import './definitions-681c54ec.js';
import './schemaUtils-da3a1cd7.js';
import './MD5-944ef260.js';
import './Utils-0d5f7d82.js';
import './FramebufferObject-903a1e6f.js';
import './MaterialKey-1dd9041e.js';
import './visualVariablesUtils-c37b8ac9.js';
import './Rect-7bb5ea0f.js';
import './BidiEngine-aa559a1b.js';
import './WGLMeshFactory-30b8f0b9.js';
import './ComputedAttributeStorage-2aa309af.js';
import './quickselect-558f6195.js';
import './FeatureSetReader-a4e80fde.js';
import './centroid-a0ceb19b.js';
import './visualVariablesUtils-4c7ed7ac.js';
import './tileUtils-aab0f1e2.js';
import './TurboLine-5afa5e0b.js';
import './GeometryUtils-04b09680.js';
import './quantizationUtils-a3fdf3fa.js';
import './json-79b5edc1.js';
import './VertexArrayObject-21aea4dd.js';
import './FeatureContainer-c35a73f4.js';
import './TileContainer-21a4a969.js';
import './WGLContainer-c91d6469.js';
import './vec4f32-27a1bf8c.js';
import './ShaderCompiler-c2405d4f.js';
import './earcut-d6248195.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const n=n=>{let c=class extends n{constructor(){super(...arguments),this.view=null;}async fetchPopupFeatures(e,o){const{layer:t}=this;if(!e)throw new s("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t});const{popupEnabled:i}=t,n=d$1(t,o);if(!i||!r(n))throw new s("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:i,popupTemplate:n});const c=await n.getRequiredFields(),m=new R;m.geometry=e,m.outFields=c,m.outSpatialReference=e.spatialReference;const l=this.view.resolution,y="2d"===this.view.type?new j$1(l,l,this.view.spatialReference):new j$1(.5*l,.5*l,this.view.spatialReference),{returnTopmostRaster:d,showNoDataRecords:w}=n.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},h={returnDomainValues:!0,returnTopmostRaster:d,pixelSize:y,showNoDataRecords:w};return t.queryVisibleRasters(m,h).then((e=>e))}canResume(){var e;return !!super.canResume()&&(null==(e=this.timeExtent)||!e.isEmpty)}};return e([y$1()],c.prototype,"layer",void 0),e([y$1()],c.prototype,"suspended",void 0),e([y$1(w)],c.prototype,"timeExtent",void 0),e([y$1()],c.prototype,"view",void 0),c=e([i("esri.views.layers.ImageryLayerView")],c),c};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const f=n$1.getLogger("esri.views.2d.layers.imagery.ImageryGraphicsView2D");let j=class extends u$1{constructor(){super(...arguments),this.attached=!1,this.container=new r$2,this.updateRequested=!1,this._graphicsView=null,this._projectFullExtentPromise=null,this.type="Graphics",this._graphics=new m,this._updateGraphics=q((async(t,e)=>{if(!t.stationary)return;const r=t.state,i=new M({xmin:r.extent.xmin,ymin:r.extent.ymin,xmax:r.extent.xmax,ymax:r.extent.ymax,spatialReference:r.spatialReference}),s=t.state.size[0],a=t.state.size[1],o={};o.timeExtent=this.timeExtent,o.requestAsImageElement=!1,o.signal=e,null==this._projectFullExtentPromise&&(this._projectFullExtentPromise=this._getProjectedFullExtent(i.spatialReference));const n="vector-field"===this.layer.renderer.type?this.layer.renderer.symbolTileSize:50,h=await this._projectFullExtentPromise,l=p$1(i,s,a,n,h),u=await this.layer.fetchImage(l.extent,l.width,l.height,o),d=this.layer.renderer;if("vector-field"===d.type){this._pixelData={extent:l.extent,pixelBlock:u.pixelData.pixelBlock};const e=await d.getGraphicsFromPixelData(u.pixelData,"vector-uv"===this.layer.rasterInfo.dataType);this._graphicsView.update(t),await C(0).then((()=>{this._graphics.set("items",e);}));}}));}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1;}get updating(){return !this.attached||this.isUpdating()}update(t){this._updateGraphics(t).catch((t=>{g$1(t)||f.error(t);}));}hitTest(t,e){const r=this.view.toMap(c(t,e));return Promise.resolve(new n$2({attributes:{},geometry:r,layer:this.layer}))}attach(){this._graphicsView=new et({view:this.view,graphics:this._graphics,requestUpdateCallback:()=>this.requestUpdate(),container:new i$1(this.view.featuresTilingScheme)}),this.attached=!0;}detach(){this._graphics.destroy(),this._graphicsView.destroy(),this.container.removeChild(this._graphicsView.container),this._graphicsView=null;}moveStart(){}viewChange(){}moveEnd(){}install(t){this.container.addChild(this._graphicsView.container),t.addChild(this.container);}uninstall(t){this.container.removeChild(this._graphicsView.container),t.removeChild(this.container);}isUpdating(){return this._graphicsView.updating||this.updateRequested}getPixelData(){return this.updating?null:this._pixelData}redraw(){}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate());}async _getProjectedFullExtent(t){try{return await g$2(this.layer.fullExtent,t)}catch(e){try{const e=(await U(this.layer.url,{query:{option:"footprints",outSR:t.wkid||JSON.stringify(t.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return e?M.fromJSON(e):null}catch{return null}}}};e([y$1()],j.prototype,"attached",void 0),e([y$1()],j.prototype,"container",void 0),e([y$1()],j.prototype,"layer",void 0),e([y$1()],j.prototype,"timeExtent",void 0),e([y$1()],j.prototype,"view",void 0),e([y$1()],j.prototype,"updateRequested",void 0),e([y$1()],j.prototype,"updating",null),e([r$1({graphics:"Graphics"})],j.prototype,"type",void 0),j=e([i("esri.views.2d.layers.imagery.ImageryGraphicsView2D")],j);var v=j;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const u=n$1.getLogger("esri.views.2d.layers.imagery.ImageryView2D");let g=class extends u$1{constructor(){super(...arguments),this.attached=!1,this.container=new r$2,this.updateRequested=!1,this.type="Imagery",this._bitmapView=null;}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1;}get updating(){return !this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch((e=>{g$1(e)||u.error(e);}));}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren();}hitTest(e,t){const r=this.view.toMap(c(e,t));return Promise.resolve(new n$2({attributes:{},geometry:r,layer:this.layer}))}attach(){const e=this.layer.version>=10,t$1=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,r=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this._bitmapView=new t,this.strategy=new S({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t$1,imageMaxWidth:r,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()}),this.attached=!0;}moveStart(){}viewChange(){}moveEnd(){}install(e){this.container.addChild(this._bitmapView),e.addChild(this.container);}uninstall(e){this.container.removeChild(this._bitmapView),e.removeChild(this.container);}redraw(){this.strategy.updateExports((e=>{e.source instanceof HTMLImageElement?e.requestRender():this.layer.applyRenderer({pixelBlock:e.source.pixelBlock}).then((t=>{const r=e.source;r.pixelBlock=t.pixelBlock,r.filter=e=>this.layer.applyFilter(e),this.container.requestRender();}));}));}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate());}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.container.children;if(1===e.length&&e[0].source)return {extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,r=e.map((e=>e.source)).filter((e=>e.extent&&e.extent.intersects(t))).map((e=>({extent:e.extent,pixelBlock:e.originalPixelBlock}))),i=m$1(r,t);return i?{extent:i.extent,pixelBlock:i.pixelBlock}:null}return null}_fetchImage(e,t,r,i){return (i=i||{}).timeExtent=this.timeExtent,i.requestAsImageElement=!0,this.layer.fetchImage(e,t,r,i).then((e=>e.imageElement?e.imageElement:this.layer.applyRenderer(e.pixelData,{signal:i.signal}).then((t=>{const r=new e$1(t.pixelBlock,t.extent.clone(),e.pixelData.pixelBlock);return r.filter=e=>this.layer.applyFilter(e),r}))))}};e([y$1()],g.prototype,"attached",void 0),e([y$1()],g.prototype,"container",void 0),e([y$1()],g.prototype,"layer",void 0),e([y$1()],g.prototype,"strategy",void 0),e([y$1()],g.prototype,"timeExtent",void 0),e([y$1()],g.prototype,"view",void 0),e([y$1()],g.prototype,"updateRequested",void 0),e([y$1()],g.prototype,"updating",null),e([r$1({imagery:"Imagery"})],g.prototype,"type",void 0),g=e([i("esri.views.2d.layers.imagery.ImageryView2D")],g);var y=g;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let p=class extends(n(i$2(l(d$3)))){constructor(){super(...arguments),this._exportImageVersion=-1;}initialize(){this.handles.add(d$2(this,["layer.blendMode"],(e=>{this.subview&&(this.subview.container.blendMode=e);}),!0));}get pixelData(){return this.updating?null:this.subview.getPixelData()}get updating(){return !(this.subview&&!this.subview.updating)}hitTest(e,t){return this.suspended||!this.subview?Promise.resolve(null):this.subview.hitTest(e,t)}update(e){var t;null==(t=this.subview)||t.update(e);}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.handles.add([d$2(this,"layer.exportImageServiceParameters.version",(e=>{this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate());})),this.watch("timeExtent",(()=>{this.subview.timeExtent=this.timeExtent,this.requestUpdate();})),this.layer.on("redraw",(()=>this.subview.redraw())),h(this.layer,"renderer",(()=>this._setSubView()))],"imagerylayerview-update");}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.subview.destroy(),this.handles.remove("imagerylayerview-update"),this._exportImageVersion=-1;}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}async doRefresh(){this.requestUpdate();}isUpdating(){return !this.subview||!this.suspended&&this.subview.isUpdating()}_setSubView(){var e;let t="Imagery";var s,i;("vector-field"===(null==(e=this.layer.renderer)?void 0:e.type)&&"lerc"===this.layer.format&&(t="Graphics"),this.subview&&this.subview.type===t)||(null==(s=this.subview)||s.uninstall(this.container),null==(i=this.subview)||i.destroy(),this.subview="Imagery"===t?new y({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new v({layer:this.layer,view:this.view,timeExtent:this.timeExtent}),this.subview.attach(),this.subview.install(this.container),this.subview.container.blendMode=this.layer.blendMode);this.requestUpdate();}};e([y$1()],p.prototype,"pixelData",null),e([y$1({readOnly:!0})],p.prototype,"updating",null),e([y$1()],p.prototype,"subview",void 0),p=e([i("esri.views.2d.layers.ImageryLayerView2D")],p);var d=p;

export default d;
