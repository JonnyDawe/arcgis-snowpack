(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{290:function(e,t,r){"use strict";r.r(t);var i=r(0),a=(r(1),r(138)),s=r(335),n=r(23),o=r(397),h=r(365),p=r(373);r(20),r(9),r(3),r(6),r(4),r(13),r(52),r(43),r(5),r(72),r(2),r(40),r(15),r(75),r(10),r(27),r(14),r(16),r(51),r(82),r(89),r(53),r(12),r(44),r(106),r(63),r(55),r(119),r(17),r(120),r(48),r(83),r(115),r(47),r(103),r(32),r(57),r(21),r(62),r(26),r(24),r(85),r(70),r(109),r(49),r(111),r(71),r(104),r(112),r(108),r(58),r(105),r(110),r(107),r(56),r(116),r(36),r(64),r(42),r(113),r(41),r(121),r(117),r(114),r(66),r(31),r(118),r(35),r(54),r(123),r(8),r(73),r(84),r(65),r(74),r(90),r(11),r(7),r(19),r(67),r(86),r(137),r(122),r(317),r(318),r(310),r(313),r(312),r(325),r(314),r(316),r(323),r(319),r(326),r(321),r(320),r(345);const c=e=>{let t=class extends e{initialize(){this.exportImageParameters=new o.a({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(e){const{layer:t}=this;if(!e)return Promise.reject(new i.s("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));const{popupEnabled:r}=t;if(!r)return Promise.reject(new i.s("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:r}));const a=this.createFetchPopupFeaturesQuery(e);if(!a)return Promise.resolve([]);const{extent:s,width:n,height:o,x:h,y:p}=a;if(!(s&&n&&o))throw new i.s("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:s,width:n,height:o});const c=t.fetchFeatureInfo(s,n,o,h,p);return Promise.resolve(c?[c]:[])}};return Object(i.e)([Object(i.y)()],t.prototype,"exportImageParameters",void 0),Object(i.e)([Object(i.y)({readOnly:!0})],t.prototype,"exportImageVersion",null),Object(i.e)([Object(i.y)()],t.prototype,"layer",void 0),Object(i.e)([Object(i.y)(n.n)],t.prototype,"timeExtent",void 0),t=Object(i.e)([Object(i.i)("esri.layers.mixins.WMSLayerView")],t),t},m=i.n.getLogger("esri.views.2d.layers.WMSLayerView2D");let l=class extends(c(Object(a.m)(Object(s.b)(s.a)))){initialize(){const{layer:e,view:t}=this;e.supportsSpatialReference(t.spatialReference)||this.addResolvingPromise(Promise.reject(new i.s("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view",{layer:e})))}hitTest(){return null}update(e){this.strategy.update(e).catch((e=>{Object(i.B)(e)||m.error(e)}))}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:r}=e;this._bitmapContainer=new h.a,this.container.addChild(this._bitmapContainer),this.strategy=new p.a({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.handles.add(this.watch("exportImageVersion",(()=>this.requestUpdate())),"exportImageVersion")}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t}=this,r=this._bitmapContainer,{x:a,y:s}=e,{spatialReference:n}=t;let o=null,h=0,p=0;if(r.children.some((e=>{const{width:t,height:r,resolution:c,x:m,y:l}=e,u=m+c*t,d=l-c*r;return a>=m&&a<=u&&s<=l&&s>=d&&(o=new i.M({xmin:m,ymin:d,xmax:u,ymax:l,spatialReference:n}),h=t,p=r,!0)})),!o)return null;const c=o.width/h,m=Math.round((a-o.xmin)/c),l=Math.round((o.ymax-s)/c);return{extent:o,width:h,height:p,x:m,y:l}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImage(e,t,r,{timeExtent:this.timeExtent,timestamp:this.refreshTimestamp,...i})}};Object(i.e)([Object(i.y)()],l.prototype,"strategy",void 0),Object(i.e)([Object(i.y)()],l.prototype,"updating",void 0),l=Object(i.e)([Object(i.i)("esri.views.2d.layers.WMSLayerView2D")],l);var u=l;t.default=u}}]);