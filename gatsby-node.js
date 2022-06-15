const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define a template for location
  const locationTemplate = path.resolve("./src/templates/location.js");

  const result = await graphql(`
    {
      allStrapiLocation {
        nodes {
          title
          slug
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Strapi locations`,
      result.errors
    );

    return;
  }

  const locations = result.data.allStrapiLocation.nodes;

  if (locations.length > 0) {
    locations.forEach((location) => {
      createPage({
        path: `/locations/${location.slug}`,
        component: locationTemplate,
        context: {
          slug: location.slug,
        },
      });
    });
  }
};
