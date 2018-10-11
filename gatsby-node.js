const path = require(`path`)
const dateformat = require(`dateformat`)
// const { makeBlogPath } = require(`./src/utils`)

const makeBlogPath = ({ id, createdAt, slug }) => {
  const date = new Date(createdAt)
  const formattedDate = dateformat(date, `yyyy-mm-dd`)
  return `/${formattedDate}-${slug}`
}


exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      cms {
        posts(where: { status: PUBLISHED }) {
          id
          title
          createdAt
          slug
        }
      }
    }
  `)

  data.cms.posts.forEach(blog => {
    actions.createPage({
      path: makeBlogPath(blog),
      component: path.resolve(`./src/components/BlogPost.js`),
      context: {
        blogId: blog.id,
      },
    })
  })
}
