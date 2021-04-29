import { y as y$1, o as o$1 } from './config-b3bf08ce.js';
import { e as e$1, y, i as i$3, a, s as s$1 } from './Identifiable-c8406192.js';
import { M } from './PopupTemplate-77ad81c4.js';
import { o, D } from './symbols-a702d148.js';
import { c as c$3, p as p$4 } from './OperationalLayer-d48a5914.js';
import { E } from './LabelClass-c61f8b70.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let t$2=class extends a{constructor(){super(...arguments),this.type=null;}};e$1([y({type:["selection","cluster"],readOnly:!0,json:{read:!1,write:!0}})],t$2.prototype,"type",void 0),t$2=e$1([i$3("esri.layers.support.FeatureReduction")],t$2);var p$3=t$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var i$2;let e=i$2=class extends a{constructor(){super(...arguments),this.statisticType=null,this.onStatisticField=null,this.onStatisticValueExpression=null;}clone(){return new i$2({statisticType:this.statisticType,onStatisticField:this.onStatisticField,onStatisticValueExpression:this.onStatisticValueExpression})}};e$1([y({type:String,json:{write:!0}})],e.prototype,"statisticType",void 0),e$1([y({type:String,json:{write:!0}})],e.prototype,"onStatisticField",void 0),e$1([y({type:String,json:{write:!0}})],e.prototype,"onStatisticValueExpression",void 0),e=i$2=e$1([i$3("esri.layers.support.OutStatistic")],e);var p$2=e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var p$1;let i$1=p$1=class extends a{constructor(){super(...arguments),this.name=null;}clone(){return new p$1({name:this.name,outStatistic:this.outStatistic.clone()})}};e$1([y({type:String,json:{write:!0}})],i$1.prototype,"name",void 0),e$1([y({type:p$2,json:{write:!0}})],i$1.prototype,"outStatistic",void 0),i$1=p$1=e$1([i$3("esri.layers.support.AggregateField")],i$1);var c$2=i$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var m;let d=m=class extends a{constructor(e){super(e),this.type="cluster",this.clusterRadius=o("80px"),this.clusterMinSize=o("12px"),this.clusterMaxSize=o("50px"),this.popupEnabled=!0,this.popupTemplate=null,this.symbol=null,this.labelingInfo=null,this.labelsVisible=!0,this.fields=null;}clone(){return new m({clusterRadius:this.clusterRadius,clusterMinSize:this.clusterMinSize,clusterMaxSize:this.clusterMaxSize,labelingInfo:y$1(this.labelingInfo),labelsVisible:this.labelsVisible,fields:y$1(this.fields),popupEnabled:this.popupEnabled,popupTemplate:y$1(this.popupTemplate)})}};e$1([y({type:["cluster"],readOnly:!0,json:{write:!0}})],d.prototype,"type",void 0),e$1([y({type:Number,cast:e=>"auto"===e?e:o(e),json:{write:!0}})],d.prototype,"clusterRadius",void 0),e$1([y({type:Number,cast:o,json:{write:!0}})],d.prototype,"clusterMinSize",void 0),e$1([y({type:Number,cast:o,json:{write:!0}})],d.prototype,"clusterMaxSize",void 0),e$1([y(c$3)],d.prototype,"popupEnabled",void 0),e$1([y({type:M,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],d.prototype,"popupTemplate",void 0),e$1([y({types:D})],d.prototype,"symbol",void 0),e$1([y({type:[E],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],d.prototype,"labelingInfo",void 0),e$1([y(p$4)],d.prototype,"labelsVisible",void 0),e$1([y({type:[c$2],json:{write:!0}})],d.prototype,"fields",void 0),d=m=e$1([i$3("esri.layers.support.FeatureReductionCluster")],d);var b=d;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var t$1;let p=t$1=class extends p$3{constructor(r){super(r),this.type="selection";}clone(){return new t$1}};e$1([y({type:["selection"]})],p.prototype,"type",void 0),p=t$1=e$1([i$3("esri.layers.support.FeatureReductionSelection")],p);var c$1=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const s={key:"type",base:p$3,typeMap:{selection:c$1}};function u(e,t){const r=(t=t.layerDefinition||t).featureReduction;if(r)switch(r.type){case"selection":return c$1.fromJSON(r);case"cluster":return b.fromJSON(r)}return null}function c(t,r,o,n){const s=i(t,{},n);s&&o$1(o,s,r);}function i(e,r,o){return e?"selection"!==e.type?(o.messages&&o.messages.push(new s$1("featureReduction:unsupported",`FeatureReduction of type '${e.declaredClass}' are not supported in scenes.`,{featureReduction:e,context:o})),null):e.write(r,o):null}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const n=/\[([^\[\]]+)\]/gi;function r(r,i,o){return r?r.map((r=>{const s=new E;if(s.read(r,o),s.labelExpression){const e=i.fields||i.layerDefinition&&i.layerDefinition.fields||this.fields;s.labelExpression=s.labelExpression.replace(n,((n,r)=>`[${t(r,e)}]`));}return s})):null}function t(e,n){if(!n)return e;const r=e.toLowerCase();for(let t=0;t<n.length;t++){const e=n[t].name;if(e.toLowerCase()===r)return e}return e}

export { c$1 as a, b, c, p$3 as p, r, s, u };
