(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{406:function(e,i,t){"use strict";t.r(i);var s=t(0),r=(t(1),t(47)),l=t(74),o=t(103),a=t(23),b=t(108),c=t(105),n=t(107);t(13),t(16),t(6),t(70),t(10);let y=class extends(Object(b.a)(Object(n.a)(Object(a.i)(Object(c.a)(Object(l.a)(Object(l.b)(Object(o.b)(r.a)))))))){constructor(e){super(e),this._visibilityHandles={},this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._visibilityWatcher=this._visibilityWatcher.bind(this)}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.watch("visible",this._visibleWatcher.bind(this),!0)}_writeLayers(e,i,t,r){const l=[];if(!e)return l;e.forEach((e=>{const i=Object(s.cL)(e,r.webmap?r.webmap.getLayerJSONFromResourceInfo(e):null,r);Object(s.P)(i)&&i.layerType&&l.push(i)})),i.layers=l}set portalItem(e){this._set("portalItem",e)}set visibilityMode(e){const i=this._get("visibilityMode")!==e;this._set("visibilityMode",e),i&&this._enforceVisibility(e,this.visible)}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},e)),Promise.resolve(this)}loadAll(){return Object(s.d)(this,(e=>{e(this.layers)}))}layerAdded(e){e.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(e):"inherited"===this.visibilityMode&&(e.visible=this.visible),this._visibilityHandles[e.uid]=e.watch("visible",this._visibilityWatcher,!0)}layerRemoved(e){const i=this._visibilityHandles[e.uid];i&&(i.remove(),delete this._visibilityHandles[e.uid]),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(e){this.layers.forEach((i=>{i!==e&&(i.visible=!1)}))}_enforceVisibility(e,i){if(!Object(s.bB)(this).initialized)return;const t=this.layers;let r=t.find((e=>e.visible));switch(e){case"exclusive":t.length&&!r&&(r=t.getItemAt(0),r.visible=!0),this._turnOffOtherLayers(r);break;case"inherited":t.forEach((e=>{e.visible=i}))}}_visibleWatcher(e){"inherited"===this.visibilityMode&&this.layers.forEach((i=>{i.visible=e}))}_visibilityWatcher(e,i,t,s){const r=s;switch(this.visibilityMode){case"exclusive":e?this._turnOffOtherLayers(r):this._isAnyLayerVisible()||(r.visible=!0);break;case"inherited":r.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some((e=>e.visible))}};Object(s.e)([Object(s.y)()],y.prototype,"fullExtent",void 0),Object(s.e)([Object(s.y)({json:{read:!1,write:{ignoreOrigin:!0}}})],y.prototype,"layers",void 0),Object(s.e)([Object(s.o)("layers")],y.prototype,"_writeLayers",null),Object(s.e)([Object(s.y)({type:["GroupLayer"]})],y.prototype,"operationalLayerType",void 0),Object(s.e)([Object(s.y)({json:{origins:{"web-document":{read:!1,write:!1}}}})],y.prototype,"portalItem",null),Object(s.e)([Object(s.y)()],y.prototype,"spatialReference",void 0),Object(s.e)([Object(s.y)({json:{read:!1},readOnly:!0,value:"group"})],y.prototype,"type",void 0),Object(s.e)([Object(s.y)({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],y.prototype,"visibilityMode",null),y=Object(s.e)([Object(s.i)("esri.layers.GroupLayer")],y);var h=y;i.default=h}}]);