(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{513:function(e,t,s){"use strict";s.r(t);s(88);var r=s(0),i=(s(1),s(84)),n=s(331),o=s(337),h=s(355),a=s(7),u=s(19),f=s(313),c=s(343),l=s(413),d=s(325);s(4),s(6),s(13),s(314),s(330),s(21),s(62),s(26),s(24),s(85),s(48),s(20),s(9),s(3),s(52),s(70),s(10),s(109),s(49),s(111),s(71),s(333),s(320),s(106),s(334),s(338),s(8),s(31),s(35),s(54),s(312),s(310),s(332),s(11),s(138),s(43),s(5),s(72),s(2),s(40),s(15),s(75),s(27),s(14),s(16),s(51),s(82),s(89),s(53),s(12),s(44),s(63),s(55),s(119),s(17),s(120),s(83),s(115),s(47),s(103),s(32),s(57),s(23),s(104),s(112),s(108),s(58),s(105),s(110),s(107),s(56),s(116),s(36),s(64),s(42),s(113),s(41),s(121),s(117),s(114),s(66),s(118),s(123),s(73),s(65),s(74),s(90),s(67),s(86),s(137),s(122),s(317),s(318),s(316),s(323),s(319),s(326),s(321);const _=4294967296;class b{constructor(e){this._head=e,this._cursor=e}static from(e){const t=p.from(new Float32Array(e));return new b(t)}get id(){return this._cursor.id}get baseZoom(){return this._cursor.baseZoom}get anchorX(){return this._cursor.anchorX}get anchorY(){return this._cursor.anchorY}get directionX(){return this._cursor.directionX}get directionY(){return this._cursor.directionY}get size(){return this._cursor.size}get hasVV(){return this._cursor.hasVV}get boundsCount(){return this._cursor.boundsCount}computedMinZoom(){return this._cursor.computedMinZoom()}setComputedMinZoom(e){return this._cursor.setComputedMinZoom(e)}boundsComputedAnchorX(e){return this._cursor.boundsComputedAnchorX(e)}boundsComputedAnchorY(e){return this._cursor.boundsComputedAnchorY(e)}setBoundsComputedAnchorX(e,t){return this._cursor.setBoundsComputedAnchorX(e,t)}setBoundsComputedAnchorY(e,t){return this._cursor.setBoundsComputedAnchorY(e,t)}boundsCenterX(e){return this._cursor.boundsCenterX(e)}boundsCenterY(e){return this._cursor.boundsCenterY(e)}boundsWidth(e){return this._cursor.boundsWidth(e)}boundsHeight(e){return this._cursor.boundsHeight(e)}link(e){if(Object(r.P)(e._head))return this._cursor.link(e._head)}getCursor(){return this.copy()}copy(){var e;const t=new b(null==(e=this._head)?void 0:e.copy());if(!t._head)return t;let s=t._head,r=t._head._link;for(;r;)s._link=r.copy(),s=r,r=s._link;return t}peekId(){var e;return null!=(e=this._cursor.peekId())?e:this._cursor._link.peekId()}nextId(){const e=this.id;for(;e===this.id;)if(!this.next())return!1;return!0}save(){this._savedCursor=this._cursor,this._savedOffset=this._cursor._offset}restore(){this._cursor=this._savedCursor,this._cursor._offset=this._savedOffset}next(){if(!this._cursor)return!1;if(!this._cursor.next()){if(!this._cursor._link)return!1;this._cursor=this._cursor._link,this._cursor._offset=0}return!0}lookup(e){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(e);){if(!this._cursor._link)return!1;this._cursor=this._cursor._link}return!!this._cursor}delete(e){let t=this._head,s=null;for(;t;){if(t.delete(e))return t.isEmpty()&&Object(r.P)(s)&&(s._link=t._link),!0;s=t,t=t._link}return!1}}class p{constructor(e){this._offset=-1,this._link=null,this._count=0,this._deletedCount=0,this._offsets={instance:null},this._buffer=e}static from(e){return new p(new Float32Array(e))}isEmpty(){return this._deletedCount===this.count}get count(){return this._count||(this._count=this._computeCount()),this._count}get id(){return this._buffer[this._offset+0]}set id(e){this._buffer[this._offset+0]=e}get baseZoom(){return this._buffer[this._offset+1]}get anchorX(){return this._buffer[this._offset+2]}get anchorY(){return this._buffer[this._offset+3]}get directionX(){return this._buffer[this._offset+4]}get directionY(){return this._buffer[this._offset+5]}get size(){return this._buffer[this._offset+6]}get hasVV(){return this._buffer[this._offset+7]}computedMinZoom(){return this._buffer[this._offset+8]}setComputedMinZoom(e){this._buffer[this._offset+8]=e}get boundsCount(){return this._buffer[this._offset+9]}boundsComputedAnchorX(e){return this._buffer[this._offset+10+6*e+0]}boundsComputedAnchorY(e){return this._buffer[this._offset+10+6*e+1]}setBoundsComputedAnchorX(e,t){this._buffer[this._offset+10+6*e+0]=t}setBoundsComputedAnchorY(e,t){this._buffer[this._offset+10+6*e+1]=t}boundsCenterX(e){return this._buffer[this._offset+10+6*e+2]}boundsCenterY(e){return this._buffer[this._offset+10+6*e+3]}boundsWidth(e){return this._buffer[this._offset+10+6*e+4]}boundsHeight(e){return this._buffer[this._offset+10+6*e+5]}link(e){let t=this;for(;t._link;)t=t._link;t._link=e}getCursor(){return this.copy()}copy(){const e=new p(this._buffer);return e._link=this._link,e._offset=this._offset,e._deletedCount=this._deletedCount,e._offsets=this._offsets,e._count=this._count,e}peekId(){const e=this._offset+10+6*this.boundsCount+0;return e>=this._buffer.length?0:this._buffer[e]}next(){let e=0;for(;this._offset<this._buffer.length&&e++<100&&(-1===this._offset?this._offset=0:this._offset+=10+6*this.boundsCount,this.id===_););return this.id!==_&&this._offset<this._buffer.length}delete(e){const t=this._offset,s=this.lookup(e);if(s)for(this.id=4294967295,++this._deletedCount;this.next()&&this.id===e;)this.id=4294967295,++this._deletedCount;return this._offset=t,s}lookup(e){const t=this._offset;if(Object(r.J)(this._offsets.instance)){this._offsets.instance=new Map;const e=this.copy();e._offset=-1;let t=0;for(;e.next();)e.id!==t&&(this._offsets.instance.set(e.id,e._offset),t=e.id)}return!!this._offsets.instance.has(e)&&(this._offset=this._offsets.instance.get(e),this.id!==_||(this._offset=t,!1))}_computeCount(){const e=this._offset;let t=0;for(this._offset=-1;this.next();)t++;return this._offset=e,t}}class m{constructor(e,t){this._buffers=[],this.geometryType=e,this._stage=t}destroy(){this._buffers.forEach((e=>e.release()))}insert(e,t){if(!t.records.byteLength)return;"update"===e&&this._buffers.forEach((e=>e.free(t)));const s={done:!1,offset:0,vertexData:t};this._buffers.forEach((e=>e.insert(s)));let r=1e3;for(;!s.done&&--r;){const e=this._stage.pools.bufferData.acquire(t,this.geometryType,s.offset);e.insert(s),this._buffers.push(e)}}remove(e){this._buffers.forEach((t=>t.freeIds(e)))}upload(e){this._buffers.forEach((t=>t.upload(e)))}forEachCommand(e){this._buffers.forEach((t=>t.displayList.forEach(e)))}}let g=0;class w extends c.b{constructor(e,t,s){super(e,t),this.instanceId=g++,this.patchCount=0,this._renderState={current:{geometry:new Map,metrics:null},next:null,swap:!1,swapFrames:0,locked:!1},this._patches=new h.a(100),this._lastCommitTime=0,this._lastMessageWasClear=!1,this.transforms.labelMat2d=Object(u.b)(),this._store=s}destroy(){super.destroy(),this._renderState.current.geometry.forEach((e=>e.destroy()))}get labelMetrics(){return this._renderState.current.metrics}get hasData(){return!!this._renderState.current.geometry.size}getGeometry(e){return this._renderState.current.geometry.get(e)}setTransform(e,t){super.setTransform(e,t);const s=this.transforms.labelMat2d,r=e.getScreenTransform(s,t),i=Object(u.c)();Object(a.b)(i,this.coords,r),Object(u.j)(s),Object(u.i)(s,s,i),Object(u.k)(s,e.viewMat2d,s)}patch(e){this.patchCount++,e.clear&&this._lastMessageWasClear||(this._lastMessageWasClear=e.clear,e.clear&&this._patches.size>=50&&this._dropPatches(),this._patches.enqueue(e),this.requestRender())}commit(e){if(this._lastCommitTime!==e.time){this._lastCommitTime=e.time;for(let e=0;e<4;e++)this._updateMesh();this._renderState.swap&&(this._swapRenderStates(),this.requestRender())}}lock(){this._renderState.locked=!0}unlock(){this._renderState.locked=!1,this._flushUpdates(),this._swap()}_swapRenderStates(){if(this._renderState.next){if(this._renderState.locked)return this._renderState.swap=!0,void this.requestRender();if(this._renderState.swap=!0,0===this._renderState.swapFrames)return this._renderState.swapFrames=8,void this.requestRender();1==this._renderState.swapFrames--?this._swap():this.requestRender()}}_swap(){this._renderState.swap&&(this._renderState.swap=!1,Object(r.P)(this._renderState.next)&&(this._renderState.current.geometry.forEach((e=>e.destroy())),this._renderState.current=this._renderState.next,this._renderState.next=null))}_flushUpdates(){let e=this._patches.maxSize;for(;this._patches.size&&e--;)this._updateMesh(),this._swap()}_updateMesh(){const e=this._patches.peek();if(Object(r.P)(e)&&e.clear&&null!==this._renderState.next)return;const t=this._patches.dequeue();if(Object(r.P)(t)){if(!0===t.clear){if(!this.isReady)return;return this._renderState.next,void(this._renderState.next={geometry:new Map,metrics:null})}this.requestRender(),this._patch(t),t.end&&(this.ready(),this._swapRenderStates())}}_patch(e){Object(f.w)((t=>{this._remove(t,e.remove),this._insert(e.type,t,e.addOrUpdate,e.clear)}))}_insert(e,t,s,i){try{const n=Object(r.bJ)(this._renderState.next,this._renderState.current),o=null==s?void 0:s.data[t],h=n.geometry;if(Object(r.J)(o))return;h.has(t)||h.set(t,new m(t,this.stage)),h.get(t).insert(e,o),t===f.c.LABEL&&this._insertLabelMetrics(e,o.metrics,i)}catch(e){}}_insertLabelMetrics(e,t,s){const i=Object(r.bJ)(this._renderState.next,this._renderState.current);if(Object(r.J)(t))return;const n=b.from(t);if(Object(r.J)(i.metrics))i.metrics=n;else{if("update"===e){const e=n.getCursor();for(;e.next();)i.metrics.delete(e.id)}i.metrics.link(n)}}_remove(e,t){const s=Object(r.bJ)(this._renderState.next,this._renderState.current).geometry.get(e);t&&t.length&&s&&(s.remove(t),this._removeLabelMetrics(t))}_removeLabelMetrics(e){const{metrics:t}=Object(r.bJ)(this._renderState.next,this._renderState.current);if(!Object(r.J)(t)&&e.length)for(const s of e)for(;t.delete(s););}_dropPatches(){const e=new Array;let t=!1;for(;this._patches.size;){const s=this._patches.dequeue();if(Object(r.J)(s))break;if(s.clear){if(t)break;t=!0}e.push(s)}this._patches.clear(),e.forEach((e=>this._patches.enqueue(e)))}}class y extends c.a{constructor(e,t,s){super(e),this._pointToCallbacks=new Map,this._layer=s,this._layerView=t}renderChildren(e){this.attributeView.update(),this.hasAnimation&&e.painter.effects.integrate.draw(e,e.attributeView),super.renderChildren(e)}hitTest(e,t){const s=[e,t],i=Object(r.b$)();return this._pointToCallbacks.set(s,i),this.requestRender(),i.promise}onTileData(e,t){e.patch(t),this.contains(e)||this.addChild(e),this.requestRender()}onTileError(e){this.contains(e)||this.addChild(e)}doRender(e){const{minScale:t,maxScale:s}=this._layer,r=e.state.scale;r<=(t||1/0)&&r>=s&&super.doRender(e)}onAttributeStoreUpdate(){this.hasLabels&&this._layerView.view.labelManager.requestUpdate()}get hasAnimation(){return this.hasLabels}get hasLabels(){const e=this._layer.featureReduction,t=e&&"cluster"===e.type&&e.labelsVisible&&e.labelingInfo&&e.labelingInfo.length;return this._layer.labelingInfo&&this._layer.labelingInfo.length&&this._layer.labelsVisible||!!t}get labelsVisible(){return this._layer.labelsVisible}prepareRenderPasses(e){const t=e.registerRenderPass({name:"label",brushes:[d.c.label],target:()=>this.hasLabels?this.children:null,drawPhase:f.d.LABEL|f.d.LABEL_ALPHA}),s=e.registerRenderPass({name:"geometry",brushes:[d.c.fill,d.c.line,d.c.marker,d.c.text],target:()=>this.children,enableDefaultDraw:()=>!this._layerView.hasEffects,effects:[{apply:e.effects.outsideEffect,enable:()=>this._layerView.hasEffects,args:()=>this._layerView.effectLists.excluded},{apply:e.effects.insideEffect,enable:()=>this._layerView.hasEffects,args:()=>this._layerView.effectLists.included},{apply:e.effects.hittest,enable:()=>!!this._pointToCallbacks.size,args:()=>this._pointToCallbacks}]}),r=e.registerRenderPass({name:"highlight",brushes:[d.c.fill,d.c.line,d.c.marker,d.c.text],target:()=>this.children,drawPhase:f.d.HIGHLIGHT,enableDefaultDraw:()=>!1,effects:[{apply:e.effects.highlight,enable:()=>!!this._layerView.hasHighlight()}]});return[...super.prepareRenderPasses(e),s,r,t]}}let C=class extends l.a{install(e){const t=new y(this.tileInfoView,this.layerView,this.layer);this.featuresView=t,e.addChild(t)}uninstall(e){e.removeChild(this.featuresView),this.featuresView.destroy()}hitTest(e,t){return this.featuresView.hitTest(e,t)}supportsRenderer(e){return null!=e&&-1!==["simple","class-breaks","unique-value","dot-density","dictionary"].indexOf(e.type)}onConfigUpdate(e){let t=null;if("visualVariables"in e){const s=(Object(o.e)(e).visualVariables||[]).map((e=>{const t=e.clone();return"normalizationField"in e&&(t.normalizationField=null),e.valueExpression&&"$view.scale"!==e.valueExpression&&(t.valueExpression=null,t.field="nop"),t}));t=Object(n.d)(s)}this.featuresView.setRendererInfo(e,t,this.layerView.effects)}onTileData(e){const t=this.tiles.get(e.tileKey);t&&e.data&&this.featuresView.onTileData(t,e.data),this.layerView.view.labelManager.requestUpdate()}onTileError(e){const t=this.tiles.get(e.tileKey);t&&this.featuresView.onTileError(t)}forceAttributeTextureUpload(){this.featuresView.attributeView.forceTextureUpload()}lockGPUUploads(){this.featuresView.attributeView.lockTextureUpload(),this.tiles.forEach((e=>e.lock()))}unlockGPUUploads(){this.featuresView.attributeView.unlockTextureUpload(),this.tiles.forEach((e=>e.unlock()))}async getMaterialItems(e){return this.featuresView.getMaterialItems(e)}invalidateLabels(){this.featuresView.hasLabels&&this.layerView.view.labelManager.requestUpdate()}createTile(e){const t=this.tileInfoView.getTileBounds(Object(i.f)(),e);return new w(e,t,this.featuresView.attributeView)}disposeTile(e){this.featuresView.removeChild(e),e.destroy(),this.layerView.view.labelManager.requestUpdate()}};C=Object(r.e)([Object(r.i)("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")],C);var k=C;t.default=k}}]);