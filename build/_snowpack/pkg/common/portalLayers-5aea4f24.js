import { bK as b, s as s$1, Y as e, C as U } from './Identifiable-c8406192.js';
import { a } from './lazyLayerLoader-ca2f9b24.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function t(e,t){return !!e.typeKeywords&&e.typeKeywords.indexOf(t)>-1}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function l(e){return !e.portalItem||e.portalItem instanceof b||(e={...e,portalItem:new b(e.portalItem)}),s(e.portalItem).then((r=>{const t={portalItem:e.portalItem,...r.properties},a=r.constructor;return Promise.resolve(new a(t))}))}function s(e){return e.load().then(u).then(i)}function u(e){switch(e.type){case"Map Service":return c(e);case"Feature Service":return y(e);case"Feature Collection":return p(e);case"Scene Service":return m(e);case"Image Service":return f(e);case"Stream Service":return d();case"Vector Tile Service":return L();case"KML":return h();case"WMTS":return N();case"WMS":return I();default:return Promise.reject(new s$1("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function i(e){return (0, a[e.className])().then((r=>({constructor:r,properties:e.properties})))}function c(e){return S(e).then((e=>e?{className:"TileLayer"}:{className:"MapImageLayer"}))}function y(e){return g(e).then((e=>{if("object"==typeof e){const r={};return null!=e.id&&(r.layerId=e.id),{className:"FeatureLayer",properties:r}}return {className:"GroupLayer"}}))}function m(e){return g(e).then((r=>{if("object"==typeof r){const t={};let a;if(null!=r.id?(t.layerId=r.id,a=`${e.url}/layers/${r.id}`):a=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0){const r={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};for(const t of Object.keys(r))if(-1!==e.typeKeywords.indexOf(t))return {className:r[t]}}return j(a).then((e=>{let r="SceneLayer";const a={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&a[e.layerType]&&(r=a[e.layerType]),{className:r,properties:t}}))}return {className:"GroupLayer"}}))}async function p(e){await e.load();if(t(e,"Map Notes"))return {className:"MapNotesLayer"};if(t(e,"Route Layer"))return {className:"RouteLayer"};return 1===T(await e.fetchData())?{className:"FeatureLayer"}:{className:"GroupLayer"}}async function f(e){var r,t,a;await e.load();const n=null!=(r=null==(t=e.typeKeywords)?void 0:t.map((e=>e.toLowerCase())))?r:[];if(n.indexOf("elevation 3d layer")>-1)return {className:"ElevationLayer"};if(n.indexOf("tiled imagery")>-1)return {className:"ImageryTileLayer"};const o=await e.fetchData(),l=null==o?void 0:o.layerType;if("ArcGISTiledImageServiceLayer"===l)return {className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===l)return {className:"ImageryLayer"};return "map"===(null==(a=(await j(e.url)).cacheType)?void 0:a.toLowerCase())?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}function d(){return {className:"StreamLayer"}}function L(){return {className:"VectorTileLayer"}}function h(){return {className:"KMLLayer"}}function I(){return {className:"WMSLayer"}}function N(){return {className:"WMTSLayer"}}function S(e){return j(e.url).then((e=>e.tileInfo))}function g(e){return !e.url||e.url.match(/\/\d+$/)?Promise.resolve({}):e.load().then((()=>e.fetchData())).then((r=>T(r)>0?v(r):j(e.url).then(v)))}function v(r){return 1===T(r)&&{id:e(w(r))}}function w(e){const r=e.layers;if(r&&r.length)return r[0].id;const t=e.tables;return t&&t.length?t[0].id:null}function T(e){var r,t,a,n;return (null!=(r=null==e||null==(t=e.layers)?void 0:t.length)?r:0)+(null!=(a=null==e||null==(n=e.tables)?void 0:n.length)?a:0)}function j(e){return U(e,{responseType:"json",query:{f:"json"}}).then((e=>e.data))}

var portalLayers = /*#__PURE__*/Object.freeze({
	__proto__: null,
	fromItem: l,
	selectLayerClassPath: u
});

export { portalLayers as p, t, u };
