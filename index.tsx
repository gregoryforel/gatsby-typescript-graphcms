import * as React from "react"
import { graphql } from 'gatsby'
import { makeBlogPath } from "./src/utils"
import dateformat from "dateformat"

export interface IndexPageProps {
  data: {
    cms: {
      posts: [{
        id: string
        title: string
        createdAt: string
        slug: string
      }]
    }
  }
}

export class IndexPage extends React.Component<IndexPageProps, {}> {
  render() {
    return (
      <div>
        <h1>My Gatsby Blog</h1>
        {this.props.data.cms.posts.map((blog, i) => (
          <a key={i} href={makeBlogPath(blog)}>
            <h2>
              {dateformat(blog.createdAt, "fullDate")} - {blog.title}
            </h2>
          </a>
        ))}
      </div>
    )
  }  
}

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
