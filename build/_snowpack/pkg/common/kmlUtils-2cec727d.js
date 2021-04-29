import { y, s as s$1 } from './config-b3bf08ce.js';
import { C as U, A as k$1, bX as s, cs as Rt, ct as f } from './Identifiable-c8406192.js';
import { M } from './PopupTemplate-77ad81c4.js';
import { c as c$1 } from './jsonUtils-abe1bd07.js';
import g$1 from './FeatureSet-ceb33ccf.js';
import { k, a, D, f as f$1 } from './aaBoundingBox-5c7868ad.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const c={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function d(o){const t=o.folders||[],r=t.slice(),s=new Map,n=new Map,i=new Map,a=new Map,f=new Map,l={esriGeometryPoint:n,esriGeometryPolyline:i,esriGeometryPolygon:a};(o.featureCollection&&o.featureCollection.layers||[]).forEach((o=>{const t=y(o);t.featureSet.features=[];const r=o.featureSet.geometryType;s.set(r,t);const f=o.layerDefinition.objectIdField;"esriGeometryPoint"===r?G(n,f,o.featureSet.features):"esriGeometryPolyline"===r?G(i,f,o.featureSet.features):"esriGeometryPolygon"===r&&G(a,f,o.featureSet.features);})),o.groundOverlays&&o.groundOverlays.forEach((e=>{f.set(e.id,e);})),t.forEach((e=>{e.networkLinkIds.forEach((t=>{const s=P(t,e.id,o.networkLinks);s&&r.push(s);}));})),r.forEach((o=>{o.featureInfos&&(o.points=y(s.get("esriGeometryPoint")),o.polylines=y(s.get("esriGeometryPolyline")),o.polygons=y(s.get("esriGeometryPolygon")),o.mapImages=[],o.featureInfos.map((e=>{switch(e.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const t=l[e.type].get(e.id);t&&o[c[e.type]].featureSet.features.push(t);break}case"GroundOverlay":{const t=f.get(e.id);t&&o.mapImages.push(t);break}}})),o.fullExtent=j([o]));}));const u=j(r);return {folders:t,sublayers:r,extent:u}}function g(e,r,s$2,n){const f=s&&s.findCredential(e);e=Rt(e,{token:f&&f.token});const l=s$1.kmlServiceUrl;return U(l,{query:{url:e,model:"simple",folders:"",refresh:0!==s$2||void 0,outSR:JSON.stringify(r)},responseType:"json",signal:n})}function S(e,o,t=null,r=[]){const s=[],n={},i=o.sublayers,a=o.folders.map((e=>e.id));return i.forEach((o=>{const i=new e;if(t?i.read(o,t):i.read(o),r.length&&a.indexOf(i.id)>-1&&(i.visible=-1!==r.indexOf(i.id)),n[o.id]=i,null!=o.parentFolderId&&-1!==o.parentFolderId){const e=n[o.parentFolderId];e.sublayers||(e.sublayers=[]),e.sublayers.unshift(i);}else s.unshift(i);})),s}function G(e,o,t){t.forEach((t=>{e.set(t.attributes[o],t);}));}function h(e,o){let t;return o.some((o=>o.id===e&&(t=o,!0))),t}function P(e,o,t){const r=h(e,t);return r&&(r.parentFolderId=o,r.networkLink=r),r}async function b(e){const o=g$1.fromJSON(e.featureSet).features,t=e.layerDefinition,r=c$1(t.drawingInfo.renderer),s=M.fromJSON(e.popupInfo),i=[];for(const n of o){const e=await r.getSymbolAsync(n);n.symbol=e,n.popupTemplate=s,n.visible=!0,i.push(n);}return i}function j(e){const o=a(),t=a(D);for(const r of e){if(r.polygons&&r.polygons.featureSet&&r.polygons.featureSet.features)for(const e of r.polygons.featureSet.features)f(o,e.geometry),f$1(t,o);if(r.polylines&&r.polylines.featureSet&&r.polylines.featureSet.features)for(const e of r.polylines.featureSet.features)f(o,e.geometry),f$1(t,o);if(r.points&&r.points.featureSet&&r.points.featureSet.features)for(const e of r.points.featureSet.features)f(o,e.geometry),f$1(t,o);if(r.mapImages)for(const e of r.mapImages)f(o,e.extent),f$1(t,o);}return k(t,D)?null:{xmin:t[0],ymin:t[1],zmin:t[2],xmax:t[3],ymax:t[4],zmax:t[5],spatialReference:k$1.WGS84}}

export { S, b, d, g, j };
