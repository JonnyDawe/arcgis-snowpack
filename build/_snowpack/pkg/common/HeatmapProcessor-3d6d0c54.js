import { e, i, P as r, c6 as A } from './Identifiable-c8406192.js';
import './config-b3bf08ce.js';
import { m } from './diffUtils-e1cd943c.js';
import { o as o$1 } from './definitions-681c54ec.js';
import { o } from './heatmapUtils-5a2c9b57.js';
import { l as l$1 } from './tileUtils-aab0f1e2.js';
import { p } from './BaseProcessor-b1ef5091.js';
import './Query-448be42b.js';
import './jsonUtils-d762dc00.js';
import './TimeExtent-155cb8a4.js';
import './Field-e6fe6b12.js';
import './fieldUtils-a9f71c96.js';
import './fieldType-769fe7ff.js';
import './TileKey-482fe256.js';
import './HandleOwner-2c2dff93.js';
import './watchUtils-880dbce7.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class d{constructor(e,t){this.offset=e,this.extent=t;}}function c(e){const t=e.key,s=new Map,r=256,i=o$1,a=e.tileInfoView.tileInfo.isWrappable;return s.set(l$1(t,-1,-1,a).id,new d([-i,-i],[i-r,i-r,i,i])),s.set(l$1(t,0,-1,a).id,new d([0,-i],[0,i-r,i,i])),s.set(l$1(t,1,-1,a).id,new d([i,-i],[0,i-r,r,i])),s.set(l$1(t,-1,0,a).id,new d([-i,0],[i-r,0,i,i])),s.set(l$1(t,1,0,a).id,new d([i,0],[0,0,r,i])),s.set(l$1(t,-1,1,a).id,new d([-i,i],[i-r,0,i,r])),s.set(l$1(t,0,1,a).id,new d([0,i],[0,0,i,r])),s.set(l$1(t,1,1,a).id,new d([i,i],[0,0,r,r])),s}let l=class extends p{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map;}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))]);}async update(e,t){const s=t.schema.processors[0];if("heatmap"!==s.type)return;m(this._schema,s)&&(e.mesh=!0,this._schema=s);}onTileUpdate(e){for(const t of e.removed)this._tileKeyToFeatureSets.delete(t.key.id);}onTileClear(e){const t={clear:!0};return this._tileKeyToFeatureSets.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t})}async onTileMessage(e,r$1,i){this._tileKeyToFeatureSets.has(e.key.id)||this._tileKeyToFeatureSets.set(e.key.id,new Map);const o$1=this._tileKeyToFeatureSets.get(e.key.id);if(r(r$1.addOrUpdate)&&r$1.addOrUpdate.hasFeatures&&o$1.set(r$1.addOrUpdate.instance,r$1),r$1.end){const t=[],r=c(e);this._tileKeyToFeatureSets.forEach(((i,o)=>{if(o===e.key.id)i.forEach((e=>A(e.addOrUpdate,(e=>t.push(e)))));else if(r.has(o)){const e=r.get(o),[a,n]=e.offset;i.forEach((e=>A(e.addOrUpdate,(e=>{const s=e.transform(a,n,1,1);t.push(s);}))));}}));const o$1=o(t,this._schema.mesh,512,512),n={tileKey:e.key.id,intensityInfo:o$1},p=[o$1.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",n,{...i,transferList:p})}}onTileError(e,t,s){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},s)}};l=e([i("esri.views.2d.layers.features.processors.HeatmapProcessor")],l);var h=l;

export default h;
