import { e, y, N, i as i$1, a, aM as t, _ as j$1, a1 as e$1, o, A as k, an as s, aq as S, b5 as R, ak as d, ai as g } from './Identifiable-c8406192.js';
import './config-b3bf08ce.js';
import { G } from './unitUtils-1b0a3531.js';
import { i as i$2 } from './aaBoundingRect-a3d841c1.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var l;let p=l=class extends a{constructor(e){super(e),this.level=0,this.levelValue=null,this.resolution=0,this.scale=0;}clone(){return new l({level:this.level,levelValue:this.levelValue,resolution:this.resolution,scale:this.scale})}};e([y({type:N,json:{write:!0}})],p.prototype,"level",void 0),e([y({type:String,json:{write:!0}})],p.prototype,"levelValue",void 0),e([y({type:Number,json:{write:!0}})],p.prototype,"resolution",void 0),e([y({type:Number,json:{write:!0}})],p.prototype,"scale",void 0),p=l=e([i$1("esri.layers.support.LOD")],p);var i=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var v;const w=new t({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc",LERC2D:"lerc2d",RAW:"raw",pbf:"pbf"});let j=v=class extends a{constructor(e){super(e),this.dpi=96,this.format=null,this.origin=null,this.minScale=0,this.maxScale=0,this.size=null,this.spatialReference=null;}static create(e={size:256,spatialReference:k.WebMercator}){const t=e.resolutionFactor||1,o=e.scales,r=e.size||256,s$1=e.spatialReference||k.WebMercator;if(!s(s$1)){const e=[];if(o)for(let t=0;t<o.length;t++){const r=o[t];e.push({level:t,scale:r,resolution:r});}else {let t=5e-4;for(let o=23;o>=0;o--)e.unshift({level:o,scale:t,resolution:t}),t*=2;}return new v({dpi:96,lods:e,origin:new j$1(0,0,s$1),size:[r,r],spatialReference:s$1})}const i=S(s$1),l=e.origin?new j$1({x:e.origin.x,y:e.origin.y,spatialReference:s$1}):new j$1(i?{x:i.origin[0],y:i.origin[1],spatialReference:s$1}:{x:0,y:0,spatialReference:s$1}),n=96,u=1/(G(s$1)*39.37*n),h=[];if(o)for(let p=0;p<o.length;p++){const e=o[p],t=e*u;h.push({level:p,scale:e,resolution:t});}else {let e=R(s$1)?512/r*591657527.5917094:256/r*591657527.591555;const o=Math.ceil(24/t);h.push({level:0,scale:e,resolution:e*u});for(let r=1;r<o;r++){const o=e/2**t,s=o*u;h.push({level:r,scale:o,resolution:s}),e=o;}}return new v({dpi:n,lods:h,origin:l,size:[r,r],spatialReference:s$1})}get isWrappable(){const{spatialReference:e,origin:t}=this;if(e&&t){const o=S(e);return e.isWrappable&&Math.abs(o.origin[0]-t.x)<=o.dx}return !1}readOrigin(e,t){return j$1.fromJSON({spatialReference:t.spatialReference,...e})}set lods(e){let t=0,o=0;const r=[];this._levelToLOD={},e&&(t=-1/0,o=1/0,e.forEach((e=>{r.push(e.scale),t=e.scale>t?e.scale:t,o=e.scale<o?e.scale:o,this._levelToLOD[e.level]=e;}))),this._set("scales",r),this._set("minScale",t),this._set("maxScale",o),this._set("lods",e),this._initializeUpsampleLevels();}readSize(e,t){return [t.cols,t.rows]}writeSize(e,t){t.cols=e[0],t.rows=e[0];}zoomToScale(e){const t=this.scales;if(e<=0)return t[0];if(e>=t.length)return t[t.length-1];{const o=Math.round(e-.5),r=Math.round(e);return t[r]+(r-e)*(t[o]-t[r])}}scaleToZoom(e){const t=this.scales,o=t.length-1;let r=0;for(;r<o;r++){const o=t[r],s=t[r+1];if(o<=e)return r;if(s===e)return r+1;if(o>e&&s<e)return r+1-(e-s)/(o-s)}return r}snapScale(e,t=.95){const o=this.scaleToZoom(e);return o%Math.floor(o)>=t?this.zoomToScale(Math.ceil(o)):this.zoomToScale(Math.floor(o))}tileAt(e,t,o,r){const s=this.lodAt(e);if(!s)return null;let i,l;if("number"==typeof t)i=t,l=o;else if(d(t.spatialReference,this.spatialReference))i=t.x,l=t.y,r=o;else {const e=g(t,this.spatialReference);if(!e)return null;i=e.x,l=e.y,r=o;}const n=s.resolution*this.size[0],p=s.resolution*this.size[1];return r||(r={id:null,level:0,row:0,col:0,extent:i$2()}),r.level=e,r.row=Math.floor((this.origin.y-l)/p+.001),r.col=Math.floor((i-this.origin.x)/n+.001),this.updateTileInfo(r),r}updateTileInfo(e,t=0){let o=this.lodAt(e.level);if(!o&&1===t){const t=this.lods[this.lods.length-1];t.level<e.level&&(o=t);}if(!o)return;const r=e.level-o.level,s=o.resolution*this.size[0]/2**r,i=o.resolution*this.size[1]/2**r;e.id=`${e.level}/${e.row}/${e.col}`,e.extent||(e.extent=i$2()),e.extent[0]=this.origin.x+e.col*s,e.extent[1]=this.origin.y-(e.row+1)*i,e.extent[2]=e.extent[0]+s,e.extent[3]=e.extent[1]+i;}upsampleTile(e){const t=this._upsampleLevels[e.level];return !(!t||-1===t.parentLevel)&&(e.level=t.parentLevel,e.row=Math.floor(e.row/t.factor+.001),e.col=Math.floor(e.col/t.factor+.001),this.updateTileInfo(e),!0)}getTileBounds(e,t){const{resolution:o}=this.lodAt(t.level),r=o*this.size[0],s=o*this.size[1];return e[0]=this.origin.x+t.col*r,e[1]=this.origin.y-(t.row+1)*s,e[2]=e[0]+r,e[3]=e[1]+s,e}lodAt(e){return this._levelToLOD&&this._levelToLOD[e]||null}clone(){return v.fromJSON(this.write({}))}_initializeUpsampleLevels(){const e=this.lods;this._upsampleLevels=[];let t=null;for(let o=0;o<e.length;o++){const r=e[o];this._upsampleLevels[r.level]={parentLevel:t?t.level:-1,factor:t?t.resolution/r.resolution:0},t=r;}}};e([y({type:Number,json:{write:!0}})],j.prototype,"compressionQuality",void 0),e([y({type:Number,json:{write:!0}})],j.prototype,"dpi",void 0),e([y({type:String,json:{read:w.read,write:w.write,origins:{"web-scene":{read:!1,write:!1}}}})],j.prototype,"format",void 0),e([y({readOnly:!0})],j.prototype,"isWrappable",null),e([y({type:j$1,json:{write:!0}})],j.prototype,"origin",void 0),e([e$1("origin")],j.prototype,"readOrigin",null),e([y({type:[i],value:null,json:{write:!0}})],j.prototype,"lods",null),e([y({readOnly:!0})],j.prototype,"minScale",void 0),e([y({readOnly:!0})],j.prototype,"maxScale",void 0),e([y({readOnly:!0})],j.prototype,"scales",void 0),e([y({cast:e=>Array.isArray(e)?e:"number"==typeof e?[e,e]:[256,256]})],j.prototype,"size",void 0),e([e$1("size",["rows","cols"])],j.prototype,"readSize",null),e([o("size",{cols:{type:N},rows:{type:N}})],j.prototype,"writeSize",null),e([y({type:k,json:{write:!0}})],j.prototype,"spatialReference",void 0),j=v=e([i$1("esri.layers.support.TileInfo")],j);var x=j;

export { i, x };
