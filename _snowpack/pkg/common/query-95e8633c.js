import { P as r, C as U, aX as D, U as U$1 } from './Identifiable-c8406192.js';
import { d as d$1 } from './jsonUtils-d762dc00.js';
import { L } from './normalizeUtils-2bbe7974.js';
import { t as t$1 } from './queryZScale-3f81db56.js';
import { t as t$2 } from './pbfQueryUtils-fdd38078.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function t(n){const o={};for(const e in n){if("declaredClass"===e)continue;const r=n[e];if(null!=r&&"function"!=typeof r)if(Array.isArray(r)){o[e]=[];for(let n=0;n<r.length;n++)o[e][n]=t(r[n]);}else "object"==typeof r?r.toJSON&&(o[e]=JSON.stringify(r)):o[e]=r;}return o}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const l="Layer does not support extent calculation.";function m(e,r$1){const i=e.geometry,o=e.toJSON(),s=o;if(r(i)&&(s.geometry=JSON.stringify(i),s.geometryType=d$1(i),s.inSR=i.spatialReference.wkid||JSON.stringify(i.spatialReference)),o.groupByFieldsForStatistics&&(s.groupByFieldsForStatistics=o.groupByFieldsForStatistics.join(",")),o.objectIds&&(s.objectIds=o.objectIds.join(",")),o.orderByFields&&(s.orderByFields=o.orderByFields.join(",")),!o.outFields||!o.returnDistinctValues&&(null!=r$1&&r$1.returnCountOnly||null!=r$1&&r$1.returnExtentOnly||null!=r$1&&r$1.returnIdsOnly)?delete s.outFields:-1!==o.outFields.indexOf("*")?s.outFields="*":s.outFields=o.outFields.join(","),o.outSR?s.outSR=o.outSR.wkid||JSON.stringify(o.outSR):i&&(o.returnGeometry||o.returnCentroid)&&(s.outSR=s.inSR),o.returnGeometry&&delete o.returnGeometry,o.outStatistics&&(s.outStatistics=JSON.stringify(o.outStatistics)),o.pixelSize&&(s.pixelSize=JSON.stringify(o.pixelSize)),o.quantizationParameters&&(s.quantizationParameters=JSON.stringify(o.quantizationParameters)),o.parameterValues&&(s.parameterValues=JSON.stringify(o.parameterValues)),o.rangeValues&&(s.rangeValues=JSON.stringify(o.rangeValues)),o.dynamicDataSource&&(s.layer=JSON.stringify({source:o.dynamicDataSource}),delete o.dynamicDataSource),o.timeExtent){const t=o.timeExtent,{start:e,end:r}=t;null==e&&null==r||(s.time=e===r?e:`${null==e?"null":e},${null==r?"null":r}`),delete o.timeExtent;}return s}async function y(e,r$1,n,i){const o=r(r$1.timeExtent)&&r$1.timeExtent.isEmpty?{data:{features:[]}}:await g(e,r$1,"json",i);return t$1(r$1,n,o.data),o}async function c(e,r$1,n,i){if(r(r$1.timeExtent)&&r$1.timeExtent.isEmpty)return Promise.resolve({data:n.createFeatureResult()});const o=await d(e,r$1,i),s=o;return s.data=t$2(o.data,n),s}function d(t,e,r){return g(t,e,"pbf",r)}function f(e,r$1,n){return r(r$1.timeExtent)&&r$1.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):g(e,r$1,"json",n,{returnIdsOnly:!0})}function p(e,r$1,n){return r(r$1.timeExtent)&&r$1.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):g(e,r$1,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}function S(e,r$1,n){return r(r$1.timeExtent)&&r$1.timeExtent.isEmpty?Promise.resolve({data:{count:0,extent:null}}):g(e,r$1,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(l);if(e.hasOwnProperty("count"))throw new Error(l);return t}))}function g(n,s,a,l={},y={}){const c="string"==typeof n?U$1(n):n,d=s.geometry?[s.geometry]:[];return l.responseType="pbf"===a?"array-buffer":"json",L(d,null,l).then((r$1=>{const n=r$1&&r$1[0];r(n)&&((s=s.clone()).geometry=n);const o=t({...c.query,f:a,...y,...m(s,y)});return U(D(c.path,"query"),{...l,query:{...o,...l.query}})}))}

var query = /*#__PURE__*/Object.freeze({
	__proto__: null,
	executeQuery: y,
	executeQueryForCount: p,
	executeQueryForExtent: S,
	executeQueryForIds: f,
	executeQueryPBF: c,
	executeQueryPBFBuffer: d,
	queryToQueryStringParameters: m,
	runQuery: g
});

export { S, c, d, f, p, query as q, t, y };
