import { y, a as t } from './config-b3bf08ce.js';
import { l, o, S } from './defaultsJSON-375e89aa.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function i(t){return {renderer:{type:"simple",symbol:"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?l:"esriGeometryPolyline"===t?o:S}}}function s(r,e){if(t("csp-restrictions"))return ()=>({[e]:null,...r});try{let t=`this.${e} = null;`;for(const e in r){t+=`this${e.indexOf(".")?`["${e}"]`:`.${e}`} = ${JSON.stringify(r[e])};`;}const n=new Function(t);return ()=>new n}catch(n){return ()=>({[e]:null,...r})}}function u(t={}){return [{name:"New Feature",description:"",prototype:{attributes:y(t)}}]}

export { i, s, u };
