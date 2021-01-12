import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import { Disqus } from "gatsby-plugin-disqus"
import Donate from "../components/donate/donate"
import BackToHomeLink from "../components/back-to-home"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark

  const { previous, next } = pageContext

  const referencias = (
    <div>
      <h4>Referências</h4>
      <ul
        style={{
          paddingLeft: 20,
        }}
      >
        {post.frontmatter.references.map(value => {
          return (
            <li>
              <a href={value}>{value}</a>
            </li>
          )
        })}
      </ul>
      <hr />
    </div>
  )

  const relacionados = (
    <nav>
      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </nav>
  )

  return (
    <Layout location={location} title="iurivargas">
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <BackToHomeLink />
          <h1 style={{ marginBottom: 0, marginTop: 20 }}>
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {post.frontmatter.date}
          </p>
        </header>

        <div>
          <div>
            <h3>Olá!</h3>
            <span>Tudo bem?</span>
          </div>
          
          <div style={{ marginTop: 10, marginBottom: 15}}>
            <span>{post.frontmatter.description}</span>
          </div>
        </div>

        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />

        <Donate />
        <hr />
        {referencias}

        <footer style={{ marginTop: 10 }}>
          <Bio />

          {relacionados}

          <Disqus
            config={{
              url: post.frontmatter.slug,
              identifier: post.frontmatter.slug,
              title: post.frontmatter.title,
            }}
          />
        </footer>
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        date(formatString: "DD MMMM, YYYY", locale: "pt-br")
        title
        description
        references
        categories
      }
    }
  }
`
