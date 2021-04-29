import { C as U, au as x, U as U$1, aJ as m$4, e as e$2, y, i as i$7 } from './Identifiable-c8406192.js';
import './config-b3bf08ce.js';
import { r as r$2, e as e$1, p as p$1 } from './Task-21d7c7ba.js';
import { r as r$3, _, m as m$2, a as r$4, b as n$1, o as o$4, c as m$3, d as r$5, e as a, f as o$5, g as o$6, h as n$2, i as n$3, n as n$4 } from './TrimExtendParameters-1321bbb7.js';
import { p, d } from './jsonUtils-d762dc00.js';
import './ProjectParameters-8b435286.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function o$3(o,s,e){const a=r$2(o),u={...a.query,f:"json",...s.toJSON()},f=e$1(u,e);return U(a.path+"/areasAndLengths",f).then((t=>t.data))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function i$6(i,n,m,p){const g=n[0].spatialReference,f=r$2(i),a={...f.query,f:"json",sr:JSON.stringify(g.toJSON()),polygons:JSON.stringify(r$3(n).geometries),polylines:JSON.stringify(r$3(m).geometries)},y=e$1(a,p);return U(f.path+"/autoComplete",y).then((({data:t})=>(t.geometries||[]).map((({rings:t})=>new x({spatialReference:g,rings:t})))))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function s(s,n,i){const m=r$2(s),a={...m.query,f:"json",...n.toJSON()},f=n.outSpatialReference||n.geometries[0].spatialReference,p=e$1(a,i);return U(m.path+"/buffer",p).then((r=>(r.data.geometries||[]).map((({rings:r})=>new x({spatialReference:f,rings:r})))))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function i$5(i,n,m){const f=n[0].spatialReference,p$1=r$2(i),a={...p$1.query,f:"json",sr:JSON.stringify(f.toJSON()),geometries:JSON.stringify(r$3(n))},u=e$1(a,m);return U(p$1.path+"/convexHull",u).then((({data:e})=>p(e.geometry).set({spatialReference:f})))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function o$2(o,i,n,m){const a=r$2(o),p$1=i[0].spatialReference,u={...m,query:{...a.query,f:"json",sr:JSON.stringify(p$1),target:JSON.stringify({geometryType:d(i[0]),geometries:i}),cutter:JSON.stringify(n)}},c=await U(a.path+"/cut",u),{cutIndexes:f,geometries:g=[]}=c.data;return {cutIndexes:f,geometries:g.map((e=>{const r=p(e);return r.spatialReference=p$1,r}))}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function o$1(o,i,n){const m=i.geometries[0].spatialReference,p$1=r$2(o),a={...p$1.query,f:"json",...i.toJSON()},f=e$1(a,n);return U(p$1.path+"/densify",f).then((({data:t})=>(t.geometries||[]).map((t=>p(t).set({spatialReference:m})))))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function i$4(i,m,n,f){const p$1=m[0].spatialReference,y=r$2(i);let a={query:{...y.query,f:"json",sr:JSON.stringify(p$1.toJSON()),geometries:JSON.stringify(r$3(m)),geometry:JSON.stringify({geometryType:d(n),geometry:n.toJSON()})}};return f&&(a={...f,...a}),U(y.path+"/difference",a).then((({data:e})=>(e.geometries||[]).map((e=>p(e).set({spatialReference:p$1})))))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function r$1(r,s,e){const a=r$2(r),i={...a.query,f:"json",...s.toJSON()},c=e$1(i,e);return U(a.path+"/distance",c).then((({data:t})=>t&&t.distance))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function t$1(t,i,e){const c={};null!=i.sr&&"object"==typeof i.sr?c.sr=i.sr.wkid||JSON.stringify(i.sr):c.sr=i.sr,c.strings=JSON.stringify(i.strings);const f=i.conversionType||"mgrs";c.conversionType=_.toJSON(f),c.conversionMode=i.conversionMode;const m=r$2(t),p={...m.query,f:"json",...c},u=e$1(p,e);return U(m.path+"/fromGeoCoordinateString",u).then((({data:o})=>o.coordinates))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function i$3(i,m,p$1){const n=(m=m$2.from(m)).toJSON(),f=r$4(m),j=r$2(i),l={...j.query,f:"json",...f},u=n.geometries[0].spatialReference,c=e$1(l,p$1);return U(j.path+"/generalize",c).then((({data:r})=>(r.geometries||[]).map((r=>p(r).set({spatialReference:u})))))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function m$1(m,n,p$1,f){const y=n[0].spatialReference,a=r$2(m),g={...a.query,f:"json",sr:JSON.stringify(y.toJSON()),geometries:JSON.stringify(r$3(n)),geometry:JSON.stringify({geometryType:d(p$1),geometry:p$1.toJSON()})},u=e$1(g,f);return U(a.path+"/intersect",u).then((({data:e})=>(e.geometries||[]).map((e=>p(e).set({spatialReference:y})))))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function r(r,i,n){const p$1=i.map((t=>t.toJSON())),a=i[0].spatialReference,f=r$2(r),l={...f.query,f:"json",sr:a.wkid?a.wkid:JSON.stringify(a.toJSON()),polygons:JSON.stringify(p$1)},m=e$1(l,n);return U(f.path+"/labelPoints",m).then((({data:e})=>(e.labelPoints||[]).map((e=>p(e).set({spatialReference:a})))))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function n(n,m,a){m=n$1.from(m);const p=o$4(m),f=r$2(n),i={...f.query,f:"json",...p},u=e$1(i,a);return U(f.path+"/lengths",u).then((({data:t})=>t))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function m(m,p$1,a){p$1=m$3.from(p$1);const i=r$5(p$1),n=r$2(m),j={...n.query,f:"json",...i},u=p$1.geometries[0].spatialReference,c=e$1(j,a);return U(n.path+"/offset",c).then((({data:e})=>(e.geometries||[]).map((e=>p(e).set({spatialReference:u})))))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function e(e,n,i){n=a.from(n);const m=o$5(n),p=r$2(e),f={...p.query,f:"json",...m},u=e$1(f,i);return U(p.path+"/relation",u).then((({data:t})=>t.relations))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function i$2(i,n,p$1,a){const f=n.spatialReference,m=r$2(i),y={...m.query,f:"json",sr:JSON.stringify(f.toJSON()),target:JSON.stringify({geometryType:d(n),geometry:n.toJSON()}),reshaper:JSON.stringify(p$1.toJSON())},g=e$1(y,a);return U(m.path+"/reshape",g).then((({data:e})=>p(e.geometry).set({spatialReference:f})))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function o(o,m,f){const n="string"==typeof o?U$1(o):o,p=m[0].spatialReference,a=d(m[0]),u={...f,query:{...n.query,f:"json",sr:p.wkid?p.wkid:JSON.stringify(p),geometries:JSON.stringify(r$3(m))}},{data:y}=await U(n.path+"/simplify",u);return o$6(y.geometries,a,p)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function t(t,i,e){const c={};null!=i.sr&&"object"==typeof i.sr?c.sr=i.sr.wkid||JSON.stringify(i.sr):c.sr=i.sr,c.coordinates=JSON.stringify(i.coordinates);const d=i.conversionType||"mgrs";c.conversionType=_.toJSON(d),c.conversionMode=i.conversionMode,c.numOfDigits=i.numOfDigits,c.rounding=i.rounding,c.addSpaces=i.addSpaces;const a=r$2(t),u={...a.query,f:"json",...c},f=e$1(u,e);return U(a.path+"/toGeoCoordinateString",f).then((({data:o})=>o.strings))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function i$1(i,p,a){p=n$2.from(p);const n=n$3(p),f=r$2(i),j={...f.query,f:"json",...n},u=p.sr,y=e$1(j,a);return U(f.path+"/trimExtend",y).then((({data:r})=>(r.geometries||[]).map((({paths:r})=>new m$4({spatialReference:u,paths:r})))))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function i(i,n,m){const f=n[0].spatialReference,p$1=r$2(i),a={...p$1.query,f:"json",sr:JSON.stringify(f.toJSON()),geometries:JSON.stringify(r$3(n))},u=e$1(a,m);return U(p$1.path+"/union",u).then((({data:e})=>p(e.geometry).set({spatialReference:f})))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let C=class extends p$1{constructor(r){super(r),this.url=null;}areasAndLengths(r,e){return o$3(this.url,r,e)}autoComplete(r,e,t){return i$6(this.url,r,e,t)}buffer(r,e){return s(this.url,r,e)}convexHull(r,e){return i$5(this.url,r,e)}cut(r,e,t){return o$2(this.url,r,e,t)}densify(r,e){return o$1(this.url,r,e)}difference(r,e,t){return i$4(this.url,r,e,t)}distance(r,e){return r$1(this.url,r,e)}fromGeoCoordinateString(r,e){return t$1(this.url,r,e)}generalize(r,e){return i$3(this.url,r,e)}intersect(r,e,t){return m$1(this.url,r,e,t)}labelPoints(r$1,e){return r(this.url,r$1,e)}lengths(r,e){return n(this.url,r,e)}offset(r,e){return m(this.url,r,e)}project(r,e){return n$4(this.url,r,e)}relation(r,e$1){return e(this.url,r,e$1)}reshape(r,e,t){return i$2(this.url,r,e,t)}simplify(r,e){return o(this.url,r,e)}toGeoCoordinateString(r,e){return t(this.url,r,e)}trimExtend(r,e){return i$1(this.url,r,e)}union(r,e){return i(this.url,r,e)}};C.UNIT_METER=9001,C.UNIT_GERMAN_METER=9031,C.UNIT_FOOT=9002,C.UNIT_SURVEY_FOOT=9003,C.UNIT_CLARKE_FOOT=9005,C.UNIT_FATHOM=9014,C.UNIT_NAUTICAL_MILE=9030,C.UNIT_SURVEY_CHAIN=9033,C.UNIT_SURVEY_LINK=9034,C.UNIT_SURVEY_MILE=9035,C.UNIT_KILOMETER=9036,C.UNIT_CLARKE_YARD=9037,C.UNIT_CLARKE_CHAIN=9038,C.UNIT_CLARKE_LINK=9039,C.UNIT_SEARS_YARD=9040,C.UNIT_SEARS_FOOT=9041,C.UNIT_SEARS_CHAIN=9042,C.UNIT_SEARS_LINK=9043,C.UNIT_BENOIT_1895A_YARD=9050,C.UNIT_BENOIT_1895A_FOOT=9051,C.UNIT_BENOIT_1895A_CHAIN=9052,C.UNIT_BENOIT_1895A_LINK=9053,C.UNIT_BENOIT_1895B_YARD=9060,C.UNIT_BENOIT_1895B_FOOT=9061,C.UNIT_BENOIT_1895B_CHAIN=9062,C.UNIT_BENOIT_1895B_LINK=9063,C.UNIT_INDIAN_FOOT=9080,C.UNIT_INDIAN_1937_FOOT=9081,C.UNIT_INDIAN_1962_FOOT=9082,C.UNIT_INDIAN_1975_FOOT=9083,C.UNIT_INDIAN_YARD=9084,C.UNIT_INDIAN_1937_YARD=9085,C.UNIT_INDIAN_1962_YARD=9086,C.UNIT_INDIAN_1975_YARD=9087,C.UNIT_FOOT_1865=9070,C.UNIT_RADIAN=9101,C.UNIT_DEGREE=9102,C.UNIT_ARCMINUTE=9103,C.UNIT_ARCSECOND=9104,C.UNIT_GRAD=9105,C.UNIT_GON=9106,C.UNIT_MICRORADIAN=9109,C.UNIT_ARCMINUTE_CENTESIMAL=9112,C.UNIT_ARCSECOND_CENTESIMAL=9113,C.UNIT_MIL6400=9114,C.UNIT_BRITISH_1936_FOOT=9095,C.UNIT_GOLDCOAST_FOOT=9094,C.UNIT_INTERNATIONAL_CHAIN=109003,C.UNIT_INTERNATIONAL_LINK=109004,C.UNIT_INTERNATIONAL_YARD=109001,C.UNIT_STATUTE_MILE=9093,C.UNIT_SURVEY_YARD=109002,C.UNIT_50KILOMETER_LENGTH=109030,C.UNIT_150KILOMETER_LENGTH=109031,C.UNIT_DECIMETER=109005,C.UNIT_CENTIMETER=109006,C.UNIT_MILLIMETER=109007,C.UNIT_INTERNATIONAL_INCH=109008,C.UNIT_US_SURVEY_INCH=109009,C.UNIT_INTERNATIONAL_ROD=109010,C.UNIT_US_SURVEY_ROD=109011,C.UNIT_US_NAUTICAL_MILE=109012,C.UNIT_UK_NAUTICAL_MILE=109013,C.UNIT_SQUARE_INCHES="esriSquareInches",C.UNIT_SQUARE_FEET="esriSquareFeet",C.UNIT_SQUARE_YARDS="esriSquareYards",C.UNIT_ACRES="esriAcres",C.UNIT_SQUARE_MILES="esriSquareMiles",C.UNIT_SQUARE_MILLIMETERS="esriSquareMillimeters",C.UNIT_SQUARE_CENTIMETERS="esriSquareCentimeters",C.UNIT_SQUARE_DECIMETERS="esriSquareDecimeters",C.UNIT_SQUARE_METERS="esriSquareMeters",C.UNIT_ARES="esriAres",C.UNIT_HECTARES="esriHectares",C.UNIT_SQUARE_KILOMETERS="esriSquareKilometers",e$2([y()],C.prototype,"url",void 0),C=e$2([i$7("esri.tasks.GeometryService")],C);var g=C;

export default g;
