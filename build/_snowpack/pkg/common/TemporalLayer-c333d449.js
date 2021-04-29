import { e, y, a1 as e$1, i } from './Identifiable-c8406192.js';
import './config-b3bf08ce.js';
import { m } from './fieldUtils-a9f71c96.js';
import { d, r } from './TimeExtent-155cb8a4.js';
import { l, c } from './TimeInfo-190b35f7.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const f=u=>{let f=class extends u{constructor(){super(...arguments),this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0;}readOffset(e,t){const o=t.timeInfo.exportOptions;if(!o)return null;const r$1=o.timeOffset,s=r.fromJSON(o.timeOffsetUnits);return r$1&&s?new l({value:r$1,unit:s}):null}set timeInfo(e){m(e,this.fields),this._set("timeInfo",e);}};return e([y({type:d,json:{write:!1}})],f.prototype,"timeExtent",void 0),e([y({type:l})],f.prototype,"timeOffset",void 0),e([e$1("service","timeOffset",["timeInfo.exportOptions"])],f.prototype,"readOffset",null),e([y({value:null,type:c,json:{write:!0,origins:{"web-document":{read:!1,write:!1}}}})],f.prototype,"timeInfo",null),e([y({type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation"},origins:{"web-scene":{read:!1,write:!1}}}})],f.prototype,"useViewTime",void 0),f=e([i("esri.layers.mixins.TemporalLayer")],f),f};

export { f };
