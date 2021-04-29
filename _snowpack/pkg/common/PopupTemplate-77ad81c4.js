import { e as e$2, y, i as i$f, a as a$8, aL as o$1, r as r$3, N, K as L$1, O as S$1, H as m$1, I as u$1, aM as t$2, o as o$2, u as u$2, a1 as e$3, z as r$4, L as L$2, n as n$4, v as c$a, aN as k, S as S$2 } from './Identifiable-c8406192.js';
import { y as y$1 } from './config-b3bf08ce.js';
import { g, w } from './fieldUtils-a9f71c96.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let s$4=class extends a$8{constructor(r){super(r),this.type=null;}};e$2([y({type:["attachments","custom","fields","media","text"],readOnly:!0,json:{read:!1,write:!0}})],s$4.prototype,"type",void 0),s$4=e$2([i$f("esri.popup.content.Content")],s$4);var p$h=s$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var s$3;let i$e=s$3=class extends p$h{constructor(t){super(t),this.description=null,this.displayType=null,this.title=null,this.type="attachments";}clone(){return new s$3({description:this.description,displayType:this.displayType,title:this.title})}};e$2([y({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],i$e.prototype,"description",void 0),e$2([y({type:["preview","list"],json:{write:!0}})],i$e.prototype,"displayType",void 0),e$2([y({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],i$e.prototype,"title",void 0),e$2([y({type:["attachments"],readOnly:!0,json:{read:!1,write:!0}})],i$e.prototype,"type",void 0),i$e=s$3=e$2([i$f("esri.popup.content.AttachmentsContent")],i$e);var p$g=i$e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var p$f;let i$d=p$f=class extends p$h{constructor(r){super(r),this.creator=null,this.destroyer=null,this.outFields=null,this.type="custom";}clone(){return new p$f({creator:this.creator,destroyer:this.destroyer,outFields:Array.isArray(this.outFields)?y$1(this.outFields):null})}};e$2([y()],i$d.prototype,"creator",void 0),e$2([y()],i$d.prototype,"destroyer",void 0),e$2([y()],i$d.prototype,"outFields",void 0),e$2([y({type:["custom"],readOnly:!0})],i$d.prototype,"type",void 0),i$d=p$f=e$2([i$f("esri.popup.content.CustomContent")],i$d);var c$9=i$d;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const a$7=o$1()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"});a$7.toJSON.bind(a$7);a$7.fromJSON.bind(a$7);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var d$1;let l$3=d$1=class extends a$8{constructor(r){super(r),this.dateFormat=null,this.digitSeparator=!1,this.places=null;}clone(){return new d$1({dateFormat:this.dateFormat,digitSeparator:this.digitSeparator,places:this.places})}format(r){return this.dateFormat?L$1(r,S$1(this.dateFormat)):m$1(r,u$1(this))}};e$2([r$3(a$7)],l$3.prototype,"dateFormat",void 0),e$2([y({type:Boolean,json:{write:!0}})],l$3.prototype,"digitSeparator",void 0),e$2([y({type:N,json:{write:!0}})],l$3.prototype,"places",void 0),l$3=d$1=e$2([i$f("esri.popup.support.FieldInfoFormat")],l$3);var n$3=l$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var a$6;let n$2=a$6=class extends a$8{constructor(t){super(t),this.fieldName=null,this.format=null,this.isEditable=!1,this.label=null,this.stringFieldOption="text-box",this.statisticType=null,this.tooltip=null,this.visible=!0;}clone(){return new a$6({fieldName:this.fieldName,format:this.format?y$1(this.format):null,isEditable:this.isEditable,label:this.label,stringFieldOption:this.stringFieldOption,statisticType:this.statisticType,tooltip:this.tooltip,visible:this.visible})}};e$2([y({type:String,json:{write:!0}})],n$2.prototype,"fieldName",void 0),e$2([y({type:n$3,json:{write:!0}})],n$2.prototype,"format",void 0),e$2([y({type:Boolean,json:{write:!0,default:!1}})],n$2.prototype,"isEditable",void 0),e$2([y({type:String,json:{write:!0}})],n$2.prototype,"label",void 0),e$2([r$3(new t$2({richtext:"rich-text",textarea:"text-area",textbox:"text-box"}),{default:"text-box"})],n$2.prototype,"stringFieldOption",void 0),e$2([y({type:["count","sum","min","max","avg","stddev","var"],json:{write:!0}})],n$2.prototype,"statisticType",void 0),e$2([y({type:String,json:{write:!0}})],n$2.prototype,"tooltip",void 0),e$2([y({type:Boolean,json:{write:!0}})],n$2.prototype,"visible",void 0),n$2=a$6=e$2([i$f("esri.popup.FieldInfo")],n$2);var c$8=n$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var n$1;let l$2=n$1=class extends p$h{constructor(o){super(o),this.description=null,this.fieldInfos=null,this.title=null,this.type="fields";}writeFieldInfos(o,r){r.fieldInfos=o&&o.map((o=>o.toJSON()));}clone(){return new n$1({description:this.description,fieldInfos:Array.isArray(this.fieldInfos)?y$1(this.fieldInfos):null,title:this.title})}};e$2([y({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],l$2.prototype,"description",void 0),e$2([y({type:[c$8]})],l$2.prototype,"fieldInfos",void 0),e$2([o$2("fieldInfos")],l$2.prototype,"writeFieldInfos",null),e$2([y({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],l$2.prototype,"title",void 0),e$2([y({type:["fields"],readOnly:!0,json:{read:!1,write:!0}})],l$2.prototype,"type",void 0),l$2=n$1=e$2([i$f("esri.popup.content.FieldsContent")],l$2);var c$7=l$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let p$e=class extends a$8{constructor(t){super(t),this.altText=null,this.caption="",this.title="",this.type=null;}};e$2([y({type:String,json:{write:!0}})],p$e.prototype,"altText",void 0),e$2([y({type:String,json:{write:!0}})],p$e.prototype,"caption",void 0),e$2([y({type:String,json:{write:!0}})],p$e.prototype,"title",void 0),e$2([y({type:["image","bar-chart","column-chart","line-chart","pie-chart"],readOnly:!0,json:{read:!1,write:!0}})],p$e.prototype,"type",void 0),p$e=e$2([i$f("esri.popup.content.mixins.MediaInfo")],p$e);var s$2=p$e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function o(o,t){const e=t?{...t,source:o}:o;return y({aliasOf:e})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var p$d;let i$c=p$d=class extends u$2{constructor(o){super(o),this.tooltip=null,this.value=null,this.x=null,this.y=null;}clone(){return new p$d({tooltip:this.tooltip,value:this.value})}};e$2([y()],i$c.prototype,"tooltip",void 0),e$2([y()],i$c.prototype,"value",void 0),e$2([o("value")],i$c.prototype,"x",void 0),e$2([o("tooltip")],i$c.prototype,"y",void 0),i$c=p$d=e$2([i$f("esri.popup.content.support.ChartMediaInfoValueSeries")],i$c);var c$6=i$c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var p$c;let l$1=p$c=class extends a$8{constructor(o){super(o),this.fields=[],this.normalizeField=null,this.series=[],this.tooltipField=null;}clone(){return new p$c({fields:y$1(this.fields),normalizeField:this.normalizeField,tooltipField:this.tooltipField})}};e$2([y({type:[String],json:{write:!0}})],l$1.prototype,"fields",void 0),e$2([y({type:String,json:{write:!0}})],l$1.prototype,"normalizeField",void 0),e$2([y({type:[c$6],json:{read:!1}})],l$1.prototype,"series",void 0),e$2([y({type:String,json:{write:!0}})],l$1.prototype,"tooltipField",void 0),l$1=p$c=e$2([i$f("esri.popup.content.support.ChartMediaInfoValue")],l$1);var n=l$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let p$b=class extends s$2{constructor(r){super(r),this.type=null,this.value=null;}};e$2([y({type:["bar-chart","column-chart","line-chart","pie-chart"],readOnly:!0,json:{read:!1,write:!0}})],p$b.prototype,"type",void 0),e$2([y({type:n,json:{write:!0}})],p$b.prototype,"value",void 0),p$b=e$2([i$f("esri.popup.content.mixins.ChartMediaInfo")],p$b);var i$b=p$b;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const c$5=o$1()({barchart:"bar-chart",columnchart:"column-chart",linechart:"line-chart",piechart:"pie-chart"});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var p$a;let a$5=p$a=class extends i$b{constructor(r){super(r),this.type="bar-chart";}clone(){return new p$a({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};e$2([y({type:["bar-chart"],readOnly:!0,json:{type:["barchart"],read:!1,write:c$5.write}})],a$5.prototype,"type",void 0),a$5=p$a=e$2([i$f("esri.popup.content.BarChartMediaInfo")],a$5);var i$a=a$5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var p$9;let i$9=p$9=class extends i$b{constructor(r){super(r),this.type="column-chart";}clone(){return new p$9({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};e$2([y({type:["column-chart"],readOnly:!0,json:{type:["columnchart"],read:!1,write:c$5.write}})],i$9.prototype,"type",void 0),i$9=p$9=e$2([i$f("esri.popup.content.ColumnChartMediaInfo")],i$9);var c$4=i$9;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var t$1;let p$8=t$1=class extends a$8{constructor(r){super(r),this.linkURL=null,this.sourceURL=null;}clone(){return new t$1({linkURL:this.linkURL,sourceURL:this.sourceURL})}};e$2([y({type:String,json:{write:!0}})],p$8.prototype,"linkURL",void 0),e$2([y({type:String,json:{write:!0}})],p$8.prototype,"sourceURL",void 0),p$8=t$1=e$2([i$f("esri.popup.content.support.ImageMediaInfoValue")],p$8);var i$8=p$8;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var p$7;let i$7=p$7=class extends s$2{constructor(e){super(e),this.refreshInterval=null,this.type="image",this.value=null;}clone(){return new p$7({altText:this.altText,title:this.title,caption:this.caption,refreshInterval:this.refreshInterval,value:this.value?this.value.clone():null})}};e$2([y({type:Number,json:{write:!0}})],i$7.prototype,"refreshInterval",void 0),e$2([y({type:["image"],readOnly:!0,json:{read:!1,write:!0}})],i$7.prototype,"type",void 0),e$2([y({type:i$8,json:{write:!0}})],i$7.prototype,"value",void 0),i$7=p$7=e$2([i$f("esri.popup.content.ImageMediaInfo")],i$7);var a$4=i$7;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var i$6;let p$6=i$6=class extends i$b{constructor(r){super(r),this.type="line-chart";}clone(){return new i$6({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};e$2([y({type:["line-chart"],readOnly:!0,json:{type:["linechart"],read:!1,write:c$5.write}})],p$6.prototype,"type",void 0),p$6=i$6=e$2([i$f("esri.popup.content.LineChartMediaInfo")],p$6);var a$3=p$6;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var p$5;let i$5=p$5=class extends i$b{constructor(r){super(r),this.type="pie-chart";}clone(){return new p$5({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};e$2([y({type:["pie-chart"],readOnly:!0,json:{type:["piechart"],read:!1,write:c$5.write}})],i$5.prototype,"type",void 0),i$5=p$5=e$2([i$f("esri.popup.content.PieChartMediaInfo")],i$5);var a$2=i$5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const m={base:s$2,key:"type",defaultKeyValue:"image",typeMap:{"bar-chart":i$a,"column-chart":c$4,"line-chart":a$3,"pie-chart":a$2,image:a$4}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var l;let u=l=class extends p$h{constructor(o){super(o),this.activeMediaInfoIndex=null,this.description=null,this.mediaInfos=null,this.title=null,this.type="media";}readMediaInfos(o){return o&&o.map((o=>"image"===o.type?a$4.fromJSON(o):"barchart"===o.type?i$a.fromJSON(o):"columnchart"===o.type?c$4.fromJSON(o):"linechart"===o.type?a$3.fromJSON(o):"piechart"===o.type?a$2.fromJSON(o):void 0)).filter(Boolean)}writeMediaInfos(o,e){e.mediaInfos=o&&o.map((o=>o.toJSON()));}clone(){return new l({activeMediaInfoIndex:this.activeMediaInfoIndex,description:this.description,mediaInfos:this.mediaInfos?y$1(this.mediaInfos):null,title:this.title})}};e$2([y()],u.prototype,"activeMediaInfoIndex",void 0),e$2([y({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],u.prototype,"description",void 0),e$2([y({types:[m]})],u.prototype,"mediaInfos",void 0),e$2([e$3("mediaInfos")],u.prototype,"readMediaInfos",null),e$2([o$2("mediaInfos")],u.prototype,"writeMediaInfos",null),e$2([y({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],u.prototype,"title",void 0),e$2([y({type:["media"],readOnly:!0,json:{read:!1,write:!0}})],u.prototype,"type",void 0),u=l=e$2([i$f("esri.popup.content.MediaContent")],u);var I=u;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var s$1;let p$4=s$1=class extends p$h{constructor(t){super(t),this.text=null,this.type="text";}clone(){return new s$1({text:this.text})}};e$2([y({type:String,json:{write:!0}})],p$4.prototype,"text",void 0),e$2([y({type:["text"],readOnly:!0,json:{read:!1,write:!0}})],p$4.prototype,"type",void 0),p$4=s$1=e$2([i$f("esri.popup.content.TextContent")],p$4);var c$3=p$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const r$2={base:null,key:"type",typeMap:{attachment:p$g,media:I,text:c$3,field:c$7}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var s;let p$3=s=class extends a$8{constructor(r){super(r),this.name=null,this.title=null,this.expression=null,this.returnType=null;}clone(){return new s({name:this.name,title:this.title,expression:this.expression,returnType:this.returnType})}};e$2([y({type:String,json:{write:!0}})],p$3.prototype,"name",void 0),e$2([y({type:String,json:{write:!0}})],p$3.prototype,"title",void 0),e$2([y({type:String,json:{write:!0}})],p$3.prototype,"expression",void 0),e$2([y({type:["string","number"],json:{write:!0}})],p$3.prototype,"returnType",void 0),p$3=s=e$2([i$f("esri.popup.ExpressionInfo")],p$3);var i$4=p$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var e$1;let p$2=e$1=class extends a$8{constructor(o){super(o),this.returnTopmostRaster=null,this.showNoDataRecords=null;}clone(){return new e$1({showNoDataRecords:this.showNoDataRecords,returnTopmostRaster:this.returnTopmostRaster})}};e$2([y({type:Boolean,json:{write:!0}})],p$2.prototype,"returnTopmostRaster",void 0),e$2([y({type:Boolean,json:{write:!0}})],p$2.prototype,"showNoDataRecords",void 0),p$2=e$1=e$2([i$f("esri.popup.LayerOptions")],p$2);var a$1=p$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var t;let p$1=t=class extends a$8{constructor(r){super(r),this.field=null,this.order=null;}clone(){return new t({field:this.field,order:this.order})}};e$2([y({type:String,json:{write:!0}})],p$1.prototype,"field",void 0),e$2([y({type:["asc","desc"],json:{write:!0}})],p$1.prototype,"order",void 0),p$1=t=e$2([i$f("esri.popup.support.RelatedRecordsInfoFieldOrder")],p$1);var i$3=p$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var i$2;let d=i$2=class extends a$8{constructor(r){super(r),this.showRelatedRecords=null,this.orderByFields=null;}clone(){return new i$2({showRelatedRecords:this.showRelatedRecords,orderByFields:this.orderByFields?y$1(this.orderByFields):null})}};e$2([y({type:Boolean,json:{write:!0}})],d.prototype,"showRelatedRecords",void 0),e$2([y({type:[i$3],json:{write:!0}})],d.prototype,"orderByFields",void 0),d=i$2=e$2([i$f("esri.popup.RelatedRecordsInfo")],d);var c$2=d;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var r$1;let p=r$1=class extends(r$4(u$2)){constructor(t){super(t),this.active=!1,this.className=null,this.disabled=!1,this.id=null,this.indicator=!1,this.title=null,this.type=null,this.visible=!0;}clone(){return new r$1({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible})}};e$2([y()],p.prototype,"active",void 0),e$2([y()],p.prototype,"className",void 0),e$2([y()],p.prototype,"disabled",void 0),e$2([y()],p.prototype,"id",void 0),e$2([y()],p.prototype,"indicator",void 0),e$2([y()],p.prototype,"title",void 0),e$2([y()],p.prototype,"type",void 0),e$2([y()],p.prototype,"visible",void 0),p=r$1=e$2([i$f("esri.support.actions.ActionBase")],p);var c$1=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var i$1;let e=i$1=class extends c$1{constructor(s){super(s),this.image=null,this.type="button";}clone(){return new i$1({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image})}};e$2([y()],e.prototype,"image",void 0),e=i$1=e$2([i$f("esri.support.Action.ActionButton")],e);var c=e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var r;let i=r=class extends c$1{constructor(s){super(s),this.image=null,this.type="toggle",this.value=!1;}clone(){return new r({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image,value:this.value})}};e$2([y()],i.prototype,"image",void 0),e$2([y()],i.prototype,"value",void 0),i=r=e$2([i$f("esri.support.Action.ActionToggle")],i);var a=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var O;const S=L$2.ofType({key:"type",defaultKeyValue:"button",base:c$1,typeMap:{button:c,toggle:a}}),T={base:p$h,key:"type",typeMap:{media:I,custom:c$9,text:c$3,attachments:p$g,fields:c$7}},b="esri.PopupTemplate",R=n$4.getLogger(b),L=["attachments","fields","media","text"];let J=O=class extends a$8{constructor(){super(...arguments),this.actions=null,this.content="",this.expressionInfos=null,this.fieldInfos=null,this.layerOptions=null,this.lastEditInfoEnabled=!0,this.outFields=null,this.overwriteActions=!1,this.returnGeometry=!1,this.title="",this.relatedRecordsInfo=null;}castContent(t){return Array.isArray(t)?t.map((t=>k(T,t))):"string"==typeof t||"function"==typeof t||t instanceof HTMLElement||S$2(t)?t:(R.error("content error","unsupported content value",{value:t}),null)}readContent(t,e){const{popupElements:o}=e;return Array.isArray(o)&&o.length>0?this._readPopupInfoElements(e):this._readPopupInfo(e)}writeContent(t,e,o,s){"string"!=typeof t?Array.isArray(t)&&(e.popupElements=t.filter((t=>-1!==L.indexOf(t.type))).map((t=>t&&t.toJSON(s))),e.popupElements.forEach((t=>{"attachments"===t.type?this._writeAttachmentContent(e):"media"===t.type?this._writeMediaContent(t,e):"text"===t.type&&this._writeTextContent(t,e);}))):e.description=t;}writeFieldInfos(t,e,o,s){const{content:r}=this,i=Array.isArray(r)?r:null;if(t){const o=i?i.filter((t=>"fields"===t.type)):[],r=o.length&&o.every((t=>{var e;return null==(e=t.fieldInfos)?void 0:e.length}));e.fieldInfos=t.filter(Boolean).map((t=>{const e=t.toJSON(s);return r&&(e.visible=!1),e}));}if(i)for(const n of i)"fields"===n.type&&this._writeFieldsContent(n,e);}writeLayerOptions(t,e,o,s){e[o]=!t||null===t.showNoDataRecords&&null===t.returnTopmostRaster?null:t.toJSON(s);}writeTitle(t,e){e.title=t||"";}clone(){const{actions:t}=this,o=t?y$1(t.toArray()):[];return new O({actions:o,content:Array.isArray(this.content)?y$1(this.content):this.content,expressionInfos:Array.isArray(this.expressionInfos)?y$1(this.expressionInfos):null,fieldInfos:Array.isArray(this.fieldInfos)?y$1(this.fieldInfos):null,layerOptions:this.layerOptions?y$1(this.layerOptions):null,lastEditInfoEnabled:this.lastEditInfoEnabled,outFields:Array.isArray(this.outFields)?y$1(this.outFields):null,overwriteActions:this.overwriteActions,returnGeometry:this.returnGeometry,title:this.title,relatedRecordsInfo:this.relatedRecordsInfo?y$1(this.relatedRecordsInfo):null})}async collectRequiredFields(t,e){await this._collectExpressionInfoFields(t,e,this.expressionInfos),g(t,e,[...this.outFields||[],...this._getActionsFields(this.actions),...this._getTitleFields(this.title),...this._getContentFields(this.content)]);}async getRequiredFields(t){const e=new Set;return await this.collectRequiredFields(e,t),[...e].sort()}_writeFieldsContent(t,o){if(!Array.isArray(t.fieldInfos)||!t.fieldInfos.length)return;const s=y$1(t.fieldInfos);Array.isArray(o.fieldInfos)?s.forEach((t=>{const e=o.fieldInfos.find((e=>e.fieldName.toLowerCase()===t.fieldName.toLowerCase()));e?e.visible=!0:o.fieldInfos.push(t);})):o.fieldInfos=s;}_writeAttachmentContent(t){t.showAttachments||(t.showAttachments=!0);}_writeTextContent(t,e){!e.description&&t.text&&(e.description=t.text);}_writeMediaContent(t,o){if(!Array.isArray(t.mediaInfos)||!t.mediaInfos.length)return;const s=y$1(t.mediaInfos);Array.isArray(o.mediaInfos)?o.mediaInfos=[...o.mediaInfos,...s]:o.mediaInfos=s;}_readPopupInfoElements({description:t,mediaInfos:e,popupElements:o}){const s={description:!1,mediaInfos:!1};return o.map((o=>"media"===o.type?(o.mediaInfos||!e||s.mediaInfos||(o.mediaInfos=e,s.mediaInfos=!0),I.fromJSON(o)):"text"===o.type?(o.text||!t||s.description||(o.text=t,s.description=!0),c$3.fromJSON(o)):"attachments"===o.type?p$g.fromJSON(o):"fields"===o.type?c$7.fromJSON(o):void 0)).filter(Boolean)}_readPopupInfo({description:t,mediaInfos:e,showAttachments:o}){const s=[];return t?s.push(new c$3({text:t})):s.push(new c$7),Array.isArray(e)&&e.length&&s.push(I.fromJSON({mediaInfos:e})),o&&s.push(p$g.fromJSON({displayType:"list"})),s.length?s:t}_getContentElementFields(t){if(!t||"attachments"===t.type)return [];if("custom"===t.type)return t.outFields||[];if("fields"===t.type)return this._getFieldInfoFields(t.fieldInfos||this.fieldInfos);if("media"===t.type){return (t.mediaInfos||[]).reduce(((t,e)=>[...t,...this._getMediaInfoFields(e)]),[])}return "text"===t.type?this._extractFieldNames(t.text):void 0}_getMediaInfoFields(t){const{caption:e,title:o,value:s}=t,r=s||{},{fields:i=[],normalizeField:n,tooltipField:p,sourceURL:l,linkURL:a}=r,d=[...this._extractFieldNames(o),...this._extractFieldNames(e),...this._extractFieldNames(l),...this._extractFieldNames(a),...i];return n&&d.push(n),p&&d.push(p),d}_getContentFields(t){return "string"==typeof t?this._extractFieldNames(t):Array.isArray(t)?t.reduce(((t,e)=>[...t,...this._getContentElementFields(e)]),[]):[]}async _collectExpressionInfoFields(t,e,o){o&&await Promise.all(o.map((o=>w(t,e,o.expression))));}_getFieldInfoFields(t){return t?t.filter((t=>void 0===t.visible||!!t.visible)).map((t=>t.fieldName)).filter((t=>-1===t.indexOf("relationships/")&&-1===t.indexOf("expression/"))):[]}_getActionsFields(t){return t?t.toArray().reduce(((t,e)=>[...t,...this._getActionFields(e)]),[]):[]}_getActionFields(t){const{className:e,title:o,type:s}=t,r="button"===s||"toggle"===s?t.image:"";return [...this._extractFieldNames(o),...this._extractFieldNames(e),...this._extractFieldNames(r)]}_getTitleFields(t){return "string"==typeof t?this._extractFieldNames(t):[]}_extractFieldNames(t){if(!t||"string"!=typeof t)return [];const e=/{[^}]*}/g,o=t.match(e);if(!o)return [];const s=/\{(\w+):.+\}/,r=o.filter((t=>!(0===t.indexOf("{relationships/")||0===t.indexOf("{expression/")))).map((t=>t.replace(s,"{$1}")));return r?r.map((t=>t.slice(1,-1))):[]}};e$2([y({type:S})],J.prototype,"actions",void 0),e$2([y()],J.prototype,"content",void 0),e$2([c$a("content")],J.prototype,"castContent",null),e$2([e$3("content",["description","fieldInfos","popupElements","mediaInfos","showAttachments"])],J.prototype,"readContent",null),e$2([o$2("content",{popupElements:{type:L$2.ofType(r$2)},showAttachments:{type:Boolean},mediaInfos:{type:L$2.ofType(m)},description:{type:String}})],J.prototype,"writeContent",null),e$2([y({type:[i$4],json:{write:!0}})],J.prototype,"expressionInfos",void 0),e$2([y({type:[c$8]})],J.prototype,"fieldInfos",void 0),e$2([o$2("fieldInfos")],J.prototype,"writeFieldInfos",null),e$2([y({type:a$1})],J.prototype,"layerOptions",void 0),e$2([o$2("layerOptions")],J.prototype,"writeLayerOptions",null),e$2([y({type:Boolean,json:{read:{source:"showLastEditInfo"},write:{target:"showLastEditInfo"},default:!0}})],J.prototype,"lastEditInfoEnabled",void 0),e$2([y()],J.prototype,"outFields",void 0),e$2([y()],J.prototype,"overwriteActions",void 0),e$2([y()],J.prototype,"returnGeometry",void 0),e$2([y({json:{type:String}})],J.prototype,"title",void 0),e$2([o$2("title")],J.prototype,"writeTitle",null),e$2([y({type:c$2,json:{write:!0}})],J.prototype,"relatedRecordsInfo",void 0),J=O=e$2([i$f(b)],J);var M=J;

export { M, c$6 as a, c$3 as b, c$8 as c, c as d, c$1 as e, a as f, i$3 as g, c$7 as h, i$4 as i, n$3 as n, o, p$g as p };
