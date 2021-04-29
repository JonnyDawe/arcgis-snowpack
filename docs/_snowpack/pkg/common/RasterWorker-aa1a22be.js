import { M } from './Identifiable-c8406192.js';
import { u, r, U, p, C } from './pixelUtils-5dbb0680.js';
import { T, N } from './RasterSymbolizer-2f04c461.js';
import './config-b3bf08ce.js';
import './_commonjsHelpers-268aa74f.js';
import './LercCodec-85783494.js';
import './colorUtils-0d76b80c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class n{async decode(e){const r=await T(e.data,e.options);return r&&r.toJSON()}symbolize(s){s.pixelBlock=u.fromJSON(s.pixelBlock),s.extent=s.extent?M.fromJSON(s.extent):null;const o=this.symbolizer.symbolize(s);return Promise.resolve(o&&o.toJSON())}async updateSymbolizer(e){var r;this.symbolizer=N.fromJSON(e.symbolizerJSON),e.histograms&&"rasterStretch"===(null==(r=this.symbolizer)?void 0:r.rendererJSON.type)&&(this.symbolizer.rendererJSON.histograms=e.histograms);}stretch(e){const s=this.symbolizer.simpleStretch(u.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve(s&&s.toJSON())}estimateStatisticsHistograms(e){const s=r(u.fromJSON(e.srcPixelBlock));return Promise.resolve(s)}split(e){const s=U(u.fromJSON(e.srcPixelBlock),e.tileSize,e.maximumPyramidLevel);return s&&s.forEach(((e,r)=>{s.set(r,null==e?void 0:e.toJSON());})),Promise.resolve(s)}async mosaicAndTransform(e){const s=e.srcPixelBlocks.map((e=>e?new u(e):null)),o=p(s,e.srcMosaicSize);if(!e.coefs)return o&&o.toJSON();const t=C(o,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation);return t&&t.toJSON()}}

export default n;
