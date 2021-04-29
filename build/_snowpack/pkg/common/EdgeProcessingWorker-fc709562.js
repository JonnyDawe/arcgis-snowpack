import { cl as u$3, cq as t$2, bq as m$2, cB as m$3, cC as N } from './Identifiable-c8406192.js';
import { A as A$1, f as f$2, u as u$5, a as a$3, p as p$2, c as c$2, o as o$2, i as i$1, m as m$1, T, d as d$3, b, l as l$3, h as h$2, e as A$2, O as O$1, x, g as g$2, w as w$2, E, L, F as F$1, I as I$1, U, j as j$1, V as V$1, M, S, k, q, v as v$2, z as z$1, B, C, D, G, H as H$1 } from './InterleavedLayout-0990cfee.js';
import { n as n$2 } from './vec3f64-a6795633.js';
import { u as u$4, j, o as o$3, c as r$2, z as z$2, _, e as c$3, q as q$1 } from './vec3-ae5ae182.js';
import { b as n$3 } from './config-b3bf08ce.js';
import { w as w$3 } from './mathUtils-25e61b42.js';
import './vec2-f6c2e17c.js';
import './vec4-a10a8ae1.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function n$1(n,f,i){var u;const c=n.byteLength/(4*f),s=new Uint32Array(n,0,c*f);let a=new Uint32Array(c);const h=null!=(u=null==i?void 0:i.minReduction)?u:0,d=(null==i?void 0:i.originalIndices)||null,g=d?d.length:0,y=(null==i?void 0:i.componentOffsets)||null;let U=0;if(y)for(let t=0;t<y.length-1;t++){const n=y[t+1]-y[t];n>U&&(U=n);}else U=c;const w=Math.floor(1.1*U)+1;(null==o$1||o$1.length<2*w)&&(o$1=new Uint32Array(u$3(2*w)));for(let t=0;t<2*w;t++)o$1[t]=0;let A=0;const m=!!y&&!!d,b=m?g:c,p=m?new Uint32Array(g):null,v=1.96;let M=0!==h?Math.ceil(4*v*v/(h*h)*h*(1-h)):b,q=1,x=y?y[1]:b;for(let t=0;t<b;t++){if(t===M){const n=1-A/t;if(n+v*Math.sqrt(n*(1-n)/t)<h)return null;M*=2;}if(t===x){for(let t=0;t<2*w;t++)o$1[t]=0;if(d)for(let t=y[q-1];t<y[q];t++)p[t]=a[d[t]];x=y[++q];}const n=m?d[t]:t,l=n*f,i=r$1(s,l,f);let u=i%w,c=A;for(;0!==o$1[2*u+1];){if(o$1[2*u]===i){const t=o$1[2*u+1]-1;if(e$2(s,l,t*f,f)){c=a[t];break}}u++,u>=w&&(u-=w);}c===A&&(o$1[2*u]=i,o$1[2*u+1]=n+1,A++),a[n]=c;}if(0!==h&&1-A/c<h)return null;if(m){for(let t=y[q-1];t<p.length;t++)p[t]=a[d[t]];a=p;}const j=new Uint32Array(f*A);A=0;for(let t=0;t<b;t++)if(a[t]===A){l$2(s,(m?d[t]:t)*f,j,A*f,f),A++;}if(d&&!m){const t=new Uint32Array(g);for(let n=0;n<t.length;n++)t[n]=a[d[n]];a=t;}return {buffer:j.buffer,indices:a,uniqueCount:A}}function e$2(t,n,e,l){for(let r=0;r<l;r++)if(t[n+r]!==t[e+r])return !1;return !0}function l$2(t,n,e,l,r){for(let o=0;o<r;o++)e[l+o]=t[n+o];}function r$1(t,n,e){let l=0;for(let r=0;r<e;r++)l=t[n+r]+l|0,l=l+(l<<11)+(l>>>2)|0;return l>>>0}let o$1=null;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const t$1={divisor:0};function o(o,n={}){n={...t$1,...n};const r=o.stride;return o.fieldNames.filter((t=>{const e=o.fields.get(t).optional;return !(e&&e.glPadding)})).map((t=>{const i=o.fields.get(t),s=i.constructor.ElementCount,u=e$1(i.constructor.ElementType),f=i.offset,c=!(!i.optional||!i.optional.glNormalized);return {name:t,stride:r,count:s,type:u,offset:f,normalized:c,divisor:n.divisor}}))}function e$1(t){const o=n[t];if(o)return o;throw new Error("BufferType not supported in WebGL")}const n={u8:5121,u16:5123,u32:5125,i8:5120,i16:5122,i32:5124,f32:5126};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const e=A$1().vec3f("position").u16("componentIndex").u16("u16padding"),i=A$1().vec2u8("sideness");o(i);const a$2=A$1().vec3f("position0").vec3f("position1").u16("componentIndex").u8("variantOffset",{glNormalized:!0}).u8("variantStroke").u8("variantExtension",{glNormalized:!0}).u8("u8padding",{glPadding:!0}).u16("u16padding",{glPadding:!0}),r=a$2.clone().vec3f("normal"),s=a$2.clone().vec3f("normalA").vec3f("normalB");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class a$1{updateSettings(t){this.settings=t,this.edgeHashFunction=t.reducedPrecision?f$1:p$1;}write(t,o,e){const n=this.edgeHashFunction(e);y$1.seed=n;const i=y$1.getIntRange(0,255),r=y$1.getIntRange(0,this.settings.variants-1),s=.7,a=y$1.getFloat(),c=255*(.5*g$1(-(1-Math.min(a/s,1))+Math.max(0,a-s)/(1-s),1.2)+.5);t.position0.setVec(o,e.position0),t.position1.setVec(o,e.position1),t.componentIndex.set(o,e.componentIndex),t.variantOffset.set(o,i),t.variantStroke.set(o,r),t.variantExtension.set(o,c);}trim(t,o){return t.slice(0,o)}}const c$1=new Float32Array(6),m=new Uint32Array(c$1.buffer),u$2=new Uint32Array(1);function p$1(t){const o=c$1;o[0]=t.position0[0],o[1]=t.position0[1],o[2]=t.position0[2],o[3]=t.position1[0],o[4]=t.position1[1],o[5]=t.position1[2],u$2[0]=5381;for(let e=0;e<m.length;e++)u$2[0]=31*u$2[0]+m[e];return u$2[0]}function f$1(t){const o=c$1;o[0]=h$1(t.position0[0]),o[1]=h$1(t.position0[1]),o[2]=h$1(t.position0[2]),o[3]=h$1(t.position1[0]),o[4]=h$1(t.position1[1]),o[5]=h$1(t.position1[2]),u$2[0]=5381;for(let e=0;e<m.length;e++)u$2[0]=31*u$2[0]+m[e];return u$2[0]}const l$1=1e4;function h$1(t){return Math.round(t*l$1)/l$1}function g$1(t,o){const e=t<0?-1:1;return Math.abs(t)**o*e}class d$2{constructor(){this.commonWriter=new a$1;}updateSettings(t){this.commonWriter.updateSettings(t);}allocate(t){return r.createBuffer(t)}write(t,o,i){this.commonWriter.write(t,o,i),u$4(v$1,i.faceNormal0,i.faceNormal1),j(v$1,v$1),t.normal.setVec(o,v$1);}trim(t,o){return this.commonWriter.trim(t,o)}}d$2.Layout=r,d$2.glLayout=o(r,{divisor:1});class w$1{constructor(){this.commonWriter=new a$1;}updateSettings(t){this.commonWriter.updateSettings(t);}allocate(t){return s.createBuffer(t)}write(t,o,e){this.commonWriter.write(t,o,e),t.normalA.setVec(o,e.faceNormal0),t.normalB.setVec(o,e.faceNormal1);}trim(t,o){return this.commonWriter.trim(t,o)}}w$1.Layout=s,w$1.glLayout=o(s,{divisor:1});const v$1=n$2(),y$1=new t$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function z(e,t){return t.push(e.buffer),{buffer:e.buffer,layout:F(e.layout)}}function F(e){const t=new Array;return e.fields.forEach(((e,r)=>{const n={...e,constructor:J(e.constructor)};t.push([r,n]);})),{stride:e.stride,fields:t,fieldNames:e.fieldNames}}const H=[f$2,u$5,a$3,p$2,c$2,o$2,i$1,m$1,T,d$3,b,l$3,h$2,A$2,O$1,x,g$2,w$2,E,L,F$1,I$1,U,j$1,V$1,M,S,k,q,v$2,z$1,B,C,D,G,H$1];function J(e){return `${e.ElementType}_${e.ElementCount}`}const O=new Map;H.forEach((e=>O.set(J(e),e)));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function t(t,o,n){const r=o/3,c=new Uint32Array(n+1),e=new Uint32Array(n+1),s=(t,o)=>{t<o?c[t+1]++:e[o+1]++;};for(let x=0;x<r;x++){const o=t[3*x],n=t[3*x+1],r=t[3*x+2];s(o,n),s(n,r),s(r,o);}let f=0,l=0;for(let x=0;x<n;x++){const t=c[x+1],o=e[x+1];c[x+1]=f,e[x+1]=l,f+=t,l+=o;}const i=new Uint32Array(6*r),a=c[n],w=(t,o,n)=>{if(t<o){const r=c[t+1]++;i[2*r]=o,i[2*r+1]=n;}else {const r=e[o+1]++;i[2*a+2*r]=t,i[2*a+2*r+1]=n;}};for(let x=0;x<r;x++){const o=t[3*x],n=t[3*x+1],r=t[3*x+2];w(o,n,x),w(n,r,x),w(r,o,x);}const y=(t,o)=>{const n=2*t,r=o-t;for(let c=1;c<r;c++){const t=i[n+2*c],o=i[n+2*c+1];let r=c-1;for(;r>=0&&i[n+2*r]>t;r--)i[n+2*r+2]=i[n+2*r],i[n+2*r+3]=i[n+2*r+1];i[n+2*r+2]=t,i[n+2*r+3]=o;}};for(let x=0;x<n;x++)y(c[x],c[x+1]),y(a+e[x],a+e[x+1]);const A=new Int32Array(3*r),U=(o,n)=>o===t[3*n]?0:o===t[3*n+1]?1:o===t[3*n+2]?2:-1,u=(t,o)=>{const n=U(t,o);A[3*o+n]=-1;},p=(t,o,n,r)=>{const c=U(t,o);A[3*o+c]=r;const e=U(n,r);A[3*r+e]=o;};for(let x=0;x<n;x++){let t=c[x];const o=c[x+1];let n=e[x];const r=e[x+1];for(;t<o&&n<r;){const o=i[2*t],r=i[2*a+2*n];o===r?(p(x,i[2*t+1],r,i[2*a+2*n+1]),t++,n++):o<r?(u(x,i[2*t+1]),t++):(u(r,i[2*a+2*n+1]),n++);}for(;t<o;)u(x,i[2*t+1]),t++;for(;n<r;){u(i[2*a+2*n],i[2*a+2*n+1]),n++;}}return A}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const p=-1;function u$1(n,r,l,g=V){const f=n.vertices.position,m=n.vertices.componentIndex,u=m$2(g.anglePlanar),I=m$2(g.angleSignificantEdge),j=Math.cos(I),N=Math.cos(u),x=y.edge,F=x.position0,U=x.position1,k=x.faceNormal0,E=x.faceNormal1,D=w(n),M=v(n),P=M.length/4,S=r.allocate(P);let b=0;const L=P,q=l.allocate(L);let z=0,B=0,C=0;const G=m$3(0,P),H=new Float32Array(P);n$3(H,((e,t,o)=>{f.getVec(M[4*t+0],F),f.getVec(M[4*t+1],U),o[t]=q$1(F,U);})),G.sort(((e,t)=>H[t]-H[e]));const J=new Array,K=new Array;for(let e=0;e<P;e++){const t=G[e],o=H[t],n=M[4*t+0],s=M[4*t+1],g=M[4*t+2],v=M[4*t+3],w=v===p;if(f.getVec(n,F),f.getVec(s,U),w)o$3(k,D[3*g+0],D[3*g+1],D[3*g+2]),r$2(E,k),x.componentIndex=m.get(n),x.cosAngle=z$2(k,E);else {if(o$3(k,D[3*g+0],D[3*g+1],D[3*g+2]),o$3(E,D[3*v+0],D[3*v+1],D[3*v+2]),x.componentIndex=m.get(n),x.cosAngle=z$2(k,E),d$1(x,N))continue;x.cosAngle<-.9999&&r$2(E,k);}B+=o,C++,w||h(x,j)?(r.write(S,b++,x),J.push(o)):A(x,u)&&(l.write(q,z++,x),K.push(o));}const O=new Float32Array(J.reverse()),Q=new Float32Array(K.reverse());return {regular:{instancesData:r.trim(S,b),lodInfo:{lengths:O}},silhouette:{instancesData:l.trim(q,z),lodInfo:{lengths:Q}},averageEdgeLength:B/C}}function h(e,t){return e.cosAngle<t}function d$1(e,t){return e.cosAngle>t}function A(e,t){const o=N(e.cosAngle),r=y.fwd,s=y.ortho;w$3(r,e.position1,e.position0);return o*(z$2(_(s,e.faceNormal0,e.faceNormal1),r)>0?-1:1)>t}function v(e){const t=e.faces.length/3,o=e.faces,n=e.neighbors;let r=0;for(let a=0;a<t;a++){const e=n[3*a+0],t=n[3*a+1],s=n[3*a+2],c=o[3*a+0],i=o[3*a+1],l=o[3*a+2];r+=e===p||c<i?1:0,r+=t===p||i<l?1:0,r+=s===p||l<c?1:0;}const s=new Int32Array(4*r);let c=0;for(let a=0;a<t;a++){const e=n[3*a+0],t=n[3*a+1],r=n[3*a+2],i=o[3*a+0],l=o[3*a+1],g=o[3*a+2];(e===p||i<l)&&(s[c++]=i,s[c++]=l,s[c++]=a,s[c++]=e),(t===p||l<g)&&(s[c++]=l,s[c++]=g,s[c++]=a,s[c++]=t),(r===p||g<i)&&(s[c++]=g,s[c++]=i,s[c++]=a,s[c++]=r);}return s}function w(e){const t=e.faces.length/3,o=e.vertices.position,n=e.faces,r=I.v0,s=I.v1,c=I.v2,a=new Float32Array(3*t);for(let i=0;i<t;i++){const e=n[3*i+0],t=n[3*i+1],m=n[3*i+2];o.getVec(e,r),o.getVec(t,s),o.getVec(m,c),c$3(s,s,r),c$3(c,c,r),_(r,s,c),j(r,r),a[3*i+0]=r[0],a[3*i+1]=r[1],a[3*i+2]=r[2];}return a}const y={edge:{position0:n$2(),position1:n$2(),faceNormal0:n$2(),faceNormal1:n$2(),componentIndex:0,cosAngle:0},ortho:n$2(),fwd:n$2()},I={v0:n$2(),v1:n$2(),v2:n$2()},V={anglePlanar:4,angleSignificantEdge:35};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function a(e){const t=u(e),n=f(t),r=[t.data.buffer];return {result:c(n,r),transferList:r}}function f(e){const t=g(e.data,e.skipDeduplicate,e.indices,e.indicesLength);return d.updateSettings(e.writerSettings),l.updateSettings(e.writerSettings),u$1(t,d,l)}function u(e$1){return {data:e.createView(e$1.dataBuffer),indices:"Uint32Array"===e$1.indicesType?new Uint32Array(e$1.indicesBuffer):"Uint16Array"===e$1.indicesType?new Uint16Array(e$1.indicesBuffer):void 0,indicesLength:e$1.indicesLength,writerSettings:e$1.writerSettings,skipDeduplicate:e$1.skipDeduplicate}}function c(e,t){t.push(e.regular.lodInfo.lengths.buffer),t.push(e.silhouette.lodInfo.lengths.buffer);return {regular:{instancesData:z(e.regular.instancesData,t),lodInfo:{lengths:e.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:z(e.silhouette.instancesData,t),lodInfo:{lengths:e.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:e.averageEdgeLength}}function g(n,r,i,o){if(r){return {faces:i,facesLength:o,neighbors:t(i,o,n.count),vertices:n}}const a=n$1(n.buffer,n.stride/4,{originalIndices:i,originalIndicesLength:o}),f=t(a.indices,o,a.uniqueCount);return {faces:a.indices,facesLength:a.indices.length,neighbors:f,vertices:e.createView(a.buffer)}}const d=new d$2,l=new w$1;

export { f as work, a as wrappedWork };