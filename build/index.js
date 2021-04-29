import Map from './_snowpack/pkg/@arcgis/core/Map.js';
import MapView from './_snowpack/pkg/@arcgis/core/views/MapView.js';
import Search from './_snowpack/pkg/@arcgis/core/widgets/Search.js';
import confetti from './_snowpack/pkg/canvas-confetti.js';
import esriConfig from "./_snowpack/pkg/@arcgis/core/config.js";
import {helloWorld} from './hello-world.js';

helloWorld();

esriConfig.assetsPath = "./assets";

const map = new Map({
  basemap: 'topo-vector'
});

const view = new MapView({
  container: 'viewDiv',
  map: map,
  zoom: 8,
  center: [-2, 52]
});

const search = new Search({ view });

view.ui.add(search, 'top-right');

const mycanvas = document.getElementById('myCanvas')
view.ui.add(mycanvas)

let confettis = confetti.create(mycanvas, {
  resize: true,
  useWorker: true,
 })

view.on("click", (event)=>{
  console.log(event)
  confettis({ 
    particleCount: 200,
    spread: 400,
    scalar:1.4,
    startVelocity:25,
    origin:{
      x:(event.screenPoint.x/view.width),
      y:event.screenPoint.y/view.height
    }})
})

