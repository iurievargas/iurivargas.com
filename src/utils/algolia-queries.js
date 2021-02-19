const escapeStringRegexp = require("escape-string-regexp")

const pagePath = `content`

const pageQuery = `{
  pages: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }    
    filter: {
      fileAbsolutePath: { 
        regex: "/${escapeStringRegexp(pagePath)}/" 
      }
      frontmatter: { title: { ne: "biografia" } } 
    }
  ) {
    edges {
      node {
        id
        frontmatter {
          title
          formatedDate: date(formatString: "DD MMMM, YYYY", locale: "pt-br")
          date
          description
        }
        fields {
          slug
          readingTime {
            minutes
          }
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`

function pageToAlgoliaRecord({ node: { id, frontmatter, fields, ...rest } }) {
  return {
    objectID: id,
    ...frontmatter,
    ...fields,
    ...rest,
  }
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]

module.exports = queries