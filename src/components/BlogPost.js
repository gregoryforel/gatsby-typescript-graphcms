import { graphql } from "gatsby"
import React from "react"
import ReactMarkdown from "react-markdown"
import dateformat from "dateformat"

export default ({ data }) => {
  const post = data.cms.post
  return (
    <div>
      <h1>{post.title}</h1>
      <div>Posted at: {dateformat(post.createdAt, `fullDate`)}</div>
      <ReactMarkdown source={post.content} />
    </div>
  )
}

export const query = graphql`
  query($blogId: ID!) {
    cms {
      post(where: { id: $blogId }) {
        title
        createdAt
        content
      }
    }
  }
`
