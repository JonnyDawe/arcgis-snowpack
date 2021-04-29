import { e as e$3, y, i } from './Identifiable-c8406192.js';
import './config-b3bf08ce.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function n$1(){return function(n,t){if(!n[t])throw new TypeError(`Cannot auto bind undefined function '${t}'`);return {value:e$2(n[t])}}}function t$1(n){const{type:t}=n;return n instanceof KeyboardEvent||"keyup"===t||"keydown"===t||"keypress"===t}function e$2(n){return function(e,...r){t$1(e)?"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),e.stopPropagation(),e.target.click()):n.call(this,e,...r);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function n(n){return n.split(",").map((n=>n.trim()))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function t(t){return a=>{a.hasOwnProperty("_delegatedEventNames")||(a._delegatedEventNames=a._delegatedEventNames?a._delegatedEventNames.slice():[]);const r=a._delegatedEventNames,s=Array.isArray(t)?t:n(t);r.push(...s);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function e$1(n){return n&&"function"==typeof n.highlight}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const e=e=>{let t=class extends e{constructor(...o){super(...o),this.goToOverride=null,this.view=null;}callGoTo(o){const{view:r}=this;return this.goToOverride?this.goToOverride(r,o):r.goTo(o.target,o.options)}};return e$3([y()],t.prototype,"goToOverride",void 0),e$3([y()],t.prototype,"view",void 0),t=e$3([i("esri.widgets.support.GoTo")],t),t};

export { e$1 as a, e, n$1 as n, t };
