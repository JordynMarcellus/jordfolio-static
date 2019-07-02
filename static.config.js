import path from 'path'
import { createClient } from "contentful";

const SPACE_ID = process.env.SPACE_ID;
const CONTENT_DELIVERY_KEY = process.env.CONTENT_DELIVERY_KEY;

const contentfulClient = createClient({
  space: SPACE_ID,
  accessToken: CONTENT_DELIVERY_KEY
});

export default {
  siteRoot: "https://www.jordynmarcellus.com/",
  getSiteData: () => ({
    title: "Jordyn Marcellus, web developer and agilist"
  }),
  getRoutes: async () => {
    const { items: posts } = await contentfulClient.getEntries({
      content_type: ["post"]
    });
    return [
      {
        path: "/",
        template: "src/pages/index"
      },

      {
        path: "/blog",
        getData: () => ({
          posts
        }),
        children: posts.map(post => {
          return {
            path: `/post/${post.fields.slugline}`,
            template: "src/containers/Post",
            getData: () => ({
              post
            })
          }
        })
      },
    ];
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
    "react-static-plugin-emotion"
  ]
};