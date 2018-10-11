// import { resolve } from 'path'
import { GatsbyCreatePages } from './types'
const dateformat = require(`dateformat`)
import path from "path"

export type BlogInfo = {
  id: string,
  createdAt: string,
  slug: string
}

export interface data {
    cms: {
      posts: [{
        id: string
        title: string
        createdAt: string
        slug: string
      }]
    }
  }


const makeBlogPath = (blogInfo: BlogInfo) => {
  const date = new Date(blogInfo.createdAt)
  const formattedDate = dateformat(date, `yyyy-mm-dd`)
  return `/${formattedDate}-${blogInfo.slug}`
}

export const createPages: GatsbyCreatePages = async ({
  graphql,
  boundActionCreators,
}) => {
  const { createPage } = boundActionCreators

  const allMarkDown: data = await graphql(`
    query {
      cms {
        posts {
          id
        }
      }
    }
  `)

  allMarkDown.cms.posts.forEach(post  => {
    createPage({
      path: makeBlogPath(post),
      component: path.resolve(`./src/components/BlogPost.js`),
      context: {
        blogId: post.id,
      },
    })
  })
}