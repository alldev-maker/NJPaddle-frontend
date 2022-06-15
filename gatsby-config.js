require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://localhost:1337",
        // apiURL: process.env.STRAPI_API_URL || "http://localhost:1337",
        accessToken:
          "333d432924c1e1d33424ffceaa00fed7b4d0d7337d3357e3a91c840a4875f1edda5d05acc8b15ca3601fd5aaca1410d25b5fe37ce89af98ed524e0e3fb6f4538677422cf8ba04d7d65dac81a5b1bcb3efee5c4ac9c9f04e575a560d16c2733daaaace88b1de71764dc238f2a4763f1c2476c66b6dded065b117a09e006a66b8f",
        collectionTypes: [
          {
            singularName: "location",
          },
        ],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
  ],
};
