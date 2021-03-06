import { e as e$1, y as y$1, i as i$1, u as u$2, aa as q, aq as S$1, M } from './Identifiable-c8406192.js';
import './config-b3bf08ce.js';
import { i } from './aaBoundingRect-a3d841c1.js';
import { x as x$1 } from './TileInfo-f085f660.js';
import { e } from './TileKey-482fe256.js';
import { h } from './TileInfoView-40300351.js';
import { _ } from './Bitmap-a7ead8ae.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const t=Math.PI/180;function n(n){return n*t}function r(t,o){const r=n(o.rotation),u=Math.abs(Math.cos(r)),a=Math.abs(Math.sin(r)),[s,c]=o.size;return t[0]=Math.round(c*a+s*u),t[1]=Math.round(c*u+s*a),t}function u$1(t,n,o,r){const[u,a]=n,[s,c]=r,i=.5*o;return t[0]=u-i*s,t[1]=a-i*c,t[2]=u+i*s,t[3]=a+i*c,t}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const u=i(),g=[0,0],f=new e(0,0,0,0),x={container:null,fetchSource:null,requestUpdate:null,imageMaxWidth:2048,imageMaxHeight:2048,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1};let y=class extends u$2{constructor(t){super(t),this._imagePromise=null,this.hidpi=x.hidpi,this.imageMaxWidth=x.imageMaxWidth,this.imageMaxHeight=x.imageMaxHeight,this.imageRotationSupported=x.imageRotationSupported,this.imageNormalizationSupported=x.imageNormalizationSupported,this.update=q((async(t,e)=>{const i=t.state,o=S$1(i.spatialReference),r$1=this.hidpi?t.pixelRatio:1;if(!t.stationary||this.destroyed)return null;this.imageRotationSupported?(g[0]=i.size[0],g[1]=i.size[1]):r(g,i);const a=Math.floor(g[0]*r$1)>this.imageMaxWidth||Math.floor(g[1]*r$1)>this.imageMaxHeight,p=o&&(i.extent.xmin<o.valid[0]||i.extent.xmax>o.valid[1]),n=!this.imageNormalizationSupported&&p,m=!a&&!n,l=this.imageRotationSupported?i.rotation:0;if(m)this._imagePromise=this._singleExport(i,g,l,r$1,e);else {let t=Math.min(this.imageMaxWidth,this.imageMaxHeight);n&&(t=Math.min(i.worldScreenWidth,t)),this._imagePromise=this._tiledExport(i,t,l,r$1,e);}return this._imagePromise.then((async t=>{if(this._imagePromise=null,!this.destroyed){for(const e of this.container.children)t.includes(e)||e.fadeOut().then((()=>{e.remove();}));for(const e of t)this.container.addChild(e),e.fadeIn();}})).catch((t=>{throw this._imagePromise=null,t}))}),5e3);}destroy(){}get updating(){return null!==this._imagePromise}updateExports(t){for(const e of this.container.children){if(!e.visible||!e.stage)return;t(e)?console.error("ExportStrategy.updateExports doesn't support promise yet"):(e.invalidateTexture(),e.requestRender());}}_export(t,e,i,o,r,s){return Promise.resolve().then((()=>this.fetchSource(t,Math.floor(e*r),Math.floor(i*r),{rotation:o,pixelRatio:r,signal:s}))).then((i=>{const s=new _(i,"additive");return s.x=t.xmin,s.y=t.ymax,s.resolution=t.width/e,s.rotation=o,s.pixelRatio=r,s}))}_singleExport(t,e,i,o,r){u$1(u,t.center,t.resolution,e);const s=new M(u[0],u[1],u[2],u[3],t.spatialReference);return this._export(s,e[0],e[1],i,o,r).then((t=>[t]))}_tiledExport(t,e,i,o,r){const s=x$1.create({size:e,spatialReference:t.spatialReference,scales:[t.scale]}),p=new h(s),m=p.getTileCoverage(t);if(!m)return null;const h$1=[];return m.forEach(((s,n,m,l)=>{f.set(s,n,m,l),p.getTileBounds(u,f);const d=new M(u[0],u[1],u[2],u[3],t.spatialReference);h$1.push(this._export(d,e,e,i,o,r));})),Promise.all(h$1)}};e$1([y$1()],y.prototype,"_imagePromise",void 0),e$1([y$1()],y.prototype,"container",void 0),e$1([y$1()],y.prototype,"fetchSource",void 0),e$1([y$1()],y.prototype,"hidpi",void 0),e$1([y$1()],y.prototype,"imageMaxWidth",void 0),e$1([y$1()],y.prototype,"imageMaxHeight",void 0),e$1([y$1()],y.prototype,"imageRotationSupported",void 0),e$1([y$1()],y.prototype,"imageNormalizationSupported",void 0),e$1([y$1()],y.prototype,"requestUpdate",void 0),e$1([y$1()],y.prototype,"updating",null),y=e$1([i$1("esri.views.2d.layers.support.ExportStrategy")],y);var S=y;

export { S };
