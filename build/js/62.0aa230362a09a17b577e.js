(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{285:function(e,i,t){"use strict";t.r(i);var s=t(0),a=(t(1),t(20)),r=t(5),n=t(335),h=t(342),c=t(346);t(9),t(3),t(6),t(4),t(13),t(52),t(40),t(317),t(318),t(137),t(31),t(8),t(310),t(84),t(113),t(41),t(314),t(122),t(106),t(337),t(21),t(62),t(26),t(24),t(85),t(48),t(70),t(10),t(109),t(49),t(111),t(71),t(333),t(313),t(312),t(320),t(330),t(7),t(19),t(35),t(54),t(334),t(338),t(344),t(339),t(14),t(16),t(51),t(82),t(329),t(83),t(17),t(322),t(324),t(104),t(331),t(340),t(341),t(321),t(327),t(86),t(328),t(316),t(343),t(332),t(11),t(138),t(43),t(72),t(2),t(15),t(75),t(27),t(89),t(53),t(12),t(44),t(63),t(55),t(119),t(120),t(115),t(47),t(103),t(32),t(57),t(23),t(112),t(108),t(58),t(105),t(110),t(107),t(56),t(116),t(36),t(64),t(42),t(121),t(117),t(114),t(66),t(118),t(123),t(73),t(65),t(74),t(90),t(67),t(325),t(323),t(319),t(326);const o="sublayers",l="layerView",p=Object.freeze({remove(){},pause(){},resume(){}});let u=class extends(Object(n.b)(n.a)){async fetchPopupFeatures(e){return(await Promise.all(Array.from(this.graphicsViews(),(i=>i.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate)))))))).flat()}*graphicsViews(){Object(s.P)(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():Object(s.P)(this._graphicsViews)?yield*this._graphicsViews:yield*[]}async hitTest(e,i){if(this.suspended)return null;const t=Array.from(this.graphicsViews(),(async t=>{const a=await t.hitTest(e,i);if(a){if(Object(s.P)(this._graphicsViewsFeatureCollectionMap)){const e=this._graphicsViewsFeatureCollectionMap.get(t);!a.popupTemplate&&e.popupTemplate&&(a.popupTemplate=e.popupTemplate)}return a}return null}));return(await Promise.all(t)).filter((e=>!!e))[0]||null}highlight(e){let i;if("number"==typeof e?i=[e]:e instanceof a.a?i=[e.uid]:Array.isArray(e)&&e.length>0?i="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):s.L.isCollection(e)&&(i=e.map((e=>e&&e.uid)).toArray()),i=i.filter((e=>null!=e)),!i.length)return p;for(const e of this.graphicsViews())e.addHighlight(i);return{remove:()=>{for(const e of this.graphicsViews())e.removeHighlight(i)}}}update(e){for(const i of this.graphicsViews())i.processUpdate(e)}attach(){const e=this.view,i=()=>this.requestUpdate(),t=this.layer.featureCollections;if(Object(s.P)(t)&&t.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const s of t){const t=new c.a(this.view.featuresTilingScheme);t.fadeTransitionEnabled=!0;const a=new h.a({view:e,graphics:s.source,renderer:s.renderer,requestUpdateCallback:i,container:t});this._graphicsViewsFeatureCollectionMap.set(a,s),this.container.addChild(a.container),this.handles.add([Object(r.g)(s,"visible",(e=>a.container.visible=e)),Object(r.g)(a,"updating",(()=>this.notifyChange("updating")))],l)}}else Object(s.P)(this.layer.sublayers)&&this.handles.add(Object(r.d)(this.layer,"sublayers","change",(()=>this._createGraphicsViews()),(()=>this._createGraphicsViews()),(()=>this._destroyGraphicsViews())),o)}detach(){this._destroyGraphicsViews(),this.handles.remove(o)}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews())e.viewChange()}isUpdating(){for(const e of this.graphicsViews())if(e.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.handles.remove(l);for(const e of this.graphicsViews())e.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),Object(s.J)(this.layer.sublayers))return;const e=[],i=this.view,t=()=>this.requestUpdate();for(const s of this.layer.sublayers){const a=new c.a(this.view.featuresTilingScheme);a.fadeTransitionEnabled=!0;const n=new h.a({view:i,graphics:s.graphics,requestUpdateCallback:t,container:a});this.handles.add([s.on("graphic-update",n.graphicUpdateHandler),Object(r.g)(s,"visible",(e=>n.container.visible=e)),Object(r.g)(n,"updating",(()=>this.notifyChange("updating")))],l),this.container.addChild(n.container),e.push(n)}this._graphicsViews=e}};u=Object(s.e)([Object(s.i)("esri.views.2d.layers.MapNotesLayerView2D")],u);var d=u;i.default=d}}]);