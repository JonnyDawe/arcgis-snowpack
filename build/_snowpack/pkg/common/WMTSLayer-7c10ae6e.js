import { e, y as y$1, M as M$1, i as i$1, a as a$1, a1 as e$1, L, bg as r, s as s$1, _ as j, A as k, w as u$3, C as U, U as U$1, o as o$1 } from './Identifiable-c8406192.js';
import { t as t$2, y as y$2 } from './config-b3bf08ce.js';
import { b as b$1 } from './Layer-d22ad00d.js';
import { l as l$2 } from './MultiOriginJSONSupport-29c9a66e.js';
import { l as l$1 } from './OperationalLayer-d48a5914.js';
import { t as t$1 } from './BlendLayer-f2f3b180.js';
import { u as u$2 } from './PortalLayer-8f26d9e1.js';
import { o } from './RefreshableLayer-cf71b273.js';
import { s as s$2 } from './ScaleRangeLayer-8feef0dd.js';
import { x as x$2 } from './TileInfo-f085f660.js';
import { a as a$2, x as x$3 } from './WebTileLayer-9681c643.js';
import { u as u$1 } from './unitUtils-1b0a3531.js';
import './persistableUrlUtils-b4be11a9.js';
import './TimeExtent-155cb8a4.js';
import './fieldUtils-a9f71c96.js';
import './lengthUtils-cb1a7b62.js';
import './aaBoundingRect-a3d841c1.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var p$2;let l=p$2=class extends a$1{constructor(t){super(t),this.fullExtent=null,this.id=null,this.tileInfo=null;}clone(){const t=new p$2;return this.hasOwnProperty("fullExtent")&&(t.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(t.id=this.id),this.hasOwnProperty("tileInfo")&&(t.tileInfo=this.tileInfo&&this.tileInfo.clone()),t}};e([y$1({type:M$1,json:{read:{source:"fullExtent"}}})],l.prototype,"fullExtent",void 0),e([y$1({type:String,json:{read:{source:"id"}}})],l.prototype,"id",void 0),e([y$1({type:x$2,json:{read:{source:"tileInfo"}}})],l.prototype,"tileInfo",void 0),l=p$2=e([i$1("esri.layer.support.TileMatrixSet")],l);var n$1=l;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var t;let i=t=class extends a$1{constructor(r){super(r),this.id=null,this.title=null,this.description=null,this.legendUrl=null;}clone(){const r=new t;return this.hasOwnProperty("description")&&(r.description=this.description),this.hasOwnProperty("id")&&(r.id=this.id),this.hasOwnProperty("isDefault")&&(r.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(r.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(r.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(r.title=this.title),r}};e([y$1({json:{read:{source:"id"}}})],i.prototype,"id",void 0),e([y$1({json:{read:{source:"title"}}})],i.prototype,"title",void 0),e([y$1({json:{read:{source:"abstract"}}})],i.prototype,"description",void 0),e([y$1({json:{read:{source:"legendUrl"}}})],i.prototype,"legendUrl",void 0),e([y$1({json:{read:{source:"isDefault"}}})],i.prototype,"isDefault",void 0),e([y$1({json:{read:{source:"keywords"}}})],i.prototype,"keywords",void 0),i=t=e([i$1("esri.layer.support.WMTSStyle")],i);var p$1=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var n;let m$1=n=class extends a$1{constructor(t){super(t),this.fullExtent=null,this.imageFormats=null,this.id=null,this.layer=null,this.styles=null,this.tileMatrixSetId=null,this.tileMatrixSets=null;}get description(){return this._get("description")}set description(t){this._set("description",t);}readFullExtent(t,e){return (t=e.fullExtent)?M$1.fromJSON(t):null}get imageFormat(){let t=this._get("imageFormat");return t||(t=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),t}set imageFormat(t){const e=this.imageFormats;t&&(t.indexOf("image/")>-1||e&&-1===e.indexOf(t))&&(-1===t.indexOf("image/")&&(t="image/"+t),e&&-1===e.indexOf(t))?console.error("The layer doesn't support the format of "+t):this._set("imageFormat",t);}get styleId(){let t=this._get("styleId");return t||(t=this.styles&&this.styles.length?this.styles.getItemAt(0).id:""),t}set styleId(t){this._set("styleId",t);}get title(){return this._get("title")}set title(t){this._set("title",t);}get tileMatrixSet(){return this.tileMatrixSets?this.tileMatrixSets.find((t=>t.id===this.tileMatrixSetId)):null}clone(){const t=new n;return this.hasOwnProperty("description")&&(t.description=this.description),this.hasOwnProperty("imageFormats")&&(t.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(t.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(t.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(t.id=this.id),this.hasOwnProperty("layer")&&(t.layer=this.layer),this.hasOwnProperty("styleId")&&(t.styleId=this.styleId),this.hasOwnProperty("styles")&&(t.styles=this.styles&&this.styles.clone()),this.hasOwnProperty("tileMatrixSetId")&&(t.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(t.tileMatrixSets=this.tileMatrixSets.clone()),this.hasOwnProperty("title")&&(t.title=this.title),t}};e([y$1()],m$1.prototype,"description",null),e([y$1()],m$1.prototype,"fullExtent",void 0),e([e$1("fullExtent",["fullExtent"])],m$1.prototype,"readFullExtent",null),e([y$1()],m$1.prototype,"imageFormat",null),e([y$1({json:{read:{source:"formats"}}})],m$1.prototype,"imageFormats",void 0),e([y$1()],m$1.prototype,"id",void 0),e([y$1()],m$1.prototype,"layer",void 0),e([y$1()],m$1.prototype,"styleId",null),e([y$1({type:L.ofType(p$1),json:{read:{source:"styles"}}})],m$1.prototype,"styles",void 0),e([y$1({value:null,json:{write:{ignoreOrigin:!0}}})],m$1.prototype,"title",null),e([y$1()],m$1.prototype,"tileMatrixSetId",void 0),e([y$1({readOnly:!0})],m$1.prototype,"tileMatrixSet",null),e([y$1({type:L.ofType(n$1),json:{read:{source:"tileMatrixSets"}}})],m$1.prototype,"tileMatrixSets",void 0),m$1=n=e([i$1("esri.layers.support.WMTSSublayer")],m$1);var h$1=m$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const s=90.71428571428571,a=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];function c(t,i){var n,r;t=t.replace(/ows:/gi,"");const l=(new DOMParser).parseFromString(t,"text/xml").documentElement,o=new Map,s=new Map,a=d("Contents",l);if(!a)throw new s$1("wmtslayer:wmts-capabilities-xml-is-not-valid");const c=d("OperationsMetadata",l),u=null==c?void 0:c.querySelector("[name='GetTile']"),p=null==u?void 0:u.getElementsByTagName("Get"),m=p&&Array.prototype.slice.call(p),w=null!=(n=(null==i||null==(r=i.url)?void 0:r.indexOf("https"))>-1)&&n;let T,M,y=i.serviceMode,S=i&&i.url;if(m&&m.length&&m.some((e=>{const t=d("Constraint",e);return !t||x$1("AllowedValues","Value",y,t)?(S=e.attributes[0].nodeValue,!0):(!t||x$1("AllowedValues","Value","RESTful",t)||x$1("AllowedValues","Value","REST",t)?M=e.attributes[0].nodeValue:t&&!x$1("AllowedValues","Value","KVP",t)||(T=e.attributes[0].nodeValue),!1)})),!S)if(M)S=M,y="RESTful";else if(T)S=T,y="KVP";else {const e=d("ServiceMetadataURL",l);S=e&&e.getAttribute("xlink:href");}const E=S.indexOf("1.0.0/");-1===E&&"RESTful"===y?S+="/":E>-1&&(S=S.substring(0,E)),"KVP"===y&&(S+=E>-1?"":"?"),w&&(S=S.replace(/^http:/i,"https:"));const V=g("ServiceIdentification>AccessConstraints",l),b=f("Layer",a),C=f("TileMatrixSet",a);return {copyright:V,layers:b.map((e=>{const t=g("Identifier",e);return o.set(t,e),h(t,e,C,w)})),tileUrl:S,serviceMode:y,layerMap:o,dimensionMap:s}}function u(e){return e.layers.forEach((e=>{e.tileMatrixSets.forEach((e=>{const t=e.tileInfo;96!==t.dpi&&(t.lods.forEach((i=>{i.scale=96*i.scale/t.dpi,i.resolution=O(t.spatialReference.wkid,i.scale*s/96,e.id);})),t.dpi=96);}));})),e}function p(e){return e.nodeType===Node.ELEMENT_NODE}function d(e,t){for(let i=0;i<t.childNodes.length;i++){const n=t.childNodes[i];if(p(n)&&n.nodeName===e)return n}return null}function f(e,t){const i=[];for(let n=0;n<t.childNodes.length;n++){const r=t.childNodes[n];p(r)&&r.nodeName===e&&i.push(r);}return i}function m(e,t){const i=[];for(let n=0;n<t.childNodes.length;n++){const r=t.childNodes[n];p(r)&&r.nodeName===e&&i.push(r);}return i.map((e=>e.textContent))}function g(e,t){return e.split(">").forEach((e=>{t&&(t=d(e,t));})),t&&t.textContent}function x$1(e,t,i,n){let r;return Array.prototype.slice.call(n.childNodes).some((n=>{if(n.nodeName.indexOf(e)>-1){const e=d(t,n),l=e&&e.textContent;if(l===i||i.split(":")&&i.split(":")[1]===l)return r=n,!0}return !1})),r}function h(e,t,i,n){const r=g("Abstract",t),l=m("Format",t);return {id:e,fullExtent:y(t),description:r,formats:l,styles:S(t,n),title:g("Title",t),tileMatrixSets:E$1(t,i)}}function w(e,t){const i=[],n=e.layerMap.get(t);if(!n)return;const r=f("ResourceURL",n),l=f("Dimension",n);let o,s,a,c;return l.length&&(o=g("Identifier",l[0]),s=m("Default",l[0])||m("Value",l[0])),l.length>1&&(a=g("Identifier",l[1]),c=m("Default",l[1])||m("Value",l[1])),e.dimensionMap.set(t,{dimensions:s,dimensions2:c}),r.forEach((e=>{let t=e.getAttribute("template");if("tile"===e.getAttribute("resourceType")){if(o&&s.length)if(t.indexOf("{"+o+"}")>-1)t=t.replace("{"+o+"}","{dimensionValue}");else {const e=t.toLowerCase().indexOf("{"+o.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue}"+t.substring(e+o.length+2));}if(a&&c.length)if(t.indexOf("{"+a+"}")>-1)t=t.replace("{"+a+"}","{dimensionValue2}");else {const e=t.toLowerCase().indexOf("{"+a.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue2}"+t.substring(e+a.length+2));}i.push({template:t,format:e.getAttribute("format"),resourceType:"tile"});}})),i}function T(e,t,i,n,r,l,o,s){const{dimensionMap:a}=e,c=w(e,t),u=a.get(t).dimensions&&a.get(t).dimensions[0],p=a.get(t).dimensions2&&a.get(t).dimensions2[0];let d="";if(c&&c.length>0){let e=null;c.some((t=>t.format===n&&(e=t,!0))),e||(e=c[o%c.length]),d=e.template.replace(/\{Style\}/gi,r).replace(/\{TileMatrixSet\}/gi,i).replace(/\{TileMatrix\}/gi,l).replace(/\{TileRow\}/gi,""+o).replace(/\{TileCol\}/gi,""+s).replace(/\{dimensionValue\}/gi,u).replace(/\{dimensionValue2\}/gi,p);}return d}function M(e,t,i,n){const{dimensionMap:r}=e,l=w(e,t);let o="";if(l&&l.length>0){const e=r.get(t).dimensions&&r.get(t).dimensions[0],s=r.get(t).dimensions2&&r.get(t).dimensions2[0];o=l[0].template,o.indexOf(".xxx")===o.length-4&&(o=o.slice(0,o.length-4)),o=o.replace(/\{Style\}/gi,n),o=o.replace(/\{TileMatrixSet\}/gi,i),o=o.replace(/\{TileMatrix\}/gi,"{level}"),o=o.replace(/\{TileRow\}/gi,"{row}"),o=o.replace(/\{TileCol\}/gi,"{col}"),o=o.replace(/\{dimensionValue\}/gi,e),o=o.replace(/\{dimensionValue2\}/gi,s);}return o}function y(e){const t=d("WGS84BoundingBox",e),i=t?g("LowerCorner",t).split(" "):["-180","-90"],n=t?g("UpperCorner",t).split(" "):["180","90"];return {xmin:parseFloat(i[0]),ymin:parseFloat(i[1]),xmax:parseFloat(n[0]),ymax:parseFloat(n[1]),spatialReference:{wkid:4326}}}function S(e,t){return f("Style",e).map((e=>{const i=d("LegendURL",e),n=d("Keywords",e),r=n&&m("Keyword",n);let l=i&&i.getAttribute("xlink:href");t&&(l=l&&l.replace(/^http:/i,"https:"));return {abstract:g("Abstract",e),id:g("Identifier",e),isDefault:"true"===e.getAttribute("isDefault"),keywords:r,legendUrl:l,title:g("Title",e)}}))}function E$1(e,t){return f("TileMatrixSetLink",e).map((e=>d("TileMatrixSet",e).textContent)).map((i=>V(i,e,t)))}function V(e,t,i){const n=m("TileMatrix",x$1("TileMatrixSetLink","TileMatrixSet",e,t)),r=i.find((t=>{const i=d("Identifier",t),n=i&&i.textContent;return !!(n===e||e.split(":")&&e.split(":")[1]===n)})),l=b(r),s=l.spatialReference,a=s.wkid,c=d("TileMatrix",r),u=[parseInt(g("TileWidth",c),10),parseInt(g("TileHeight",c),10)],p=[];if(n.length)n.forEach(((t,i)=>{const n=x$1("TileMatrix","Identifier",t,r);p.push(N(n,a,i,e));}));else {f("TileMatrix",r).forEach(((t,i)=>{p.push(N(t,a,i,e));}));}const h=C$1(r,l,u,p[0]);return {id:e,fullExtent:h.toJSON(),tileInfo:new x$2({dpi:96,spatialReference:s,size:u,origin:l,lods:p}).toJSON()}}function b(e){let t=g("SupportedCRS",e);t&&(t=t.toLowerCase());let r=parseInt(t.split(":").pop(),10);900913!==r&&3857!==r||(r=102100);let l=!1;t.indexOf("crs84")>-1||t.indexOf("crs:84")>-1?(r=4326,l=!0):t.indexOf("crs83")>-1||t.indexOf("crs:83")>-1?(r=4269,l=!0):(t.indexOf("crs27")>-1||t.indexOf("crs:27")>-1)&&(r=4267,l=!0);const o=new k({wkid:r}),s=g("TopLeftCorner",d("TileMatrix",e)).split(" "),c=s[0].split("E").map((e=>Number(e))),u=s[1].split("E").map((e=>Number(e)));let p,f=c[0],m=u[0];c.length>1&&(f=c[0]*10**c[1]),u.length>1&&(m=u[0]*10**u[1]);const x=l&&4326===r&&90===f&&-180===m;return a.some(((e,i)=>{const s=Number(t.split(":").pop());return s>=e[0]&&s<=e[1]||4326===r&&(!l||x)?(p=new j(m,f,o),!0):(i===a.length-1&&(p=new j(f,m,o)),!1)})),p}function C$1(e,t,i,n){const l=d("BoundingBox",e);let o,s,a,c,u,p;if(l&&(o=g("LowerCorner",l).split(" "),s=g("UpperCorner",l).split(" ")),o&&o.length>1&&s&&s.length>1)a=parseFloat(o[0]),u=parseFloat(o[1]),c=parseFloat(s[0]),p=parseFloat(s[1]);else {const r=d("TileMatrix",e),l=parseFloat(g("MatrixWidth",r)),o=parseFloat(g("MatrixHeight",r));a=t.x,p=t.y,c=a+l*i[0]*n.resolution,u=p-o*i[1]*n.resolution;}return new M$1(a,u,c,p,t.spatialReference)}function N(e,t,i,n){const r=g("Identifier",e),l=g("ScaleDenominator",e).split("E").map((e=>Number(e)));let o;o=l.length>1?l[0]*10**l[1]:l[0];const a=O(t,o,n);return o*=96/s,{level:i,levelValue:r,scale:o,resolution:a}}function O(e,i,n){let r$1;return r$1=r.hasOwnProperty(String(e))?r.values[r[e]]:"default028mm"===n?6370997*Math.PI/180:u$1(e).metersPerDegree,7*i/25e3/r$1}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const x={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},E=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);let _=class extends(t$1(o(s$2(l$1(u$2(l$2(b$1))))))){constructor(...e){super(...e),this._sublayersHandles=new u$3,this.copyright="",this.customParameters=null,this.customLayerParameters=null,this.fullExtent=null,this.operationalLayerType="WebTiledLayer",this.resourceInfo=null,this.serviceMode="RESTful",this.sublayers=null,this.type="wmts",this.version="1.0.0",this.watch("activeLayer",((e,t)=>{t&&(t.layer=null),e&&(e.layer=this);}),!0),this.watch("sublayers",((e,t)=>{t&&(t.forEach((e=>{e.layer=null;})),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach((e=>{e.layer=this;})),this._sublayersHandles||(this._sublayersHandles=new u$3),this._sublayersHandles.add([e.on("after-add",(({item:e})=>{e.layer=this;})),e.on("after-remove",(({item:e})=>{e.layer=null;}))]));}),!0);}normalizeCtorArgs(e,t){return "string"==typeof e?{url:e,...t}:e}load(e){if("KVP"===this.serviceMode||"RESTful"===this.serviceMode)return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).then((()=>this._fetchService(e))).catch((e=>{throw new s$1("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:e})}))),Promise.resolve(this);console.error("WMTS mode could only be 'KVP' or 'RESTful'");}get activeLayer(){return this._get("activeLayer")}set activeLayer(e){this._set("activeLayer",e);}readActiveLayerFromService(e,t,r){let s;return this.activeLayer?t.layers.some((e=>e.id===this.activeLayer.id&&(s=e,!0))):(this.activeLayer=new h$1,s=t.layers[0]),this.activeLayer.read(s,r),this.activeLayer}readActiveLayerFromItemOrWebDoc(e,t){const{templateUrl:r,wmtsInfo:s}=t,i=r?this._getLowerCasedUrlParams(r):null,a=s&&s.layerIdentifier;let o=null;const l=s&&s.tileMatrixSet;l&&(Array.isArray(l)?l.length&&(o=l[0]):o=l);const n=i&&i.format,m=i&&i.style;return new h$1({id:a,imageFormat:n,styleId:m,tileMatrixSetId:o})}writeActiveLayer(e,t,s,i){const a=this.activeLayer;t.templateUrl=this.getUrlTemplate(a.id,a.tileMatrixSetId,a.imageFormat,a.styleId);const o=t$2("tileMatrixSet.tileInfo",a);t.tileInfo=o?o.toJSON(i):null,t.wmtsInfo={...t.wmtsInfo,layerIdentifier:a.id,tileMatrixSet:a.tileMatrixSetId};}readCustomParameters(e,t){const r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null}get fullExtents(){const e=[];return this.activeLayer.tileMatrixSets.forEach((t=>{t.fullExtent&&e.push(t.fullExtent);})),e}readServiceMode(e,t){return t.templateUrl.indexOf("?")>-1?"KVP":"RESTful"}readSublayersFromService(e,t,r){return C(t.layers,r)}get supportedSpatialReferences(){return this.activeLayer.tileMatrixSets.map((e=>e.tileInfo.spatialReference)).toArray()}get title(){var e,t;return null!=(e=null==(t=this.activeLayer)?void 0:t.title)?e:"Layer"}set title(e){e?this._override("title",e):this._clearOverride("title");}get url(){return this._get("url")}set url(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e);}createWebTileLayer(e){const t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId).tileInfo,s=e.fullExtent,i=new a$2({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(i.customLayerParameters=this.customLayerParameters),this.customParameters&&(i.customParameters=this.customParameters),new x$3({fullExtent:s,urlTemplate:t,tileInfo:r,wmtsInfo:i})}fetchTile(e,t,r){const s=this.getTileUrl(e,t,r);return U(s,{responseType:"image"}).then((e=>e.data))}findSublayerById(e){return this.sublayers.find((t=>t.id===e))}getTileUrl(e,t,r){const s=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId).tileInfo.lods[e],i=s?s.levelValue?s.levelValue:`${s.level}`:`${e}`;let a=this.resourceInfo?"":T({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,i,t,r);if(!a){a=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replace(/\{level\}/gi,i).replace(/\{row\}/gi,`${t}`).replace(/\{col\}/gi,`${r}`);}return a=this._appendCustomLayerParameters(a),a}getUrlTemplate(e,t,r,s){if(!this.resourceInfo){const r=M({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,s);if(r)return r}if("KVP"===this.serviceMode)return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+s+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if("RESTful"===this.serviceMode){let i="";return x[r.toLowerCase()]&&(i=x[r.toLowerCase()]),this.url+e+"/"+s+"/"+t+"/{level}/{row}/{col}"+i}return ""}async _fetchService(e){let t;if(this.resourceInfo)"KVP"===this.resourceInfo.serviceMode&&(this.url+=this.url.indexOf("?")>-1?"":"?"),t={ssl:!1,data:this.resourceInfo};else try{t=await this._getCapabilities(this.serviceMode,e);}catch{const s="KVP"===this.serviceMode?"RESTful":"KVP";try{t=await this._getCapabilities(s,e),this.serviceMode=s;}catch(r){throw new s$1("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:r})}}this.resourceInfo?t.data=u(t.data):t.data=c(t.data,{serviceMode:this.serviceMode,url:this.url}),t.data&&this.read(t.data,{origin:"service"});}async _getCapabilities(e,t){const r=this._getCapabilitiesUrl(e);return await U(r,{...t,responseType:"text"})}_getTileMatrixSetById(e){return this.findSublayerById(this.activeLayer.id).tileMatrixSets.find((t=>t.id===e))}_appendCustomParameters(e){if(this.customParameters)for(const t in this.customParameters)e+=(-1===e.indexOf("?")?"?":"&")+t+"="+encodeURIComponent(this.customParameters[t]);return e}_appendCustomLayerParameters(e){if(this.customLayerParameters||this.customParameters){const r={...y$2(this.customParameters),...this.customLayerParameters};for(const t in r)e+=(-1===e.indexOf("?")?"?":"&")+t+"="+encodeURIComponent(r[t]);}return e}_getCapabilitiesUrl(e){let t;return this.url=this.url.split("?")[0],"KVP"===e?t=this.url+"?request=GetCapabilities&service=WMTS&version="+this.version:"RESTful"===e&&(t=this.url+"/"+this.version+"/WMTSCapabilities.xml"),t=this._appendCustomParameters(t),t}_getLowerCasedUrlParams(e){if(!e)return null;const t=U$1(e).query;if(!t)return null;const r={};return Object.keys(t).forEach((e=>{r[e.toLowerCase()]=t[e];})),r}_mergeParams(e,r){const s=this._getLowerCasedUrlParams(r);if(s){const r=Object.keys(s);r.length&&(e=e?y$2(e):{},r.forEach((t=>{e.hasOwnProperty(t)||E.has(t)||(e[t]=s[t]);})));}return e}};function C(e,t){return e.map((e=>{const r=new h$1;return r.read(e,t),r}))}e([y$1()],_.prototype,"dimensionMap",void 0),e([y$1()],_.prototype,"layerMap",void 0),e([y$1({type:h$1,json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],_.prototype,"activeLayer",null),e([e$1("service","activeLayer",["layers"])],_.prototype,"readActiveLayerFromService",null),e([e$1(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],_.prototype,"readActiveLayerFromItemOrWebDoc",null),e([o$1(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:x$2},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],_.prototype,"writeActiveLayer",null),e([y$1({type:String,value:"",json:{write:!0}})],_.prototype,"copyright",void 0),e([y$1({type:["show","hide"]})],_.prototype,"listMode",void 0),e([y$1({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],_.prototype,"customParameters",void 0),e([e$1("web-document","customParameters"),e$1("portal-item","customParameters")],_.prototype,"readCustomParameters",null),e([y$1({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],_.prototype,"customLayerParameters",void 0),e([y$1({type:M$1,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],_.prototype,"fullExtent",void 0),e([y$1({readOnly:!0})],_.prototype,"fullExtents",null),e([y$1({type:["WebTiledLayer"]})],_.prototype,"operationalLayerType",void 0),e([y$1()],_.prototype,"resourceInfo",void 0),e([y$1()],_.prototype,"serviceMode",void 0),e([e$1(["portal-item","web-document"],"serviceMode",["templateUrl"])],_.prototype,"readServiceMode",null),e([y$1({type:L.ofType(h$1)})],_.prototype,"sublayers",void 0),e([e$1("service","sublayers",["layers"])],_.prototype,"readSublayersFromService",null),e([y$1({readOnly:!0})],_.prototype,"supportedSpatialReferences",null),e([y$1({json:{read:{source:"title"}}})],_.prototype,"title",null),e([y$1({json:{read:!1},readOnly:!0,value:"wmts"})],_.prototype,"type",void 0),e([y$1({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],_.prototype,"url",null),e([y$1()],_.prototype,"version",void 0),_=e([i$1("esri.layers.WMTSLayer")],_);var R=_;

export default R;