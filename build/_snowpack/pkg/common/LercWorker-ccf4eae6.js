import { m } from './LercCodec-85783494.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class r{_decode(r){const s=m(r.buffer,r.options);return Promise.resolve({result:s,transferList:[s.pixelData.buffer]})}}function s(){return new r}

export default s;
