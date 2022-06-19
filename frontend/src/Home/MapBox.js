import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import {FaChevronCircleDown} from 'react-icons/fa'

mapboxgl.accessToken = process.env.REACT_APP_MAP_TOKEN

export default function MapBox({markers, curLoc}) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  let posDefault = [0, 0] // long, lat
  let pos = JSON.parse(localStorage.getItem("posList"))
  console.log("==",pos)
  const [zoom, setZoom] = useState(15);

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
    console.log(curLoc)
    map.current.flyTo({
      center: curLoc,
      essential: true
    });
    localStorage.setItem("posList", JSON.stringify(curLoc))
    pos = curLoc
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

  if(map.current) {
    // let pos_new = JSON.parse(localStorage.getItem("posList"))
    // console.log(pos_new === curLoc, pos_new, curLoc)
    // if (pos_new !== curLoc) {
    //     map.current.flyTo({
    //     center: pos_new,
    //     essential: true
    //   });
    //   localStorage.setItem("posList", JSON.stringify(pos_new))
    //   pos = pos_new
    // }
  }

  function handleChangeLoc(params) {
    let pos_new = JSON.parse(localStorage.getItem("posList"))
    map.current.flyTo({
      center: [pos_new[0] + 1, pos_new[1] + 1],
      essential: true
    });
    localStorage.setItem("posList", JSON.stringify([pos_new[0] + 1, pos_new[1] + 1]))
    pos = [pos_new[0] + 1, pos_new[1] + 1]
  }

  return (
    <div className="h-95vh w-9/12 rounded-xl relative">
      {/* <div className="bg-slate-600 absolute top-0 bottom-0 z-10 h-8 p-3 pt-0.5 text-white mt-1 ml-1 rounded-lg">
        long: {pos[0].toFixed(4)} | lat: {pos[1].toFixed(4)} | Zoom: {zoom}
      </div> */}
      <div ref={mapContainer} className="h-95vh w-auto rounded-xl border-black border-4 m-2 mt-1" />
      {/* <button onClick={handleChangeLoc}>Change location</button> */}
    </div>
  );
}
