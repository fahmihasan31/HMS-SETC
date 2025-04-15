"use client";
import { useState, useEffect } from "react";

const MapComponent = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js";
    script.async = true;
    script.onload = initMap;
    document.body.appendChild(script);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css";
    document.head.appendChild(link);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  const initMap = () => {
    if (window.L && document.getElementById("map")) {
      const lat = -7.766032;
      const lng = 112.694229;

      const map = window.L.map("map", {
        attributionControl: false,
        zoomControl: false,
      }).setView([lat, lng], 15);

      window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      window.L.marker([lat, lng]).addTo(map).openPopup();
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-none aspect-square -z-0">
      {isMounted ? (
        <div id="map" className="w-full h-full"></div>
      ) : (
        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
          <p>Memuat peta...</p>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
