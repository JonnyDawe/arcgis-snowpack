import { U, e as e$1, y, i as i$1, u } from './Identifiable-c8406192.js';
import './config-b3bf08ce.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function e(t,e){let r={query:t};return e&&(r={...e,...r},r.query={...r.query,...e.query}),r}function r(e){return "string"==typeof e?U(e):e}function n(t,e,r){const o={};for(const i in t){if("declaredClass"===i)continue;const f=t[i];if(null!=f&&"function"!=typeof f)if(Array.isArray(f)){o[i]=[];for(let t=0;t<f.length;t++)o[i][t]=n(f[t]);}else if("object"==typeof f)if(f.toJSON){const t=f.toJSON(r&&r[i]);o[i]=e?t:JSON.stringify(t);}else o[i]=e?f:JSON.stringify(f);else o[i]=f;}return o}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let i=class extends u{constructor(...r){super(...r),this.requestOptions=null,this.url=null;}normalizeCtorArgs(r,o){return "string"!=typeof r?r:{url:r,...o}}get parsedUrl(){return this._parseUrl(this.url)}_parseUrl(r){return r?U(r):null}_encode(r,o,s){const e={};for(const t in r){if("declaredClass"===t)continue;const i=r[t];if(null!=i&&"function"!=typeof i)if(Array.isArray(i)){e[t]=[];for(let r=0;r<i.length;r++)e[t][r]=this._encode(i[r]);}else if("object"==typeof i)if(i.toJSON){const r=i.toJSON(s&&s[t]);e[t]=o?r:JSON.stringify(r);}else e[t]=o?i:JSON.stringify(i);else e[t]=i;}return e}};e$1([y({readOnly:!0})],i.prototype,"parsedUrl",null),e$1([y()],i.prototype,"requestOptions",void 0),e$1([y({type:String})],i.prototype,"url",void 0),i=e$1([i$1("esri.tasks.Task")],i);var p=i;

export { e, n, p, r };
