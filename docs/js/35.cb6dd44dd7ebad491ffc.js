(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{293:function(e,t,i){"use strict";i.r(t),i.d(t,"csvLatitudeFieldNames",(function(){return E})),i.d(t,"csvLongitudeFieldNames",(function(){return D}));i(25);var n=i(1),l=i(0),r=i(86),s=i(347),o=i(17),a=i(104),d=i(328),u=i(376),c=i(327),f=i(377),m=i(367);i(31),i(8),i(10),i(137),i(41),i(9),i(84),i(83),i(336),i(358),i(329),i(310),i(324),i(72),i(5),i(106),i(71),i(352),i(118),i(221),i(353);const y=/^\s*"([\S\s]*)"\s*$/,p=/""/g,g=[","," ",";","|","\t"];function h(e,t){const i={},n=e.length;for(let l=0;l<n;l++)i[e[l]]=t[l];return i}function*F(e,t,i){let n=0;for(;n<=e.length;){const l=e.indexOf(t,n),r=e.substring(n,l>-1?l:void 0);n+=r.length+1,i&&!r.trim()||(yield r)}}function b(e){const t=e.includes("\r\n")?"\r\n":"\n";return F(e,t,!0)}function I(e,t){return F(e,t,!1)}function N(e){const t=e.trim();let i=0,n="";for(const e of g){const l=t.split(e).length;l>i&&(i=l,n=e)}return""===n?null:n}function*x(e,t,i){let n="",l="",r=0,s=[];e:for(;;){const{value:o,done:a}=e.next();if(a)return;const d=I(o,i);t:for(;;){const{value:e,done:t}=d.next();if(t)break t;if(n+=l+e,l="",r+=_(e),r%2==0){if(r>0){const e=y.exec(n);if(!e){s=[],n="",r=0;continue e}s.push(e[1].replace(p,'"'))}else s.push(n);n="",r=0}else l=i}0===r?(yield h(t,s),s=[]):l="\n"}}function _(e){let t=0,i=0;for(i=e.indexOf('"',i);i>=0;)t++,i=e.indexOf('"',i+1);return t}const T=Object(u.a)("esriGeometryPoint"),w=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong"],E=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point-y"],D=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point-x"],j=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,O=["csv"],v=[0,0];class q{constructor(e,t){this.x=e,this.y=t}}const S=function(){const e=Object(s.a)(),t=new RegExp("^"+e.regexp+"$"),i=new RegExp("["+e.group+"\\s\\xa0]","g"),n=e.factor;return function(l){const r=t.exec(l);if(e.factor=n,!r)return NaN;let s=r[1];if(!r[1]){if(!r[2])return NaN;s=r[2],e.factor*=-1}return s=s.replace(i,"").replace(e.decimal,"."),+s*e.factor}}(),k="isInteger"in Number?Number.isInteger:e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e;t.default=class{constructor(){this._fieldsIndex=null,this._queryEngine=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=null,this._fieldsIndex=null}async load(e,t={}){const[i]=await Promise.all([this._fetch(e.url,t),this._checkProjection(t&&e.parsing&&e.parsing.spatialReference)]),n=this._parse(i,e);if(this._queryEngine=this._createQueryEngine(i,n),n.layerDefinition.extent=this._queryEngine.fullExtent,n.layerDefinition.timeInfo){const{start:e,end:t}=this._queryEngine.timeExtent;n.layerDefinition.timeInfo.timeExtent=[e,t]}return n}async applyEdits(){throw new l.s("csv-source:editing-not-supported","applyEdits() is not supported on CSVLayer")}queryFeatures(e={},t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e={},t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e={},t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e={},t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}async _fetch(e,t){if(!e)throw new l.s("csv-source:invalid-source","url not defined");const i=Object(l.U)(e);return(await Object(l.C)(i.path,{query:i.query,responseType:"text",signal:t.signal})).data}_parse(e,t){const i=t.parsing||{},n={columnDelimiter:i.columnDelimiter,layerDefinition:null,locationInfo:{latitudeFieldName:i.latitudeField,longitudeFieldName:i.longitudeField}},r=b(e);let{value:s}=r.next();if(!s)throw new l.s("csv","CSV is empty",{csv:e});if(s=s.trim(),!i.columnDelimiter){const e=N(s);if(!e)throw new l.s("csv-source:invalid-delimiter","Unable to detect the delimiter from CSV");n.columnDelimiter=e}const o=s.split(n.columnDelimiter),d=n.layerDefinition={name:Object(l.bZ)(t.url,O)||"csv",drawingInfo:T,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:i.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:i.spatialReference||{wkid:102100}}};if(!i.latitudeField||!i.longitudeField){const e=this._inferLocationInfo(o);if(!i.longitudeField&&!e.longitudeFieldName||!i.latitudeField&&!e.latitudeFieldName)throw new l.s("csv","Unable to identify latitudeField and/or longitudeField from CSV");n.locationInfo={longitudeFieldName:i.longitudeField||e.longitudeFieldName,latitudeFieldName:i.latitudeField||e.latitudeFieldName}}const u=this._inferFields(r,n.columnDelimiter,o,n.locationInfo);if(i.fields&&i.fields.length){const e=new Map;for(const t of i.fields)e.set(t.name.toLowerCase(),t);for(const t of u){const i=e.get(t.name.toLowerCase());if(i){const e=t.name;Object.assign(t,i),t.name=e}}}if(d.fields=u,!d.fields.some((e=>"esriFieldTypeOID"===e.type&&(d.objectIdField=e.name,!0)))){const e={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};d.objectIdField=e.name,d.fields.unshift(e)}if(this._fieldsIndex=new a.a(d.fields),d.timeInfo){const e=d.timeInfo;if(e.startTimeField){const t=this._fieldsIndex.get(e.startTimeField);t?(e.startTimeField=t.name,t.type="esriFieldTypeDate"):e.startTimeField=null}if(e.endTimeField){const t=this._fieldsIndex.get(e.endTimeField);t?(e.endTimeField=t.name,t.type="esriFieldTypeDate"):e.endTimeField=null}if(e.trackIdField){const t=this._fieldsIndex.get(e.trackIdField);e.trackIdField=t?t.name:null}e.startTimeField||e.endTimeField||(d.timeInfo=null)}return n}_inferLocationInfo(e){let t=null,i=null;const n=t=>e.find((e=>e.toLowerCase()===t));return D.some((e=>(t=n(e),!!t))),E.some((e=>(i=n(e),!!i))),{longitudeFieldName:t,latitudeFieldName:i}}_inferFields(e,t,i,n){const l=[],r=x(e,i,t),s=[];e:for(;s.length<10;){const{value:e,done:t}=r.next();if(t)break e;s.push(e)}for(const e of i)if(e===n.longitudeFieldName||e===n.latitudeFieldName)l.push({name:e,type:"esriFieldTypeDouble",alias:e});else{const t=s.map((t=>t[e])),i=this._inferFieldType(t),n={name:e,type:null,alias:e};switch(i){case"integer":n.type="esriFieldTypeInteger";break;case"double":n.type="esriFieldTypeDouble";break;case"date":n.type="esriFieldTypeDate",n.length=36;break;default:n.type="esriFieldTypeString",n.length=255}l.push(n)}return l}_inferFieldType(e){if(!e.length)return"string";const t=/[^+-.,0-9]/;return e.map((e=>{let i=!1;if(""!==e){if(t.test(e))i=!0;else{let t=S(e);if(!isNaN(t))return/[.,]/.test(e)||!k(t)||t>214783647||t<-214783648?"double":"integer";if(-1===e.indexOf("E"))i=!0;else{if(t=Number(e),!isNaN(t))return"double";if(-1===e.indexOf(","))i=!0;else{if(e=e.replace(",","."),t=Number(e),!isNaN(t))return"double";i=!0}}}if(i){if(!/^[-]?\d*[.,]?\d*$/.test(e)){const t=new Date(e);return this._isValidDate(t,e)?"date":"string"}return"string"}return"string"}})).reduce(((e,t)=>void 0===e||e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0))}_isValidDate(e,t){if(!e||"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))return!1;let i=!0;if(Object(n.a)("chrome")&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,n=0;for(;!t&&n<=e.length;)t=!j.test(e[n]),n++;i=!t}}return i}_createQueryEngine(e,t){const{latitudeFieldName:i,longitudeFieldName:n}=t.locationInfo,{objectIdField:s,fields:a,extent:u,timeInfo:c}=t.layerDefinition;let y=[];const p=[],g=new Set,h=new Set,F=[];for(const{name:e,type:t}of a)"esriFieldTypeDate"===t?g.add(e):w.indexOf(t)>-1&&h.add(e),e!==s&&F.push(e);let I=0;const N=b(e);N.next();const _=x(N,F,t.columnDelimiter);e:for(;;){const{value:e,done:t}=_.next();if(t)break e;const l=this._parseCoordinateValue(e[i]),r=this._parseCoordinateValue(e[n]);if(null!=r&&null!=l&&!isNaN(l)&&!isNaN(r)){e[i]=l,e[n]=r;for(const t in e)if(t!==i&&t!==n)if(g.has(t)){const i=new Date(e[t]);e[t]=this._isValidDate(i,e[t])?i.getTime():null}else if(h.has(t)){const i=S(e[t]);isNaN(i)?e[t]=null:e[t]=i}e[s]=I,I++,y.push(new q(r,l)),p.push(e)}}if(!Object(l.ak)({wkid:4326},u.spatialReference))if(Object(l.bp)(u.spatialReference))for(const e of y)[e.x,e.y]=Object(l.cm)(e.x,e.y,v);else y=Object(r.c)(d.a,y,l.A.WGS84,u.spatialReference,null);const T=new f.b({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1}),E=new m.a({fields:t.layerDefinition.fields,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:c,objectIdField:s,spatialReference:u.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:T}),D=[];for(let e=0;e<y.length;e++){const{x:t,y:i}=y[e],n=p[e];n[s]=e+1,D.push(new o.c(new o.a([],[t,i]),n,null,n[s]))}return T.addMany(D),E}_parseCoordinateValue(e){if(null==e||""===e)return null;let t=S(e);return(isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t}async _checkProjection(e){try{await Object(c.g)(l.cu,e)}catch{throw new l.s("csv-layer","Projection not supported")}}}}}]);