import React, { useEffect } from 'react';
import L from 'leaflet';

const MapView = ({ coordinates }) => {
  const { latitude, longitude, address } = coordinates;
  // console.log(`latitude is ${latitude} and longitude is ${longitude} and address is ${address}`);

  // Define the custom icon
  const customIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
    iconSize: [40, 40], // Adjust size as needed
    iconAnchor: [20, 40], // Aligns icon to the desired point
    popupAnchor: [0, -40] // Adjusts popup position relative to icon
  });

  useEffect(() => {
    if (!latitude || !longitude) {
      console.error("Invalid latitude or longitude values:", latitude, longitude);
      return;
    }

    const map = L.map('map').setView([latitude, longitude], 13);

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add marker with custom icon
    L.marker([latitude, longitude], { icon: customIcon }).addTo(map)
      .bindPopup(address)
      .openPopup();

    return () => {
      map.remove();
    };
  }, [latitude, longitude, address, customIcon]);

  return (
    <div 
  id="map" 
  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] xl:h-[600px] mt-4 rounded-lg shadow-md"
>
</div>

  );
};

export default MapView;
