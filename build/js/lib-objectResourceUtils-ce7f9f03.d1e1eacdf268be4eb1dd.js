(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{370:function(e,t,r){"use strict";r.r(t),r.d(t,"P",(function(){return Ei})),r.d(t,"j",(function(){return Hi})),r.d(t,"o",(function(){return ba}));r(76),r(167),r(87),r(163),r(140),r(88),r(139),r(25),r(124);var o=r(0),i=r(31),n=r(8),a=r(137),s=r(26),c=r(379),l=r(11),d=r(378),u=r(336),f=r(7),m=r(354),p=r(52),h=r(1),v=r(123),g=r(4),b=r(348),x=r(316),O=r(318),y=r(312),w=r(363),T=r(48),S=r(359);function _(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function j(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function C(e,t){return new Float64Array(e,t,16)}const M=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze({__proto__:null,create:_,clone:j,fromValues:function(e,t,r,o,i,n,a,s,c,l,d,u,f,m,p,h){return[e,t,r,o,i,n,a,s,c,l,d,u,f,m,p,h]},createView:C,IDENTITY:M});const P=o.n.getLogger("esri.views.3d.support.buffer.math");function A(e,t,r){if(e.count!==t.count)return void P.error("source and destination buffers need to have the same number of elements");const o=e.count,i=r[0],n=r[1],a=r[2],s=r[4],c=r[5],l=r[6],d=r[8],u=r[9],f=r[10],m=r[12],p=r[13],h=r[14],v=e.typedBuffer,g=e.typedBufferStride,b=t.typedBuffer,x=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*g,r=e*x,o=b[r],O=b[r+1],y=b[r+2];v[t]=i*o+s*O+d*y+m,v[t+1]=n*o+c*O+u*y+p,v[t+2]=a*o+l*O+f*y+h}}function I(e,t,r){if(e.count!==t.count)return void P.error("source and destination buffers need to have the same number of elements");const o=e.count,i=r[0],n=r[1],a=r[2],s=r[3],c=r[4],l=r[5],d=r[6],u=r[7],f=r[8],m=e.typedBuffer,p=e.typedBufferStride,h=t.typedBuffer,v=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*p,r=e*v,o=h[r],g=h[r+1],b=h[r+2];m[t]=i*o+s*g+d*b,m[t+1]=n*o+c*g+u*b,m[t+2]=a*o+l*g+f*b}}function F(e,t,r){const o=Math.min(e.count,t.count),i=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*n,o=e*s;i[t]=r*a[o],i[t+1]=r*a[o+1],i[t+2]=r*a[o+2]}}function R(){return[0,0,0,0]}function L(e,t,r,o){return[e,t,r,o]}function B(e,t){return new Float64Array(e,t,4)}function D(){return[0,0,0,0]}function z(){return L(1,1,1,1)}function E(){return L(1,0,0,0)}function N(){return L(0,1,0,0)}function U(){return L(0,0,1,0)}function V(){return L(0,0,0,1)}Object.freeze({__proto__:null,transformMat4:A,transformMat3:I,scale:F,shiftRight:function(e,t,r){const o=Math.min(e.count,t.count),i=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*n,o=e*s;i[t]=a[o]>>r,i[t+1]=a[o+1]>>r,i[t+2]=a[o+2]>>r}}});const k=[0,0,0,0],H=z(),G=E(),$=N(),q=U(),W=V();Object.freeze({__proto__:null,create:R,clone:function(e){return[e[0],e[1],e[2],e[3]]},fromValues:L,fromArray:function(e){const t=[0,0,0,0],r=Math.min(4,e.length);for(let o=0;o<r;++o)t[o]=e[o];return t},createView:B,zeros:D,ones:z,unitX:E,unitY:N,unitZ:U,unitW:V,ZEROS:k,ONES:H,UNIT_X:G,UNIT_Y:$,UNIT_Z:q,UNIT_W:W});class X{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}}function J(e,t){if(!e){t=t||"assert";const e=new Error(t);throw e.stack&&console.log(e.stack),new X(t)}}function Y(e,t=0){let r=0;for(let o=0;o<4;o++)r+=e[t+o]*K[o];return r}const K=[1/256,1/65536,1/16777216,1/4294967296];Y(new Uint8ClampedArray([255,255,255,255]));class Q{constructor(e,t,r,o){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.indices=r,this.position=o,this.center=Object(i.d)(),J(e.length>=1),J(r.length%this._numIndexPerPrimitive==0),J(r.length>=e.length*this._numIndexPerPrimitive),J(3===o.size||4===o.size);const{data:a,size:s}=o,c=e.length;let l=s*r[this._numIndexPerPrimitive*e[0]];Z.clear(),Z.push(l),this.bbMin=Object(i.f)(a[l],a[l+1],a[l+2]),this.bbMax=Object(i.e)(this.bbMin);for(let t=0;t<c;++t){const o=this._numIndexPerPrimitive*e[t];for(let e=0;e<this._numIndexPerPrimitive;++e){l=s*r[o+e],Z.push(l);let t=a[l];this.bbMin[0]=Math.min(t,this.bbMin[0]),this.bbMax[0]=Math.max(t,this.bbMax[0]),t=a[l+1],this.bbMin[1]=Math.min(t,this.bbMin[1]),this.bbMax[1]=Math.max(t,this.bbMax[1]),t=a[l+2],this.bbMin[2]=Math.min(t,this.bbMin[2]),this.bbMax[2]=Math.max(t,this.bbMax[2])}}Object(n.v)(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let d=this.radius*this.radius;for(let e=0;e<Z.length;++e){l=Z.getItemAt(e);const t=a[l]-this.center[0],r=a[l+1]-this.center[1],o=a[l+2]-this.center[2],i=t*t+r*r+o*o;if(i<=d)continue;const n=Math.sqrt(i),s=.5*(n-this.radius);this.radius=this.radius+s,d=this.radius*this.radius;const c=s/n;this.center[0]+=t*c,this.center[1]+=r*c,this.center[2]+=o*c}Z.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if(Object(n.u)(this.bbMin,this.bbMax)>1){const e=Object(n.v)(Object(i.d)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),o=new Array(8);for(let e=0;e<8;++e)o[e]=0;const{data:a,size:s}=this.position;for(let i=0;i<t;++i){let t=0;const n=this._numIndexPerPrimitive*this.primitiveIndices[i];let c=s*this.indices[n],l=a[c],d=a[c+1],u=a[c+2];for(let e=1;e<this._numIndexPerPrimitive;++e){c=s*this.indices[n+e];const t=a[c],r=a[c+1],o=a[c+2];t<l&&(l=t),r<d&&(d=r),o<u&&(u=o)}l<e[0]&&(t|=1),d<e[1]&&(t|=2),u<e[2]&&(t|=4),r[i]=t,++o[t]}let c=0;for(let e=0;e<8;++e)o[e]>0&&++c;if(c<2)return;const l=new Array(8);for(let e=0;e<8;++e)l[e]=o[e]>0?new Uint32Array(o[e]):void 0;for(let e=0;e<8;++e)o[e]=0;for(let e=0;e<t;++e){const t=r[e];l[t][o[t]++]=this.primitiveIndices[e]}this._children=new Array(8);for(let e=0;e<8;++e)void 0!==l[e]&&(this._children[e]=new Q(l[e],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){Z.prune()}}const Z=new o.aC({deallocator:null});class ee{constructor(){this.id=Object(p.a)()}unload(){}}class te{constructor(e){this.allocator=e,this.items=[],this.itemsPtr=0,this.tickHandle=o.cX.before((()=>this.reset())),this.grow()}destroy(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=Object(o.cY)(this.tickHandle)),this.items=Object(o.cY)(this.items)}get(){return 0===this.itemsPtr&&Object(o.cX)((()=>{})),this.itemsPtr===this.items.length&&this.grow(),this.items[this.itemsPtr++]}reset(){const e=Math.min(3*Math.max(8,this.itemsPtr),this.itemsPtr+3*re);this.items.length=Math.min(e,this.items.length),this.itemsPtr=0}grow(){for(let e=0;e<Math.max(8,Math.min(this.items.length,re));e++)this.items.push(this.allocator())}}const re=1024;class oe{constructor(e,t,r){this.itemByteSize=e,this.itemCreate=t,this.buffers=[],this.items=[],this.itemsPerBuffer=0,this.itemsPtr=0,this.itemsPerBuffer=Math.ceil(r/this.itemByteSize),this.tickHandle=o.cX.before((()=>this.reset()))}destroy(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=Object(o.cY)(this.tickHandle)),this.itemsPtr=0,this.items=Object(o.cY)(this.items),this.buffers=Object(o.cY)(this.buffers)}get(){0===this.itemsPtr&&Object(o.cX)((()=>{}));const e=Math.floor(this.itemsPtr/this.itemsPerBuffer);for(;this.buffers.length<=e;){const e=new ArrayBuffer(this.itemsPerBuffer*this.itemByteSize);for(let t=0;t<this.itemsPerBuffer;++t)this.items.push(this.itemCreate(e,t*this.itemByteSize));this.buffers.push(e)}return this.items[this.itemsPtr++]}reset(){const e=2*(Math.floor(this.itemsPtr/this.itemsPerBuffer)+1);for(;this.buffers.length>e;)this.buffers.pop(),this.items.length=this.buffers.length*this.itemsPerBuffer;this.itemsPtr=0}static createVec2f64(e=ie){return new oe(16,l.b,e)}static createVec3f64(e=ie){return new oe(24,i.g,e)}static createVec4f64(e=ie){return new oe(32,B,e)}static createMat3f64(e=ie){return new oe(72,c.b,e)}static createMat4f64(e=ie){return new oe(128,C,e)}static createQuatf64(e=ie){return new oe(32,c.c,e)}get test(){return{size:this.buffers.length*this.itemsPerBuffer*this.itemByteSize}}}const ie=4096;oe.createVec2f64();const ne=oe.createVec3f64(),ae=oe.createVec4f64();oe.createMat3f64();const se=oe.createMat4f64();function ce(e){return e?{origin:Object(i.e)(e.origin),vector:Object(i.e)(e.vector)}:{origin:Object(i.d)(),vector:Object(i.d)()}}function le(e,t){const r=he.get();return r.origin=e,r.vector=t,r}function de(e,t,r=ce()){return Object(n.i)(r.origin,e),Object(n.i)(r.vector,t),r}function ue(e,t){const r=Object(n.k)(ne.get(),t,e.origin),i=Object(n.w)(e.vector,r),a=Object(n.w)(e.vector,e.vector),s=Object(o.D)(i/a,0,1),c=Object(n.k)(ne.get(),Object(n.j)(ne.get(),e.vector,s),r);return Object(n.w)(c,c)}function fe(e,t,r,i,a){const{vector:s,origin:c}=e,l=Object(n.k)(ne.get(),t,c),d=Object(n.w)(s,l)/Object(n.o)(s);return Object(n.j)(a,s,Object(o.D)(d,r,i)),Object(n.t)(a,a,e.origin)}function me(e,t,r,i){const a=1e-6,s=e.origin,c=Object(n.t)(ne.get(),s,e.vector),l=t.origin,d=Object(n.t)(ne.get(),l,t.vector),u=ne.get(),f=ne.get();if(u[0]=s[0]-l[0],u[1]=s[1]-l[1],u[2]=s[2]-l[2],f[0]=d[0]-l[0],f[1]=d[1]-l[1],f[2]=d[2]-l[2],Math.abs(f[0])<a&&Math.abs(f[1])<a&&Math.abs(f[2])<a)return!1;const m=ne.get();if(m[0]=c[0]-s[0],m[1]=c[1]-s[1],m[2]=c[2]-s[2],Math.abs(m[0])<a&&Math.abs(m[1])<a&&Math.abs(m[2])<a)return!1;const p=u[0]*f[0]+u[1]*f[1]+u[2]*f[2],h=f[0]*m[0]+f[1]*m[1]+f[2]*m[2],v=u[0]*m[0]+u[1]*m[1]+u[2]*m[2],g=f[0]*f[0]+f[1]*f[1]+f[2]*f[2],b=(m[0]*m[0]+m[1]*m[1]+m[2]*m[2])*g-h*h;if(Math.abs(b)<a)return!1;let x=(p*h-v*g)/b,O=(p+h*x)/g;r&&(x=Object(o.D)(x,0,1),O=Object(o.D)(O,0,1));const y=ne.get(),w=ne.get();return y[0]=s[0]+x*m[0],y[1]=s[1]+x*m[1],y[2]=s[2]+x*m[2],w[0]=l[0]+O*f[0],w[1]=l[1]+O*f[1],w[2]=l[2]+O*f[2],i.tA=x,i.tB=O,i.pA=y,i.pB=w,i.distance2=Object(n.u)(y,w),!0}oe.createQuatf64();const pe={tA:0,tB:0,pA:Object(i.d)(),pB:Object(i.d)(),distance2:0},he=new te((()=>({origin:null,vector:null})));function ve(e){return e?{p0:Object(i.e)(e.p0),p1:Object(i.e)(e.p1),p2:Object(i.e)(e.p2)}:{p0:Object(i.d)(),p1:Object(i.d)(),p2:Object(i.d)()}}function ge(e,t,r,o=ve()){return Object(n.i)(o.p0,e),Object(n.i)(o.p1,t),Object(n.i)(o.p2,r),o}function be(e,t,r){const o=Object(f.f)(e,t),i=Object(f.f)(t,r),n=Object(f.f)(r,e),a=(o+i+n)/2,s=a*(a-o)*(a-i)*(a-n);return s<=0?0:Math.sqrt(s)}function xe(e,t,r){return Object(n.k)(we,t,e),Object(n.k)(Te,r,e),Object(n.h)(Object(n.f)(we,we,Te))/2}Object.freeze({__proto__:null,create:ce,wrap:le,copy:function(e,t=ce()){return de(e.origin,e.vector,t)},fromValues:de,fromPoints:function(e,t,r=ce()){return Object(n.i)(r.origin,e),Object(n.k)(r.vector,t,e),r},distance2:ue,distance:function(e,t){return Math.sqrt(ue(e,t))},projectPoint:function(e,t,r){return fe(e,t,0,1,r)},pointAt:function(e,t,r){return Object(n.t)(r,e.origin,Object(n.j)(r,e.vector,t))},projectPointClamp:fe,closestRayDistance2:function(e,t){if(me(e,le(t.origin,t.direction),!1,pe)){const{tA:t,pB:r,distance2:o}=pe;if(t>=0&&t<=1)return o;if(t<0)return Object(n.u)(e.origin,r);if(t>1)return Object(n.u)(Object(n.t)(ne.get(),e.origin,e.vector),r)}return null},closestLineSegmentPoint:function(e,t,r){return!!me(e,t,!0,pe)&&(Object(n.i)(r,pe.pA),!0)},closestLineSegmentDistance2:function(e,t){return me(e,t,!0,pe)?pe.distance2:null}});const Oe=new te(ce),ye=new te((()=>({p0:null,p1:null,p2:null}))),we=Object(i.d)(),Te=Object(i.d)();Object.freeze({__proto__:null,create:ve,wrap:function(e,t,r){const o=ye.get();return o.p0=e,o.p1=t,o.p2=r,o},copy:function(e,t=ve()){return ge(e.p0,e.p1,e.p2,t)},fromValues:ge,distance2:function(e,t){const r=e.p0,o=e.p1,i=e.p2,a=Object(n.k)(ne.get(),o,r),s=Object(n.k)(ne.get(),i,o),c=Object(n.k)(ne.get(),r,i),l=Object(n.k)(ne.get(),t,r),d=Object(n.k)(ne.get(),t,o),u=Object(n.k)(ne.get(),t,i),f=Object(n.f)(a,a,c),m=Object(n.w)(Object(n.f)(ne.get(),a,f),l),p=Object(n.w)(Object(n.f)(ne.get(),s,f),d),h=Object(n.w)(Object(n.f)(ne.get(),c,f),u);if(m>0&&p>0&&h>0){const e=Object(n.w)(f,l);return e*e/Object(n.w)(f,f)}const v=ue(de(r,a,Oe.get()),t),g=ue(de(o,s,Oe.get()),t),b=ue(de(i,c,Oe.get()),t);return Math.min(v,g,b)},intersectRay:function(e,t,r){const o=1e-5,{direction:i,origin:a}=t,{p0:s,p1:c,p2:l}=e,d=c[0]-s[0],u=c[1]-s[1],f=c[2]-s[2],m=l[0]-s[0],p=l[1]-s[1],h=l[2]-s[2],v=i[1]*h-p*i[2],g=i[2]*m-h*i[0],b=i[0]*p-m*i[1],x=d*v+u*g+f*b;if(x>-o&&x<o)return!1;const O=1/x,y=a[0]-s[0],w=a[1]-s[1],T=a[2]-s[2],S=O*(y*v+w*g+T*b);if(S<0||S>1)return!1;const _=w*f-u*T,j=T*d-f*y,C=y*u-d*w,M=O*(i[0]*_+i[1]*j+i[2]*C);return!(M<0||S+M>1)&&(r&&(Object(n.j)(r,i,O*(m*_+p*j+h*C)),Object(n.t)(r,a,r)),!0)},areaPoints2d:be,area2d:function(e){return be(e.p0,e.p1,e.p2)},areaPoints3d:xe});let Se=(()=>{const e=new Uint32Array(131072);for(let t=0;t<e.length;++t)e[t]=t;return e})();const _e=new Uint16Array([0]),je=(()=>{const e=new Uint16Array(65536);for(let t=0;t<e.length;++t)e[t]=t;return e})();function Ce(e){if(1===e)return _e;if(e<je.length)return new Uint16Array(je.buffer,0,e);if(e>Se.length){const t=Math.max(2*Se.length,e);Se=new Uint32Array(t);for(let e=0;e<Se.length;e++)Se[e]=e}return new Uint32Array(Se.buffer,0,e)}const Me=Object(i.d)(),Pe=Object(i.d)(),Ae=Object(i.d)(),Ie=Object(i.d)();class Fe extends ee{constructor(e,t=[],r=0,o=-1){super(),this._primitiveType=r,this.edgeIndicesLength=o,this.type=2,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[t,r]of e)r&&this._vertexAttributes.set(t,{...r});if(null==t||0===t.length){const e=function(e){const t=e.values().next().value;return null==t?0:t.data.length/t.size}(this._vertexAttributes),t=Ce(e);this.edgeIndicesLength=this.edgeIndicesLength<0?e:this.edgeIndicesLength;for(const e of this._vertexAttributes.keys())this._indices.set(e,t)}else for(const[e,r]of t)r&&(this._indices.set(e,Re(r)),"position"===e&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(e).length:this.edgeIndicesLength))}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const t=this._vertexAttributes.get(e);return t&&!t.exclusive&&(t.data=Array.from(t.data),t.exclusive=!0),t}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return Object(o.J)(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return 0===this.primitiveType?this.computeAttachmentOriginTriangles(e):this.computeAttachmentOriginPoints(e)}computeAttachmentOriginTriangles(e){const t=this.indices.get("position");return function(e,t,r){if(!e)return!1;const{size:o,data:i}=e;Object(n.n)(r,0,0,0),Object(n.n)(Ie,0,0,0);let a=0,s=0;for(let e=0;e<t.length-2;e+=3){const c=t[e+0]*o,l=t[e+1]*o,d=t[e+2]*o;Object(n.n)(Me,i[c+0],i[c+1],i[c+2]),Object(n.n)(Pe,i[l+0],i[l+1],i[l+2]),Object(n.n)(Ae,i[d+0],i[d+1],i[d+2]);const u=xe(Me,Pe,Ae);u?(Object(n.t)(Me,Me,Pe),Object(n.t)(Me,Me,Ae),Object(n.j)(Me,Me,1/3*u),Object(n.t)(r,r,Me),a+=u):(Object(n.t)(Ie,Ie,Me),Object(n.t)(Ie,Ie,Pe),Object(n.t)(Ie,Ie,Ae),s+=3)}return!(0===s&&0===a||(0!==a?(Object(n.j)(r,r,1/a),0):0===s||(Object(n.j)(r,Ie,1/s),0)))}(this.vertexAttributes.get("position"),t,e)}computeAttachmentOriginPoints(e){const t=this.indices.get("position");return function(e,t,r){if(!e||!t)return!1;const{size:o,data:i}=e;Object(n.n)(r,0,0,0);let a=-1,s=0;for(let e=0;e<t.length;e++){const n=t[e]*o;a!==n&&(r[0]+=i[n+0],r[1]+=i[n+1],r[2]+=i[n+2],s++),a=n}return s>1&&Object(n.j)(r,r,1/s),s>0}(this.vertexAttributes.get("position"),t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get("position");if(0===e.length)return null;const t=0===this.primitiveType?3:1;J(e.length%t==0,"Indexing error: "+e.length+" not divisible by "+t);const r=Ce(e.length/t),o=this.vertexAttributes.get("position");return new Q(r,t,e,o)}}function Re(e){if(e.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return e;for(const t of e)if(t>=65536)return e;return new Uint16Array(e)}function Le(e,t){return Object(n.w)(e,t)/Object(n.h)(e)}function Be(e,t){const r=Object(n.w)(e,t)/(Object(n.h)(e)*Object(n.h)(t));return-Object(o.cC)(r)}const De=Object(i.d)(),ze=Object(i.d)();function Ee(e){return e?{origin:Object(i.e)(e.origin),direction:Object(i.e)(e.direction)}:{origin:Object(i.d)(),direction:Object(i.d)()}}function Ne(e,t=Ee()){return Ue(e.origin,e.direction,t)}function Ue(e,t,r=Ee()){return Object(n.i)(r.origin,e),Object(n.i)(r.direction,t),r}function Ve(e,t,r=Ee()){const i=Object(g.b)(Object(f.d)(ne.get(),t));if(i[2]=0,!e.unprojectFromRenderScreen(i,r.origin))return null;const a=Object(g.b)(Object(f.d)(ne.get(),t));a[2]=1;const s=e.unprojectFromRenderScreen(a,ne.get());return Object(o.J)(s)?null:(Object(n.k)(r.direction,s,r.origin),r)}function ke(e,t,r=Ee()){return He(e,e.screenToRender(t,Object(g.b)(ne.get())),r)}function He(e,t,r=Ee()){Object(n.i)(r.origin,e.eye);const i=Object(n.n)(ne.get(),t[0],t[1],1),a=e.unprojectFromRenderScreen(i,ne.get());return Object(o.J)(a)?null:(Object(n.k)(r.direction,a,r.origin),r)}function Ge(e,t){const r=Object(n.f)(ne.get(),Object(n.m)(ne.get(),e.direction),Object(n.k)(ne.get(),t,e.origin));return Object(n.w)(r,r)}function $e(e,t,r){const o=Object(n.w)(e.direction,Object(n.k)(r,t,e.origin));return Object(n.t)(r,e.origin,Object(n.j)(r,e.direction,o)),r}function qe(){return{origin:null,direction:null}}Object.freeze({__proto__:null,projectPoint:function(e,t,r){const o=Object(n.w)(e,t)/Object(n.w)(e,e);return Object(n.j)(r,e,o)},projectPointSignedLength:Le,angle:Be,angleAroundAxis:function(e,t,r){Object(n.m)(De,e),Object(n.m)(ze,t);const i=Object(n.w)(De,ze),a=Object(o.cC)(i),s=Object(n.f)(De,De,ze);return Object(n.w)(s,r)<0?2*Math.PI-a:a}});const We=new te(qe);Object.freeze({__proto__:null,create:Ee,wrap:function(e,t){const r=We.get();return r.origin=e,r.direction=t,r},copy:Ne,fromPoints:function(e,t,r=Ee()){return Object(n.i)(r.origin,e),Object(n.k)(r.direction,t,e),r},fromValues:Ue,fromScreen:function(e,t,r=Ee()){return Ve(e,e.screenToRender(t,Object(g.b)(ne.get())),r)},fromRender:Ve,fromScreenAtEye:ke,fromRenderAtEye:He,distance2:Ge,distance:function(e,t){return Math.sqrt(Ge(e,t))},closestPoint:$e,createWrapper:qe});const Xe=o.n.getLogger("esri.views.3d.support.geometryUtils.sphere");function Je(){return[0,0,0,0]}function Ye(e,t=[0,0,0,0]){return Object(m.d)(t,e)}function Ke(e){return Array.isArray(e)?e[3]:e}function Qe(e){return Array.isArray(e)?e:st}function Ze(e,t,r){if(Object(o.J)(t))return!1;const i=Object(n.k)(ne.get(),t.origin,Qe(e)),a=Object(n.w)(t.direction,t.direction),s=2*Object(n.w)(t.direction,i),c=s*s-4*a*(Object(n.w)(i,i)-e[3]*e[3]);if(c<0)return!1;const l=Math.sqrt(c);let d=(-s-l)/(2*a);const u=(-s+l)/(2*a);return(d<0||u<d&&u>0)&&(d=u),!(d<0||(r&&Object(n.t)(r,t.origin,Object(n.j)(ne.get(),t.direction,d)),0))}function et(e,t,r){const o=ne.get(),i=se.get();Object(n.f)(o,t.origin,t.direction);const s=Ke(e);Object(n.f)(r,o,t.origin),Object(n.j)(r,r,1/Object(n.h)(r)*s);const c=rt(e,t.origin),l=Be(t.origin,r);return Object(a.h)(i),Object(a.c)(i,i,l+c,o),Object(n.b)(r,r,i),r}function tt(e,t,r){const o=Object(n.k)(ne.get(),t,Qe(e)),i=Object(n.j)(ne.get(),o,e[3]/Object(n.h)(o));return Object(n.t)(r,i,Qe(e))}function rt(e,t){const r=Object(n.k)(ne.get(),t,Qe(e)),i=Object(n.h)(r),a=Ke(e),s=a+Math.abs(a-i);return Object(o.cC)(a/s)}const ot=Object(i.d)();function it(e,t,r,o){const i=Object(n.k)(ot,t,Qe(e));switch(r){case 0:{const e=Object(v.b)(i,ot)[2];return Object(n.n)(o,-Math.sin(e),Math.cos(e),0)}case 1:{const e=Object(v.b)(i,ot),t=e[1],r=e[2],a=Math.sin(t);return Object(n.n)(o,-a*Math.cos(r),-a*Math.sin(r),Math.cos(t))}case 2:return Object(n.m)(o,i);default:return}}function nt(e,t){const r=Object(n.k)(ct,t,Qe(e));return Object(n.h)(r)-e[3]}const at=Ee(),st=Object(i.d)(),ct=Object(i.d)();function lt(e=zt){return[e[0],e[1],e[2],e[3]]}function dt(e,t,r,o){return ft(e,t,r,o,ae.get())}function ut(e,t=lt()){return ft(e[0],e[1],e[2],e[3],t)}function ft(e,t,r,o,i=lt()){return i[0]=e,i[1]=t,i[2]=r,i[3]=o,i}function mt(e,t,r=lt()){Object(n.i)(r,t);const o=Object(n.w)(t,t);return Math.abs(o-1)>1e-5&&o>1e-12&&Object(n.j)(r,r,1/Math.sqrt(o)),wt(r,e,r),r}function pt(e,t,r,o=lt()){return Tt(Object(n.k)(ne.get(),e,t),Object(n.k)(ne.get(),r,t),e,o)}function ht(e,t,r,o,i){if(e.count<3)return!1;e.getVec(r,gt);let a=o,s=!1;for(;a<e.count-1&&!s;)e.getVec(a,bt),a++,s=!Object(n.a)(gt,bt);if(!s)return!1;for(a=Math.max(a,i),s=!1;a<e.count&&!s;)e.getVec(a,xt),a++,Object(n.k)(Ot,gt,bt),Object(n.m)(Ot,Ot),Object(n.k)(yt,bt,xt),Object(n.m)(yt,yt),s=!Object(n.a)(gt,xt)&&!Object(n.a)(bt,xt)&&Math.abs(Object(n.w)(Ot,yt))<vt;return s?(pt(gt,bt,xt,t),!0):(0!==r||1!==o||2!==i)&&ht(e,t,0,1,2)}Object.freeze(st),Object.freeze({__proto__:null,create:Je,copy:Ye,fromCenterAndRadius:function(e,t){return L(e[0],e[1],e[2],t)},wrap:function(e){return e},clear:function(e){e[0]=e[1]=e[2]=e[3]=0},fromRadius:function(e){return e},getRadius:Ke,getCenter:Qe,fromValues:function(e,t,r,o){return L(e,t,r,o)},elevate:function(e,t,r){return e!==r&&Object(n.i)(r,e),r[3]=e[3]+t,r},setExtent:function(e,t,r){return Xe.error("sphere.setExtent is not yet supported"),e===r?r:Ye(e,r)},intersectRay:Ze,intersectScreen:function(e,t,r,o){return Ze(e,ke(t,r,at),o)},intersectsRay:function(e,t){return Ze(e,t,null)},intersectRayClosestSilhouette:function(e,t,r){if(Ze(e,t,r))return r;const o=et(e,t,ne.get());return Object(n.t)(r,t.origin,Object(n.j)(ne.get(),t.direction,Object(n.p)(t.origin,o)/Object(n.h)(t.direction))),r},closestPointOnSilhouette:et,closestPoint:function(e,t,r){return Ze(e,t,r)?r:($e(t,Qe(e),r),tt(e,r,r))},projectPoint:tt,distanceToSilhouette:function(e,t){const r=Object(n.k)(ne.get(),t,Qe(e)),o=Object(n.o)(r),i=e[3]*e[3];return Math.sqrt(Math.abs(o-i))},angleToSilhouette:rt,axisAt:it,altitudeAt:nt,setAltitudeAt:function(e,t,r,o){const i=nt(e,t),a=it(e,t,2,ct),s=Object(n.j)(ct,a,r-i);return Object(n.t)(o,t,s),o}});const vt=.99619469809,gt=Object(i.d)(),bt=Object(i.d)(),xt=Object(i.d)(),Ot=Object(i.d)(),yt=Object(i.d)();function wt(e,t,r){return e!==r&&ut(e,r),r[3]=-Object(n.w)(r,t),r}function Tt(e,t,r,o=lt()){return mt(r,Object(n.f)(ne.get(),t,e),o)}function St(e,t,r){return!!Object(o.P)(t)&&Bt(e,t.origin,t.direction,!0,!1,r)}function _t(e,t,r){return Bt(e,t.origin,t.vector,!1,!1,r)}function jt(e,t,r){return Bt(e,t.origin,t.vector,!1,!0,r)}function Ct(e,t){return Lt(e,Qe(t))-t[3]>=0}function Mt(e,t){return Lt(e,t)>=0}function Pt(e,t){const r=t[0],o=t[1],i=t[2],n=t[3],a=t[4],s=t[5];return e[0]*(e[0]>0?r:n)+e[1]*(e[1]>0?o:a)+e[2]*(e[2]>0?i:s)+e[3]>=0}function At(e,t){const r=Object(n.w)(e,t.ray.direction),o=-Lt(e,t.ray.origin);if(o<0&&r>=0)return!1;if(r>-1e-6&&r<1e-6)return o>0;if((o<0||r<0)&&!(o<0&&r<0))return!0;const i=o/r;return r>0?i<t.c1&&(t.c1=i):i>t.c0&&(t.c0=i),t.c0<=t.c1}function It(e,t){const r=Object(n.w)(e,t.ray.direction),o=-Lt(e,t.ray.origin);if(r>-1e-6&&r<1e-6)return o>0;const i=o/r;return r>0?i<t.c1&&(t.c1=i):i>t.c0&&(t.c0=i),t.c0<=t.c1}function Ft(e,t,r){const o=Object(n.j)(ne.get(),e,-e[3]),i=Rt(e,Object(n.k)(ne.get(),t,o),ne.get());return Object(n.t)(r,i,o),r}function Rt(e,t,r){const o=Object(n.j)(ne.get(),e,Object(n.w)(e,t));return Object(n.k)(r,t,o),r}function Lt(e,t){return Object(n.w)(e,t)+e[3]}function Bt(e,t,r,i,a,s){const c=Object(n.w)(e,r);if(0===c)return!1;let l=-(Object(n.w)(e,t)+e[3])/c;return a&&(l=i?Math.max(0,l):Object(o.D)(l,0,1)),!(l<0||!i&&l>1||(Object(n.t)(s,t,Object(n.j)(s,r,l)),0))}function Dt(e){return e}const zt=[0,0,1,0];Object.freeze({__proto__:null,create:lt,wrap:dt,copy:ut,fromValues:ft,fromNormalAndOffset:function(e,t,r=lt()){return Object(n.i)(r,e),r[3]=t,r},fromPositionAndNormal:mt,fromPoints:pt,fromManyPoints:function(e,t){return ht(e,t,0,1,2)},fromManyPointsSampleAt:ht,setOffsetFromPoint:wt,negate:function(e,t){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t},fromVectorsAndPoint:Tt,intersectRay:St,intersectLineSegment:_t,intersectLineSegmentClamp:jt,isSphereFullyInside:Ct,isSphereFullyOutside:function(e,t){return Lt(e,Qe(t))+t[3]<0},isPointInside:Mt,isPointOutside:function(e,t){return Lt(e,t)<0},isAABBFullyInside:Pt,clip:At,clipInfinite:It,projectPoint:Ft,projectVector:Rt,distance:function(e,t){return Math.abs(Lt(e,t))},signedDistance:Lt,normal:Dt,UP:zt});const Et=o.n.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");function Nt(e=or){return{plane:lt(e.plane),origin:Object(i.e)(e.origin),basis1:Object(i.e)(e.basis1),basis2:Object(i.e)(e.basis2)}}function Ut(e,t=Nt()){return Vt(e.origin,e.basis1,e.basis2,t)}function Vt(e,t,r,o=Nt()){return Object(n.i)(o.origin,e),Object(n.i)(o.basis1,t),Object(n.i)(o.basis2,r),kt(o),function(e,t){Math.abs(Object(n.w)(e.basis1,e.basis2)/(Object(n.h)(e.basis1)*Object(n.h)(e.basis2)))>1e-6&&Et.warn(t,"Provided basis vectors are not perpendicular"),Math.abs(Object(n.w)(e.basis1,Qt(e)))>1e-6&&Et.warn(t,"Basis vectors and plane normal are not perpendicular"),Math.abs(-Object(n.w)(Qt(e),e.origin)-e.plane[3])>1e-6&&Et.warn(t,"Plane offset is not consistent with plane origin")}(o,"fromValues()"),o}function kt(e){Tt(e.basis2,e.basis1,e.origin,e.plane)}function Ht(e,t,r){e!==r&&Ut(e,r);const o=Object(n.j)(ne.get(),Qt(e),t);return Object(n.t)(r.origin,r.origin,o),r.plane[3]-=t,r}function Gt(e,t=Nt()){const r=(e[2]-e[0])/2,o=(e[3]-e[1])/2;return Object(n.n)(t.origin,e[0]+r,e[1]+o,0),Object(n.n)(t.basis1,r,0,0),Object(n.n)(t.basis2,0,o,0),ft(0,0,1,0,t.plane),t}function $t(e,t,r){return!!St(e.plane,t,r)&&Zt(e,r)}function qt(e,t,r){const i=ir.get();rr(e,t,i,ir.get());let a=Number.POSITIVE_INFINITY;for(const s of cr){const c=tr(e,s,nr.get()),l=ne.get();if(_t(i,c,l)){const e=Object(v.c)(ne.get(),t.origin,l),i=Math.abs(Object(o.cC)(Object(n.w)(t.direction,e)));i<a&&(a=i,Object(n.i)(r,l))}}return a===Number.POSITIVE_INFINITY?Wt(e,t,r):r}function Wt(e,t,r){if($t(e,t,r))return r;const o=ir.get(),i=ir.get();rr(e,t,o,i);let a=Number.POSITIVE_INFINITY;for(const s of cr){const c=tr(e,s,nr.get()),l=ne.get();if(jt(o,c,l)){const e=Ge(t,l);if(!Mt(i,l))continue;e<a&&(a=e,Object(n.i)(r,l))}}return Yt(e,t.origin)<a&&Xt(e,t.origin,r),r}function Xt(e,t,r){const o=Ft(e.plane,t,ne.get()),i=fe(er(e,e.basis1),o,-1,1,ne.get()),a=fe(er(e,e.basis2),o,-1,1,ne.get());return Object(n.k)(r,Object(n.t)(ne.get(),i,a),e.origin),r}function Jt(e,t,r){const{origin:o,basis1:i,basis2:a}=e,s=Object(n.k)(ne.get(),t,o),c=Le(i,s),l=Le(a,s),d=Le(Qt(e),s);return Object(n.n)(r,c,l,d)}function Yt(e,t){const r=Jt(e,t,ne.get()),{basis1:o,basis2:i}=e,a=Object(n.h)(o),s=Object(n.h)(i),c=Math.max(Math.abs(r[0])-a,0),l=Math.max(Math.abs(r[1])-s,0),d=r[2];return c*c+l*l+d*d}function Kt(e,t){const r=-e.plane[3];return Le(Qt(e),t)-r}function Qt(e){return e.plane}function Zt(e,t){const r=Object(n.k)(ne.get(),t,e.origin),o=Object(n.o)(e.basis1),i=Object(n.o)(e.basis2),a=Object(n.w)(e.basis1,r),s=Object(n.w)(e.basis2,r);return-a-o<0&&a-o<0&&-s-i<0&&s-i<0}function er(e,t){const r=nr.get();return Object(n.i)(r.origin,e.origin),Object(n.i)(r.vector,t),r}function tr(e,t,r){const{basis1:o,basis2:i,origin:a}=e,s=Object(n.j)(ne.get(),o,t.origin[0]),c=Object(n.j)(ne.get(),i,t.origin[1]);Object(n.t)(r.origin,s,c),Object(n.t)(r.origin,r.origin,a);const l=Object(n.j)(ne.get(),o,t.direction[0]),d=Object(n.j)(ne.get(),i,t.direction[1]);return Object(n.j)(r.vector,Object(n.t)(l,l,d),2),r}function rr(e,t,r,o){const i=Qt(e);Tt(i,t.direction,t.origin,r),Tt(r,i,t.origin,o)}const or={plane:lt(),origin:Object(i.f)(0,0,0),basis1:Object(i.f)(1,0,0),basis2:Object(i.f)(0,1,0)},ir=new te(lt),nr=new te(ce),ar=Object(i.d)(),sr=new te((()=>({origin:null,basis1:null,basis2:null,plane:null}))),cr=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],lr=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],dr=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];function ur(e=mr){return[e[0],e[1],e[2],e[3]]}function fr(e,t,r,o,i=ur()){return i[0]=e,i[1]=t,i[2]=r,i[3]=o,i}Object.freeze({__proto__:null,BoundedPlaneClass:class{constructor(){this.plane=lt(),this.origin=Object(i.d)(),this.basis1=Object(i.d)(),this.basis2=Object(i.d)()}},create:Nt,wrap:function(e,t,r){const o=sr.get();return o.origin=e,o.basis1=t,o.basis2=r,o.plane=dt(0,0,0,0),kt(o),o},copy:Ut,copyWithoutVerify:function(e,t){Object(n.i)(t.origin,e.origin),Object(n.i)(t.basis1,e.basis1),Object(n.i)(t.basis2,e.basis2),ut(e.plane,t.plane)},fromValues:Vt,updateUnboundedPlane:kt,elevate:Ht,setExtent:function(e,t,r){return Gt(t,r),Ht(r,Kt(e,e.origin),r),r},fromAABoundingRect:Gt,intersectRay:$t,intersectRayClosestSilhouette:function(e,t,r){if($t(e,t,r))return r;const o=qt(e,t,ne.get());return Object(n.t)(r,t.origin,Object(n.j)(ne.get(),t.direction,Object(n.p)(t.origin,o)/Object(n.h)(t.direction))),r},closestPointOnSilhouette:qt,closestPoint:Wt,projectPoint:Xt,projectPointLocal:Jt,distance2:Yt,distance:function(e,t){return Math.sqrt(Yt(e,t))},distanceToSilhouette:function(e,t){let r=Number.NEGATIVE_INFINITY;for(const o of cr){const i=ue(tr(e,o,nr.get()),t);i>r&&(r=i)}return Math.sqrt(r)},extrusionContainsPoint:function(e,t){return Mt(e.plane,t)&&Zt(e,t)},axisAt:function(e,t,r,o){return function(e,t,r){switch(t){case 0:Object(n.i)(r,e.basis1),Object(n.m)(r,r);break;case 1:Object(n.i)(r,e.basis2),Object(n.m)(r,r);break;case 2:Object(n.i)(r,Qt(e))}return r}(e,r,o)},altitudeAt:Kt,setAltitudeAt:function(e,t,r,o){const i=Kt(e,t),a=Object(n.j)(ar,Qt(e),r-i);return Object(n.t)(o,t,a),o},equals:function(e,t){return Object(n.a)(e.basis1,t.basis1)&&Object(n.a)(e.basis2,t.basis2)&&Object(n.a)(e.origin,t.origin)},transform:function(e,t,r){return e!==r&&Ut(e,r),Object(a.e)(lr,t),Object(a.g)(lr,lr),Object(n.b)(r.basis1,e.basis1,lr),Object(n.b)(r.basis2,e.basis2,lr),Object(n.b)(r.plane,e.plane,lr),Object(n.b)(r.origin,e.origin,t),wt(r.plane,r.origin,r.plane),r},rotate:function(e,t,r,o){return e!==o&&Ut(e,o),Object(a.c)(dr,Object(a.h)(dr),t,r),Object(n.b)(o.basis1,e.basis1,dr),Object(n.b)(o.basis2,e.basis2,dr),kt(o),o},normal:Qt,UP:or});const mr=[0,0,1,0];function pr(e){return e?{ray:Ee(e.ray),c0:e.c0,c1:e.c1}:{ray:Ee(),c0:0,c1:Number.MAX_VALUE}}function hr(e,t,r,o=pr()){return Ne(e,o.ray),o.c0=t,o.c1=r,o}function vr(e,t=pr()){return Ne(e,t.ray),t.c0=0,t.c1=Number.MAX_VALUE,t}function gr(e,t,r=pr()){const o=Object(n.h)(e.vector);return Ue(e.origin,t,r.ray),r.c0=0,r.c1=o,r}function br(e,t,r){return Object(n.t)(r,e.ray.origin,Object(n.j)(r,e.ray.direction,t))}Object.freeze({__proto__:null,create:ur,wrap:function(e,t,r,o){return fr(e,t,r,o,ae.get())},wrapAxisAngle:function(e,t){return fr(e[0],e[1],e[2],t,ae.get())},copy:function(e,t=ur()){return fr(e[0],e[1],e[2],e[3],t)},fromValues:fr,fromAxisAndAngle:function(e,t,r=ur()){return Object(n.i)(r,e),r[3]=t,r},fromPoints:function(e,t,r=ur()){return Object(n.f)(r,e,t),Object(n.m)(r,r),r[3]=Be(e,t),r},axis:function(e){return e},UP:mr});const xr=new te((()=>({c0:0,c1:0,ray:null})));function Or(e){return e?[lt(e[0]),lt(e[1]),lt(e[2]),lt(e[3]),lt(e[4]),lt(e[5])]:[lt(),lt(),lt(),lt(),lt(),lt()]}function yr(){return[Object(i.d)(),Object(i.d)(),Object(i.d)(),Object(i.d)(),Object(i.d)(),Object(i.d)(),Object(i.d)(),Object(i.d)()]}function wr(e,t){pt(t[4],t[0],t[3],e[0]),pt(t[1],t[5],t[6],e[1]),pt(t[4],t[5],t[1],e[2]),pt(t[3],t[2],t[6],e[3]),pt(t[0],t[1],t[2],e[4]),pt(t[5],t[4],t[7],e[5])}function Tr(e,t){for(let r=0;r<6;r++)if(!At(e[r],t))return!1;return!0}Object.freeze({__proto__:null,create:pr,wrap:function(e,t,r){const o=xr.get();return o.ray=e,o.c0=t,o.c1=r,o},copy:function(e,t=pr()){return hr(e.ray,e.c0,e.c1,t)},fromValues:hr,fromRay:vr,fromLineSegment:function(e,t=pr()){return gr(e,Object(n.m)(ne.get(),e.vector),t)},fromLineSegmentAndDirection:gr,getStart:function(e,t){return br(e,e.c0,t)},getEnd:function(e,t){return br(e,e.c1,t)},getAt:br});const Sr=[L(-1,-1,-1,1),L(1,-1,-1,1),L(1,1,-1,1),L(-1,1,-1,1),L(-1,-1,1,1),L(1,-1,1,1),L(1,1,1,1),L(-1,1,1,1)],_r=new te(pr),jr=yr();Object.freeze({__proto__:null,create:Or,createPoints:yr,copy:function(e,t=Or()){for(let r=0;r<6;r++)ut(e[r],t[r])},fromMatrix:function(e,t,r,o=jr){const i=Object(a.b)(se.get(),t,e);Object(a.e)(i,i);for(let e=0;e<8;++e){const t=Object(m.l)(ae.get(),Sr[e],i);Object(n.n)(o[e],t[0]/t[3],t[1]/t[3],t[2]/t[3])}wr(r,o)},computePlanes:wr,intersectsSphere:function(e,t){for(let r=0;r<6;r++)if(Ct(e[r],t))return!1;return!0},intersectsRay:function(e,t){return Tr(e,vr(t,_r.get()))},intersectClipRay:function(e,t){for(let r=0;r<6;r++){if(!It(e[r],t))return!1}return!0},intersectsLineSegment:function(e,t,r){return Tr(e,gr(t,r,_r.get()))},intersectsPoint:function(e,t){for(let r=0;r<6;r++)if(Lt(e[r],t)>0)return!1;return!0},intersectsAABB:function(e,t){for(let r=0;r<6;r++)if(Pt(e[r],t))return!1;return!0},planePointIndices:{bottom:[5,1,0,4],near:[0,1,2,3],far:[5,4,7,6],right:[1,5,6,2],left:[4,0,3,7],top:[7,3,2,6]}});class Cr{constructor(){this._disposed=!1}get disposed(){return this._disposed}get shaderTransformation(){return this._shaderTransformation}acquire(e,t,r,o,i,n){this.id=Object(p.a)(),this.geometry=e,this.material=t,this.transformation=r,this.instanceParameters=o,this.origin=i,this._shaderTransformation=n,this._disposed=!1}release(){this._disposed=!1}dispose(){this._disposed=!0}getStaticTransformation(){return this.transformation}getShaderTransformation(){return Object(o.P)(this._shaderTransformation)?this._shaderTransformation(this.transformation):this.transformation}computeAttachmentOrigin(e){return!!(this.material.computeAttachmentOrigin?this.material.computeAttachmentOrigin(this.geometry,e):this.geometry.computeAttachmentOrigin(e))&&(Object(n.b)(e,e,this.getStaticTransformation()),!0)}}function Mr(e,t,r){for(let o=0;o<r;++o)t[2*o]=e[o],t[2*o+1]=e[o]-t[2*o]}Cr.pool=new o.b6(Cr);const Pr=new Float64Array(1),Ar=new Float32Array(2);const Ir=new class{constructor(e=0){this.offset=e,this.sphere=[0,0,0,0],this.tmpVertex=Object(i.d)()}applyToVertex(e,t,r){const o=this.objectTransform.transform;let i=o[0]*e+o[4]*t+o[8]*r+o[12],n=o[1]*e+o[5]*t+o[9]*r+o[13],a=o[2]*e+o[6]*t+o[10]*r+o[14];const s=this.offset/Math.sqrt(i*i+n*n+a*a);i+=i*s,n+=n*s,a+=a*s;const c=this.objectTransform.inverse;return this.tmpVertex[0]=c[0]*i+c[4]*n+c[8]*a+c[12],this.tmpVertex[1]=c[1]*i+c[5]*n+c[9]*a+c[13],this.tmpVertex[2]=c[2]*i+c[6]*n+c[10]*a+c[14],this.tmpVertex}applyToMinMax(e,t){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const o=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*o,t[1]+=t[1]*o,t[2]+=t[2]*o}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.sphere[0]=e[0]+e[0]*r,this.sphere[1]=e[1]+e[1]*r,this.sphere[2]=e[2]+e[2]*r,this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};const Fr=0,Rr=1,Lr=2,Br=3,Dr=4,zr=e=>class extends e{constructor(){super(...arguments),this._isDisposed=!1}dispose(){for(const t of null!=(e=this._managedDisposables)?e:[]){var e;const r=this[t];this[t]=null,r&&"function"==typeof r.dispose&&r.dispose()}this._isDisposed=!0}get isDisposed(){return this._isDisposed}};class Er extends(zr(class{})){}class Nr extends Er{constructor(e){super(),this.material=e.material,this.techniqueRep=e.techniqueRep,this.output=e.output}getTechnique(){return this.technique}getPipelineState(e,t){return this.getTechnique().pipeline}ensureResources(e){return 2}ensureParameters(e){}}class Ur extends Nr{constructor(e){super(e),this._textureIDs=new Set,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._initTransparent=!!e.initTextureTransparent,this._texture=this._acquireIfNotUndefined(this._textureId),this._textureNormal=this._acquireIfNotUndefined(e.normalTextureId),this._textureEmissive=this._acquireIfNotUndefined(e.emissiveTextureId),this._textureOcclusion=this._acquireIfNotUndefined(e.occlusionTextureId),this._textureMetallicRoughness=this._acquireIfNotUndefined(e.metallicRoughnessTextureId)}dispose(){this._textureIDs.forEach((e=>this._textureRepository.release(e))),this._textureIDs.clear()}updateTexture(e){e!==this._textureId&&(this._releaseIfNotUndefined(this._textureId),this._textureId=e,this._texture=this._acquireIfNotUndefined(this._textureId))}bindTexture(e,t){Object(o.P)(this._texture)&&(t.setUniform1i("tex",Fr),e.bindTexture(this._texture.glTexture,Fr)),Object(o.P)(this._textureNormal)&&(t.setUniform1i("normalTexture",Rr),e.bindTexture(this._textureNormal.glTexture,Rr)),Object(o.P)(this._textureEmissive)&&(t.setUniform1i("texEmission",Lr),e.bindTexture(this._textureEmissive.glTexture,Lr)),Object(o.P)(this._textureOcclusion)&&(t.setUniform1i("texOcclusion",Br),e.bindTexture(this._textureOcclusion.glTexture,Br)),Object(o.P)(this._textureMetallicRoughness)&&(t.setUniform1i("texMetallicRoughness",Dr),e.bindTexture(this._textureMetallicRoughness.glTexture,Dr))}bindTextureScale(e,t){const r=Object(o.P)(this._texture)&&this._texture.glTexture;r&&r.descriptor.textureCoordinateScaleFactor?t.setUniform2fv("textureCoordinateScaleFactor",r.descriptor.textureCoordinateScaleFactor):t.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquireIfNotUndefined(e){if(!Object(o.J)(e))return this._textureIDs.add(e),this._textureRepository.acquire(e,this._initTransparent)}_releaseIfNotUndefined(e){Object(o.J)(e)||(this._textureIDs.delete(e),this._textureRepository.release(e))}}function Vr(e,t,r){const o=r.parameters,i=r.paddingPixelsOverride;return Hr.scale=Math.min(o.divisor/(t-o.offset),1),Hr.factor=function(e){return Math.abs(e*e*e)}(e),Hr.minPixelSize=o.minPixelSize,Hr.paddingPixels=i,Hr}function kr(e,t,r,i){return function(e,t){return Math.max(Object(o.cZ)(e*t.scale,e,t.factor),function(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}(e,t))}(e,Vr(t,r,i))}const Hr={scale:0,factor:0,minPixelSize:0,paddingPixels:0},Gr=Object(u.f)();function $r(e,t,r,i,n,a,s){const c=function(e){return!!Object(o.P)(e)&&!e.visible}(t),l=r.tolerance;if(!c)if(e.boundingInfo)J(0===e.primitiveType),Wr(e.boundingInfo,i,n,l,a,s);else{const t=e.indices.get("position"),r=e.vertexAttributes.get("position");Jr(i,n,0,t.length/3,t,r,void 0,a,s)}}const qr=Object(i.d)();function Wr(e,t,r,i,a,s){if(Object(o.J)(e))return;const c=function(e,t,r){return Object(n.n)(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}(t,r,qr);if(Object(u.j)(Gr,e.getBBMin()),Object(u.l)(Gr,e.getBBMax()),Object(o.P)(a)&&a.applyToAabb(Gr),function(e,t,r,o){return function(e,t,r,o,i){const n=(e[0]-o-t[0])*r[0],a=(e[3]+o-t[0])*r[0];let s=Math.min(n,a),c=Math.max(n,a);const l=(e[1]-o-t[1])*r[1],d=(e[4]+o-t[1])*r[1];if(c=Math.min(c,Math.max(l,d)),c<0)return!1;if(s=Math.max(s,Math.min(l,d)),s>c)return!1;const u=(e[2]-o-t[2])*r[2],f=(e[5]+o-t[2])*r[2];return c=Math.min(c,Math.max(u,f)),!(c<0)&&(s=Math.max(s,Math.min(u,f)),!(s>c)&&s<i)}(e,t,r,o,1/0)}(Gr,t,c,i)){const{primitiveIndices:o,indices:n,position:c}=e,l=o?o.length:n.length/3;if(l>oo){const o=e.getChildren();if(void 0!==o){for(let e=0;e<8;++e)void 0!==o[e]&&Wr(o[e],t,r,i,a,s);return}}Jr(t,r,0,l,n,c,o,a,s)}}const Xr=Object(i.d)();function Jr(e,t,r,i,n,a,s,c,l){if(s)return function(e,t,r,i,n,a,s,c,l){const d=a.data,u=a.stride||a.size,f=e[0],m=e[1],p=e[2],h=t[0]-f,v=t[1]-m,g=t[2]-p;for(let e=r;e<i;++e){const t=s[e];let r=3*t,i=u*n[r++],a=d[i++],b=d[i++],x=d[i];i=u*n[r++];let O=d[i++],y=d[i++],w=d[i];i=u*n[r];let T=d[i++],S=d[i++],_=d[i];Object(o.P)(c)&&([a,b,x]=c.applyToVertex(a,b,x,e),[O,y,w]=c.applyToVertex(O,y,w,e),[T,S,_]=c.applyToVertex(T,S,_,e));const j=O-a,C=y-b,M=w-x,P=T-a,A=S-b,I=_-x,F=v*I-A*g,R=g*P-I*h,L=h*A-P*v,B=j*F+C*R+M*L;if(Math.abs(B)<=Number.EPSILON)continue;const D=f-a,z=m-b,E=p-x,N=D*F+z*R+E*L;if(B>0){if(N<0||N>B)continue}else if(N>0||N<B)continue;const U=z*M-C*E,V=E*j-M*D,k=D*C-j*z,H=h*U+v*V+g*k;if(B>0){if(H<0||N+H>B)continue}else if(H>0||N+H<B)continue;const G=(P*U+A*V+I*k)/B;G>=0&&l(G,Qr(j,C,M,P,A,I,Xr),t)}}(e,t,r,i,n,a,s,c,l);const d=a.data,u=a.stride||a.size,f=e[0],m=e[1],p=e[2],h=t[0]-f,v=t[1]-m,g=t[2]-p;for(let e=r,t=3*r;e<i;++e){let r=u*n[t++],i=d[r++],a=d[r++],s=d[r];r=u*n[t++];let b=d[r++],x=d[r++],O=d[r];r=u*n[t++];let y=d[r++],w=d[r++],T=d[r];Object(o.P)(c)&&([i,a,s]=c.applyToVertex(i,a,s,e),[b,x,O]=c.applyToVertex(b,x,O,e),[y,w,T]=c.applyToVertex(y,w,T,e));const S=b-i,_=x-a,j=O-s,C=y-i,M=w-a,P=T-s,A=v*P-M*g,I=g*C-P*h,F=h*M-C*v,R=S*A+_*I+j*F;if(Math.abs(R)<=Number.EPSILON)continue;const L=f-i,B=m-a,D=p-s,z=L*A+B*I+D*F;if(R>0){if(z<0||z>R)continue}else if(z>0||z<R)continue;const E=B*j-_*D,N=D*S-j*L,U=L*_-S*B,V=h*E+v*N+g*U;if(R>0){if(V<0||z+V>R)continue}else if(V>0||z+V<R)continue;const k=(C*E+M*N+P*U)/R;k>=0&&l(k,Qr(S,_,j,C,M,P,Xr),e)}}const Yr=Object(i.d)(),Kr=Object(i.d)();function Qr(e,t,r,o,i,a,s){return Object(n.n)(Yr,e,t,r),Object(n.n)(Kr,o,i,a),Object(n.f)(s,Yr,Kr),Object(n.m)(s,s),s}function Zr(e,t,r){if(!e)return;const o=e.parameters,i=e.paddingPixelsOverride;t.setUniform4f(r,o.divisor,o.offset,o.minPixelSize,i)}function eo(e,t){const r=t?eo(t):{};for(const t in e){let o=e[t];o&&o.forEach&&(o=to(o)),null==o&&t in r||(r[t]=o)}return r}function to(e){const t=[];return e.forEach((e=>t.push(e))),t}const ro={multiply:1,ignore:2,replace:3,tint:4},oo=1e3,io={position:0,normal:1,uv0:2,color:3,size:4,tangent:4,auxpos1:5,symbolColor:5,auxpos2:6,featureAttribute:6,instanceFeatureAttribute:6,instanceColor:7,model:8,modelNormal:12,modelOriginHi:11,modelOriginLo:15};class no extends ee{constructor(e,t){super(),this.type=3,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=io,this._params=eo(e,t),this.validateParameterValues(this._params)}dispose(){}get params(){return this._params}update(e){return!1}setParameterValues(e){(function(e,t){let r=!1;for(const o in t){const i=t[o];void 0!==i&&(r=!0,Array.isArray(i)?e[o]=i.slice():e[o]=i)}return r})(this._params,e)&&(this.validateParameterValues(this._params),this.parametersChanged())}validateParameterValues(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}isVisibleInPass(e){return!0}get renderOccluded(){return this.params.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){Object(o.P)(this.materialRepository)&&this.materialRepository.materialChanged(this)}}function ao(e,t,r,o){const i=r.typedBuffer,n=r.typedBufferStride,a=e.length;o*=n;for(let r=0;r<a;++r){const a=2*e[r];i[o]=t[a],i[o+1]=t[a+1],o+=n}}function so(e,t,r,o,i){const n=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(o*=a,null==i||1===i)for(let r=0;r<s;++r){const i=3*e[r];n[o]=t[i],n[o+1]=t[i+1],n[o+2]=t[i+2],o+=a}else for(let r=0;r<s;++r){const s=3*e[r];for(let e=0;e<i;++e)n[o]=t[s],n[o+1]=t[s+1],n[o+2]=t[s+2],o+=a}}function co(e,t,r,o,i=1){const n=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(o*=a,1===i)for(let r=0;r<s;++r){const i=4*e[r];n[o]=t[i],n[o+1]=t[i+1],n[o+2]=t[i+2],n[o+3]=t[i+3],o+=a}else for(let r=0;r<s;++r){const s=4*e[r];for(let e=0;e<i;++e)n[o]=t[s],n[o+1]=t[s+1],n[o+2]=t[s+2],n[o+3]=t[s+3],o+=a}}function lo(e,t,r,o,i,n=1){if(r){const a=o.typedBuffer,s=o.typedBufferStride,c=e.length,l=r[0],d=r[1],u=r[2],f=r[4],m=r[5],p=r[6],h=r[8],v=r[9],g=r[10],b=r[12],x=r[13],O=r[14];if(i*=s,1===n)for(let r=0;r<c;++r){const o=3*e[r],n=t[o],c=t[o+1],y=t[o+2];a[i]=l*n+f*c+h*y+b,a[i+1]=d*n+m*c+v*y+x,a[i+2]=u*n+p*c+g*y+O,i+=s}else for(let r=0;r<c;++r){const o=3*e[r],c=t[o],y=t[o+1],w=t[o+2],T=l*c+f*y+h*w+b,S=d*c+m*y+v*w+x,_=u*c+p*y+g*w+O;for(let e=0;e<n;++e)a[i]=T,a[i+1]=S,a[i+2]=_,i+=s}}else so(e,t,o,i,n)}function uo(e,t,r,o,i,n){if(r){const a=r,s=o.typedBuffer,c=o.typedBufferStride,l=e.length,d=a[0],u=a[1],f=a[2],m=a[4],p=a[5],h=a[6],v=a[8],g=a[9],b=a[10],x=Math.abs(1-d*d+m*m+v*v)>1e-5||Math.abs(1-u*u+p*p+g*g)>1e-5||Math.abs(1-f*f+h*h+b*b)>1e-5,O=1e-6,y=1-O;if(i*=c,1===n)for(let r=0;r<l;++r){const o=3*e[r],n=t[o],a=t[o+1],l=t[o+2];let w=d*n+m*a+v*l,T=u*n+p*a+g*l,S=f*n+h*a+b*l;if(x){const e=w*w+T*T+S*S;if(e<y&&e>O){const t=Math.sqrt(e);w/=t,T/=t,S/=t}}s[i+0]=w,s[i+1]=T,s[i+2]=S,i+=c}else for(let r=0;r<l;++r){const o=3*e[r],a=t[o],l=t[o+1],w=t[o+2];let T=d*a+m*l+v*w,S=u*a+p*l+g*w,_=f*a+h*l+b*w;if(x){const e=T*T+S*S+_*_;if(e<y&&e>O){const t=Math.sqrt(e);T/=t,S/=t,_/=t}}for(let e=0;e<n;++e)s[i+0]=T,s[i+1]=S,s[i+2]=_,i+=c}}else so(e,t,o,i,n)}function fo(e,t,r,o,i,n=1){const a=o.typedBuffer,s=o.typedBufferStride,c=e.length;if(i*=s,1===n){if(4===r)for(let r=0;r<c;++r){const o=4*e[r];a[i]=t[o],a[i+1]=t[o+1],a[i+2]=t[o+2],a[i+3]=t[o+3],i+=s}else if(3===r)for(let r=0;r<c;++r){const o=3*e[r];a[i]=t[o],a[i+1]=t[o+1],a[i+2]=t[o+2],a[i+3]=255,i+=s}}else if(4===r)for(let r=0;r<c;++r){const o=4*e[r];for(let e=0;e<n;++e)a[i]=t[o],a[i+1]=t[o+1],a[i+2]=t[o+2],a[i+3]=t[o+3],i+=s}else if(3===r)for(let r=0;r<c;++r){const o=3*e[r];for(let e=0;e<n;++e)a[i]=t[o],a[i+1]=t[o+1],a[i+2]=t[o+2],a[i+3]=255,i+=s}}function mo(e,...t){let r="";for(let o=0;o<t.length;o++)r+=e[o]+t[o];return r+=e[e.length-1],r}!function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(mo||(mo={}));const po=.001;function ho(e,t){const r=e.fragment;switch(t.alphaDiscardMode){case 0:r.code.add(mo`
        #define discardOrAdjustAlpha(color) { if (color.a < ${mo.float(po)}) { discard; } }
      `);break;case 1:r.code.add(mo`
        void discardOrAdjustAlpha(inout vec4 color) {
          color.a = 1.0;
        }
      `);break;case 2:r.uniforms.add("textureAlphaCutoff","float"),r.code.add(mo`
        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }
      `);break;case 3:e.fragment.uniforms.add("textureAlphaCutoff","float"),e.fragment.code.add(mo`
        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }
      `)}}const vo=Object(b.b)(770,1,771,771),go=Object(b.e)(1,1),bo=Object(b.e)(0,771);function xo(e){return 2===e?null:1===e?bo:go}const Oo={factor:-1,units:-2};function yo(e){return e?Oo:null}function wo(e){return 3===e||2===e?513:515}class To{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}function So(e={}){return(t,r)=>{var i,n;t._parameterNames=null!=(i=t._parameterNames)?i:[],t._parameterNames.push(r);const a=t._parameterNames.length-1,s=e.count||2,c=Math.ceil(Object(o.ck)(s)),l=null!=(n=t._parameterBits)?n:[0];let d=0;for(;l[d]+c>16;)d++,d>=l.length&&l.push(0);t._parameterBits=l;const u=l[d],f=(1<<c)-1<<u;l[d]+=c,Object.defineProperty(t,r,{get(){return this[a]},set(e){if(this[a]!==e&&(this[a]=e,this._keyDirty=!0,this._parameterBits[d]=this._parameterBits[d]&~f|+e<<u&f,"number"!=typeof e&&"boolean"!=typeof e))throw"Configuration value for "+r+" must be boolean or number, got "+typeof e}})}}var _o;!function(e){function t(e,t,r){Object(a.a)(jo,r,t),e.setUniform3fv("localOrigin",t),e.setUniformMatrix4fv("view",jo)}e.bindCamPosition=function(e,t,r){e.setUniform3f("camPos",r[3]-t[0],r[7]-t[1],r[11]-t[2])},e.bindProjectionMatrix=function(e,t){e.setUniformMatrix4fv("proj",t)},e.bindNearFar=function(e,t){e.setUniform2fv("nearFar",t)},e.bindViewCustomOrigin=t,e.bindView=function(e,r){t(e,r.origin,r.camera.viewMatrix)},e.bindViewport=function(e,t){e.setUniform4fv("viewport",t.camera.fullViewport)}}(_o||(_o={}));const jo=Object(O.a)();function Co(e,t){if(t.slicePlaneEnabled){e.extensions.add("GL_OES_standard_derivatives"),t.sliceEnabledForVertexPrograms&&(e.vertex.uniforms.add("slicePlaneOrigin","vec3"),e.vertex.uniforms.add("slicePlaneBasis1","vec3"),e.vertex.uniforms.add("slicePlaneBasis2","vec3")),e.fragment.uniforms.add("slicePlaneOrigin","vec3"),e.fragment.uniforms.add("slicePlaneBasis1","vec3"),e.fragment.uniforms.add("slicePlaneBasis2","vec3");const r=mo`
      struct SliceFactors {
        float front;
        float side0;
        float side1;
        float side2;
        float side3;
      };

      SliceFactors calculateSliceFactors(vec3 pos) {
        vec3 rel = pos - slicePlaneOrigin;

        vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
        float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);

        float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
        float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);

        float basis1Dot = dot(slicePlaneBasis1, rel);
        float basis2Dot = dot(slicePlaneBasis2, rel);

        return SliceFactors(
          dot(slicePlaneNormal, pos) + slicePlaneW,
          -basis1Dot - basis1Len2,
          basis1Dot - basis1Len2,
          -basis2Dot - basis2Len2,
          basis2Dot - basis2Len2
        );
      }

      bool sliceByFactors(SliceFactors factors) {
        return factors.front < 0.0
          && factors.side0 < 0.0
          && factors.side1 < 0.0
          && factors.side2 < 0.0
          && factors.side3 < 0.0;
      }

      bool sliceEnabled() {
        // a slicePlaneBasis1 vector of zero length is used to disable slicing in the shader during draped rendering.
        return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
      }

      bool sliceByPlane(vec3 pos) {
        return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
      }

      #define rejectBySlice(_pos_) sliceByPlane(_pos_)
      #define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }
    `,o=mo`
      vec4 applySliceHighlight(vec4 color, vec3 pos) {
        SliceFactors factors = calculateSliceFactors(pos);

        if (sliceByFactors(factors)) {
          return color;
        }

        const float HIGHLIGHT_WIDTH = 1.0;
        const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);

        factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
        factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
        factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
        factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
        factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);

        float highlightFactor = (1.0 - step(0.5, factors.front))
          * (1.0 - step(0.5, factors.side0))
          * (1.0 - step(0.5, factors.side1))
          * (1.0 - step(0.5, factors.side2))
          * (1.0 - step(0.5, factors.side3));

        return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
      }
    `,i=t.sliceHighlightDisabled?mo`#define highlightSlice(_color_, _pos_) (_color_)`:mo`
        ${o}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r),e.fragment.code.add(i)}else{const r=mo`
      #define rejectBySlice(_pos_) false
      #define discardBySlice(_pos_) {}
      #define highlightSlice(_color_, _pos_) (_color_)
    `;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r)}}!function(e){e.bindUniformsWithOrigin=function(t,r,o){e.bindUniforms(t,r,o.slicePlane,o.origin)},e.bindUniforms=function(e,t,r,a){t.slicePlaneEnabled&&(Object(o.P)(r)?(a?(Object(n.k)(Mo,r.origin,a),e.setUniform3fv("slicePlaneOrigin",Mo)):e.setUniform3fv("slicePlaneOrigin",r.origin),e.setUniform3fv("slicePlaneBasis1",r.basis1),e.setUniform3fv("slicePlaneBasis2",r.basis2)):(e.setUniform3fv("slicePlaneBasis1",i.b),e.setUniform3fv("slicePlaneBasis2",i.b),e.setUniform3fv("slicePlaneOrigin",i.b)))}}(Co||(Co={}));const Mo=Object(i.d)(),Po=L(1,1,0,1),Ao=L(1,0,1,1);function Io(e){e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("highlightViewportPixelSz","vec4"),e.fragment.constants.add("occludedHighlightFlag","vec4",Po).add("unoccludedHighlightFlag","vec4",Ao),e.fragment.code.add(mo`
    void outputHighlight() {
      vec4 fragCoord = gl_FragCoord;

      float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
      if (fragCoord.z > sceneDepth + 5e-7) {
        gl_FragColor = occludedHighlightFlag;
      }
      else {
        gl_FragColor = unoccludedHighlightFlag;
      }
    }
  `)}function Fo(e,t){t.vvInstancingEnabled&&(t.vvSize||t.vvColor)&&e.attributes.add("instanceFeatureAttribute","vec4"),t.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),e.vertex.uniforms.add("vvSymbolAnchor","vec3"),e.vertex.code.add(mo`
      vec3 vvScale(vec4 _featureAttribute) {
        return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
      }

      vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
        return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
      }
    `),e.vertex.code.add(mo`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.vvInstancingEnabled?mo`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):e.vertex.code.add(mo`
      vec4 localPosition() { return vec4(position, 1.0); }

      vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }
    `),t.vvColor?(e.vertex.constants.add("vvColorNumber","int",8),e.vertex.code.add(mo`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${t.vvInstancingEnabled?mo`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):e.vertex.code.add(mo`
      vec4 vvColor() { return vec4(1.0); }
    `)}function Ro(e){e.vertex.code.add(mo`
    float screenSizePerspectiveMinSize(float size, vec4 factor) {
      float nonZeroSize = 1.0 - step(size, 0.0);

      return (
        factor.z * (
          1.0 +
          // Multiply by nzs ensures if size is 0, then we ignore proportionally scaled padding
          nonZeroSize *
          2.0 * factor.w / (
            size + (1.0 - nonZeroSize) // Adding 1 - nzs ensures we divide either by size, or by 1
          )
        )
      );
    }
  `),e.vertex.code.add(mo`
    float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
      return absCosAngle * absCosAngle * absCosAngle;
    }
  `),e.vertex.code.add(mo`
    vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
      return vec4(
        min(params.x / (distanceToCamera - params.y), 1.0),
        screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
        params.z,
        params.w
      );
    }
  `),e.vertex.code.add(mo`
    float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
      return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
    }
  `),e.vertex.code.add(mo`
    float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
      return applyScreenSizePerspectiveScaleFactorFloat(
        size,
        screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
      );
    }
  `),e.vertex.code.add(mo`
    vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
      return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);
    }
  `),e.vertex.code.add(mo`
    vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
      return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
    }
  `)}function Lo(e,t){const r=e.vertex.code;t.verticalOffsetEnabled?(e.vertex.uniforms.add("verticalOffset","vec4"),t.screenSizePerspectiveEnabled&&(e.include(Ro),e.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),r.add(mo`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${1===t.viewingMode?mo`vec3 worldNormal = normalize(worldPos + localOrigin);`:mo`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${t.screenSizePerspectiveEnabled?mo`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:mo`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):r.add(mo`
    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }
    `)}!function(e){e.bindOutputHighlight=function(e,t,r){e.bindTexture(r.highlightDepthTexture,5),t.setUniform1i("depthTex",5),t.setUniform4f("highlightViewportPixelSz",0,0,r.inverseViewport[0],r.inverseViewport[1])}}(Io||(Io={})),function(e){function t(e,t){t.vvSizeEnabled&&(e.setUniform3fv("vvSizeMinSize",t.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",t.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",t.vvSizeOffset),e.setUniform3fv("vvSizeFactor",t.vvSizeFactor)),t.vvColorEnabled&&(e.setUniform1fv("vvColorValues",t.vvColorValues),e.setUniform4fv("vvColorColors",t.vvColorColors))}e.bindUniforms=t,e.bindUniformsWithOpacity=function(e,r){t(e,r),r.vvOpacityEnabled&&(e.setUniform1fv("vvOpacityValues",r.vvOpacityValues),e.setUniform1fv("vvOpacityOpacities",r.vvOpacityOpacities))},e.bindUniformsForSymbols=function(e,r){t(e,r),r.vvSizeEnabled&&(e.setUniform3fv("vvSymbolAnchor",r.vvSymbolAnchor),e.setUniformMatrix3fv("vvSymbolRotationMatrix",r.vvSymbolRotationMatrix))}}(Fo||(Fo={})),function(e){e.bindUniforms=function(e,t){if(t.screenSizePerspective){Zr(t.screenSizePerspective,e,"screenSizePerspective");Zr(t.screenSizePerspectiveAlignment||t.screenSizePerspective,e,"screenSizePerspectiveAlignment")}}}(Ro||(Ro={})),function(e){e.bindUniforms=function(e,t,r){if(!t.verticalOffset)return;const o=function(e,t,r,o=Bo){return o.screenLength=e.screenLength,o.perDistance=Math.tan(.5*t)/(.5*r),o.minWorldLength=e.minWorldLength,o.maxWorldLength=e.maxWorldLength,o}(t.verticalOffset,r.camera.fovY,r.camera.fullViewport[3]),i=r.camera.pixelRatio||1;e.setUniform4f("verticalOffset",o.screenLength*i,o.perDistance,o.minWorldLength,o.maxWorldLength)}}(Lo||(Lo={}));const Bo={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0};function Do(e,t){e.fragment.uniforms.add("terrainDepthTexture","sampler2D"),e.fragment.uniforms.add("cameraNearFar","vec2"),e.fragment.uniforms.add("inverseViewport","vec2"),e.fragment.code.add(mo`
    //Compare the linearized depths of the fragment and the terrain. If fragment is on the wrong side of the terrain, discard it.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, cameraNearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `)}const zo={mask:255},Eo={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:0}},No={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7681}};function Uo(e){e.code.add(mo`
    // This is the maximum float value representable as 32bit fixed point,
    // it is rgba2float(vec4(1)) inlined.
    const float MAX_RGBA_FLOAT =
      255.0 / 256.0 +
      255.0 / 256.0 / 256.0 +
      255.0 / 256.0 / 256.0 / 256.0 +
      255.0 / 256.0 / 256.0 / 256.0 / 256.0;

    // Factors to convert to fixed point, i.e. factors (256^0, 256^1, 256^2, 256^3)
    const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);

    vec4 float2rgba(const float value) {
      // Make sure value is in the domain we can represent
      float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);

      // Decompose value in 32bit fixed point parts represented as
      // uint8 rgba components. Decomposition uses the fractional part after multiplying
      // by a power of 256 (this removes the bits that are represented in the previous
      // component) and then converts the fractional part to 8bits.
      vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);

      // Convert uint8 values (from 0 to 255) to floating point representation for
      // the shader
      const float toU8AsFloat = 1.0 / 255.0;

      return fixedPointU8 * toU8AsFloat;
    }

    // Factors to convert rgba back to float
    const vec4 RGBA_2_FLOAT_FACTORS = vec4(
      255.0 / (256.0),
      255.0 / (256.0 * 256.0),
      255.0 / (256.0 * 256.0 * 256.0),
      255.0 / (256.0 * 256.0 * 256.0 * 256.0)
    );

    float rgba2float(vec4 rgba) {
      // Convert components from 0->1 back to 0->255 and then
      // add the components together with their corresponding
      // fixed point factors, i.e. (256^1, 256^2, 256^3, 256^4)
      return dot(rgba, RGBA_2_FLOAT_FACTORS);
    }
  `)}function Vo(e){e.fragment.include(Uo),e.fragment.uniforms.add("uShadowMapTex","sampler2D"),e.fragment.uniforms.add("uShadowMapNum","int"),e.fragment.uniforms.add("uShadowMapDistance","vec4"),e.fragment.uniforms.add("uShadowMapMatrix","mat4",4),e.fragment.uniforms.add("uDepthHalfPixelSz","float"),e.fragment.code.add(mo`
    int chooseCascade(float _linearDepth, out mat4 mat) {
      vec4 distance = uShadowMapDistance;
      float depth = _linearDepth;

      //choose correct cascade
      int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;

      mat = i == 0 ? uShadowMapMatrix[0] : i == 1 ? uShadowMapMatrix[1] : i == 2 ? uShadowMapMatrix[2] : uShadowMapMatrix[3];

      return i;
    }

    vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
      vec4 lv = mat * vec4(_vpos, 1.0);
      lv.xy /= lv.w;
      return 0.5 * lv.xyz + vec3(0.5);
    }

    vec2 cascadeCoordinates(int i, vec3 lvpos) {
      return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
    }

    float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
      return rgba2float(texture2D(_depthTex, uv));
    }

    float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
      return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
    }

    float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
      float texSize = 0.5 / halfPixelSize;

      // filter, offset by half pixels
      vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);

      float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
      float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);

      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
    }

    float readShadowMap(const in vec3 _vpos, float _linearDepth) {
      mat4 mat;
      int i = chooseCascade(_linearDepth, mat);

      if (i >= uShadowMapNum) { return 0.0; }

      vec3 lvpos = lightSpacePosition(_vpos, mat);

      // vertex completely outside? -> no shadow
      if (lvpos.z >= 1.0) { return 0.0; }
      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }

      // calc coord in cascade texture
      vec2 uv = cascadeCoordinates(i, lvpos);

      return filterShadow(uv, lvpos, uDepthHalfPixelSz, uShadowMapTex);
    }
  `)}!function(e){e.bindUniforms=function(e,t,r){t.shadowMappingEnabled&&(t.shadowMap.bind(e,r),t.shadowMap.bindView(e,t.origin))},e.bindViewCustomOrigin=function(e,t,r){t.shadowMappingEnabled&&t.shadowMap.bindView(e,r)},e.bindView=function(e,t){t.shadowMappingEnabled&&t.shadowMap.bindView(e,t.origin)}}(Vo||(Vo={}));class ko{constructor(e){this.context=e,this.svgAlwaysPremultipliesAlpha=!1,this._doublePrecisionRequiresObfuscation=null,Object(w.a)(e).then((e=>{this.svgAlwaysPremultipliesAlpha=!e}))}get doublePrecisionRequiresObfuscation(){if(Object(o.J)(this._doublePrecisionRequiresObfuscation)){const e=Go(this.context,!1),t=Go(this.context,!0);this._doublePrecisionRequiresObfuscation=0!==e&&(0===t||e/t>5)}return this._doublePrecisionRequiresObfuscation}}let Ho=null;function Go(e,t){const r=new y.g(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1});const o=x.e.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),n=new x.a(e,{a_pos:0},{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:o}),a=Object(i.f)(5633261.287538229,2626832.878767164,1434988.0495278358),s=Object(i.f)(5633271.46742708,2626873.6381334523,1434963.231608387),c=function(r,o){const i=new x.c(e,`\n\n  precision highp float;\n\n  attribute vec2 a_pos;\n\n  uniform vec3 u_highA;\n  uniform vec3 u_lowA;\n  uniform vec3 u_highB;\n  uniform vec3 u_lowB;\n\n  varying vec4 v_color;\n\n  ${t?"#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION":""}\n\n  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION\n\n  vec3 dpPlusFrc(vec3 a, vec3 b) {\n    return mix(a, a + b, vec3(notEqual(b, vec3(0))));\n  }\n\n  vec3 dpMinusFrc(vec3 a, vec3 b) {\n    return mix(vec3(0), a - b, vec3(notEqual(a, b)));\n  }\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = dpPlusFrc(hiA, hiB);\n    vec3 e = dpMinusFrc(t1, hiA);\n    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\n    return t1 + t2;\n  }\n\n  #else\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = hiA + hiB;\n    vec3 e = t1 - hiA;\n    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\n    return t1 + t2;\n  }\n\n  #endif\n\n  const float MAX_RGBA_FLOAT =\n    255.0 / 256.0 +\n    255.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n  vec4 float2rgba(const float value) {\n    // Make sure value is in the domain we can represent\n    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n    // Decompose value in 32bit fixed point parts represented as\n    // uint8 rgba components. Decomposition uses the fractional part after multiplying\n    // by a power of 256 (this removes the bits that are represented in the previous\n    // component) and then converts the fractional part to 8bits.\n    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n    // Convert uint8 values (from 0 to 255) to floating point representation for\n    // the shader\n    const float toU8AsFloat = 1.0 / 255.0;\n\n    return fixedPointU8 * toU8AsFloat;\n  }\n\n  void main() {\n    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);\n\n    v_color = float2rgba(val.z / 25.0);\n\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  `,"\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor = v_color;\n  }\n  ",{a_pos:0}),n=new Float32Array(6);Mr(r,n,3);const a=new Float32Array(6);return Mr(o,a,3),e.bindProgram(i),i.setUniform3f("u_highA",n[0],n[2],n[4]),i.setUniform3f("u_lowA",n[1],n[3],n[5]),i.setUniform3f("u_highB",a[0],a[2],a[4]),i.setUniform3f("u_lowB",a[1],a[3],a[5]),i}(a,s),l=e.getBoundFramebufferObject(),{x:d,y:u,width:f,height:m}=e.getViewport();e.bindFramebuffer(r),e.setViewport(0,0,1,1),e.bindVAO(n),e.drawArrays(5,0,4);const p=new Uint8Array(4);r.readPixels(0,0,1,1,6408,5121,p),c.dispose(),n.dispose(!1),o.dispose(),r.dispose(),e.setViewport(d,u,f,m),e.bindFramebuffer(l);const h=(a[2]-s[2])/25,v=Y(p);return Math.abs(h-v)}function $o({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(mo`
      vec3 dpPlusFrc(vec3 a, vec3 b) {
        return mix(a, a + b, vec3(notEqual(b, vec3(0))));
      }

      vec3 dpMinusFrc(vec3 a, vec3 b) {
        return mix(vec3(0), a - b, vec3(notEqual(a, b)));
      }

      // based on https://www.thasler.com/blog/blog/glsl-part2-emu
      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
        vec3 t1 = dpPlusFrc(hiA, hiB);
        vec3 e = dpMinusFrc(t1, hiA);
        vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
        return t1 + t2;
      }
    `):e.add(mo`
      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
        vec3 t1 = hiA + hiB;
        vec3 e = t1 - hiA;
        vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
        return t1 + t2;
      }
    `)}function qo(e){return!!Object(h.a)("force-double-precision-obfuscation")||function(e){return(Object(o.J)(Ho)||Ho.context!==e)&&(Ho=new ko(e)),Ho}(e).doublePrecisionRequiresObfuscation}function Wo(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),t.instancedDoublePrecision&&(e.vertex.include($o,t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const r=[mo`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,mo`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?mo`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,mo`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,mo`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,t.vertexTangets?mo`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:mo``];e.vertex.code.add(r[0]),e.vertex.code.add(r[1]),e.vertex.code.add(r[2]),2===t.output&&e.vertex.code.add(r[3]),e.vertex.code.add(r[4])}!function(e){e.Uniforms=class{},e.bindCustomOrigin=function(e,t){(function(e,t,r,o){for(let i=0;i<o;++i)Pr[0]=e[i],Mr(Pr,Ar,1),t[i]=Ar[0],r[i]=Ar[1]})(t,Xo,Jo,3),e.setUniform3fv("viewOriginHi",Xo),e.setUniform3fv("viewOriginLo",Jo)}}(Wo||(Wo={}));const Xo=Object(i.d)(),Jo=Object(i.d)();function Yo(e,t){1===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(mo`
      void forwardTextureCoordinates() {
        vuv0 = uv0;
      }
    `)),2===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add("uvRegion","vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(mo`
      void forwardTextureCoordinates() {
        vuv0 = uv0;
        vuvRegion = uvRegion;
      }
    `)),0===t.attributeTextureCoordinates&&e.vertex.code.add(mo`
      void forwardTextureCoordinates() {}
    `)}function Ko(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(mo`
    #ifndef GL_EXT_shader_texture_lod
      float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
        float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
        return max(0.0, 0.5 * log2(deltaMaxSqr));
      }
    #endif

    vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
      //[umin, vmin, umax, vmax]
      vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
      vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;

      // calculate derivative of continuous texture coordinate
      // to avoid mipmapping artifacts caused by manual wrapping in shader
      // clamp the derivatives to avoid discoloring when zooming out.
      float maxdUV = 0.125; // Emprirically tuned compromise between discoloring and aliasing noise.
      vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
      vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;

      #ifdef GL_EXT_shader_texture_lod
        return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
      #else
        // use bias to compensate for difference in automatic vs desired mipmap level
        vec2 dUVdxAuto = dFdx(uvAtlas);
        vec2 dUVdyAuto = dFdy(uvAtlas);
        float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
        float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);

        return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
      #endif
    }
  `)}function Qo(e,t){e.include(Yo,t),e.fragment.code.add(mo`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===t.attributeTextureCoordinates&&e.fragment.code.add(mo`
      vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
        return texture2D(tex, params.uv);
      }
    `),2===t.attributeTextureCoordinates&&(e.include(Ko),e.fragment.code.add(mo`
    vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
        return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
      }
    `))}function Zo(e,t){const r=e.fragment,o=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&o&&e.include(Qo,t),2!==t.pbrMode?(0===t.pbrMode&&r.code.add(mo`
      float getBakedOcclusion() { return 1.0; }
  `),1===t.pbrMode&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(mo`
      vec3 mrr;
      vec3 emission;
      float occlusion;
    `),t.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(mo`
      void applyMetallnessAndRoughness(TextureLookupParameter params) {
        vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;

        mrr[0] *= metallicRoughness.b;
        mrr[1] *= metallicRoughness.g;
      }`)),t.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(mo`
      void applyEmission(TextureLookupParameter params) {
        emission *= textureLookup(texEmission, params).rgb;
      }`)),t.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(mo`
      void applyOcclusion(TextureLookupParameter params) {
        occlusion *= textureLookup(texOcclusion, params).r;
      }

      float getBakedOcclusion() {
        return occlusion;
      }
      `)):r.code.add(mo`
      float getBakedOcclusion() { return 1.0; }
      `),r.code.add(mo`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${o?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(mo`
      const vec3 mrr = vec3(0.0, 0.6, 0.2);
      const vec3 emission = vec3(0.0);
      float occlusion = 1.0;

      void applyPBRFactors() {}

      float getBakedOcclusion() { return 1.0; }
    `)}function ei(e,t){t.linearDepth?e.vertex.code.add(mo`
    vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
      vec4 eye = view * vec4(pos, 1.0);
      depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
      return proj * eye;
    }
    `):e.vertex.code.add(mo`
    vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
      // Make sure the order of operations is the same as in transformPositionWithDepth.
      return proj * (view * vec4(pos, 1.0));
    }
    `)}Object(c.g)(0,.6,.2),function(e){e.bindUniforms=function(e,t,r=!1){r||(e.setUniform3fv("mrrFactors",t.mrrFactors),e.setUniform3fv("emissionFactor",t.emissiveFactor))}}(Zo||(Zo={}));const ti=o.n.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class ri{constructor(){this.includedModules=new Map}include(e,t){this.includedModules.has(e)?this.includedModules.get(e)!==t&&ti.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,t),e(this.builder,t))}}class oi extends ri{constructor(){super(...arguments),this.vertex=new ai,this.fragment=new ai,this.attributes=new si,this.varyings=new ci,this.extensions=new li,this.constants=new di}get builder(){return this}generateSource(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),o=this.varyings.generateSource(),i="vertex"===e?this.vertex:this.fragment,n=i.uniforms.generateSource(),a=i.code.generateSource(),s="vertex"===e?fi:ui,c=this.constants.generateSource().concat(i.constants.generateSource());return`\n${t.join("\n")}\n\n${s}\n\n${c.join("\n")}\n\n${n.join("\n")}\n\n${r.join("\n")}\n\n${o.join("\n")}\n\n${a.join("\n")}`}}class ii{constructor(){this._entries=new Array,this._set=new Set}add(e,t,r){const o=`${e}_${t}_${r}`;return this._set.has(o)||(this._entries.push([e,t,r]),this._set.add(o)),this}generateSource(){return this._entries.map((e=>`uniform ${e[1]} ${e[0]}${(e=>e?`[${e}]`:"")(e[2])};`))}}class ni{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class ai extends ri{constructor(){super(...arguments),this.uniforms=new ii,this.code=new ni,this.constants=new di}get builder(){return this}}class si{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`attribute ${e[1]} ${e[0]};`))}}class ci{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}}class li{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?li.ALLOWLIST_VERTEX:li.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}li.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],li.ALLOWLIST_VERTEX=[];class di{constructor(){this._entries=[]}add(e,t,r){let o="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":o=di.numberToFloatStr(r);break;case"int":o=di.numberToIntStr(r);break;case"bool":o=r.toString();break;case"vec2":o=`vec2(${di.numberToFloatStr(r[0])},                            ${di.numberToFloatStr(r[1])})`;break;case"vec3":o=`vec3(${di.numberToFloatStr(r[0])},                            ${di.numberToFloatStr(r[1])},                            ${di.numberToFloatStr(r[2])})`;break;case"vec4":o=`vec4(${di.numberToFloatStr(r[0])},                            ${di.numberToFloatStr(r[1])},                            ${di.numberToFloatStr(r[2])},                            ${di.numberToFloatStr(r[3])})`;break;case"ivec2":o=`ivec2(${di.numberToIntStr(r[0])},                             ${di.numberToIntStr(r[1])})`;break;case"ivec3":o=`ivec3(${di.numberToIntStr(r[0])},                             ${di.numberToIntStr(r[1])},                             ${di.numberToIntStr(r[2])})`;break;case"ivec4":o=`ivec4(${di.numberToIntStr(r[0])},                             ${di.numberToIntStr(r[1])},                             ${di.numberToIntStr(r[2])},                             ${di.numberToIntStr(r[3])})`;break;case"bvec2":o=`bvec2(${r[0].toString()},                             ${r[1].toString()})`;break;case"bvec3":o=`bvec3(${r[0].toString()},                             ${r[1].toString()},                             ${r[2].toString()})`;break;case"bvec4":o=`bvec4(${r[0].toString()},                             ${r[1].toString()},                             ${r[2].toString()},                             ${r[3].toString()})`;break;case"mat2":case"mat3":case"mat4":o=`${t}(${Array.prototype.map.call(r,(e=>di.numberToFloatStr(e))).join(", ")})`}return this._entries.push(`const ${t} ${e} = ${o};`),this}static numberToIntStr(e){return e.toFixed(0)}static numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const ui="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",fi="precision highp float;\nprecision highp sampler2D;";function mi(e){e.include(Uo),e.code.add(mo`
    float linearDepthFromFloat(float depth, vec2 nearFar) {
      return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
    }

    float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
      return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
    }
  `)}function pi(e,t){0===t.output&&t.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(mo`
      void forwardLinearDepth() { linearDepth = gl_Position.w; }
    `)):1===t.output||3===t.output?(e.varyings.add("linearDepth","float"),e.vertex.uniforms.add("cameraNearFar","vec2"),e.vertex.code.add(mo`
      void forwardLinearDepth() {
        linearDepth = (-position_view().z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);
      }
    `)):e.vertex.code.add(mo`
      void forwardLinearDepth() {}
    `)}function hi(e){e.vertex.code.add(mo`
    const float PI = 3.141592653589793;
  `),e.fragment.code.add(mo`
    const float PI = 3.141592653589793;
    const float LIGHT_NORMALIZATION = 1.0 / PI;
    const float INV_PI = 0.3183098861837907;
    const float HALF_PI = 1.570796326794897;
    `)}function vi(e){const t=e.fragment.code;t.add(mo`
    vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
    {
      return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
    }
    `),t.add(mo`
    float integratedRadiance(float cosTheta2, float roughness)
    {
      return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
    }
    `),t.add(mo`
    vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
    {
      float cosTheta2 = 1.0 - RdotNG * RdotNG;
      float intRadTheta = integratedRadiance(cosTheta2, roughness);

      // Calculate the integrated directional radiance of the ground and the sky
      float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
      float sky = 2.0 - ground;
      return (ground * ambientGround + sky * ambientSky) * 0.5;
    }
    `)}function gi(e,t){const r=e.fragment.code;e.include(hi),3===t.pbrMode||4===t.pbrMode?(r.add(mo`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(mo`
    vec3 fresnelReflection(float angle, vec3 f0, float f90) {
      return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
    }
    `),r.add(mo`
    float normalDistributionWater(float NdotH, float roughness)
    {
      float r2 = roughness * roughness;
      float NdotH2 = NdotH * NdotH;
      float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
      return r2 / denom;
    }
    `),r.add(mo`
    float geometricOcclusionKelemen(float LoH)
    {
        return 0.25 / (LoH * LoH);
    }
    `),r.add(mo`
    vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
    {
      vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
      float dSun = normalDistributionWater(props.NdotH, roughness);
      float V = geometricOcclusionKelemen(props.LdotH);

      float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
      float strengthSunHaze  = 1.2;
      float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;

      return ((dSun + dSunHaze) * V) * F;
    }

    vec3 tonemapACES(const vec3 x) {
      return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
    }
    `)):1!==t.pbrMode&&2!==t.pbrMode||(e.include(vi),r.add(mo`
    struct PBRShadingInfo
    {
        float NdotL;                  // cos angle between normal and light direction
        float NdotV;                  // cos angle between normal and view direction
        float NdotH;                  // cos angle between normal and half vector
        float VdotH;                  // cos angle between view direction and half vector
        float LdotH;                  // cos angle between view light direction and half vector
        float NdotNG;                 // cos angle between normal and normal of the ground
        float RdotNG;                 // cos angle between view direction reflected of the normal and normal of the ground
        float NdotAmbDir;             // cos angle between view direction and the fill light in ambient illumination
        float NdotH_Horizon;          // cos angle between normal and half vector defined with horizon illumination
        vec3 skyRadianceToSurface;         // integrated radiance of the sky based on the surface roughness (used for specular reflection)
        vec3 groundRadianceToSurface;      // integrated radiance of the ground based on the surface roughness (used for specular reflection)
        vec3 skyIrradianceToSurface;       // irradiance of the sky (used for diffuse reflection)
        vec3 groundIrradianceToSurface;    // irradiance of the ground (used for diffuse reflection)

        float averageAmbientRadiance;      // average ambient radiance used to deduce black level in gamut mapping
        float ssao;                   // ssao coefficient
        vec3 albedoLinear;            // linear color of the albedo
        vec3 f0;                      // fresnel value at normal incident light
        vec3 f90;                     // fresnel value at 90o of incident light

        vec3 diffuseColor;            // diffuse color of the material used in environment illumination
        float metalness;              // metalness of the material
        float roughness;              // roughness of the material
    };
    `),r.add(mo`
    float normalDistribution(float NdotH, float roughness)
    {
        float a = NdotH * roughness;
        float b = roughness / (1.0 - NdotH * NdotH + a * a);
        return b * b * INV_PI;
    }
    `),r.add(mo`
    const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
    const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
    const vec2 c2 = vec2(-1.04, 1.04);

    vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
        vec4 r = roughness * c0 + c1;
        float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
        return c2 * a004 + r.zw;
    }
    `),r.add(mo`
    vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
      vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
      vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);

      // From diffuse illumination calculate reflected color
      vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;

      // From specular illumination calculate reflected color
      vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
      vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
      vec3 specularComponent = specularColor * indirectSpecular;

      return (diffuseComponent + specularComponent);
    }
    `),r.add(mo`
    float gamutMapChanel(float x, vec2 p){
      return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
    }`),r.add(mo`
    vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
      vec3 outColor;
      vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
      outColor.x = gamutMapChanel(inColor.x, p) ;
      outColor.y = gamutMapChanel(inColor.y, p) ;
      outColor.z = gamutMapChanel(inColor.z, p) ;
      return outColor;
    }
    `))}function bi(e){e.vertex.code.add(mo`
    vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
      vec3 camToVert = posWorld - camPosWorld;

      bool isBackface = dot(camToVert, normalWorld) > 0.0;
      if (isBackface) {
        posClip.z += 0.0000003 * posClip.w;
      }
      return posClip;
    }
  `)}function xi(e){const t=mo`
    vec3 decodeNormal(vec2 f) {
      float z = 1.0 - abs(f.x) - abs(f.y);
      return vec3(f + sign(f) * min(z, 0.0), z);
    }
  `;e.fragment.code.add(t),e.vertex.code.add(t)}function Oi(e,t){0===t.normalType&&(e.attributes.add("normal","vec3"),e.vertex.code.add(mo`
      vec3 normalModel() {
        return normal;
      }
    `)),1===t.normalType&&(e.include(xi),e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(mo`
      vec3 normalModel() {
        return decodeNormal(normalCompressed);
      }
    `)),3===t.normalType&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(mo`
      vec3 screenDerivativeNormal(vec3 positionView) {
        return normalize(cross(dFdx(positionView), dFdy(positionView)));
      }
    `))}function yi(e){e.attributes.add("position","vec3"),e.vertex.code.add(mo`
    vec3 positionModel() { return position; }
  `)}function wi(e){e.vertex.code.add(mo`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${mo.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${mo.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${mo.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${mo.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function Ti(e,t){t.symbolColor?(e.include(wi),e.attributes.add("symbolColor","vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),t.symbolColor?e.vertex.code.add(mo`
    int symbolColorMixMode;

    vec4 getSymbolColor() {
      return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
    }

    void forwardColorMixMode() {
      colorMixMode = float(symbolColorMixMode) + 0.5;
    }
  `):e.vertex.code.add(mo`
    vec4 getSymbolColor() { return vec4(1.0); }
    void forwardColorMixMode() {}
    `)}function Si(e,t){t.attributeColor?(e.attributes.add("color","vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(mo`
      void forwardVertexColor() { vColor = color; }
    `),e.vertex.code.add(mo`
      void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }
    `)):e.vertex.code.add(mo`
      void forwardVertexColor() {}
      void forwardNormalizedVertexColor() {}
    `)}function _i(e,t){e.include(yi),e.vertex.include($o,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),e.vertex.uniforms.add("uTransform_ProjFromView","mat4"),e.vertex.code.add(mo`
    // compute position in world space orientation, but relative to the camera position
    vec3 positionWorldCameraRelative() {
      vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();

      vec3 transform_CameraRelativeFromModel = dpAdd(
        uTransform_WorldFromModel_TL,
        uTransform_WorldFromModel_TH,
        -uTransform_WorldFromView_TL,
        -uTransform_WorldFromView_TH
      );

      return transform_CameraRelativeFromModel + rotatedModelPosition;
    }

    // position in view space, that is relative to the camera position and orientation
    vec3 position_view() {
      return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
    }

    // compute gl_Position and forward related varyings to fragment shader
    void forwardPosition() {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      vPosition_view = position_view();
      gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
    }

    vec3 positionWorld() {
      return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
    }
  `),e.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.fragment.code.add(mo`
    vec3 positionWorld() {
      return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
    }
  `)}function ji(e,t){0===t.normalType||1===t.normalType?(e.include(Oi,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),e.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),e.vertex.code.add(mo`
      void forwardNormal() {
        vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
        vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
      }
    `)):2===t.normalType?(e.include(_i,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(mo`
    void forwardNormal() {
      vNormalWorld = ${1===t.viewingMode?mo`normalize(vPositionWorldCameraRelative);`:mo`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(mo`
      void forwardNormal() {}
    `)}function Ci(e,t){e.fragment.include(Uo),3===t.output?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(mo`
      float _calculateFragDepth(const in float depth) {
        // calc polygon offset
        const float SLOPE_SCALE = 2.0;
        const float BIAS = 2.0 * .000015259;    // 1 / (2^16 - 1)
        float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
        float result = depth + SLOPE_SCALE * m + BIAS;
        return clamp(result, .0, .999999);
      }

      void outputDepth(float _linearDepth) {
        gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
      }
    `)):1===t.output&&e.fragment.code.add(mo`
      void outputDepth(float _linearDepth) {
        gl_FragColor = float2rgba(_linearDepth);
      }
    `)}function Mi(e,t){const r=e.vertex.code,o=e.fragment.code;1!==t.output&&3!==t.output||(e.include(ei,{linearDepth:!0}),e.include(Yo,t),e.include(Fo,t),e.include(Ci,t),e.include(Co,t),e.vertex.uniforms.add("cameraNearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(mo`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
        forwardTextureCoordinates();
      }
    `),e.include(ho,t),o.add(mo`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?mo`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===t.output&&(e.include(ei,{linearDepth:!1}),e.include(Oi,t),e.include(ji,t),e.include(Yo,t),e.include(Fo,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),r.add(mo`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===t.normalType?mo`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(Co,t),e.include(ho,t),o.add(mo`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?mo`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===t.normalType?mo`
            vec3 normal = screenDerivativeNormal(vPositionView);`:mo`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===t.output&&(e.include(ei,{linearDepth:!1}),e.include(Yo,t),e.include(Fo,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(mo`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(Co,t),e.include(ho,t),e.include(Io),o.add(mo`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?mo`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}function Pi(e,t){const r=e.fragment;r.uniforms.add("normalTexture","sampler2D"),r.uniforms.add("normalTextureSize","vec2"),t.vertexTangets?(e.attributes.add("tangent","vec4"),e.varyings.add("vTangent","vec4"),2===t.doubleSidedMode?r.code.add(mo`
      mat3 computeTangentSpace(vec3 normal) {
        float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
        vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
        return mat3(tangent, bitangent, normal);
      }
    `):r.code.add(mo`
      mat3 computeTangentSpace(vec3 normal) {
        float tangentHeadedness = vTangent.w;
        vec3 tangent = normalize(vTangent.xyz);
        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
        return mat3(tangent, bitangent, normal);
      }
    `)):(e.extensions.add("GL_OES_standard_derivatives"),r.code.add(mo`
    mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {

      vec3 Q1 = dFdx(pos);
      vec3 Q2 = dFdy(pos);

      vec2 stx = dFdx(st);
      vec2 sty = dFdy(st);

      float det = stx.t * sty.s - sty.t * stx.s;

      vec3 T = stx.t * Q2 - sty.t * Q1; // compute tangent
      T = T - normal * dot(normal, T); // orthogonalize tangent
      T *= inversesqrt(max(dot(T,T), 1.e-10)); // "soft" normalize - goes to 0 when T goes to 0
      vec3 B = sign(det) * cross(normal, T); // assume normal is normalized, B has the same lenght as B
      return mat3(T, B, normal); // T and B go to 0 when the tangent space is not well defined by the uv coordinates
    }
  `)),0!==t.attributeTextureCoordinates&&(e.include(Qo,t),r.code.add(mo`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}function Ai(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(mo`
      float evaluateAmbientOcclusion() {
        return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
      }

      float evaluateAmbientOcclusionInverse() {
        float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
        return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
      }
    `)):r.code.add(mo`
      float evaluateAmbientOcclusion() { return 0.0; } // no occlusion
      float evaluateAmbientOcclusionInverse() { return 1.0; }
    `)}function Ii(e,t){const r=e.fragment,o=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===o?(r.uniforms.add("lightingAmbientSH0","vec3"),r.code.add(mo`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec3 ambientLight = 0.282095 * lightingAmbientSH0;
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `)):1===o?(r.uniforms.add("lightingAmbientSH_R","vec4"),r.uniforms.add("lightingAmbientSH_G","vec4"),r.uniforms.add("lightingAmbientSH_B","vec4"),r.code.add(mo`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec4 sh0 = vec4(
          0.282095,
          0.488603 * normal.x,
          0.488603 * normal.z,
          0.488603 * normal.y
        );
        vec3 ambientLight = vec3(
          dot(lightingAmbientSH_R, sh0),
          dot(lightingAmbientSH_G, sh0),
          dot(lightingAmbientSH_B, sh0)
        );
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `)):2===o&&(r.uniforms.add("lightingAmbientSH0","vec3"),r.uniforms.add("lightingAmbientSH_R1","vec4"),r.uniforms.add("lightingAmbientSH_G1","vec4"),r.uniforms.add("lightingAmbientSH_B1","vec4"),r.uniforms.add("lightingAmbientSH_R2","vec4"),r.uniforms.add("lightingAmbientSH_G2","vec4"),r.uniforms.add("lightingAmbientSH_B2","vec4"),r.code.add(mo`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec3 ambientLight = 0.282095 * lightingAmbientSH0;

        vec4 sh1 = vec4(
          0.488603 * normal.x,
          0.488603 * normal.z,
          0.488603 * normal.y,
          1.092548 * normal.x * normal.y
        );
        vec4 sh2 = vec4(
          1.092548 * normal.y * normal.z,
          0.315392 * (3.0 * normal.z * normal.z - 1.0),
          1.092548 * normal.x * normal.z,
          0.546274 * (normal.x * normal.x - normal.y * normal.y)
        );
        ambientLight += vec3(
          dot(lightingAmbientSH_R1, sh1),
          dot(lightingAmbientSH_G1, sh1),
          dot(lightingAmbientSH_B1, sh1)
        );
        ambientLight += vec3(
          dot(lightingAmbientSH_R2, sh2),
          dot(lightingAmbientSH_G2, sh2),
          dot(lightingAmbientSH_B2, sh2)
        );
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `),1!==t.pbrMode&&2!==t.pbrMode||r.code.add(mo`
        const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);

        vec3 calculateAmbientRadiance(float ambientOcclusion)
        {
          vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
          return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
        }
      `))}function Fi(e){const t=e.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.code.add(mo`
    vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
      float dotVal = clamp(-dot(normal_global, lightingMainDirection), 0.0, 1.0);

      // move lighting towards (1.0, 1.0, 1.0) if requested
      dotVal = mix(dotVal, 1.0, lightingFixedFactor);

      return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
    }
  `)}function Ri(e,t){const r=e.fragment;e.include(Fi),e.include(Ai,t),0!==t.pbrMode&&e.include(gi,t),e.include(Ii,t),t.receiveShadows&&e.include(Vo,t),r.uniforms.add("lightingGlobalFactor","float"),r.uniforms.add("ambientBoostFactor","float"),e.include(hi),r.code.add(mo`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===t.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),t.useOldSceneLightInterface?r.code.add(mo`
    vec3 evaluateSceneLightingExt(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
      // evaluate the main light
      #if defined(TREE_RENDERING)
        // Special case for tree rendering:
        // We shift the Lambert lobe to the back, allowing it to reach part of the hemisphere
        // facing away from the light. The idea is to get an effect where light is transmitted
        // through the tree.
        float minDot = -0.5;
        float dotRange = 1.0 - minDot;
        float dotNormalization = 0.66; // guessed & hand tweaked value, for an exact value we could precompute an integral over the sphere

        float dotVal = dotNormalization * (clamp(-dot(normal, lightingMainDirection), 1.0 - dotRange, 1.0) - minDot) * (1.0 / dotRange);
      #else
        float dotVal = clamp(-dot(normal, lightingMainDirection), 0.0, 1.0);
      #endif

      // move lighting towards (1.0, 1.0, 1.0) if requested
      dotVal = mix(dotVal, 1.0, lightingFixedFactor);

      vec3 mainLight = (1.0 - shadow) * lightingMainIntensity * dotVal;
      vec3 ambientLight = calculateAmbientIrradiance(normal, ssao);

      // inverse gamma correction on the albedo color
      vec3 albedoGammaC = pow(albedo, vec3(GAMMA_SRGB));

      // physically correct BRDF normalizes by PI
      vec3 totalLight = mainLight + ambientLight + additionalLight;
      totalLight = min(totalLight, vec3(PI));
      vec3 outColor = vec3((albedoGammaC / PI) * (totalLight));

      // apply gamma correction to the computed color
      outColor = pow(outColor, vec3(INV_GAMMA_SRGB));

      return outColor;
    }
  `):(1===t.viewingMode?r.code.add(mo`
      float _oldHeuristicLighting(vec3 vPosWorld) {
        vec3 shadingNormalWorld = normalize(vPosWorld);
        float vndl = -dot(shadingNormalWorld, lightingMainDirection);

        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
      }
    `):r.code.add(mo`
      float _oldHeuristicLighting(vec3 vPosWorld) {
        float vndl = -dot(vec3(0.0, 0.0, 1.0), lightingMainDirection);
        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
      }
    `),r.code.add(mo`
      vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
        float additionalAmbientScale = _oldHeuristicLighting(vPosWorld);
        return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
      }
    `),0===t.pbrMode||4===t.pbrMode?r.code.add(mo`
      vec3 evaluateSceneLighting(vec3 normalWorld, vec3 baseColor, float mainLightShadow, float ambientOcclusion, vec3 additionalLight)
      {
        vec3 mainLighting = evaluateMainLighting(normalWorld, mainLightShadow);
        vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ambientOcclusion);
        // inverse gamma correction on the base color
        vec3 baseColorLinear = pow(baseColor, vec3(GAMMA_SRGB));

        // physically correct BRDF normalizes by PI
        vec3 totalLight = mainLighting + ambientLighting + additionalLight;
        totalLight = min(totalLight, vec3(PI));
        vec3 outColor = vec3((baseColorLinear / PI) * totalLight);

        // apply gamma correction to the computed color
        outColor = pow(outColor, vec3(INV_GAMMA_SRGB));

        return outColor;
      }
      `):1!==t.pbrMode&&2!==t.pbrMode||(r.code.add(mo`
      const float fillLightIntensity = 0.25;
      const float horizonLightDiffusion = 0.4;
      const float additionalAmbientIrradianceFactor = 0.02;

      vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
      {
        // Calculate half vector between view and light direction
        vec3 viewDirection = -viewDir;
        vec3 mainLightDirection = -lightingMainDirection;
        vec3 h = normalize(viewDirection + mainLightDirection);

        PBRShadingInfo inputs;
        inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
        inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
        inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
        inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
        inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
        vec3 reflectedView = normalize(reflect(viewDirection, normal));
        inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);

        inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
        inputs.ssao = ssao;

        inputs.metalness = mrr[0];
        inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);
      `),r.code.add(mo`
        inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
        inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0)); // more accurate then using  f90 = 1.0
        inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);
      `),r.code.add(mo`
        vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
        ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));

        inputs.NdotAmbDir = abs(dot(normal, ambientDir));

        // Calculate the irradiance components: sun, fill lights and the sky.
        vec3 mainLightIrradianceComponent  = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
        vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
        // calculateAmbientIrradiance for localView and additionalLight for gloabalView
        vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;

        // Assemble the overall irradiance of the sky that illuminates the surface
        inputs.skyIrradianceToSurface    = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
        // Assemble the overall irradiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky irradiance by the groundReflectance
        inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
      `),r.code.add(mo`
        vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
        vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
        inputs.NdotH_Horizon = dot(normal, horizonRingH);

        vec3 mainLightRadianceComponent  = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
        vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
        vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight; // calculateAmbientRadiance for localView and additionalLight for gloabalView

        // Assemble the overall radiance of the sky that illuminates the surface
        inputs.skyRadianceToSurface    =  ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
        // Assemble the overall radiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky radince by the groundReflectance
        inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;

        // Calculate average ambient radiance - this is used int the gamut mapping part to deduce the black level that is soft compressed
        inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);
        `),r.code.add(mo`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===t.pbrMode?mo`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:mo`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `)))}function Li(e,t){const r=e.fragment;r.code.add(mo`
    struct ShadingNormalParameters {
      vec3 normalView;
      vec3 viewDirection;
    } shadingParams;
    `),1===t.doubleSidedMode?r.code.add(mo`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
      }
    `):2===t.doubleSidedMode?r.code.add(mo`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
      }
    `):r.code.add(mo`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return normalize(params.normalView);
      }
    `)}function Bi(e,t){mo`
  /*
  *  ${t.name}
  *  ${0===t.output?"RenderOutput: Color":1===t.output?"RenderOutput: Depth":3===t.output?"RenderOutput: Shadow":2===t.output?"RenderOutput: Normal":4===t.output?"RenderOutput: Highlight":""}
  */
  `}function Di(e){e.code.add(mo`
    vec4 premultiplyAlpha(vec4 v) {
      return vec4(v.rgb * v.a, v.a);
    }

    // Note: the min in the last line has been added to fix an instability in chrome.
    // See https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/23911
    // With proper floating point handling, the value could never be >1.
    vec3 rgb2hsv(vec3 c) {
      vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
      vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
      vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);

      float d = q.x - min(q.w, q.y);
      float e = 1.0e-10;
      return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
    }

    vec3 hsv2rgb(vec3 c) {
      vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
      vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
      return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }

    float rgb2v(vec3 c) {
      return max(c.x, max(c.y, c.z));
    }
  `)}function zi(e){e.include(Di),e.code.add(mo`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${mo.int(1)}) {
        return allMixed;
      }
      else if (mode == ${mo.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${mo.int(3)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${mo.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${mo.int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}function Ei(e){const t=new oi,r=t.vertex.code,o=t.fragment.code;return t.include(Bi,{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(yi),t.varyings.add("vpos","vec3"),t.include(Fo,e),t.include(Wo,e),t.include(Lo,e),0!==e.output&&7!==e.output||(t.include(Oi,e),t.include(ei,{linearDepth:!1}),0===e.normalType&&e.offsetBackfaces&&t.include(bi),t.include(Pi,e),t.include(ji,e),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("localvpos","vec3"),t.include(Yo,e),t.include(pi,e),t.include(Ti,e),t.include(Si,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),r.add(mo`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${mo.float(po)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===e.normalType?mo`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.vertexTangets?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===e.normalType&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===e.output&&(t.include(Co,e),t.include(ho,e),e.multipassTerrainEnabled&&(t.fragment.include(mi),t.include(Do,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(zi),o.add(mo`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?mo`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:mo`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?mo`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:mo`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(Co,e),t.include(Ri,e),t.include(Ai,e),t.include(ho,e),e.receiveShadows&&t.include(Vo,e),e.multipassTerrainEnabled&&(t.fragment.include(mi),t.include(Do,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(Zo,e),t.include(gi,e),t.fragment.include(zi),t.include(Li,e),o.add(mo`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?mo`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:mo`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===e.normalType?mo`
        vec3 normal = screenDerivativeNormal(localvpos);`:mo`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?mo`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:mo`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?mo`
              mat3 tangentSpace = ${e.vertexTangets?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?mo`vec3 normalGround = normalize(vpos + localOrigin);`:mo`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:mo``}
        ${1===e.pbrMode||2===e.pbrMode?mo`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(Mi,e),t}!function(e){e.ModelTransform=class{constructor(){this.worldFromModel_RS=Object(c.e)(),this.worldFromModel_TH=Object(i.d)(),this.worldFromModel_TL=Object(i.d)()}};e.ViewProjectionTransform=class{constructor(){this.worldFromView_TH=Object(i.d)(),this.worldFromView_TL=Object(i.d)(),this.viewFromCameraRelative_RS=Object(c.e)(),this.projFromView=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}},e.bindModelTransform=function(e,t){e.setUniformMatrix3fv("uTransform_WorldFromModel_RS",t.worldFromModel_RS),e.setUniform3fv("uTransform_WorldFromModel_TH",t.worldFromModel_TH),e.setUniform3fv("uTransform_WorldFromModel_TL",t.worldFromModel_TL)},e.bindViewProjTransform=function(e,t){e.setUniform3fv("uTransform_WorldFromView_TH",t.worldFromView_TH),e.setUniform3fv("uTransform_WorldFromView_TL",t.worldFromView_TL),e.setUniformMatrix4fv("uTransform_ProjFromView",t.projFromView),e.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",t.viewFromCameraRelative_RS)}}(_i||(_i={})),function(e){e.bindUniforms=function(e,t){e.setUniformMatrix4fv("viewNormal",t)}}(ji||(ji={}));var Ni=Object.freeze({__proto__:null,build:Ei});class Ui extends class{constructor(e,t){t&&(this._config=t.snapshot()),this._program=this.initializeProgram(e),e.commonUniformStore&&(this._commonUniformStore=e.commonUniformStore,this._commonUniformStore.subscribeProgram(this._program)),this._pipeline=this.initializePipeline(e)}dispose(){this._program&&(this._commonUniformStore&&this._commonUniformStore.unsubscribeProgram(this._program),this._program.dispose(),this._program=null)}reload(e){this._program&&(this._commonUniformStore&&this._commonUniformStore.unsubscribeProgram(this._program),this._program.dispose()),this._program=this.initializeProgram(e),this._commonUniformStore&&this._commonUniformStore.subscribeProgram(this._program)}get program(){return this._program}get pipeline(){return this._pipeline}get key(){return this._config.key}get configuration(){return this._config}bindPass(e,t,r){}bindMaterial(e,t,r){}bindDraw(e,t,r){}bindPipelineState(e){e.setPipelineState(this.pipeline)}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return 4}}{initializeProgram(e){const t=Ui.shader.get(),r=this.configuration,o=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,useOldSceneLightInterface:!1,pbrMode:r.usePBR?r.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:r.hasMetalnessAndRoughnessTexture,hasEmissionTexture:r.hasEmissionTexture,hasOcclusionTexture:r.hasOcclusionTexture,hasNormalTexture:r.hasNormalTexture,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:r.normalsTypeDerivate?3:0,doubleSidedMode:r.doubleSidedMode,vertexTangets:r.vertexTangents,attributeTextureCoordinates:r.hasMetalnessAndRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture||r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:qo(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new x.c(e.rctx,o.generateSource("vertex"),o.generateSource("fragment"),io)}bindPass(e,t,r){_o.bindProjectionMatrix(this.program,r.camera.projectionMatrix);const o=this.configuration.output;(1===this.configuration.output||r.multipassTerrainEnabled||3===o)&&this.program.setUniform2fv("cameraNearFar",r.camera.nearFar),r.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",r.inverseViewport),function(e,t,r){r.multipassTerrainEnabled&&r.terrainLinearDepthTexture&&(e.setUniform1i("terrainDepthTexture",10),t.bindTexture(r.terrainLinearDepthTexture,10))}(this.program,e,r)),7===o&&(this.program.setUniform1f("opacity",t.opacity),this.program.setUniform1f("layerOpacity",t.layerOpacity),this.program.setUniform4fv("externalColor",t.externalColor),this.program.setUniform1i("colorMixMode",ro[t.colorMixMode])),0===o?(r.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",t.ambient),this.program.setUniform3fv("diffuse",t.diffuse),this.program.setUniform4fv("externalColor",t.externalColor),this.program.setUniform1i("colorMixMode",ro[t.colorMixMode]),this.program.setUniform1f("opacity",t.opacity),this.program.setUniform1f("layerOpacity",t.layerOpacity),this.configuration.usePBR&&Zo.bindUniforms(this.program,t,this.configuration.isSchematic)):4===o&&Io.bindOutputHighlight(e,this.program,r),Fo.bindUniformsForSymbols(this.program,t),Lo.bindUniforms(this.program,t,r),Zr(t.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==t.textureAlphaMode&&3!==t.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",t.textureAlphaCutoff)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?Object(i.f)(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;_o.bindViewCustomOrigin(this.program,t,e.camera.viewMatrix),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&_o.bindCamPosition(this.program,t,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&Wo.bindCustomOrigin(this.program,t),Co.bindUniforms(this.program,this.configuration,e.slicePlane,t),0===this.configuration.output&&Vo.bindViewCustomOrigin(this.program,e,t)}setPipeline(e,t){const r=this.configuration,o=3===e,i=2===e;return Object(b.f)({blending:0!==r.output&&7!==r.output||!r.transparent?null:o?vo:xo(e),culling:Vi(r),depthTest:{func:wo(e)},depthWrite:o||i?r.writeDepth&&b.c:null,colorWrite:b.d,stencilWrite:r.sceneHasOcludees?zo:null,stencilTest:r.sceneHasOcludees?t?No:Eo:null,polygonOffset:o||i?null:yo(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e){return e?this._occludeePipelineState:this.pipeline}}Ui.shader=new To(Ni,(()=>r.e(38).then(r.bind(null,520))));const Vi=e=>function(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}(e)&&{face:1===e.cullFace?1028:1029,mode:2305};class ki extends class{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits.map((()=>0))}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!0}}function Hi(e){const t=new oi,r=t.vertex.code,o=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(yi),t.varyings.add("vpos","vec3"),t.include(Fo,e),t.include(Wo,e),t.include(Lo,e),0!==e.output&&7!==e.output||(t.include(Oi,e),t.include(ei,{linearDepth:!1}),e.offsetBackfaces&&t.include(bi),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.include(Yo,e),t.include(pi,e),t.include(Ti,e),t.include(Si,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),r.add(mo`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${mo.float(po)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          ${e.multipassTerrainEnabled?mo`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===e.output&&(t.include(Co,e),t.include(ho,e),e.multipassTerrainEnabled&&(t.fragment.include(mi),t.include(Do,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(zi),o.add(mo`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?mo`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?mo`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:mo`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?mo`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:mo`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(Co,e),t.include(Ri,e),t.include(Ai,e),t.include(ho,e),e.receiveShadows&&t.include(Vo,e),e.multipassTerrainEnabled&&(t.fragment.include(mi),t.include(Do,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(Zo,e),t.include(gi,e),t.fragment.include(zi),o.add(mo`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?mo`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?mo`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:mo`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?mo`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:mo`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${mo`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(-viewForward, lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(-viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?mo`vec3 normalGround = normalize(vpos + localOrigin);`:mo`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:mo``}
        ${1===e.pbrMode||2===e.pbrMode?mo`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(Mi,e),t}Object(o.e)([So({count:8})],ki.prototype,"output",void 0),Object(o.e)([So({count:4})],ki.prototype,"alphaDiscardMode",void 0),Object(o.e)([So({count:3})],ki.prototype,"doubleSidedMode",void 0),Object(o.e)([So()],ki.prototype,"isSchematic",void 0),Object(o.e)([So()],ki.prototype,"vertexColors",void 0),Object(o.e)([So()],ki.prototype,"offsetBackfaces",void 0),Object(o.e)([So()],ki.prototype,"symbolColors",void 0),Object(o.e)([So()],ki.prototype,"vvSize",void 0),Object(o.e)([So()],ki.prototype,"vvColor",void 0),Object(o.e)([So()],ki.prototype,"verticalOffset",void 0),Object(o.e)([So()],ki.prototype,"receiveShadows",void 0),Object(o.e)([So()],ki.prototype,"slicePlaneEnabled",void 0),Object(o.e)([So()],ki.prototype,"sliceHighlightDisabled",void 0),Object(o.e)([So()],ki.prototype,"receiveAmbientOcclusion",void 0),Object(o.e)([So()],ki.prototype,"screenSizePerspective",void 0),Object(o.e)([So()],ki.prototype,"textureAlphaPremultiplied",void 0),Object(o.e)([So()],ki.prototype,"hasColorTexture",void 0),Object(o.e)([So()],ki.prototype,"usePBR",void 0),Object(o.e)([So()],ki.prototype,"hasMetalnessAndRoughnessTexture",void 0),Object(o.e)([So()],ki.prototype,"hasEmissionTexture",void 0),Object(o.e)([So()],ki.prototype,"hasOcclusionTexture",void 0),Object(o.e)([So()],ki.prototype,"hasNormalTexture",void 0),Object(o.e)([So()],ki.prototype,"instanced",void 0),Object(o.e)([So()],ki.prototype,"instancedColor",void 0),Object(o.e)([So()],ki.prototype,"instancedDoublePrecision",void 0),Object(o.e)([So()],ki.prototype,"vertexTangents",void 0),Object(o.e)([So()],ki.prototype,"normalsTypeDerivate",void 0),Object(o.e)([So()],ki.prototype,"writeDepth",void 0),Object(o.e)([So()],ki.prototype,"sceneHasOcludees",void 0),Object(o.e)([So()],ki.prototype,"transparent",void 0),Object(o.e)([So()],ki.prototype,"enableOffset",void 0),Object(o.e)([So({count:3})],ki.prototype,"cullFace",void 0),Object(o.e)([So({count:4})],ki.prototype,"transparencyPassType",void 0),Object(o.e)([So()],ki.prototype,"multipassTerrainEnabled",void 0),Object(o.e)([So()],ki.prototype,"cullAboveGround",void 0);var Gi=Object.freeze({__proto__:null,build:Hi});class $i extends Ui{initializeProgram(e){const t=$i.shader.get(),r=this.configuration,o=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,useOldSceneLightInterface:!1,pbrMode:r.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangets:!1,attributeTextureCoordinates:r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:qo(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new x.c(e.rctx,o.generateSource("vertex"),o.generateSource("fragment"),io)}}$i.shader=new To(Gi,(()=>r.e(73).then(r.bind(null,521))));class qi extends no{constructor(e){super(e,Ji),this.supportsEdges=!0,this.techniqueConfig=new ki,this.vertexBufferLayout=qi.getVertexBufferLayout(this.params),this.instanceBufferLayout=e.instanced?qi.getInstanceBufferLayout(this.params):null}isVisibleInPass(e){return 4!==e&&6!==e&&7!==e||this.params.castShadows}isVisible(){const e=this.params;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,r=e.vertexColors,o=e.symbolColors,i=!!t&&t.indexOf("color")>-1,n=e.vvColorEnabled,a="replace"===e.colorMixMode,s=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return r&&(i||n||o)?!!a||s:r?a?c:s:i||n||o?!!a||s:a?c:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.params.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.params.textureId,this.techniqueConfig.vertexTangents=this.params.vertexTangents,this.techniqueConfig.instanced=!!this.params.instanced,this.techniqueConfig.instancedDoublePrecision=this.params.instancedDoublePrecision,this.techniqueConfig.vvSize=this.params.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.params.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.params.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.params.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.params.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.params.normals,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,this.techniqueConfig.cullFace=null!=this.params.cullFace?this.params.cullFace:0,this.techniqueConfig.multipassTerrainEnabled=!!t&&t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=!t||t.cullAboveGround,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.params.vertexColors,this.techniqueConfig.symbolColors=this.params.symbolColors,this.params.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.params.doubleSided&&"normal"===this.params.doubleSidedType?1:this.params.doubleSided&&"winding-order"===this.params.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.params.instanced&&this.params.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.params.receiveShadows&&this.params.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!(!t||!t.ssaoEnabled)&&this.params.receiveSSAO,this.techniqueConfig.vvColor=this.params.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.params.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.params.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.params.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.params.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.params.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.params.transparent||!this.params.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.params.usePBR&&this.params.isSchematic,this.techniqueConfig.transparencyPassType=t?t.transparencyPassType:3,this.techniqueConfig.enableOffset=!t||t.camera.relativeElevation<5e5),this.techniqueConfig}intersect(e,t,r,i,a,s,c){if(null!==this.params.verticalOffset){const e=i.camera;Object(n.n)(rn,r[12],r[13],r[14]);let t=null;switch(i.viewingMode){case 1:t=Object(n.m)(en,rn);break;case 2:t=Object(n.i)(en,Zi)}let c=0;if(null!==this.params.verticalOffset){const r=Object(n.k)(on,rn,e.eye),i=Object(n.h)(r),a=Object(n.j)(r,r,1/i);let s=null;this.params.screenSizePerspective&&(s=Object(n.w)(t,a)),c+=function(e,t,r,i,n){let a=(r.screenLength||0)*e.pixelRatio;n&&(a=kr(a,i,t,n));const s=a*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return Object(o.c_)(s*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}(e,i,this.params.verticalOffset,s,this.params.screenSizePerspective)}Object(n.j)(t,t,c),Object(n.c)(tn,t,i.transform.inverseRotation),a=Object(n.k)(Ki,a,tn),s=Object(n.k)(Qi,s,tn)}$r(e,t,i,a,s,function(e){return Object(o.P)(e)?(Ir.offset=e,Ir):null}(i.verticalOffset),c)}getGLMaterial(e){if(0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output)return new Wi(e)}createBufferWriter(){return new Yi(this.vertexBufferLayout,this.instanceBufferLayout)}static getVertexBufferLayout(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,r=Object(d.a)().vec3f("position").vec3f("normal");return e.vertexTangents&&r.vec4f("tangent"),t&&r.vec2f("uv0"),e.vertexColors&&r.vec4u8("color"),e.symbolColors&&r.vec4u8("symbolColor"),r}static getInstanceBufferLayout(e){let t=Object(d.a)();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}}class Wi extends Ur{constructor(e){const t=e.material;super({...e,...t.params}),this.updateParameters()}updateParameters(e){const t=this.material.params;this.updateTexture(t.textureId),this.technique=t.treeRendering?this.techniqueRep.acquireAndReleaseExisting($i,this.material.getTechniqueConfig(this.output,e),this.technique):this.techniqueRep.acquireAndReleaseExisting(Ui,this.material.getTechniqueConfig(this.output,e),this.technique)}selectPipelines(){}_updateShadowState(e){e.shadowMappingEnabled!==this.material.params.shadowMappingEnabled&&this.material.setParameterValues({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this.material.params.sceneHasOcludees&&this.material.setParameterValues({sceneHasOcludees:e.hasOccludees})}ensureParameters(e){0!==this.output&&7!==this.output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,t){e.bindProgram(this.technique.program),this.technique.bindPass(e,this.material.params,t),this.bindTexture(e,this.technique.program)}beginSlot(e){return e===(this.material.params.transparent?this.material.params.writeDepth?5:8:3)}getPipelineState(e,t){return this.technique.getPipelineState(t)}}const Xi=2.1,Ji={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:void 0,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:Object(c.e)(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:.1,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,renderOccluded:1};class Yi{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get("position").length}write(e,t,r,o){!function(e,t,r,o,i,n){for(const a of t.fieldNames){const t=e.vertexAttributes.get(a),s=e.indices.get(a);if(t&&s)switch(a){case"position":{J(3===t.size);const e=i.getField(a,d.q);e&&lo(s,t.data,r,e,n);break}case"normal":{J(3===t.size);const e=i.getField(a,d.q);e&&uo(s,t.data,o,e,n,1);break}case"uv0":{J(2===t.size);const e=i.getField(a,d.K);e&&ao(s,t.data,e,n);break}case"color":{J(3===t.size||4===t.size);const e=i.getField(a,d.N);e&&fo(s,t.data,t.size,e,n);break}case"symbolColor":{J(3===t.size||4===t.size);const e=i.getField(a,d.N);e&&fo(s,t.data,t.size,e,n);break}case"tangent":{J(4===t.size);const e=i.getField(a,d.F);e&&co(s,t.data,e,n);break}}}}(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,r,o)}}const Ki=Object(i.d)(),Qi=Object(i.d)(),Zi=Object(i.f)(0,0,1),en=Object(i.d)(),tn=Object(i.d)(),rn=Object(i.d)(),on=Object(i.d)(),nn=[{name:"position",count:2,type:5126,offset:0,stride:8,normalized:!1}],an=[{name:"position",count:2,type:5126,offset:0,stride:16,normalized:!1},{name:"uv0",count:2,type:5126,offset:8,stride:16,normalized:!1}];let sn,cn=null,ln=null;async function dn(){return Object(o.J)(ln)&&(ln=function(){if(Object(o.J)(sn)){const e=e=>Object(o.Q)(`esri/libs/basisu/${e}`);sn=Promise.all([r.e(0),r.e(105)]).then(r.bind(null,522)).then((function(e){return e.b})).then((({default:t})=>t({locateFile:e}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return sn}(),cn=await ln),ln}const un=o.n.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),fn=542327876,mn=131072;function pn(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const hn=pn("DXT1"),vn=pn("DXT3"),gn=pn("DXT5");function bn(e,t,r,i){const{textureData:n,internalFormat:a,width:s,height:c}=function(e,t){const r=new Int32Array(e,0,31);if(r[0]!==fn)return un.error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return un.error("Unsupported format, must contain a FourCC code"),null;const i=r[21];let n,a;switch(i){case hn:n=8,a=33776;break;case vn:n=16,a=33778;break;case gn:n=16,a=33779;break;default:return un.error("Unsupported FourCC code:",function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}(i)),null}let s=1,c=r[4],l=r[3];0==(3&c)&&0==(3&l)||(un.warn("Rounding up compressed texture size to nearest multiple of 4."),c=c+3&-4,l=l+3&-4);const d=c,u=l;let f,m;r[2]&mn&&!1!==t&&(s=Math.max(1,r[7])),1===s||Object(o.c4)(c)&&Object(o.c4)(l)||(un.warn("Ignoring mipmaps of non power of two sized compressed texture."),s=1);let p=r[1]+4;const h=[];for(let t=0;t<s;++t)m=(c+3>>2)*(l+3>>2)*n,f=new Uint8Array(e,p,m),h.push(f),p+=m,c=Math.max(1,c>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:h},internalFormat:a,width:d,height:u}}(r,i);t.samplingMode=n.levels.length>1?9987:9729,t.hasMipmap=n.levels.length>1,t.internalFormat=a,t.width=s,t.height=c;const l=new y.f(e,t,n);return e.bindTexture(l,0),l}class xn extends ee{constructor(e,t){super(),this.data=e,this.type=4,this.glTexture=null,this.powerOfTwoStretchInfo=null,this.loadingPromise=null,this.loadingController=null,this.events=new o.m,this.params=t||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:10497,t:10497},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||1,this.estimatedTexMemRequired=xn.estimateTexMemRequired(this.data,this.params),this.startPreload()}startPreload(){const e=this.data;Object(o.J)(e)||(e instanceof HTMLVideoElement?this.startPreloadVideoElement(e):e instanceof HTMLImageElement&&this.startPreloadImageElement(e))}startPreloadVideoElement(e){Object(o.cP)(e.src)||"auto"===e.preload&&e.crossOrigin||(e.preload="auto",e.crossOrigin="anonymous",e.src=e.src)}startPreloadImageElement(e){Object(o.aP)(e.src)||Object(o.cP)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static estimateTexMemRequired(e,t){if(Object(o.J)(e))return 0;if(Object(h.c)(e)||Object(h.d)(e))return t.encoding===xn.BASIS_ENCODING?function(e){if(Object(o.J)(cn))return e.byteLength;const t=new cn.BasisFile(new Uint8Array(e));if(t.getNumImages()<1)return 0;const r=t.getNumLevels(0),i=t.getHasAlpha(),n=t.getImageWidth(0,0),a=t.getImageHeight(0,0);t.close(),t.delete();const s=Object(x.b)(i?37496:37492),c=(4**r-1)/(3*4**(r-1));return Math.ceil(n*a*s*c)}(e):e.byteLength;const{width:r,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?xn.getDataDimensions(e):t;return(t.mipmap?4/3:1)*r*i*(t.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}createDescriptor(e){const t=this.params.mipmap&&!this.params.disableAnisotropy;return{target:3553,pixelFormat:6408,dataType:5121,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?9987:9729,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:t?e.parameters.maxMaxAnisotropy:void 0}}load(e,t){if(Object(o.P)(this.glTexture))return this.glTexture;if(Object(o.P)(this.loadingPromise))return this.loadingPromise;const r=this.data;return Object(o.J)(r)?(this.glTexture=new y.f(e,this.createDescriptor(e),null),e.bindTexture(this.glTexture,0),this.glTexture):"string"==typeof r?this.loadFromURL(e,t,r):r instanceof Image?this.loadFromImageElement(e,t,r):r instanceof HTMLVideoElement?this.loadFromVideoElement(e,t,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this.loadFromImage(e,r,t):(Object(h.c)(r)||Object(h.d)(r))&&this.params.encoding===xn.DDS_ENCODING?this.loadFromDDSData(e,r):(Object(h.c)(r)||Object(h.d)(r))&&this.params.encoding===xn.BASIS_ENCODING?this.loadFromBasis(e,r):Object(h.d)(r)?this.loadFromPixelData(e,r):Object(h.c)(r)?this.loadFromPixelData(e,new Uint8Array(r)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,t,r){if(!(this.data instanceof HTMLVideoElement)||Object(o.J)(this.glTexture))return r;if(this.data.readyState<2||r===this.data.currentTime)return r;if(Object(o.P)(this.powerOfTwoStretchInfo)){const{framebuffer:r,vao:o,sourceTexture:i}=this.powerOfTwoStretchInfo;i.setData(this.data),this.drawStretchedTexture(e,t,r,o,i,this.glTexture)}else{const{width:e,height:t}=this.data,{width:r,height:o}=this.glTexture.descriptor;e!==r||t!==o?this.glTexture.updateData(0,0,0,Math.min(e,r),Math.min(t,o),this.data):this.glTexture.setData(this.data)}return this.glTexture.descriptor.hasMipmap&&this.glTexture.generateMipmap(),this.data.currentTime}loadFromDDSData(e,t){return this.glTexture=bn(e,this.createDescriptor(e),t,this.params.mipmap),e.bindTexture(this.glTexture,0),this.glTexture}loadFromBasis(e,t){return this.loadAsync((()=>async function(e,t,r){Object(o.J)(cn)&&(cn=await dn());const i=new cn.BasisFile(new Uint8Array(r));if(i.getNumImages()<1)return null;const n=i.getNumLevels(0),a=i.getHasAlpha(),s=i.getImageWidth(0,0),c=i.getImageHeight(0,0),{compressedTextureETC:l,compressedTextureS3TC:d}=e.capabilities,[u,f]=l?a?[1,37496]:[0,37492]:d?a?[3,33779]:[2,33776]:[13,6408];i.startTranscoding();const m=[];for(let e=0;e<n;e++)m.push(new Uint8Array(i.getImageTranscodedSizeInBytes(0,e,u))),i.transcodeImage(m[e],0,e,u,0,0);i.close(),i.delete();const p={...t,samplingMode:n>1?9987:9729,hasMipmap:n>1,internalFormat:f,width:s,height:c};return new y.f(e,p,{type:"compressed",levels:m})}(e,this.createDescriptor(e),t).then((e=>(this.glTexture=e,e)))))}loadFromPixelData(e,t){J(this.params.width>0&&this.params.height>0);const r=this.createDescriptor(e);return r.pixelFormat=1===this.params.components?6409:3===this.params.components?6407:6408,r.width=this.params.width,r.height=this.params.height,this.glTexture=new y.f(e,r,t),e.bindTexture(this.glTexture,0),this.glTexture}async loadAsync(e){const t=Object(o.V)();this.loadingController=t;const r=e(t.signal);this.loadingPromise=r;const i=()=>{this.loadingController===t&&(this.loadingController=null),this.loadingPromise===r&&(this.loadingPromise=null)};return r.then(i,i),r}loadFromURL(e,t,r){return this.loadAsync((async o=>{const i=await Object(w.b)(r,{signal:o});return this.loadFromImage(e,i,t)}))}loadFromImageElement(e,t,r){return r.complete?this.loadFromImage(e,r,t):this.loadAsync((async i=>{const n=await Object(o.c$)(r,r.src,!1,i);return this.loadFromImage(e,n,t)}))}loadFromVideoElement(e,t,r){return r.readyState>=2?this.loadFromImage(e,r,t):this.loadFromVideoElementAsync(e,t,r)}loadFromVideoElementAsync(e,t,r){return this.loadAsync((i=>new Promise(((n,a)=>{const s=()=>{r.removeEventListener("loadeddata",c),r.removeEventListener("error",l),Object(o.P)(d)&&d.remove()},c=()=>{r.readyState>=2&&(s(),n(this.loadFromImage(e,r,t)))},l=e=>{s(),a(e||new o.s("Failed to load video"))};r.addEventListener("loadeddata",c),r.addEventListener("error",l);const d=Object(o.a8)(i,(()=>l(Object(o.ae)())))}))))}loadFromImage(e,t,r){const i=xn.getDataDimensions(t);this.params.width=i.width,this.params.height=i.height;const n=this.createDescriptor(e);return n.pixelFormat=3===this.params.components?6407:6408,!this.requiresPowerOfTwo(e,n)||Object(o.c4)(i.width)&&Object(o.c4)(i.height)?(n.width=i.width,n.height=i.height,this.glTexture=new y.f(e,n,t),e.bindTexture(this.glTexture,0),this.glTexture):(this.glTexture=this.makePowerOfTwoTexture(e,t,i,n,r),e.bindTexture(this.glTexture,0),this.glTexture)}requiresPowerOfTwo(e,t){const r=33071,o="number"==typeof t.wrapMode?t.wrapMode===r:t.wrapMode.s===r&&t.wrapMode.t===r;return!Object(y.e)(e.gl)&&(t.hasMipmap||!o)}makePowerOfTwoTexture(e,t,r,i,n){const{width:a,height:s}=r,c=Object(o.cl)(a),l=Object(o.cl)(s);let d;switch(i.width=c,i.height=l,this.params.powerOfTwoResizeMode){case 2:i.textureCoordinateScaleFactor=[a/c,s/l],d=new y.f(e,i),d.updateData(0,0,0,a,s,t);break;case 1:case null:case void 0:d=this.stretchToPowerOfTwo(e,t,i,n);break;default:Object(T.a)(this.params.powerOfTwoResizeMode)}return i.hasMipmap&&d.generateMipmap(),d}stretchToPowerOfTwo(e,t,r,o){const i=new y.f(e,r),n=new y.g(e,{colorTarget:0,depthStencilTarget:0},i),a=new y.f(e,{target:3553,pixelFormat:r.pixelFormat,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},t),s=function(e,t=nn,r=io,o=-1,i=1){let n=null;switch(t){case an:n=new Float32Array([o,o,0,0,i,o,1,0,o,i,0,1,i,i,1,1]);break;case nn:default:n=new Float32Array([o,o,i,o,o,i,i,i])}return new x.a(e,r,{geometry:t},{geometry:x.e.createVertex(e,35044,n)})}(e);return this.drawStretchedTexture(e,o,n,s,a,i),this.requiresFrameUpdates?this.powerOfTwoStretchInfo={vao:s,sourceTexture:a,framebuffer:n}:(s.dispose(!0),a.dispose(),n.detachColorTexture(),e.bindFramebuffer(null),n.dispose()),i}drawStretchedTexture(e,t,r,o,i,n){e.bindFramebuffer(r);const a=e.getViewport();e.setViewport(0,0,n.descriptor.width,n.descriptor.height);const s=t.program;e.bindProgram(s),s.setUniform4f("color",1,1,1,1),s.setUniform1i("tex",0),e.bindTexture(i,0),e.bindVAO(o),e.setPipelineState(t.pipeline),e.drawArrays(5,0,Object(x.d)(o,"geometry")),e.bindFramebuffer(null),e.setViewport(a.x,a.y,a.width,a.height)}unload(){if(Object(o.P)(this.powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:r}=this.powerOfTwoStretchInfo;t.dispose(!0),r.dispose(),e.dispose(),this.glTexture=null,this.powerOfTwoStretchInfo=null}if(Object(o.P)(this.glTexture)&&(this.glTexture.dispose(),this.glTexture=null),Object(o.P)(this.loadingController)){const e=this.loadingController;this.loadingController=null,this.loadingPromise=null,e.abort()}this.events.emit("unloaded")}}xn.DDS_ENCODING="image/vnd-ms.dds",xn.BASIS_ENCODING="image/x.basis";class On{constructor(e){this.streamDataRequester=e}async loadJSON(e,t){return this.load("json",e,t)}async loadBinary(e,t){return Object(o.aP)(e)?(Object(o.h)(t),Object(o.d0)(e)):this.load("binary",e,t)}async loadImage(e,t){return this.load("image",e,t)}async load(e,t,r){if(Object(o.J)(this.streamDataRequester))return(await Object(o.C)(t,{responseType:yn[e]})).data;const i=await Object(o.ax)(this.streamDataRequester.request(t,e,r));if(!0===i.ok)return i.value;throw Object(o.bR)(i.error),new o.s("",`Request for resource failed: ${i.error}`)}}const yn={image:"image",binary:"array-buffer",json:"json"};function wn(e,t,r){const o=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*i,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<s;++e)o[c]=n[l],o[c+1]=n[l+1],c+=i,l+=a}function Tn(e,t,r){const o=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*i,l=(r&&r.srcIndex?r.srcIndex:0)*a;if(Object(d.D)(t.elementType)){const e=Object(d.H)(t.elementType);if(Object(d.I)(t.elementType))for(let t=0;t<s;++t)o[c]=Math.max(n[l]/e,-1),o[c+1]=Math.max(n[l+1]/e,-1),c+=i,l+=a;else for(let t=0;t<s;++t)o[c]=n[l]/e,o[c+1]=n[l+1]/e,c+=i,l+=a}else wn(e,t,r);return e}function Sn(e,t,r){const o=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*i,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<s;++e)o[c]=n[l],o[c+1]=n[l+1],o[c+2]=n[l+2],c+=i,l+=a}function _n(e,t,r){const o=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*i,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<s;++e)o[c]=n[l],o[c+1]=n[l+1],o[c+2]=n[l+2],o[c+3]=n[l+3],c+=i,l+=a}function jn(e,t,r,o,i,n){const a=e.typedBuffer,s=e.typedBufferStride,c=n?n.count:e.count;let l=(n&&n.dstIndex?n.dstIndex:0)*s;for(let e=0;e<c;++e)a[l]=t,a[l+1]=r,a[l+2]=o,a[l+3]=i,l+=s}function Cn(e,t){const r=e.count;t||(t=new e.TypedArrayConstructor(r));for(let o=0;o<r;o++)t[o]=e.get(o);return t}function Mn(e,t){return new e(new ArrayBuffer(t*e.ElementCount*Object(d.J)(e.ElementType)))}Object.freeze({__proto__:null,copy:wn,normalizeIntegerBuffer:Tn}),Object.freeze({__proto__:null,copy:Sn}),Object.freeze({__proto__:null,copy:_n,fill:jn}),Object.freeze({__proto__:null,copy:function(e,t,r){const o=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*i,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<s;++e){for(let e=0;e<9;++e)o[c+e]=n[l+e];c+=i,l+=a}}}),Object.freeze({__proto__:null,copy:function(e,t,r){const o=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*i,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<s;++e){for(let e=0;e<16;++e)o[c+e]=n[l+e];c+=i,l+=a}}}),Object.freeze({__proto__:null,copy:function(e,t,r){const o=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*i,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<s;++e)o[c]=n[l],c+=i,l+=a},makeDense:Cn});const Pn=o.n.getLogger("esri.views.3d.glTF");class An{constructor(e){this.data=e,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4))}readUint32(){const e=this.offset4;return this.offset4+=1,this.dataUint32[e]}readUint8Array(e){const t=4*this.offset4;return this.offset4+=e/4,new Uint8Array(this.data,t,e)}remainingBytes(){return this.data.byteLength-4*this.offset4}}const In={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},Fn={pbrMetallicRoughness:In,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},Rn={ESRI_externalColorMixMode:"tint"},Ln=(e={})=>{const t={...In,...e.pbrMetallicRoughness},r=function(e){switch(e.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:Object(T.a)(e.ESRI_externalColorMixMode),e.ESRI_externalColorMixMode="tint"}return e}({...Rn,...e.extras});return{...Fn,...e,pbrMetallicRoughness:t,extras:r}};const Bn={magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497};const Dn=1179937895,zn=1313821514,En=5130562;class Nn{constructor(e,t,r,o,i){this.context=e,this.errorContext=t,this.uri=r,this.json=o,this.glbBuffer=i,this.bufferCache=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=function(e){let t,r;return e.replace(/^(.*\/)?([^/]*)$/,((e,o,i)=>(t=o||"",r=i||"",""))),{dirPart:t,filePart:r}}(this.uri).dirPart,this.checkVersionSupported(),this.checkRequiredExtensionsSupported(),t.errorUnsupportedIf(null==o.scenes,"Scenes must be defined."),t.errorUnsupportedIf(null==o.meshes,"Meshes must be defined"),t.errorUnsupportedIf(null==o.nodes,"Nodes must be defined."),this.computeNodeParents()}static async load(e,t,r,i){if(Object(o.aP)(r)){const i=Object(o.aY)(r);if("model/gltf-binary"!==i.mediaType)try{const o=JSON.parse(i.isBase64?atob(i.data):i.data);return new Nn(e,t,r,o)}catch{}const n=Object(o.d0)(r);if(Nn.isGLBData(n))return this.fromGLBData(e,t,r,n)}if(r.endsWith(".gltf")){const o=await e.loadJSON(r,i);return new Nn(e,t,r,o)}const n=await e.loadBinary(r,i);if(Nn.isGLBData(n))return this.fromGLBData(e,t,r,n);const a=await e.loadJSON(r,i);return new Nn(e,t,r,a)}static isGLBData(e){const t=new An(e);return t.remainingBytes()>=4&&t.readUint32()===Dn}static async fromGLBData(e,t,r,o){const i=await Nn.parseGLBData(t,o);return new Nn(e,t,r,i.json,i.binaryData)}static async parseGLBData(e,t){const r=new An(t);e.assert(r.remainingBytes()>=12,"GLB binary data is insufficiently large.");const o=r.readUint32(),i=r.readUint32(),n=r.readUint32();e.assert(o===Dn,"Magic first 4 bytes do not fit to expected GLB value."),e.assert(t.byteLength>=n,"GLB binary data is smaller than header specifies."),e.errorUnsupportedIf(2!==i,"An unsupported GLB container version was detected. Only version 2 is supported.");let a,s,c=0;for(;r.remainingBytes()>=8;){const t=r.readUint32(),o=r.readUint32();0===c?(e.assert(o===zn,"First GLB chunk must be JSON."),e.assert(t>=0,"No JSON data found."),a=await $n(r.readUint8Array(t))):1===c?(e.errorUnsupportedIf(o!==En,"Second GLB chunk expected to be BIN."),s=r.readUint8Array(t)):e.warnUnsupported("More than 2 GLB chunks detected. Skipping."),c+=1}return a||e.error("No GLB JSON chunk detected."),{json:a,binaryData:s}}async getBuffer(e,t){const r=this.json.buffers[e],o=this.errorContext;if(null==r.uri)return o.assert(null!=this.glbBuffer,"GLB buffer not present"),this.glbBuffer;let i=this.bufferCache.get(e);if(!i){const n=await this.context.loadBinary(this.resolveUri(r.uri),t);i=new Uint8Array(n),this.bufferCache.set(e,i),o.assert(i.byteLength===r.byteLength,"Buffer byte lengths should match.")}return i}async getAccessor(e,t){const r=this.json.accessors[e],o=this.errorContext;o.errorUnsupportedIf(null==r.bufferView,"Some accessor does not specify a bufferView."),o.errorUnsupportedIf(r.type in["MAT2","MAT3","MAT4"],`AttributeType ${r.type} is not supported`);const i=this.json.bufferViews[r.bufferView],n=await this.getBuffer(i.buffer,t),a=Hn[r.type],s=Gn[r.componentType],c=a*s,l=i.byteStride||c;return{raw:n.buffer,byteStride:l,byteOffset:n.byteOffset+(i.byteOffset||0)+(r.byteOffset||0),entryCount:r.count,isDenselyPacked:l===c,componentCount:a,componentByteSize:s,componentType:r.componentType,min:r.min,max:r.max,normalized:!!r.normalized}}async getIndexData(e,t){if(null==e.indices)return null;const r=await this.getAccessor(e.indices,t);if(r.isDenselyPacked)switch(r.componentType){case 5121:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case 5123:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case 5125:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case 5121:return Cn(this.wrapAccessor(d.x,r));case 5123:return Cn(this.wrapAccessor(d.w,r));case 5125:return Cn(this.wrapAccessor(d.f,r))}}async getPositionData(e,t){const r=this.errorContext;r.errorUnsupportedIf(null==e.attributes.POSITION,"No POSITION vertex data found.");const o=await this.getAccessor(e.attributes.POSITION,t);return r.errorUnsupportedIf(5126!==o.componentType,"Expected type FLOAT for POSITION vertex attribute, but found "+qn[o.componentType]),r.errorUnsupportedIf(3!==o.componentCount,"POSITION vertex attribute must have 3 components, but found "+o.componentCount.toFixed()),this.wrapAccessor(d.q,o)}async getNormalData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.NORMAL,"No NORMAL vertex data found.");const o=await this.getAccessor(e.attributes.NORMAL,t);return r.errorUnsupportedIf(5126!==o.componentType,"Expected type FLOAT for NORMAL vertex attribute, but found "+qn[o.componentType]),r.errorUnsupportedIf(3!==o.componentCount,"NORMAL vertex attribute must have 3 components, but found "+o.componentCount.toFixed()),this.wrapAccessor(d.q,o)}async getTangentData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TANGENT,"No TANGENT vertex data found.");const o=await this.getAccessor(e.attributes.TANGENT,t);return r.errorUnsupportedIf(5126!==o.componentType,"Expected type FLOAT for TANGENT vertex attribute, but found "+qn[o.componentType]),r.errorUnsupportedIf(4!==o.componentCount,"TANGENT vertex attribute must have 4 components, but found "+o.componentCount.toFixed()),new d.F(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount)}async getTextureCoordinates(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");const o=await this.getAccessor(e.attributes.TEXCOORD_0,t);return r.errorUnsupportedIf(2!==o.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+o.componentCount.toFixed()),5126===o.componentType?this.wrapAccessor(d.K,o):(r.errorUnsupportedIf(!o.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),function(e){switch(e.componentType){case 5120:return new d.k(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5121:return new d.u(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5122:return new d.L(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5123:return new d.M(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5125:return new d.i(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5126:return new d.K(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);default:return void Object(T.a)(e.componentType)}}(o))}async getVertexColors(e,t){const r=this.errorContext;r.assert(null!=e.attributes.COLOR_0,"No COLOR_0 vertex data found.");const o=await this.getAccessor(e.attributes.COLOR_0,t);if(r.errorUnsupportedIf(4!==o.componentCount&&3!==o.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+o.componentCount.toFixed()),4===o.componentCount){if(5126===o.componentType)return this.wrapAccessor(d.F,o);if(5121===o.componentType)return this.wrapAccessor(d.N,o);if(5123===o.componentType)return this.wrapAccessor(d.j,o)}else if(3===o.componentCount){if(5126===o.componentType)return this.wrapAccessor(d.q,o);if(5121===o.componentType)return this.wrapAccessor(d.l,o);if(5123===o.componentType)return this.wrapAccessor(d.e,o)}r.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+qn[o.componentType])}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t,r){const o=this.errorContext;let i=this.materialCache.get(e.material);if(!i){const n=null!=e.material?Ln(this.json.materials[e.material]):Ln(),a=n.pbrMetallicRoughness,s=this.hasVertexColors(e);let c,l,d,u,f;a.baseColorTexture&&(o.errorUnsupportedIf(0!==(a.baseColorTexture.texCoord||0),"Only TEXCOORD with index 0 is supported."),c=await this.getTexture(a.baseColorTexture.index,t)),n.normalTexture&&(0!==(n.normalTexture.texCoord||0)?o.warnUnsupported("Only TEXCOORD with index 0 is supported for the normal map texture."):l=await this.getTexture(n.normalTexture.index,t)),n.occlusionTexture&&r&&(0!==(n.occlusionTexture.texCoord||0)?o.warnUnsupported("Only TEXCOORD with index 0 is supported for the occlusion texture."):d=await this.getTexture(n.occlusionTexture.index,t)),n.emissiveTexture&&r&&(0!==(n.emissiveTexture.texCoord||0)?o.warnUnsupported("Only TEXCOORD with index 0 is supported for the emissive texture."):u=await this.getTexture(n.emissiveTexture.index,t)),a.metallicRoughnessTexture&&r&&(0!==(a.metallicRoughnessTexture.texCoord||0)?o.warnUnsupported("Only TEXCOORD with index 0 is supported for the metallicRoughness texture."):f=await this.getTexture(a.metallicRoughnessTexture.index,t));const m=null!=e.material?e.material:-1;i={alphaMode:n.alphaMode,alphaCutoff:n.alphaCutoff,color:a.baseColorFactor,doubleSided:!!n.doubleSided,colorTexture:c,normalTexture:l,name:n.name,id:m,occlusionTexture:d,emissiveTexture:u,emissiveFactor:n.emissiveFactor,metallicFactor:a.metallicFactor,roughnessFactor:a.roughnessFactor,metallicRoughnessTexture:f,vertexColors:s,ESRI_externalColorMixMode:n.extras.ESRI_externalColorMixMode}}return i}async getTexture(e,t){const r=this.errorContext,o=this.json.textures[e],i=(e=>({...Bn,...e}))(null!=o.sampler?this.json.samplers[o.sampler]:{});r.errorUnsupportedIf(null==o.source,"Source is expected to be defined for a texture.");const n=this.json.images[o.source];let a=this.textureCache.get(e);if(!a){let o;if(n.uri)o=await this.context.loadImage(this.resolveUri(n.uri),t);else{r.errorUnsupportedIf(null==n.bufferView,"Image bufferView must be defined."),r.errorUnsupportedIf(null==n.mimeType,"Image mimeType must be defined.");const e=this.json.bufferViews[n.bufferView],i=await this.getBuffer(e.buffer,t);r.errorUnsupportedIf(null!=e.byteStride,"byteStride not supported for image buffer"),o=await async function(e,t){return new Promise(((r,o)=>{const i=new Blob([e],{type:t}),n=URL.createObjectURL(i),a=new Image;a.addEventListener("load",(()=>{URL.revokeObjectURL(n),"decode"in a?a.decode().then((()=>r(a)),(()=>r(a))):r(a)})),a.addEventListener("error",(e=>{URL.revokeObjectURL(n),o(e)})),a.src=n}))}(new Uint8Array(i.buffer,i.byteOffset+(e.byteOffset||0),e.byteLength),n.mimeType)}a={data:o,wrapS:i.wrapS,wrapT:i.wrapT,minFilter:i.minFilter,name:n.name,id:e},this.textureCache.set(e,a)}return a}getNodeTransform(e){if(void 0===e)return Vn;let t=this.nodeTransformCache.get(e);if(!t){const r=this.getNodeTransform(this.getNodeParent(e)),o=this.json.nodes[e];o.matrix?t=Object(a.b)([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],r,o.matrix):o.translation||o.rotation||o.scale?(t=j(r),o.translation&&Object(a.a)(t,t,o.translation),o.rotation&&(kn[3]=Object(c.a)(kn,o.rotation),Object(a.c)(t,t,kn[3],kn)),o.scale&&Object(a.f)(t,t,o.scale)):t=r,this.nodeTransformCache.set(e,t)}return t}wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}resolveUri(e){return Object(o.aH)(e,this.baseUri)}getNodeParent(e){return this.nodeParentMap.get(e)}checkVersionSupported(){const e=S.a.parse(this.json.asset.version,"glTF");Un.validate(e)}checkRequiredExtensionsSupported(){const e=this.json,t=this.errorContext;e.extensionsRequired&&0!==e.extensionsRequired.length&&t.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}computeNodeParents(){this.json.nodes.forEach(((e,t)=>{e.children&&e.children.forEach((e=>{this.nodeParentMap.set(e,t)}))}))}}const Un=new S.a(2,0,"glTF"),Vn=Object(a.d)([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],Math.PI/2),kn=Object(c.d)(),Hn={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},Gn={5120:1,5121:1,5122:2,5123:2,5126:4,5125:4};async function $n(e){return new Promise(((t,r)=>{const o=new Blob([e]),i=new FileReader;i.onload=()=>{const e=i.result;t(JSON.parse(e))},i.onerror=e=>{r(e)},i.readAsText(o)}))}const qn={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};let Wn=0;async function Xn(e,t,r={},i=!0){const n=await Nn.load(e,ea,t,r),a="gltf_"+Wn++,s={lods:[],materials:new Map,textures:new Map,meta:Jn(n)},c=!(!n.json.asset.extras||"symbolResource"!==n.json.asset.extras.ESRI_type);return await Yn(n,(async(e,t,c,l)=>{const d=void 0!==e.mode?e.mode:4,u=function(e){switch(e){case 4:case 5:case 6:return e;default:return null}}(d);if(Object(o.J)(u))return void ea.warnUnsupported("Unsupported primitive mode ("+ra[d]+"). Skipping primitive.");if(!n.hasPositions(e))return void ea.warn("Skipping primitive without POSITION vertex attribute.");const f=await n.getMaterial(e,r,i),m={transform:j(t),attributes:{position:await n.getPositionData(e,r),normal:null,texCoord0:null,color:null,tangent:null},indices:await n.getIndexData(e,r),primitiveType:u,material:Qn(s,f,a)};n.hasNormals(e)&&(m.attributes.normal=await n.getNormalData(e,r)),n.hasTangents(e)&&(m.attributes.tangent=await n.getTangentData(e,r)),n.hasTextureCoordinates(e)&&(m.attributes.texCoord0=await n.getTextureCoordinates(e,r)),n.hasVertexColors(e)&&(m.attributes.color=await n.getVertexColors(e,r));let p=null;Object(o.P)(s.meta)&&Object(o.P)(s.meta.ESRI_lod)&&"screenSpaceRadius"===s.meta.ESRI_lod.metric&&(p=s.meta.ESRI_lod.thresholds[c]),s.lods[c]=s.lods[c]||{parts:[],name:l,lodThreshold:p},s.lods[c].parts.push(m)})),{model:s,meta:{isEsriSymbolResource:c,uri:n.uri},customMeta:{}}}function Jn(e){const t=e.json;let r=null;return t.nodes.forEach((e=>{const t=e.extras;Object(o.P)(t)&&(t.ESRI_proxyEllipsoid||t.ESRI_lod)&&(r=t)})),r}async function Yn(e,t){const r=e.json,o=r.scenes[r.scene||0].nodes,i=o.length>1;for(const e of o){const t=r.nodes[e],o=[n(e,0)];if(Kn(t)&&!i){const e=t.extensions.MSFT_lod.ids;o.push(...e.map(((e,t)=>n(e,t+1))))}await Promise.all(o)}async function n(o,i){const a=r.nodes[o],s=e.getNodeTransform(o);if(ea.warnUnsupportedIf(null!=a.weights,"Morph targets are not supported."),null!=a.mesh){const e=r.meshes[a.mesh];for(const r of e.primitives)await t(r,s,i,e.name)}for(const e of a.children||[])await n(e,i)}}function Kn(e){return e.extensions&&e.extensions.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function Qn(e,t,r){const o=t=>{const o=`${r}_tex_${t&&t.id}${t&&t.name?"_"+t.name:""}`;if(t&&!e.textures.has(o)){const r=function(e,t={}){return{data:e,parameters:{wrap:{s:10497,t:10497,...t.wrap},noUnpackFlip:!0,mipmap:!1,...t}}}(t.data,{wrap:{s:Zn(t.wrapS),t:Zn(t.wrapT)},mipmap:ta.some((e=>e===t.minFilter)),noUnpackFlip:!0});e.textures.set(o,r)}return o},i=`${r}_mat_${t.id}_${t.name}`;if(!e.materials.has(i)){const r=function(e={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?o(t.colorTexture):void 0,textureNormal:t.normalTexture?o(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?o(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?o(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?o(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor});e.materials.set(i,r)}return i}function Zn(e){if(33071===e||33648===e||10497===e)return e;ea.error(`Unexpected TextureSampler WrapMode: ${e}`)}const ea=new class{error(e){throw new o.s("gltf-loader-error",e)}errorUnsupported(e){throw new o.s("gltf-loader-unsupported-feature",e)}errorUnsupportedIf(e,t){e&&this.errorUnsupported(t)}assert(e,t){e||this.error(t)}warn(e){Pn.warn(e)}warnUnsupported(e){this.warn("[Unsupported Feature] "+e)}warnUnsupportedIf(e,t){e&&this.warnUnsupported(t)}},ta=[9987,9985],ra=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"];const oa=o.n.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function ia(e,t){const r=await async function(e,t){const r=Object(o.P)(t)&&t.streamDataRequester;if(r)return async function(e,t,r){const i=await Object(o.ax)(t.request(e,"json",r));if(!0===i.ok)return i.value;Object(o.bR)(i.error),na(i.error.details.url)}(e,r,t);const i=await Object(o.ax)(Object(o.C)(e,Object(o.Y)(t)));if(!0===i.ok)return i.value.data;Object(o.bR)(i.error),na(i.error)}(e,t);return{resource:r,textures:await ca(r.textureDefinitions,t)}}function na(e){throw new o.s("",`Request for object resource failed: ${e}`)}function aa(e){const t=e.params,r=t.topology;let o=!0;switch(t.vertexAttributes||(oa.warn("Geometry must specify vertex attributes"),o=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(oa.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),o=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(oa.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),o=!1)):(oa.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),o=!1)}}else oa.warn("Indexed geometries must specify faces"),o=!1;break}default:oa.warn(`Unsupported topology '${r}'`),o=!1}e.params.material||(oa.warn("Geometry requires material"),o=!1);const i=e.params.vertexAttributes;for(const e in i)i[e].values||(oa.warn("Geometries with externally defined attributes are not yet supported"),o=!1);return o}function sa(e){const t=Object(u.b)();return e.forEach((e=>{const r=e.boundingInfo;Object(o.P)(r)&&(Object(u.h)(t,r.getBBMin()),Object(u.h)(t,r.getBBMax()))})),t}async function ca(e,t){const r=[];for(const i in e){const n=e[i],a=n.images[0].data;if(!a){oa.warn("Externally referenced texture data is not yet supported");continue}const s=n.encoding+";base64,"+a,c="/textureDefinitions/"+i,l={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:!0},d=Object(o.P)(t)&&t.disableTextures?Promise.resolve(null):Object(w.b)(s,t);r.push(d.then((e=>({refId:c,image:e,params:l,alphaChannelUsage:"rgba"===n.channels?n.alphaChannelUsage||"transparency":"none"}))))}const i=await Promise.all(r),n={};for(const e of i)n[e.refId]=e;return n}function la(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;case"transparency":default:return 0}}function da(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const ua=new S.a(1,2,"wosr");function fa(e,t,r){if(e.count!==t.count)return void P.error("source and destination buffers need to have the same number of elements");const o=e.count,i=r[0],n=r[1],a=r[2],s=r[3],c=r[4],l=r[5],d=r[6],u=r[7],f=r[8],m=e.typedBuffer,p=e.typedBufferStride,h=t.typedBuffer,v=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*p,r=e*v,o=h[r],g=h[r+1],b=h[r+2],x=h[r+3];m[t]=i*o+s*g+d*b,m[t+1]=n*o+c*g+u*b,m[t+2]=a*o+l*g+f*b,m[t+3]=x}}function ma(e,t,r){const o=Math.min(e.count,t.count),i=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*n,o=e*s;i[t]=r*a[o],i[t+1]=r*a[o+1],i[t+2]=r*a[o+2],i[t+3]=r*a[o+3]}}function pa(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function ha(e,t,r,i){const n=e.model,a=Object(c.e)(),s=new Array,f=new Map,m=new Map;return n.lods.forEach(((e,c)=>{if(void 0!==i&&c!==i)return;const p={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:Object(o.P)(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:Object(u.b)()};s.push(p),e.parts.forEach((e=>{const i=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),s=n.materials.get(e.material),c=Object(o.P)(e.attributes.texCoord0),h=Object(o.P)(e.attributes.normal);if(!f.has(i)){if(c){if(Object(o.P)(s.textureColor)&&!m.has(s.textureColor)){const e=n.textures.get(s.textureColor),t={...e.parameters,preMultiplyAlpha:!0};m.set(s.textureColor,new xn(e.data,t))}if(Object(o.P)(s.textureNormal)&&!m.has(s.textureNormal)){const e=n.textures.get(s.textureNormal),t={...e.parameters,preMultiplyAlpha:!0};m.set(s.textureNormal,new xn(e.data,t))}if(Object(o.P)(s.textureOcclusion)&&!m.has(s.textureOcclusion)){const e=n.textures.get(s.textureOcclusion),t={...e.parameters,preMultiplyAlpha:!0};m.set(s.textureOcclusion,new xn(e.data,t))}if(Object(o.P)(s.textureEmissive)&&!m.has(s.textureEmissive)){const e=n.textures.get(s.textureEmissive),t={...e.parameters,preMultiplyAlpha:!0};m.set(s.textureEmissive,new xn(e.data,t))}if(Object(o.P)(s.textureMetallicRoughness)&&!m.has(s.textureMetallicRoughness)){const e=n.textures.get(s.textureMetallicRoughness),t={...e.parameters,preMultiplyAlpha:!0};m.set(s.textureMetallicRoughness,new xn(e.data,t))}}const a=s.color[0]**(1/Xi),l=s.color[1]**(1/Xi),d=s.color[2]**(1/Xi),u=s.emissiveFactor[0]**(1/Xi),p=s.emissiveFactor[1]**(1/Xi),v=s.emissiveFactor[2]**(1/Xi);f.set(i,new qi({...t,transparent:"BLEND"===s.alphaMode,textureAlphaMode:va(s.alphaMode),textureAlphaCutoff:s.alphaCutoff,diffuse:[a,l,d],ambient:[a,l,d],opacity:s.opacity,doubleSided:s.doubleSided,doubleSidedType:"winding-order",cullFace:s.doubleSided?0:2,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:h?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:Object(o.P)(s.textureColor)&&c?m.get(s.textureColor).id:void 0,colorMixMode:s.colorMixMode,normalTextureId:Object(o.P)(s.textureNormal)&&c?m.get(s.textureNormal).id:void 0,textureAlphaPremultiplied:!0,occlusionTextureId:Object(o.P)(s.textureOcclusion)&&c?m.get(s.textureOcclusion).id:void 0,emissiveTextureId:Object(o.P)(s.textureEmissive)&&c?m.get(s.textureEmissive).id:void 0,metallicRoughnessTextureId:Object(o.P)(s.textureMetallicRoughness)&&c?m.get(s.textureMetallicRoughness).id:void 0,emissiveFactor:[u,p,v],mrrFactors:[s.metallicFactor,s.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...r}))}const v=ga(e.indices||e.attributes.position.count,e.primitiveType),g=e.attributes.position.count,b=Mn(d.q,g);A(b,e.attributes.position,e.transform);const x=[["position",{data:b.typedBuffer,size:b.elementCount,exclusive:!0}]],O=[["position",v]];if(Object(o.P)(e.attributes.normal)){const t=Mn(d.q,g);Object(l.g)(a,e.transform),I(t,e.attributes.normal,a),x.push(["normal",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),O.push(["normal",v])}if(Object(o.P)(e.attributes.tangent)){const t=Mn(d.F,g);Object(l.g)(a,e.transform),fa(t,e.attributes.tangent,a),x.push(["tangent",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),O.push(["tangent",v])}if(Object(o.P)(e.attributes.texCoord0)){const t=Mn(d.K,g);Tn(t,e.attributes.texCoord0),x.push(["uv0",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),O.push(["uv0",v])}if(Object(o.P)(e.attributes.color)){const t=Mn(d.N,g);if(4===e.attributes.color.elementCount)e.attributes.color instanceof d.F?ma(t,e.attributes.color,255):e.attributes.color instanceof d.N?_n(t,e.attributes.color):e.attributes.color instanceof d.j&&ma(t,e.attributes.color,1/256);else{jn(t,255,255,255,255);const r=new d.l(t.buffer,0,4);e.attributes.color instanceof d.q?F(r,e.attributes.color,255):e.attributes.color instanceof d.l?Sn(r,e.attributes.color):e.attributes.color instanceof d.e&&F(r,e.attributes.color,1/256)}x.push(["color",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),O.push(["color",v])}const y=new Fe(x,O);p.stageResources.geometries.push(y),p.stageResources.materials.push(f.get(i)),c&&(Object(o.P)(s.textureColor)&&p.stageResources.textures.push(m.get(s.textureColor)),Object(o.P)(s.textureNormal)&&p.stageResources.textures.push(m.get(s.textureNormal)),Object(o.P)(s.textureOcclusion)&&p.stageResources.textures.push(m.get(s.textureOcclusion)),Object(o.P)(s.textureEmissive)&&p.stageResources.textures.push(m.get(s.textureEmissive)),Object(o.P)(s.textureMetallicRoughness)&&p.stageResources.textures.push(m.get(s.textureMetallicRoughness))),p.numberOfVertices+=g;const w=y.boundingInfo;Object(o.P)(w)&&(Object(u.h)(p.boundingBox,w.getBBMin()),Object(u.h)(p.boundingBox,w.getBBMax()))}))})),s}function va(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":return 1;default:return 0}}function ga(e,t){switch(t){case 4:return function(e){return"number"==typeof e?Ce(e):Object(h.n)(e)||Object(h.d)(e)?new Uint32Array(e):e}(e);case 5:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,o=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;t+=1)t%2==0?(o[e++]=t,o[e++]=t+1,o[e++]=t+2):(o[e++]=t+1,o[e++]=t,o[e++]=t+2)}else{let t=0;for(let i=0;i<r;i+=1)if(i%2==0){const r=e[i],n=e[i+1],a=e[i+2];o[t++]=r,o[t++]=n,o[t++]=a}else{const r=e[i+1],n=e[i],a=e[i+2];o[t++]=r,o[t++]=n,o[t++]=a}}return o}(e);case 6:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,o=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;++t)o[e++]=0,o[e++]=t+1,o[e++]=t+2;return o}{const t=e[0];let i=e[1],n=0;for(let a=0;a<r;++a){const r=e[a+2];o[n++]=t,o[n++]=i,o[n++]=r,i=r}return o}}(e)}}Object.freeze({__proto__:null,transformMat4:function(e,t,r){if(e.count!==t.count)return void P.error("source and destination buffers need to have the same number of elements");const o=e.count,i=r[0],n=r[1],a=r[2],s=r[3],c=r[4],l=r[5],d=r[6],u=r[7],f=r[8],m=r[9],p=r[10],h=r[11],v=r[12],g=r[13],b=r[14],x=r[15],O=e.typedBuffer,y=e.typedBufferStride,w=t.typedBuffer,T=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*y,r=e*T,o=w[r],S=w[r+1],_=w[r+2],j=w[r+3];O[t]=i*o+c*S+f*_+v*j,O[t+1]=n*o+l*S+m*_+g*j,O[t+2]=a*o+d*S+p*_+b*j,O[t+3]=s*o+u*S+h*_+x*j}},transformMat3:fa,scale:ma,shiftRight:function(e,t,r){const o=Math.min(e.count,t.count),i=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*n,o=e*s;i[t]=a[o]>>r,i[t+1]=a[o+1]>>r,i[t+2]=a[o+2]>>r,i[t+3]=a[o+3]>>r}}});var ba=Object.freeze({__proto__:null,fetch:async function(e,t){const r=pa(Object(s.a)(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):ia(r.url,t)),n=function(e,t){const r=[],n=[],a=[],s=[],c=e.resource,l=S.a.parse(c.version||"1.0","wosr");ua.validate(l);const d=c.model.name,u=c.model.geometries,f=c.materialDefinitions,m=e.textures;let p=0;const h=new Map;for(let e=0;e<u.length;e++){const c=u[e];if(!aa(c))continue;const l=da(c),d=c.params.vertexAttributes,v=[];for(const e in d){const t=d[e],r=t.values;v.push([e,{data:r,size:t.valuesPerElement,exclusive:!0}])}const g=[];if("PerAttributeArray"!==c.params.topology){const e=c.params.faces;for(const t in e)g.push([t,new Uint32Array(e[t].values)])}const b=m&&m[l.texture];if(b&&!h.has(l.texture)){const{image:e,params:t}=b,r=new xn(e,t);s.push(r),h.set(l.texture,r)}const x=h.get(l.texture),O=x?x.id:void 0;let y=a[l.material]?a[l.material][l.texture]:null;if(!y){const e=f[l.material.substring(l.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=b&&b.alphaChannelUsage,n=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,s={ambient:Object(i.a)(e.diffuse),diffuse:Object(i.a)(e.diffuse),opacity:1-(e.transparency||0),transparent:n,textureAlphaMode:b?la(b.alphaChannelUsage):void 0,textureAlphaCutoff:.33,textureId:O,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!0};Object(o.P)(t)&&t.materialParamsMixin&&Object.assign(s,t.materialParamsMixin),y=new qi(s),a[l.material]||(a[l.material]={}),a[l.material][l.texture]=y}n.push(y);const w=new Fe(v,g);p+=g.position?g.position.length:0,r.push(w)}return{name:d,stageResources:{textures:s,materials:n,geometries:r},pivotOffset:c.model.pivotOffset,boundingBox:sa(r),numberOfVertices:p,lodThreshold:null}}(e,t);return{lods:[n],referenceBoundingBox:n.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const c=await(t.cache?t.cache.loadGLTF(r.url,t,t.usePBR):Xn(new On(t.streamDataRequester),r.url,t,t.usePBR)),l=Object(o.ap)(c.model.meta,"ESRI_proxyEllipsoid");c.meta.isEsriSymbolResource&&Object(o.P)(l)&&-1!==c.meta.uri.indexOf("/RealisticTrees/")&&function(e,t){for(let r=0;r<e.model.lods.length;++r){const s=e.model.lods[r];e.customMeta.esriTreeRendering=!0;for(const c of s.parts){const s=c.attributes.normal;if(Object(o.J)(s))return;const l=c.attributes.position,u=l.count,f=Object(i.d)(),m=Object(i.d)(),p=Object(i.d)(),h=Mn(d.N,u),v=Mn(d.q,u),g=Object(a.e)([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],c.transform);for(let o=0;o<u;o++){l.getVec(o,m),s.getVec(o,f),Object(n.b)(m,m,c.transform),Object(n.k)(p,m,t.center),Object(n.l)(p,p,t.radius);const i=p[2],a=Object(n.h)(p),d=Math.min(.45+.55*a*a,1);Object(n.l)(p,p,t.radius),Object(n.b)(p,p,g),Object(n.m)(p,p),r+1!==e.model.lods.length&&e.model.lods.length>1&&Object(n.v)(p,p,f,i>-1?.2:Math.min(-4*i-3.8,1)),v.setVec(o,p),h.set(o,0,255*d),h.set(o,1,255*d),h.set(o,2,255*d),h.set(o,3,255)}c.attributes.normal=v,c.attributes.color=h}}}(c,l);const u=c.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:c.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:t.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},f={...t.materialParamsMixin,treeRendering:c.customMeta.esriTreeRendering};if(null!=r.specifiedLodIndex){const e=ha(c,u,f,r.specifiedLodIndex);let t=e[0].boundingBox;return 0!==r.specifiedLodIndex&&(t=ha(c,u,f,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:c.meta.isEsriSymbolResource,isWosr:!1,remove:c.remove}}const m=ha(c,u,f);return{lods:m,referenceBoundingBox:m[0].boundingBox,isEsriSymbolResource:c.meta.isEsriSymbolResource,isWosr:!1,remove:c.remove}},gltfToEngineResources:ha,parseUrl:pa})}}]);