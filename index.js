import React from "react"
import { makeBlogPath } from "../utils"
import dateformat from "dateformat"

export default ({ data }) => (
  <div>
    <h1>My Gatsby Blog</h1>
    {data.cms.posts.map((blog, i) => (
      <a key={i} href={makeBlogPath(blog)}>
        <h2>
          {dateformat(blog.createdAt, "fullDate")} - {blog.title}
        </h2>
      </a>
    ))}
  </div>
)

export const query = graphql`
  query {
    cms {
      posts( orderBy: createdAt_DESC) {
        title
        createdAt
        slug
      }
    }
  }
`
