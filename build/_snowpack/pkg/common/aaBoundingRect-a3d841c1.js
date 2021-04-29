import './config-b3bf08ce.js';
import { M as M$1 } from './Identifiable-c8406192.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function r(n){return n}function i(n=K){return r([n[0],n[1],n[2],n[3]])}function e(n){return r([n[0],n[1],n[2],n[3]])}function u(n,t,r,e,u=i()){return u[0]=n,u[1]=t,u[2]=r,u[3]=e,u}function a(n,t=i()){return t[0]=n.xmin,t[1]=n.ymin,t[2]=n.xmax,t[3]=n.ymax,t}function o(n,r){return new M$1({xmin:n[0],ymin:n[1],xmax:n[2],ymax:n[3],spatialReference:r})}function x(n){return n[0]>=n[2]?0:n[2]-n[0]}function M(n){return n[1]>=n[3]?0:n[3]-n[1]}function l(n){return x(n)*M(n)}function F(n,t){return Math.max(t[0],n[0])<=Math.min(t[2],n[2])&&Math.max(t[1],n[1])<=Math.min(t[3],n[3])}function q(n,t){return t[0]>=n[0]&&t[2]<=n[2]&&t[1]>=n[1]&&t[3]<=n[3]}const J=r([1/0,1/0,-1/0,-1/0]),K=r([0,0,0,0]);

export { F, J, M, a, e, i, l, o, q, u, x };
