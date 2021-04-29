import { aM as t$2, e, y, i as i$4, l as d$1, a as a$1, aJ as m$3, C as U } from './Identifiable-c8406192.js';
import { d, p as p$1, G } from './jsonUtils-d762dc00.js';
import './config-b3bf08ce.js';
import { a as a$2 } from './ProjectParameters-8b435286.js';
import { r as r$3, e as e$1 } from './Task-21d7c7ba.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const _=new t$2({MGRS:"mgrs",USNG:"usng",UTM:"utm",GeoRef:"geo-ref",GARS:"gars",DMS:"dms",DDM:"ddm",DD:"dd"});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const i$3=new t$2({109006:"centimeters",9102:"decimal-degrees",109005:"decimeters",9002:"feet",109009:"inches",9036:"kilometers",9001:"meters",9035:"miles",109007:"millimeters",109012:"nautical-miles",9096:"yards"});function r$2(e){const{geometries:r,deviationUnit:s,maxDeviation:o}=e.toJSON(),n={maxDeviation:o};return r&&r.length&&(n.geometries=JSON.stringify({geometryType:d(r[0]),geometries:r}),n.sr=JSON.stringify(r[0].spatialReference)),i$3.write(s,n,"deviationUnit"),n}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let p=class extends a$1{constructor(r){super(r),this.deviationUnit=null,this.geometries=null,this.maxDeviation=null;}};e([y({type:String,json:{write:!0}})],p.prototype,"deviationUnit",void 0),e([y({json:{read:{reader:r=>r?r.map((r=>p$1(r))):null},write:{writer:(r,o)=>{o.geometries=r.map((r=>r.toJSON()));}}}})],p.prototype,"geometries",void 0),e([y({type:Number,json:{write:!0}})],p.prototype,"maxDeviation",void 0),p=e([i$4("esri.tasks.support.GeneralizeParameters")],p),p.from=d$1(p);var m$2=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const n$4=new t$2({preserveShape:"preserve-shape"});function o$3(e){const{polylines:o,lengthUnit:t,geodesic:i,calculationType:s}=e.toJSON(),r={};r.polylines=JSON.stringify(o);const l=e.polylines[0].spatialReference;return r.sr=l.wkid?l.wkid:JSON.stringify(l.toJSON()),t&&(r.lengthUnit=t),i&&(r.geodesic=i),s&&(r.calculationType=n$4.toJSON(s)),r}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let l=class extends a$1{constructor(o){super(o),this.calculationType=null,this.geodesic=null,this.lengthUnit=null,this.polylines=null;}};e([y({type:String,json:{write:!0}})],l.prototype,"calculationType",void 0),e([y({type:Boolean,json:{write:!0}})],l.prototype,"geodesic",void 0),e([y({json:{write:!0}})],l.prototype,"lengthUnit",void 0),e([y({type:[m$3],json:{read:{reader:o=>o?o.map((o=>p$1(o))):null},write:{writer:(o,r)=>{r.polylines=o.map((o=>o.toJSON()));}}}})],l.prototype,"polylines",void 0),l=e([i$4("esri.tasks.support.LengthsParameters")],l),l.from=d$1(l);var n$3=l;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const o$2=new t$2({esriGeometryOffsetBevelled:"bevelled",esriGeometryOffsetMitered:"mitered",esriGeometryOffsetRounded:"rounded"}),s=new t$2({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});function r$1(e){const{geometries:r,bevelRatio:i,offsetDistance:f,offsetHow:n,offsetUnit:m}=e.toJSON(),l={bevelRatio:i,offsetDistance:f};return r&&r.length&&(l.geometries=JSON.stringify({geometryType:d(r[0]),geometries:r}),l.sr=JSON.stringify(r[0].spatialReference)),n&&(l.offsetHow=o$2.toJSON(n)),m&&(l.offsetUnit=s.toJSON(m)),l}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let i$2=class extends a$1{constructor(o){super(o),this.bevelRatio=null,this.geometries=null,this.offsetDistance=null,this.offsetHow=null,this.offsetUnit=null;}};e([y({type:Number,json:{write:!0}})],i$2.prototype,"bevelRatio",void 0),e([y({json:{read:{reader:o=>o?o.map((o=>p$1(o))):null},write:{writer:(o,r)=>{r.geometries=o.map((o=>o.toJSON()));}}}})],i$2.prototype,"geometries",void 0),e([y({type:Number,json:{write:!0}})],i$2.prototype,"offsetDistance",void 0),e([y({type:String,json:{write:!0}})],i$2.prototype,"offsetHow",void 0),e([y({type:String,json:{write:!0}})],i$2.prototype,"offsetUnit",void 0),i$2=e([i$4("esri.tasks.support.OffsetParameters")],i$2),i$2.from=d$1(i$2);var m$1=i$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function r(t){return {geometryType:d(t[0]),geometries:t.map((e=>e.toJSON()))}}function o$1(e,r,o){const n=G(r);return e.map((e=>{const t=n.fromJSON(e);return t.spatialReference=o,t}))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const i$1=d$1(a$2);async function n$2(r,e,n){e=i$1(e);const u=r$3(r),a={...u.query,f:"json",...e.toJSON()},c=e.outSpatialReference,j=d(e.geometries[0]),f=e$1(a,n);return U(u.path+"/project",f).then((({data:{geometries:r}})=>o$1(r,j,c)))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const t$1=new t$2({esriGeometryRelationCross:"cross",esriGeometryRelationDisjoint:"disjoint",esriGeometryRelationIn:"in",esriGeometryRelationInteriorIntersection:"interior-intersection",esriGeometryRelationIntersection:"intersection",esriGeometryRelationLineCoincidence:"line-coincidence",esriGeometryRelationLineTouch:"line-touch",esriGeometryRelationOverlap:"overlap",esriGeometryRelationPointTouch:"point-touch",esriGeometryRelationTouch:"touch",esriGeometryRelationWithin:"within",esriGeometryRelationRelation:"relation"});function o(e){const{geometries1:o,geometries2:r,relation:n,relationParameter:s}=e.toJSON(),a={};if(o&&o.length){a.geometries1=JSON.stringify({geometryType:d(o[0]),geometries:o});const e=o[0].spatialReference;a.sr=e.wkid?e.wkid:JSON.stringify(e);}return r&&r.length>0&&(a.geometries2=JSON.stringify({geometryType:d(r[0]),geometries:r})),n&&(a.relation=t$1.toJSON(n)),s&&(a.relationParam=s),a}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let i=class extends a$1{constructor(r){super(r),this.geometries1=null,this.geometries2=null,this.relation=null,this.relationParameter=null;}};e([y({json:{read:{reader:r=>r?r.map((r=>p$1(r))):null},write:{writer:(r,o)=>{o.geometries1=r.map((r=>r.toJSON()));}}}})],i.prototype,"geometries1",void 0),e([y({json:{read:{reader:r=>r?r.map((r=>p$1(r))):null},write:{writer:(r,o)=>{o.geometries2=r.map((r=>r.toJSON()));}}}})],i.prototype,"geometries2",void 0),e([y({type:String,json:{write:!0}})],i.prototype,"relation",void 0),e([y({type:String,json:{write:!0}})],i.prototype,"relationParameter",void 0),i=e([i$4("esri.tasks.support.RelationParameters")],i),i.from=d$1(i);var a=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const t=new t$2({0:"default-curve-extension",1:"relocate-ends",2:"keep-end-attributes",4:"no-end-attributes",8:"no-extend-at-from",16:"no-extend-at-to"});function n$1(e){const{extendHow:n,polylines:o,trimExtendTo:r}=e.toJSON(),i={};return i.extendHow=t.toJSON(n),o&&o.length&&(i.polylines=JSON.stringify(o),i.sr=JSON.stringify(o[0].spatialReference)),r&&(i.trimExtendTo=JSON.stringify(r)),i}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let m=class extends a$1{constructor(r){super(r),this.extendHow="default-curve-extension",this.polylines=null,this.trimExtendTo=null;}};e([y({type:String,json:{write:!0}})],m.prototype,"extendHow",void 0),e([y({type:[m$3],json:{read:{reader:r=>r?r.map((r=>p$1(r))):null},write:{writer:(r,o)=>{o.polylines=r.map((r=>r.toJSON()));}}}})],m.prototype,"polylines",void 0),e([y({json:{read:{reader:r=>r?p$1(r):null},write:{writer:(r,o)=>{o.trimExtendTo=r.toJSON();}}}})],m.prototype,"trimExtendTo",void 0),m=e([i$4("esri.tasks.support.TrimExtendParameters")],m),m.from=d$1(m);var n=m;

export { _, r$2 as a, n$3 as b, m$1 as c, r$1 as d, a as e, o as f, o$1 as g, n as h, n$1 as i, m$2 as m, n$2 as n, o$3 as o, r };
