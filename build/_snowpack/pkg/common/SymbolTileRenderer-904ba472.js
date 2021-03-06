import { P as r$1, J as t, bJ as c, b$ as z, e as e$2, i as i$2 } from './Identifiable-c8406192.js';
import './config-b3bf08ce.js';
import { i as i$3 } from './aaBoundingRect-a3d841c1.js';
import { m } from './visualVariablesUtils-4c7ed7ac.js';
import { E as s$1 } from './schemaUtils-da3a1cd7.js';
import { s } from './CircularArray-8c2dd6fa.js';
import { D } from './vec2-f6c2e17c.js';
import { a as n$1, n as n$2, i as i$1, o as o$1, b as n$3 } from './TileStrategy-ff1490fc.js';
import { t as te, E, I } from './Utils-0d5f7d82.js';
import { r as r$2, o as o$2 } from './FeatureContainer-c35a73f4.js';
import { o as o$3 } from './BaseTileRenderer-43b9cfaf.js';
import { g as g$1 } from './WGLContainer-c91d6469.js';
import './symbols-a702d148.js';
import './fieldUtils-a9f71c96.js';
import './persistableUrlUtils-b4be11a9.js';
import './definitions-681c54ec.js';
import './visualVariablesUtils-c37b8ac9.js';
import './UniqueValueRenderer-6eda9445.js';
import './ColorStop-27e1a5ee.js';
import './styleUtils-062f64a7.js';
import './sizeVariableUtils-33233df0.js';
import './visualVariableUtils-66f67c57.js';
import './compilerUtils-006be997.js';
import './Graphic-9f79c7db.js';
import './jsonUtils-d762dc00.js';
import './PopupTemplate-77ad81c4.js';
import './uid-7967dd4d.js';
import './lengthUtils-cb1a7b62.js';
import './unitUtils-1b0a3531.js';
import './diffUtils-e1cd943c.js';
import './jsonUtils-abe1bd07.js';
import './LRUCache-9b61e325.js';
import './MemCache-1f56f5a2.js';
import './MD5-944ef260.js';
import './MaterialKey-1dd9041e.js';
import './normalizeUtils-2bbe7974.js';
import './Rect-7bb5ea0f.js';
import './BidiEngine-aa559a1b.js';
import './vec3-ae5ae182.js';
import './vec3f64-a6795633.js';
import './TileInfoView-40300351.js';
import './TileKey-482fe256.js';
import './FramebufferObject-903a1e6f.js';
import './_commonjsHelpers-268aa74f.js';
import './TileContainer-21a4a969.js';
import './mat3-425ec876.js';
import './MapView-287c7d57.js';
import './CollectionFlattener-5ff807fc.js';
import './watchUtils-880dbce7.js';
import './workers-31c2755c.js';
import './Widget-2f53b352.js';
import './HandleOwner-2c2dff93.js';
import './GoTo-21ecf3ed.js';
import './widget-0e54f9c7.js';
import './RelationshipQuery-1cbf03e3.js';
import './Query-448be42b.js';
import './TimeExtent-155cb8a4.js';
import './Field-e6fe6b12.js';
import './fieldType-769fe7ff.js';
import './QueryTask-60c0f90b.js';
import './FeatureSet-ceb33ccf.js';
import './Task-21d7c7ba.js';
import './query-95e8633c.js';
import './queryZScale-3f81db56.js';
import './zscale-209a474d.js';
import './pbfQueryUtils-fdd38078.js';
import './OptimizedFeatureSet-d6270f6b.js';
import './pbf-02a10316.js';
import './featureConversionUtils-6830a580.js';
import './FeatureLayer-346f29ad.js';
import './Layer-d22ad00d.js';
import './MultiOriginJSONSupport-29c9a66e.js';
import './arcgisLayerUrl-d85d6d65.js';
import './HeightModelInfo-f665a73c.js';
import './OperationalLayer-d48a5914.js';
import './FieldsIndex-d0d5f38b.js';
import './ArcGISService-7a5cc3ad.js';
import './BlendLayer-f2f3b180.js';
import './FeatureType-a62beea1.js';
import './PortalLayer-8f26d9e1.js';
import './RefreshableLayer-cf71b273.js';
import './ScaleRangeLayer-8feef0dd.js';
import './TimeInfo-190b35f7.js';
import './TemporalLayer-c333d449.js';
import './labelingInfo-21494a5d.js';
import './LabelClass-c61f8b70.js';
import './labelUtils-5176895f.js';
import './defaults-91b05a2c.js';
import './defaultsJSON-375e89aa.js';
import './fieldProperties-b389086f.js';
import './styleUtils-f2703dfb.js';
import './popupUtils-5e9c2795.js';
import './utils-68b4615c.js';
import './ItemCache-717f7581.js';
import './mathUtils-25e61b42.js';
import './TileInfo-f085f660.js';
import './Map-3c24a571.js';
import './TablesMixin-d10799e4.js';
import './GraphicsCollection-afd60f67.js';
import './unitBezier-6bff3f6f.js';
import './projection-1aa78979.js';
import './mat4-3619c4da.js';
import './capabilities-6619b906.js';
import './Container-0dd65e2f.js';
import './mat4f32-575d0c83.js';
import './VertexArrayObject-21aea4dd.js';
import './vec4f32-27a1bf8c.js';
import './ShaderCompiler-c2405d4f.js';
import './earcut-d6248195.js';
import './GeometryUtils-04b09680.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const e$1=6,r=4294967296;class o{constructor(t){this._head=t,this._cursor=t;}static from(t){const s=i.from(new Float32Array(t));return new o(s)}get id(){return this._cursor.id}get baseZoom(){return this._cursor.baseZoom}get anchorX(){return this._cursor.anchorX}get anchorY(){return this._cursor.anchorY}get directionX(){return this._cursor.directionX}get directionY(){return this._cursor.directionY}get size(){return this._cursor.size}get hasVV(){return this._cursor.hasVV}get boundsCount(){return this._cursor.boundsCount}computedMinZoom(){return this._cursor.computedMinZoom()}setComputedMinZoom(t){return this._cursor.setComputedMinZoom(t)}boundsComputedAnchorX(t){return this._cursor.boundsComputedAnchorX(t)}boundsComputedAnchorY(t){return this._cursor.boundsComputedAnchorY(t)}setBoundsComputedAnchorX(t,s){return this._cursor.setBoundsComputedAnchorX(t,s)}setBoundsComputedAnchorY(t,s){return this._cursor.setBoundsComputedAnchorY(t,s)}boundsCenterX(t){return this._cursor.boundsCenterX(t)}boundsCenterY(t){return this._cursor.boundsCenterY(t)}boundsWidth(t){return this._cursor.boundsWidth(t)}boundsHeight(t){return this._cursor.boundsHeight(t)}link(s){if(r$1(s._head))return this._cursor.link(s._head)}getCursor(){return this.copy()}copy(){var t;const s=new o(null==(t=this._head)?void 0:t.copy());if(!s._head)return s;let e=s._head,r=s._head._link;for(;r;)e._link=r.copy(),e=r,r=e._link;return s}peekId(){var t;return null!=(t=this._cursor.peekId())?t:this._cursor._link.peekId()}nextId(){const t=this.id;for(;t===this.id;)if(!this.next())return !1;return !0}save(){this._savedCursor=this._cursor,this._savedOffset=this._cursor._offset;}restore(){this._cursor=this._savedCursor,this._cursor._offset=this._savedOffset;}next(){if(!this._cursor)return !1;if(!this._cursor.next()){if(!this._cursor._link)return !1;this._cursor=this._cursor._link,this._cursor._offset=0;}return !0}lookup(t){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(t);){if(!this._cursor._link)return !1;this._cursor=this._cursor._link;}return !!this._cursor}delete(s){let e=this._head,r=null;for(;e;){if(e.delete(s))return e.isEmpty()&&r$1(r)&&(r._link=e._link),!0;r=e,e=e._link;}return !1}}class i{constructor(t){this._offset=-1,this._link=null,this._count=0,this._deletedCount=0,this._offsets={instance:null},this._buffer=t;}static from(t){return new i(new Float32Array(t))}isEmpty(){return this._deletedCount===this.count}get count(){return this._count||(this._count=this._computeCount()),this._count}get id(){return this._buffer[this._offset+0]}set id(t){this._buffer[this._offset+0]=t;}get baseZoom(){return this._buffer[this._offset+1]}get anchorX(){return this._buffer[this._offset+2]}get anchorY(){return this._buffer[this._offset+3]}get directionX(){return this._buffer[this._offset+4]}get directionY(){return this._buffer[this._offset+5]}get size(){return this._buffer[this._offset+6]}get hasVV(){return this._buffer[this._offset+7]}computedMinZoom(){return this._buffer[this._offset+8]}setComputedMinZoom(t){this._buffer[this._offset+8]=t;}get boundsCount(){return this._buffer[this._offset+9]}boundsComputedAnchorX(t){return this._buffer[this._offset+10+t*e$1+0]}boundsComputedAnchorY(t){return this._buffer[this._offset+10+t*e$1+1]}setBoundsComputedAnchorX(t,s){this._buffer[this._offset+10+t*e$1+0]=s;}setBoundsComputedAnchorY(t,s){this._buffer[this._offset+10+t*e$1+1]=s;}boundsCenterX(t){return this._buffer[this._offset+10+t*e$1+2]}boundsCenterY(t){return this._buffer[this._offset+10+t*e$1+3]}boundsWidth(t){return this._buffer[this._offset+10+t*e$1+4]}boundsHeight(t){return this._buffer[this._offset+10+t*e$1+5]}link(t){let s=this;for(;s._link;)s=s._link;s._link=t;}getCursor(){return this.copy()}copy(){const t=new i(this._buffer);return t._link=this._link,t._offset=this._offset,t._deletedCount=this._deletedCount,t._offsets=this._offsets,t._count=this._count,t}peekId(){const t=this._offset+10+this.boundsCount*e$1+0;return t>=this._buffer.length?0:this._buffer[t]}next(){let t=0;for(;this._offset<this._buffer.length&&t++<100&&(-1===this._offset?this._offset=0:this._offset+=10+this.boundsCount*e$1,this.id===r););return this.id!==r&&this._offset<this._buffer.length}delete(t){const s=this._offset,e=this.lookup(t);if(e)for(this.id=4294967295,++this._deletedCount;this.next()&&this.id===t;)this.id=4294967295,++this._deletedCount;return this._offset=s,e}lookup(t$1){const e=this._offset;if(t(this._offsets.instance)){this._offsets.instance=new Map;const t=this.copy();t._offset=-1;let s=0;for(;t.next();)t.id!==s&&(this._offsets.instance.set(t.id,t._offset),s=t.id);}return !!this._offsets.instance.has(t$1)&&(this._offset=this._offsets.instance.get(t$1),this.id!==r||(this._offset=e,!1))}_computeCount(){const t=this._offset;let s=0;for(this._offset=-1;this.next();)s++;return this._offset=t,s}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class e{constructor(e,s){this._buffers=[],this.geometryType=e,this._stage=s;}destroy(){this._buffers.forEach((e=>e.release()));}insert(e,s){if(!s.records.byteLength)return;"update"===e&&this._buffers.forEach((e=>e.free(s)));const r={done:!1,offset:0,vertexData:s};this._buffers.forEach((e=>e.insert(r)));let t=1e3;for(;!r.done&&--t;){const e=this._stage.pools.bufferData.acquire(s,this.geometryType,r.offset);e.insert(r),this._buffers.push(e);}}remove(e){this._buffers.forEach((s=>s.freeIds(e)));}upload(e){this._buffers.forEach((s=>s.upload(e)));}forEachCommand(e){this._buffers.forEach((s=>s.displayList.forEach(e)));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const u$1=50,f=4,S=8;let w=0;class g extends r$2{constructor(e,t,r){super(e,t),this.instanceId=w++,this.patchCount=0,this._renderState={current:{geometry:new Map,metrics:null},next:null,swap:!1,swapFrames:0,locked:!1},this._patches=new s(100),this._lastCommitTime=0,this._lastMessageWasClear=!1,this.transforms.labelMat2d=n$1(),this._store=r;}destroy(){super.destroy(),this._renderState.current.geometry.forEach((e=>e.destroy()));}get labelMetrics(){return this._renderState.current.metrics}get hasData(){return !!this._renderState.current.geometry.size}getGeometry(e){return this._renderState.current.geometry.get(e)}setTransform(e,t){super.setTransform(e,t);const r=this.transforms.labelMat2d,s=e.getScreenTransform(r,t),o=n$3();D(o,this.coords,s),n$2(r),i$1(r,r,o),o$1(r,e.viewMat2d,r);}patch(e){this.patchCount++,e.clear&&this._lastMessageWasClear||(this._lastMessageWasClear=e.clear,e.clear&&this._patches.size>=u$1&&this._dropPatches(),this._patches.enqueue(e),this.requestRender());}commit(e){if(this._lastCommitTime!==e.time){this._lastCommitTime=e.time;for(let e=0;e<f;e++)this._updateMesh();this._renderState.swap&&(this._swapRenderStates(),this.requestRender());}}lock(){this._renderState.locked=!0;}unlock(){this._renderState.locked=!1,this._flushUpdates(),this._swap();}_swapRenderStates(){if(this._renderState.next){if(this._renderState.locked)return this._renderState.swap=!0,void this.requestRender();if(this._renderState.swap=!0,0===this._renderState.swapFrames)return this._renderState.swapFrames=S,void this.requestRender();1==this._renderState.swapFrames--?this._swap():this.requestRender();}}_swap(){this._renderState.swap&&(this._renderState.swap=!1,r$1(this._renderState.next)&&(this._renderState.current.geometry.forEach((e=>e.destroy())),this._renderState.current=this._renderState.next,this._renderState.next=null));}_flushUpdates(){let e=this._patches.maxSize;for(;this._patches.size&&e--;)this._updateMesh(),this._swap();}_updateMesh(){const t=this._patches.peek();if(r$1(t)&&t.clear&&null!==this._renderState.next)return;const r=this._patches.dequeue();if(r$1(r)){if(!0===r.clear){if(!this.isReady)return;return this._renderState.next,void(this._renderState.next={geometry:new Map,metrics:null})}this.requestRender(),this._patch(r),r.end&&(this.ready(),this._swapRenderStates());}}_patch(e){te((t=>{this._remove(t,e.remove),this._insert(e.type,t,e.addOrUpdate,e.clear);}));}_insert(e$1,s,i,a){try{const n=c(this._renderState.next,this._renderState.current),h=null==i?void 0:i.data[s],o=n.geometry;if(t(h))return;o.has(s)||o.set(s,new e(s,this.stage)),o.get(s).insert(e$1,h),s===E.LABEL&&this._insertLabelMetrics(e$1,h.metrics,a);}catch(n){}}_insertLabelMetrics(e,s,i){const a=c(this._renderState.next,this._renderState.current);if(t(s))return;const n=o.from(s);if(t(a.metrics))a.metrics=n;else {if("update"===e){const e=n.getCursor();for(;e.next();)a.metrics.delete(e.id);}a.metrics.link(n);}}_remove(e,r){const s=c(this._renderState.next,this._renderState.current).geometry.get(e);r&&r.length&&s&&(s.remove(r),this._removeLabelMetrics(r));}_removeLabelMetrics(e){const{metrics:s}=c(this._renderState.next,this._renderState.current);if(!t(s)&&e.length)for(const t of e)for(;s.delete(t););}_dropPatches(){const e=new Array;let t$1=!1;for(;this._patches.size;){const s=this._patches.dequeue();if(t(s))break;if(s.clear){if(t$1)break;t$1=!0;}e.push(s);}this._patches.clear(),e.forEach((e=>this._patches.enqueue(e)));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class a extends o$2{constructor(e,s,t){super(e),this._pointToCallbacks=new Map,this._layer=t,this._layerView=s;}renderChildren(e){if(this.attributeView.update(),this.hasAnimation){e.painter.effects.integrate.draw(e,e.attributeView);}super.renderChildren(e);}hitTest(s,t){const i=[s,t],a=z();return this._pointToCallbacks.set(i,a),this.requestRender(),a.promise}onTileData(e,s){e.patch(s),this.contains(e)||this.addChild(e),this.requestRender();}onTileError(e){this.contains(e)||this.addChild(e);}doRender(e){const{minScale:s,maxScale:t}=this._layer,i=e.state.scale;i<=(s||1/0)&&i>=t&&super.doRender(e);}onAttributeStoreUpdate(){this.hasLabels&&this._layerView.view.labelManager.requestUpdate();}get hasAnimation(){return this.hasLabels}get hasLabels(){const e=this._layer.featureReduction,s=e&&"cluster"===e.type&&e.labelsVisible&&e.labelingInfo&&e.labelingInfo.length;return this._layer.labelingInfo&&this._layer.labelingInfo.length&&this._layer.labelsVisible||!!s}get labelsVisible(){return this._layer.labelsVisible}prepareRenderPasses(e){const i=e.registerRenderPass({name:"label",brushes:[g$1.label],target:()=>this.hasLabels?this.children:null,drawPhase:I.LABEL|I.LABEL_ALPHA}),a=e.registerRenderPass({name:"geometry",brushes:[g$1.fill,g$1.line,g$1.marker,g$1.text],target:()=>this.children,enableDefaultDraw:()=>!this._layerView.hasEffects,effects:[{apply:e.effects.outsideEffect,enable:()=>this._layerView.hasEffects,args:()=>this._layerView.effectLists.excluded},{apply:e.effects.insideEffect,enable:()=>this._layerView.hasEffects,args:()=>this._layerView.effectLists.included},{apply:e.effects.hittest,enable:()=>!!this._pointToCallbacks.size,args:()=>this._pointToCallbacks}]}),r=e.registerRenderPass({name:"highlight",brushes:[g$1.fill,g$1.line,g$1.marker,g$1.text],target:()=>this.children,drawPhase:I.HIGHLIGHT,enableDefaultDraw:()=>!1,effects:[{apply:e.effects.highlight,enable:()=>!!this._layerView.hasHighlight()}]});return [...super.prepareRenderPasses(e),a,r,i]}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let u=class extends o$3{install(e){const t=new a(this.tileInfoView,this.layerView,this.layer);this.featuresView=t,e.addChild(t);}uninstall(e){e.removeChild(this.featuresView),this.featuresView.destroy();}hitTest(e,t){return this.featuresView.hitTest(e,t)}supportsRenderer(e){return null!=e&&-1!==["simple","class-breaks","unique-value","dot-density","dictionary"].indexOf(e.type)}onConfigUpdate(e){let t=null;if("visualVariables"in e){const r=(s$1(e).visualVariables||[]).map((e=>{const t=e.clone();return "normalizationField"in e&&(t.normalizationField=null),e.valueExpression&&"$view.scale"!==e.valueExpression&&(t.valueExpression=null,t.field="nop"),t}));t=m(r);}this.featuresView.setRendererInfo(e,t,this.layerView.effects);}onTileData(e){const t=this.tiles.get(e.tileKey);t&&e.data&&this.featuresView.onTileData(t,e.data),this.layerView.view.labelManager.requestUpdate();}onTileError(e){const t=this.tiles.get(e.tileKey);t&&this.featuresView.onTileError(t);}forceAttributeTextureUpload(){this.featuresView.attributeView.forceTextureUpload();}lockGPUUploads(){this.featuresView.attributeView.lockTextureUpload(),this.tiles.forEach((e=>e.lock()));}unlockGPUUploads(){this.featuresView.attributeView.unlockTextureUpload(),this.tiles.forEach((e=>e.unlock()));}async getMaterialItems(e){return this.featuresView.getMaterialItems(e)}invalidateLabels(){this.featuresView.hasLabels&&this.layerView.view.labelManager.requestUpdate();}createTile(e){const t=this.tileInfoView.getTileBounds(i$3(),e);return new g(e,t,this.featuresView.attributeView)}disposeTile(e){this.featuresView.removeChild(e),e.destroy(),this.layerView.view.labelManager.requestUpdate();}};u=e$2([i$2("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")],u);var n=u;

export default n;
