import { a7 as k, s, e, y, i } from './Identifiable-c8406192.js';
import './config-b3bf08ce.js';
import { b } from './Layer-d22ad00d.js';
import { l } from './MultiOriginJSONSupport-29c9a66e.js';
import { u as u$1 } from './PortalLayer-8f26d9e1.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let c=class extends(u$1(l(b))){constructor(r){super(r),this.resourceInfo=null,this.type="unknown";}initialize(){this.addResolvingPromise(new Promise(((r,o)=>{k((()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let e="Unknown layer type";r&&(e+=" "+r),o(new s("layer:unknown-layer-type",e,{layerType:r}));}));})));}read(r,o){super.read({resourceInfo:r},o);}write(){return null}};e([y({readOnly:!0})],c.prototype,"resourceInfo",void 0),e([y({type:["show","hide"]})],c.prototype,"listMode",void 0),e([y({json:{read:!1},readOnly:!0,value:"unknown"})],c.prototype,"type",void 0),c=e([i("esri.layers.UnknownLayer")],c);var u=c;

export default u;
