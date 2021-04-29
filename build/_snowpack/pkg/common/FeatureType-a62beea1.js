import { e as e$1, y, i, aM as t, o, a as a$1, a1 as e$2 } from './Identifiable-c8406192.js';
import { p, y as y$1 } from './config-b3bf08ce.js';
import { i as i$1, e as u$2, f as n$1 } from './fieldUtils-a9f71c96.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const e=e=>{let t=class extends e{constructor(){super(...arguments),this.customParameters=null;}};return e$1([y({json:{write:!0,origins:{"web-scene":{write:!1}}}})],t.prototype,"customParameters",void 0),t=e$1([i("esri.layers.mixins.CustomParametersMixin")],t),t};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const a=new t({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});let n=class extends a$1{constructor(o){super(o),this.name=null,this.description=null,this.drawingTool=null,this.prototype=null,this.thumbnail=null;}writeDrawingTool(o,r){r.drawingTool=a.toJSON(o);}writePrototype(o,t){t.prototype=p(y$1(o),!0);}writeThumbnail(o,t){t.thumbnail=p(y$1(o));}};e$1([y({json:{write:!0}})],n.prototype,"name",void 0),e$1([y({json:{write:!0}})],n.prototype,"description",void 0),e$1([y({json:{read:a.read,write:a.write}})],n.prototype,"drawingTool",void 0),e$1([o("drawingTool")],n.prototype,"writeDrawingTool",null),e$1([y({json:{write:!0}})],n.prototype,"prototype",void 0),e$1([o("prototype")],n.prototype,"writePrototype",null),e$1([y({json:{write:!0}})],n.prototype,"thumbnail",void 0),e$1([o("thumbnail")],n.prototype,"writeThumbnail",null),n=e$1([i("esri.layers.support.FeatureTemplate")],n);var u$1=n;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let l=class extends a$1{constructor(o){super(o),this.id=null,this.name=null,this.domains=null,this.templates=null;}readDomains(o){const r={};for(const e in o)if(o.hasOwnProperty(e)){const t=o[e];switch(t.type){case"range":r[e]=n$1.fromJSON(t);break;case"codedValue":r[e]=u$2.fromJSON(t);break;case"inherited":r[e]=i$1.fromJSON(t);}}return r}writeDomains(o,e){const t={};for(const r in o)o.hasOwnProperty(r)&&(t[r]=o[r]&&o[r].toJSON());p(t),e.domains=t;}readTemplates(o){return o&&o.map((o=>new u$1(o)))}writeTemplates(o,r){r.templates=o&&o.map((o=>o.toJSON()));}};e$1([y({json:{write:!0}})],l.prototype,"id",void 0),e$1([y({json:{write:!0}})],l.prototype,"name",void 0),e$1([y({json:{write:!0}})],l.prototype,"domains",void 0),e$1([e$2("domains")],l.prototype,"readDomains",null),e$1([o("domains")],l.prototype,"writeDomains",null),e$1([y({json:{write:!0}})],l.prototype,"templates",void 0),e$1([e$2("templates")],l.prototype,"readTemplates",null),e$1([o("templates")],l.prototype,"writeTemplates",null),l=e$1([i("esri.layers.support.FeatureType")],l);var u=l;

export { u as a, e, u$1 as u };
