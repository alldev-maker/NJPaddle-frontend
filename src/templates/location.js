import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";

const LocationPage = ({ data }) => {
  const location = data.strapiLocation;

  const seo = {
    metaTitle: location.title,
    metaDescription: location.description,
    shareImage: location.cover,
  };

  return (
    <Layout as='location'>
      <Seo seo={seo} />
      <header className='container max-w-4xl py-8'>
        <h1 className='text-6xl font-bold text-neutral-700'>
          {location.title}
        </h1>
        <p className='mt-4 text-2xl text-neutral-500'>{location.description}</p>
        <GatsbyImage
          image={getImage(location?.cover?.localFile)}
          alt={location?.cover?.alternativeText}
          className='mt-6'
        />
      </header>
      <main className='mt-8'></main>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($slug: String) {
    strapiLocation(slug: { eq: $slug }) {
      id
      slug
      title
      description
      cover {
        alternativeText
        localFile {
          url
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default LocationPage;
