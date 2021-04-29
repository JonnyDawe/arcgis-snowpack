import { e, y, i } from './Identifiable-c8406192.js';
import './config-b3bf08ce.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const o=o=>{let t=class extends o{constructor(){super(...arguments),this.refreshInterval=0;}refresh(){this.emit("refresh");}};return e([y({type:Number,cast:r=>r>=.1?r:r<=0?0:.1,json:{write:!0,origins:{"web-document":{write:!0}}}})],t.prototype,"refreshInterval",void 0),t=e([i("esri.layers.mixins.RefreshableLayer")],t),t};

export { o };
