import { e, i as i$1 } from './Identifiable-c8406192.js';
import './config-b3bf08ce.js';
import { n } from './BitmapTileContainer-d31102b7.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const i=i=>{let s=class extends i{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),this._bitmapView=new n(this._tileInfoView),this.container.addChild(this._bitmapView);}detach(){this.container.removeChild(this._bitmapView),this._bitmapView.removeAllChildren();}};return s=e([i$1("esri.views.2d.layers.BitmapTileLayerView2D")],s),s};

export { i };
