(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{428:function(e,t,r){"use strict";r.r(t);var o=r(0),l=(r(1),r(47)),a=r(103),n=r(23),i=r(105),s=r(115);r(13),r(16),r(6),r(70),r(10),r(3),r(4),r(32),r(57),r(21),r(62),r(26),r(24),r(85),r(48),r(20),r(9),r(52),r(109),r(49),r(111),r(71),r(104),r(53),r(51),r(82),r(72),r(5),r(55),r(63),r(112),r(108),r(58),r(110),r(107),r(56),r(116),r(36),r(64),r(42),r(113),r(41),r(121),r(14),r(117),r(114),r(27);let c=class extends(Object(n.i)(Object(i.a)(Object(a.b)(l.a)))){constructor(...e){super(...e),this.type="route"}get barrierLines(){return this._getNamedFeatureLayer("PolylineBarriers")}get barrierPoints(){return this._getNamedFeatureLayer("Barriers")}get barrierPolygons(){return this._getNamedFeatureLayer("PolygonBarriers")}get directionLines(){return this._getNamedFeatureLayer("DirectionLines")}get directionPoints(){return this._getNamedFeatureLayer("DirectionPoints")}readFeatureCollectionsFromItem(e,t,r){return this.revert("featureCollections","portal-item"),t.layers.map((e=>{const t=new s.k;return t.read(e,r),t}))}readFeatureCollectionsFromWebMap(e,t,r){return t.featureCollection.layers.map((e=>{const t=new s.k;return t.read(e,r),t}))}get fullExtent(){return this.featureCollections?this.featureCollections.reduce(((e,t)=>e?e.union(t.fullExtent):t.fullExtent),null):null}get maxScale(){return this.featureCollections?this.featureCollections.reduce(((e,t)=>null==e?t.maxScale:Math.min(e,t.maxScale)),null):0}set maxScale(e){this.featureCollections.forEach((t=>{t.maxScale=e})),this._set("maxScale",e)}get minScale(){return this.featureCollections?this.featureCollections.reduce(((e,t)=>null==e?t.minScale:Math.min(e,t.minScale)),null):0}set minScale(e){this.featureCollections.forEach((t=>{t.minScale=e})),this._set("minScale",e)}get routeInfo(){return this._getNamedFeatureLayer("RouteInfo")}get stops(){return this._getNamedFeatureLayer("Stops")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}_getNamedFeatureLayer(e){if(this.featureCollections)return this.featureCollections.find((t=>t.title===e))}};Object(o.e)([Object(o.y)()],c.prototype,"barrierLines",null),Object(o.e)([Object(o.y)()],c.prototype,"barrierPoints",null),Object(o.e)([Object(o.y)()],c.prototype,"barrierPolygons",null),Object(o.e)([Object(o.y)()],c.prototype,"directionLines",null),Object(o.e)([Object(o.y)()],c.prototype,"directionPoints",null),Object(o.e)([Object(o.y)({type:o.L.ofType(s.k)})],c.prototype,"featureCollections",void 0),Object(o.e)([Object(o.a1)("portal-item","featureCollections",["layers"])],c.prototype,"readFeatureCollectionsFromItem",null),Object(o.e)([Object(o.a1)("web-map","featureCollections",["featureCollection.layers"])],c.prototype,"readFeatureCollectionsFromWebMap",null),Object(o.e)([Object(o.y)({readOnly:!0})],c.prototype,"fullExtent",null),Object(o.e)([Object(o.y)({type:["show","hide"]})],c.prototype,"listMode",void 0),Object(o.e)([Object(o.y)()],c.prototype,"maxScale",null),Object(o.e)([Object(o.y)()],c.prototype,"minScale",null),Object(o.e)([Object(o.y)()],c.prototype,"routeInfo",null),Object(o.e)([Object(o.y)()],c.prototype,"stops",null),Object(o.e)([Object(o.y)({readOnly:!0,json:{read:!1}})],c.prototype,"type",void 0),c=Object(o.e)([Object(o.i)("esri.layers.RouteLayer")],c);var u=c;t.default=u}}]);