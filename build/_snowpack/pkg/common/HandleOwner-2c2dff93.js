import { e, y, i, u, w as u$1, J as t, b8 as r, a7 as k, b9 as o } from './Identifiable-c8406192.js';
import { d as d$1, C } from './watchUtils-880dbce7.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let l=class extends u{constructor(){super(...arguments),this.updating=!1,this.handleId=0,this.handles=new u$1,this.scheduleHandleId=0,this.pendingPromises=new Set;}destroy(){this.removeAll(),this.handles.destroy();}add(e,s,t,r=0){const d=0!=(1&r),i=++this.handleId;d||this.installSyncUpdatingWatch(e,s,i);const n=0!=(2&r)?d$1(e,s,t,d):e.watch(s,t,d);return this.handles.add(n,i),{remove:()=>{this.handles.remove(i);}}}addOnCollectionPropertyChange(e,s,t,r=0){const d=0!=(2&r),i=++this.handleId;return this.handles.add([C(e,s,"after-changes",this.createSyncUpdatingCallback()),C(e,s,"change",t,d?e=>{t({added:e.items,removed:[],moved:[],target:e});}:void 0)],i),{remove:()=>{this.handles.remove(i);}}}addOnCollectionChange(e,s,t=0){const r=0!=(2&t),d=++this.handleId;return this.handles.add([e.on("after-changes",this.createSyncUpdatingCallback()),e.on("change",s)],d),r&&s({added:e.items,removed:[],moved:[],target:e}),{remove:()=>{this.handles.remove(d);}}}addPromise(e){if(t(e))return e;const t$1=++this.handleId;this.handles.add({remove:()=>{this.pendingPromises.delete(e)&&(0!==this.pendingPromises.size||this.handles.has(p)||this._set("updating",!1));}},t$1),this.pendingPromises.add(e),this._set("updating",!0);const r=()=>this.handles.remove(t$1);return e.then(r,r),e}removeAll(){this.pendingPromises.clear(),this.handles.removeAll(),this._set("updating",!1);}installSyncUpdatingWatch(e,s,r$1){const d=this.createSyncUpdatingCallback(),i=r((()=>o(e,s)),d);return this.handles.add(i,r$1),i}createSyncUpdatingCallback(){return ()=>{this.handles.remove(p),++this.scheduleHandleId;const e=this.scheduleHandleId;this._get("updating")||this._set("updating",!0),this.handles.add(k((()=>{e===this.scheduleHandleId&&(this._set("updating",this.pendingPromises.size>0),this.handles.remove(p));})),p);}}};e([y({readOnly:!0})],l.prototype,"updating",void 0),l=e([i("esri.views.support.WatchUpdatingTracking")],l);const p=-42;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const a=t=>{let a=class extends t{destroy(){this.destroyed||(this.handles.destroy(),this.updatingHandles.destroy());}get handles(){return this._get("handles")||new u$1}get updatingHandles(){return this._get("updatingHandles")||new l}};return e([y({readOnly:!0})],a.prototype,"handles",null),e([y({readOnly:!0})],a.prototype,"updatingHandles",null),a=e([i("esri.core.HandleOwner")],a),a};let d=class extends(a(u)){};d=e([i("esri.core.HandleOwner")],d);

export { a, d, l };
