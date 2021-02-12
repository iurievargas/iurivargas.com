import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import BackToHomeLink from "../components/back-to-home"


const AboutMePage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          title
          author {
            name
            summary
          }
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { title: { eq: "biografia" } } }
        limit: 1
      ) {
        edges {
          node {
            html
          }
        }
      }
    }
  `)

  const { edges } = data.allMarkdownRemark;
  
  const biografia = (  
    edges.map((edge) => {
      const bio = edge.node;
      return (
        <article style={{
          marginTop: `30px`
        }}>
          <section dangerouslySetInnerHTML={{ __html: bio.html }} />
        </article>
      )
    }
  ))

  const siteTitle = data.site.siteMetadata.title
  const author = data.site.siteMetadata.author

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Sobre mim " />

      <div
        style={{
          textAlign: `center`,
          paddingTop: `20px`,
        }}
      >
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author.name}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      </div>
      <BackToHomeLink />
      <span style={{ textAlign: "justify" }}>
        {biografia}
      </span>
    </Layout>
  )
}

export default AboutMePage
