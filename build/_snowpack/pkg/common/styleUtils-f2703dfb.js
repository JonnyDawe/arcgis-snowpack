import { ax as o, h, aU as t$1 } from './Identifiable-c8406192.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function t(t,i,n){const s=t&&t.getAtOrigin&&t.getAtOrigin("renderer",i.origin);if(s&&"unique-value"===s.type&&s.styleOrigin){const a=await o(s.populateFromStyle());if(h(n),!1===a.ok){const r=a.error;i&&i.messages&&i.messages.push(new t$1("renderer:style-reference",`Failed to create unique value renderer from style reference: ${r.message}`,{error:r,context:i})),t.clear("renderer",i.origin);}}}

export { t };
