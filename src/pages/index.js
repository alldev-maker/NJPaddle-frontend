import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import LocationGrid from "../components/locations-grid";
import Seo from "../components/seo";
import Headings from "../components/headings";

const IndexPage = () => {
  const { allStrapiLocation } = useStaticQuery(graphql`
    query {
      allStrapiLocation {
        nodes {
          cover {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          slug
          title
          description
        }
      }
    }
  `);

  return (
    <Layout>
      <Seo seo={{ metaTitle: "Home" }} />
      <Headings title={"NJPaddle"} description={"NJPaddle demo site"} />
      <main>
        <LocationGrid locations={allStrapiLocation.nodes} />
      </main>
    </Layout>
  );
};

export default IndexPage;
