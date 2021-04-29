import { n, s } from './Identifiable-c8406192.js';
import { l, y as y$1, f as f$1, s as s$1 } from './jsonUtils-d762dc00.js';
import { a as t, t as t$1, e } from './OptimizedFeatureSet-d6270f6b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function i(e,t){return e?t?4:3:t?3:2}const f=n.getLogger("esri.tasks.support.optimizedFeatureSet"),h={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0},a=(e,t,n,o,r,s)=>{e[n]=r,e[n+1]=s;},g=(e,t,n,o,r,s)=>{e[n]=r,e[n+1]=s,e[n+2]=t[o+2];},d=(e,t,n,o,r,s)=>{e[n]=r,e[n+1]=s,e[n+2]=t[o+3];},m=(e,t,n,o,r,s)=>{e[n]=r,e[n+1]=s,e[n+2]=t[o+2],e[n+3]=t[o+3];};function y(e,t,n,o){if(e){if(n)return t&&o?m:g;if(t&&o)return d}else if(t&&o)return g;return a}function p({scale:e,translate:t},n){return Math.round((n-t[0])/e[0])}function I({scale:e,translate:t},n){return Math.round((t[1]-n)/e[1])}function b({scale:e,translate:t},n){return n*e[0]+t[0]}function M({scale:e,translate:t},n){return t[1]-n*e[1]}function w(e,t,n){return e?t?n?Z(e):T(e):n?P(e):N(e):null}function N(e){const t=e.coords;return {x:t[0],y:t[1]}}function G(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e}function T(e){const t=e.coords;return {x:t[0],y:t[1],z:t[2]}}function F(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e}function P(e){const t=e.coords;return {x:t[0],y:t[1],m:t[2]}}function x(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.m,e}function Z(e){const t=e.coords;return {x:t[0],y:t[1],z:t[2],m:t[3]}}function k(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e.coords[3]=t.m,e}function j(e,t,n,o){let r=N;n&&o?r=Z:n?r=T:o&&(r=P);for(const s of t){const{geometry:t,attributes:n}=s,o=t?r(t):null;e.push({attributes:n,geometry:o});}return e}function E(e,t){return e&&t?k:e?F:t?x:G}function z(e,t$2,n,o,r){const s=E(n,o);for(const l of t$2){const{geometry:t$2,attributes:n}=l;let o;t$2&&(o=s(new t,t$2)),e.push(new t$1(o,n,null,n[r]));}return e}function v(e,t,n,o){for(const r of t){const{geometry:t,attributes:s}=r;let c;t&&(c=V(t,n,o)),e.push({attributes:s,geometry:c});}return e}function V(e,t,n){if(!e)return null;const o=i(t,n),r=[];for(let s=0;s<e.coords.length;s+=o){const t=[];for(let n=0;n<o;n++)t.push(e.coords[s+n]);r.push(t);}return t?n?{points:r,hasZ:t,hasM:n}:{points:r,hasZ:t}:n?{points:r,hasM:n}:{points:r}}function Y(e,t$2,n,o,r){const s=i(n,o);for(const l of t$2){const t$2=l.geometry,n=l.attributes;let o;t$2&&(o=_(new t,t$2,s)),e.push(new t$1(o,n,null,n[r]));}return e}function _(e,t,n=i(t.hasZ,t.hasM)){e.lengths[0]=t.points.length;const o=e.coords;let r=0;for(const s of t.points)for(let e=0;e<n;e++)o[r++]=s[e];return e}function O(e,t,n,o){for(const r of t){const{geometry:t,attributes:s}=r;let c;t&&(c=A(t,n,o)),e.push({attributes:s,geometry:c});}return e}function A(e,t,n){if(!e)return null;const o=i(t,n),{coords:r,lengths:s}=e,c=[];let l=0;for(const u of s){const e=[];for(let t=0;t<u;t++){const t=[];for(let e=0;e<o;e++)t.push(r[l++]);e.push(t);}c.push(e);}return t?n?{paths:c,hasZ:t,hasM:n}:{paths:c,hasZ:t}:n?{paths:c,hasM:n}:{paths:c}}function L(e,t$2,n,o,r){const s=i(n,o);for(const l of t$2){const t$2=l.geometry,n=l.attributes;let o;t$2&&(o=U(new t,t$2,s)),e.push(new t$1(o,n,null,n[r]));}return e}function U(e,t,n=i(t.hasZ,t.hasM)){const{lengths:o,coords:r}=e;let s=0;for(const c of t.paths){for(const e of c)for(let t=0;t<n;t++)r[s++]=e[t];o.push(c.length);}return e}function q(e,t,n,o){for(const r of t){const{geometry:t,attributes:s,centroid:c}=r;let l;if(t&&(l=$(t,n,o)),c){const t=N(c);e.push({attributes:s,centroid:t,geometry:l});}else e.push({attributes:s,geometry:l});}return e}function $(e,t,n){if(!e)return null;const o=i(t,n),{coords:r,lengths:s}=e,c=[];let l=0;for(const u of s){const e=[];for(let t=0;t<u;t++){const t=[];for(let e=0;e<o;e++)t.push(r[l++]);e.push(t);}c.push(e);}return t?n?{rings:c,hasZ:t,hasM:n}:{rings:c,hasZ:t}:n?{rings:c,hasM:n}:{rings:c}}function R(e,t$2,n,o,r){for(const s of t$2){const t$2=s.geometry,l=s.centroid,i=s.attributes;let f;t$2&&(f=C(new t,t$2,n,o)),l?e.push(new t$1(f,i,G(new t,l),i[r])):e.push(new t$1(f,i,null,i[r]));}return e}function C(e,t,n=t.hasZ,o=t.hasM){return B(e,t.rings,n,o),e}function B(e,t,n,o){const r=i(n,o),{lengths:s,coords:c}=e;let l=0;s.length=c.length=0;for(const u of t){for(const e of u)for(let t=0;t<r;t++)c[l++]=e[t];s.push(u.length);}return e}const D=[],H=[];function J(e,t,n,o,r){D[0]=e;const[s]=K(H,D,t,n,o,r);return D.length=H.length=0,s}function K(e,n,o,r,s$1,l){if(e.length=0,!o){for(const t of n){const n=t.attributes[l];e.push(new t$1(null,t.attributes,null,n));}return e}switch(o){case"esriGeometryPoint":return z(e,n,r,s$1,l);case"esriGeometryMultipoint":return Y(e,n,r,s$1,l);case"esriGeometryPolyline":return L(e,n,r,s$1,l);case"esriGeometryPolygon":return R(e,n,r,s$1,l);default:f.error("convertToFeatureSet:unknown-geometry",new s(`Unable to parse unknown geometry type '${o}'`)),e.length=0;}return e}function Q(e,n,o,r,s$1,c){const l=e.length;switch(o){case"esriGeometryPoint":z(e,n,r,s$1,c);break;case"esriGeometryMultipoint":Y(e,n,r,s$1,c);break;case"esriGeometryPolyline":L(e,n,r,s$1,c);break;case"esriGeometryPolygon":R(e,n,r,s$1,c);break;default:f.error("convertToFeatureSet:unknown-geometry",new s(`Unable to parse unknown geometry type '${o}'`));}for(let t=0;t<n.length;t++)e[t+l].geometryType=o,e[t+l].insertAfter=n[t].insertAfter,e[t+l].groupId=n[t].groupId;return e}function W(e,t,n,o){H[0]=e,te(D,H,t,n,o);const r=D[0];return D.length=H.length=0,r}function X(e,c,l$1){if(!e)return null;const h=new t;if("hasZ"in e&&null==c&&(c=e.hasZ),"hasM"in e&&null==l$1&&(l$1=e.hasM),l(e)){return E(null!=c?c:null!=e.z,null!=l$1?l$1:null!=e.m)(h,e)}return y$1(e)?C(h,e,c,l$1):f$1(e)?U(h,e,i(c,l$1)):s$1(e)?_(h,e,i(c,l$1)):void f.error("convertFromGeometry:unknown-geometry",new s(`Unable to parse unknown geometry type '${e}'`))}function ee(e,n,o,r){const s$1=e&&("coords"in e?e:e.geometry);if(!s$1)return null;switch(n){case"esriGeometryPoint":{let e=N;return o&&r?e=Z:o?e=T:r&&(e=P),e(s$1)}case"esriGeometryMultipoint":return V(s$1,o,r);case"esriGeometryPolyline":return A(s$1,o,r);case"esriGeometryPolygon":return $(s$1,o,r);default:return void f.error("convertToGeometry:unknown-geometry",new s(`Unable to parse unknown geometry type '${n}'`))}}function te(e,n,o,r,s$1){switch(e.length=0,o){case"esriGeometryPoint":return j(e,n,r,s$1);case"esriGeometryMultipoint":return v(e,n,r,s$1);case"esriGeometryPolyline":return O(e,n,r,s$1);case"esriGeometryPolygon":return q(e,n,r,s$1);default:f.error("convertToFeatureSet:unknown-geometry",new s(`Unable to parse unknown geometry type '${o}'`));}return e}function ne(e){const{objectIdFieldName:t,spatialReference:n,transform:o,fields:r,hasM:s,hasZ:c,features:l,geometryType:u,exceededTransferLimit:i,uniqueIdField:f,queryGeometry:h,queryGeometryType:a}=e,g={features:te([],l,u,c,s),fields:r,geometryType:u,objectIdFieldName:t,spatialReference:n,uniqueIdField:f,queryGeometry:ee(h,a,!1,!1)};return o&&(g.transform=o),i&&(g.exceededTransferLimit=i),s&&(g.hasM=s),c&&(g.hasZ=c),g}function oe(e$1,n){const o=new e,{hasM:r,hasZ:s$1,features:c,objectIdFieldName:u,spatialReference:i,geometryType:h,exceededTransferLimit:a,transform:g,fields:d}=e$1;return d&&(o.fields=d),o.geometryType=h,o.objectIdFieldName=u||n,o.spatialReference=i,o.objectIdFieldName?(c&&K(o.features,c,h,s$1,r,o.objectIdFieldName),a&&(o.exceededTransferLimit=a),r&&(o.hasM=r),s$1&&(o.hasZ=s$1),g&&(o.transform=g),o):(f.error(new s("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),o)}function re(e){const{transform:t,features:n,hasM:o,hasZ:r}=e;if(!t)return e;for(const s of n)s.geometry&&ae(s.geometry,s.geometry,o,r,t),s.centroid&&ae(s.centroid,s.centroid,o,r,t);return e.transform=null,e}function se(e,t$1){const{geometryType:n,features:o,hasM:r,hasZ:s}=t$1;if(!e)return t$1;for(let c=0;c<o.length;c++){const t$1=o[c],l=t$1.weakClone();l.geometry=new t,ce(l.geometry,t$1.geometry,r,s,n,e),t$1.centroid&&(l.centroid=new t,ce(l.centroid,t$1.centroid,r,s,"esriGeometryPoint",e)),o[c]=l;}return t$1.transform=e,t$1}function ce(e,t,n,o,r,s,c=n,l=o){if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),!t||!t.coords.length)return null;const u=h[r],{coords:f,lengths:a}=t,g=i(n,o),d=i(n&&c,o&&l),m=y(n,o,c,l);if(!a.length)return m(e.coords,f,0,0,p(s,f[0]),I(s,f[1])),e.lengths.length&&(e.lengths.length=0),e.coords.length=g,e;let b,M,w,N,G=0,T=0,F=T;for(const i of a){if(i<u)continue;let t=0;T=F,w=b=p(s,f[G]),N=M=I(s,f[G+1]),m(e.coords,f,T,G,w,N),t++,G+=g,T+=d;for(let n=1;n<i;n++,G+=g)w=p(s,f[G]),N=I(s,f[G+1]),w===b&&N===M||(m(e.coords,f,T,G,w-b,N-M),T+=d,t++,b=w,M=N);t>=u&&(e.lengths.push(t),F=T);}return e.coords.length=F,e.coords.length?e:null}function le(e,t,n,o,r,s,c=n,l=o){if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),!t||!t.coords.length)return null;const u=h[r],{coords:f,lengths:a}=t,g=i(n,o),d=i(n&&c,o&&l),m=y(n,o,c,l);if(!a.length)return m(e.coords,f,0,0,f[0],f[1]),e.lengths.length&&(e.lengths.length=0),e.coords.length=g,e;let p=0;const I=s*s;for(const i of a){if(i<u){p+=i*g;continue}const t=e.coords.length/d,n=p,o=p+(i-1)*g;m(e.coords,f,e.coords.length,n,f[n],f[n+1]),ie(e.coords,f,g,I,m,n,o),m(e.coords,f,e.coords.length,o,f[o],f[o+1]);const r=e.coords.length/d-t;r>=u?e.lengths.push(r):e.coords.length=t*d,p+=i*g;}return e.coords.length?e:null}function ue(e,t,n,o){const r=e[t],s=e[t+1],c=e[n],l=e[n+1],u=e[o],i=e[o+1];let f=c,h=l,a=u-f,g=i-h;if(0!==a||0!==g){const e=((r-f)*a+(s-h)*g)/(a*a+g*g);e>1?(f=u,h=i):e>0&&(f+=a*e,h+=g*e);}return a=r-f,g=s-h,a*a+g*g}function ie(e,t,n,o,r,s,c){let l,u=o,i=0;for(let f=s+n;f<c;f+=n)l=ue(t,f,s,c),l>u&&(i=f,u=l);u>o&&(i-s>n&&ie(e,t,n,o,r,s,i),r(e,t,e.length,i,t[i],t[i+1]),c-i>n&&ie(e,t,n,o,r,i,c));}function fe(e,t,n,o){if(!t||!t.coords||!t.coords.length)return null;const r=i(n,o);let s=Number.POSITIVE_INFINITY,c=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY,u=Number.NEGATIVE_INFINITY;if(t&&t.coords){const e=t.coords;for(let t=0;t<e.length;t+=r){const n=e[t],o=e[t+1];s=Math.min(s,n),l=Math.max(l,n),c=Math.min(c,o),u=Math.max(u,o);}}return e[0]=s,e[1]=c,e[2]=l,e[3]=u,e}function ae(e,t,n,o,r){const{coords:s,lengths:c}=t,l=n?o?m:g:o?g:a,u=i(n,o);if(!s.length)return e!==t&&(e.lengths.length=0,e.coords.length=0),e;if(!c.length)return l(e.coords,s,0,0,b(r,s[0]),M(r,s[1])),e!==t&&(e.lengths.length=0,e.coords.length=u),e;const[f,h]=r.scale;let d=0;for(let i=0;i<c.length;i++){const t=c[i];e.lengths[i]=t;let n=b(r,s[d]),o=M(r,s[d+1]);l(e.coords,s,d,d,n,o),d+=u;for(let r=1;r<t;r++,d+=u)n+=s[d]*f,o-=s[d+1]*h,l(e.coords,s,d,d,n,o);}return e!==t&&(e.lengths.length=c.length,e.coords.length=s.length),e}function ge(e,t,n,o,r,s){const c=i(n,o),l=y(n,o,r,s),u=t.coords;e.coords.length=0,e.lengths.length=0,e.lengths.push(...t.lengths);for(let i=0;i<u.length;i+=c)l(e.coords,u,e.coords.length,i,u[i],u[i+1]);return e}function me(e,t,n,o){let r=0,s=e[o*t],c=e[o*(t+1)];for(let l=1;l<n;l++){const n=s+e[o*(t+l)],u=c+e[o*(t+l)+1],i=(n-s)*(u+c);s=n,c=u,r+=i;}return .5*r}function ye(e,t){const{coords:n,lengths:o}=e;let r=0,s=0;for(let c=0;c<o.length;c++){s+=me(n,r,o[c],t),r+=c;}return Math.abs(s)}function Ie(e,t){const n=e.clone(),o=e.coords,r=e.lengths;let s=0;for(let c=0;c<r.length;c++){const e=r[c];let l=o[t*s],u=o[t*s+1];for(let r=1;r<e;r++){const e=l+o[t*(s+r)],c=u+o[t*(s+r)+1];n.coords[t*(s+r)]=e,n.coords[t*(s+r)+1]=c,l=e,u=c;}s+=e;}return n}

export { $, A, B, C, Ie as I, J, K, Q, U, V, W, X, ae as a, I as b, ce as c, ee as e, fe as f, ge as g, le as l, ne as n, oe as o, p, re as r, se as s, w, ye as y };