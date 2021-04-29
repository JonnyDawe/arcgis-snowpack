import { e, y, i as i$1, s } from './Identifiable-c8406192.js';
import './config-b3bf08ce.js';
import { y as y$1 } from './fieldUtils-a9f71c96.js';
import Y from './FeatureLayerView2D-0620f8fc.js';
import './Graphic-9f79c7db.js';
import './jsonUtils-d762dc00.js';
import './PopupTemplate-77ad81c4.js';
import './symbols-a702d148.js';
import './persistableUrlUtils-b4be11a9.js';
import './uid-7967dd4d.js';
import './watchUtils-880dbce7.js';
import './arcgisLayerUrl-d85d6d65.js';
import './FeatureSet-ceb33ccf.js';
import './Field-e6fe6b12.js';
import './fieldType-769fe7ff.js';
import './Query-448be42b.js';
import './TimeExtent-155cb8a4.js';
import './definitions-681c54ec.js';
import './capabilities-6619b906.js';
import './MapView-287c7d57.js';
import './CollectionFlattener-5ff807fc.js';
import './workers-31c2755c.js';
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
import './LayerView2D-57cb193a.js';
import './Container-0dd65e2f.js';
import './mat4f32-575d0c83.js';
import './_commonjsHelpers-268aa74f.js';
import './clickToleranceUtils-072a5628.js';
import './drapedUtils-20f00662.js';
import './schemaUtils-da3a1cd7.js';
import './MD5-944ef260.js';
import './Utils-0d5f7d82.js';
import './FramebufferObject-903a1e6f.js';
import './MaterialKey-1dd9041e.js';
import './visualVariablesUtils-c37b8ac9.js';
import './Rect-7bb5ea0f.js';
import './BidiEngine-aa559a1b.js';
import './popupUtils-8084719b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const i=i=>{let a=class extends i{initialize(){const{layer:e,view:r}=this;e.source.supportsSpatialReference(r.spatialReference)||this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:e})));}get availableFields(){return y$1(this.layer.fields,["*"])}};return e([y()],a.prototype,"layer",void 0),e([y({readOnly:!0})],a.prototype,"availableFields",null),a=e([i$1("esri.views.layers.OGCFeatureLayerView")],a),a};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let t=class extends(i(Y)){};t=e([i$1("esri.views.2d.layers.OGCFeatureLayerView2D")],t);var p=t;

export default p;
