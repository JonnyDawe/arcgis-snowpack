(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{284:function(e,t,a){"use strict";a.r(t);var r=a(0),i=(a(1),a(90)),s=a(138),n=a(335),o=a(356),h=a(342),c=a(6),p=a(23),l=a(395),d=a(364),u=a(357),m=a(365),g=a(373),y=a(313);a(20),a(9),a(3),a(4),a(13),a(52),a(43),a(5),a(72),a(2),a(40),a(15),a(75),a(10),a(27),a(14),a(16),a(51),a(82),a(89),a(53),a(12),a(44),a(106),a(63),a(55),a(119),a(17),a(120),a(48),a(83),a(115),a(47),a(103),a(32),a(57),a(21),a(62),a(26),a(24),a(85),a(70),a(109),a(49),a(111),a(71),a(104),a(112),a(108),a(58),a(105),a(110),a(107),a(56),a(116),a(36),a(64),a(42),a(113),a(41),a(121),a(117),a(114),a(66),a(31),a(118),a(35),a(54),a(123),a(8),a(73),a(84),a(65),a(74),a(11),a(7),a(19),a(67),a(86),a(137),a(122),a(317),a(318),a(310),a(314),a(337),a(333),a(320),a(330),a(334),a(338),a(344),a(339),a(329),a(322),a(324),a(331),a(340),a(341),a(321),a(327),a(328),a(312),a(316),a(343),a(332),a(325),a(323),a(319),a(326),a(366),a(345);const b=e=>{let t=class extends e{initialize(){this.exportImageParameters=new l.a({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(e,t){const{layer:a}=this;if(!e)return Promise.reject(new r.s("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a}));const i=this.get("view.scale"),s=[],n=async e=>{const a=0===e.minScale||i<=e.minScale,o=0===e.maxScale||i>=e.maxScale;if(e.visible&&a&&o)if(e.sublayers)e.sublayers.forEach(n);else if(e.popupEnabled){const a=Object(u.a)(e,{...t,defaultPopupTemplateEnabled:!1});Object(r.P)(a)&&s.unshift({sublayer:e,popupTemplate:a})}},o=a.sublayers.toArray().reverse().map(n);await Promise.all(o);const h=s.map((async({sublayer:a,popupTemplate:i})=>{await a.load().catch((()=>{}));const s=a.createQuery(),n=Object(r.P)(t)?t.event:null,o=Object(d.a)({renderer:a.renderer,event:n}),h=this.createFetchPopupFeaturesQueryGeometry(e,o);s.geometry=h,s.outFields=await Object(u.b)(a,i);const c=await this._loadArcadeModules(i);return c&&c.arcadeUtils.hasGeometryOperations(i)||(s.maxAllowableOffset=h.width/o),(await a.queryFeatures(s)).features}));return(await Object(r.E)(h)).reduce(((e,t)=>t.value?[...e,...t.value]:e),[]).filter((e=>null!=e))}canResume(){var e;return!(!super.canResume()||null!=(e=this.timeExtent)&&e.isEmpty)}_loadArcadeModules(e){if(e.get("expressionInfos.length"))return Object(c.k)()}};return Object(r.e)([Object(r.y)()],t.prototype,"exportImageParameters",void 0),Object(r.e)([Object(r.y)({readOnly:!0})],t.prototype,"exportImageVersion",null),Object(r.e)([Object(r.y)()],t.prototype,"layer",void 0),Object(r.e)([Object(r.y)()],t.prototype,"suspended",void 0),Object(r.e)([Object(r.y)(p.n)],t.prototype,"timeExtent",void 0),t=Object(r.e)([Object(r.i)("esri.views.layers.MapImageLayerView")],t),t};let w=class extends h.b{renderChildren(e){if(e.drawPhase!==y.d.HIGHLIGHT)return;if(this.attributeView.bindTextures(e.context),!this.children.some((e=>e.hasData)))return;super.renderChildren(e);const{painter:t}=e,a=t.effects.highlight;a.bind(e),e.context.setColorMask(!0,!0,!0,!0),e.context.clear(16384),this._renderChildren(e,a.defines.concat(["highlightAll"])),a.draw(e),a.unbind()}};w=Object(r.e)([Object(r.i)("esri.views.2d.layers.support.HighlightGraphicContainer")],w);var v=w;const O=r.n.getLogger("esri.views.2d.layers.MapImageLayerView2D");let j=class extends(b(Object(s.m)(Object(n.b)(n.a)))){constructor(){super(...arguments),this._highlightGraphics=new i.b}hitTest(){return null}update(e){this.strategy.update(e).catch((e=>{Object(r.B)(e)||O.error(e)}))}attach(){const{imageMaxWidth:e,imageMaxHeight:t,version:a}=this.layer,r=a>=10.3,i=a>=10;this._bitmapContainer=new m.a,this.container.addChild(this._bitmapContainer);const s=new h.a({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new v(this.view.featuresTilingScheme)});this.container.addChild(s.container),this.strategy=new g.a({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:e,imageMaxHeight:t,imageRotationSupported:r,imageNormalizationSupported:i,hidpi:!0}),this.handles.add(this.watch("exportImageVersion",(()=>this.requestUpdate())),"exportImageVersion"),this.requestUpdate()}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,t){return this._highlightGraphics.add(e),{remove:()=>{this._highlightGraphics.remove(e)}}}createFetchPopupFeaturesQueryGeometry(e,t){return Object(o.a)(e,t,this.view)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,a,r){return this.layer.fetchImage(e,t,a,{timeExtent:this.timeExtent,timestamp:this.refreshTimestamp,...r})}};Object(r.e)([Object(r.y)()],j.prototype,"strategy",void 0),Object(r.e)([Object(r.y)()],j.prototype,"updating",void 0),j=Object(r.e)([Object(r.i)("esri.views.2d.layers.MapImageLayerView2D")],j);var x=j;t.default=x}}]);