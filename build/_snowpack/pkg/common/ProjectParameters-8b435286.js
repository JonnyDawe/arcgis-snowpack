import { e, y, i as i$1, a as a$1 } from './Identifiable-c8406192.js';
import './config-b3bf08ce.js';
import { d } from './jsonUtils-d762dc00.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let i=class extends a$1{constructor(r){super(r),this.geometries=null,this.outSpatialReference=null,this.transformation=null,this.transformForward=null;}toJSON(){const r=this.geometries.map((function(r){return r.toJSON()})),t=this.geometries[0],o={};return o.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),o.inSR=t.spatialReference.wkid||JSON.stringify(t.spatialReference.toJSON()),o.geometries=JSON.stringify({geometryType:d(t),geometries:r}),this.transformation&&(o.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(o.transformForward=this.transformForward),o}};e([y()],i.prototype,"geometries",void 0),e([y({json:{read:{source:"outSR"}}})],i.prototype,"outSpatialReference",void 0),e([y()],i.prototype,"transformation",void 0),e([y()],i.prototype,"transformForward",void 0),i=e([i$1("esri.tasks.support.ProjectParameters")],i);var a=i;

export { a };
