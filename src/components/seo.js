import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ seo = {} }) => {
  // Merge default and page-specific SEO values
  const fullSeo = { ...seo };

  // Add site name to title
  fullSeo.metaTitle = `${fullSeo.metaTitle} | NJPaddle`;

  const getMetaTags = () => {
    const tags = [];

    if (fullSeo.metaTitle) {
      tags.push(
        {
          property: "og:title",
          content: fullSeo.metaTitle,
        },
        {
          name: "twitter:title",
          content: fullSeo.metaTitle,
        }
      );
    }
    if (fullSeo.metaDescription) {
      tags.push(
        {
          name: "description",
          content: fullSeo.metaDescription,
        },
        {
          property: "og:description",
          content: fullSeo.metaDescription,
        },
        {
          name: "twitter:description",
          content: fullSeo.metaDescription,
        }
      );
    }
    if (fullSeo.shareImage) {
      const imageUrl = fullSeo.shareImage.localFile.url;
      tags.push(
        {
          name: "image",
          content: imageUrl,
        },
        {
          property: "og:image",
          content: imageUrl,
        },
        {
          name: "twitter:image",
          content: imageUrl,
        }
      );
    }
    if (fullSeo.location) {
      tags.push({
        property: "og:type",
        content: "location",
      });
    }
    tags.push({ name: "twitter:card", content: "summary_large_image" });

    return tags;
  };

  const metaTags = getMetaTags();

  return (
    <Helmet
      title={fullSeo.metaTitle}
      // link={[
      //   {
      //     rel: "icon",
      //     href: favicon.localFile.url,
      //   },
      // ]}
      meta={metaTags}
    />
  );
};

export default Seo;
