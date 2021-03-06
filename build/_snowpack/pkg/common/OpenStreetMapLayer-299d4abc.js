import { e, y, bK as b, i, M, A as k } from './Identifiable-c8406192.js';
import './config-b3bf08ce.js';
import { x } from './TileInfo-f085f660.js';
import { x as x$1 } from './WebTileLayer-9681c643.js';
import './unitUtils-1b0a3531.js';
import './aaBoundingRect-a3d841c1.js';
import './Layer-d22ad00d.js';
import './MultiOriginJSONSupport-29c9a66e.js';
import './OperationalLayer-d48a5914.js';
import './persistableUrlUtils-b4be11a9.js';
import './TimeExtent-155cb8a4.js';
import './fieldUtils-a9f71c96.js';
import './lengthUtils-cb1a7b62.js';
import './BlendLayer-f2f3b180.js';
import './PortalLayer-8f26d9e1.js';
import './RefreshableLayer-cf71b273.js';
import './ScaleRangeLayer-8feef0dd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let n=class extends x$1{constructor(...e){super(...e),this.portalItem=null,this.isReference=null,this.subDomains=["a","b","c"],this.fullExtent=new M(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,k.WebMercator),this.urlTemplate="https://{subDomain}.tile.openstreetmap.org/{level}/{col}/{row}.png",this.operationalLayerType="OpenStreetMap",this.type="open-street-map",this.copyright="Map data &copy; OpenStreetMap contributors, CC-BY-SA";}get refreshInterval(){return 0}};e([y({type:b,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],n.prototype,"portalItem",void 0),e([y({type:Boolean,json:{read:!1,write:!1}})],n.prototype,"isReference",void 0),e([y({type:Number,readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],n.prototype,"refreshInterval",null),e([y({type:x,json:{write:!1}})],n.prototype,"tileInfo",void 0),e([y({type:["show","hide"]})],n.prototype,"listMode",void 0),e([y({readOnly:!0,json:{read:!1,write:!1}})],n.prototype,"subDomains",void 0),e([y({readOnly:!0,json:{read:!1,write:!1}})],n.prototype,"fullExtent",void 0),e([y({readOnly:!0,json:{read:!1,write:!1}})],n.prototype,"urlTemplate",void 0),e([y({type:["OpenStreetMap"]})],n.prototype,"operationalLayerType",void 0),e([y({json:{read:!1}})],n.prototype,"type",void 0),e([y({json:{read:!1,write:!1}})],n.prototype,"copyright",void 0),e([y({json:{read:!1,write:!1}})],n.prototype,"wmtsInfo",void 0),n=e([i("esri.layers.OpenStreetMapLayer")],n);var l=n;

export default l;
