import React from "react";
import LocationCard from "./location-card";

const LocationsGrid = ({ locations }) => {
  return (
    <div className='container grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3'>
      {locations.map((location, index) => (
        <LocationCard location={location} key={index} />
      ))}
    </div>
  );
};

export default LocationsGrid;
