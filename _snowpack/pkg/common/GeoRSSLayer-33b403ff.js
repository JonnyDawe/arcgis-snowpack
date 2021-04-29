import { bZ as pt, P as r, C as U, e, y, a1 as e$1, i } from './Identifiable-c8406192.js';
import { s as s$1 } from './config-b3bf08ce.js';
import { n, f as d$1, k as n$1, y as y$1, u as u$1 } from './symbols-a702d148.js';
import { b } from './Layer-d22ad00d.js';
import { l as l$1 } from './MultiOriginJSONSupport-29c9a66e.js';
import { l, b as b$1, d, f } from './OperationalLayer-d48a5914.js';
import { t } from './BlendLayer-f2f3b180.js';
import { u } from './PortalLayer-8f26d9e1.js';
import { o } from './RefreshableLayer-cf71b273.js';
import { s } from './ScaleRangeLayer-8feef0dd.js';
import './fieldUtils-a9f71c96.js';
import './persistableUrlUtils-b4be11a9.js';
import './TimeExtent-155cb8a4.js';
import './lengthUtils-cb1a7b62.js';
import './unitUtils-1b0a3531.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const R=["atom","xml"],C={base:n,key:"type",typeMap:{"simple-line":d$1},errorContext:"symbol"},L={base:n,key:"type",typeMap:{"picture-marker":n$1,"simple-marker":y$1},errorContext:"symbol"},k={base:n,key:"type",typeMap:{"simple-fill":u$1},errorContext:"symbol"};let F=class extends(t(o(l(u(s(l$1(b))))))){constructor(...e){super(...e),this.description=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.outSpatialReference=null,this.url=null,this.type="geo-rss";}normalizeCtorArgs(e,o){return "string"==typeof e?{url:e,...o}:e}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?pt(this.url,R)||"GeoRSS":e||""}set title(e){this._set("title",e);}readFeatureCollections(e,o){return o.featureCollection.layers.forEach((e=>{const o=e.layerDefinition.drawingInfo.renderer.symbol;o&&"esriSFS"===o.type&&o.outline&&-1!==o.outline.style.indexOf("esriSFS")&&(o.outline.style="esriSLSSolid");})),o.featureCollection.layers}load(e){const o=r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).then((()=>this._fetchService(o)),(()=>this._fetchService(o)))),Promise.resolve(this)}async _fetchService(e){const{data:r}=await U(s$1.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:this.outSpatialReference?JSON.stringify(this.outSpatialReference.toJSON()):void 0},signal:e});this.read(r,{origin:"service"});}};e([y()],F.prototype,"description",void 0),e([y({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],F.prototype,"title",null),e([y()],F.prototype,"featureCollections",void 0),e([e$1("service","featureCollections",["featureCollection.layers"])],F.prototype,"readFeatureCollections",null),e([y(b$1)],F.prototype,"id",void 0),e([y(d)],F.prototype,"legendEnabled",void 0),e([y({types:C,json:{write:!0}})],F.prototype,"lineSymbol",void 0),e([y({type:["show","hide"]})],F.prototype,"listMode",void 0),e([y({types:L,json:{write:!0}})],F.prototype,"pointSymbol",void 0),e([y({types:k,json:{write:!0}})],F.prototype,"polygonSymbol",void 0),e([y({type:["GeoRSS"]})],F.prototype,"operationalLayerType",void 0),e([y()],F.prototype,"outSpatialReference",void 0),e([y(f)],F.prototype,"url",void 0),e([y({readOnly:!0,json:{read:!1},value:"geo-rss"})],F.prototype,"type",void 0),F=e([i("esri.layers.GeoRSSLayer")],F);var M=F;

export default M;
