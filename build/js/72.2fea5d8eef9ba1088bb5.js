(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{302:function(e,s,t){"use strict";t.r(s);t(18);var r=t(0),o=t(349),i=t(380);t(1),t(310),t(368),t(350);s.default=class{async decode(e){const s=await Object(i.d)(e.data,e.options);return s&&s.toJSON()}symbolize(e){e.pixelBlock=o.p.fromJSON(e.pixelBlock),e.extent=e.extent?r.M.fromJSON(e.extent):null;const s=this.symbolizer.symbolize(e);return Promise.resolve(s&&s.toJSON())}async updateSymbolizer(e){var s;this.symbolizer=i.c.fromJSON(e.symbolizerJSON),e.histograms&&"rasterStretch"===(null==(s=this.symbolizer)?void 0:s.rendererJSON.type)&&(this.symbolizer.rendererJSON.histograms=e.histograms)}stretch(e){const s=this.symbolizer.simpleStretch(o.p.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve(s&&s.toJSON())}estimateStatisticsHistograms(e){const s=Object(o.n)(o.p.fromJSON(e.srcPixelBlock));return Promise.resolve(s)}split(e){const s=Object(o.b)(o.p.fromJSON(e.srcPixelBlock),e.tileSize,e.maximumPyramidLevel);return s&&s.forEach(((e,t)=>{s.set(t,null==e?void 0:e.toJSON())})),Promise.resolve(s)}async mosaicAndTransform(e){const s=e.srcPixelBlocks.map((e=>e?new o.p(e):null)),t=Object(o.m)(s,e.srcMosaicSize);if(!e.coefs)return t&&t.toJSON();const r=Object(o.a)(t,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation);return r&&r.toJSON()}}}}]);