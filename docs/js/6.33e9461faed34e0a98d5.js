(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{168:function(e,t,i){"use strict";i.r(t),i.d(t,"ElevationQuery",(function(){return x})),i.d(t,"GeometryDescriptor",(function(){return v})),i.d(t,"getFinestLodIndex",(function(){return R}));var s=i(0),n=i(10),o=i(84),l=i(86);i(1),i(31),i(8),i(137);const a=s.n.getLogger("esri.layers.support.ElevationSampler");class r{queryElevation(e){return function(e,t){const i=h(e,t.spatialReference);if(!i)return null;switch(e.type){case"point":!function(e,t,i){e.z=Object(s.bJ)(i.elevationAt(t),0)}(e,i,t);break;case"polyline":!function(e,t,i){p.spatialReference=t.spatialReference;const n=e.hasM&&!e.hasZ;for(let o=0;o<e.paths.length;o++){const l=e.paths[o],a=t.paths[o];for(let e=0;e<l.length;e++){const t=l[e],o=a[e];p.x=o[0],p.y=o[1],n&&(t[3]=t[2]),t[2]=Object(s.bJ)(i.elevationAt(p),0)}}e.hasZ=!0}(e,i,t);break;case"multipoint":!function(e,t,i){p.spatialReference=t.spatialReference;const n=e.hasM&&!e.hasZ;for(let o=0;o<e.points.length;o++){const l=e.points[o],a=t.points[o];p.x=a[0],p.y=a[1],n&&(l[3]=l[2]),l[2]=Object(s.bJ)(i.elevationAt(p),0)}e.hasZ=!0}(e,i,t)}return e}(e.clone(),this)}on(){return m}projectIfRequired(e,t){return h(e,t)}}class c extends r{constructor(e,t,i){super(),this.tile=e,this.noDataValue=i,this.extent=Object(o.h)(e.tile.extent,t.spatialReference);const s=Object(n.b)(t.spatialReference),l=t.lodAt(e.tile.level).resolution*s;this.demResolution={min:l,max:l}}get spatialReference(){return this.extent.spatialReference}contains(e){const t=this.projectIfRequired(e,this.spatialReference);return Object(s.as)(this.extent,t)}elevationAt(e){const t=this.projectIfRequired(e,this.spatialReference);if(!t)return null;if(!this.contains(e)){const t=this.extent,i=`${t.xmin}, ${t.ymin}, ${t.xmax}, ${t.ymax}`;a.warn("#elevationAt()",`Point used to sample elevation (${e.x}, ${e.y}) is outside of the sampler extent (${i})`)}return this.tile.sample(t.x,t.y)}}class u extends r{constructor(e,t,i){let s;super(),"number"==typeof t?(this.noDataValue=t,s=null):(s=t,this.noDataValue=i),this.samplers=s?e.map((e=>new c(e,s,this.noDataValue))):e;const n=this.samplers[0];if(n){this.extent=n.extent.clone();const{min:e,max:t}=n.demResolution;this.demResolution={min:e,max:t};for(let e=1;e<this.samplers.length;e++){const t=this.samplers[e];this.extent.union(t.extent),this.demResolution.min=Math.min(this.demResolution.min,t.demResolution.min),this.demResolution.max=Math.max(this.demResolution.max,t.demResolution.max)}}else this.extent=Object(o.h)(Object(o.f)(),s.spatialReference),this.demResolution={min:0,max:0}}get spatialReference(){return this.extent.spatialReference}elevationAt(e){const t=this.projectIfRequired(e,this.spatialReference);if(!t)return null;for(const e of this.samplers)if(e.contains(t))return e.elevationAt(t);return a.warn("#elevationAt()",`Point used to sample elevation (${e.x}, ${e.y}) is outside of the sampler`),null}}function h(e,t){const i=e.spatialReference;return i.equals(t)?e:Object(s.ah)(i,t)?Object(s.ai)(e,t):(a.error(`Cannot project geometry spatial reference (wkid:${i.wkid}) to elevation sampler spatial reference (wkid:${t.wkid})`),null)}const p=new s._,m={remove(){}};class f{constructor(e,t){if(this.tile=e,!t)return void(this.samplerData=null);const i=this.tile.extent;this.samplerData={pixelData:t.values,width:t.width,height:t.height,safeWidth:.99999999*(t.width-1),noDataValue:t.noDataValue,dx:(t.width-1)/(i[2]-i[0]),dy:(t.width-1)/(i[3]-i[1]),x0:i[0],y1:i[3]}}sample(e,t){if(this.samplerData)return d(this.samplerData,e,t)}}function d(e,t,i){const{safeWidth:s,width:n,pixelData:o,noDataValue:l}=e,a=y(e.dy*(e.y1-i),0,s),r=y(e.dx*(t-e.x0),0,s),c=Math.floor(a),u=Math.floor(r),h=c*n+u,p=h+n,m=o[h],f=o[p],d=o[h+1],x=o[p+1];if(m!==l&&f!==l&&d!==l&&x!==l){const e=r-u,t=m+(d-m)*e;return t+(f+(x-f)*e-t)*(a-c)}}function y(e,t,i){return e<t?t:e>i?i:e}class x{async queryAll(e,t,i){if(!(e=i&&i.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new s.s("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");const n=v.fromGeometry(t);let o=!1;i&&i.returnSampleInfo||(o=!0);const l={..._,...i,returnSampleInfo:!0},a=await this.query(e[e.length-1],n,l),r=await this._queryAllContinue(e,a,l);return r.geometry=r.geometry.export(),o&&delete r.sampleInfo,r}async query(e,t,i){if(!e)throw new s.s("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||!(t instanceof v)&&"point"!==t.type&&"multipoint"!==t.type&&"polyline"!==t.type)throw new s.s("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");const n={..._,...i},o=new g(e,t.spatialReference,n),l=n.signal;return await e.load({signal:l}),await this._createGeometryDescriptor(o,t,l),await this._selectTiles(o,l),await this._populateElevationTiles(o,l),this._sampleGeometryWithElevation(o),this._createQueryResult(o,l)}async createSampler(e,t,i){if(!e)throw new s.s("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||"extent"!==t.type)throw new s.s("elevation-query:invalid-extent","Invalid or undefined extent");const n={..._,...i};return this._createSampler(e,t,n)}async createSamplerAll(e,t,i){if(!(e=i&&i.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new s.s("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");if(!t||"extent"!==t.type)throw new s.s("elevation-query:invalid-extent","Invalid or undefined extent");const n={..._,...i,returnSampleInfo:!0},o=await this._createSampler(e[e.length-1],t,n);return this._createSamplerAllContinue(e,t,o,n)}async _createSampler(e,t,i,s){const n=i.signal;await e.load({signal:n});const o=t.spatialReference,a=e.tileInfo.spatialReference;o.equals(a)||(await Object(l.g)([{source:o,dest:a}],{signal:n}),t=Object(l.b)(t,a));const r=new w(e,t,i,s);return await this._selectTiles(r,n),await this._populateElevationTiles(r,n),new u(r.elevationTiles,r.layer.tileInfo,r.options.noDataValue)}async _createSamplerAllContinue(e,t,i,s){if(e.pop(),!e.length)return i;const n=i.samplers.map((e=>Object(o.d)(e.extent))),l=await this._createSampler(e[e.length-1],t,s,n);if(0===l.samplers.length)return i;const a=i.samplers.concat(l.samplers),r=new u(a,s.noDataValue);return this._createSamplerAllContinue(e,t,r,s)}async _queryAllContinue(e,t,i){const s=e.pop(),n=t.geometry.coordinates,o=[],l=[];for(let i=0;i<n.length;i++){const a=t.sampleInfo[i];a.demResolution>=0?a.source||(a.source=s):e.length&&(o.push(n[i]),l.push(i))}if(!e.length||0===o.length)return t;const a=t.geometry.clone(o),r=await this.query(e[e.length-1],a,i);return l.forEach(((e,i)=>{n[e].z=r.geometry.coordinates[i].z,t.sampleInfo[e].demResolution=r.sampleInfo[i].demResolution})),this._queryAllContinue(e,t,i)}async _createQueryResult(e,t){const i={geometry:(await e.geometry.project(e.outSpatialReference,t)).export(),noDataValue:e.options.noDataValue};return e.options.returnSampleInfo&&(i.sampleInfo=this._extractSampleInfo(e)),e.geometry.coordinates.forEach((e=>{e.tile=null,e.elevationTile=null})),i}async _createGeometryDescriptor(e,t,i){let n;const o=e.layer.tileInfo.spatialReference;if(t instanceof v?n=await t.project(o,i):(await Object(l.g)([{source:t.spatialReference,dest:o}],{signal:i}),n=Object(l.b)(t,o)),!n)throw new s.s("elevation-query:spatial-reference-mismatch",`Cannot query elevation in '${t.spatialReference.wkid}' on an elevation service in '${o.wkid}'`);e.geometry=v.fromGeometry(n)}async _selectTiles(e,t){const i=e.options.demResolution;if("geometry"===e.type&&this._preselectOutsideLayerExtent(e),"number"==typeof i)this._selectTilesClosestResolution(e);else if("finest-contiguous"===i)await this._selectTilesFinestContiguous(e,t);else{if("auto"!==i)throw new s.s("elevation-query:invalid-dem-resolution",`Invalid dem resolution value '${i}', expected a number, "finest-contiguous" or "auto"`);await this._selectTilesAuto(e,t)}}_preselectOutsideLayerExtent(e){const t=new f(null);t.sample=()=>e.options.noDataValue,e.outsideExtentTile=t;const i=e.layer.fullExtent;e.geometry.coordinates.forEach((e=>{const s=e.x,n=e.y;(s<i.xmin||s>i.xmax||n<i.ymin||n>i.ymax)&&(e.elevationTile=t)}))}_selectTilesClosestResolution(e){const t=e.layer.tileInfo,i=this._findNearestDemResolutionLODIndex(t,e.options.demResolution);e.selectTilesAtLOD(i)}_findNearestDemResolutionLODIndex(e,t){const i=t/Object(n.b)(e.spatialReference);let s=e.lods[0],o=0;for(let t=1;t<e.lods.length;t++){const n=e.lods[t];Math.abs(n.resolution-i)<Math.abs(s.resolution-i)&&(s=n,o=t)}return o}async _selectTilesFinestContiguous(e,t){const i=R(e.layer.tileInfo,e.options.minDemResolution);await this._selectTilesFinestContiguousAt(e,i,t)}async _selectTilesFinestContiguousAt(e,t,i){const n=e.layer;if(e.selectTilesAtLOD(t),t<0)return;const o=n.tilemapCache,l=e.getTilesToFetch();try{if(o)await Object(s.bQ)(Promise.all(l.map((e=>o.fetchAvailability(e.level,e.row,e.col,{signal:i})))),i);else if(await this._populateElevationTiles(e,i),!e.allElevationTilesFetched())throw e.clearElevationTiles(),new s.s("elevation-query:has-unavailable-tiles")}catch(n){Object(s.bR)(n),await this._selectTilesFinestContiguousAt(e,t-1,i)}}async _populateElevationTiles(e,t){const i=e.getTilesToFetch(),n={},o=e.options.cache,l=e.options.noDataValue,a=i.map((async i=>{const a=`${e.layer.uid}:${i.id}:${l}`,r=Object(s.P)(o)?o.get(a):null,c=Object(s.P)(r)?r:await e.layer.fetchTile(i.level,i.row,i.col,{noDataValue:l,signal:t});Object(s.P)(o)&&o.put(a,c),n[i.id]=new f(i,c)}));await Object(s.bQ)(Object(s.E)(a),t),e.populateElevationTiles(n)}async _selectTilesAuto(e,t){this._selectTilesAutoFinest(e),this._reduceTilesForMaximumRequests(e);const i=e.layer.tilemapCache;if(!i)return this._selectTilesAutoPrefetchUpsample(e,t);const n=e.getTilesToFetch(),l={},a=n.map((async e=>{const n={id:null,level:0,row:0,col:0,extent:Object(o.f)()},a=await Object(s.ax)(i.fetchAvailabilityUpsample(e.level,e.row,e.col,n,{signal:t}));!1===a.ok?Object(s.bR)(a.error):l[e.id]=n}));await Object(s.bQ)(Promise.all(a),t),e.remapTiles(l)}_reduceTilesForMaximumRequests(e){const t=e.layer.tileInfo;let i=0;const s={},n=e=>{e.id in s?s[e.id]++:(s[e.id]=1,i++)},o=e=>{const t=s[e.id];1===t?(delete s[e.id],i--):s[e.id]=t-1};e.forEachTileToFetch(n,o);let l=!0;for(;l&&(l=!1,e.forEachTileToFetch((s=>{i<=e.options.maximumAutoTileRequests||(o(s),t.upsampleTile(s)&&(l=!0),n(s))}),o),l););}_selectTilesAutoFinest(e){const t=R(e.layer.tileInfo,e.options.minDemResolution);e.selectTilesAtLOD(t,e.options.maximumAutoTileRequests)}async _selectTilesAutoPrefetchUpsample(e,t){const i=e.layer.tileInfo;await this._populateElevationTiles(e,t);let s=!1;e.forEachTileToFetch(((e,t)=>{i.upsampleTile(e)?s=!0:t()})),s&&await this._selectTilesAutoPrefetchUpsample(e,t)}_sampleGeometryWithElevation(e){e.geometry.coordinates.forEach((t=>{const i=t.elevationTile;let s=e.options.noDataValue;if(i){const e=i.sample(t.x,t.y);void 0!==e?s=e:t.elevationTile=null}t.z=s}))}_extractSampleInfo(e){const t=e.layer.tileInfo,i=Object(n.b)(t.spatialReference);return e.geometry.coordinates.map((s=>{let n=-1;return s.elevationTile&&s.elevationTile!==e.outsideExtentTile&&(n=t.lodAt(s.elevationTile.tile.level).resolution*i),{demResolution:n}}))}}class v{export(){return this._exporter(this.coordinates,this.spatialReference)}clone(e){const t=new v;return t.geometry=this.geometry,t.spatialReference=this.spatialReference,t.coordinates=e||this.coordinates.map((e=>this._cloneCoordinate(e))),t._exporter=this._exporter,t}async project(e,t){if(this.spatialReference.equals(e))return this.clone();await Object(l.g)([{source:this.spatialReference,dest:e}],{signal:t});const i=new s.aK({spatialReference:this.spatialReference,points:this.coordinates.map((e=>[e.x,e.y]))}),n=Object(l.b)(i,e);if(!n)return null;const o=this.coordinates.map(((e,t)=>{const i=this._cloneCoordinate(e),s=n.points[t];return i.x=s[0],i.y=s[1],i})),a=this.clone(o);return a.spatialReference=e,a}_cloneCoordinate(e){return{x:e.x,y:e.y,z:e.z,m:e.m,tile:null,elevationTile:null}}static fromGeometry(e){const t=new v;if(t.geometry=e,t.spatialReference=e.spatialReference,e instanceof v)t.coordinates=e.coordinates.map((e=>t._cloneCoordinate(e))),t._exporter=(t,i)=>{const s=e.clone(t);return s.spatialReference=i,s};else switch(e.type){case"point":{const i=e,{hasZ:n,hasM:o}=i;t.coordinates=n&&o?[{x:i.x,y:i.y,z:i.z,m:i.m}]:n?[{x:i.x,y:i.y,z:i.z}]:o?[{x:i.x,y:i.y,m:i.m}]:[{x:i.x,y:i.y}],t._exporter=(t,i)=>e.hasM?new s._(t[0].x,t[0].y,t[0].z,t[0].m,i):new s._(t[0].x,t[0].y,t[0].z,i);break}case"multipoint":{const i=e,{hasZ:n,hasM:o}=i;t.coordinates=n&&o?i.points.map((e=>({x:e[0],y:e[1],z:e[2],m:e[3]}))):n?i.points.map((e=>({x:e[0],y:e[1],z:e[2]}))):o?i.points.map((e=>({x:e[0],y:e[1],m:e[2]}))):i.points.map((e=>({x:e[0],y:e[1]}))),t._exporter=(t,i)=>e.hasM?new s.aK({points:t.map((e=>[e.x,e.y,e.z,e.m])),hasZ:!0,hasM:!0,spatiaReference:i}):new s.aK(t.map((e=>[e.x,e.y,e.z])),i);break}case"polyline":{const i=e,n=[],o=[],{hasZ:l,hasM:a}=e;let r=0;for(const e of i.paths)if(o.push([r,r+e.length]),r+=e.length,l&&a)for(const t of e)n.push({x:t[0],y:t[1],z:t[2],m:t[3]});else if(l)for(const t of e)n.push({x:t[0],y:t[1],z:t[2]});else if(a)for(const t of e)n.push({x:t[0],y:t[1],m:t[2]});else for(const t of e)n.push({x:t[0],y:t[1]});t.coordinates=n,t._exporter=(t,i)=>{const n=e.hasM?t.map((e=>[e.x,e.y,e.z,e.m])):t.map((e=>[e.x,e.y,e.z])),l=o.map((e=>n.slice(e[0],e[1])));return new s.aJ({paths:l,hasM:e.hasM,hasZ:!0,spatialReference:i})};break}}return t}}class T{constructor(e,t){this.layer=e,this.options=t}}class g extends T{constructor(e,t,i){super(e,i),this.outSpatialReference=t,this.type="geometry"}selectTilesAtLOD(e){if(e<0)this.geometry.coordinates.forEach((e=>e.tile=null));else{const t=this.layer.tileInfo,i=t.lods[e].level;this.geometry.coordinates.forEach((e=>{e.tile=t.tileAt(i,e.x,e.y)}))}}allElevationTilesFetched(){return!this.geometry.coordinates.some((e=>!e.elevationTile))}clearElevationTiles(){for(const e of this.geometry.coordinates)e.elevationTile!==this.outsideExtentTile&&(e.elevationTile=null)}populateElevationTiles(e){for(const t of this.geometry.coordinates)!t.elevationTile&&t.tile&&(t.elevationTile=e[t.tile.id])}remapTiles(e){for(const t of this.geometry.coordinates)t.tile=e[t.tile.id]}getTilesToFetch(){const e={},t=[];for(const i of this.geometry.coordinates){const s=i.tile;i.elevationTile||!i.tile||e[s.id]||(e[s.id]=s,t.push(s))}return t}forEachTileToFetch(e){for(const t of this.geometry.coordinates)t.tile&&!t.elevationTile&&e(t.tile,(()=>t.tile=null))}}class w extends T{constructor(e,t,i,s){super(e,i),this.type="extent",this.elevationTiles=[],this.candidateTiles=[],this.fetchedCandidates=new Set,this.extent=t.intersection(e.fullExtent),this.maskExtents=s}selectTilesAtLOD(e,t){const i=this._maximumLodForRequests(t),s=Math.min(i,e);s<0?this.candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(s)}_maximumLodForRequests(e){const t=this.layer.tileInfo;if(!e)return t.lods.length-1;const i=this.extent;for(let s=t.lods.length-1;s>=0;s--){const n=t.lods[s],o=n.resolution*t.size[0],l=n.resolution*t.size[1];if(Math.ceil(i.width/o)*Math.ceil(i.height/l)<=e)return s}return-1}allElevationTilesFetched(){return this.candidateTiles.length===this.elevationTiles.length}clearElevationTiles(){this.elevationTiles.length=0,this.fetchedCandidates.clear()}populateElevationTiles(e){for(const t of this.candidateTiles){const i=e[t.id];i&&(this.fetchedCandidates.add(t),this.elevationTiles.push(i))}}remapTiles(e){this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles.map((t=>e[t.id])))}getTilesToFetch(){return this.candidateTiles}forEachTileToFetch(e,t){const i=this.candidateTiles;this.candidateTiles=[],i.forEach((i=>{if(this.fetchedCandidates.has(i))return void(t&&t(i));let s=!1;e(i,(()=>s=!0)),s?t&&t(i):this.candidateTiles.push(i)})),this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles,t)}_uniqueNonOverlappingTiles(e,t){const i={},s=[];for(const n of e)i[n.id]?t&&t(n):(i[n.id]=n,s.push(n));const n=s.sort(((e,t)=>e.level-t.level));return n.filter(((e,i)=>{for(let s=0;s<i;s++)if(Object(o.i)(n[s].extent,e.extent))return t&&t(e),!1;return!0}))}_selectCandidateTilesCoveringExtentAt(e){this.candidateTiles.length=0;const t=this.layer.tileInfo,i=t.lods[e],s=this.extent,n=t.tileAt(i.level,s.xmin,s.ymin),o=i.resolution*t.size[0],l=i.resolution*t.size[1],a=Math.ceil((s.xmax-n.extent[0])/o),r=Math.ceil((s.ymax-n.extent[1])/l);for(let e=0;e<r;e++)for(let i=0;i<a;i++){const s={id:null,level:n.level,row:n.row-e,col:n.col+i};t.updateTileInfo(s),this._tileIsMasked(s)||this.candidateTiles.push(s)}}_tileIsMasked(e){return!!this.maskExtents&&this.maskExtents.some((t=>Object(o.i)(t,e.extent)))}}function R(e,t){let i=e.lods.length-1;if(t>0){const s=e.lods.findIndex((e=>e.resolution<t));0===s?i=0:s>0&&(i=s-1)}return i}const _={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0};t.default=x}}]);