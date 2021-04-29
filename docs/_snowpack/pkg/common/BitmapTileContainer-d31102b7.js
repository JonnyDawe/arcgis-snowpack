import { i as i$1 } from './aaBoundingRect-a3d841c1.js';
import { I } from './Utils-0d5f7d82.js';
import { g } from './WGLContainer-c91d6469.js';
import { r, i } from './TileContainer-21a4a969.js';
import { _ } from './Bitmap-a7ead8ae.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class s extends r{constructor(t,s,r,i=null){super(t,s,r,r),this.bitmap=new _(i,"standard",!1),this.bitmap.coordScale=r,this.bitmap.once("isReady",(()=>this.ready()));}destroy(){super.destroy(),this.bitmap.destroy();}beforeRender(t){super.beforeRender(t),this.bitmap.beforeRender(t);}afterRender(t){super.afterRender(t),this.bitmap.afterRender(t);}set stencilRef(t){this.bitmap.stencilRef=t;}get stencilRef(){return this.bitmap.stencilRef}setTransform(t,e){super.setTransform(t,e),this.bitmap.transforms.dvs=this.transforms.dvs;}onAttach(){this.bitmap.stage=this.stage;}onDetach(){this.bitmap&&(this.bitmap.stage=null);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class n extends i{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.bitmap.blendFunction))}createTile(r){const s$1=this._tileInfoView.getTileBounds(i$1(),r);return new s(r,s$1,this._tileInfoView.tileInfo.size)}destroyTile(){}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[g.bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:I.MAP});return [...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===I.MAP&&super.doRender(e);}}

export { n };
