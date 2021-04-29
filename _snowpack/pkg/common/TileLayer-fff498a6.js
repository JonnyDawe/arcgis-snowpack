import { P as r, A as k, U, C as U$1, bU as C$1, s as s$1, aH as T, e as e$1, y as y$1, a1 as e$2, o as o$1, v as c, i } from './Identifiable-c8406192.js';
import './config-b3bf08ce.js';
import { b } from './Layer-d22ad00d.js';
import { l as l$1 } from './MultiOriginJSONSupport-29c9a66e.js';
import { d, w, p as p$1 } from './arcgisLayerUrl-d85d6d65.js';
import { l, f } from './OperationalLayer-d48a5914.js';
import { p } from './ArcGISService-7a5cc3ad.js';
import { t } from './BlendLayer-f2f3b180.js';
import { e } from './FeatureType-a62beea1.js';
import { u } from './PortalLayer-8f26d9e1.js';
import { o } from './RefreshableLayer-cf71b273.js';
import { s } from './ScaleRangeLayer-8feef0dd.js';
import { a as a$1 } from './HandleOwner-2c2dff93.js';
import { a } from './ArcGISCachedService-2fd2b26b.js';
import { h, y, G } from './SublayersOwner-a19d9a78.js';
import './persistableUrlUtils-b4be11a9.js';
import './TimeExtent-155cb8a4.js';
import './fieldUtils-a9f71c96.js';
import './lengthUtils-cb1a7b62.js';
import './unitUtils-1b0a3531.js';
import './watchUtils-880dbce7.js';
import './serviceTileInfoProperty-cc3ceeae.js';
import './TileInfo-f085f660.js';
import './aaBoundingRect-a3d841c1.js';
import './TilemapCache-48a08224.js';
import './LRUCache-9b61e325.js';
import './MemCache-1f56f5a2.js';
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
import './Field-e6fe6b12.js';
import './fieldType-769fe7ff.js';
import './FieldsIndex-d0d5f38b.js';
import './LabelClass-c61f8b70.js';
import './labelUtils-5176895f.js';
import './defaults-91b05a2c.js';
import './defaultsJSON-375e89aa.js';
import './Query-448be42b.js';
import './popupUtils-5e9c2795.js';
import './sublayerUtils-df299c5d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const W=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let A=class extends(t(h(s(o(l(u(a(y(p(l$1(a$1(e(b))))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null;}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}load(e){const t=r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).then((()=>this._fetchService(t)),(()=>this._fetchService(t)))),Promise.resolve(this)}get attributionDataUrl(){var e;const r=null==(e=this.parsedUrl)?void 0:e.path.toLowerCase();return r&&this._getDefaultAttribution(this._getMapName(r))}readSpatialReference(e,r){return (e=e||r.tileInfo&&r.tileInfo.spatialReference)&&k.fromJSON(e)}writeSublayers(e,r,t,s){if(!this.loaded||!e)return;const o=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray(),i=[],a={writeSublayerStructure:!1,...s};o.forEach((e=>{const r=e.write({},a);i.push(r);}));i.some((e=>Object.keys(e).length>1))&&(r.layers=i);}get tileServers(){return this._getDefaultTileServers(this.parsedUrl.path)}castTileServers(e){return Array.isArray(e)?e.map((e=>U(e).path)):null}fetchTile(e,r,t,s={}){const{signal:o,timestamp:i}=s,a=this.getTileUrl(e,r,t),l={responseType:"image",signal:o};return null!=i&&(l.query={_ts:s.timestamp}),U$1(a,l).then((e=>e.data))}getTileUrl(e,r,t){const s=!this.tilemapCache&&this.supportsBlankTile,o=C$1({...this.parsedUrl.query,blankTile:!s&&null,...this.customParameters}),i=this.tileServers;return `${i&&i.length?i[r%i.length]:this.parsedUrl.path}/tile/${e}/${r}/${t}${o?"?"+o:""}`}_fetchService(e){return new Promise(((t,s)=>{if(this.sourceJSON){if(null!=this.sourceJSON.bandCount&&null!=this.sourceJSON.pixelSizeX)throw new s$1("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void t({data:this.sourceJSON})}if(!this.parsedUrl)throw new s$1("tile-layer:undefined-url","layer's url is not defined");const o=d(this.parsedUrl.path);if(r(o)&&"ImageServer"===o.serverType)throw new s$1("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");U$1(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters},responseType:"json",signal:e}).then(t,s);})).then((r=>{if(r.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl}),10.1===this.version&&!w(this.url))return this._fetchServerVersion(this.url,e).then((e=>{this.read({currentVersion:e});})).catch((()=>{}))}))}_fetchServerVersion(e,r){if(!p$1(e))return Promise.reject();const t=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return U$1(t,{query:{f:"json",...this.customParameters},responseType:"json",signal:r}).then((e=>{if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new s$1("tile-layer:version-not-available")}))}_getMapName(e){const r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r&&r[2]}_getDefaultAttribution(e){if(!e)return;let r;e=e.toLowerCase();for(let t=0,s=W.length;t<s;t++)if(r=W[t],r.toLowerCase().indexOf(e)>-1)return T("//static.arcgis.com/attribution/"+r)}_getDefaultTileServers(e){const r=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),t=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}};e$1([y$1({readOnly:!0})],A.prototype,"attributionDataUrl",null),e$1([y$1({type:["show","hide","hide-children"]})],A.prototype,"listMode",void 0),e$1([y$1({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],A.prototype,"isReference",void 0),e$1([y$1({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],A.prototype,"operationalLayerType",void 0),e$1([y$1({type:Boolean})],A.prototype,"resampling",void 0),e$1([y$1()],A.prototype,"sourceJSON",void 0),e$1([y$1({type:k})],A.prototype,"spatialReference",void 0),e$1([e$2("spatialReference",["spatialReference","tileInfo"])],A.prototype,"readSpatialReference",null),e$1([y$1({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],A.prototype,"path",void 0),e$1([y$1({readOnly:!0})],A.prototype,"sublayers",void 0),e$1([o$1("sublayers",{layers:{type:[G]}})],A.prototype,"writeSublayers",null),e$1([y$1({json:{read:!1,write:!1}})],A.prototype,"popupEnabled",void 0),e$1([y$1()],A.prototype,"tileServers",null),e$1([c("tileServers")],A.prototype,"castTileServers",null),e$1([y$1({readOnly:!0,json:{read:!1}})],A.prototype,"type",void 0),e$1([y$1(f)],A.prototype,"url",void 0),A=e$1([i("esri.layers.TileLayer")],A);var C=A;

export default C;
