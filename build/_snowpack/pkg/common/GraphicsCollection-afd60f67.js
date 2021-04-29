import { L, n as n$1, e, y, i, aW as t, c as n$2 } from './Identifiable-c8406192.js';
import './config-b3bf08ce.js';
import { n } from './Graphic-9f79c7db.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const p=L.ofType(n);n$1.getLogger("esri.support.GraphicsCollection");let a=class extends p{constructor(r){super(r),this.on("before-add",(r=>{r.item||r.preventDefault();})),this.on("after-add",(r=>this._own(r.item))),this.on("after-remove",(({item:r})=>{r.layer=null;}));}destroy(){this._unownAll();}get owner(){return this._get("owner")}set owner(r){r!==this._get("owner")&&(this._unownAll(),this._set("owner",r),this._ownAll());}_createNewInstance(r){return new p(r)}_ownAll(){this.items.forEach((r=>this._own(r)));}_own(r){r.layer&&"remove"in r.layer&&r.layer!==this.owner&&r.layer.remove(r),r.layer=this.owner;}_unownAll(){this.items.forEach((r=>this._unown(r)));}_unown(r){r.layer===this.owner&&(r.layer=null);}};e([y()],a.prototype,"owner",null),a=e([i("esri.support.GraphicsCollection")],a);const u=(r="graphics")=>({type:a,cast:t,set(o){const e=n$2(o,this._get(r),a);e.owner=this,this._set(r,e);}});var m=a;

export { a, m, u };
