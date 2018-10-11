module.exports = {
  plugins: [
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        fieldName: `cms`,        
        url: `https://api-euwest.graphcms.com/v1/cjn2vlxcf2k0801glgazjnrux/master`,        
        typeName: `GraphCMS`,
        refetchInterval: 6000,
      },
    },
  ],
}
