import { e, y, a1 as e$1, A as k, i } from './Identifiable-c8406192.js';
import './config-b3bf08ce.js';
import { r } from './serviceTileInfoProperty-cc3ceeae.js';
import { j } from './TilemapCache-48a08224.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const a=a=>{let l=class extends a{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null;}readMinScale(e,r){return null!=r.minLOD&&null!=r.maxLOD?e:0}readMaxScale(e,r){return null!=r.minLOD&&null!=r.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,r){return r.capabilities&&r.capabilities.indexOf("Tilemap")>-1?new j({layer:this}):null}};return e([y({json:{read:{source:"copyrightText"}}})],l.prototype,"copyright",void 0),e([y()],l.prototype,"minScale",void 0),e([e$1("service","minScale")],l.prototype,"readMinScale",null),e([y()],l.prototype,"maxScale",void 0),e([e$1("service","maxScale")],l.prototype,"readMaxScale",null),e([y({type:k})],l.prototype,"spatialReference",void 0),e([y({readOnly:!0})],l.prototype,"supportsBlankTile",null),e([y(r)],l.prototype,"tileInfo",void 0),e([y()],l.prototype,"tilemapCache",void 0),e([e$1("service","tilemapCache",["capabilities"])],l.prototype,"readTilemapCache",null),e([y()],l.prototype,"version",void 0),l=e([i("esri.layers.mixins.ArcGISCachedService")],l),l};

export { a };
