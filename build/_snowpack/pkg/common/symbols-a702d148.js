import { aM as t$8, e as e$4, y as y$7, j as o$2, a1 as e$5, i as i$9, a as a$c, o as o$3, r as r$3, aO as c$m, N, f as r$4, g as n$g, P as r$5, v as c$n, aL as o$4, aP as G, aQ as Q, aR as z, u as u$b, n as n$h, aS as X, aT as w$2, L as L$2, c as n$i, aU as t$9, aV as P$1, aW as t$a, aX as D$1, aY as V, s as s$3, h as h$9, aZ as u$c, aN as k$2 } from './Identifiable-c8406192.js';
import { y as y$8 } from './config-b3bf08ce.js';
import { w as w$1 } from './fieldUtils-a9f71c96.js';
import { c as c$o, i as i$a, m as m$b, p as p$k } from './persistableUrlUtils-b4be11a9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const p$j=new t$8({esriSMS:"simple-marker",esriPMS:"picture-marker",esriSLS:"simple-line",esriSFS:"simple-fill",esriPFS:"picture-fill",esriTS:"text",esriSHD:"shield-label-symbol",PointSymbol3D:"point-3d",LineSymbol3D:"line-3d",PolygonSymbol3D:"polygon-3d",WebStyleSymbol:"web-style",MeshSymbol3D:"mesh-3d",LabelSymbol3D:"label-3d",CIMSymbolReference:"cim"});let c$l=0,m$a=class extends a$c{constructor(r){super(r),this.id="sym"+c$l++,this.type=null;}set color(r){this._set("color",r);}readColor(r){return r&&null!=r[0]?[r[0],r[1],r[2],r[3]/255]:r}async collectRequiredFields(r,o){}hash(){return JSON.stringify(this.toJSON())}clone(){}};e$4([y$7({type:p$j.apiValues,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:p$j.write}}})],m$a.prototype,"type",void 0),e$4([y$7({type:o$2,value:new o$2([0,0,0,1]),json:{write:{allowNull:!0}}})],m$a.prototype,"color",null),e$4([e$5("color")],m$a.prototype,"readColor",null),m$a=e$4([i$9("esri.symbols.Symbol")],m$a);var n$f=m$a;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var n$e;let l$h=n$e=class extends n$f{constructor(r){super(r),this.data=null,this.type="cim";}readData(r,o){return o}writeData(r,o){if(r)for(const t in r)o[t]=r[t];}async collectRequiredFields(r,o){if("CIMSymbolReference"===this.data.type){const t=this.data.primitiveOverrides;if(t){const e=t.map((t=>{const e=t.valueExpressionInfo;return w$1(r,o,e.expression)}));await Promise.all(e);}}}clone(){return new n$e({data:y$8(this.data)})}hash(){return c$m(JSON.stringify(this.data)).toString()}};e$4([y$7({json:{write:!1}})],l$h.prototype,"color",void 0),e$4([y$7({json:{write:!0}})],l$h.prototype,"data",void 0),e$4([e$5("data",["symbol"])],l$h.prototype,"readData",null),e$4([o$3("data")],l$h.prototype,"writeData",null),e$4([r$3({CIMSymbolReference:"cim"},{readOnly:!0})],l$h.prototype,"type",void 0),l$h=n$e=e$4([i$9("esri.symbols.CIMSymbol")],l$h);var d$a=l$h;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let p$i=class extends a$c{constructor(r){super(r),this.enabled=!0,this.type=null;}writeEnabled(r,e,o){r||(e[o]=r);}};e$4([y$7({type:Boolean,json:{read:{source:"enable"},write:{target:"enable"}}})],p$i.prototype,"enabled",void 0),e$4([o$3("enabled")],p$i.prototype,"writeEnabled",null),e$4([y$7({type:["icon","object","line","path","fill","water","extrude","text"],readOnly:!0})],p$i.prototype,"type",void 0),p$i=e$4([i$9("esri.symbols.Symbol3DLayer")],p$i);var c$k=p$i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const n$d=/^-?(\d+(\.\d+)?)\s*((px)|(pt))?$/i,t$7="screenUtils.toPt: input not recognized!",r$2=96;function u$a(n){return n?n/72*r$2:0}function e$3(n){return n?72*n/r$2:0}function o$1(r){if("string"==typeof r){if(n$d.test(r)){const t=r.match(n$d),u=Number(t[1]),o=t[3]&&t[3].toLowerCase(),c="-"===r.charAt(0),i="px"===o?e$3(u):u;return c?-i:i}return console.warn(t$7),null}return r}function c$j(n=0,t=0){return {x:n,y:t}}function i$8(n=0,t=0){return [n,t]}function p$h(n){return n}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function s$2(r,t){const n=null!=t.transparency?r$4(t.transparency):1,s=t.color;return s&&Array.isArray(s)?new o$2([s[0]||0,s[1]||0,s[2]||0,n]):null}function a$b(r,e){e.color=r.toJSON().slice(0,3);const t=n$g(r.a);0!==t&&(e.transparency=t);}const c$i={type:o$2,json:{type:[N],default:null,read:{source:["color","transparency"],reader:s$2},write:{target:{color:{type:[N]},transparency:{type:N}},writer:a$b}}},p$g={type:Number,cast:o$1,json:{write:!0}},l$g={type:[Number],cast:r=>null!=r?r:Array.isArray(r)?r.map(o$1):null,json:{read:!1,write:!1}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let l$f=class extends a$c{constructor(o){super(o),this.color=new o$2([0,0,0,1]),this.extensionLength=0,this.size=e$3(1);}clone(){}cloneProperties(){return {color:y$8(this.color),size:this.size,extensionLength:this.extensionLength}}};e$4([y$7({type:["solid","sketch"],readOnly:!0,json:{read:!0,write:{ignoreOrigin:!0}}})],l$f.prototype,"type",void 0),e$4([y$7(c$i)],l$f.prototype,"color",void 0),e$4([y$7({...p$g,json:{write:{overridePolicy:o=>({enabled:!!o})}}})],l$f.prototype,"extensionLength",void 0),e$4([y$7(p$g)],l$f.prototype,"size",void 0),l$f=e$4([i$9("esri.symbols.edges.Edges3D")],l$f);var m$9=l$f;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var t$6;let p$f=t$6=class extends m$9{constructor(r){super(r),this.type="sketch";}clone(){return new t$6(this.cloneProperties())}};e$4([r$3({sketch:"sketch"},{readOnly:!0})],p$f.prototype,"type",void 0),p$f=t$6=e$4([i$9("esri.symbols.edges.SketchEdges3D")],p$f);var c$h=p$f;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var t$5;let p$e=t$5=class extends m$9{constructor(r){super(r),this.type="solid";}clone(){return new t$5(this.cloneProperties())}};e$4([r$3({solid:"solid"},{readOnly:!0})],p$e.prototype,"type",void 0),p$e=t$5=e$4([i$9("esri.symbols.support.SolidEdges3D")],p$e);var c$g=p$e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const t$4={types:{key:"type",base:m$9,typeMap:{solid:c$g,sketch:c$h}},json:{write:!0}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var c$f;let i$7=c$f=class extends a$c{constructor(){super(...arguments),this.color=null;}clone(){return new c$f({color:r$5(this.color)?this.color.clone():null})}};e$4([y$7(c$i)],i$7.prototype,"color",void 0),i$7=c$f=e$4([i$9("esri.symbols.support.Symbol3DMaterial")],i$7);var l$e=i$7;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var l$d;let m$8=l$d=class extends c$k{constructor(e){super(e),this.type="extrude",this.size=1,this.material=null,this.castShadows=!0,this.edges=null;}clone(){return new l$d({edges:this.edges&&this.edges.clone(),enabled:this.enabled,material:r$5(this.material)?this.material.clone():null,castShadows:this.castShadows,size:this.size})}};e$4([r$3({Extrude:"extrude"},{readOnly:!0})],m$8.prototype,"type",void 0),e$4([y$7({type:Number,json:{write:{enabled:!0,isRequired:!0}},nonNullable:!0})],m$8.prototype,"size",void 0),e$4([y$7({type:l$e,json:{write:!0}})],m$8.prototype,"material",void 0),e$4([y$7({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],m$8.prototype,"castShadows",void 0),e$4([y$7(t$4)],m$8.prototype,"edges",void 0),m$8=l$d=e$4([i$9("esri.symbols.ExtrudeSymbol3DLayer")],m$8);var c$e=m$8;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let i$6=class extends n$f{constructor(r){super(r),this.type="simple-line",this.width=.75;}hash(){return `${this.type}.${this.width}`}};e$4([r$3({esriSLS:"simple-line"},{readOnly:!0})],i$6.prototype,"type",void 0),e$4([y$7({type:Number,cast:o$1,json:{write:!0}})],i$6.prototype,"width",void 0),i$6=e$4([i$9("esri.symbols.LineSymbol")],i$6);var c$d=i$6;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var a$a;let n$c=a$a=class extends a$c{constructor(r){super(r),this.placement="begin-end",this.type="line-marker",this.style="arrow";}writeStyle(r,o,e,t){"web-map"===(null==t?void 0:t.origin)?o[e]="arrow":o[e]=r;}set color(r){this._set("color",r);}readColor(r){return r&&null!=r[0]?[r[0],r[1],r[2],r[3]/255]:r}writeColor(r,o,e,t){"web-map"===(null==t?void 0:t.origin)||(o[e]=r);}clone(){return new a$a({color:y$8(this.color),placement:this.placement,style:this.style})}hash(){var r;return `${this.placement}.${null==(r=this.color)?void 0:r.hash()}.${this.style}`}};e$4([y$7({type:["begin","end","begin-end"],json:{write:!0}})],n$c.prototype,"placement",void 0),e$4([r$3({"line-marker":"line-marker"},{readOnly:!0}),y$7({json:{origins:{"web-map":{write:!1}}}})],n$c.prototype,"type",void 0),e$4([y$7({type:["arrow","circle","square","diamond","cross","x"]})],n$c.prototype,"style",void 0),e$4([o$3("style")],n$c.prototype,"writeStyle",null),e$4([y$7({type:o$2,value:null,json:{write:{allowNull:!0}}})],n$c.prototype,"color",null),e$4([e$5("color")],n$c.prototype,"readColor",null),e$4([o$3("color")],n$c.prototype,"writeColor",null),n$c=a$a=e$4([i$9("esri.symbols.LineSymbolMarker")],n$c);var m$7=n$c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var p$d;const h$8=new t$8({esriSLSSolid:"solid",esriSLSDash:"dash",esriSLSDot:"dot",esriSLSDashDot:"dash-dot",esriSLSDashDotDot:"long-dash-dot-dot",esriSLSNull:"none",esriSLSInsideFrame:"inside-frame",esriSLSShortDash:"short-dash",esriSLSShortDot:"short-dot",esriSLSShortDashDot:"short-dash-dot",esriSLSShortDashDotDot:"short-dash-dot-dot",esriSLSLongDash:"long-dash",esriSLSLongDashDot:"long-dash-dot"});let m$6=p$d=class extends c$d{constructor(...r){super(...r),this.type="simple-line",this.style="solid",this.cap="round",this.join="round",this.marker=null,this.miterLimit=2;}normalizeCtorArgs(r,o,e,t,s,i){if(r&&"string"!=typeof r)return r;const n={};return null!=r&&(n.style=r),null!=o&&(n.color=o),null!=e&&(n.width=o$1(e)),null!=t&&(n.cap=t),null!=s&&(n.join=s),null!=i&&(n.miterLimit=o$1(i)),n}clone(){var r;return new p$d({color:y$8(this.color),style:this.style,width:this.width,cap:this.cap,join:this.join,miterLimit:this.miterLimit,marker:null==(r=this.marker)?void 0:r.clone()})}hash(){var r,o;return `${super.hash()}.${null==(r=this.color)?void 0:r.hash()}.${this.style}.${this.cap}.${this.join}.${this.miterLimit}.${null==(o=this.marker)?void 0:o.hash()}`}};e$4([r$3({esriSLS:"simple-line"},{readOnly:!0})],m$6.prototype,"type",void 0),e$4([y$7({type:h$8.apiValues,json:{read:h$8.read,write:h$8.write}})],m$6.prototype,"style",void 0),e$4([y$7({type:["butt","round","square"],json:{write:{overridePolicy:(r,o,e)=>({enabled:"round"!==r&&(null==e||null==e.origin)})}}})],m$6.prototype,"cap",void 0),e$4([y$7({type:["miter","round","bevel"],json:{write:{overridePolicy:(r,o,e)=>({enabled:"round"!==r&&(null==e||null==e.origin)})}}})],m$6.prototype,"join",void 0),e$4([y$7({types:{key:"type",base:null,defaultKeyValue:"line-marker",typeMap:{"line-marker":m$7}},json:{write:!0,origins:{"web-scene":{write:!1}}}})],m$6.prototype,"marker",void 0),e$4([y$7({type:Number,json:{read:!1,write:!1}})],m$6.prototype,"miterLimit",void 0),m$6=p$d=e$4([i$9("esri.symbols.SimpleLineSymbol")],m$6);var d$9=m$6;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let p$c=class extends n$f{constructor(e){super(e),this.outline=null,this.type=null;}hash(){return `${this.type}.${this.outline&&this.outline.hash()}`}};e$4([y$7({types:{key:"type",base:null,defaultKeyValue:"simple-line",typeMap:{"simple-line":d$9}},json:{default:null,write:!0}})],p$c.prototype,"outline",void 0),e$4([y$7({type:["simple-fill","picture-fill"],readOnly:!0})],p$c.prototype,"type",void 0),p$c=e$4([i$9("esri.symbols.FillSymbol")],p$c);var l$c=p$c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let t$3=class extends a$c{constructor(r){super(r);}clone(){}};e$4([y$7({type:["style"],readOnly:!0,json:{read:!0,write:{ignoreOrigin:!0}}})],t$3.prototype,"type",void 0),t$3=e$4([i$9("esri.symbols.patterns.Pattern3D")],t$3);var p$b=t$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var a$9=["backward-diagonal","cross","diagonal-cross","forward-diagonal","horizontal","none","solid","vertical"];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var p$a;let i$5=p$a=class extends p$b{constructor(r){super(r),this.type="style",this.style="solid";}clone(){return new p$a({style:this.style})}};e$4([y$7({type:["style"]})],i$5.prototype,"type",void 0),e$4([y$7({type:a$9,json:{read:!0,write:!0}})],i$5.prototype,"style",void 0),i$5=p$a=e$4([i$9("esri.symbols.patterns.StylePattern3D")],i$5);var c$c=i$5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function r$1(t,r,s){if(!t)return t;switch(t.type){case"style":{const r=new c$c;return r.read(t,s),r}}}const s$1={types:{key:"type",base:p$b,typeMap:{style:c$c}},json:{read:r$1,write:!0}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const o=new o$2("white");new o$2("black");const e$2=new o$2([255,255,255,0]);function t$2(n){return 0===n.r&&0===n.g&&0===n.b}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var p$9;let c$b=p$9=class extends l$e{clone(){return new p$9({color:r$5(this.color)?this.color.clone():null,colorMixMode:this.colorMixMode})}};e$4([r$3({multiply:"multiply",replace:"replace",tint:"tint"})],c$b.prototype,"colorMixMode",void 0),c$b=p$9=e$4([i$9("esri.symbols.support.Symbol3DFillMaterial")],c$b);var i$4=c$b;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var n$b;let u$9=n$b=class extends a$c{constructor(){super(...arguments),this.color=new o$2([0,0,0,1]),this.size=e$3(1),this.stipplePattern=null,this.stippleOffColor=null;}clone(){return new n$b({color:r$5(this.color)?this.color.clone():null,size:this.size,stipplePattern:this.stipplePattern?this.stipplePattern.slice():null,stippleOffColor:this.stippleOffColor?this.stippleOffColor.clone():null})}};e$4([y$7(c$i)],u$9.prototype,"color",void 0),e$4([y$7(p$g)],u$9.prototype,"size",void 0),e$4([y$7(l$g)],u$9.prototype,"stipplePattern",void 0),e$4([y$7({type:o$2})],u$9.prototype,"stippleOffColor",void 0),u$9=n$b=e$4([i$9("esri.symbols.support.Symbol3DOutline")],u$9);var a$8=u$9;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var d$8;let y$6=d$8=class extends c$k{constructor(t){super(t),this.type="fill",this.material=null,this.pattern=null,this.castShadows=!0,this.outline=null,this.edges=null;}clone(){return new d$8({edges:r$5(this.edges)?this.edges.clone():null,enabled:this.enabled,material:r$5(this.material)?this.material.clone():null,pattern:r$5(this.pattern)?this.pattern.clone():null,castShadows:this.castShadows,outline:r$5(this.outline)?this.outline.clone():null})}static fromSimpleFillSymbol(t){return new d$8({material:{color:(t.color||e$2).clone()},pattern:t.style&&"solid"!==t.style?new c$c({style:t.style}):null,outline:t.outline?new a$8({size:t.outline.width||0,color:(t.outline.color||o).clone()}):null})}};e$4([r$3({Fill:"fill"},{readOnly:!0})],y$6.prototype,"type",void 0),e$4([y$7({type:i$4,json:{write:!0}})],y$6.prototype,"material",void 0),e$4([y$7(s$1)],y$6.prototype,"pattern",void 0),e$4([y$7({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],y$6.prototype,"castShadows",void 0),e$4([y$7({type:a$8,json:{write:!0}})],y$6.prototype,"outline",void 0),e$4([y$7(t$4)],y$6.prototype,"edges",void 0),y$6=d$8=e$4([i$9("esri.symbols.FillSymbol3DLayer")],y$6);var h$7=y$6;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var p$8;let l$b=p$8=class extends a$c{constructor(o){super(o),this.decoration="none",this.family="sans-serif",this.size=9,this.style="normal",this.weight="normal";}castSize(o){return o$1(o)}clone(){return new p$8({decoration:this.decoration,family:this.family,size:this.size,style:this.style,weight:this.weight})}hash(){return `${this.decoration}.${this.family}.${this.size}.${this.style}.${this.weight}`}};e$4([y$7({type:["underline","line-through","none"],json:{default:"none",write:!0}})],l$b.prototype,"decoration",void 0),e$4([y$7({type:String,json:{write:!0}})],l$b.prototype,"family",void 0),e$4([y$7({type:Number,json:{write:{overridePolicy:(o,t,e)=>({enabled:!e||!e.textSymbol3D})}}})],l$b.prototype,"size",void 0),e$4([c$n("size")],l$b.prototype,"castSize",null),e$4([y$7({type:["normal","italic","oblique"],json:{default:"normal",write:!0}})],l$b.prototype,"style",void 0),e$4([y$7({type:["normal","bold","bolder","lighter"],json:{default:"normal",write:!0}})],l$b.prototype,"weight",void 0),l$b=p$8=e$4([i$9("esri.symbols.Font")],l$b);var n$a=l$b;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var l$a;const d$7=o$4()({circle:"circle",square:"square",cross:"cross",x:"x",kite:"kite",triangle:"triangle"});let j$5=l$a=class extends a$c{constructor(r){super(r);}readHref(r,e,o){return r?c$o(r,o):e.dataURI}writeHref(r,e,o,t){r&&(G(r)?e.dataURI=r:(e.href=i$a(r,t),Q(e.href)&&(e.href=z(e.href))));}clone(){return new l$a({href:this.href,primitive:this.primitive})}};e$4([y$7({type:String,json:{write:!0,read:{source:["href","dataURI"]}}})],j$5.prototype,"href",void 0),e$4([e$5("href")],j$5.prototype,"readHref",null),e$4([o$3("href",{href:{type:String},dataURI:{type:String}})],j$5.prototype,"writeHref",null),e$4([r$3(d$7)],j$5.prototype,"primitive",void 0),j$5=l$a=e$4([i$9("esri.symbols.support.IconSymbol3DLayerResource")],j$5);var y$5=j$5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var e$1;let p$7=e$1=class extends u$b{constructor(){super(...arguments),this.x=0,this.y=0;}clone(){return new e$1({x:this.x,y:this.y})}};e$4([y$7({type:Number})],p$7.prototype,"x",void 0),e$4([y$7({type:Number})],p$7.prototype,"y",void 0),p$7=e$1=e$4([i$9("esri.symbols.support.Symbol3DAnchorPosition2D")],p$7);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var d$6;const f$3=n$h.getLogger("esri.symbols.IconSymbol3DLayer");let b$2=d$6=class extends c$k{constructor(o){super(o),this.material=null,this.resource=null,this.type="icon",this.size=12,this.anchor="center",this.anchorPosition=void 0,this.outline=void 0;}clone(){return new d$6({anchor:this.anchor,anchorPosition:this.anchorPosition&&this.anchorPosition.clone(),enabled:this.enabled,material:r$5(this.material)?this.material.clone():null,outline:r$5(this.outline)?this.outline.clone():null,resource:this.resource&&this.resource.clone(),size:this.size})}static fromSimpleMarkerSymbol(o$1){const t=o$1.color||o,r=j$4(o$1),e=o$1.outline&&o$1.outline.width>0?{size:o$1.outline.width,color:(o$1.outline.color||o).clone()}:null;return new d$6({size:o$1.size,resource:{primitive:w(o$1.style)},material:{color:t},outline:e,anchor:r?"relative":void 0,anchorPosition:r})}static fromPictureMarkerSymbol(o$1){const t=!o$1.color||t$2(o$1.color)?o:o$1.color,r=j$4(o$1);return new d$6({size:o$1.width<=o$1.height?o$1.height:o$1.width,resource:{href:o$1.url},material:{color:t.clone()},anchor:r?"relative":void 0,anchorPosition:r})}static fromCIMSymbol(o){return new d$6({resource:{href:X({mediaType:"application/json",data:JSON.stringify(o.data)})}})}};function j$4(o){const t="width"in o?o.width:o.size,r="height"in o?o.height:o.size,e=v$1(o.xoffset),i=v$1(o.yoffset);return (e||i)&&t&&r?{x:-e/t,y:i/r}:null}function v$1(o){return isFinite(o)?o:0}e$4([y$7({type:l$e,json:{write:!0}})],b$2.prototype,"material",void 0),e$4([y$7({type:y$5,json:{write:!0}})],b$2.prototype,"resource",void 0),e$4([r$3({Icon:"icon"},{readOnly:!0})],b$2.prototype,"type",void 0),e$4([y$7(p$g)],b$2.prototype,"size",void 0),e$4([r$3({center:"center",left:"left",right:"right",top:"top",bottom:"bottom",topLeft:"top-left",topRight:"top-right",bottomLeft:"bottom-left",bottomRight:"bottom-right",relative:"relative"}),y$7({json:{default:"center"}})],b$2.prototype,"anchor",void 0),e$4([y$7({type:p$7,json:{type:[Number],read:{reader:o=>new p$7({x:o[0],y:o[1]})},write:{writer:(o,t)=>{t.anchorPosition=[o.x,o.y];},overridePolicy(){return {enabled:"relative"===this.anchor}}}}})],b$2.prototype,"anchorPosition",void 0),e$4([y$7({type:a$8,json:{write:!0}})],b$2.prototype,"outline",void 0),b$2=d$6=e$4([i$9("esri.symbols.IconSymbol3DLayer")],b$2);const g$2={circle:"circle",cross:"cross",diamond:"kite",square:"square",x:"x",triangle:"triangle",path:null};function w(o){const t=g$2[o];return t||(f$3.warn(`${o} cannot be mapped to Icon symbol. Fallback to "circle"`),"circle")}var S$2=b$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var u$8;let j$3=u$8=class extends c$k{constructor(t){super(t),this.material=null,this.type="line",this.join="miter",this.cap="butt",this.size=e$3(1),this.stipplePattern=null,this.stippleOffColor=null;}clone(){return new u$8({enabled:this.enabled,material:r$5(this.material)?this.material.clone():null,size:this.size,join:this.join,cap:this.cap,stipplePattern:this.stipplePattern?this.stipplePattern.slice():null,stippleOffColor:this.stippleOffColor?this.stippleOffColor.clone():null})}static fromSimpleLineSymbol(t){return new u$8({size:t.width||1,cap:t.cap||"butt",join:t.join||"miter",material:{color:(t.color||o).clone()}})}};e$4([y$7({type:l$e,json:{write:!0}})],j$3.prototype,"material",void 0),e$4([r$3({Line:"line"},{readOnly:!0})],j$3.prototype,"type",void 0),e$4([y$7({type:["miter","bevel","round"],json:{write:!0,default:"miter"}})],j$3.prototype,"join",void 0),e$4([y$7({type:["butt","square","round"],json:{write:!0,default:"butt"}})],j$3.prototype,"cap",void 0),e$4([y$7(p$g)],j$3.prototype,"size",void 0),e$4([y$7(l$g)],j$3.prototype,"stipplePattern",void 0),e$4([y$7({type:o$2})],j$3.prototype,"stippleOffColor",void 0),j$3=u$8=e$4([i$9("esri.symbols.LineSymbol3DLayer")],j$3);var f$2=j$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var m$5;const n$9=o$4()({sphere:"sphere",cylinder:"cylinder",cube:"cube",cone:"cone",diamond:"diamond",tetrahedron:"tetrahedron",invertedCone:"inverted-cone"});let a$7=m$5=class extends a$c{clone(){return new m$5({href:this.href,primitive:this.primitive})}};e$4([y$7({type:String,json:{read:m$b,write:p$k}})],a$7.prototype,"href",void 0),e$4([r$3(n$9)],a$7.prototype,"primitive",void 0),a$7=m$5=e$4([i$9("esri.symbols.support.ObjectSymbol3DLayerResource")],a$7);var d$5=a$7;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var e;let p$6=e=class extends u$b{constructor(){super(...arguments),this.x=0,this.y=0,this.z=0;}clone(){return new e({x:this.x,y:this.y,z:this.z})}};e$4([y$7({type:Number})],p$6.prototype,"x",void 0),e$4([y$7({type:Number})],p$6.prototype,"y",void 0),e$4([y$7({type:Number})],p$6.prototype,"z",void 0),p$6=e=e$4([i$9("esri.symbols.support.Symbol3DAnchorPosition3D")],p$6);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var n$8;let c$a=n$8=class extends c$k{constructor(o){super(o),this.material=null,this.castShadows=!0,this.resource=null,this.type="object",this.width=void 0,this.height=void 0,this.depth=void 0,this.anchor=void 0,this.anchorPosition=void 0,this.heading=void 0,this.tilt=void 0,this.roll=void 0;}clone(){return new n$8({heading:this.heading,tilt:this.tilt,roll:this.roll,anchor:this.anchor,anchorPosition:this.anchorPosition&&this.anchorPosition.clone(),depth:this.depth,enabled:this.enabled,height:this.height,material:r$5(this.material)?this.material.clone():null,castShadows:this.castShadows,resource:this.resource&&this.resource.clone(),width:this.width})}get isPrimitive(){return !this.resource||"string"!=typeof this.resource.href}};e$4([y$7({type:l$e,json:{write:!0}})],c$a.prototype,"material",void 0),e$4([y$7({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],c$a.prototype,"castShadows",void 0),e$4([y$7({type:d$5,json:{write:!0}})],c$a.prototype,"resource",void 0),e$4([r$3({Object:"object"},{readOnly:!0})],c$a.prototype,"type",void 0),e$4([y$7({type:Number,json:{write:!0}})],c$a.prototype,"width",void 0),e$4([y$7({type:Number,json:{write:!0}})],c$a.prototype,"height",void 0),e$4([y$7({type:Number,json:{write:!0}})],c$a.prototype,"depth",void 0),e$4([r$3({center:"center",top:"top",bottom:"bottom",origin:"origin",relative:"relative"}),y$7({json:{default:"origin"}})],c$a.prototype,"anchor",void 0),e$4([y$7({type:p$6,json:{type:[Number],read:{reader:o=>new p$6({x:o[0],y:o[1],z:o[2]})},write:{writer:(o,t)=>{t.anchorPosition=[o.x,o.y,o.z];},overridePolicy(){return {enabled:"relative"===this.anchor}}}}})],c$a.prototype,"anchorPosition",void 0),e$4([y$7({type:Number,json:{write:!0}})],c$a.prototype,"heading",void 0),e$4([y$7({type:Number,json:{write:!0}})],c$a.prototype,"tilt",void 0),e$4([y$7({type:Number,json:{write:!0}})],c$a.prototype,"roll",void 0),e$4([y$7({readOnly:!0})],c$a.prototype,"isPrimitive",null),c$a=n$8=e$4([i$9("esri.symbols.ObjectSymbol3DLayer")],c$a);var l$9=c$a;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var a$6;let l$8=a$6=class extends c$k{constructor(t){super(t),this.material=null,this.castShadows=!0,this.type="path",this.profile="circle",this.join="miter",this.cap="butt",this.width=void 0,this.height=void 0,this.anchor="center",this.profileRotation="all";}get size(){return this.width&&this.height?this.width===this.height?this.width:void 0:this.width?this.width:this.height?this.height:void 0}set size(t){this.width=t,this.height=t;}readSize(t,e){return e.height||e.width?t:e.size}clone(){return new a$6({enabled:this.enabled,material:r$5(this.material)?this.material.clone():null,castShadows:this.castShadows,size:this.size,profile:this.profile,join:this.join,cap:this.cap,width:this.width,height:this.height,profileRotation:this.profileRotation,anchor:this.anchor})}};e$4([y$7({type:l$e,json:{write:!0}})],l$8.prototype,"material",void 0),e$4([y$7({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],l$8.prototype,"castShadows",void 0),e$4([r$3({Path:"path"},{readOnly:!0})],l$8.prototype,"type",void 0),e$4([y$7({type:Number})],l$8.prototype,"size",null),e$4([e$5("size")],l$8.prototype,"readSize",null),e$4([y$7({type:["circle","quad"],json:{write:!0,default:"circle"}})],l$8.prototype,"profile",void 0),e$4([y$7({type:["miter","bevel","round"],json:{write:!0,default:"miter"}})],l$8.prototype,"join",void 0),e$4([y$7({type:["none","butt","square","round"],json:{write:!0,default:"butt"}})],l$8.prototype,"cap",void 0),e$4([y$7({type:Number,json:{write:{enabled:!0,target:{width:{type:Number},size:{type:Number}}}}})],l$8.prototype,"width",void 0),e$4([y$7({type:Number,json:{write:!0}})],l$8.prototype,"height",void 0),e$4([y$7({type:["center","bottom","top"],json:{write:!0,default:"center"}})],l$8.prototype,"anchor",void 0),e$4([y$7({type:["heading","all"],json:{write:!0,default:"all"}})],l$8.prototype,"profileRotation",void 0),l$8=a$6=e$4([i$9("esri.symbols.PathSymbol3DLayer")],l$8);var d$4=l$8;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var m$4;let l$7=m$4=class extends a$c{constructor(){super(...arguments),this.color=new o$2([0,0,0,1]),this.size=0;}clone(){return new m$4({color:y$8(this.color),size:this.size})}};e$4([y$7(c$i)],l$7.prototype,"color",void 0),e$4([y$7(p$g)],l$7.prototype,"size",void 0),l$7=m$4=e$4([i$9("esri.symbols.support.Symbol3DHalo")],l$7);var a$5=l$7;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var c$9;let h$6=c$9=class extends c$k{constructor(t){super(t),this._userSize=void 0,this.halo=null,this.material=null,this.text=void 0,this.type="text";}get font(){return this._get("font")||null}set font(t){t&&this._userSize&&(t.size=this._userSize),this._set("font",t);}writeFont(t,o,e,r){const s={...r,textSymbol3D:!0};o.font=t.write({},s),delete o.font.size;}get size(){return null!=this._userSize?this._userSize:this.font&&null!=this.font.size?this.font.size:9}set size(t){this._userSize=t,this.font&&(this.font.size=this._userSize),this.notifyChange("size");}clone(){return new c$9({enabled:this.enabled,font:this.font&&y$8(this.font),halo:this.halo&&y$8(this.halo),material:r$5(this.material)?this.material.clone():null,size:this.size,text:this.text})}static fromTextSymbol(t){const o=f$1(t.haloColor,t.haloSize),e=t.font?t.font.clone():new n$a;return new c$9({size:e.size,font:e,halo:o,material:t.color?{color:t.color.clone()}:null,text:t.text})}};function f$1(t,e){return t&&e>0?{color:y$8(t),size:e}:null}e$4([y$7({type:n$a,json:{write:!0}})],h$6.prototype,"font",null),e$4([o$3("font")],h$6.prototype,"writeFont",null),e$4([y$7({type:a$5,json:{write:!0}})],h$6.prototype,"halo",void 0),e$4([y$7({type:l$e,json:{write:!0}})],h$6.prototype,"material",void 0),e$4([y$7(p$g),y$7()],h$6.prototype,"size",null),e$4([y$7({type:String,json:{write:!0}})],h$6.prototype,"text",void 0),e$4([r$3({Text:"text"},{readOnly:!0})],h$6.prototype,"type",void 0),h$6=c$9=e$4([i$9("esri.symbols.TextSymbol3DLayer")],h$6);var y$4=h$6;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var l$6;let c$8=l$6=class extends c$k{constructor(e){super(e),this.color=m$3.clone(),this.type="water",this.waterbodySize="medium",this.waveDirection=null,this.waveStrength="moderate";}clone(){return new l$6({color:y$8(this.color),waterbodySize:this.waterbodySize,waveDirection:this.waveDirection,waveStrength:this.waveStrength})}};e$4([y$7({type:o$2,nonNullable:!0,json:{type:[N],write:(e,o,r)=>o[r]=e.toArray(1),default:()=>m$3.clone(),defaultEquals:e=>e.toCss(!0)===m$3.toCss(!0)}})],c$8.prototype,"color",void 0),e$4([r$3({Water:"water"},{readOnly:!0})],c$8.prototype,"type",void 0),e$4([y$7({type:["small","medium","large"],json:{write:!0,default:"medium"}})],c$8.prototype,"waterbodySize",void 0),e$4([y$7({type:Number,json:{write:!0,default:null}})],c$8.prototype,"waveDirection",void 0),e$4([y$7({type:["calm","rippled","slight","moderate"],json:{write:!0,default:"moderate"}})],c$8.prototype,"waveStrength",void 0),c$8=l$6=e$4([i$9("esri.symbols.WaterSymbol3DLayer")],c$8);const m$3=new o$2([0,119,190]);var n$7=c$8;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var p$5;let i$3=p$5=class extends u$b{constructor(){super(...arguments),this.portal=null;}clone(){return new p$5({name:this.name,styleUrl:this.styleUrl,styleName:this.styleName,portal:this.portal})}};e$4([y$7({type:String})],i$3.prototype,"name",void 0),e$4([y$7({type:String})],i$3.prototype,"styleUrl",void 0),e$4([y$7({type:String})],i$3.prototype,"styleName",void 0),e$4([y$7({type:w$2})],i$3.prototype,"portal",void 0),i$3=p$5=e$4([i$9("esri.symbols.support.StyleOrigin")],i$3);var l$5=i$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var t$1;let p$4=t$1=class extends u$b{clone(){return new t$1({url:this.url})}};e$4([y$7({type:String})],p$4.prototype,"url",void 0),p$4=t$1=e$4([i$9("esri.symbols.support.Thumbnail")],p$4);var c$7=p$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const v={icon:S$2,object:l$9,line:f$2,path:d$4,fill:h$7,extrude:c$e,text:y$4,water:n$7},C=L$2.ofType({base:c$k,key:"type",typeMap:v,errorContext:"symbol-layer"}),T=n$h.getLogger("esri.symbols.Symbol3D");let k$1=class extends n$f{constructor(e){super(e),this.styleOrigin=null,this.thumbnail=null,this.type=null;const r=this.__accessor__&&this.__accessor__.metadatas&&this.__accessor__.metadatas.symbolLayers,o=r&&r.type||L$2;this._set("symbolLayers",new o);}get color(){return null}set color(e){T.error("Symbol3D does not support colors on the symbol level. Colors may be set on individual symbol layer materials instead.");}set symbolLayers(e){n$i(e,this._get("symbolLayers"));}readStyleOrigin(e,r,o){if(e.styleUrl&&e.name){const r=c$o(e.styleUrl,o);return new l$5({styleUrl:r,name:e.name})}if(e.styleName&&e.name)return new l$5({portal:o&&o.portal||w$2.getDefault(),styleName:e.styleName,name:e.name});o&&o.messages&&o.messages.push(new t$9("symbol3d:incomplete-style-origin","Style origin requires either a 'styleUrl' or 'styleName' and a 'name' property",{context:o,definition:e}));}writeStyleOrigin(e,r,o,t){if(e.styleUrl&&e.name){let o=i$a(e.styleUrl,t);Q(o)&&(o=z(o)),r.styleOrigin={styleUrl:o,name:e.name};}else e.styleName&&e.name&&(e.portal&&t&&t.portal&&!P$1(e.portal.restUrl,t.portal.restUrl)?t&&t.messages&&t.messages.push(new t$9("symbol:cross-portal","The symbol style origin cannot be persisted because it refers to an item on a different portal than the one being saved to.",{symbol:this})):r.styleOrigin={styleName:e.styleName,name:e.name});}normalizeCtorArgs(e){return e instanceof c$k||e&&v[e.type]?{symbolLayers:[e]}:Array.isArray(e)?{symbolLayers:e}:e}};e$4([y$7({json:{read:!1,write:!1}})],k$1.prototype,"color",null),e$4([y$7({type:C,nonNullable:!0,json:{write:!0}}),c$n(t$a)],k$1.prototype,"symbolLayers",null),e$4([y$7({type:l$5})],k$1.prototype,"styleOrigin",void 0),e$4([e$5("styleOrigin")],k$1.prototype,"readStyleOrigin",null),e$4([o$3("styleOrigin",{"styleOrigin.styleUrl":{type:String},"styleOrigin.styleName":{type:String},"styleOrigin.name":{type:String}})],k$1.prototype,"writeStyleOrigin",null),e$4([y$7({type:c$7,json:{read:!1}})],k$1.prototype,"thumbnail",void 0),e$4([y$7({type:["point-3d","line-3d","polygon-3d","mesh-3d","label-3d"],readOnly:!0})],k$1.prototype,"type",void 0),k$1=e$4([i$9("esri.symbols.Symbol3D")],k$1);var A=k$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var l$4;let i$2=l$4=class extends a$c{constructor(){super(...arguments),this.color=new o$2("white");}clone(){return new l$4({color:y$8(this.color)})}};e$4([y$7(c$i)],i$2.prototype,"color",void 0),i$2=l$4=e$4([i$9("esri.symbols.callouts.LineCallout3DBorder")],i$2);var a$4=i$2;Object.freeze({__proto__:null,get LineCallout3DBorder(){return i$2},default:a$4});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let t=class extends a$c{constructor(r){super(r),this.visible=!0;}clone(){}};e$4([y$7({type:["line"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],t.prototype,"type",void 0),e$4([y$7({readOnly:!0})],t.prototype,"visible",void 0),t=e$4([i$9("esri.symbols.callouts.Callout3D")],t);var p$3=t;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var u$7;let j$2=u$7=class extends p$3{constructor(o){super(o),this.type="line",this.color=new o$2([0,0,0,1]),this.size=e$3(1),this.border=null;}get visible(){return this.size>0&&r$5(this.color)&&this.color.a>0}clone(){return new u$7({color:y$8(this.color),size:this.size,border:y$8(this.border)})}};e$4([r$3({line:"line"},{readOnly:!0})],j$2.prototype,"type",void 0),e$4([y$7(c$i)],j$2.prototype,"color",void 0),e$4([y$7(p$g)],j$2.prototype,"size",void 0),e$4([y$7({type:a$4,json:{write:!0}})],j$2.prototype,"border",void 0),e$4([y$7({readOnly:!0})],j$2.prototype,"visible",null),j$2=u$7=e$4([i$9("esri.symbols.callouts.LineCallout3D")],j$2);var d$3=j$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var p$2;let i$1=p$2=class extends a$c{constructor(){super(...arguments),this.screenLength=0,this.minWorldLength=0;}clone(){return new p$2({screenLength:this.screenLength,minWorldLength:this.minWorldLength,maxWorldLength:this.maxWorldLength})}};e$4([y$7(p$g)],i$1.prototype,"screenLength",void 0),e$4([y$7({type:Number,json:{write:!0,default:0}})],i$1.prototype,"minWorldLength",void 0),e$4([y$7({type:Number,json:{write:!0}})],i$1.prototype,"maxWorldLength",void 0),i$1=p$2=e$4([i$9("esri.symbols.support.Symbol3DVerticalOffset")],i$1);var n$6=i$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function r(t){if(!t)return !1;const e=t.verticalOffset;return !!e&&!(e.screenLength<=0||e.maxWorldLength<=0)}function n$5(t){if(!t)return !1;if(!t.supportsCallout||!t.supportsCallout())return !1;const e=t.callout;return !!e&&(!!e.visible&&!!r(t))}const l$3={types:{key:"type",base:p$3,typeMap:{line:d$3}},json:{write:!0}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var u$6;const n$4=L$2.ofType({base:null,key:"type",typeMap:{text:y$4}});let f=u$6=class extends A{constructor(t){super(t),this.verticalOffset=null,this.callout=null,this.styleOrigin=null,this.symbolLayers=new n$4,this.type="label-3d";}supportsCallout(){return !0}hasVisibleCallout(){return n$5(this)}hasVisibleVerticalOffset(){return r(this)}clone(){return new u$6({styleOrigin:y$8(this.styleOrigin),symbolLayers:y$8(this.symbolLayers),thumbnail:y$8(this.thumbnail),callout:y$8(this.callout),verticalOffset:y$8(this.verticalOffset)})}static fromTextSymbol(t){return new u$6({symbolLayers:[y$4.fromTextSymbol(t)]})}};e$4([y$7({type:n$6,json:{write:!0}})],f.prototype,"verticalOffset",void 0),e$4([y$7(l$3)],f.prototype,"callout",void 0),e$4([y$7({json:{read:!1,write:!1}})],f.prototype,"styleOrigin",void 0),e$4([y$7({type:n$4})],f.prototype,"symbolLayers",void 0),e$4([r$3({LabelSymbol3D:"label-3d"},{readOnly:!0})],f.prototype,"type",void 0),f=u$6=e$4([i$9("esri.symbols.LabelSymbol3D")],f);var b$1=f;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var y$3;const a$3=L$2.ofType({base:null,key:"type",typeMap:{line:f$2,path:d$4}}),n$3=L$2.ofType({base:null,key:"type",typeMap:{line:f$2,path:d$4}});let c$6=y$3=class extends A{constructor(o){super(o),this.symbolLayers=new a$3,this.type="line-3d";}clone(){return new y$3({styleOrigin:y$8(this.styleOrigin),symbolLayers:y$8(this.symbolLayers),thumbnail:y$8(this.thumbnail)})}static fromSimpleLineSymbol(o){return new y$3({symbolLayers:[f$2.fromSimpleLineSymbol(o)]})}};e$4([y$7({type:a$3,json:{type:n$3}})],c$6.prototype,"symbolLayers",void 0),e$4([r$3({LineSymbol3D:"line-3d"},{readOnly:!0})],c$6.prototype,"type",void 0),c$6=y$3=e$4([i$9("esri.symbols.LineSymbol3D")],c$6);var u$5=c$6;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let p$1=class extends n$f{constructor(r){super(r),this.angle=0,this.type=null,this.xoffset=0,this.yoffset=0,this.size=9;}hash(){return `${this.type}.${this.angle}.${this.size}.${this.xoffset}.${this.yoffset}`}};e$4([y$7({type:Number,json:{read:r=>r&&-1*r,write:(r,e)=>e.angle=r&&-1*r}})],p$1.prototype,"angle",void 0),e$4([y$7({type:["simple-marker","picture-marker"],readOnly:!0})],p$1.prototype,"type",void 0),e$4([y$7({type:Number,cast:o$1,json:{write:!0}})],p$1.prototype,"xoffset",void 0),e$4([y$7({type:Number,cast:o$1,json:{write:!0}})],p$1.prototype,"yoffset",void 0),e$4([y$7({type:Number,cast:r=>"auto"===r?r:o$1(r),json:{write:!0}})],p$1.prototype,"size",void 0),p$1=e$4([i$9("esri.symbols.MarkerSymbol")],p$1);var i=p$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var l$2;const c$5=L$2.ofType({base:null,key:"type",typeMap:{fill:h$7}});let y$2=l$2=class extends A{constructor(o){super(o),this.symbolLayers=new c$5,this.type="mesh-3d";}clone(){return new l$2({styleOrigin:y$8(this.styleOrigin),symbolLayers:y$8(this.symbolLayers),thumbnail:y$8(this.thumbnail)})}};e$4([y$7({type:c$5})],y$2.prototype,"symbolLayers",void 0),e$4([r$3({MeshSymbol3D:"mesh-3d"},{readOnly:!0})],y$2.prototype,"type",void 0),y$2=l$2=e$4([i$9("esri.symbols.MeshSymbol3D")],y$2);var a$2=y$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function s(a,r,t){return r.imageData?X({mediaType:r.contentType||"image/png",isBase64:!0,data:r.imageData}):l$1(r.url,t)}function l$1(e,t){return p(t)&&!Q(e)&&t.layer.parsedUrl?D$1(t.layer.parsedUrl.path,"images",e):c$o(e,t)}function u$4(e,a,r,n){if(G(e)){const t=V(e);a.contentType=t.mediaType,a.imageData=t.data,r&&r.imageData===a.imageData&&r.url&&p$k(r.url,a,"url",n);}else p$k(e,a,"url",n);}const m$2={json:{read:{source:["imageData","url"],reader:s},write:{writer(e,a,r,t){u$4(e,a,this.source,t);}}}},c$4={readOnly:!0,json:{read:{source:["imageData","url"],reader(e,a,r){const t={};return a.imageData&&(t.imageData=a.imageData),a.contentType&&(t.contentType=a.contentType),a.url&&(t.url=l$1(a.url,r)),t}}}};function p(e){return e&&("service"===e.origin||"portal-item"===e.origin)&&e.layer&&("feature"===e.layer.type||"stream"===e.layer.type)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var h$5;let u$3=h$5=class extends l$c{constructor(...t){super(...t),this.type="picture-fill",this.url=null,this.xscale=1,this.yscale=1,this.width=12,this.height=12,this.xoffset=0,this.yoffset=0,this.source=null;}normalizeCtorArgs(t,o,s,r){if(t&&"string"!=typeof t&&null==t.imageData)return t;const e={};return t&&(e.url=t),o&&(e.outline=o),null!=s&&(e.width=o$1(s)),null!=r&&(e.height=o$1(r)),e}clone(){const t=new h$5({color:y$8(this.color),height:this.height,outline:this.outline&&this.outline.clone(),url:this.url,width:this.width,xoffset:this.xoffset,xscale:this.xscale,yoffset:this.yoffset,yscale:this.yscale});return t._set("source",y$8(this.source)),t}hash(){var t;return `${super.hash()}.${null==(t=this.color)?void 0:t.hash()}.${this.height}.${this.url}.${this.width}.${this.xoffset}.${this.xscale}.${this.yoffset}.${this.yscale}`}};e$4([r$3({esriPFS:"picture-fill"},{readOnly:!0})],u$3.prototype,"type",void 0),e$4([y$7(m$2)],u$3.prototype,"url",void 0),e$4([y$7({type:Number,json:{write:!0}})],u$3.prototype,"xscale",void 0),e$4([y$7({type:Number,json:{write:!0}})],u$3.prototype,"yscale",void 0),e$4([y$7({type:Number,cast:o$1,json:{write:!0}})],u$3.prototype,"width",void 0),e$4([y$7({type:Number,cast:o$1,json:{write:!0}})],u$3.prototype,"height",void 0),e$4([y$7({type:Number,cast:o$1,json:{write:!0}})],u$3.prototype,"xoffset",void 0),e$4([y$7({type:Number,cast:o$1,json:{write:!0}})],u$3.prototype,"yoffset",void 0),e$4([y$7(c$4)],u$3.prototype,"source",void 0),u$3=h$5=e$4([i$9("esri.symbols.PictureFillSymbol")],u$3);var a$1=u$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var l;let a=l=class extends i{constructor(...r){super(...r),this.color=null,this.type="picture-marker",this.url=null,this.source=null,this.height=12,this.width=12,this.size=null;}normalizeCtorArgs(r,t,o){if(r&&"string"!=typeof r&&null==r.imageData)return r;const e={};return r&&(e.url=r),null!=t&&(e.width=o$1(t)),null!=o&&(e.height=o$1(o)),e}readHeight(r,t){return t.size||r}readWidth(r,t){return t.size||r}clone(){const r=new l({angle:this.angle,height:this.height,url:this.url,width:this.width,xoffset:this.xoffset,yoffset:this.yoffset});return r._set("source",y$8(this.source)),r}hash(){return `${super.hash()}.${this.height}.${this.url}.${this.width}`}};e$4([y$7({json:{write:!1}})],a.prototype,"color",void 0),e$4([r$3({esriPMS:"picture-marker"},{readOnly:!0})],a.prototype,"type",void 0),e$4([y$7(m$2)],a.prototype,"url",void 0),e$4([y$7(c$4)],a.prototype,"source",void 0),e$4([y$7({type:Number,cast:o$1,json:{write:!0}})],a.prototype,"height",void 0),e$4([e$5("height",["height","size"])],a.prototype,"readHeight",null),e$4([y$7({type:Number,cast:o$1,json:{write:!0}})],a.prototype,"width",void 0),e$4([y$7({json:{write:!1}})],a.prototype,"size",void 0),a=l=e$4([i$9("esri.symbols.PictureMarkerSymbol")],a);var n$2=a;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var S$1;const h$4=L$2.ofType({base:null,key:"type",typeMap:{icon:S$2,object:l$9,text:y$4}}),j$1=L$2.ofType({base:null,key:"type",typeMap:{icon:S$2,object:l$9}});let d$2=S$1=class extends A{constructor(o){super(o),this.verticalOffset=null,this.callout=null,this.symbolLayers=new h$4,this.type="point-3d";}writeSymbolLayers(o,t,e,r){const s=o.filter((o=>"text"!==o.type));if(r&&r.messages&&s.length<o.length){const t=o.find((o=>"text"===o.type));r.messages.push(new s$3("symbol-layer:unsupported","Symbol layers of type 'text' cannot be persisted in PointSymbol3D",{symbolLayer:t}));}t[e]=s.map((o=>o.write({},r))).toArray();}supportsCallout(){if((this.symbolLayers?this.symbolLayers.length:0)<1)return !1;for(const o of this.symbolLayers.items)switch(o.type){case"icon":case"text":case"object":continue;default:return !1}return !0}hasVisibleCallout(){return n$5(this)}hasVisibleVerticalOffset(){return r(this)}clone(){return new S$1({verticalOffset:y$8(this.verticalOffset),callout:y$8(this.callout),styleOrigin:y$8(this.styleOrigin),symbolLayers:y$8(this.symbolLayers),thumbnail:y$8(this.thumbnail)})}static fromSimpleMarkerSymbol(o){return new S$1({symbolLayers:[S$2.fromSimpleMarkerSymbol(o)]})}static fromPictureMarkerSymbol(o){return new S$1({symbolLayers:[S$2.fromPictureMarkerSymbol(o)]})}static fromCIMSymbol(o){if(o.data&&o.data.symbol){const t=o.data.symbol;if("CIMPointSymbol"===t.type&&t.callout)return new S$1({symbolLayers:[S$2.fromCIMSymbol(o)],callout:{type:"line",size:.5,color:[0,0,0]},verticalOffset:{screenLength:40}})}return new S$1({symbolLayers:[S$2.fromCIMSymbol(o)]})}static fromTextSymbol(o){return new S$1({symbolLayers:[y$4.fromTextSymbol(o)]})}};e$4([y$7({type:n$6,json:{write:!0}})],d$2.prototype,"verticalOffset",void 0),e$4([y$7(l$3)],d$2.prototype,"callout",void 0),e$4([y$7({type:h$4,json:{type:j$1,origins:{"web-scene":{type:j$1}}}})],d$2.prototype,"symbolLayers",void 0),e$4([o$3("web-scene","symbolLayers")],d$2.prototype,"writeSymbolLayers",null),e$4([r$3({PointSymbol3D:"point-3d"},{readOnly:!0})],d$2.prototype,"type",void 0),d$2=S$1=e$4([i$9("esri.symbols.PointSymbol3D")],d$2);var L$1=d$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var L;const S=L$2.ofType({base:null,key:"type",typeMap:{extrude:c$e,fill:h$7,icon:S$2,line:f$2,object:l$9,text:y$4,water:n$7}}),d$1=L$2.ofType({base:null,key:"type",typeMap:{extrude:c$e,fill:h$7,icon:S$2,line:f$2,object:l$9,water:n$7}});let g$1=L=class extends A{constructor(e){super(e),this.symbolLayers=new S,this.type="polygon-3d";}writeSymbolLayers(e,o,r,t){const s=e.filter((e=>"text"!==e.type));if(t&&t.messages&&s.length<e.length){const o=e.find((e=>"text"===e.type));t.messages.push(new s$3("symbol-layer:unsupported","Symbol layers of type 'text' cannot be persisted in PolygonSymbol3D",{symbolLayer:o}));}o[r]=s.map((e=>e.write({},t))).toArray();}clone(){return new L({styleOrigin:y$8(this.styleOrigin),symbolLayers:y$8(this.symbolLayers),thumbnail:y$8(this.thumbnail)})}static fromJSON(e){const o=new L;if(o.read(e),2===o.symbolLayers.length&&"fill"===o.symbolLayers.getItemAt(0).type&&"line"===o.symbolLayers.getItemAt(1).type){const t=o.symbolLayers.getItemAt(0),s=o.symbolLayers.getItemAt(1);!s.enabled||e.symbolLayers&&e.symbolLayers[1]&&!1===e.symbolLayers[1].enable||(t.outline={size:s.size,color:r$5(s.material)?s.material.color:null}),o.symbolLayers.removeAt(1);}return o}static fromSimpleFillSymbol(e){return new L({symbolLayers:[h$7.fromSimpleFillSymbol(e)]})}};e$4([y$7({type:S,json:{type:d$1}})],g$1.prototype,"symbolLayers",void 0),e$4([o$3("web-scene","symbolLayers")],g$1.prototype,"writeSymbolLayers",null),e$4([r$3({PolygonSymbol3D:"polygon-3d"},{readOnly:!0})],g$1.prototype,"type",void 0),g$1=L=e$4([i$9("esri.symbols.PolygonSymbol3D")],g$1);var h$3=g$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var c$3;const n$1=new t$8({esriSFSSolid:"solid",esriSFSNull:"none",esriSFSHorizontal:"horizontal",esriSFSVertical:"vertical",esriSFSForwardDiagonal:"forward-diagonal",esriSFSBackwardDiagonal:"backward-diagonal",esriSFSCross:"cross",esriSFSDiagonalCross:"diagonal-cross"});let m$1=c$3=class extends l$c{constructor(...o){super(...o),this.color=new o$2([0,0,0,.25]),this.outline=new d$9,this.type="simple-fill",this.style="solid";}normalizeCtorArgs(o,r,s){if(o&&"string"!=typeof o)return o;const e={};return o&&(e.style=o),r&&(e.outline=r),s&&(e.color=s),e}clone(){return new c$3({color:y$8(this.color),outline:this.outline&&this.outline.clone(),style:this.style})}hash(){return `${super.hash()}${this.style}.${this.color&&this.color.hash()}`}};e$4([y$7()],m$1.prototype,"color",void 0),e$4([y$7()],m$1.prototype,"outline",void 0),e$4([r$3({esriSFS:"simple-fill"},{readOnly:!0})],m$1.prototype,"type",void 0),e$4([y$7({type:n$1.apiValues,json:{read:n$1.read,write:n$1.write}})],m$1.prototype,"style",void 0),m$1=c$3=e$4([i$9("esri.symbols.SimpleFillSymbol")],m$1);var u$2=m$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var m;const u$1=new t$8({esriSMSCircle:"circle",esriSMSSquare:"square",esriSMSCross:"cross",esriSMSX:"x",esriSMSDiamond:"diamond",esriSMSTriangle:"triangle",esriSMSPath:"path"});let h$2=m=class extends i{constructor(...r){super(...r),this.color=new o$2([255,255,255,.25]),this.type="simple-marker",this.size=12,this.style="circle",this.outline=new d$9;}normalizeCtorArgs(r,o,e,t){if(r&&"string"!=typeof r)return r;const s={};return r&&(s.style=r),null!=o&&(s.size=o$1(o)),e&&(s.outline=e),t&&(s.color=t),s}writeColor(r,o){r&&"x"!==this.style&&"cross"!==this.style&&(o.color=r.toJSON()),null===r&&(o.color=null);}set path(r){this.style="path",this._set("path",r);}clone(){return new m({angle:this.angle,color:y$8(this.color),outline:this.outline&&this.outline.clone(),path:this.path,size:this.size,style:this.style,xoffset:this.xoffset,yoffset:this.yoffset})}hash(){var r;return `${super.hash()}.${this.color&&this.color.hash()}.${this.path}.${this.style}.${null==(r=this.outline)?void 0:r.hash()}`}};e$4([y$7()],h$2.prototype,"color",void 0),e$4([o$3("color")],h$2.prototype,"writeColor",null),e$4([r$3({esriSMS:"simple-marker"},{readOnly:!0})],h$2.prototype,"type",void 0),e$4([y$7()],h$2.prototype,"size",void 0),e$4([y$7({type:u$1.apiValues,json:{read:u$1.read,write:u$1.write}})],h$2.prototype,"style",void 0),e$4([y$7({type:String,json:{write:!0}})],h$2.prototype,"path",null),e$4([y$7({types:{key:"type",base:null,defaultKeyValue:"simple-line",typeMap:{"simple-line":d$9}},json:{default:null,write:!0}})],h$2.prototype,"outline",void 0),h$2=m=e$4([i$9("esri.symbols.SimpleMarkerSymbol")],h$2);var y$1=h$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var d;let c$2=d=class extends n$f{constructor(...t){super(...t),this.backgroundColor=null,this.borderLineColor=null,this.borderLineSize=null,this.font=new n$a,this.horizontalAlignment="center",this.kerning=!0,this.haloColor=null,this.haloSize=null,this.rightToLeft=null,this.rotated=!1,this.text="",this.type="text",this.verticalAlignment=null,this.xoffset=0,this.yoffset=0,this.angle=0,this.width=null,this.lineWidth=192,this.lineHeight=1;}normalizeCtorArgs(t,o,e){if(t&&"string"!=typeof t)return t;const i={};return t&&(i.text=t),o&&(i.font=o),e&&(i.color=e),i}writeLineWidth(t,o,e,i){i&&"string"!=typeof i?i.origin:o[e]=t;}castLineWidth(t){return o$1(t)}writeLineHeight(t,o,e,i){i&&"string"!=typeof i?i.origin:o[e]=t;}clone(){return new d({angle:this.angle,backgroundColor:y$8(this.backgroundColor),borderLineColor:y$8(this.borderLineColor),borderLineSize:this.borderLineSize,color:y$8(this.color),font:this.font&&this.font.clone(),haloColor:y$8(this.haloColor),haloSize:this.haloSize,horizontalAlignment:this.horizontalAlignment,kerning:this.kerning,lineHeight:this.lineHeight,lineWidth:this.lineWidth,rightToLeft:this.rightToLeft,rotated:this.rotated,text:this.text,verticalAlignment:this.verticalAlignment,width:this.width,xoffset:this.xoffset,yoffset:this.yoffset})}hash(){return `${this.backgroundColor&&this.backgroundColor.hash()}.${this.borderLineColor}.${this.borderLineSize}.${this.color.hash()}.${this.font&&this.font.hash()}.${this.haloColor&&this.haloColor.hash()}.${this.haloSize}.${this.horizontalAlignment}.${this.kerning}.${this.rightToLeft}.${this.rotated}.${this.text}.${this.verticalAlignment}.${this.width}.${this.xoffset}.${this.yoffset}.${this.lineHeight}.${this.lineWidth}.${this.angle}`}};e$4([y$7({type:o$2,json:{write:!0}})],c$2.prototype,"backgroundColor",void 0),e$4([y$7({type:o$2,json:{write:!0}})],c$2.prototype,"borderLineColor",void 0),e$4([y$7({type:Number,json:{write:!0}})],c$2.prototype,"borderLineSize",void 0),e$4([y$7({type:n$a,json:{write:!0}})],c$2.prototype,"font",void 0),e$4([y$7({type:["left","right","center","justify"],json:{write:!0}})],c$2.prototype,"horizontalAlignment",void 0),e$4([y$7({type:Boolean,json:{write:!0}})],c$2.prototype,"kerning",void 0),e$4([y$7({type:o$2,json:{write:!0}})],c$2.prototype,"haloColor",void 0),e$4([y$7({type:Number,cast:o$1,json:{write:!0}})],c$2.prototype,"haloSize",void 0),e$4([y$7({type:Boolean,json:{write:!0}})],c$2.prototype,"rightToLeft",void 0),e$4([y$7({type:Boolean,json:{write:!0}})],c$2.prototype,"rotated",void 0),e$4([y$7({type:String,json:{write:!0}})],c$2.prototype,"text",void 0),e$4([r$3({esriTS:"text"},{readOnly:!0})],c$2.prototype,"type",void 0),e$4([y$7({type:["baseline","top","middle","bottom"],json:{write:!0}})],c$2.prototype,"verticalAlignment",void 0),e$4([y$7({type:Number,cast:o$1,json:{write:!0}})],c$2.prototype,"xoffset",void 0),e$4([y$7({type:Number,cast:o$1,json:{write:!0}})],c$2.prototype,"yoffset",void 0),e$4([y$7({type:Number,json:{read:t=>t&&-1*t,write:(t,o)=>o.angle=t&&-1*t}})],c$2.prototype,"angle",void 0),e$4([y$7({type:Number,json:{write:!0}})],c$2.prototype,"width",void 0),e$4([y$7({type:Number})],c$2.prototype,"lineWidth",void 0),e$4([o$3("lineWidth")],c$2.prototype,"writeLineWidth",null),e$4([c$n("lineWidth")],c$2.prototype,"castLineWidth",null),e$4([y$7({type:Number})],c$2.prototype,"lineHeight",void 0),e$4([o$3("lineHeight")],c$2.prototype,"writeLineHeight",null),c$2=d=e$4([i$9("esri.symbols.TextSymbol")],c$2);var y=c$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var c$1;const n=n$h.getLogger("esri.symbols.WebStyleSymbol");let u=c$1=class extends n$f{constructor(t){super(t),this.styleName=null,this.portal=null,this.styleUrl=null,this.thumbnail=null,this.name=null,this.type="web-style";}read(t,r){this.portal=r?r.portal:void 0,super.read(t,r);}clone(){return new c$1({name:this.name,styleUrl:this.styleUrl,styleName:this.styleName,portal:this.portal})}fetchSymbol(t){return this._fetchSymbol("webRef",t)}fetchCIMSymbol(t){return this._fetchSymbol("cimRef",t)}async _fetchSymbol(t,r){const o=await h$1();h$9(r);const e=o.resolveWebStyleSymbol(this,{portal:this.portal},t,r);return e.catch((t=>{n.error("#fetchSymbol()","Failed to create symbol from style",t);})),e}};function h$1(){return import('./styleUtils-062f64a7.js').then(function (n) { return n.s; })}e$4([y$7({json:{write:!1}})],u.prototype,"color",void 0),e$4([y$7({type:String,json:{write:!0}})],u.prototype,"styleName",void 0),e$4([y$7({type:w$2,json:{write:!1}})],u.prototype,"portal",void 0),e$4([y$7({type:String,json:{read:m$b,write:p$k}})],u.prototype,"styleUrl",void 0),e$4([y$7({type:c$7,json:{read:!1}})],u.prototype,"thumbnail",void 0),e$4([y$7({type:String,json:{write:!0}})],u.prototype,"name",void 0),e$4([r$3({styleSymbolReference:"web-style"},{readOnly:!0})],u.prototype,"type",void 0),u=c$1=e$4([i$9("esri.symbols.WebStyleSymbol")],u);var b=u;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function x(e){if(!e)return !1;switch(e.type){case"picture-fill":case"picture-marker":case"simple-fill":case"simple-line":case"simple-marker":case"text":case"cim":return !0;default:return !1}}function c(e){if(!e)return !1;switch(e.type){case"label-3d":case"line-3d":case"mesh-3d":case"point-3d":case"polygon-3d":return !0;default:return !1}}const j={base:n$f,key:"type",typeMap:{"simple-fill":u$2,"picture-fill":a$1,"picture-marker":n$2,"simple-line":d$9,"simple-marker":y$1,text:y,"label-3d":b$1,"line-3d":u$5,"mesh-3d":a$2,"point-3d":L$1,"polygon-3d":h$3,"web-style":b,cim:d$a},errorContext:"symbol"},D={base:n$f,key:"type",typeMap:{"picture-marker":n$2,"simple-marker":y$1,text:y,"web-style":b,cim:d$a},errorContext:"symbol"},k=u$c({types:j}),M={base:n$f,key:"type",typeMap:{"simple-fill":u$2,"picture-fill":a$1,"picture-marker":n$2,"simple-line":d$9,"simple-marker":y$1,text:y,"line-3d":u$5,"mesh-3d":a$2,"point-3d":L$1,"polygon-3d":h$3,"web-style":b,cim:d$a},errorContext:"symbol"},P={base:n$f,key:"type",typeMap:{text:y,"label-3d":b$1},errorContext:"symbol"},h={base:n$f,key:"type",typeMap:{"line-3d":u$5,"mesh-3d":a$2,"point-3d":L$1,"polygon-3d":h$3,"web-style":b},errorContext:"symbol"},F={base:n$f,key:"type",typeMap:{"label-3d":b$1},errorContext:"symbol"},g=k$2(j);

export { A, p$h as B, D, F, L$1 as L, M, P, c as a, h$3 as b, c$j as c, b as d, d$a as e, d$9 as f, g, h, u$5 as i, j, n$2 as k, l$e as l, y as m, n$f as n, o$1 as o, b$1 as p, k as q, c$7 as r, l$5 as s, u$a as t, u$2 as u, e$3 as v, i$8 as w, x, y$1 as y, t$4 as z };
