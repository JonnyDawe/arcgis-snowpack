import { U, P as r, bs as Ut, bt as gt, aX as D } from './Identifiable-c8406192.js';
import { p as p$1 } from './persistableUrlUtils-b4be11a9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const u=["MapServer","ImageServer","FeatureServer","SceneServer","StreamServer","VectorTileServer"],a=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/(${u.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),c=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/([^\\/\\n]+)\\/(${u.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),f=/(.*)\/(\d+)\/?$/i;function p(e){return !!a.test(e)}function d(e){const t=U(e),n=t.path.match(a)||t.path.match(c);if(!n)return null;const[,s,i,o,l]=n,u=i.indexOf("/");return {title:v(-1!==u?i.slice(u+1):i),serverType:o,sublayer:null!=l&&""!==l?parseInt(l,10):null,url:{path:s}}}function m(e){const t=U(e).path.match(f);return t?{serviceUrl:t[1],sublayerId:Number(t[2])}:null}function v(e){return (e=e.replace(/\s*[/_]+\s*/g," "))[0].toUpperCase()+e.slice(1)}function h(r$1,t){const n=[];if(r$1){const t=d(r$1);r(t)&&t.title&&n.push(t.title);}if(t){const e=v(t);n.push(e);}if(2===n.length){if(-1!==n[0].toLowerCase().indexOf(n[1].toLowerCase()))return n[0];if(-1!==n[1].toLowerCase().indexOf(n[0].toLowerCase()))return n[1]}return n.join(" - ")}function w(e){if(!e)return !1;const r=".arcgis.com/",t="//services",n="//tiles",s="//features",i=-1!==(e=e.toLowerCase()).indexOf(r),o=-1!==e.indexOf(t)||-1!==e.indexOf(n)||-1!==e.indexOf(s);return i&&o}function y(e,r){return e?gt(Ut(e,r)):e}function g(s){let{url:i}=s;if(!i)return {url:i};i=Ut(i,s.logger);const o=U(i),l=d(o.path);let u;if(r(l))null!=l.sublayer&&null==s.layer.layerId&&(u=l.sublayer),i=l.url.path;else if(s.nonStandardUrlAllowed){const r$1=m(o.path);r(r$1)&&(i=r$1.serviceUrl,u=r$1.sublayerId);}return {url:gt(i),layerId:u}}function O(e,r,t,n,i){p$1(r,n,"url",i),n.url&&null!=e.layerId&&(n.url=D(n.url,t,e.layerId.toString()));}function S(e){if(!e)return !1;const r=e.toLowerCase(),t=-1!==r.indexOf("/services/"),n=-1!==r.indexOf("/mapserver/wmsserver"),s=-1!==r.indexOf("/imageserver/wmsserver"),i=-1!==r.indexOf("/wmsserver");return t&&(n||s||i)}

export { O, S, d, g, h, m, p, v, w, y };
