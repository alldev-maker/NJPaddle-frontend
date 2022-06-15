import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const LocationCard = ({ location }) => {
  return (
    <Link
      to={`/locations/${location.slug}`}
      className='overflow-hidden transition-shadow bg-white rounded-lg shadow-sm hover:shadow-md'
    >
      <GatsbyImage
        image={getImage(location.cover?.localFile)}
        alt={location.cover?.alternativeText}
      />
      <div className='px-4 py-4'>
        <h3 className='font-bold text-neutral-700'>{location.title}</h3>
        <p className='mt-2 text-neutral-500 line-clamp-2'>
          {location.description}
        </p>
      </div>
    </Link>
  );
};

export default LocationCard;
