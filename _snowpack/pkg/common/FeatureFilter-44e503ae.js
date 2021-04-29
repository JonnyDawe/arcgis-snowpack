import { n, s as s$1, ca as c, P as r } from './Identifiable-c8406192.js';
import { i } from './aaBoundingRect-a3d841c1.js';
import { R } from './Query-448be42b.js';
import { a as v, v as v$1, n as n$1 } from './timeSupport-fe814ad8.js';
import { u as u$1 } from './FeatureStore2D-e26bbb96.js';
import './config-b3bf08ce.js';
import './jsonUtils-d762dc00.js';
import './TimeExtent-155cb8a4.js';
import './Field-e6fe6b12.js';
import './fieldUtils-a9f71c96.js';
import './fieldType-769fe7ff.js';
import './OptimizedFeatureSet-d6270f6b.js';
import './featureConversionUtils-6830a580.js';
import './quantizationUtils-a3fdf3fa.js';
import './projection-1aa78979.js';
import './vec3f64-a6795633.js';
import './vec3-ae5ae182.js';
import './unitUtils-1b0a3531.js';
import './mat4-3619c4da.js';
import './json-79b5edc1.js';
import './normalizeUtils-2bbe7974.js';
import './CircularArray-8c2dd6fa.js';
import './aaBoundingBox-5c7868ad.js';
import './ComputedAttributeStorage-2aa309af.js';
import './TileKey-482fe256.js';
import './TileInfoView-40300351.js';
import './quickselect-558f6195.js';
import './_commonjsHelpers-268aa74f.js';
import './FeatureSetReader-a4e80fde.js';
import './centroid-a0ceb19b.js';
import './diffUtils-e1cd943c.js';
import './FieldsIndex-d0d5f38b.js';
import './definitions-681c54ec.js';
import './Utils-0d5f7d82.js';
import './FramebufferObject-903a1e6f.js';
import './visualVariablesUtils-4c7ed7ac.js';
import './symbols-a702d148.js';
import './persistableUrlUtils-b4be11a9.js';
import './visualVariablesUtils-c37b8ac9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const t=n.getLogger("esri.views.2d.layers.features.support.whereUtils"),a={getAttribute:(e,r)=>e.field(r)};async function s(e,s){const n=await import('./WhereClause-c9442cc5.js');try{const o=n.WhereClause.create(e,s);if(!o.isStandardized){const e=new s$1("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",o);t.error(e);}return e=>{const r=e.readArcadeFeature();return o.testFeature(r,a)}}catch(o){return t.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",e),e=>!0}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const m=n.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter"),_=1,u=2;class p{constructor(t){this._geometryBounds=i(),this._idToVisibility=new Map,this._serviceInfo=t;}get hash(){return this._hash}check(t){return this._applyFilter(t)}clear(){const t=this._resetAllHiddenIds();return this.update(),{show:t,hide:[]}}invalidate(){this._idToVisibility.forEach(((t,e)=>{this._idToVisibility.set(e,0);}));}setKnownIds(t){for(const e of t)this._idToVisibility.set(e,_);}setTrue(t){const e=[],i=[],s=new Set(t);return this._idToVisibility.forEach(((t,r)=>{const o=!!(this._idToVisibility.get(r)&_),h=s.has(r);!o&&h?e.push(r):o&&!h&&i.push(r),this._idToVisibility.set(r,h?_|u:0);})),{show:e,hide:i}}createQuery(){const{geometry:t,spatialRel:e,where:i,timeExtent:s,objectIds:r}=this;return R.fromJSON({geometry:t,spatialRel:e,where:i,timeExtent:s,objectIds:r})}async update(t,e){this._hash=JSON.stringify(t);const i=await v(t,null,e);await Promise.all([this._setGeometryFilter(i),this._setIdFilter(i),this._setAttributeFilter(i),this._setTimeFilter(i)]);}async _setAttributeFilter(t){if(!t||!t.where)return this._clause=null,void(this.where=null);this._clause=await s(t.where,this._serviceInfo.fieldsIndex),this.where=t.where;}_setIdFilter(t){this._idsToShow=t&&t.objectIds&&new Set(t.objectIds),this._idsToHide=t&&t.hiddenIds&&new Set(t.hiddenIds),this.objectIds=t&&t.objectIds;}async _setGeometryFilter(t){if(!t||!t.geometry)return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);const e=t.geometry,i=t.spatialRel||"esriSpatialRelIntersects",r=await v$1(i,e,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);c(this._geometryBounds,e),this._spatialQueryOperator=r,this.geometry=e,this.spatialRel=i;}_setTimeFilter(t){if(this.timeExtent=this._timeOperator=null,t&&t.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=t.timeExtent,this._timeOperator=n$1(this._serviceInfo.timeInfo,t.timeExtent,u$1);else {const e=new s$1("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",t.timeExtent);m.error(e);}}_applyFilter(t){return this._filterByGeometry(t)&&this._filterById(t)&&this._filterByTime(t)&&this._filterByExpression(t)}_filterByExpression(t){return !this.where||this._clause(t)}_filterById(t){return (!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(t.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(t.getObjectId()))}_filterByGeometry(t){if(!this.geometry)return !0;const e=t.readHydratedGeometry();return !!e&&this._spatialQueryOperator(e)}_filterByTime(e){return !r(this._timeOperator)||this._timeOperator(e)}_resetAllHiddenIds(){const t=[];return this._idToVisibility.forEach(((e,i)=>{e&_||(this._idToVisibility.set(i,_),t.push(i));})),t}}

export default p;
