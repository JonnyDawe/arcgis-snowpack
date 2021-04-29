/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function n(){return [0,0,0]}function r(n){return [n[0],n[1],n[2]]}function t(n,r,t){return [n,r,t]}function e(r){const t=n(),e=Math.min(3,r.length);for(let n=0;n<e;++n)t[n]=r[n];return t}function u(n,r){return new Float64Array(n,r,3)}function a(){return n()}function o(){return t(1,1,1)}function s(){return t(1,0,0)}function c(){return t(0,1,0)}function i(){return t(0,0,1)}const f=a(),l=o(),_=s(),N=c(),O=i();Object.freeze({__proto__:null,create:n,clone:r,fromValues:t,fromArray:e,createView:u,zeros:a,ones:o,unitX:s,unitY:c,unitZ:i,ZEROS:f,ONES:l,UNIT_X:_,UNIT_Y:N,UNIT_Z:O});

export { e, f, l, n, r, t, u };
