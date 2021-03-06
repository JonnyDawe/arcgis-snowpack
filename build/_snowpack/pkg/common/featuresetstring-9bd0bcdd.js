import { J, k as g, K, X, i as h, al as D, l as k, am as oe, an as re, ao as ie, ap as H, M as O } from './arcadeUtils-0513dddf.js';
import './config-b3bf08ce.js';
import './sizeVariableUtils-33233df0.js';
import './Identifiable-c8406192.js';
import './number-cadfd251.js';
import './jsonUtils-d762dc00.js';
import './Field-e6fe6b12.js';
import './fieldUtils-a9f71c96.js';
import './fieldType-769fe7ff.js';
import './featureConversionUtils-6830a580.js';
import './OptimizedFeatureSet-d6270f6b.js';
import './FeatureSetReader-a4e80fde.js';
import './centroid-a0ceb19b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function f(n){return n&&n.domain?"coded-value"===n.domain.type||"codedValue"===n.domain.type?h.convertObjectToArcadeDictionary({type:"codedValue",name:n.domain.name,dataType:D[n.field.type],codedValues:n.domain.codedValues.map((n=>({name:n.name,code:n.code})))}):h.convertObjectToArcadeDictionary({type:"range",name:n.domain.name,dataType:D[n.field.type],min:n.domain.min,max:n.domain.max}):null}function l(s){"async"===s.mode&&(s.functions.domain=function(a,i){return s.standardFunctionAsync(a,i,(function(a,i,c){if(J(c,2,3),c[0]instanceof g){return f(c[0].fullDomain(K(c[1]),void 0===c[2]?void 0:X(c[2])))}if(k(c[0]))return c[0]._ensureLoaded().then((()=>f(oe(K(c[1]),c[0],null,void 0===c[2]?void 0:X(c[2])))));throw new Error("Invalid Parameter")}))},s.functions.subtypes=function(e,t){return s.standardFunctionAsync(e,t,(function(e,t,o){if(J(o,1,1),o[0]instanceof g){const n=o[0].subtypes();return n?h.convertObjectToArcadeDictionary(n):null}if(k(o[0]))return o[0]._ensureLoaded().then((()=>{const n=o[0].subtypes();return n?h.convertObjectToArcadeDictionary(n):null}));throw new Error("Invalid Parameter")}))},s.functions.domainname=function(i,c){return s.standardFunctionAsync(i,c,(function(i,c,u){if(J(u,2,4),u[0]instanceof g)return u[0].domainValueLookup(K(u[1]),u[2],void 0===u[3]?void 0:X(u[3]));if(k(u[0]))return u[0]._ensureLoaded().then((()=>{const n=oe(K(u[1]),u[0],null,void 0===u[3]?void 0:X(u[3]));return re(n,u[2])}));throw new Error("Invalid Parameter")}))},s.signatures.push({name:"domainname",min:"2",max:"4"}),s.functions.domaincode=function(a,c){return s.standardFunctionAsync(a,c,(function(a,c,u){if(J(u,2,4),u[0]instanceof g)return u[0].domainCodeLookup(K(u[1]),u[2],void 0===u[3]?void 0:X(u[3]));if(k(u[0]))return u[0]._ensureLoaded().then((()=>{const n=oe(K(u[1]),u[0],null,void 0===u[3]?void 0:X(u[3]));return ie(n,u[2])}));throw new Error("Invalid Parameter")}))},s.signatures.push({name:"domaincode",min:"2",max:"4"})),s.functions.text=function(e,t){return s.standardFunctionAsync(e,t,(function(e,t,o){if(J(o,1,2),!k(o[0]))return H(o[0],o[1]);{const n=O(o[1],"");if(""===n)return o[0].castToText();if("schema"===n.toLowerCase())return o[0].convertToText("schema",e.abortSignal);if("featureset"===n.toLowerCase())return o[0].convertToText("featureset",e.abortSignal)}}))},s.functions.gdbversion=function(e,t){return s.standardFunctionAsync(e,t,(function(e,t,o){if(J(o,1,1),o[0]instanceof g)return o[0].gdbVersion();if(k(o[0]))return o[0].load().then((n=>n.gdbVersion));throw new Error("Invalid Parameter")}))},s.functions.schema=function(e,t){return s.standardFunctionAsync(e,t,(function(e,t,o){if(J(o,1,1),k(o[0]))return o[0].load().then((()=>h.convertObjectToArcadeDictionary(o[0].schema())));if(o[0]instanceof g){const n=o[0].schema();return n?h.convertObjectToArcadeDictionary(n):null}throw new Error("Invalid Parameter")}))};}

export { l as registerFunctions };
