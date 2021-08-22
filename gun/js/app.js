import Coordinate from "./Coordinate.js";
import Marker from "./Marker.js";
import MovingGun from "./MovingGun.js";

(() => {
  const coordinate = new Coordinate();
  new MovingGun(coordinate);
  new Marker(coordinate);
})()