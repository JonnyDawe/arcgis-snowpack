import { n as n$1, e, y as y$1, i, L, c as n$2, S } from './Identifiable-c8406192.js';
import './config-b3bf08ce.js';
import { b } from './Layer-d22ad00d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function l$1(e){return e&&"group"===e.type}function d(e,r,t){let s,o;if(e)for(let i=0,a=e.length;i<a;i++){if(s=e.getItemAt(i),s[r]===t)return s;if(l$1(s)&&(o=d(s.layers,r,t),o))return o}}const y=n$1.getLogger("esri.support.LayersMixin"),p$1=r=>{let l=class extends r{constructor(...e){super(...e),this.layers=new L;const r=e=>{e.parent&&"remove"in e.parent&&e.parent.remove(e);},t=e=>{e.parent=this,this.layerAdded(e),"elevation"!==e.type&&"base-elevation"!==e.type||y.error(`Layer 'title:${e.title}, id:${e.id}' of type '${e.type}' is not supported as an operational layer and will therefore be ignored.`);},s=e=>{e.parent=null,this.layerRemoved(e);};this.layers.on("before-add",(e=>r(e.item))),this.layers.on("after-add",(e=>t(e.item))),this.layers.on("after-remove",(e=>s(e.item)));}destroy(){const e=this.layers.removeAll();for(const r of e)this.layerRemoved(r),r.destroy();this.layers.destroy();}set layers(e){this._set("layers",n$2(e,this._get("layers")));}add(e,r){const t=this.layers;r=t.getNextIndex(r),e instanceof b?e.parent===this?this.reorder(e,r):t.add(e,r):S(e)?e.then((e=>{this.destroyed||this.add(e,r);})):y.error("#add()","The item being added is not a Layer or a Promise that resolves to a Layer.");}addMany(e,r){const t=this.layers;r=t.getNextIndex(r),e.slice().forEach((e=>{e.parent!==this?(t.add(e,r),r+=1):this.reorder(e,r);}));}findLayerById(e){return d(this.layers,"id",e)}findLayerByUid(e){return d(this.layers,"uid",e)}remove(e){return this.layers.remove(e)}removeMany(e){return this.layers.removeMany(e)}removeAll(){return this.layers.removeAll()}reorder(e,r){return this.layers.reorder(e,r)}layerAdded(e){}layerRemoved(e){}};return e([y$1()],l.prototype,"layers",null),l=e([i("esri.support.LayersMixin")],l),l};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const n="esri.support.TablesMixin",a=n$1.getLogger(n);function l(t){return t&&"group"===t.type}function p(t,e,r){if(t)for(let s=0,o=t.length;s<o;s++){const o=t.getItemAt(s);if(o[e]===r)return o;if(l(o)){const t=p(o.tables,e,r);if(t)return t}}}const c=e$1=>{let l=class extends e$1{constructor(...t){super(...t),this.tables=new L,this.tables.on("after-add",(t=>{const e=t.item;e.parent&&e.parent!==this&&"tables"in e.parent&&e.parent.tables.remove(e),e.parent=this,"feature"!==e.type&&a.error(`Layer 'title:${e.title}, id:${e.id}' of type '${e.type}' is not supported as a table and will therefore be ignored.`);})),this.tables.on("after-remove",(t=>{t.item.parent=null;}));}destroy(){const t=this.tables.removeAll();for(const e of t)e.destroy();this.tables.destroy();}set tables(t){this._set("tables",n$2(t,this._get("tables")));}findTableById(t){return p(this.tables,"id",t)}findTableByUid(t){return p(this.tables,"uid",t)}};return e([y$1()],l.prototype,"tables",null),l=e([i(n)],l),l};

export { c, p$1 as p };
