import { s } from './Identifiable-c8406192.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class r{constructor(t,r,o=""){this.major=t,this.minor=r,this._context=o;}lessThan(t,r){return this.major<t||t===this.major&&this.minor<r}since(t,r){return !this.lessThan(t,r)}validate(r){if(this.major!==r.major){const o=this._context&&this._context+":",s$1=this._context&&this._context+" ";throw new s(o+"unsupported-version",`Required major ${s$1}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:r})}}clone(){return new r(this.major,this.minor,this._context)}static parse(o,s$1=""){const[e,i]=o.split("."),n=/^\s*\d+\s*$/;if(!e||!e.match||!e.match(n)){throw new s((s$1&&s$1+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:o})}if(!i||!i.match||!i.match(n)){throw new s((s$1&&s$1+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:o})}const a=parseInt(e,10),h=parseInt(i,10);return new r(a,h,s$1)}}

export { r };
