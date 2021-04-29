import { l, G } from './unitUtils-1b0a3531.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const e=96;function r(r,i){const o=i||r.extent,c=r.width,u=G(o&&o.spatialReference);return o&&c?o.width/c*u*l*e:0}function i(r,i){return r/(G(i)*l*e)}function c(t,n){const e=t.extent,r=t.width,o=i(n,e.spatialReference);return e.clone().expand(o*r/e.width)}

export { c, r };
