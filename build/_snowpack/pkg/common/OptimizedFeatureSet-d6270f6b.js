/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class t$1{constructor(t=[],s=[],e=!1){this.lengths=null!=t?t:[],this.coords=null!=s?s:[],this.hasIndeterminateRingOrder=e;}get isPoint(){return 0===this.lengths.length}forEachVertex(t){let s=0;this.lengths.length||t(this.coords[0],this.coords[1]);for(let e=0;e<this.lengths.length;e++){const h=this.lengths[e];for(let e=0;e<h;e++){t(this.coords[2*(e+s)],this.coords[2*(e+s)+1]);}s+=h;}}clone(){return new t$1(this.lengths.slice(),this.coords.slice(),this.hasIndeterminateRingOrder)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class t{constructor(t=null,s={},e,h){this.displayId=0,this.geohashX=0,this.geohashY=0,this.geometry=t,s&&(this.attributes=s),e&&(this.centroid=e),null!=h&&(this.objectId=h);}get hasGeometry(){return !(!this.geometry||!this.geometry.coords||!this.geometry.coords.length)}weakClone(){const s=new t(this.geometry,this.attributes,this.centroid,this.objectId);return s.displayId=this.displayId,s.geohashX=this.geohashX,s.geohashY=this.geohashY,s}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class e{constructor(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null;}weakClone(){const t=new e;return t.objectIdFieldName=this.objectIdFieldName,t.globalIdFieldName=this.globalIdFieldName,t.geohashFieldName=this.geohashFieldName,t.geometryProperties=this.geometryProperties,t.geometryType=this.geometryType,t.spatialReference=this.spatialReference,t.hasZ=this.hasZ,t.hasM=this.hasM,t.features=this.features,t.fields=this.fields,t.transform=this.transform,t.exceededTransferLimit=this.exceededTransferLimit,t.uniqueIdField=this.uniqueIdField,t.queryGeometry=this.queryGeometry,t.queryGeometryType=this.queryGeometryType,t}}

export { t$1 as a, e, t };
