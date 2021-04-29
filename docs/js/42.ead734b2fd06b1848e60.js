(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{412:function(e,t,i){"use strict";i.r(t);var s=i(0),r=i(84),o=i(14),n=i(353),a=i(401);i(1),i(9),i(16),i(51),i(6),i(82),i(17),i(83),i(327),i(86),i(31),i(8),i(10),i(137),i(328),i(106),i(355),i(336),i(339),i(54),i(35),i(329),i(310),i(322),i(324),i(109),i(104),i(314),i(313),i(312),i(331),i(4),i(13),i(330);const h=s.n.getLogger("esri.views.2d.layers.features.support.whereUtils"),l={getAttribute:(e,t)=>e.field(t)};async function d(e,t){const r=await i.e(0).then(i.bind(null,221));try{const i=r.WhereClause.create(e,t);if(!i.isStandardized){const e=new s.s("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",i);h.error(e)}return e=>{const t=e.readArcadeFeature();return i.testFeature(t,l)}}catch(t){return h.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",e),e=>!0}}const c=s.n.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter");t.default=class{constructor(e){this._geometryBounds=Object(r.f)(),this._idToVisibility=new Map,this._serviceInfo=e}get hash(){return this._hash}check(e){return this._applyFilter(e)}clear(){const e=this._resetAllHiddenIds();return this.update(),{show:e,hide:[]}}invalidate(){this._idToVisibility.forEach(((e,t)=>{this._idToVisibility.set(t,0)}))}setKnownIds(e){for(const t of e)this._idToVisibility.set(t,1)}setTrue(e){const t=[],i=[],s=new Set(e);return this._idToVisibility.forEach(((e,r)=>{const o=!!(1&this._idToVisibility.get(r)),n=s.has(r);!o&&n?t.push(r):o&&!n&&i.push(r),this._idToVisibility.set(r,n?3:0)})),{show:t,hide:i}}createQuery(){const{geometry:e,spatialRel:t,where:i,timeExtent:s,objectIds:r}=this;return o.b.fromJSON({geometry:e,spatialRel:t,where:i,timeExtent:s,objectIds:r})}async update(e,t){this._hash=JSON.stringify(e);const i=await Object(n.f)(e,null,t);await Promise.all([this._setGeometryFilter(i),this._setIdFilter(i),this._setAttributeFilter(i),this._setTimeFilter(i)])}async _setAttributeFilter(e){if(!e||!e.where)return this._clause=null,void(this.where=null);this._clause=await d(e.where,this._serviceInfo.fieldsIndex),this.where=e.where}_setIdFilter(e){this._idsToShow=e&&e.objectIds&&new Set(e.objectIds),this._idsToHide=e&&e.hiddenIds&&new Set(e.hiddenIds),this.objectIds=e&&e.objectIds}async _setGeometryFilter(e){if(!e||!e.geometry)return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);const t=e.geometry,i=e.spatialRel||"esriSpatialRelIntersects",r=await Object(n.j)(i,t,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);Object(s.ca)(this._geometryBounds,t),this._spatialQueryOperator=r,this.geometry=t,this.spatialRel=i}_setTimeFilter(e){if(this.timeExtent=this._timeOperator=null,e&&e.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=Object(n.h)(this._serviceInfo.timeInfo,e.timeExtent,a.d);else{const t=new s.s("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);c.error(t)}}_applyFilter(e){return this._filterByGeometry(e)&&this._filterById(e)&&this._filterByTime(e)&&this._filterByExpression(e)}_filterByExpression(e){return!this.where||this._clause(e)}_filterById(e){return(!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(e.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(e.getObjectId()))}_filterByGeometry(e){if(!this.geometry)return!0;const t=e.readHydratedGeometry();return!!t&&this._spatialQueryOperator(t)}_filterByTime(e){return!Object(s.P)(this._timeOperator)||this._timeOperator(e)}_resetAllHiddenIds(){const e=[];return this._idToVisibility.forEach(((t,i)=>{1&t||(this._idToVisibility.set(i,1),e.push(i))})),e}}}}]);