import { e, y, i, L, w as u } from './Identifiable-c8406192.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let r=class extends L{constructor(t){super(t),this._handles=new u,this.root=null;}initialize(){this._handles.add(this.rootCollectionNames.map((t=>this.watch("root."+t,(()=>this.updateCollections()),!0)))),this.updateCollections();}destroy(){this.root=null,this.refresh(),this._handles.destroy(),this._handles=null;}updateCollections(){this._collections=this.rootCollectionNames.map((t=>this.get("root."+t))).filter((t=>null!=t)),this.refresh();}refresh(){const t=this._handles;t.remove("collections");const o=new Array;let e=0;for(const s of this._collections)e=this._processCollection(o,e,s);this.splice(e,this.length);for(const s of o)t.add(s.on("after-changes",(()=>this.refresh())),"collections");}_createNewInstance(t){return new L(t)}_processCollection(t,o,e){return e?(t.push(e),e.forEach((e=>{if(e){if(!this.itemFilterFunction||this.itemFilterFunction(e)){const t=this.indexOf(e,o);t>=0?t!==o&&this.reorder(e,o):this.add(e,o),++o;}this.getChildrenFunction&&(o=this._processCollection(t,o,this.getChildrenFunction(e)));}})),o):o}};e([y()],r.prototype,"rootCollectionNames",void 0),e([y()],r.prototype,"root",void 0),e([y()],r.prototype,"getChildrenFunction",void 0),e([y()],r.prototype,"itemFilterFunction",void 0),r=e([i("esri.core.CollectionFlattener")],r);var l=r;

export { l };
