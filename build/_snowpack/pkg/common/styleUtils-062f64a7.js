import { s as s$1, C as U$1, aR as z, bL as ht, bM as c$1, aT as w$1, U as U$2 } from './Identifiable-c8406192.js';
import { c as c$2 } from './persistableUrlUtils-b4be11a9.js';
import { a as c, d as b$1, L, f as d$1, i as u, y, k as n$1, u as u$1, b as h$1, m as y$1, p as b$2, A, q as k, r as c$3, s as l } from './symbols-a702d148.js';
import { e as e$1, a as t$2 } from './config-b3bf08ce.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function p(p,S=!1,a=!1,c$1=!0){if(!p)return {symbol:null};let j;if(c(p)||p instanceof b$1)j=p.clone();else if("cim"===p.type)j=L.fromCIMSymbol(p);else if(p instanceof d$1)j=u.fromSimpleLineSymbol(p);else if(p instanceof y)j=L.fromSimpleMarkerSymbol(p);else if(p instanceof n$1)j=L.fromPictureMarkerSymbol(p);else if(p instanceof u$1)j=h$1.fromSimpleFillSymbol(p);else {if(!(p instanceof y$1))return {error:new s$1("symbol-conversion:unsupported-2d-symbol",`2D symbol of type '${p.type||p.declaredClass}' is unsupported in 3D`,{symbol:p})};j=c$1?b$2.fromTextSymbol(p):L.fromTextSymbol(p);}if(S&&(j.id=p.id),a&&c(j))for(let o=0;o<j.symbolLayers.length;++o)j.symbolLayers.getItemAt(o)._ignoreDrivers=!0;return {symbol:j}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function t$1(e,s,o,n){const r=m$1(e,{},n);r&&(s[o]=r);}function m$1(n,t,m){if(!n)return null;if(m&&"web-scene"===m.origin&&!(n instanceof A)&&!(n instanceof b$1)){const s="cim"!==n.type?p(n):{symbol:null,error:new s$1("symbol-conversion:unsupported-cim-symbol","CIM symbol is unsupported in web scenes",{symbol:n})};return s.symbol?s.symbol.write(t,m):(m.messages&&m.messages.push(new s$1("symbol:unsupported",`Symbols of type '${n.declaredClass}' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView`,{symbol:n,context:m,error:s.error})),null)}return m&&"web-map"===m.origin&&"web-style"===n.type?(m.messages&&m.messages.push(new s$1("symbol:unsupported",`Symbols of type '${n.declaredClass}' are not supported in webmaps. Use CIMSymbol instead when working with WebMap in MapView.`,{symbol:n,context:m})),null):n.write(t,m)}function i(e,s){return k(e,null,s)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function a(a){return a=a||e$1.location.hostname,e.some((c=>{var t;return null!=(null==(t=a)?void 0:t.match(c))}))}function t(a,t){return a&&(t=t||e$1.location.hostname)?null!=t.match(r$1)||null!=t.match(m)?a.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(n)||null!=t.match(s)?a.replace("static.arcgis.com","staticqa.arcgis.com"):a:a}const r$1=/^devext.arcgis.com$/,n=/^qaext.arcgis.com$/,m=/^[\w-]*\.mapsdevext.arcgis.com$/,s=/^[\w-]*\.mapsqa.arcgis.com$/,e=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,r$1,n,/^jsapps.esri.com$/,m,s];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function o(o){return !!t$2(`enable-feature:${o}`)}const r=()=>o("force-wosr");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const b={};function d(e,t){return P(e,t).then((t=>({data:t.data,baseUrl:ht(e),styleUrl:e})))}function h(e,t,r){const o=t.portal||w$1.getDefault();let s;const n=`${o.url} - ${o.user&&o.user.username} - ${e}`;return b[n]||(b[n]=j(e,o,r).then((e=>(s=e,e.fetchData()))).then((t=>({data:t,baseUrl:s.itemUrl,styleName:e})))),b[n]}function j(t,r,o){return r.load(o).then((()=>{const e=new c$1({disableExtraQuery:!0,query:`owner:${D} AND type:${R} AND typekeywords:"${t}"`});return r.queryItems(e,o)})).then((({results:r})=>{let s=null;const n=t.toLowerCase();if(r&&Array.isArray(r))for(const e of r){if(e.typeKeywords.some((e=>e.toLowerCase()===n))&&e.type===R&&e.owner===D){s=e;break}}if(!s)throw new s$1("symbolstyleutils:style-not-found",`The style '${t}' could not be found`,{styleName:t});return s.load(o)}))}function g(t,r,o){return t.styleUrl?d(t.styleUrl,o):t.styleName?h(t.styleName,r,o):Promise.reject(new s$1("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function w(t,r,o,s){return t.name?t.styleName&&"Esri2DPointSymbolsStyle"===t.styleName?E(t,r,s):g(t,r,s).then((e=>U(e,t.name,r,o,s))):Promise.reject(new s$1("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function U(t$1,n,l$1,a$1,p){const b=t$1.data,d={portal:l$1.portal,url:U$2(t$1.baseUrl),origin:"portal-item"},h=b.items.find((e=>e.name===n));if(!h){const t=`The symbol name '${n}' could not be found`;return Promise.reject(new s$1("symbolstyleutils:symbol-name-not-found",t,{symbolName:n}))}let j=c$2(S(h,a$1),d),g=h.thumbnail&&h.thumbnail.href;const w=h.thumbnail&&h.thumbnail.imageData;a()&&(j=t(j),g=t(g));const U={portal:l$1.portal,url:U$2(ht(j)),origin:"portal-item"};return P(j,p).then((e=>{const r="cimRef"===a$1?N(e.data):e.data,o=i(r,U);if(o&&c(o)){if(g){const e=c$2(g,d);o.thumbnail=new c$3({url:e});}else w&&(o.thumbnail=new c$3({url:`data:image/png;base64,${w}`}));t$1.styleUrl?o.styleOrigin=new l({portal:l$1.portal,styleUrl:t$1.styleUrl,name:n}):t$1.styleName&&(o.styleOrigin=new l({portal:l$1.portal,styleName:t$1.styleName,name:n}));}return o}))}function N(e){return null===e||"CIMSymbolReference"===e.type?e:{type:"CIMSymbolReference",symbol:e}}function S(e,t){if("cimRef"===t)return e.cimRef;if(e.formatInfos&&!r())for(const r of e.formatInfos)if("gltf"===r.type)return r.href;return e.webRef}function $(e){for(const t of e.typeKeywords)if(/^Esri.*Style$/.test(t)&&"Esri Style"!==t)return t}function E(e,t,s){const n=q.replace(/\{SymbolName\}/gi,e.name);return P(n,s).then((e=>{const s=N(e.data);return i(s,{portal:t.portal,url:U$2(ht(n)),origin:"portal-item"})}))}function P(e,r){const o={responseType:"json",query:{f:"json"},...r};return U$1(z(e),o)}const D="esri_en",R="Style",q="https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json";

var styleUtils = /*#__PURE__*/Object.freeze({
	__proto__: null,
	fetchStyle: g,
	fetchSymbolFromStyle: U,
	resolveWebStyleSymbol: w,
	styleNameFromItem: $
});

export { t as a, g, i, styleUtils as s, t$1 as t };
