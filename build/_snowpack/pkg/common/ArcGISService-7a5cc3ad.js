import { e, y, i, P as r, n } from './Identifiable-c8406192.js';
import './config-b3bf08ce.js';
import { d, y as y$1 } from './arcgisLayerUrl-d85d6d65.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const p=p=>{let c=class extends p{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const t=d(this.url);if(r(t)&&t.title)return t.title}return this._get("title")||""}set title(t){this._set("title",t);}set url(t){this._set("url",y$1(t,n.getLogger(this.declaredClass)));}};return e([y()],c.prototype,"title",null),e([y({type:String})],c.prototype,"url",null),c=e([i("esri.layers.mixins.ArcGISService")],c),c};

export { p };
