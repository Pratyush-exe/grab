import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import {FaChevronCircleDown} from 'react-icons/fa'

mapboxgl.accessToken = process.env.REACT_APP_MAP_TOKEN

export default function Map({position, key}) {
    console.log("test", position)
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [zoom, setZoom] = useState(15);
  
    useEffect(() => {
      if (map.current) return;
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [0, 0],
        zoom: zoom,
      });

      const el = document.createElement('div');
      el.className = `marker_vender_${key} bg-black`;

      const marker = new mapboxgl.Marker({
        color: "yellow",
        draggable: true
        }).setLngLat(position)
      marker.addTo(map.current)

      map.current.flyTo({
        center: position,
        essential: true
      });
    }, []);

    return (
        <div ref={mapContainer}  style={{height: "95%"}} className="w-1/2 rounded-xl border-black border-4 m-2 mt-1" />
    );
  }
