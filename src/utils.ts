const dateformat = require(`dateformat`)

type BlogDetails = {
  id: string
  createdAt: string
  slug: string
}

export const makeBlogPath = ( blogDetails: BlogDetails ) => {
  const date = new Date(blogDetails.createdAt)
  const formattedDate = dateformat(date, `yyyy-mm-dd`)
  return `/${formattedDate}-${blogDetails.slug}`
}
