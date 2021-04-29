import { n } from './Identifiable-c8406192.js';
import { h, y as y$1 } from './fieldUtils-a9f71c96.js';
import { y } from './Field-e6fe6b12.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const s=n.getLogger("esri.layers.support.fieldProperties");function l(){return {fields:{type:[y],value:null},outFields:{type:[String],json:{read:!1},set:function(e){this._userOutFields=e,this.notifyChange("outFields");},get:function(){const e=this._userOutFields;if(!e||!e.length)return null;if(e.includes("*"))return ["*"];if(!this.fields)return e;for(const t of e){h(this.fields,t)||s.error("field-attributes-layer:invalid-field",`Invalid field ${t} found in outFields`,{layer:this,outFields:e});}return y$1(this.fields,e)}}}}

export { l };
