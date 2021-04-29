import { e, y, i as i$1, a as a$1, a1 as e$1, o } from './Identifiable-c8406192.js';
import { y as y$1 } from './config-b3bf08ce.js';
import { r, i as i$2, d as d$1 } from './TimeExtent-155cb8a4.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var p$2;let u=p$2=class extends a$1{constructor(r){super(r),this.value=0,this.unit="milliseconds";}toMilliseconds(){return this.value*i$2[this.unit]}clone(){return new p$2({value:this.value,unit:this.unit})}};e([y({type:Number,json:{write:!0},nonNullable:!0})],u.prototype,"value",void 0),e([y({type:r.apiValues,json:{type:r.jsonValues,read:r.read,write:r.write},nonNullable:!0})],u.prototype,"unit",void 0),u=p$2=e([i$1("esri.TimeInterval")],u);var l=u;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var i;let p$1=i=class extends a$1{constructor(e){super(e),this.respectsDaylightSaving=!1,this.timezone=null;}readRespectsDaylightSaving(e,r){return void 0!==r.respectsDaylightSaving?r.respectsDaylightSaving:void 0!==r.respectDaylightSaving&&r.respectDaylightSaving}clone(){const{respectsDaylightSaving:e,timezone:r}=this;return new i({respectsDaylightSaving:e,timezone:r})}};e([y({type:Boolean,json:{write:!0}})],p$1.prototype,"respectsDaylightSaving",void 0),e([e$1("respectsDaylightSaving",["respectsDaylightSaving","respectDaylightSaving"])],p$1.prototype,"readRespectsDaylightSaving",null),e([y({type:String,json:{read:{source:"timeZone"},write:{target:"timeZone"}}})],p$1.prototype,"timezone",void 0),p$1=i=e([i$1("esri.layers.support.TimeReference")],p$1);var a=p$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var p;let d=p=class extends a$1{constructor(e){super(e),this.cumulative=!1,this.endField=null,this.fullTimeExtent=null,this.hasLiveData=!1,this.interval=null,this.startField=null,this.timeReference=null,this.trackIdField=null,this.useTime=!0;}readFullTimeExtent(e,t){if(!t.timeExtent||!Array.isArray(t.timeExtent)||2!==t.timeExtent.length)return null;const r=new Date(t.timeExtent[0]),i=new Date(t.timeExtent[1]);return new d$1({start:r,end:i})}writeFullTimeExtent(e,t){e&&e.start&&e.end?t.timeExtent=[e.start.getTime(),e.end.getTime()]:t.timeExtent=null;}readInterval(e,t){return t.timeInterval&&t.timeIntervalUnits?new l({value:t.timeInterval,unit:r.fromJSON(t.timeIntervalUnits)}):t.defaultTimeInterval&&t.defaultTimeIntervalUnits?new l({value:t.defaultTimeInterval,unit:r.fromJSON(t.defaultTimeIntervalUnits)}):null}writeInterval(e,t){if(e){const r=e.toJSON();t.timeInterval=r.value,t.timeIntervalUnits=r.unit;}else t.timeInterval=null,t.timeIntervalUnits=null;}clone(){const{cumulative:e,endField:r,hasLiveData:i,interval:l,startField:o,timeReference:n,fullTimeExtent:a,trackIdField:s,useTime:m}=this;return new p({cumulative:e,endField:r,hasLiveData:i,interval:l,startField:o,timeReference:y$1(n),fullTimeExtent:y$1(a),trackIdField:s,useTime:m})}};e([y({type:Boolean,json:{read:{source:"exportOptions.timeDataCumulative"},write:{target:"exportOptions.timeDataCumulative"}}})],d.prototype,"cumulative",void 0),e([y({type:String,json:{read:{source:"endTimeField"},write:{target:"endTimeField",allowNull:!0}}})],d.prototype,"endField",void 0),e([y({type:d$1,json:{write:{enabled:!0,allowNull:!0}}})],d.prototype,"fullTimeExtent",void 0),e([e$1("fullTimeExtent",["timeExtent"])],d.prototype,"readFullTimeExtent",null),e([o("fullTimeExtent")],d.prototype,"writeFullTimeExtent",null),e([y({type:Boolean,json:{write:!0}})],d.prototype,"hasLiveData",void 0),e([y({type:l,json:{write:{enabled:!0,allowNull:!0}}})],d.prototype,"interval",void 0),e([e$1("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],d.prototype,"readInterval",null),e([o("interval")],d.prototype,"writeInterval",null),e([y({type:String,json:{read:{source:"startTimeField"},write:{target:"startTimeField",allowNull:!0}}})],d.prototype,"startField",void 0),e([y({type:a,json:{write:{enabled:!0,allowNull:!0}}})],d.prototype,"timeReference",void 0),e([y({type:String,json:{write:{enabled:!0,allowNull:!0}}})],d.prototype,"trackIdField",void 0),e([y({type:Boolean,json:{read:{source:"exportOptions.useTime"},write:{target:"exportOptions.useTime"}}})],d.prototype,"useTime",void 0),d=p=e([i$1("esri.layers.support.TimeInfo")],d);var c=d;

export { c, l };
