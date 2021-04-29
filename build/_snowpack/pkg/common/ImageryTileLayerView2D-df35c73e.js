import { e as e$1, y, i, s, P as r, J as t$1, n as n$4, aa as q$1, M as M$1, B as g$3, V as a$1, Y as e$2, _ as j, E } from './Identifiable-c8406192.js';
import './config-b3bf08ce.js';
import { c as c$1 } from './symbols-a702d148.js';
import { n as n$1 } from './Graphic-9f79c7db.js';
import { h as h$2 } from './watchUtils-880dbce7.js';
import { n as n$2, u as u$1 } from './pixelUtils-5dbb0680.js';
import { x as x$1 } from './TileInfo-f085f660.js';
import { y as y$1, g, b as b$1 } from './rasterProjectionHelper-b07e4f07.js';
import { g as g$2, u, s as s$1, i as i$6 } from './RawBlockCache-6450bf57.js';
import { r as r$5 } from './capabilities-6619b906.js';
import { g as r$1, p as pt, i as i$5 } from './MapView-287c7d57.js';
import { h as h$1 } from './TileInfoView-40300351.js';
import { t, f as c, p as p$1 } from './TileStrategy-ff1490fc.js';
import { l, d as d$1 } from './LayerView2D-57cb193a.js';
import { a as a$2 } from './drapedUtils-20f00662.js';
import { d } from './popupUtils-8084719b.js';
import { i as i$4 } from './aaBoundingRect-a3d841c1.js';
import { I } from './Utils-0d5f7d82.js';
import { i as i$2, n as n$3, b as r$3, g as g$1 } from './WGLContainer-c91d6469.js';
import { r as r$4, i as i$3 } from './TileContainer-21a4a969.js';
import { r as r$2, M, h, b, i as i$1 } from './mat3-425ec876.js';
import { a } from './Container-0dd65e2f.js';
import './fieldUtils-a9f71c96.js';
import './persistableUrlUtils-b4be11a9.js';
import './jsonUtils-d762dc00.js';
import './PopupTemplate-77ad81c4.js';
import './uid-7967dd4d.js';
import './unitUtils-1b0a3531.js';
import './projection-1aa78979.js';
import './vec3f64-a6795633.js';
import './vec3-ae5ae182.js';
import './mat4-3619c4da.js';
import './CollectionFlattener-5ff807fc.js';
import './workers-31c2755c.js';
import './Widget-2f53b352.js';
import './HandleOwner-2c2dff93.js';
import './GoTo-21ecf3ed.js';
import './widget-0e54f9c7.js';
import './RelationshipQuery-1cbf03e3.js';
import './Query-448be42b.js';
import './TimeExtent-155cb8a4.js';
import './Field-e6fe6b12.js';
import './fieldType-769fe7ff.js';
import './QueryTask-60c0f90b.js';
import './FeatureSet-ceb33ccf.js';
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
import './OperationalLayer-d48a5914.js';
import './lengthUtils-cb1a7b62.js';
import './UniqueValueRenderer-6eda9445.js';
import './ColorStop-27e1a5ee.js';
import './styleUtils-062f64a7.js';
import './sizeVariableUtils-33233df0.js';
import './visualVariableUtils-66f67c57.js';
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
import './ItemCache-717f7581.js';
import './mathUtils-25e61b42.js';
import './TileKey-482fe256.js';
import './Map-3c24a571.js';
import './TablesMixin-d10799e4.js';
import './GraphicsCollection-afd60f67.js';
import './vec2-f6c2e17c.js';
import './unitBezier-6bff3f6f.js';
import './FramebufferObject-903a1e6f.js';
import './_commonjsHelpers-268aa74f.js';
import './definitions-681c54ec.js';
import './VertexArrayObject-21aea4dd.js';
import './vec4f32-27a1bf8c.js';
import './ShaderCompiler-c2405d4f.js';
import './earcut-d6248195.js';
import './GeometryUtils-04b09680.js';
import './MaterialKey-1dd9041e.js';
import './mat4f32-575d0c83.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const p=p=>{let u=class extends p{constructor(){super(...arguments),this._rasterFieldPrefix="Raster.",this.layer=null,this.view=null,this.fullExtent=null,this.tileInfo=null,this.datumTransformation=null;}get hasTilingEffects(){return this.layer.renderer&&"dynamicRangeAdjustment"in this.layer.renderer&&this.layer.renderer.dynamicRangeAdjustment}async fetchPopupFeatures(e,r$1){const{layer:i}=this;if(!e)return Promise.reject(new s("imageryTileLayerView:fetchPopupFeatures","Nothing to fetch without area",{layer:i}));const{popupEnabled:a}=i,n=d(i,r$1);if(!a||!r(n))throw new s("imageryTileLayerView:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:a,popupTemplate:n});const p=[],{value:u}=await i.identify(e);if(u){var f,m;const e=u.join(", "),t={ObjectId:0},r="Raster.ServicePixelValue";t[r]=this._formatAttributeValue(e,r);const o=null==(f=i.rasterInfo)||null==(m=f.attributeTable)?void 0:m.features;if(o&&o.length>0){const r=o.filter((t=>{const r=t.attributes.value||t.attributes.Value||t.attributes.VALUE;return String(r)===e}));if(r.length>0){const e=r[0];if(e)for(const r in e.attributes)if(e.attributes.hasOwnProperty(r)){const i=this._rasterFieldPrefix+r;t[i]=this._formatAttributeValue(e.attributes[r],i);}}}const a=new n$1(this.fullExtent.clone(),null,t);a.layer=i,a.sourceLayer=a.layer,p.push(a);}return p}updateFullExtent(){const e=this.layer.tileInfo;let t;e&&e.spatialReference||(t=new s("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer}));const r=y$1(this.layer.fullExtent,this.view.spatialReference,!1),i=g(this.layer.fullExtent,this.view.spatialReference,r);return null==i&&(t=new s("layerview:projection-not-supported","The layer extent cannot be projected to the view's spatial reference",{layer:this.layer})),this._set("fullExtent",i),this.datumTransformation||(this.datumTransformation=y$1(this.layer.fullExtent,this.view.spatialReference,!0)),t?Promise.reject(t):Promise.resolve()}_formatAttributeValue(e,t){if("string"==typeof e){const r=this.layer.popupTemplate&&this.layer.popupTemplate.fieldInfos,i=this._getFieldInfo(r,t),o=i&&i.format;if(o){let t,r;return e.trim().indexOf(",")>-1?(t=",",r=t+" ",this._formatDelimitedString(e,t,r,o)):e.trim().indexOf(" ")>-1?(t=r=" ",this._formatDelimitedString(e,t,r,o)):this._formatNumberFromString(e,o)}}return e}_getFieldInfo(e,t){if(!e||!e.length||!t)return;const r=t.toLowerCase();let i;return e.some((e=>!(!e.fieldName||e.fieldName.toLowerCase()!==r&&e.fieldName.toLowerCase()!==r.replace(/ /g,"_"))&&(i=e,!0))),i}_formatDelimitedString(e,t,r,i){return e&&t&&r&&i?e.trim().split(t).map((e=>this._formatNumberFromString(e,i))).join(r):e}_formatNumberFromString(e,t){if(!e||!t)return e;const r=Number(e);return isNaN(r)?e:t.format(r)}};return e$1([y()],u.prototype,"layer",void 0),e$1([y()],u.prototype,"view",void 0),e$1([y()],u.prototype,"fullExtent",void 0),e$1([y()],u.prototype,"tileInfo",void 0),e$1([y({readOnly:!0})],u.prototype,"hasTilingEffects",null),u=e$1([i("esri.views.layers.ImageryTileLayerView")],u),u};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const _={bandCount:3,outMin:0,outMax:1,minCutOff:[0,0,0],maxCutOff:[255,255,255],factor:[1/255,1/255,1/255],useGamma:!1,gamma:[1,1,1],gammaCorrection:[1,1,1],colormap:null,colormapOffset:null,type:"stretch"};class x extends a{constructor(t=null,e=null,s=null){super(),this._textureInvalidated=!0,this._memoryUsed=null,this._supportsBilinear=!0,this.stencilRef=0,this.coordScale=[1,1],this._symbolizerParameters=null,this.height=null,this.isRendereredSource=!1,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this.rawPixelData=null,this._suspended=!1,this._bandIds=null,this._interpolation=null,this._transformGrid=null,this.width=null,this.x=0,this.y=0,this.transforms={dvs:r$1()},this.source=t,this.transformGrid=e,this.interpolation=s;}destroy(){const t=this.getTextures();null==t||t.textures.forEach((t=>t.dispose())),this._rasterTexture=null,this._transformGridTexture=null,this._colormapTexture=null;}get symbolizerParameters(){return this._symbolizerParameters||_}set symbolizerParameters(t){this._symbolizerParameters=t;}get source(){return this._source}set source(t){this._source=t,this._rasterTexture&&(this._rasterTexture.dispose(),this._rasterTexture=null,this._rasterTextureBandIds=null,this._memoryUsed=null);}get suspended(){return this._suspended}set suspended(t){this._suspended&&!t&&this.stage&&(this.ready(),this.requestRender()),this._suspended=t;}get bandIds(){return this._bandIds}set bandIds(t){this._bandIds=t,this.invalidateTexture();}get interpolation(){return this._interpolation}set interpolation(t){this._interpolation=t,this._rasterTexture&&this._rasterTexture.setSamplingMode(!this._supportsBilinear||"bilinear"!==t&&"cubic"!==t?9728:9729);}get transformGrid(){return this._transformGrid}set transformGrid(t){this._transformGrid=t,this._transformGridTexture&&(this._transformGridTexture.dispose(),this._transformGridTexture=null,this._memoryUsed=null);}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRender());}setTransform(t$1){const o=r$2(this.transforms.dvs),[u,l]=t$1.toScreenNoRotation([0,0],this.x,this.y),h$1=this.resolution/this.pixelRatio/t$1.resolution,d=h$1*this.width,m=h$1*this.height,_=Math.PI*this.rotation/180;M(o,o,t(u,l)),M(o,o,t(d/2,m/2)),h(o,o,-_),M(o,o,t(-d/2,-m/2)),b(o,o,t(d,m)),i$1(this.transforms.dvs,t$1.displayViewMat3,o);}getTextures(){if(!this._rasterTexture)return null;const t=[],e=[];return this._transformGridTexture&&(e.push(this._transformGridTexture),t.push("u_transformGrid")),this._rasterTexture&&(e.push(this._rasterTexture),t.push("u_image")),this._colormapTexture&&(e.push(this._colormapTexture),t.push("u_colormap")),{names:t,textures:e}}getMemoryUsage(){if(t$1(this._memoryUsed)){const t=this.getTextures();if(null==t)return 0;this._memoryUsed=t.textures.map((t=>t.descriptor.width*t.descriptor.height*4)).reduce(((t,e)=>t+e));}return this._memoryUsed}onAttach(){this.invalidateTexture();}onDetach(){this.invalidateTexture();}updateTexture({context:t}){var e,s,r;if(!this.stage)return null==(e=this._rasterTexture)||e.dispose(),null==(s=this._transformGridTexture)||s.dispose(),null==(r=this._colormapTexture)||r.dispose(),this._rasterTexture=null,this._rasterTextureBandIds=null,this._transformGridTexture=null,void(this._colormapTexture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1;const i=this.source,a=i&&i.pixels&&i.pixels.length>0;this._createOrDestroyRasterTexture(t),this._rasterTexture&&(a?(this._updateColormapTexture(t),this.transformGrid&&!this._transformGridTexture&&(this._transformGridTexture=i$2(t,this.transformGrid))):this._rasterTexture.setData(null)),this.suspended||(this.ready(),this.requestRender());}_createOrDestroyRasterTexture(t){var e,s;const r=this.source?n$2(this.source,this.bandIds):null;if(!(r&&r.pixels&&r.pixels.length>0))return void(this._rasterTexture&&(this._rasterTexture.dispose(),this._rasterTextureBandIds=null,this._rasterTexture=null));const i=null==this._rasterTextureBandIds&&null==this.bandIds||this._rasterTextureBandIds&&this.bandIds&&this._rasterTextureBandIds.join("")===this.bandIds.join("");if(this._rasterTexture){if(i)return;this._rasterTexture.dispose(),this._rasterTextureBandIds=null,this._rasterTexture=null;}const a=this.interpolation||"nearest",u=this.isRendereredSource||!(null!=(e=t.capabilities.textureFloat)&&e.textureFloat);this._rasterTexture=n$3(t,r,a,u),this._supportsBilinear=null==(s=t.capabilities.textureFloat)?void 0:s.textureFloatLinear,this._rasterTextureBandIds=this.bandIds;}_updateColormapTexture(t){const e=this._colormap,s=this.symbolizerParameters.colormap;return s?e?s.length!==e.length||s.some(((t,s)=>t!==e[s]))?(this._colormapTexture&&(this._colormapTexture.dispose(),this._colormapTexture=null),this._colormapTexture=r$3(t,s),void(this._colormap=s)):void 0:(this._colormapTexture=r$3(t,s),void(this._colormap=s)):(this._colormapTexture&&(this._colormapTexture.dispose(),this._colormapTexture=null),void(this._colormap=null))}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class e extends r$4{constructor(t,e,i,a=null){super(t,e,i),this.bitmap=new x(a,null,null),this.bitmap.coordScale=i,this.bitmap.once("isReady",(()=>this.ready()));}destroy(){super.destroy(),this.bitmap.destroy(),this.bitmap=null,this.stage=null;}set stencilRef(t){this.bitmap.stencilRef=t;}get stencilRef(){return this.bitmap.stencilRef}getMemoryUsage(){return this.bitmap.getMemoryUsage()}setTransform(t,s){super.setTransform(t,s),this.bitmap.transforms.dvs=this.transforms.dvs;}onAttach(){this.bitmap.stage=this.stage;}onDetach(){this.bitmap.stage=null;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class n extends i$3{constructor(){super(...arguments),this.isCustomTilingScheme=!1;}createTile(e$1){const s=this._getTileBounds(e$1);return new e(e$1,s,this._tileInfoView.tileInfo.size)}destroyTile(){}prepareRenderPasses(e){const s=e.registerRenderPass({name:"bitmap (tile)",brushes:[g$1.raster],target:()=>this.children.map((e=>e.bitmap)),drawPhase:I.MAP});return [...super.prepareRenderPasses(e),s]}doRender(e){this.visible&&e.drawPhase===I.MAP&&super.doRender(e);}_getTileBounds(t){const i=this._tileInfoView.getTileBounds(i$4(),t);if(this.isCustomTilingScheme&&t.world){const{tileInfo:e}=this._tileInfoView,r=pt(e.spatialReference);if(r){const{resolution:s}=e.lodAt(t.level),o=r/s%e.size[0],n=o?(e.size[0]-o)*s:0;i[0]-=n*t.world,i[2]-=n*t.world;}}return i}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const V=n$4.getLogger("esri.views.2d.layers.ImageryTileLayerView2D"),L=[0,0];let q=class extends(p(i$5(l(d$1)))){constructor(){super(...arguments),this._tileStrategy=null,this._tileInfoView=null,this._fetchQueue=null,this._blockCacheRegistryUrl=null,this._blockCacheRegistryId=null,this._bitmapView=null,this._emptyTilePixelBlock=null,this._srcResolutions=null,this._previousLOD=null,this._needBlockCacheUpdate=!1,this._globalSymbolizerParams=null,this._symbolizerParams=null,this._abortController=null,this._globalUpdateRequested=!1,this._isCustomTilingScheme=!1,this.useWebGLForProcessing=!0,this._redrawDebounced=q$1((e=>this._redrawImage(e)),2e3);}initialize(){const e=this.updateFullExtent();this.addResolvingPromise(e);}get useProgressiveUpdate(){return null==this._get("useProgressiveUpdate")||this._get("useProgressiveUpdate")}set useProgressiveUpdate(e){if(this._tileStrategy&&this.useProgressiveUpdate!==e){this._tileStrategy.destroy(),this._bitmapView.removeAllChildren();const t=this._getCacheSize(e);this._tileStrategy=new c({cachePolicy:"purge",resampling:!1,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),cacheSize:t,tileInfoView:this._tileInfoView}),this._set("useProgressiveUpdate",e),this.requestUpdate();}}hitTest(e,t){if(this.suspended)return Promise.resolve(null);const i=this.view.toMap(c$1(e,t));return Promise.resolve(new n$1({attributes:{},geometry:i}))}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume();const{extent:t,resolution:i,scale:s}=e.state,r=this._tileInfoView.getClosestInfoForScale(s);if(this.layer.raster){var a;if(!this.useProgressiveUpdate||this._needBlockCacheUpdate){const e=this._srcResolutions[r.level],s=t.toJSON?t:M$1.fromJSON(t);g$2(this._blockCacheRegistryUrl,this._blockCacheRegistryId,s,i,e,this.layer.raster.ioConfig.sampling);}this._needBlockCacheUpdate=!1,(null==(a=this._previousLOD)?void 0:a.level)!==r.level&&(this._previousLOD=r,null!=this._symbolizerParams&&this._updateSymbolizerParams(),this._tileStrategy.updateCacheSize(0));}this.notifyChange("updating");}attach(){this.layer.increaseRasterJobHandlerUsage(),r$5().supportsTextureFloat||(this.useWebGLForProcessing=!1),this.layer.raster&&(this.layer.raster.ioConfig.allowPartialFill=!0),this._initializeTileInfo(),this._tileInfoView=new h$1(this.tileInfo,this.fullExtent),this._fetchQueue=new p$1({tileInfoView:this._tileInfoView,concurrency:10,process:(e,t)=>this.fetchTile(e,t)});const e=this._getCacheSize(this.useProgressiveUpdate);this._tileStrategy=new c({cachePolicy:"purge",resampling:!1,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),cacheSize:e,tileInfoView:this._tileInfoView}),this._bitmapView=new n(this._tileInfoView),this._bitmapView.isCustomTilingScheme=this._isCustomTilingScheme,this.container.addChild(this._bitmapView),this.handles.add([h$2(this,["layer.bandIds","layer.renderer"],(()=>this._redrawDebounced().catch((e=>{g$3(e)||V.error(e);})))),h$2(this,["layer.interpolation"],((e,t)=>{"majority"!==e&&"majority"!==t||!this._canUseMajorityInterpolationOnDataSource()?this._redrawDebounced().catch((e=>{g$3(e)||V.error(e);})):this.refreshDebounced();})),h$2(this,["layer.multidimensionalDefinition"],this.refreshDebounced)],"attach"),this._updateBlockCacheRegistry();}detach(){this.handles.remove("attach"),this.layer.decreaseRasterJobHandlerUsage(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null,u(this._blockCacheRegistryUrl,this._blockCacheRegistryId);}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){!this.hasTilingEffects&&this.useProgressiveUpdate||(this._abortController&&this._abortController.abort(),this._abortController=a$1(),0===this._fetchQueue.length&&this._redrawImage(this._abortController.signal).then((()=>{this._globalUpdateRequested=!1,this.requestUpdate();})));const e=this._getCacheSize(this.useProgressiveUpdate);this._tileStrategy.updateCacheSize(e),this.requestUpdate();}createFetchPopupFeaturesQueryGeometry(e,t){return a$2(e,t,this.view)}async doRefresh(){this.updateRequested||this.suspended||(this.layer.updateRenderer(),this._updateSymbolizerParams(),this._updateBlockCacheRegistry(!0),this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>this._enqueueTileFetch(e))),this.notifyChange("updating"));}isUpdating(){return this._fetchQueue.length>0||this._globalUpdateRequested}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return [i.x,i.y]=this._tileInfoView.getTileCoords(L,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this.requestUpdate(),this._needBlockCacheUpdate=!0,this._globalUpdateRequested=this.hasTilingEffects||!this.useProgressiveUpdate,t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>{e.destroy(),this.requestUpdate();})),this.requestUpdate();}fetchTile(e,s){const r=!t$1(s)&&s.signal,a=this._canUseWebGLForProcessing(),l={tileInfo:this.tileInfo,signal:e$2(r),registryId:this._blockCacheRegistryId,requestRawData:a,srcResolution:this._srcResolutions[e.level],datumTransformation:this.datumTransformation,interpolation:a?"nearest":this.layer.interpolation};return this.layer.fetchTile(e.level,e.row,e.col,l)}_canUseWebGLForProcessing(){return this.useWebGLForProcessing&&this.layer.symbolizer.canRenderInWebGL&&!("majority"===this.layer.interpolation&&this._canUseMajorityInterpolationOnDataSource())}_getCacheSize(e){return e?40:0}_initializeTileInfo(){const e=this.view.spatialReference,t=new j({x:this.fullExtent.xmin,y:this.fullExtent.ymax,spatialReference:e}),{scales:i,srcResolutions:s,isCustomTilingScheme:r}=b$1(this.layer.rasterInfo,e),a=x$1.create({spatialReference:e,size:512,scales:i});(0===a.origin.x||a.origin.x>t.x)&&(a.origin=t),this._isCustomTilingScheme=r,this._set("tileInfo",a),this._srcResolutions=null!=s?s:[];}async _enqueueTileFetch(e,t){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key),{bandIds:s}=this.layer;let r=!this.useProgressiveUpdate||this.hasTilingEffects&&!this._globalSymbolizerParams;if(this._globalUpdateRequested&&!this.moving&&0===this._fetchQueue.length){r=!1;try{await this._redrawImage(this._abortController&&this._abortController.signal);}catch(i){g$3(i)&&V.error(i);}this._globalUpdateRequested=!1;}const a=this._canUseWebGLForProcessing();if(a&&!this.hasTilingEffects&&null==this._symbolizerParams&&this._updateSymbolizerParams(),t&&t.pixelBlock){const i={extent:t.extent,pixelBlock:t.pixelBlock};if(e.bitmap.rawPixelData=i,a)e.bitmap.source=t.pixelBlock,e.bitmap.isRendereredSource=!1;else {const t=await this.layer.applyRenderer(i,this.hasTilingEffects&&this._globalSymbolizerParams&&"stretch"===this._globalSymbolizerParams.type?this._globalSymbolizerParams:null);e.bitmap.source=t,e.bitmap.isRendereredSource=!0;}e.bitmap.symbolizerParameters=a?this._globalSymbolizerParams||this._symbolizerParams:null,a?e.bitmap.transformGrid||(e.bitmap.transformGrid=t.transformGrid):e.bitmap.transformGrid=null;}else {const t=this._createEmptyTilePixelBlock();e.bitmap.source=t,e.bitmap.symbolizerParameters=a?this._symbolizerParams:null,e.bitmap.transformGrid=null;}e.bitmap.bandIds=s,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.bitmap.interpolation=this._getLayerInterpolation(),e.bitmap.suspended=r,e.bitmap.invalidateTexture(),e.once("attach",(()=>this.requestUpdate())),this._bitmapView.addChild(e);}catch(i){g$3(i)||V.error(i);}this.requestUpdate();}}async _redrawImage(e){this.layer.updateRenderer(),this.hasTilingEffects?await this._updateGlobalSymbolizerParams(e):(this._updateSymbolizerParams(),this._globalSymbolizerParams=null);const{bandIds:t}=this.layer,i=this._bitmapView.children.map((async e=>{const i=this._canUseWebGLForProcessing();!i&&e.bitmap.rawPixelData?(e.bitmap.source=await this.layer.applyRenderer(e.bitmap.rawPixelData,this.hasTilingEffects&&this._globalSymbolizerParams&&"stretch"===this._globalSymbolizerParams.type?this._globalSymbolizerParams:null),e.bitmap.isRendereredSource=!0):(e.bitmap.isRendereredSource&&e.bitmap.rawPixelData&&(e.bitmap.source=e.bitmap.rawPixelData.pixelBlock),e.bitmap.isRendereredSource=!1),e.bitmap.symbolizerParameters=i?this._globalSymbolizerParams||this._symbolizerParams:null,e.bitmap.bandIds=t,e.bitmap.interpolation=this._getLayerInterpolation(),e.bitmap.suspended=!1;}));await E(i),this.container.requestRender();}_createEmptyTilePixelBlock(){if(!this._emptyTilePixelBlock){const e=this._tileInfoView.tileInfo.size[0],t=this._tileInfoView.tileInfo.size[1];this._emptyTilePixelBlock=new u$1({width:e,height:t,pixels:[new Uint8Array(e*t)],mask:new Uint8Array(e*t),pixelType:"u8"});}return this._emptyTilePixelBlock}async _updateGlobalSymbolizerParams(e){const t={srcResolution:this._srcResolutions[this._previousLOD.level],registryId:this._blockCacheRegistryId,signal:e},i=await this.layer.fetchPixels(this.view.extent,this.view.width,this.view.height,t);if(!i||!i.pixelBlock)return;const s=this.layer.symbolizer.generateWebGLParameters({pixelBlock:n$2(i.pixelBlock,this.layer.bandIds),isGCS:this.view.spatialReference.isGeographic,resolution:{x:this._previousLOD.resolution,y:this._previousLOD.resolution},bandIds:this.layer.bandIds});!this._canUseWebGLForProcessing()&&s&&"stretch"===s.type&&this.layer.renderer&&"raster-stretch"===this.layer.renderer.type&&(s.factor=s.factor.map((e=>255*e)),s.outMin=Math.round(255*s.outMin),s.outMax=Math.round(255*s.outMax)),this._globalSymbolizerParams=s;}_updateSymbolizerParams(){this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null,isGCS:this.view.spatialReference.isGeographic,resolution:{x:this._previousLOD.resolution,y:this._previousLOD.resolution},bandIds:this.layer.bandIds});}_updateBlockCacheRegistry(e=!1){const{url:t,rasterInfo:i,multidimensionalDefinition:s,raster:r}=this.layer,a=null!=i&&i.multidimensionalInfo?r.getSliceIndex(s):null,l=i$6(t,a);if(l!==this._blockCacheRegistryUrl){if(null!=this._blockCacheRegistryUrl&&u(this._blockCacheRegistryUrl,this._blockCacheRegistryId),this._blockCacheRegistryId=s$1(l,this.layer.raster.rasterInfo),e){const e=this._tileInfoView.getClosestInfoForScale(this.view.scale),t=this._srcResolutions[e.level];g$2(l,this._blockCacheRegistryId,this.view.extent,this.view.resolution,t,this.layer.raster.ioConfig.sampling);}this._blockCacheRegistryUrl=l;}}_canUseMajorityInterpolationOnDataSource(){const{bandCount:e,attributeTable:t,colormap:i,pixelType:s}=this.layer.rasterInfo;return 1===e&&(null!=t||null!=i||"u8"===s||"s8"===s)}_getLayerInterpolation(){const e=this.layer.renderer.type;return "raster-colormap"===e||"unique-value"===e||"class-breaks"===e?"nearest":this.layer.interpolation}};e$1([y()],q.prototype,"useProgressiveUpdate",null),q=e$1([i("esri.views.2d.layers.ImageryTileLayerView2D")],q);var D=q;

export default D;
