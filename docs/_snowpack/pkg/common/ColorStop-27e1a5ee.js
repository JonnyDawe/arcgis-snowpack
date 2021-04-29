import { e, y, i as i$2, a, j as o, N, o as o$1 } from './Identifiable-c8406192.js';
import './config-b3bf08ce.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var s;let p=s=class extends a{constructor(){super(...arguments),this.title=null;}clone(){return new s({title:this.title})}};e([y({type:String,json:{write:!0}})],p.prototype,"title",void 0),p=s=e([i$2("esri.renderers.support.LegendOptions")],p);var i$1=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var i;let c=i=class extends a{constructor(r){super(r),this.color=null,this.label=null,this.value=null;}writeValue(r,o,e){o[e]=null==r?0:r;}clone(){return new i({color:this.color&&this.color.clone(),label:this.label,value:this.value})}};e([y({type:o,json:{type:[N],write:!0}})],c.prototype,"color",void 0),e([y({type:String,json:{write:!0}})],c.prototype,"label",void 0),e([y({type:Number,json:{write:{allowNull:!0}}})],c.prototype,"value",void 0),e([o$1("value")],c.prototype,"writeValue",null),c=i=e([i$2("esri.renderers.visualVariables.support.ColorStop")],c);var u=c;

export { i$1 as i, u };
