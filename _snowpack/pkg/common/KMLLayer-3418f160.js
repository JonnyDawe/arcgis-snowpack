import { m as n, b as i, k as f, P as r, M, l as d, L as L$1, e, y, v as c, cS as u, a1 as e$1, i as i$1, A as k, bZ as pt, o as o$1 } from './Identifiable-c8406192.js';
import './config-b3bf08ce.js';
import { l as l$2 } from './CollectionFlattener-5ff807fc.js';
import { b } from './Layer-d22ad00d.js';
import { l as l$1 } from './MultiOriginJSONSupport-29c9a66e.js';
import { l, f as f$1 } from './OperationalLayer-d48a5914.js';
import { t } from './BlendLayer-f2f3b180.js';
import { u as u$1 } from './PortalLayer-8f26d9e1.js';
import { o } from './RefreshableLayer-cf71b273.js';
import { s } from './ScaleRangeLayer-8feef0dd.js';
import { j as j$2, S as S$1, g as g$1, d as d$1 } from './kmlUtils-2cec727d.js';
import { j as j$1, x } from './watchUtils-880dbce7.js';
import './persistableUrlUtils-b4be11a9.js';
import './TimeExtent-155cb8a4.js';
import './fieldUtils-a9f71c96.js';
import './lengthUtils-cb1a7b62.js';
import './unitUtils-1b0a3531.js';
import './PopupTemplate-77ad81c4.js';
import './jsonUtils-abe1bd07.js';
import './UniqueValueRenderer-6eda9445.js';
import './symbols-a702d148.js';
import './ColorStop-27e1a5ee.js';
import './styleUtils-062f64a7.js';
import './sizeVariableUtils-33233df0.js';
import './visualVariableUtils-66f67c57.js';
import './compilerUtils-006be997.js';
import './Graphic-9f79c7db.js';
import './jsonUtils-d762dc00.js';
import './uid-7967dd4d.js';
import './diffUtils-e1cd943c.js';
import './LRUCache-9b61e325.js';
import './MemCache-1f56f5a2.js';
import './FeatureSet-ceb33ccf.js';
import './Field-e6fe6b12.js';
import './fieldType-769fe7ff.js';
import './aaBoundingBox-5c7868ad.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var j;let S=j=class extends(n.EventedMixin(i(f))){constructor(){super(...arguments),this._sublayersHandles=null,this.description=null,this.id=null,this.networkLink=null,this.title=null,this.sourceJSON=null,this.fullExtent=null;}initialize(){j$1(this,"networkLink").then((()=>x(this,"visible"))).then((()=>this.load()));}load(e){if(!this.networkLink)return;if(this.networkLink.viewFormat)return;const t=r(e)?e.signal:null,o=this._fetchService(this._get("networkLink").href,t).then((e=>{const r=j$2(e.sublayers);this.fullExtent=M.fromJSON(r),this.sourceJSON=e;const t=d(L$1.ofType(j),S$1(j,e));this.sublayers?this.sublayers.addMany(t):this.sublayers=t,this.layer.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers");}));return this.addResolvingPromise(o),Promise.resolve(this)}set sublayers(e){const r=this._get("sublayers");r&&(r.forEach((e=>{e.parent=null,e.layer=null;})),this._sublayersHandles.forEach((e=>e.remove())),this._sublayersHandles=null),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer;})),this._sublayersHandles=[e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this.layer;})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null;}))]),this._set("sublayers",e);}castSublayers(e){return d(L$1.ofType(j),e)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"));}readVisible(e,r){return !!r.visibility}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((r=>r.layer=e));}_fetchService(e,r){return g$1(e,this.layer.outSpatialReference,this.layer.refreshInterval,r).then((e=>d$1(e.data)))}};e([y()],S.prototype,"description",void 0),e([y()],S.prototype,"id",void 0),e([y({readOnly:!0,value:null})],S.prototype,"networkLink",void 0),e([y({json:{write:{allowNull:!0}}})],S.prototype,"parent",void 0),e([y({value:null,json:{write:{allowNull:!0}}})],S.prototype,"sublayers",null),e([c("sublayers")],S.prototype,"castSublayers",null),e([y({value:null,json:{read:{source:"name",reader:e=>u(e)}}})],S.prototype,"title",void 0),e([y({value:!0})],S.prototype,"visible",null),e([e$1("visible",["visibility"])],S.prototype,"readVisible",null),e([y()],S.prototype,"sourceJSON",void 0),e([y({value:null})],S.prototype,"layer",null),e([y({type:M})],S.prototype,"fullExtent",void 0),S=j=e([i$1("esri.layers.support.KMLSublayer")],S);var g=S;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const L=["kml","xml"];let E=class extends(t(o(s(l(u$1(l$1(b))))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new l$2({root:this,rootCollectionNames:["sublayers"],getChildrenFunction:e=>e.sublayers}),this.outSpatialReference=k.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null;}initialize(){this.watch("sublayers",((e,r)=>{r&&r.forEach((e=>{e.parent=null,e.layer=null;})),e&&e.forEach((e=>{e.parent=this,e.layer=this;}));}),!0),this.on("sublayer-update",(()=>this.notifyChange("fullExtent")));}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}readSublayersFromItemOrWebMap(e,r){this._visibleFolders=r.visibleFolders;}readSublayers(e,r,t){return S$1(g,r,t,this._visibleFolders)}writeSublayers(e,r){const t=[],o=e.toArray();for(;o.length;){const e=o[0];e.networkLink||(e.visible&&t.push(e.id),e.sublayers&&o.push(...e.sublayers.toArray())),o.shift();}r.visibleFolders=t;}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?pt(this.url,L)||"KML":e||""}set title(e){this._set("title",e);}get visibleSublayers(){const e=this.sublayers,r=[],t=e=>{e.visible&&(r.push(e),e.sublayers&&e.sublayers.forEach(t));};return e&&e.forEach(t),r}get fullExtent(){return this._recomputeFullExtent()}load(e){const t=r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"]},e).then((()=>this._fetchService(t)))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy();}async _fetchService(e){const r=await Promise.resolve().then((()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:g$1(this.url,this.outSpatialReference,this.refreshInterval,e))),t=d$1(r.data);t&&this.read(t,{origin:"service"});}_recomputeFullExtent(){let e=null;this.extent&&(e=this.extent.clone());const r=t=>{if(t.sublayers)for(const o of t.sublayers.items)r(o),o.visible&&o.fullExtent&&(e?e.union(o.fullExtent):e=o.fullExtent.clone());};return r(this),e}};e([y({readOnly:!0})],E.prototype,"allSublayers",void 0),e([y({type:k})],E.prototype,"outSpatialReference",void 0),e([y({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],E.prototype,"path",void 0),e([y({readOnly:!0,json:{read:!1,write:!1}})],E.prototype,"legendEnabled",void 0),e([y({type:["show","hide","hide-children"]})],E.prototype,"listMode",void 0),e([y({type:["KML"]})],E.prototype,"operationalLayerType",void 0),e([y({})],E.prototype,"resourceInfo",void 0),e([y({type:L$1.ofType(g),json:{write:{ignoreOrigin:!0}}})],E.prototype,"sublayers",void 0),e([e$1(["web-map","portal-item"],"sublayers",["visibleFolders"])],E.prototype,"readSublayersFromItemOrWebMap",null),e([e$1("service","sublayers",["sublayers"])],E.prototype,"readSublayers",null),e([o$1("sublayers")],E.prototype,"writeSublayers",null),e([y({readOnly:!0,json:{read:!1}})],E.prototype,"type",void 0),e([y({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],E.prototype,"title",null),e([y(f$1)],E.prototype,"url",void 0),e([y({readOnly:!0})],E.prototype,"visibleSublayers",null),e([y({type:M})],E.prototype,"extent",void 0),e([y()],E.prototype,"fullExtent",null),E=e([i$1("esri.layers.KMLLayer")],E);var w=E;

export default w;
