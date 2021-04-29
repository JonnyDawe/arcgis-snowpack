import { n as n$2, bS as n$3, bT as C, P as r$1, h as h$1, s as s$1, V as a$1, C as U, bU as C$1, e, y, a1 as e$1, i } from './Identifiable-c8406192.js';
import './config-b3bf08ce.js';
import { b } from './Layer-d22ad00d.js';
import { l as l$1 } from './MultiOriginJSONSupport-29c9a66e.js';
import { v } from './HeightModelInfo-f665a73c.js';
import { l, f } from './OperationalLayer-d48a5914.js';
import { p as p$1 } from './ArcGISService-7a5cc3ad.js';
import { u } from './PortalLayer-8f26d9e1.js';
import { a } from './ArcGISCachedService-2fd2b26b.js';
import { p } from './workers-31c2755c.js';
import './unitUtils-1b0a3531.js';
import './persistableUrlUtils-b4be11a9.js';
import './TimeExtent-155cb8a4.js';
import './fieldUtils-a9f71c96.js';
import './lengthUtils-cb1a7b62.js';
import './arcgisLayerUrl-d85d6d65.js';
import './serviceTileInfoProperty-cc3ceeae.js';
import './TileInfo-f085f660.js';
import './aaBoundingRect-a3d841c1.js';
import './TilemapCache-48a08224.js';
import './watchUtils-880dbce7.js';
import './LRUCache-9b61e325.js';
import './MemCache-1f56f5a2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const h=n$2.getLogger("esri.core.workers.WorkerHandle");class n$1{constructor(e,t,r,s={}){this._mainMethod=t,this._listeners=[],this._promise=p(e,{...s,scheduler:r}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,s.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e);}else e.close();})),this._promise.catch((t=>h.error(`Failed to initialize ${e} worker: ${t}`)));}on(t,i){const o={removed:!1,eventName:t,callback:i,threadHandle:null};return this._listeners.push(o),this._connectListener(o),n$3((()=>{o.removed=!0,C(this._listeners,o),this._thread&&r$1(o.threadHandle)&&o.threadHandle.remove();}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null;}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,r){if(this._thread){const s=this.getTransferList(t,e);return this._thread.invoke(e,t,{transferList:s,signal:r})}return this._promise?this._promise.then((()=>(h$1(r),this.invokeMethod(e,t,r)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t);}));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class r extends n$1{constructor(e){super("LercWorker","_decode",e,{strategy:"dedicated"}),this.scheduler=e;}decode(e,r,t){return e&&0!==e.byteLength?this.invoke({buffer:e,options:r},t):Promise.resolve(null)}getTransferList(e){return [e.buffer]}}const t=new Map;function n(e){let n=t.get(e);return n||(n={instance:new r(e),ref:0},t.set(e,n)),++n.ref,n.instance}function s(e){if(null==e)return;const r=e.scheduler,n=t.get(r);n&&--n.ref<=0&&(n.instance.destroy(),t.delete(r));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const w=n$2.getLogger("esri.layers.ElevationLayer");let x=class extends(a(p$1(l(u(l$1(b)))))){constructor(...e){super(...e),this.copyright=null,this.heightModelInfo=null,this.path=null,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=n();}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}destroy(){s(this._lercDecoder),this._lercDecoder=null;}set minScale(e){this.constructed&&w.warn(`${this.declaredClass}.minScale support has been removed (since 4.5)`);}get minScale(){}set maxScale(e){this.constructed&&w.warn(`${this.declaredClass}.maxScale support has been removed (since 4.5)`);}get maxScale(){}readVersion(e,r){let t=r.currentVersion;return t||(t=9.3),t}load(e){const t=r$1(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:e=>{for(let r=0;r<e.typeKeywords.length;r++)if("elevation 3d layer"===e.typeKeywords[r].toLowerCase())return !0;throw new s$1("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).then((()=>this._fetchImageService(t)),(()=>this._fetchImageService(t)))),Promise.resolve(this)}fetchTile(e,t,o,i){const s=r$1((i=i||{signal:null}).signal)?i.signal:i.signal=a$1().signal,a={responseType:"array-buffer",signal:s},l={noDataValue:i.noDataValue,returnFileInfo:!0};return this.load().then((()=>this._fetchTileAvailability(e,t,o,i))).then((()=>U(this.getTileUrl(e,t,o),a))).then((e=>this._lercDecoder.decode(e.data,l,s))).then((e=>({values:e.pixelData,width:e.width,height:e.height,maxZError:e.fileInfo.maxZError,noDataValue:e.noDataValue,minValue:e.minValue,maxValue:e.maxValue})))}getTileUrl(e,r,t){const o=!this.tilemapCache&&this.supportsBlankTile,i=C$1({...this.parsedUrl.query,blankTile:!o&&null});return `${this.parsedUrl.path}/tile/${e}/${r}/${t}${i?"?"+i:""}`}async queryElevation(e,r){const{ElevationQuery:t}=await import('./ElevationQuery-c1abcb57.js');h$1(r);return (new t).query(this,e,r)}async createElevationSampler(e,r){const{ElevationQuery:t}=await import('./ElevationQuery-c1abcb57.js');h$1(r);return (new t).createSampler(this,e,r)}_fetchTileAvailability(e,r,t,o){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,r,t,o):Promise.resolve("unknown")}async _fetchImageService(e){if(this.sourceJSON)return this.sourceJSON;const r={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e},t=await U(this.parsedUrl.path,r);t.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t.data,this.read(t.data,{origin:"service",url:this.parsedUrl});}};e([y({json:{read:{source:"copyrightText"}}})],x.prototype,"copyright",void 0),e([y({readOnly:!0,type:v})],x.prototype,"heightModelInfo",void 0),e([y({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],x.prototype,"path",void 0),e([y({type:["show","hide"]})],x.prototype,"listMode",void 0),e([y({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],x.prototype,"minScale",null),e([y({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],x.prototype,"maxScale",null),e([y({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],x.prototype,"opacity",void 0),e([y({type:["ArcGISTiledElevationServiceLayer"]})],x.prototype,"operationalLayerType",void 0),e([y()],x.prototype,"sourceJSON",void 0),e([y({json:{read:!1},value:"elevation",readOnly:!0})],x.prototype,"type",void 0),e([y(f)],x.prototype,"url",void 0),e([y()],x.prototype,"version",void 0),e([e$1("version",["currentVersion"])],x.prototype,"readVersion",null),x=e([i("esri.layers.ElevationLayer")],x);var T=x;

export default T;
