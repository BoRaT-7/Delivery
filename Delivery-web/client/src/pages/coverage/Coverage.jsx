import React, { useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import { FaSearch } from "react-icons/fa";
import "leaflet/dist/leaflet.css";
import { Form, useLoaderData } from "react-router-dom";

const position = [23.6850, 90.3563];

const Coverage = () => {
const serviceCenteres = useLoaderData();
const mapRef = useRef(null);

console.log("Coverage data:", serviceCenteres);
const handleSearch = e => {
   e. preventDefault();
   const location = e.target.location.value;
   const district = serviceCenteres.find(c => c.district.toLowerCase().
  includes (location.toLowerCase()));
  if(district){
    const coord = [district.latitude, district.longitude];
    mapRef.current.flyTo(coord,14);

  }
}


  return (
    <div>
    <div className="text-center mb-8">
    <h1 className="text-3xl mt-5 md:text-5xl font-bold mb-3">
        We are available in 64 districts
    </h1>

    <p className="text-gray-500 mb-6">
        Search your district to check our coverage area
    </p>

    {/* Search Box */}
    <form onSubmit={handleSearch}>
      <div className="max-w-xl mx-auto relative">
        <input
            type="text" name="location"
            placeholder="Search district..."
            className="w-full px-5 py-4 pr-14 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#CAEB66] shadow-sm"
        />

        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#CAEB66] p-3 rounded-lg hover:bg-[#b8d95a] transition">
            <FaSearch className="text-gray-800" />
        </button>
    </div>
    </form>
</div>

      <MapContainer
        center={position}
        zoom={7}
        scrollWheelZoom={false}
        style={{ height: "800px", width: "100%" }}
        ref={mapRef }
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {
          serviceCenteres.map((center,index) => <Marker
          key ={index} position= {[center.latitude,center.longitude]}>
          <Popup>
           <strong>{center.district} </strong> <br /> Easily cistomizable.
          </Popup>
        </Marker>)
        }
      </MapContainer>
    </div>
  );
};

export default Coverage;