import { i } from './MemCache-1f56f5a2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class e{constructor(e,s){this._storage=new i,this._storage.maxSize=e,s&&this._storage.registerRemoveFunc("",s);}put(t,e,s){this._storage.put(t,e,s,1);}pop(t){return this._storage.pop(t)}get(t){return this._storage.get(t)}clear(){this._storage.clearAll();}destroy(){this._storage.destroy();}get maxSize(){return this._storage.maxSize}set maxSize(t){this._storage.maxSize=t;}}

export { e };
