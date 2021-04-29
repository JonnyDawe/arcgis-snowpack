import { e, y as y$1, i as i$1, s, n, B as g, M } from './Identifiable-c8406192.js';
import './config-b3bf08ce.js';
import { i as i$2 } from './MapView-287c7d57.js';
import { l as l$2, d } from './LayerView2D-57cb193a.js';
import { w } from './OperationalLayer-d48a5914.js';
import { l as l$1 } from './ExportWMSImageParameters-6bb439b8.js';
import { t } from './BitmapContainer-fdcd30a9.js';
import { S } from './ExportStrategy-e1a091c6.js';
import './Graphic-9f79c7db.js';
import './jsonUtils-d762dc00.js';
import './PopupTemplate-77ad81c4.js';
import './fieldUtils-a9f71c96.js';
import './symbols-a702d148.js';
import './persistableUrlUtils-b4be11a9.js';
import './uid-7967dd4d.js';
import './CollectionFlattener-5ff807fc.js';
import './watchUtils-880dbce7.js';
import './workers-31c2755c.js';
import './Widget-2f53b352.js';
import './HandleOwner-2c2dff93.js';
import './GoTo-21ecf3ed.js';
import './widget-0e54f9c7.js';
import './unitUtils-1b0a3531.js';
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
import './TileInfoView-40300351.js';
import './TileKey-482fe256.js';
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
import './capabilities-6619b906.js';
import './Container-0dd65e2f.js';
import './mat4f32-575d0c83.js';
import './_commonjsHelpers-268aa74f.js';
import './Utils-0d5f7d82.js';
import './FramebufferObject-903a1e6f.js';
import './WGLContainer-c91d6469.js';
import './definitions-681c54ec.js';
import './VertexArrayObject-21aea4dd.js';
import './vec4f32-27a1bf8c.js';
import './ShaderCompiler-c2405d4f.js';
import './earcut-d6248195.js';
import './GeometryUtils-04b09680.js';
import './MaterialKey-1dd9041e.js';
import './Bitmap-a7ead8ae.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const i=i=>{let a=class extends i{initialize(){this.exportImageParameters=new l$1({layer:this.layer});}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null;}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(e){const{layer:r}=this;if(!e)return Promise.reject(new s("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:r}));const{popupEnabled:t}=r;if(!t)return Promise.reject(new s("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:t}));const s$1=this.createFetchPopupFeaturesQuery(e);if(!s$1)return Promise.resolve([]);const{extent:p,width:i,height:a,x:m,y:n}=s$1;if(!(p&&i&&a))throw new s("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:p,width:i,height:a});const u=r.fetchFeatureInfo(p,i,a,m,n);return Promise.resolve(u?[u]:[])}};return e([y$1()],a.prototype,"exportImageParameters",void 0),e([y$1({readOnly:!0})],a.prototype,"exportImageVersion",null),e([y$1()],a.prototype,"layer",void 0),e([y$1(w)],a.prototype,"timeExtent",void 0),a=e([i$1("esri.layers.mixins.WMSLayerView")],a),a};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const l=n.getLogger("esri.views.2d.layers.WMSLayerView2D");let u=class extends(i(i$2(l$2(d)))){initialize(){const{layer:e,view:t}=this;e.supportsSpatialReference(t.spatialReference)||this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view",{layer:e})));}hitTest(){return null}update(e){this.strategy.update(e).catch((e=>{g(e)||l.error(e);}));}attach(){const{layer:e}=this,{imageMaxHeight:t$1,imageMaxWidth:r}=e;this._bitmapContainer=new t,this.container.addChild(this._bitmapContainer),this.strategy=new S({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t$1,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.handles.add(this.watch("exportImageVersion",(()=>this.requestUpdate())),"exportImageVersion");}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}createFetchPopupFeaturesQuery(e){const{view:t}=this,r=this._bitmapContainer,{x:i,y:s}=e,{spatialReference:a}=t;let n=null,p=0,m=0;if(r.children.some((e=>{const{width:t,height:r,resolution:h,x:c,y:d}=e,l=c+h*t,u=d-h*r;return i>=c&&i<=l&&s<=d&&s>=u&&(n=new M({xmin:c,ymin:u,xmax:l,ymax:d,spatialReference:a}),p=t,m=r,!0)})),!n)return null;const h=n.width/p,c=Math.round((i-n.xmin)/h),d=Math.round((n.ymax-s)/h);return {extent:n,width:p,height:m,x:c,y:d}}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImage(e,t,r,{timeExtent:this.timeExtent,timestamp:this.refreshTimestamp,...i})}};e([y$1()],u.prototype,"strategy",void 0),e([y$1()],u.prototype,"updating",void 0),u=e([i$1("esri.views.2d.layers.WMSLayerView2D")],u);var y=u;

export default y;
