import { ao as c, M, aJ as m, _ as j$1, au as x$1, aF as t, aK as m$2 } from './Identifiable-c8406192.js';
import { p as p$1 } from './jsonUtils-d762dc00.js';
import { G as se, J, P, K, Z, E, x as te, H as c$1, l as k$1, L as r, M as O$1, Q as fe, R as a, U as ce, V as me, X, W as ee, Y as a$1, $ as f } from './arcadeUtils-0513dddf.js';
import { S, g, A, w, x, p, O, d, h, j, k, R, E as E$1, l, y, W, K as K$1, F, M as M$1, m as m$1, P as P$1, U, G, V, b, I, q, J as J$1, v } from './geometryEngineAsync-8049b291.js';
import './config-b3bf08ce.js';
import './sizeVariableUtils-33233df0.js';
import './number-cadfd251.js';
import './Field-e6fe6b12.js';
import './fieldUtils-a9f71c96.js';
import './fieldType-769fe7ff.js';
import './featureConversionUtils-6830a580.js';
import './OptimizedFeatureSet-d6270f6b.js';
import './FeatureSetReader-a4e80fde.js';
import './centroid-a0ceb19b.js';
import './workers-31c2755c.js';
import './watchUtils-880dbce7.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function tn(n){return 0===t.indexOf("4.")?x$1.fromExtent(n):new x$1({spatialReference:n.spatialReference,rings:[[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]]]})}function en(r){if(J(r,2,2),r[0]instanceof c&&r[1]instanceof c);else if(r[0]instanceof c&&null===r[1]);else if(r[1]instanceof c&&null===r[0]);else if(null!==r[0]||null!==r[1])throw new Error("Illegal Argument")}function on(l$1){"async"===l$1.mode&&(l$1.functions.disjoint=function(n,r){return l$1.standardFunctionAsync(n,r,(function(n,r,t){return en(t=se(t)),null===t[0]||null===t[1]||S(t[0],t[1])}))},l$1.functions.intersects=function(n,r){return l$1.standardFunctionAsync(n,r,(function(n,r,t){return en(t=se(t)),null!==t[0]&&null!==t[1]&&g(t[0],t[1])}))},l$1.functions.touches=function(n,r){return l$1.standardFunctionAsync(n,r,(function(n,r,t){return en(t=se(t)),null!==t[0]&&null!==t[1]&&A(t[0],t[1])}))},l$1.functions.crosses=function(n,r){return l$1.standardFunctionAsync(n,r,(function(n,r,t){return en(t=se(t)),null!==t[0]&&null!==t[1]&&w(t[0],t[1])}))},l$1.functions.within=function(n,r){return l$1.standardFunctionAsync(n,r,(function(n,r,t){return en(t=se(t)),null!==t[0]&&null!==t[1]&&x(t[0],t[1])}))},l$1.functions.contains=function(n,r){return l$1.standardFunctionAsync(n,r,(function(n,r,t){return en(t=se(t)),null!==t[0]&&null!==t[1]&&p(t[0],t[1])}))},l$1.functions.overlaps=function(n,r){return l$1.standardFunctionAsync(n,r,(function(n,r,t){return en(t=se(t)),null!==t[0]&&null!==t[1]&&O(t[0],t[1])}))},l$1.functions.equals=function(r,t){return l$1.standardFunctionAsync(r,t,(function(r,t,e){return J(e,2,2),e[0]===e[1]||(e[0]instanceof c&&e[1]instanceof c?d(e[0],e[1]):!(!P(e[0])||!P(e[1]))&&e[0].getTime()===e[1].getTime())}))},l$1.functions.relate=function(r,t){return l$1.standardFunctionAsync(r,t,(function(r,t,e){if(e=se(e),J(e,3,3),e[0]instanceof c&&e[1]instanceof c)return h(e[0],e[1],K(e[2]));if(e[0]instanceof c&&null===e[1])return !1;if(e[1]instanceof c&&null===e[0])return !1;if(null===e[0]&&null===e[1])return !1;throw new Error("Illegal Argument")}))},l$1.functions.intersection=function(n,r){return l$1.standardFunctionAsync(n,r,(function(n,r,t){return en(t=se(t)),null===t[0]||null===t[1]?null:j(t[0],t[1])}))},l$1.functions.union=function(r,t){return l$1.standardFunctionAsync(r,t,(function(t,e,o){const i=[];if(0===(o=se(o)).length)throw new Error("Function called with wrong number of Parameters");if(1===o.length)if(Z(o[0])){const r=se(o[0]);for(let t=0;t<r.length;t++)if(null!==r[t]){if(!(r[t]instanceof c))throw new Error("Illegal Argument");i.push(r[t]);}}else {if(!E(o[0])){if(o[0]instanceof c)return te(c$1(o[0]),r.spatialReference);if(null===o[0])return null;throw new Error("Illegal Argument")}{const r=se(o[0].toArray());for(let t=0;t<r.length;t++)if(null!==r[t]){if(!(r[t]instanceof c))throw new Error("Illegal Argument");i.push(r[t]);}}}else for(let r=0;r<o.length;r++)if(null!==o[r]){if(!(o[r]instanceof c))throw new Error("Illegal Argument");i.push(o[r]);}return 0===i.length?null:k(i)}))},l$1.functions.difference=function(n,r){return l$1.standardFunctionAsync(n,r,(function(n,r,t){return en(t=se(t)),null!==t[0]&&null===t[1]?c$1(t[0]):null===t[0]?null:R(t[0],t[1])}))},l$1.functions.symmetricdifference=function(n,r){return l$1.standardFunctionAsync(n,r,(function(n,r,t){return en(t=se(t)),null===t[0]&&null===t[1]?null:null===t[0]?c$1(t[1]):null===t[1]?c$1(t[0]):E$1(t[0],t[1])}))},l$1.functions.clip=function(r,e){return l$1.standardFunctionAsync(r,e,(function(r,e,o){if(o=se(o),J(o,2,2),!(o[1]instanceof M)&&null!==o[1])throw new Error("Illegal Argument");if(null===o[0])return null;if(!(o[0]instanceof c))throw new Error("Illegal Argument");return null===o[1]?null:l(o[0],o[1])}))},l$1.functions.cut=function(r,t){return l$1.standardFunctionAsync(r,t,(function(r,t,e){if(e=se(e),J(e,2,2),!(e[1]instanceof m)&&null!==e[1])throw new Error("Illegal Argument");if(null===e[0])return [];if(!(e[0]instanceof c))throw new Error("Illegal Argument");return null===e[1]?[c$1(e[0])]:y(e[0],e[1])}))},l$1.functions.area=function(r$1,t){return l$1.standardFunctionAsync(r$1,t,(function(t,e,o){if(J(o,1,2),null===(o=se(o))[0])return 0;if(k$1(o[0]))return o[0].sumArea(r(O$1(o[1],-1)),!1,r$1.abortSignal).then((n=>{if(r$1.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(Z(o[0])||E(o[0])){const n=fe(o[0],r$1.spatialReference);return null===n?0:W(n,r(O$1(o[1],-1)))}if(!(o[0]instanceof c))throw new Error("Illegal Argument");return W(o[0],r(O$1(o[1],-1)))}))},l$1.functions.areageodetic=function(r$1,t){return l$1.standardFunctionAsync(r$1,t,(function(t,e,o){if(J(o,1,2),null===(o=se(o))[0])return 0;if(k$1(o[0]))return o[0].sumArea(r(O$1(o[1],-1)),!0,r$1.abortSignal).then((n=>{if(r$1.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(Z(o[0])||E(o[0])){const n=fe(o[0],r$1.spatialReference);return null===n?0:K$1(n,r(O$1(o[1],-1)))}if(!(o[0]instanceof c))throw new Error("Illegal Argument");return K$1(o[0],r(O$1(o[1],-1)))}))},l$1.functions.length=function(r,t){return l$1.standardFunctionAsync(r,t,(function(t,e,o){if(J(o,1,2),null===(o=se(o))[0])return 0;if(k$1(o[0]))return o[0].sumLength(a(O$1(o[1],-1)),!1,r.abortSignal).then((n=>{if(r.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(Z(o[0])||E(o[0])){const n=ce(o[0],r.spatialReference);return null===n?0:F(n,a(O$1(o[1],-1)))}if(!(o[0]instanceof c))throw new Error("Illegal Argument");return F(o[0],a(O$1(o[1],-1)))}))},l$1.functions.lengthgeodetic=function(r,t){return l$1.standardFunctionAsync(r,t,(function(t,e,o){if(J(o,1,2),null===(o=se(o))[0])return 0;if(k$1(o[0]))return o[0].sumLength(a(O$1(o[1],-1)),!0,r.abortSignal).then((n=>{if(r.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(Z(o[0])||E(o[0])){const n=ce(o[0],r.spatialReference);return null===n?0:M$1(n,a(O$1(o[1],-1)))}if(!(o[0]instanceof c))throw new Error("Illegal Argument");return M$1(o[0],a(O$1(o[1],-1)))}))},l$1.functions.distance=function(r,t){return l$1.standardFunctionAsync(r,t,(function(t,e,o){o=se(o),J(o,2,3);let i=o[0];(Z(o[0])||E(o[0]))&&(i=me(o[0],r.spatialReference));let u=o[1];if((Z(o[1])||E(o[1]))&&(u=me(o[1],r.spatialReference)),!(i instanceof c))throw new Error("Illegal Argument");if(!(u instanceof c))throw new Error("Illegal Argument");return m$1(i,u,a(O$1(o[2],-1)))}))},l$1.functions.distancegeodetic=function(n,t){return l$1.standardFunctionAsync(n,t,(function(n,t,e){e=se(e),J(e,2,3);const o=e[0],u=e[1];if(!(o instanceof j$1))throw new Error("Illegal Argument");if(!(u instanceof j$1))throw new Error("Illegal Argument");const l=new m({paths:[],spatialReference:o.spatialReference});return l.addPath([o,u]),M$1(l,a(O$1(e[2],-1)))}))},l$1.functions.densify=function(r,e){return l$1.standardFunctionAsync(r,e,(function(r,e,u){if(u=se(u),J(u,2,3),null===u[0])return null;if(!(u[0]instanceof c))throw new Error("Illegal Argument");const l=X(u[1]);if(isNaN(l))throw new Error("Illegal Argument");if(l<=0)throw new Error("Illegal Argument");return u[0]instanceof x$1||u[0]instanceof m?P$1(u[0],l,a(O$1(u[2],-1))):u[0]instanceof M?P$1(tn(u[0]),l,a(O$1(u[2],-1))):u[0]}))},l$1.functions.densifygeodetic=function(r,e){return l$1.standardFunctionAsync(r,e,(function(r,e,u){if(u=se(u),J(u,2,3),null===u[0])return null;if(!(u[0]instanceof c))throw new Error("Illegal Argument");const l=X(u[1]);if(isNaN(l))throw new Error("Illegal Argument");if(l<=0)throw new Error("Illegal Argument");return u[0]instanceof x$1||u[0]instanceof m?U(u[0],l,a(O$1(u[2],-1))):u[0]instanceof M?U(tn(u[0]),l,a(O$1(u[2],-1))):u[0]}))},l$1.functions.generalize=function(r,t){return l$1.standardFunctionAsync(r,t,(function(r,t,e){if(e=se(e),J(e,2,4),null===e[0])return null;if(!(e[0]instanceof c))throw new Error("Illegal Argument");const o=X(e[1]);if(isNaN(o))throw new Error("Illegal Argument");return G(e[0],o,ee(O$1(e[2],!0)),a(O$1(e[3],-1)))}))},l$1.functions.buffer=function(r,t){return l$1.standardFunctionAsync(r,t,(function(r,t,e){if(e=se(e),J(e,2,3),null===e[0])return null;if(!(e[0]instanceof c))throw new Error("Illegal Argument");const o=X(e[1]);if(isNaN(o))throw new Error("Illegal Argument");return 0===o?c$1(e[0]):V(e[0],o,a(O$1(e[2],-1)))}))},l$1.functions.buffergeodetic=function(r,t){return l$1.standardFunctionAsync(r,t,(function(r,t,e){if(e=se(e),J(e,2,3),null===e[0])return null;if(!(e[0]instanceof c))throw new Error("Illegal Argument");const o=X(e[1]);if(isNaN(o))throw new Error("Illegal Argument");return 0===o?c$1(e[0]):b(e[0],o,a(O$1(e[2],-1)))}))},l$1.functions.offset=function(n,r){return l$1.standardFunctionAsync(n,r,(function(n,r,t){if(t=se(t),J(t,2,6),null===t[0])return null;if(!(t[0]instanceof x$1||t[0]instanceof m))throw new Error("Illegal Argument");const e=X(t[1]);if(isNaN(e))throw new Error("Illegal Argument");const u=X(O$1(t[4],10));if(isNaN(u))throw new Error("Illegal Argument");const l=X(O$1(t[5],0));if(isNaN(l))throw new Error("Illegal Argument");return I(t[0],e,a(O$1(t[2],-1)),K(O$1(t[3],"round")).toLowerCase(),u,l)}))},l$1.functions.rotate=function(e,i){return l$1.standardFunctionAsync(e,i,(function(e,i,u){u=se(u),J(u,2,3);let l=u[0];if(null===l)return null;if(!(l instanceof c))throw new Error("Illegal Argument");l instanceof M&&(l=x$1.fromExtent(l));const a=X(u[1]);if(isNaN(a))throw new Error("Illegal Argument");const c$1=O$1(u[2],null);if(null===c$1)return q(l,a);if(c$1 instanceof j$1)return q(l,a,c$1);throw new Error("Illegal Argument")}))},l$1.functions.centroid=function(u,a){return l$1.standardFunctionAsync(u,a,(function(l,a,c$2){if(c$2=se(c$2),J(c$2,1,1),null===c$2[0])return null;let d=c$2[0];if((Z(c$2[0])||E(c$2[0]))&&(d=me(c$2[0],u.spatialReference)),null===d)return null;if(!(d instanceof c))throw new Error("Illegal Argument");return d instanceof j$1?te(c$1(c$2[0]),u.spatialReference):d instanceof x$1?d.centroid:d instanceof m?a$1(d):d instanceof m$2?f(d):d instanceof M?d.center:null}))},l$1.functions.multiparttosinglepart=function(a,c$2){return l$1.standardFunctionAsync(a,c$2,(function(l,c$2,g){g=se(g),J(g,1,1);const m$1=[];if(null===g[0])return null;if(!(g[0]instanceof c))throw new Error("Illegal Argument");if(g[0]instanceof j$1)return [te(c$1(g[0]),a.spatialReference)];if(g[0]instanceof M)return [te(c$1(g[0]),a.spatialReference)];return J$1(g[0]).then((n=>{if(n instanceof x$1){const r=[],t=[];for(let e=0;e<n.rings.length;e++)if(n.isClockwise(n.rings[e])){const t=p$1({rings:[n.rings[e]],hasZ:!0===n.hasZ,hazM:!0===n.hasM,spatialReference:n.spatialReference.toJSON()});r.push(t);}else t.push({ring:n.rings[e],pt:n.getPoint(e,0)});for(let n=0;n<t.length;n++)for(let e=0;e<r.length;e++)if(r[e].contains(t[n].pt)){r[e].addRing(t[n].ring);break}return r}if(n instanceof m){const r=[];for(let t=0;t<n.paths.length;t++){const e=p$1({paths:[n.paths[t]],hasZ:!0===n.hasZ,hazM:!0===n.hasM,spatialReference:n.spatialReference.toJSON()});r.push(e);}return r}if(g[0]instanceof m$2){const n=te(c$1(g[0]),a.spatialReference);for(let r=0;r<n.points.length;r++)m$1.push(n.getPoint(r));return m$1}return null}))}))},l$1.functions.issimple=function(r,t){return l$1.standardFunctionAsync(r,t,(function(r,t,e){if(e=se(e),J(e,1,1),null===e[0])return !0;if(!(e[0]instanceof c))throw new Error("Illegal Argument");return v(e[0])}))},l$1.functions.simplify=function(r,t){return l$1.standardFunctionAsync(r,t,(function(r,t,e){if(e=se(e),J(e,1,1),null===e[0])return null;if(!(e[0]instanceof c))throw new Error("Illegal Argument");return J$1(e[0])}))});}

export { on as registerFunctions };