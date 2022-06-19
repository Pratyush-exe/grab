import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import {FaChevronCircleDown} from 'react-icons/fa'
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.REACT_APP_MAP_TOKEN

export default function MapBox({markers, curLoc}) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  let posDefault = [0, 0] // long, lat
  let pos = JSON.parse(localStorage.getItem("posList"))
  console.log("==",pos)
  const [zoom, setZoom] = useState(15);

  let listofMarkers = [[curLoc[0] - 0.001, curLoc[1] - 0.001], [curLoc[0] + 0.001, curLoc[1] + 0.001]] 
  // get from backend

  useEffect(() => {
    console.log("rerendered")
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/pratyush21225/cl4k6ti7t003614qq23ih9orm",
      center: posDefault,
      zoom: zoom,
    });

    const controller = new mapboxgl.GeolocateControl({
      positionOptions: {
          enableHighAccuracy: true
        },
        showAccuracyCircle: false
    })

    map.current.addControl(controller)
    
    map.current.flyTo({
      center: curLoc,
      essential: true
    });
    localStorage.setItem("posList", JSON.stringify(curLoc))
    pos = curLoc

    let el = document.createElement('div');
      el.className = `marker_vender_useLoc bg-black`;
      const marker = new mapboxgl.Marker({
        color: "blue",
        draggable: true
        }).setLngLat(curLoc)
      marker.addTo(map.current)

    listofMarkers.map((position, index) => {
      let el = document.createElement('div');
      el.className = `marker_vender_${index} bg-black`;
      const marker = new mapboxgl.Marker({
        color: "yellow",
        draggable: true
        }).setLngLat(position)
      marker.addTo(map.current)
    })

  }, []);

  useEffect(() => {
    if (!map.current) return;
    map.current.on("move", () => {
      localStorage.setItem("posList", JSON.stringify([map.current.getCenter().lng, map.current.getCenter().lat]))
      pos = [map.current.getCenter().lng, map.current.getCenter().lat]
      setZoom(map.current.getZoom().toFixed(2));
    });
    map.current.on('load', function () {
      map.current.getStyle().layers.map(function (layer) {
        if (layer.id.indexOf('road') >= 0) {
          map.current.setLayoutProperty(layer.id, 'visibility', 'visible');
        }
      });
    });
  });

  return (
    <div className="h-95vh w-9/12 rounded-xl relative">
      <div ref={mapContainer} className="h-95vh w-auto rounded-xl border-black border-4 m-2 mt-1" />
    </div>
  );
}
