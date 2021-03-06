import { cI as x, cD as s, af as L } from './Identifiable-c8406192.js';
import { J, l as k, Z, F, E, aj as l$1, M as O } from './arcadeUtils-0513dddf.js';
import { WhereClause as f } from './WhereClause-c9442cc5.js';
import './config-b3bf08ce.js';
import './sizeVariableUtils-33233df0.js';
import './number-cadfd251.js';
import './jsonUtils-d762dc00.js';
import './Field-e6fe6b12.js';
import './fieldUtils-a9f71c96.js';
import './fieldType-769fe7ff.js';
import './featureConversionUtils-6830a580.js';
import './OptimizedFeatureSet-d6270f6b.js';
import './FeatureSetReader-a4e80fde.js';
import './centroid-a0ceb19b.js';
import './_commonjsHelpers-268aa74f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function l(t,r,e,o,l,m){if(1===o.length){if(Z(o[0]))return x(l$1(t,o[0],O(o[1],-1)));if(E(o[0]))return x(l$1(t,o[0].toArray(),O(o[1],-1)))}else if(2===o.length){if(Z(o[0]))return x(l$1(t,o[0],O(o[1],-1)));if(E(o[0]))return x(l$1(t,o[0].toArray(),O(o[1],-1)));if(k(o[0]))return o[0].load().then((n=>d(f.create(o[1],n.getFieldsIndex()),m,l).then((n=>o[0].calculateStatistic(t,n,O(o[2],1e3),r.abortSignal)))))}else if(3===o.length&&k(o[0]))return o[0].load().then((n=>d(f.create(o[1],n.getFieldsIndex()),m,l).then((n=>o[0].calculateStatistic(t,n,O(o[2],1e3),r.abortSignal)))));return x(l$1(t,o,-1))}function d(e,u,i){try{const r=e.getVariables();if(r.length>0){const n=[];for(let t=0;t<r.length;t++){const e={name:r[t]};n.push(u.evaluateIdentifier(i,e));}return s(n).then((n=>{const t={};for(let e=0;e<r.length;e++)t[r[e]]=n[e];return e.parameters=t,e}))}return x(e)}catch(o){return L(o)}}function m(n){"async"===n.mode&&(n.functions.stdev=function(t,r){return n.standardFunctionAsync(t,r,(function(r,e,u){return l("stdev",r,e,u,t,n)}))},n.functions.variance=function(t,r){return n.standardFunctionAsync(t,r,(function(r,e,u){return l("variance",r,e,u,t,n)}))},n.functions.average=function(t,r){return n.standardFunctionAsync(t,r,(function(r,e,u){return l("mean",r,e,u,t,n)}))},n.functions.mean=function(t,r){return n.standardFunctionAsync(t,r,(function(r,e,u){return l("mean",r,e,u,t,n)}))},n.functions.sum=function(t,r){return n.standardFunctionAsync(t,r,(function(r,e,u){return l("sum",r,e,u,t,n)}))},n.functions.min=function(t,r){return n.standardFunctionAsync(t,r,(function(r,e,u){return l("min",r,e,u,t,n)}))},n.functions.max=function(t,r){return n.standardFunctionAsync(t,r,(function(r,e,u){return l("max",r,e,u,t,n)}))},n.functions.count=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(J(r,1,1),k(r[0]))return r[0].count(n.abortSignal);if(Z(r[0])||F(r[0]))return r[0].length;if(E(r[0]))return r[0].length();throw new Error("Invalid Parameters for Count")}))});}

export { m as registerFunctions };
