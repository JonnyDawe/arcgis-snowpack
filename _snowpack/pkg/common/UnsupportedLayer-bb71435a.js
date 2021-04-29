import { a7 as k, s, e, y, i } from './Identifiable-c8406192.js';
import './config-b3bf08ce.js';
import { b } from './Layer-d22ad00d.js';
import { l } from './MultiOriginJSONSupport-29c9a66e.js';
import { u } from './PortalLayer-8f26d9e1.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let c=class extends(u(l(b))){constructor(r){super(r),this.resourceInfo=null,this.type="unsupported";}initialize(){this.addResolvingPromise(new Promise(((r,e)=>{k((()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let o="Unsupported layer type";r&&(o+=" "+r),e(new s("layer:unsupported-layer-type",o,{layerType:r}));}));})));}read(r,e){const o={resourceInfo:r};null!=r.id&&(o.id=r.id),null!=r.title&&(o.title=r.title),super.read(o,e);}write(r){return Object.assign(r||{},this.resourceInfo,{id:this.id})}};e([y({readOnly:!0})],c.prototype,"resourceInfo",void 0),e([y({type:["show","hide"]})],c.prototype,"listMode",void 0),e([y({json:{read:!1},readOnly:!0,value:"unsupported"})],c.prototype,"type",void 0),c=e([i("esri.layers.UnsupportedLayer")],c);var n=c;

export default n;
