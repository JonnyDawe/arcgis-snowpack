(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{171:function(e,a,r){"use strict";r.r(a),r.d(a,"populateOperationalLayers",(function(){return c}));r(1);var t=r(0),y=r(117),i=r(371),n=r(225);async function L(e,a,r,y){if(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)return!1;if(e.url)return!1;if(e.featureCollectionType&&e.featureCollectionType===r)return!0;if(e.itemId){const r=new t.bK({id:e.itemId,portal:a});return await r.load(),"Feature Collection"===r.type&&Object(n.t)(r,y)}return!1}async function c(e,a,r){if(!a)return;const y=[];for(const e of a){const a=d(e,r);"GroupLayer"===e.layerType?y.push(M(a,e,r)):y.push(a)}const i=await Object(t.E)(y);for(const a of i)!a.value||r.filter&&!r.filter(a.value)||e.add(a.value)}const o={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer"},l={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},u={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},p={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",VectorTileLayer:"VectorTileLayer",GroupLayer:"GroupLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",GeoRSS:"GeoRSSLayer",KML:"KMLLayer",WFS:"UnsupportedLayer",SubtypeGroupLayer:"UnsupportedLayer",WMS:"WMSLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",DefaultTileLayer:"TileLayer"},s={ArcGISFeatureLayer:"FeatureLayer"},S={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};async function d(e,a){return async function(e,a,r){const t=new e;return t.read(a,r.context),"group"===t.type&&T(a)&&await async function(e,a,r){const t=i.a.FeatureLayer,y=await t(),n=a.featureCollection,L=n.showLegend,c=n.layers.map((e=>{const a=new y;return a.read(e,r),null!=L&&a.read({showLegend:L},r),a}));e.layers.addMany(c)}(t,a,r.context),await Object(y.a)(t,r.context),t}(await I(e,a),e,a)}async function I(e,a){const r=a.context,y=g(r);let c=e.layerType||e.type;!c&&a&&a.defaultLayerType&&(c=a.defaultLayerType);const o=y[c];let l=o?i.a[o]:i.a.UnknownLayer;const u=r&&r.portal;if(f(e)){if(e.itemId){const a=new t.bK({id:e.itemId,portal:u});await a.load();const r=(await Object(n.u)(a)).className||"UnknownLayer";l=i.a[r]}}else"ArcGISFeatureLayer"===c&&(await function(e,a){return L(e,a,"notes","Map Notes")}(e,u)?l=i.a.MapNotesLayer:await function(e,a){return L(e,a,"route","Route Layer")}(e,u)?l=i.a.RouteLayer:T(e)&&(l=i.a.GroupLayer));return e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier&&(l=i.a.WMTSLayer),l()}function T(e){if("ArcGISFeatureLayer"!==e.layerType||f(e))return!1;const a=e.featureCollection;return!!(a&&a.layers&&a.layers.length>1)}function f(e){return"Feature Collection"===e.type}function g(e){let a;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":a=u;break;case"ground":a=l;break;default:a=o}break;default:switch(e.layerContainerType){case"basemap":a=S;break;case"tables":a=s;break;default:a=p}}return a}async function M(e,a,r){const y=new t.L,i=c(y,Array.isArray(a.layers)?a.layers:[],r),n=await e;if(await i,"group"===n.type)return n.layers.addMany(y),n}}}]);