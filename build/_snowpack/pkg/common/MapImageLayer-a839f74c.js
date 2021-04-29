import { P as r, bE as t$1, s as s$1, C as U, B as g, M, d as n$1, e as e$2, y as y$1, a1 as e$3, o as o$1, N, i } from './Identifiable-c8406192.js';
import './config-b3bf08ce.js';
import { b } from './Layer-d22ad00d.js';
import { d } from './TimeExtent-155cb8a4.js';
import { l as l$1 } from './MultiOriginJSONSupport-29c9a66e.js';
import { l, f as f$1 } from './OperationalLayer-d48a5914.js';
import { p } from './ArcGISService-7a5cc3ad.js';
import { t } from './BlendLayer-f2f3b180.js';
import { e } from './FeatureType-a62beea1.js';
import { u } from './PortalLayer-8f26d9e1.js';
import { o } from './RefreshableLayer-cf71b273.js';
import { s } from './ScaleRangeLayer-8feef0dd.js';
import { f } from './TemporalLayer-c333d449.js';
import { a } from './HandleOwner-2c2dff93.js';
import { r as r$1 } from './scaleUtils-be2fff7f.js';
import { h, y, G } from './SublayersOwner-a19d9a78.js';
import { e as e$1 } from './sublayerUtils-df299c5d.js';
import { n } from './ExportImageParameters-e012ac16.js';
import './persistableUrlUtils-b4be11a9.js';
import './fieldUtils-a9f71c96.js';
import './lengthUtils-cb1a7b62.js';
import './unitUtils-1b0a3531.js';
import './arcgisLayerUrl-d85d6d65.js';
import './TimeInfo-190b35f7.js';
import './watchUtils-880dbce7.js';
import './Version-a4d498e8.js';
import './CollectionFlattener-5ff807fc.js';
import './PopupTemplate-77ad81c4.js';
import './symbols-a702d148.js';
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
import './Field-e6fe6b12.js';
import './fieldType-769fe7ff.js';
import './FieldsIndex-d0d5f38b.js';
import './LabelClass-c61f8b70.js';
import './labelUtils-5176895f.js';
import './defaults-91b05a2c.js';
import './defaultsJSON-375e89aa.js';
import './Query-448be42b.js';
import './popupUtils-5e9c2795.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let R=class extends(t(f(s(o(h(y(p(l(u(l$1(e(a(b))))))))))))){constructor(...e){super(...e),this.alwaysRefetch=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null;}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}load(e){const t=r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).then((()=>this._fetchService(t)),(()=>this._fetchService(t)))),Promise.resolve(this)}readImageFormat(e,r){const t=r.supportedImageFormatTypes;return t&&t.indexOf("PNG32")>-1?"png32":"png24"}writeSublayers(e,r,t,s){if(!this.loaded||!e)return;const o=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray();let i=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){const e=t$1(s.origin);if(3===e){const e=this.createSublayersForOrigin("service").sublayers;i=e$1(o,e,2);}else if(e>3){const e=this.createSublayersForOrigin("portal-item");i=e$1(o,e.sublayers,t$1(e.origin));}}const a=[],p={writeSublayerStructure:i,...s};let n=i;o.forEach((e=>{const r=e.write({},p);a.push(r),n=n||"user"===e.originOf("visible");}));a.some((e=>Object.keys(e).length>1))&&(r.layers=a),n&&(r.visibleLayers=o.filter((e=>e.visible)).map((e=>e.id)));}createExportImageParameters(e,r,t,s){const o=s&&s.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const i=new n({layer:this,scale:r$1({extent:e,width:r})*o}),a=i.toJSON();i.destroy();const p=!s||!s.rotation||this.version<10.3?{}:{rotation:-s.rotation},m=e&&e.spatialReference,n$1=m.wkid||JSON.stringify(m.toJSON());a.dpi*=o;const l={};if(null!=s&&s.timeExtent){const{start:e,end:r}=s.timeExtent.toJSON();l.time=e&&r&&e===r?""+e:`${null==e?"null":e},${null==r?"null":r}`;}else this.timeInfo&&!this.timeInfo.hasLiveData&&(l.time="null,null");return {bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:n$1,imageSR:n$1,size:r+","+t,...a,...p,...l}}async fetchImage(e,r,t,s){const o={responseType:"image"};s&&s.timestamp&&(o.query={...o.query,_ts:s.timestamp}),s&&s.signal&&(o.signal=s.signal),this.customParameters&&Object.keys(this.customParameters).length&&(o.query={...this.customParameters,...o.query});const i=this.parsedUrl.path+"/export",a={...this.parsedUrl.query,...this.createExportImageParameters(e,r,t,s),f:"image",_ts:this.alwaysRefetch?Date.now():null};if(null!=a.dynamicLayers&&!this.capabilities.exportMap.supportsDynamicLayers)return Promise.reject(new s$1("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:a}));o.query?o.query={...a,...o.query}:o.query=a;return U(i,o).then((e=>e.data)).catch((e=>{if(g(e))throw e;throw new s$1("mapimagelayer:image-fetch-error",`Unable to load image: ${i}`,{error:e})}))}async fetchRecomputedExtents(e={}){const r={...e,query:{returnUpdates:!0,f:"json"}},{data:t}=await U(this.url,r),{extent:s,fullExtent:o,timeExtent:i}=t,a=s||o;return {fullExtent:a&&M.fromJSON(a),timeExtent:i&&d.fromJSON({start:i[0],end:i[1]})}}loadAll(){return n$1(this,(e=>{e(this.allSublayers);}))}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:r,ssl:t}=await U(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters},signal:e});t&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r,this.read(r,{origin:"service",url:this.parsedUrl});}};e$2([y$1()],R.prototype,"alwaysRefetch",void 0),e$2([y$1()],R.prototype,"dpi",void 0),e$2([y$1()],R.prototype,"gdbVersion",void 0),e$2([y$1()],R.prototype,"imageFormat",void 0),e$2([e$3("imageFormat",["supportedImageFormatTypes"])],R.prototype,"readImageFormat",null),e$2([y$1({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],R.prototype,"imageMaxHeight",void 0),e$2([y$1({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],R.prototype,"imageMaxWidth",void 0),e$2([y$1()],R.prototype,"imageTransparency",void 0),e$2([y$1({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],R.prototype,"isReference",void 0),e$2([y$1({json:{read:!1,write:!1}})],R.prototype,"labelsVisible",void 0),e$2([y$1({type:["ArcGISMapServiceLayer"]})],R.prototype,"operationalLayerType",void 0),e$2([y$1({json:{read:!1,write:!1}})],R.prototype,"popupEnabled",void 0),e$2([y$1()],R.prototype,"sourceJSON",void 0),e$2([y$1({json:{write:{ignoreOrigin:!0}}})],R.prototype,"sublayers",void 0),e$2([o$1("sublayers",{layers:{type:[G]},visibleLayers:{type:[N]}})],R.prototype,"writeSublayers",null),e$2([y$1({type:["show","hide","hide-children"]})],R.prototype,"listMode",void 0),e$2([y$1({json:{read:!1},readOnly:!0,value:"map-image"})],R.prototype,"type",void 0),e$2([y$1(f$1)],R.prototype,"url",void 0),R=e$2([i("esri.layers.MapImageLayer")],R);var J=R;

export default J;
