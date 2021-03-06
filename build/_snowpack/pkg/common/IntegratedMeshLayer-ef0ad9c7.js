import { cO as h, P as r, J as t, bE as t$1, aQ as Q, cP as F, cQ as s, a$ as o, aX as D, ap as g$1, cR as p, bY as qt, e, y as y$1, au as x, o as o$1, i as i$2, a, aU as t$2, b as i$3, L, U as U$1, C as U$2, w as u$2, bR as w$1, s as s$2, a1 as e$1 } from './Identifiable-c8406192.js';
import { y as y$2 } from './config-b3bf08ce.js';
import { m as m$1, i, v as v$1, R as R$1, c } from './persistableUrlUtils-b4be11a9.js';
import { i as i$1, R as R$2 } from './SceneService-e53eb3f3.js';
import { b as b$1 } from './Layer-d22ad00d.js';
import { l as l$2 } from './MultiOriginJSONSupport-29c9a66e.js';
import { C } from './watchUtils-880dbce7.js';
import { l as l$1, m as m$3 } from './OperationalLayer-d48a5914.js';
import { p as p$1 } from './ArcGISService-7a5cc3ad.js';
import { u as u$1 } from './PortalLayer-8f26d9e1.js';
import { s as s$1 } from './ScaleRangeLayer-8feef0dd.js';
import { s as s$3, l as l$3, u as u$3, m as m$2 } from './I3SLayerDefinitions-e96db853.js';
import { n as nn, f as fn } from './projection-1aa78979.js';
import './arcgisLayerUrl-d85d6d65.js';
import './HeightModelInfo-f665a73c.js';
import './unitUtils-1b0a3531.js';
import './resourceUtils-9c620d32.js';
import './TimeExtent-155cb8a4.js';
import './fieldUtils-a9f71c96.js';
import './lengthUtils-cb1a7b62.js';
import './vec3f64-a6795633.js';
import './vec3-ae5ae182.js';
import './mat4-3619c4da.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function g(r$1){const e=r(r$1)&&r$1.origins?r$1.origins:[void 0];return (t,o)=>{const n=w(r$1,t,o);for(const r of e){const e=h(t,r,o);for(const t in n)e[t]=n[t];}}}function w(r$1,e,o){if(r(r$1)&&"resource"===r$1.type)return v(r$1,e,o);switch(r(r$1)&&r$1.type?r$1.type:"other"){case"other":return {read:!0,write:!0};case"url":{const{read:t,write:r}=R$1;return {read:t,write:r}}}}function v(e,i$2,p){const a=s(i$2,p);return {type:String,read:(t,r,e)=>{const o=m$1(t,r,e);return a.type===String?o:"function"==typeof a.type?new a.type({url:o}):void 0},write:{writer(o,i$2,c,f){if(!f||!f.resources)return "string"==typeof o?void(i$2[c]=i(o,f)):void(i$2[c]=o.write({},f));const m=P(o),d=m?i(m,{...f,verifyItemRelativeUrls:f&&f.verifyItemRelativeUrls?{writtenUrls:f.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null},1):null,g=a.type!==String&&(!i$1(this)||f&&f.origin&&this.originIdOf(p)>t$1(f.origin));f&&f.portalItem&&r(d)&&!Q(d)?g?j(this,p,o,d,i$2,c,f,e):I$1(d,i$2,c,f):f&&f.portalItem&&(t(d)||r(v$1(d))||F(d)||g)?U(this,p,o,d,i$2,c,f,e):i$2[c]=d;}}}}function U(t,r,o$1,i,n,s,a,l){const m=o(),y=S(o$1,i,a),h=D(g$1(l,"prefix"),m),d=`${h}.${p(y)}`,g=a.portalItem.resourceFromPath(d);F(i)&&a.resources.pendingOperations.push(b(i).then((t=>{g.path=`${h}.${p(t)}`,n[s]=g.itemRelativeUrl;})).catch((()=>{}))),O$1(t,r,g,y,a.resources.toAdd),n[s]=g.itemRelativeUrl;}function j(t,r,e,o,i,n,s,u){const p$1=s.portalItem.resourceFromPath(o),c=S(e,o,s);p(c)===qt(p$1.path)?(O$1(t,r,p$1,c,s.resources.toUpdate),i[n]=o):U(t,r,e,o,i,n,s,u);}function I$1(t,r,e,o){o.resources.toKeep.push({resource:o.portalItem.resourceFromPath(t)}),r[e]=t;}function O$1(t,r,e,o,i){i.push({resource:e,content:o,finish:e=>{R(t,r,e);}});}function S(t,r,e){return "string"==typeof t?{url:r}:new Blob([JSON.stringify(t.toJSON(e))],{type:"application/json"})}async function b(t){const r=(await import('./Identifiable-c8406192.js').then(function (n) { return n.d1; })).default,{data:e}=await r(t,{responseType:"blob"});return e}function P(t$1){return t(t$1)?null:"string"==typeof t$1?t$1:t$1.url}function R(t,r,e){"string"==typeof t[r]?t[r]=e.url:t[r].url=e.url;}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var l;let y=l=class extends a{constructor(e){super(e),this.geometry=null,this.type="clip";}writeGeometry(e,r,o,s){if(s.layer&&s.layer.spatialReference&&!s.layer.spatialReference.equals(this.geometry.spatialReference)){if(!nn(e.spatialReference,s.layer.spatialReference))return void(s&&s.messages&&s.messages.push(new t$2("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:s.layer.spatialReference,context:s})));const p=new x;fn(e,p,s.layer.spatialReference),r[o]=p.toJSON(s);}else r[o]=e.toJSON(s);delete r[o].spatialReference;}clone(){return new l({geometry:y$2(this.geometry),type:this.type})}};e([y$1({type:x}),g()],y.prototype,"geometry",void 0),e([o$1(["web-scene","portal-item"],"geometry")],y.prototype,"writeGeometry",null),e([y$1({type:["clip","mask","replace"],nonNullable:!0}),g()],y.prototype,"type",void 0),y=l=e([i$2("esri.layers.support.SceneModification")],y);var f=y;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var m;let n=m=class extends(i$3(L.ofType(f))){constructor(r){super(r),this.url=null;}toJSON(r){return this.toArray().map((o=>o.toJSON(r))).filter((r=>!!r.geometry))}clone(){return new m({url:this.url,items:this.items.map((r=>r.clone()))})}_readModifications(r,o){for(const t of r)this.add(f.fromJSON(t,o));}static fromJSON(r,o){const t=new m;return t._readModifications(r,o),t}static async fromUrl(r,t,e){const i={url:U$1(r),origin:"service"},c=await U$2(r,{responseType:"json",signal:g$1(e,"signal")}),n=t.toJSON(),u=[];for(const o of c.data)u.push(f.fromJSON({...o,geometry:{...o.geometry,spatialReference:n}},i));return new m({url:r,items:u})}};e([y$1({type:String})],n.prototype,"url",void 0),n=m=e([i$2("esri.layers.support.SceneModifications")],n);var u=n;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let I=class extends(R$2(p$1(l$1(u$1(s$1(l$2(b$1))))))){constructor(...e){super(...e),this.handles=new u$2,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null;}destroy(){this.handles.destroy();}initialize(){this.handles.add(C(this,"modifications","after-changes",(()=>this.modifications=this.modifications),null,null,!0));}normalizeCtorArgs(e,t){return "string"==typeof e?{url:e,...t}:e}readModifications(e,t,r){this._modificationsSource={url:c(e,r),context:r};}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const o=g$1(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e);}catch(i){w$1(i);}if(await this._fetchService(o),r(this._modificationsSource)){const t=await u.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null;}await this._fetchIndexAndUpdateExtent(this.nodePages,o);}beforeSave(){if(!t(this._modificationsSource))return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new s$2("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new s$2("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new s$2("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return ["IntegratedMeshLayer"]}};e([y$1({type:String,readOnly:!0})],I.prototype,"geometryType",void 0),e([y$1({type:["show","hide"]})],I.prototype,"listMode",void 0),e([y$1({type:["IntegratedMeshLayer"]})],I.prototype,"operationalLayerType",void 0),e([y$1({json:{read:!1},readOnly:!0})],I.prototype,"type",void 0),e([y$1({type:s$3,readOnly:!0})],I.prototype,"nodePages",void 0),e([y$1({type:[l$3],readOnly:!0})],I.prototype,"materialDefinitions",void 0),e([y$1({type:[u$3],readOnly:!0})],I.prototype,"textureSetDefinitions",void 0),e([y$1({type:[m$2],readOnly:!0})],I.prototype,"geometryDefinitions",void 0),e([y$1({readOnly:!0})],I.prototype,"serviceUpdateTimeStamp",void 0),e([y$1({type:u}),g({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],I.prototype,"modifications",void 0),e([e$1(["web-scene","portal-item"],"modifications")],I.prototype,"readModifications",null),e([y$1(m$3)],I.prototype,"elevationInfo",void 0),e([y$1({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],I.prototype,"path",void 0),I=e([i$2("esri.layers.IntegratedMeshLayer")],I);var O=I;

export default O;
