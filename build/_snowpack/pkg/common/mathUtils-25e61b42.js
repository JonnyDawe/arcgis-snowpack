import { D as e, bn as g } from './Identifiable-c8406192.js';
import './vec3f64-a6795633.js';
import { o, b as s } from './vec3-ae5ae182.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function q(n,i){const o$1=s(n),r=g(n[2]/o$1),a=Math.atan2(n[1]/o$1,n[0]/o$1);return o(i,o$1,r,a),i}function w(t,n,i){const o=i[0]-n[0],s=i[1]-n[1],r=i[2]-n[2];let a=o*o+s*s+r*r;return a?(a=1/Math.sqrt(a),t[0]=o*a,t[1]=s*a,t[2]=r*a,t):(t[0]=0,t[1]=0,t[2]=0,t)}class D{constructor(t,n){this.min=t,this.max=n,this.range=n-t;}ndiff(t,n=0){return Math.ceil((t-n)/this.range)*this.range+n}_normalize(t,n,i,o=0,s=!1){return (i-=o)<t?i+=this.ndiff(t-i):i>n&&(i-=this.ndiff(i-n)),s&&i===n&&(i=t),i+o}normalize(t,n=0,i=!1){return this._normalize(this.min,this.max,t,n,i)}clamp(t,n=0){return e(t-n,this.min,this.max)+n}monotonic(t,n,i){return t<n?n:n+this.ndiff(t-n,i)}minimalMonotonic(t,n,i){return this._normalize(t,t+this.range,n,i)}center(t,n,i){return n=this.monotonic(t,n,i),this.normalize((t+n)/2,i)}diff(t,n,i){return this.monotonic(t,n,i)-t}shortestSignedDiff(t,n){t=this.normalize(t);const i=(n=this.normalize(n))-t,o=n<t?this.minimalMonotonic(t,n)-t:n-this.minimalMonotonic(n,t);return Math.abs(i)<Math.abs(o)?i:o}contains(t,n,i){return n=this.minimalMonotonic(t,n),(i=this.minimalMonotonic(t,i))>t&&i<n}}function y(t){for(const n in t){const i=t[n];i instanceof Function&&(t[n]=i.bind(t));}return t}y(new D(0,2*Math.PI));y(new D(-Math.PI,Math.PI));const C=y(new D(0,360));

export { C, q, w };
