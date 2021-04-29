import { aL as o, e, y, a1 as e$1, o as o$1, i as i$1, a as a$1 } from './Identifiable-c8406192.js';
import './config-b3bf08ce.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function t(e){return e}const s={milliseconds:{getter:"getMilliseconds",setter:"setMilliseconds",multiplier:1},seconds:{getter:"getSeconds",setter:"setSeconds",multiplier:1},minutes:{getter:"getMinutes",setter:"setMinutes",multiplier:1},hours:{getter:"getHours",setter:"setHours",multiplier:1},days:{getter:"getDate",setter:"setDate",multiplier:1},weeks:{getter:"getDate",setter:"setDate",multiplier:7},months:{getter:"getMonth",setter:"setMonth",multiplier:1},years:{getter:"getFullYear",setter:"setFullYear",multiplier:1},decades:{getter:"getFullYear",setter:"setFullYear",multiplier:10},centuries:{getter:"getFullYear",setter:"setFullYear",multiplier:100}},r=o()({esriTimeUnitsMilliseconds:"milliseconds",esriTimeUnitsSeconds:"seconds",esriTimeUnitsMinutes:"minutes",esriTimeUnitsHours:"hours",esriTimeUnitsDays:"days",esriTimeUnitsWeeks:"weeks",esriTimeUnitsMonths:"months",esriTimeUnitsYears:"years",esriTimeUnitsDecades:"decades",esriTimeUnitsCenturies:"centuries",esriTimeUnitsUnknown:null});function n(e,t,r){const n=new Date(e.getTime());if(t&&r){const e=s[r],{getter:i,setter:l,multiplier:u}=e;n[l](n[i]()+t*u);}return n}const i={milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5,days:864e5,weeks:6048e5,months:26784e5,years:31536e6,decades:31536e7,centuries:31536e8};function l(e,t){switch(t){case"milliseconds":return new Date(e.getTime());case"seconds":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds());case"minutes":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes());case"hours":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours());case"days":return new Date(e.getFullYear(),e.getMonth(),e.getDate());case"weeks":return new Date(e.getFullYear(),e.getMonth(),e.getDate()-e.getDay());case"months":return new Date(e.getFullYear(),e.getMonth(),1);case"years":return new Date(e.getFullYear(),0,1);case"decades":return new Date(e.getFullYear()-e.getFullYear()%10,0,1);case"centuries":return new Date(e.getFullYear()-e.getFullYear()%100,0,1);default:return null}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var a;let u=a=class extends a$1{constructor(t){super(t),this.end=null,this.start=null;}static get allTime(){return p}static get empty(){return m}readEnd(t,e){return null!=e.end?new Date(e.end):null}writeEnd(t,e){e.end=t?t.getTime():null;}get isAllTime(){return this.equals(a.allTime)}get isEmpty(){return this.equals(a.empty)}readStart(t,e){return null!=e.start?new Date(e.start):null}writeStart(t,e){e.start=t?t.getTime():null;}clone(){return new a({end:this.end,start:this.start})}expandTo(t){if(this.isEmpty||this.isAllTime)return this.clone();const e=this.start?l(this.start,t):null,r=this.end?n(l(this.end,t),1,t):null;return new a({start:e,end:r})}intersection(t){var e,r,s,n,i,l,o,u;if(!t)return this.clone();if(this.isEmpty||t.isEmpty)return a.empty;if(this.isAllTime)return t.clone();if(t.isAllTime)return this.clone();const p=null!=(e=null==(r=this.start)?void 0:r.getTime())?e:-1/0,m=null!=(s=null==(n=this.end)?void 0:n.getTime())?s:1/0,d=null!=(i=null==(l=t.start)?void 0:l.getTime())?i:-1/0,c=null!=(o=null==(u=t.end)?void 0:u.getTime())?o:1/0;let h,y;if(d>=p&&d<=m?h=d:p>=d&&p<=c&&(h=p),m>=d&&m<=c?y=m:c>=p&&c<=m&&(y=c),!isNaN(h)&&!isNaN(y)){const t=new a;return t.start=h===-1/0?null:new Date(h),t.end=y===1/0?null:new Date(y),t}return a.empty}offset(t,e){if(this.isEmpty||this.isAllTime)return this.clone();const r=new a,{start:s,end:n$1}=this;return s&&(r.start=n(s,t,e)),n$1&&(r.end=n(n$1,t,e)),r}equals(t){if(!t)return !1;const e=this.start?this.start.getTime():this.start,r=this.end?this.end.getTime():this.end,s=t.start?t.start.getTime():t.start,n=t.end?t.end.getTime():t.end;return e===s&&r===n}union(t){if(!t||t.isEmpty)return this.clone();if(this.isEmpty)return t.clone();if(this.isAllTime||t.isAllTime)return p.clone();const e=this.start&&t.start?new Date(Math.min(this.start.getTime(),t.start.getTime())):null,r=this.end&&t.end?new Date(Math.max(this.end.getTime(),t.end.getTime())):null;return new a({start:e,end:r})}};e([y({type:Date,json:{write:{allowNull:!0}}})],u.prototype,"end",void 0),e([e$1("end")],u.prototype,"readEnd",null),e([o$1("end")],u.prototype,"writeEnd",null),e([y({readOnly:!0,json:{read:!1}})],u.prototype,"isAllTime",null),e([y({readOnly:!0,json:{read:!1}})],u.prototype,"isEmpty",null),e([y({type:Date,json:{write:{allowNull:!0}}})],u.prototype,"start",void 0),e([e$1("start")],u.prototype,"readStart",null),e([o$1("start")],u.prototype,"writeStart",null),u=a=e([i$1("esri.TimeExtent")],u);const p=new u,m=new u({start:void 0,end:void 0});var d=u;

export { d, i, r, t };