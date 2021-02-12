import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"

const DonateFinishedPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      
      <div style={{marginTop: `30px`, textAlign: `center`}}>
        <Image
            fixed={data.hommer.childImageSharp.fixed} 
            alt="Hommer"
            style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50
            }}
        />
        <h2>Que espetáculo!</h2>

        <p>Você acabou de me pagar um cafézinho! Obrigado pelo reconhecimento, não há sentimento melhor
            que aquele de ser reconhecido pelo que você gosta de fazer. O reconhecimento é o combustível da alma!</p>
      </div>
      
      
    </Layout>
  )
}

export default DonateFinishedPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    hommer: file(name: {eq: "hommer"}) {
       childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
      }
    }
  }
`