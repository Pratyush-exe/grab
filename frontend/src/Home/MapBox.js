import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
console.log(process.env)
mapboxgl.accessToken = process.env.REACT_APP_MAP_TOKEN

export default function MapBox({markers}) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [pos, setPos] = useState([77.1025, 28.7041]); // long, lat
  const [zoom, setZoom] = useState(9);

  document.onload = () => {
    document.getElementsByClassName("mapboxgl-ctrl-geolocate").click()
  }

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: pos,
      zoom: zoom,
    });
    map.current.on('load', function () {
      map.current.getStyle().layers.map(function (layer) {
        if (layer.id.indexOf('road') >= 0) {
          map.current.setLayoutProperty(layer.id, 'visibility', 'none');
        }
      });
    });
    const controller = new mapboxgl.GeolocateControl({
      positionOptions: {
          enableHighAccuracy: true
        },
        showAccuracyCircle: false
    })
    map.current.addControl(controller)
  });

  useEffect(() => {
    if (!map.current) return;
    map.current.on("move", () => {
      setPos([map.current.getCenter().lng.toFixed(4), map.current.getCenter().lat.toFixed(4)]);
      setZoom(map.current.getZoom().toFixed(2));
    });
    map.current.on('load', function () {
      map.current.getStyle().layers.map(function (layer) {
        if (layer.id.indexOf('road') >= 0) {
          map.current.setLayoutProperty(layer.id, 'visibility', 'none');
        }
      });
    });
  });

  return (
    <div className="h-500px w-600px rounded-xl relative">
      <div className="bg-slate-600 absolute top-0 bottom-0 z-10 h-8 p-3 pt-0.5 text-white mt-1 ml-1 rounded-lg">
        long: {pos[0]} | lat: {pos[1]} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="h-500px w-600px rounded-xl border" />
    </div>
  );
}
