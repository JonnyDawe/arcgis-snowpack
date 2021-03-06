import { cL as f, P as r, d as n, bB as e, e as e$1, y, o, i } from './Identifiable-c8406192.js';
import './config-b3bf08ce.js';
import { b as b$1 } from './Layer-d22ad00d.js';
import { c, p } from './TablesMixin-d10799e4.js';
import { l as l$1 } from './MultiOriginJSONSupport-29c9a66e.js';
import { l } from './OperationalLayer-d48a5914.js';
import { t } from './BlendLayer-f2f3b180.js';
import { u } from './PortalLayer-8f26d9e1.js';
import { s } from './ScaleRangeLayer-8feef0dd.js';
import './persistableUrlUtils-b4be11a9.js';
import './TimeExtent-155cb8a4.js';
import './fieldUtils-a9f71c96.js';
import './lengthUtils-cb1a7b62.js';
import './unitUtils-1b0a3531.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let v=class extends(t(s(l(u(c(p(l$1(b$1)))))))){constructor(i){super(i),this._visibilityHandles={},this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._visibilityWatcher=this._visibilityWatcher.bind(this);}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.watch("visible",this._visibleWatcher.bind(this),!0);}_writeLayers(i,t,s,r$1){const o=[];if(!i)return o;i.forEach((i=>{const t=f(i,r$1.webmap?r$1.webmap.getLayerJSONFromResourceInfo(i):null,r$1);r(t)&&t.layerType&&o.push(t);})),t.layers=o;}set portalItem(i){this._set("portalItem",i);}set visibilityMode(i){const e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible);}load(i){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},i)),Promise.resolve(this)}loadAll(){return n(this,(i=>{i(this.layers);}))}layerAdded(i){i.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(i):"inherited"===this.visibilityMode&&(i.visible=this.visible),this._visibilityHandles[i.uid]=i.watch("visible",this._visibilityWatcher,!0);}layerRemoved(i){const e=this._visibilityHandles[i.uid];e&&(e.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible);}_turnOffOtherLayers(i){this.layers.forEach((e=>{e!==i&&(e.visible=!1);}));}_enforceVisibility(i,e$1){if(!e(this).initialized)return;const s=this.layers;let r=s.find((i=>i.visible));switch(i){case"exclusive":s.length&&!r&&(r=s.getItemAt(0),r.visible=!0),this._turnOffOtherLayers(r);break;case"inherited":s.forEach((i=>{i.visible=e$1;}));}}_visibleWatcher(i){"inherited"===this.visibilityMode&&this.layers.forEach((e=>{e.visible=i;}));}_visibilityWatcher(i,e,t,s){const r=s;switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(r):this._isAnyLayerVisible()||(r.visible=!0);break;case"inherited":r.visible=this.visible;}}_isAnyLayerVisible(){return this.layers.some((i=>i.visible))}};e$1([y()],v.prototype,"fullExtent",void 0),e$1([y({json:{read:!1,write:{ignoreOrigin:!0}}})],v.prototype,"layers",void 0),e$1([o("layers")],v.prototype,"_writeLayers",null),e$1([y({type:["GroupLayer"]})],v.prototype,"operationalLayerType",void 0),e$1([y({json:{origins:{"web-document":{read:!1,write:!1}}}})],v.prototype,"portalItem",null),e$1([y()],v.prototype,"spatialReference",void 0),e$1([y({json:{read:!1},readOnly:!0,value:"group"})],v.prototype,"type",void 0),e$1([y({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],v.prototype,"visibilityMode",null),v=e$1([i("esri.layers.GroupLayer")],v);var b=v;

export default b;
