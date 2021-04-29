(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{301:function(e,t,n){"use strict";n.r(t);n(88),n(87),n(76),n(140),n(164),n(165),n(163),n(139);var r=n(1),o=n(0),i=n(8),a=n(86),s=n(379),c=n(402);n(31),n(10),n(137),n(354),n(62);function u(){const e=new Float32Array(4);return e[3]=1,e}Object.freeze({__proto__:null,create:u,clone:function(e){const t=new Float32Array(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t},fromValues:function(e,t,n,r){const o=new Float32Array(4);return o[0]=e,o[1]=t,o[2]=n,o[3]=r,o},createView:function(e,t){return new Float32Array(e,t,4)}});const l=!0,f=0,d=10,b=10,w=12,g=16;function y(e,t,n){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,n+f,d)),version:t.getUint16(n+b,l),checksum:t.getUint32(n+w,l)}}const h=0,p=4,m=8,U=16,v=24,C=32,A=40,I=48,O=56,M=64,F=72,B=80,S=84,T=88;function z(e,t){return{sizeLo:e.getUint32(t+h,l),sizeHi:e.getUint32(t+p,l),minX:e.getFloat64(t+m,l),minY:e.getFloat64(t+U,l),minZ:e.getFloat64(t+v,l),maxX:e.getFloat64(t+C,l),maxY:e.getFloat64(t+A,l),maxZ:e.getFloat64(t+I,l),errorX:e.getFloat64(t+O,l),errorY:e.getFloat64(t+M,l),errorZ:e.getFloat64(t+F,l),count:e.getUint32(t+B,l),reserved:e.getUint32(t+S,l)}}function D(e){const t=new DataView(e,0);let n=0;const{identifier:r,version:i}=y(e,t,n);if(n+=g,"LEPCC     "!==r)throw new o.s("lepcc-decode-error","Bad identifier");if(i>1)throw new o.s("lepcc-decode-error","Unknown version");const a=z(t,n);if(n+=T,a.sizeHi*2**32+a.sizeLo!==e.byteLength)throw new o.s("lepcc-decode-error","Bad size");const s=new Float64Array(3*a.count),c=[],u=[],l=[],f=[];if(n=j(e,n,c),n=j(e,n,u),n=j(e,n,l),n=j(e,n,f),n!==e.byteLength)throw new o.s("lepcc-decode-error","Bad length");let d=0,b=0;for(let e=0;e<c.length;e++){b+=c[e];let t=0;for(let n=0;n<u[e];n++){t+=l[d];const e=f[d];s[3*d]=Math.min(a.maxX,a.minX+2*a.errorX*t),s[3*d+1]=Math.min(a.maxY,a.minY+2*a.errorY*b),s[3*d+2]=Math.min(a.maxZ,a.minZ+2*a.errorZ*e),d++}}return{errorX:a.errorX,errorY:a.errorY,errorZ:a.errorZ,result:s}}function j(e,t,n){const r=[];t=x(e,t,r);const o=[];for(let i=0;i<r.length;i++){o.length=0,t=x(e,t,o);for(let e=0;e<o.length;e++)n.push(o[e]+r[i])}return t}function x(e,t,n){const r=new DataView(e,t),i=r.getUint8(0),a=31&i,s=!!(32&i),c=(192&i)>>6;let u=0;if(0===c)u=r.getUint32(1,l),t+=5;else if(1===c)u=r.getUint16(1,l),t+=3;else{if(2!==c)throw new o.s("lepcc-decode-error","Bad count type");u=r.getUint8(1),t+=2}if(s)throw new o.s("lepcc-decode-error","LUT not implemented");const f=Math.ceil(u*a/8),d=new Uint8Array(e,t,f);let b=0,w=0,g=0;const y=-1>>>32-a;for(let e=0;e<u;e++){for(;w<a;)b|=d[g]<<w,w+=8,g+=1;n[e]=b&y,b>>>=a,w-=a,w+a>32&&(b|=d[g-1]>>8-w)}return t+g}const P=0,L=4,k=8,V=12,E=14,_=15,R=16;function Y(e,t){return{sizeLo:e.getUint32(t+P,l),sizeHi:e.getUint32(t+L,l),count:e.getUint32(t+k,l),colorMapCount:e.getUint16(t+V,l),lookupMethod:e.getUint8(t+E),compressionMethod:e.getUint8(t+_)}}const J=0,X=4,Z=8,N=12,q=14,H=15,$=16;function G(e,t){return{sizeLo:e.getUint32(t+J,l),sizeHi:e.getUint32(t+X,l),count:e.getUint32(t+Z,l),scaleFactor:e.getUint16(t+N,l),bitsPerPoint:e.getUint8(t+q),reserved:e.getUint8(t+H)}}const W=o.n.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function K(e,t,n){let r="",i=0;for(;i<n;){const a=e[t+i];if(a<128)r+=String.fromCharCode(a),i++;else if(a>=192&&a<224){if(i+1>=n)throw new o.s("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const s=(31&a)<<6|63&e[t+i+1];r+=String.fromCharCode(s),i+=2}else if(a>=224&&a<240){if(i+2>=n)throw new o.s("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const s=(15&a)<<12|(63&e[t+i+1])<<6|63&e[t+i+2];r+=String.fromCharCode(s),i+=3}else{if(!(a>=240&&a<248))throw new o.s("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(i+3>=n)throw new o.s("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const s=(7&a)<<18|(63&e[t+i+1])<<12|(63&e[t+i+2])<<6|63&e[t+i+3];if(s>=65536){const e=55296+(s-65536>>10),t=56320+(1023&s);r+=String.fromCharCode(e,t)}else r+=String.fromCharCode(s);i+=4}}}return r}function Q(e,t){const n={byteOffset:0,byteCount:0,fields:Object.create(null)};let r=0;for(let o=0;o<t.length;o++){const i=t[o],a=i.valueType||i.type,s=ie[a];n.fields[i.property]=s(e,r),r+=oe[a].BYTES_PER_ELEMENT}return n.byteCount=r,n}function ee(e,t){return new oe[t.valueType](e,t.byteOffset,t.count*t.valuesPerElement)}function te(e,t,n){if(t!==e&&W.error(`Invalid ${n} buffer size\n expected: ${e}, actual: ${t})`),t<e)throw new o.s("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}const ne={position:"position",normal:"normal",color:"color",uv0:"uv0",region:"uvRegion"};function re(e,t,n){if("lepcc-rgb"===e.encoding)return function(e){const t=new DataView(e,0);let n=0;const{identifier:r,version:i}=y(e,t,n);if(n+=g,"ClusterRGB"!==r)throw new o.s("lepcc-decode-error","Bad identifier");if(i>1)throw new o.s("lepcc-decode-error","Unknown version");const a=Y(t,n);if(n+=R,a.sizeHi*2**32+a.sizeLo!==e.byteLength)throw new o.s("lepcc-decode-error","Bad size");if((2===a.lookupMethod||1===a.lookupMethod)&&0===a.compressionMethod){if(3*a.colorMapCount+a.count+n!==e.byteLength||a.colorMapCount>256)throw new o.s("lepcc-decode-error","Bad count");const t=new Uint8Array(e,n,3*a.colorMapCount),r=new Uint8Array(e,n+3*a.colorMapCount,a.count),i=new Uint8Array(3*a.count);for(let e=0;e<a.count;e++){const n=r[e];i[3*e]=t[3*n],i[3*e+1]=t[3*n+1],i[3*e+2]=t[3*n+2]}return i}if(0===a.lookupMethod&&0===a.compressionMethod){if(3*a.count+n!==e.byteLength||0!==a.colorMapCount)throw new o.s("lepcc-decode-error","Bad count");return new Uint8Array(e,n).slice()}if(a.lookupMethod<=2&&1===a.compressionMethod){if(n+3!==e.byteLength||1!==a.colorMapCount)throw new o.s("lepcc-decode-error","Bad count");const r=t.getUint8(n),i=t.getUint8(n+1),s=t.getUint8(n+2),c=new Uint8Array(3*a.count);for(let e=0;e<a.count;e++)c[3*e]=r,c[3*e+1]=i,c[3*e+2]=s;return c}throw new o.s("lepcc-decode-error","Bad method "+a.lookupMethod+","+a.compressionMethod)}(t);if("lepcc-intensity"===e.encoding)return function(e){const t=new DataView(e,0);let n=0;const{identifier:r,version:i}=y(e,t,n);if(n+=g,"Intensity "!==r)throw new o.s("lepcc-decode-error","Bad identifier");if(i>1)throw new o.s("lepcc-decode-error","Unknown version");const a=G(t,n);if(n+=$,a.sizeHi*2**32+a.sizeLo!==e.byteLength)throw new o.s("lepcc-decode-error","Bad size");const s=new Uint16Array(a.count);if(8===a.bitsPerPoint){if(a.count+n!==e.byteLength)throw new o.s("lepcc-decode-error","Bad size");const t=new Uint8Array(e,n,a.count);for(let e=0;e<a.count;e++)s[e]=t[e]*a.scaleFactor}else if(16===a.bitsPerPoint){if(2*a.count+n!==e.byteLength)throw new o.s("lepcc-decode-error","Bad size");const t=new Uint16Array(e,n,a.count);for(let e=0;e<a.count;e++)s[e]=t[e]*a.scaleFactor}else{const t=[];if(x(e,n,t)!==e.byteLength)throw new o.s("lepcc-decode-error","Bad size");for(let e=0;e<a.count;e++)s[e]=t[e]*a.scaleFactor}return s}(t);if(null!=e.encoding&&""!==e.encoding)throw new o.s("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(W.warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),"ObjectIds"===e.ordering[0]&&e.hasOwnProperty("objectIds")&&(W.warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");const i=function(e,t,n){const i=null!=t.header?Q(e,t.header):{byteOffset:0,byteCount:0,fields:{count:n}},a={header:i,byteOffset:i.byteCount,byteCount:0,entries:Object.create(null)};let s=i.byteCount;for(let e=0;e<t.ordering.length;e++){const n=t.ordering[e],c=Object(r.o)(t[n]);if(c.count=i.fields.count,"String"===c.valueType){if(c.byteOffset=s,c.byteCount=i.fields[n+"ByteCount"],"UTF-8"!==c.encoding)throw new o.s("unsupported-encoding","Unsupported String encoding.",{encoding:c.encoding})}else{if(!ae(c.valueType))throw new o.s("unsupported-value-type","Unsupported binary valueType",{valueType:c.valueType});{const e=se(c.valueType);s+=s%e!=0?e-s%e:0,c.byteOffset=s,c.byteCount=e*c.valuesPerElement*c.count}}s+=c.byteCount,a.entries[n]=c}return a.byteCount=s-a.byteOffset,a}(t,e,n);te(i.byteOffset+i.byteCount,t.byteLength,"attribute");const a=i.entries.attributeValues||i.entries.objectIds;if(a){if("String"===a.valueType){const e=i.entries.attributeByteCounts,n=ee(t,e),r=function(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}(t,a);return function(e,t,n){const r=[];let i,a,s=0;for(a=0;a<e;a+=1){if(i=t[a],i>0){if(r.push(K(n,s,i-1)),0!==n[s+i-1])throw new o.s("string-array-error","Invalid string array: missing null termination.")}else r.push(null);s+=i}return r}(e.count,n,r)}return ee(t,a)}throw new o.s("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const oe={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},ie={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function ae(e){return oe.hasOwnProperty(e)}function se(e){return ae(e)?oe[e].BYTES_PER_ELEMENT:0}function ce(e,t){if(null==e.encoding||""===e.encoding){const n=function(e,t){const n=Q(e,t&&t.header);let r=n.byteCount;const o={isDraco:!1,header:n,byteOffset:n.byteCount,byteCount:0,vertexAttributes:{}},i=n.fields,a=null!=i.vertexCount?i.vertexCount:i.count;for(const e of t.ordering){if(!t.vertexAttributes[e])continue;const n={...t.vertexAttributes[e],byteOffset:r,count:a},i=ne[e]?ne[e]:"_"+e;o.vertexAttributes[i]=n,r+=se(n.valueType)*n.valuesPerElement*a}const s=i.faceCount;if(t.faces&&s){o.faces={};for(const e of t.ordering){if(!t.faces[e])continue;const n={...t.faces[e],byteOffset:r,count:s};o.faces[e]=n,r+=se(n.valueType)*n.valuesPerElement*s}}const c=i.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&c){o.featureAttributes={};for(const e of t.featureAttributeOrder){if(!t.featureAttributes[e])continue;const n={...t.featureAttributes[e],byteOffset:r,count:c};o.featureAttributes[e]=n,r+=("UInt64"===n.valueType?8:se(n.valueType))*n.valuesPerElement*c}}return te(r,e.byteLength,"geometry"),o.byteCount=r-o.byteOffset,o}(t,e);if(Object(o.J)(n.vertexAttributes.position))return;const r=ee(t,n.vertexAttributes.position),i=n.header.fields,a=[i.offsetX,i.offsetY,i.offsetZ],s=[i.scaleX,i.scaleY,i.scaleZ],c=r.length/3,u=new Float64Array(3*c);for(let e=0;e<c;e++)u[3*e]=r[3*e]*s[0]+a[0],u[3*e+1]=r[3*e+1]*s[1]+a[1],u[3*e+2]=r[3*e+2]*s[2]+a[2];return u}if("lepcc-xyz"===e.encoding)return D(t).result}function ue(e,t,n){return Object(o.P)(e)&&e.attributeInfo.useElevation?function(e,t){const n=new Float64Array(t);for(let r=0;r<t;r++)n[r]=e[3*r+2];return n}(t,n):Object(o.P)(e)?re(e.attributeInfo.storageInfo,e.buffer,n):null}function le(e){return null==e||"none"===e?null:"low-four-bit"===e?e=>15&e:"high-four-bit"===e?e=>(240&e)>>4:"absolute-value"===e?e=>Math.abs(e):"modulo-ten"===e?e=>e%10:null}function fe(e){let t=0;for(const n of e||[])t|=1<<n;return t}class de{transform(e){const t=this._transform(e),n=[t.points.buffer,t.rgb.buffer];Object(o.P)(t.pointIdFilterMap)&&n.push(t.pointIdFilterMap.buffer);for(const e of t.attributes)"buffer"in e.values&&Object(r.c)(e.values.buffer)&&e.values.buffer!==t.rgb.buffer&&n.push(e.values.buffer);return Promise.resolve({result:t,transferList:n})}_transform(e){const t=ce(e.schema,e.geometryBuffer);let n=t.length/3,r=null;const i=[],a=ue(e.primaryAttributeData,t,n);Object(o.P)(e.primaryAttributeData)&&a&&i.push({attributeInfo:e.primaryAttributeData.attributeInfo,values:a});const s=ue(e.modulationAttributeData,t,n);Object(o.P)(e.modulationAttributeData)&&s&&i.push({attributeInfo:e.modulationAttributeData.attributeInfo,values:s});let u=function(e,t,n,r){const{rendererJSON:o,isRGBRenderer:i}=e;let a=null,s=null;if(t&&i)a=t;else if(t&&"pointCloudUniqueValueRenderer"===o.type){s=c.a.fromJSON(o);const e=s.colorUniqueValueInfos;a=new Uint8Array(3*r);const n=le(s.fieldTransformType);for(let o=0;o<r;o++){const r=(n?n(t[o]):t[o])+"";for(let t=0;t<e.length;t++)if(e[t].values.indexOf(r)>=0){a[3*o]=e[t].color.r,a[3*o+1]=e[t].color.g,a[3*o+2]=e[t].color.b;break}}}else if(t&&"pointCloudStretchRenderer"===o.type){s=c.c.fromJSON(o);const e=s.stops;a=new Uint8Array(3*r);const n=le(s.fieldTransformType);for(let o=0;o<r;o++){const r=n?n(t[o]):t[o],i=e.length-1;if(r<e[0].value)a[3*o]=e[0].color.r,a[3*o+1]=e[0].color.g,a[3*o+2]=e[0].color.b;else if(r>=e[i].value)a[3*o]=e[i].color.r,a[3*o+1]=e[i].color.g,a[3*o+2]=e[i].color.b;else for(let t=1;t<e.length;t++)if(r<e[t].value){const n=(r-e[t-1].value)/(e[t].value-e[t-1].value);a[3*o]=e[t].color.r*n+e[t-1].color.r*(1-n),a[3*o+1]=e[t].color.g*n+e[t-1].color.g*(1-n),a[3*o+2]=e[t].color.b*n+e[t-1].color.b*(1-n);break}}}else if(t&&"pointCloudClassBreaksRenderer"===o.type){s=c.b.fromJSON(o);const e=s.colorClassBreakInfos;a=new Uint8Array(3*r);const n=le(s.fieldTransformType);for(let o=0;o<r;o++){const r=n?n(t[o]):t[o];for(let t=0;t<e.length;t++)if(r>=e[t].minValue&&r<=e[t].maxValue){a[3*o]=e[t].color.r,a[3*o+1]=e[t].color.g,a[3*o+2]=e[t].color.b;break}}}else{a=new Uint8Array(3*r);for(let e=0;e<a.length;e++)a[e]=255}if(n&&s&&s.colorModulation){const e=s.colorModulation.minValue,t=s.colorModulation.maxValue,o=.3;for(let i=0;i<r;i++){const r=n[i],s=r>=t?1:r<=e?o:o+(1-o)*(r-e)/(t-e);a[3*i]=s*a[3*i],a[3*i+1]=s*a[3*i+1],a[3*i+2]=s*a[3*i+2]}}return a}(e.rendererInfo,a,s,n);if(e.filterInfo&&e.filterInfo.length>0&&Object(o.P)(e.filterAttributesData)){const o=e.filterAttributesData.map((e=>{const r=ue(e,t,n),o={attributeInfo:e.attributeInfo,values:r};return i.push(o),o}));r=new Uint32Array(n),n=function(e,t,n,r,o){const i=e.length/3;let a=0;for(let s=0;s<i;s++){let i=!0;for(let e=0;e<r.length&&i;e++){const{filterJSON:t}=r[e],n=o[e].values[s];switch(t.type){case"pointCloudValueFilter":{const e="exclude"===t.mode;-1!==t.values.indexOf(n)===e&&(i=!1);break}case"pointCloudBitfieldFilter":{const e=fe(t.requiredSetBits),r=fe(t.requiredClearBits);(n&e)===e&&0==(n&r)||(i=!1);break}case"pointCloudReturnFilter":{const e=15&n,r=n>>>4&15,o=r>1,a=1===e,s=e===r;let c=!1;for(const e of t.includedReturns)if("last"===e&&s||"firstOfMany"===e&&a&&o||"lastOfMany"===e&&s&&o||"single"===e&&!o){c=!0;break}c||(i=!1);break}}}i&&(n[a]=s,e[3*a]=e[3*s],e[3*a+1]=e[3*s+1],e[3*a+2]=e[3*s+2],t[3*a]=t[3*s],t[3*a+1]=t[3*s+1],t[3*a+2]=t[3*s+2],a++)}return a}(t,u,r,e.filterInfo,o)}for(const r of e.userAttributesData){const e=ue(r,t,n);i.push({attributeInfo:r.attributeInfo,values:e})}3*n<u.length&&(u=new Uint8Array(u.buffer.slice(0,3*n))),this._applyElevationOffsetInPlace(t,n,e.elevationOffset);const l=this._transformCoordinates(t,n,e.obb,o.A.fromJSON(e.inSR),o.A.fromJSON(e.outSR));return{obb:e.obb,points:l,rgb:u,attributes:i,pointIdFilterMap:r}}_transformCoordinates(e,t,n,r,o){if(!Object(a.j)(e,r,0,e,o,0,t))throw Error("Can't reproject");const c=Object(s.g)(n.center[0],n.center[1],n.center[2]),u=Object(s.f)(),l=Object(s.f)();Object(s.h)(be,n.quaternion);const f=new Float32Array(3*t);for(let r=0;r<t;r++)u[0]=e[3*r]-c[0],u[1]=e[3*r+1]-c[1],u[2]=e[3*r+2]-c[2],Object(i.d)(l,u,be),n.halfSize[0]=Math.max(n.halfSize[0],Math.abs(l[0])),n.halfSize[1]=Math.max(n.halfSize[1],Math.abs(l[1])),n.halfSize[2]=Math.max(n.halfSize[2],Math.abs(l[2])),f[3*r]=u[0],f[3*r+1]=u[1],f[3*r+2]=u[2];return f}_applyElevationOffsetInPlace(e,t,n){if(0!==n)for(let r=0;r<t;r++)e[3*r+2]+=n}}const be=u();t.default=function(){return new de}}}]);