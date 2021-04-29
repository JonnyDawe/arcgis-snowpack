import { aM as t, e, y as y$1, a1 as e$1, N, r, i, a } from './Identifiable-c8406192.js';
import './config-b3bf08ce.js';
import { u as u$1, d } from './fieldUtils-a9f71c96.js';
import { i as i$1 } from './fieldType-769fe7ff.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var u;const c=new t({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});let m=u=class extends a{constructor(e){super(e),this.alias=null,this.defaultValue=void 0,this.description=null,this.domain=null,this.editable=!0,this.length=-1,this.name=null,this.nullable=!0,this.type=null,this.valueType=null;}readDescription(e,{description:t}){let o;try{o=JSON.parse(t);}catch(r){}return o?o.value:null}readValueType(e,{description:t}){let o;try{o=JSON.parse(t);}catch(r){}return o?c.fromJSON(o.fieldValueType):null}clone(){return new u({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType})}};e([y$1({type:String,json:{write:!0}})],m.prototype,"alias",void 0),e([y$1({type:[String,Number],json:{write:{allowNull:!0}}})],m.prototype,"defaultValue",void 0),e([y$1()],m.prototype,"description",void 0),e([e$1("description")],m.prototype,"readDescription",null),e([y$1({types:u$1,json:{read:{reader:d},write:!0}})],m.prototype,"domain",void 0),e([y$1({type:Boolean,json:{write:!0}})],m.prototype,"editable",void 0),e([y$1({type:N,json:{write:!0}})],m.prototype,"length",void 0),e([y$1({type:String,json:{write:!0}})],m.prototype,"name",void 0),e([y$1({type:Boolean,json:{write:!0}})],m.prototype,"nullable",void 0),e([r(i$1)],m.prototype,"type",void 0),e([y$1()],m.prototype,"valueType",void 0),e([e$1("valueType",["description"])],m.prototype,"readValueType",null),m=u=e([i("esri.layers.support.Field")],m);var y=m;

export { y };
