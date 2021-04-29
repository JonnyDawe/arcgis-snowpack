import { ao as c, _ as j, aJ as m, au as x, aK as m$1, M } from './Identifiable-c8406192.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function u(o){return void 0!==o.xmin&&void 0!==o.ymin&&void 0!==o.xmax&&void 0!==o.ymax}function s(o){return void 0!==o.points}function l(o){return void 0!==o.x&&void 0!==o.y}function f(o){return void 0!==o.paths}function y(o){return void 0!==o.rings}function p(m$2){return m$2?m$2 instanceof c?m$2:l(m$2)?j.fromJSON(m$2):f(m$2)?m.fromJSON(m$2):y(m$2)?x.fromJSON(m$2):s(m$2)?m$1.fromJSON(m$2):u(m$2)?M.fromJSON(m$2):null:null}function d(o){return o?l(o)?"esriGeometryPoint":f(o)?"esriGeometryPolyline":y(o)?"esriGeometryPolygon":u(o)?"esriGeometryEnvelope":s(o)?"esriGeometryMultipoint":null:null}const v={esriGeometryPoint:j,esriGeometryPolyline:m,esriGeometryPolygon:x,esriGeometryEnvelope:M,esriGeometryMultipoint:m$1};function G(o){return o&&v[o]||null}

export { G, d, f, l, p, s, u, y };
