(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{296:function(e,t,i){"use strict";i.r(t);var s=i(0),n=i(9),r=i(6),a=i(82),l=i(83),d=i(104),o=i(398),u=i(376),c=i(327),p=i(377),y=i(367),f=i(399);i(1),i(17),i(41),i(86),i(31),i(8),i(10),i(137),i(328),i(84),i(336),i(358),i(329),i(310),i(324),i(72),i(5),i(106),i(71),i(352),i(118),i(221),i(353);const h={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};t.default=class{constructor(){this._queryEngine=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._requiredFields=this._fieldsIndex=this._createDefaultAttributes=null}async load(e){const t=[];await this._checkProjection(e.spatialReference);let i=null;e.url&&(i=(await Object(s.C)(e.url,{responseType:"json"})).data,await Object(o.a)(i));const n=Object(o.b)(i,{geometryType:e.geometryType}),f=e.fields||n.fields||[],b=null!=e.hasZ?e.hasZ:n.hasZ,g=n.geometryType,m=e.objectIdField||("number"===n.objectIdFieldType?n.objectIdFieldName:"OBJECTID")||"OBJECTID",j=e.spatialReference||s.cu;let I=e.timeInfo;if(!g)throw new s.s("geojson-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if("string"===n.objectIdFieldType&&t.push({name:"geojson-layer:unsupported-id-type",message:"Feature ids are of type string and can't be honored."}),f===n.fields&&n.unknownFields.length>0&&t.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:n.unknownFields}}),m){let e=null;f.some((t=>t.name===m&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):f.unshift({alias:m,name:m,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const e of f){if(null==e.name&&(e.name=e.alias),null==e.alias&&(e.alias=e.name),!e.name)throw new s.s("geojson-layer:invalid-field-name","field name is missing",{field:e});if(e.name===m&&(e.type="esriFieldTypeOID"),-1===a.a.jsonValues.indexOf(e.type))throw new s.s("geojson-layer:invalid-field-type",`invalid type for field "${e.name}"`,{field:e})}const F={};this._requiredFields=[];for(const e of f)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){e.editable=null==e.editable||!!e.editable,e.nullable=null==e.nullable||!!e.nullable;const t=Object(r.u)(e);e.nullable||void 0!==t?F[e.name]=t:this._requiredFields.push(e)}if(this._fieldsIndex=new d.a(f),I){if(I.startTimeField){const e=this._fieldsIndex.get(I.startTimeField);e?(I.startTimeField=e.name,e.type="esriFieldTypeDate"):I.startTimeField=null}if(I.endTimeField){const e=this._fieldsIndex.get(I.endTimeField);e?(I.endTimeField=e.name,e.type="esriFieldTypeDate"):I.endTimeField=null}if(I.trackIdField){const e=this._fieldsIndex.get(I.trackIdField);e?I.trackIdField=e.name:(I.trackIdField=null,t.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:I}}))}I.startTimeField||I.endTimeField||(t.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:I}}),I=null)}const _={warnings:t,featureErrors:[],layerDefinition:{...h,drawingInfo:Object(u.a)(g),templates:Object(u.c)(F),extent:null,geometryType:g,objectIdField:m,fields:f,hasZ:!!b,timeInfo:I}};this._queryEngine=new y.a({fields:f,geometryType:g,hasM:!1,hasZ:b,objectIdField:m,spatialReference:j,timeInfo:I,featureStore:new p.b({geometryType:g,hasM:!1,hasZ:b}),cacheSpatialQueries:!0}),this._createDefaultAttributes=Object(u.b)(F,m),this._nextObjectId=n.maxObjectId+1;const O=Object(o.c)(i,{geometryType:g,hasZ:b,objectIdFieldName:"number"===n.objectIdFieldType?m:null});if(!Object(s.ak)(j,s.cu))for(const e of O)e.geometry&&(e.geometry=Object(l.l)(Object(c.j)(Object(l.p)(e.geometry,g,b,!1),s.cu,j)));return this._loadInitialFeatures(_,O),_}async applyEdits(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await Promise.all([Object(f.e)(t,i),Object(c.g)(e.adds,t),Object(c.g)(e.updates,t)]),this._applyEdits(e)}queryFeatures(e={},t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e={},t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e={},t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e={},t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_loadInitialFeatures(e,t){const{featureStore:i,objectIdField:s}=this._queryEngine,n=[];for(const i of t){const t=this._createDefaultAttributes(),r=Object(f.b)(this._fieldsIndex,this._requiredFields,t,i.attributes,!0,e.warnings);r?e.featureErrors.push(r):(this._assignObjectId(t,i.attributes,!0),i.attributes=t,i.objectId=t[s],n.push(i))}if(i.addMany(n),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:i}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,i]}return e}_applyEdits(e){const{adds:t,updates:i,deletes:s}=e,n={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(n,t),i&&i.length&&this._applyUpdateEdits(n,i),s&&s.length){for(const e of s)n.deleteResults.push(Object(f.a)(e));this._queryEngine.featureStore.removeManyById(s)}return{fullExtent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:n}}_applyAddEdits(e,t){const{addResults:i}=e,{geometryType:s,hasM:r,hasZ:a,objectIdField:d,spatialReference:o,featureStore:u}=this._queryEngine,p=[];for(const r of t){if(r.geometry&&s!==Object(n.b)(r.geometry)){i.push(Object(f.d)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),a=Object(f.b)(this._fieldsIndex,this._requiredFields,t,r.attributes);if(a)i.push(a);else{if(this._assignObjectId(t,r.attributes),r.attributes=t,null!=r.uid){const t=r.attributes[d];e.uidToObjectId[r.uid]=t}r.geometry&&(r.geometry=Object(c.j)(Object(f.c)(r.geometry,o),r.geometry.spatialReference,o)),p.push(r),i.push(Object(f.a)(r.attributes[d]))}}u.addMany(Object(l.g)([],p,s,a,r,d))}_applyUpdateEdits({updateResults:e},t){const{geometryType:i,hasM:s,hasZ:r,objectIdField:a,spatialReference:d,featureStore:o}=this._queryEngine;for(const u of t){const{attributes:t,geometry:p}=u,y=t&&t[a];if(null==y){e.push(Object(f.d)(`Identifier field ${a} missing`));continue}if(!o.has(y)){e.push(Object(f.d)(`Feature with object id ${y} missing`));continue}const h=Object(l.k)(o.getFeature(y),i,r,s);if(p){if(i!==Object(n.b)(p)){e.push(Object(f.d)("Incorrect geometry type."));continue}h.geometry=Object(c.j)(Object(f.c)(p,d),p.spatialReference,d)}if(t){const i=Object(f.b)(this._fieldsIndex,this._requiredFields,h.attributes,t);if(i){e.push(i);continue}}o.add(Object(l.f)(h,i,r,s,a)),e.push(Object(f.a)(y))}}_assignObjectId(e,t,i=!1){const s=this._queryEngine.objectIdField;i&&isFinite(t[s])?e[s]=t[s]:e[s]=this._nextObjectId++}async _checkProjection(e){try{await Object(c.g)(s.cu,e)}catch{throw new s.s("geojson-layer","Projection not supported")}}}}}]);