import { cI as x, ao as c, af as L } from './Identifiable-c8406192.js';
import { G as se, l as k, ak as s, J, K } from './arcadeUtils-0513dddf.js';
import { w, A, x as x$1, O, p, g as g$2, h as h$1 } from './geometryEngineAsync-8049b291.js';
import { g as g$1, c as n } from './SpatialFilter-a5889b03.js';
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
import './workers-31c2755c.js';
import './watchUtils-880dbce7.js';
import './WhereClause-c9442cc5.js';
import './_commonjsHelpers-268aa74f.js';
import './FieldsIndex-d0d5f38b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function S(e){return e instanceof c}function h(i,s$1,d,h,g){return g(i,s$1,(function(i,s$1,g){if(g.length<2)return h(new Error("Missing Parameters"));if(null===(g=se(g))[0]&&null===g[1])return x(!1);if(k(g[0]))return g[1]instanceof c?x(new g$1({parentfeatureset:g[0],relation:d,relationGeom:g[1]})):null===g[1]?x(new n({parentfeatureset:g[0]})):h("Spatial Relation cannot accept this parameter type");if(S(g[0])){if(S(g[1])){let e=null;switch(d){case"esriSpatialRelEnvelopeIntersects":e=g$2(s(g[0]),s(g[1]));break;case"esriSpatialRelIntersects":e=g$2(g[0],g[1]);break;case"esriSpatialRelContains":e=p(g[0],g[1]);break;case"esriSpatialRelOverlaps":e=O(g[0],g[1]);break;case"esriSpatialRelWithin":e=x$1(g[0],g[1]);break;case"esriSpatialRelTouches":e=A(g[0],g[1]);break;case"esriSpatialRelCrosses":e=w(g[0],g[1]);}return null!==e?e:L(new Error("Unrecognised Relationship"))}return k(g[1])?x(new g$1({parentfeatureset:g[1],relation:d,relationGeom:g[0]})):null===g[1]?x(!1):h("Spatial Relation cannot accept this parameter type")}return null!==g[0]?h("Spatial Relation cannot accept this parameter type"):k(g[1])?x(new n({parentfeatureset:g[1]})):g[1]instanceof c||null===g[1]?x(!1):void 0}))}function g(e){"async"===e.mode&&(e.functions.intersects=function(n,t){return h(n,t,"esriSpatialRelIntersects",e.failDefferred,e.standardFunctionAsync)},e.functions.envelopeintersects=function(n,t){return h(n,t,"esriSpatialRelEnvelopeIntersects",e.failDefferred,e.standardFunctionAsync)},e.signatures.push({name:"envelopeintersects",min:"2",max:"2"}),e.functions.contains=function(n,t){return h(n,t,"esriSpatialRelContains",e.failDefferred,e.standardFunctionAsync)},e.functions.overlaps=function(n,t){return h(n,t,"esriSpatialRelOverlaps",e.failDefferred,e.standardFunctionAsync)},e.functions.within=function(n,t){return h(n,t,"esriSpatialRelWithin",e.failDefferred,e.standardFunctionAsync)},e.functions.touches=function(n,t){return h(n,t,"esriSpatialRelTouches",e.failDefferred,e.standardFunctionAsync)},e.functions.crosses=function(n,t){return h(n,t,"esriSpatialRelCrosses",e.failDefferred,e.standardFunctionAsync)},e.functions.relate=function(n$1,l){return e.standardFunctionAsync(n$1,l,(function(e,n$1,l){if(l=se(l),J(l,3,3),S(l[0])&&S(l[1]))return h$1(l[0],l[1],K(l[2]));if(l[0]instanceof c&&null===l[1])return !1;if(l[1]instanceof c&&null===l[0])return !1;if(k(l[0])&&null===l[1])return new n({parentfeatureset:l[0]});if(k(l[1])&&null===l[0])return new n({parentfeatureset:l[1]});if(k(l[0])&&l[1]instanceof c)return l[0].relate(l[1],K(l[2]));if(k(l[1])&&l[0]instanceof c)return l[1].relate(l[0],K(l[2]));if(null===l[0]&&null===l[1])return !1;throw new Error("Illegal Argument")}))});}

export { g as registerFunctions };
