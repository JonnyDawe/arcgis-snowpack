(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{434:function(e,t,r){"use strict";r.r(t);r(87),r(25),r(18);var i=r(0),s=r(1),l=r(47),o=r(103),a=r(23),n=r(112),c=r(108),u=r(105),p=r(107),y=r(73),h=r(351),d=r(384),m=r(361),f=r(396),b=r(403),g=r(386),S=r(122);r(13),r(16),r(6),r(70),r(10),r(32),r(84),r(5),r(111),r(71),r(54),r(323),r(350),r(67),r(314);const A=i.n.getLogger("esri.layers.support.SpriteSource");class O{constructor(e,t,r,i){this.baseURL=e,this.devicePixelRatio=t,this.maxTextureSize=r,this._spriteImageFormat=i,this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded"}get spriteNames(){const e=[];for(const t in this._spritesData)e.push(t);return e.sort(),e}getSpriteInfo(e){return this._spritesData[e]}async load(e){if(this.baseURL){this.loadStatus="loading";try{await this._loadSprites(e),this.loadStatus="loaded"}catch{this.loadStatus="failed"}}else this.loadStatus="failed"}_loadSprites(e){this._isRetina=this.devicePixelRatio>1.15;const t=Object(i.U)(this.baseURL),r=t.query?"?"+Object(i.bU)(t.query):"",s=this._isRetina?"@2x":"",l=`${t.path}${s}.${this._spriteImageFormat}${r}`,o=`${t.path}${s}.json${r}`;return Promise.all([Object(i.C)(o,e),Object(i.C)(l,{responseType:"image",...e})]).then((([e,r])=>{const s=Object.keys(e.data);if(!s||0===s.length||1===s.length&&"_ssl"===s[0]||!r||!r.data)return this._spritesData=this.image=null,this.width=this.height=0,Promise.resolve(null);this._spritesData=e.data;const l=r.data,o=Math.max(this.maxTextureSize,4096);if(l.width>o||l.height>o){const e=`Sprite resource for style ${t.path} is bigger than the maximum allowed of ${o} pixels}`;throw A.error(e),new i.s("SpriteSource",e)}this.width=l.width,this.height=l.height;const a=document.createElement("canvas"),n=a.getContext("2d");a.width=l.width,a.height=l.height,n.drawImage(l,0,0,l.width,l.height);const c=n.getImageData(0,0,l.width,l.height),u=new Uint8Array(c.data);let p;for(let e=0;e<u.length;e+=4)p=u[e+3]/255,u[e]=u[e]*p,u[e+1]=u[e+1]*p,u[e+2]=u[e+2]*p;this.image=u}))}}class j{constructor(e,t,r){this.tileMapURL="",this.tilemapCache=null,this.parsedUrl=null,this.tileInfo=null,this.capabilities=null,this.tileIndex=null,this.fullExtent=null,this.name=e,this.sourceUrl=t,t&&(this.parsedUrl=Object(i.U)(this.sourceUrl));const l=this.parsedUrl.path,o=this.parsedUrl.query?"?"+Object(i.bU)(this.parsedUrl.query):"",a=Object(s.o)(r),n=a.tiles;t&&n.forEach(((e,t)=>{Object(i.aQ)(e)||(n[t]=Object(i.aX)(l,e)+o)})),this.tileServers=n,r.tileMap&&(this.tileMapURL=Object(i.aX)(t,r.tileMap));const c=r.capabilities&&r.capabilities.split(",").map((e=>e.toLowerCase().trim())),u=!!r.exportTilesAllowed,p=!!c&&-1!==c.indexOf("tilemap"),y=u&&r.hasOwnProperty("maxExportTilesCount")?r.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:u,supportsTileMap:p},exportTiles:u?{maxExportTilesCount:+y}:null},this.tileInfo=Object(m.a)(a.tileInfo,a,null,{ignoreMinMaxLOD:!0}),p&&(this.type="vector-tile",this.tilemapCache=new h.a({layer:this}),this.tilemapCache&&(this.tileIndex=new f.a(this.tilemapCache))),this.fullExtent=i.M.fromJSON(r.fullExtent)}getRefKey(e,t){return this.tileIndex?this.tileIndex.dataKey(e,t):Promise.resolve(e)}getSourceTileUrl(e,t,r){let i=this.tileServers[t%this.tileServers.length];return i=i.replace(/\{z\}/gi,e.toString()).replace(/\{y\}/gi,t.toString()).replace(/\{x\}/gi,r.toString()),i}isCompatibleWith(e){const t=this.tileInfo,r=e.tileInfo;if(!t.spatialReference.equals(r.spatialReference))return!1;if(!t.origin.equals(r.origin))return!1;if(Math.round(t.dpi)!==Math.round(r.dpi))return!1;const i=t.lods,s=r.lods,l=Math.min(i.length,s.length);for(let e=0;e<l;e++){const t=i[e],r=s[e];if(t.level!==r.level||Math.round(t.scale)!==Math.round(r.scale))return!1}return!0}}const v=s.l.defaults&&s.l.defaults.io.corsEnabledServers;function x(e){if(!e)return;const t=Object(i.cV)(e);v&&-1===v.indexOf(t)&&v.push(t)}function U(...e){let t;for(let r=0;r<e.length;++r)if(Object(i.cU)(e[r])){if(t){const i=t.split("://")[0];t=i+":"+e[r].trim()}}else t=Object(i.aQ)(e[r])?e[r]:Object(i.aX)(t,e[r]);return Object(i.bt)(t)}async function w(e,t,r,s,l){let o,a,n;if(Object(i.h)(l),"string"==typeof r){const e=Object(i.aR)(r);x(e);const t=Object(i.U)(e);n=await Object(i.C)(t.path,{query:{f:"json"},responseType:"json",...l}),o=e,a=e}else n={data:r},o=r.jsonUrl||null,a=s;const c=n.data;return n.ssl&&(o&&(o=o.replace(/^http:/i,"https:")),a&&(a=a.replace(/^http:/i,"https:"))),_(c)?(e.styleUrl=o||null,async function(e,t,r,s){const l=r?Object(i.bL)(r):i.cW;e.styleBase=l,e.style=t,e.styleUrl&&x(e.styleUrl),t["sprite-format"]&&"webp"===t["sprite-format"].toLowerCase()&&(e.spriteFormat="webp");const o=[];if(t.sources&&t.sources.esri){const r=t.sources.esri;r.url?await w(e,"esri",U(l,r.url),void 0,s):o.push(w(e,"esri",r,l,s))}for(const r of Object.keys(t.sources))"esri"!==r&&"vector"===t.sources[r].type&&(t.sources[r].url?o.push(w(e,r,U(l,t.sources[r].url),void 0,s)):t.sources[r].tiles&&o.push(w(e,r,t.sources[r],l,s)));await Promise.all(o)}(e,c,a,l)):function(e){return!_(e)}(c)?e.sourceUrl?R(e,c,a,!1,t,l):(e.sourceUrl=o||null,R(e,c,a,!0,t,l)):Promise.reject("You must specify the URL or the JSON for a service or for a style.")}function _(e){return!!e.sources}async function R(e,t,r,s,l,o){const a=r?Object(i.bt)(r)+"/":i.cW,n=function(e,t){if(e.hasOwnProperty("tileInfo"))return e;const r={xmin:-20037507.067161843,ymin:-20037507.067161843,xmax:20037507.067161843,ymax:20037507.067161843,spatialReference:{wkid:102100}},i=512;let s=78271.51696400007,l=295828763.7957775;const o=[],a=e.hasOwnProperty("minzoom")?parseFloat(e.minzoom):0,n=e.hasOwnProperty("maxzoom")?parseFloat(e.maxzoom):22;for(let e=0;e<=n;e++)e>=a&&o.push({level:e,scale:l,resolution:s}),s/=2,l/=2;for(const r of e.tiles)x(U(t,r));return{capabilities:"TilesOnly",initialExtent:r,fullExtent:r,minScale:0,maxScale:0,tiles:e.tiles,tileInfo:{rows:i,cols:i,dpi:96,format:"pbf",origin:{x:-20037508.342787,y:20037508.342787},lods:o,spatialReference:{wkid:102100}}}}(t,a),c=new j(l,a,n);if(!s&&e.primarySourceName in e.sourceNameToSource){const t=e.sourceNameToSource[e.primarySourceName];if(!t.isCompatibleWith(c))return Promise.resolve();null!=c.fullExtent&&(null!=t.fullExtent?t.fullExtent.union(c.fullExtent):t.fullExtent=c.fullExtent.clone()),t.tileInfo.lods.length<c.tileInfo.lods.length&&(t.tileInfo=c.tileInfo)}if(s?(e.sourceBase=a,e.source=t,e.validatedSource=n,e.primarySourceName=l,e.sourceUrl&&x(e.sourceUrl)):x(a),e.sourceNameToSource[l]=c,!e.style)return null==t.defaultStyles?Promise.reject():"string"==typeof t.defaultStyles?w(e,"",U(a,t.defaultStyles,"root.json"),void 0,o):w(e,"",t.defaultStyles,U(a,"root.json"),o)}class I{constructor(e,t){this.lockedSchemaPixelSize=e,this.isGCS=t}getLevelRowColumn(e){return this.isGCS?[e[0],e[1]>>1,e[2]>>1]:256===this.lockedSchemaPixelSize&&e[0]>0?[e[0]-1,e[1]>>1,e[2]>>1]:e}adjustLevel(e){return this.isGCS?e:256===this.lockedSchemaPixelSize?e>0?e-1:0:e}getShift(e,t){let r=0,i=0;return(256===this.lockedSchemaPixelSize||this.isGCS)&&(e[2]%2&&(r=t),e[1]%2&&(i=t)),[r,i]}getScale(e){if(this.isGCS){if(512===this.lockedSchemaPixelSize)return 4}else if(256===this.lockedSchemaPixelSize&&0===e)return 1;return 2}static create256x256CompatibleTileInfo(e){if(!e)return null;if(256===e.size[0]&&256===e.size[1])return e;const t=e.spatialReference.isGeographic,r=[],i=e.lods.length;for(let s=0;s<i;s++){const i=e.lods[s],l=t?i.resolution:2*i.resolution;r.push(new y.a({level:i.level,scale:i.scale,resolution:l}))}return new y.b({size:[256,256],dpi:e.dpi,format:e.format,compressionQuality:e.compressionQuality,origin:e.origin,spatialReference:e.spatialReference,lods:r})}static create512x512CompatibleTileInfo(e){if(!e)return null;if(256===e.size[0]||256===e.size[1])return null;const t=[],r=e.lods.length;for(let i=0;i<r;i++){const r=e.lods[i],s=.5*r.resolution;t.push(new y.a({level:r.level,scale:r.scale,resolution:s}))}return new y.b({size:[512,512],dpi:e.dpi,format:e.format,compressionQuality:e.compressionQuality,origin:e.origin,spatialReference:e.spatialReference,lods:t})}}const P=1e-6;function T(e,t){if(e===t)return!0;if(!e&&null!=t)return!1;if(null!=e&&!t)return!1;if(!e.spatialReference.equals(t.spatialReference)||e.dpi!==t.dpi)return!1;const r=e.origin,i=t.origin;if(Math.abs(r.x-i.x)>=P||Math.abs(r.y-i.y)>=P)return!1;let s,l;e.lods[0].scale>t.lods[0].scale?(s=e,l=t):(l=e,s=t);for(let e=s.lods[0].scale;e>=l.lods[l.lods.length-1].scale-P;e/=2)if(Math.abs(e-l.lods[0].scale)<P)return!0;return!1}function C(e,t){if(e===t)return e;if(!e&&null!=t)return t;if(null!=e&&!t)return e;const r=e.size[0],i=e.format,s=e.dpi,l={x:e.origin.x,y:e.origin.y},o=e.spatialReference.toJSON(),a=e.lods[0].scale>t.lods[0].scale?e.lods[0]:t.lods[0],n=e.lods[e.lods.length-1].scale<=t.lods[t.lods.length-1].scale?e.lods[e.lods.length-1]:t.lods[t.lods.length-1],c=a.scale,u=a.resolution,p=n.scale,h=[];let d=c,m=u,f=0;for(;d>p;)h.push({level:f,resolution:m,scale:d}),f++,d/=2,m/=2;return new y.b({size:[r,r],dpi:s,format:i||"pbf",origin:l,lods:h,spatialReference:o})}let L=class extends(Object(c.a)(Object(p.a)(Object(d.a)(Object(n.a)(Object(a.i)(Object(u.a)(Object(o.b)(l.a)))))))){constructor(...e){super(...e),this._spriteSourceMap=new Map,this.currentStyleInfo=null,this.style=null,this.isReference=null,this.operationalLayerType="VectorTileLayer",this.type="vector-tile",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){this._spriteSourceMap.clear()}async prefetchResources(e){await this.loadSpriteSource(s.e.devicePixelRatio||1,e)}load(e){const t=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},e).then((async()=>{if(!this.portalItem||!this.portalItem.id)return;const t=`${this.portalItem.itemUrl}/resources/styles/root.json`;(await Object(i.C)(t,{...e,query:{f:"json"}})).data&&this.read({url:t},Object(b.a)(this.portalItem))})).then((()=>this._loadStyle(e)),(()=>this._loadStyle(e)));return this.addResolvingPromise(t),Promise.resolve(this)}get attributionDataUrl(){const e=this.currentStyleInfo,t=e&&e.serviceUrl&&Object(i.U)(e.serviceUrl);return t?this._getDefaultAttribution(t.path):null}get capabilities(){const e=this._getPrimarySource();return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}get fullExtent(){const e=this._getPrimarySource();return e?e.fullExtent:null}get parsedUrl(){return this.serviceUrl?Object(i.U)(this.serviceUrl):null}get serviceUrl(){return this.currentStyleInfo&&this.currentStyleInfo.serviceUrl||null}get spatialReference(){return this.tileInfo&&this.tileInfo.spatialReference||null}get styleUrl(){return this.currentStyleInfo&&this.currentStyleInfo.styleUrl||null}writeStyleUrl(e,t){e&&Object(i.cU)(e)&&(e=`https:${e}`),t.styleUrl=e}get tileIndexType(){const e=this._getPrimarySource();return e?e.type:""}get tileIndexUrl(){const e=this._getPrimarySource();return e?e.tileMapURL:""}get tileInfo(){var e;const t=[];for(const e in this.sourceNameToSource)t.push(this.sourceNameToSource[e]);let r=(null==(e=this._getPrimarySource())?void 0:e.tileInfo)||new y.b;if(t.length>1)for(let e=0;e<t.length;e++)T(r,t[e].tileInfo)&&(r=C(r,t[e].tileInfo));return r}get tilemapCache(){const e=this._getPrimarySource();return e&&e.capabilities.operations.supportsTileMap?e.tilemapCache:null}get tileServers(){const e=this._getPrimarySource();return e?e.tileServers:[]}readVersion(e,t){return t.version?parseFloat(t.version):parseFloat(t.currentVersion)}get compatibleTileInfo256(){return I.create256x256CompatibleTileInfo(this.tileInfo)}get compatibleTileInfo512(){return I.create512x512CompatibleTileInfo(this.tileInfo)}async loadSpriteSource(e=1,t){if(!this._spriteSourceMap.has(e)){const r=Object(S.b)(),i=new O(this.styleRepository.sprite,e,r.maxTextureSize,this.currentStyleInfo.spriteFormat);await i.load(t),this._spriteSourceMap.set(e,i)}return Promise.resolve(this._spriteSourceMap.get(e))}async loadStyle(e,t){const r=e||this.style||this.url;if(this._loadingPromise&&"string"==typeof r&&this.url===r&&!Object(i.ad)(this._abortController))return this._loadingPromise;const s=this._abortController;s&&s.abort();const l=Object(i.V)();return this._loadingPromise=new Promise(((e,s)=>{const o={signal:l.signal};this._spriteSourceMap.clear(),this._getSourceAndStyle(r,o).then(e,s),Object(i.a8)(t,(()=>{l.abort()}))})),this._abortController=l,this._loadingPromise}getStyleLayerId(e){return this.styleRepository.getStyleLayerId(e)}getStyleLayerIndex(e){return this.styleRepository.getStyleLayerIndex(e)}getPaintProperties(e){return Object(s.o)(this.styleRepository.getPaintProperties(e))}setPaintProperties(e,t){const r=this.styleRepository.isPainterDataDriven(e);this.styleRepository.setPaintProperties(e,t);const i=this.styleRepository.isPainterDataDriven(e);this.emit("paint-change",{layerName:e,paint:t,isDataDriven:r||i})}getStyleLayer(e){return Object(s.o)(this.styleRepository.getStyleLayer(e))}setStyleLayer(e,t){this.styleRepository.setStyleLayer(e,t),this.emit("style-layer-change",{layer:e,index:t})}deleteStyleLayer(e){this.styleRepository.deleteStyleLayer(e),this.emit("delete-style-layer",{layerName:e})}getLayoutProperties(e){return Object(s.o)(this.styleRepository.getLayoutProperties(e))}setLayoutProperties(e,t){this.styleRepository.setLayoutProperties(e,t),this.emit("layout-change",{layer:e,layout:t})}setStyleLayerVisibility(e,t){this.styleRepository.setStyleLayerVisibility(e,t),this.emit("style-layer-visibility-change",{layer:e,visibility:t})}getStyleLayerVisibility(e){return this.styleRepository.getStyleLayerVisibility(e)}getTileUrl(e,t,r){let i=this.tileServers[t%this.tileServers.length];return i=i.replace(/\{z\}/gi,e.toString()).replace(/\{y\}/gi,t.toString()).replace(/\{x\}/gi,r.toString()),i}write(e,t){return t&&t.origin&&!this.styleUrl?(t.messages&&t.messages.push(new i.s("vectortilelayer:unsupported",`VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`,{layer:this})),null):super.write(e,t)}async _getSourceAndStyle(e,t){if(!e)throw new Error("invalid style!");const r=await async function(e,t){const r={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},[s,l]="string"==typeof e?[e,null]:[null,e.jsonUrl],o=s?Object(i.U)(s):null;await w(r,"esri",e,l,t);const a={layerDefinition:r.validatedSource,url:s,parsedUrl:o,serviceUrl:r.sourceUrl,style:r.style,styleUrl:r.styleUrl,spriteUrl:r.style.sprite&&U(r.styleBase,r.style.sprite),spriteFormat:r.spriteFormat,glyphsUrl:r.style.glyphs&&U(r.styleBase,r.style.glyphs),sourceNameToSource:r.sourceNameToSource,primarySourceName:r.primarySourceName};return x(a.spriteUrl),x(a.glyphsUrl),a}(e,t);"webp"===r.spriteFormat&&(await function(e){const t={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return new Promise((r=>{const i=new Image;i.onload=()=>{i.onload=i.onerror=null,r(i.width>0&&i.height>0)},i.onerror=()=>{i.onload=i.onerror=null,r(!1)},i.src="data:image/webp;base64,"+t[e]}))}("lossy")||(r.spriteFormat="png")),this._set("currentStyleInfo",{...r}),"string"==typeof e?(this.url=e,this.style=null):(this.url=null,this.style=e),this._set("sourceNameToSource",r.sourceNameToSource),this._set("primarySourceName",r.primarySourceName),this._set("styleRepository",new g.b(r.style,r)),this.read(r.layerDefinition,{origin:"service"}),this.emit("load-style",{})}_getDefaultAttribution(e){const t=e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i),r=["OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2"];if(!t)return;const s=t[2]&&t[2].toLowerCase();if(!s)return;const l=t[1]||"";for(const e of r)if(e.toLowerCase().indexOf(s)>-1)return Object(i.aR)(`//static.arcgis.com/attribution/Vector${l}/${e}`)}_getPrimarySource(){return this.sourceNameToSource&&this.primarySourceName in this.sourceNameToSource?this.sourceNameToSource[this.primarySourceName]:null}async _loadStyle(e){return this._loadingPromise?this._loadingPromise:this.loadStyle(null,e)}};Object(i.e)([Object(i.y)({readOnly:!0})],L.prototype,"attributionDataUrl",null),Object(i.e)([Object(i.y)({type:["show","hide"]})],L.prototype,"listMode",void 0),Object(i.e)([Object(i.y)({readOnly:!0,dependsOn:["sourceNameToSource","primarySourceName"],json:{read:!1}})],L.prototype,"capabilities",null),Object(i.e)([Object(i.y)({readOnly:!0})],L.prototype,"currentStyleInfo",void 0),Object(i.e)([Object(i.y)({json:{read:!1},readOnly:!0,type:i.M})],L.prototype,"fullExtent",null),Object(i.e)([Object(i.y)()],L.prototype,"style",void 0),Object(i.e)([Object(i.y)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],L.prototype,"isReference",void 0),Object(i.e)([Object(i.y)({type:["VectorTileLayer"]})],L.prototype,"operationalLayerType",void 0),Object(i.e)([Object(i.y)({readOnly:!0})],L.prototype,"parsedUrl",null),Object(i.e)([Object(i.y)({readOnly:!0})],L.prototype,"serviceUrl",null),Object(i.e)([Object(i.y)({type:i.A,readOnly:!0})],L.prototype,"spatialReference",null),Object(i.e)([Object(i.y)({readOnly:!0})],L.prototype,"styleRepository",void 0),Object(i.e)([Object(i.y)({readOnly:!0})],L.prototype,"sourceNameToSource",void 0),Object(i.e)([Object(i.y)({readOnly:!0})],L.prototype,"primarySourceName",void 0),Object(i.e)([Object(i.y)({type:String,readOnly:!0,json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],L.prototype,"styleUrl",null),Object(i.e)([Object(i.o)(["portal-item","web-document"],"styleUrl")],L.prototype,"writeStyleUrl",null),Object(i.e)([Object(i.y)({json:{read:!1},readOnly:!0})],L.prototype,"tileIndexType",null),Object(i.e)([Object(i.y)({json:{read:!1},readOnly:!0})],L.prototype,"tileIndexUrl",null),Object(i.e)([Object(i.y)({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:y.b})],L.prototype,"tileInfo",null),Object(i.e)([Object(i.y)({json:{read:!1},readOnly:!0,type:h.a})],L.prototype,"tilemapCache",null),Object(i.e)([Object(i.y)({json:{read:!1},readOnly:!0})],L.prototype,"tileServers",null),Object(i.e)([Object(i.y)({json:{read:!1},readOnly:!0,value:"vector-tile"})],L.prototype,"type",void 0),Object(i.e)([Object(i.y)({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],L.prototype,"url",void 0),Object(i.e)([Object(i.y)({readOnly:!0})],L.prototype,"version",void 0),Object(i.e)([Object(i.a1)("version",["version","currentVersion"])],L.prototype,"readVersion",null),Object(i.e)([Object(i.y)({readOnly:!0})],L.prototype,"compatibleTileInfo256",null),Object(i.e)([Object(i.y)({readOnly:!0})],L.prototype,"compatibleTileInfo512",null),L=Object(i.e)([Object(i.i)("esri.layers.VectorTileLayer")],L);var M=L;t.default=M}}]);