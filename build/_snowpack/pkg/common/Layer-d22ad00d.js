import { n, m as n$1, z as r, M, A as k, B as g, U, C as U$1, s as s$1, e, y, i, k as f$1 } from './Identifiable-c8406192.js';
import { s } from './config-b3bf08ce.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let m=0;const h=n.getLogger("esri.layers.Layer");let f=class extends(n$1.EventedMixin(r(f$1))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new M(-180,-90,180,90,k.WGS84),this.id=Date.now().toString(16)+"-layer-"+m++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=k.WGS84,this.title=null,this.type=null,this.url=null,this.visible=!0;}static async fromArcGISServerUrl(t){const r="string"==typeof t?{url:t}:t,e=await import('./arcgisLayers-9f9af0f2.js');try{return await e.fromUrl(r)}catch(o){throw h.error("#fromArcGISServerUrl({ url: '"+r.url+"'})","Failed to create layer from arcgis server url",o),o}}static async fromPortalItem(t){const e="portalItem"in t?t:{portalItem:t},o=await import('./portalLayers-5aea4f24.js').then(function (n) { return n.p; });try{return await o.fromItem(e)}catch(i){const t=e&&e.portalItem,o=t&&t.id||"unset",a=t&&t.portal&&t.portal.url||s.portalUrl;throw h.error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+a+"', id: '"+o+"')",i),i}}initialize(){this.when().catch((t=>{var r,o;g(t)||n.getLogger(this.declaredClass).error("#load()",`Failed to load layer (title: '${null!=(r=this.title)?r:"no title"}', id: '${null!=(o=this.id)?o:"no id"}')`,{error:t});}));}destroy(){if(this.parent){const t=this,r=this.parent;"layers"in r&&r.layers.includes(t)?r.layers.remove(t):"tables"in r&&r.tables.includes(t)?r.tables.remove(t):"baseLayers"in r&&r.baseLayers.includes(t)?r.baseLayers.remove(t):"baseLayers"in r&&r.referenceLayers.includes(t)&&r.referenceLayers.remove(t);}}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){const t=this.url;return t?U(t):null}async fetchAttributionData(){const t=this.attributionDataUrl;if(this.hasAttributionData&&t){return (await U$1(t,{query:{f:"json"},responseType:"json"})).data}throw new s$1("layer:no-attribution-data","Layer does not have attribution data")}};e([y({type:String})],f.prototype,"attributionDataUrl",void 0),e([y({type:M})],f.prototype,"fullExtent",void 0),e([y({readOnly:!0})],f.prototype,"hasAttributionData",null),e([y({type:String})],f.prototype,"id",void 0),e([y({type:Boolean,nonNullable:!0})],f.prototype,"legendEnabled",void 0),e([y({type:["show","hide","hide-children"]})],f.prototype,"listMode",void 0),e([y({type:Number,range:{min:0,max:1},nonNullable:!0})],f.prototype,"opacity",void 0),e([y()],f.prototype,"parent",void 0),e([y({readOnly:!0})],f.prototype,"parsedUrl",null),e([y({type:Boolean})],f.prototype,"popupEnabled",void 0),e([y({type:Boolean})],f.prototype,"attributionVisible",void 0),e([y({type:k})],f.prototype,"spatialReference",void 0),e([y({type:String})],f.prototype,"title",void 0),e([y({type:String,readOnly:!0,json:{read:!1}})],f.prototype,"type",void 0),e([y()],f.prototype,"url",void 0),e([y({type:Boolean,nonNullable:!0})],f.prototype,"visible",void 0),f=e([i("esri.layers.Layer")],f);var b=f;

export { b };