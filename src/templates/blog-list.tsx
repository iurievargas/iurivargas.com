// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Search from "../components/search"
import { faCalendarAlt, faMugHot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import algoliasearch from "algoliasearch/lite"
import { connectHits, InstantSearch } from "react-instantsearch-dom"
import SearchBox from "react-instantsearch-dom/dist/cjs/widgets/SearchBox"
import Hits from "react-instantsearch-dom/dist/cjs/widgets/Hits"
import Pagination from "react-instantsearch-dom/dist/cjs/widgets/Pagination"
import VoiceSearch from "react-instantsearch-dom/dist/cjs/widgets/VoiceSearch"


const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

type PageContext = {
  currentPage: number
  numPages: number
}
type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
        }
        fields: {
          slug: string
          readingTime: {
            minutes: string
          }
        }
      }
    }[]
  }
}

const BlogIndex = ({
  data,
  location,
  pageContext,
}: PageProps<Data, PageContext>) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const { currentPage, numPages } = pageContext

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()


  const Hits = connectHits(({ hits }) => (
    <div>
      { hits.length > 0 ? (
        
        <div className="post-feed">
          {
            hits.map((hit) => {
              const title = hit.title || hit.slug
              return (
                <article key={hit.slug}>
                  <header>
                    <h3
                      style={{
                        marginBottom: rhythm(1 / 4),
                      }}
                    >
                      <Link style={{ boxShadow: `none` }} to={hit.slug}>
                        {title}
                      </Link>
                    </h3>
                    <small style={{ marginRight: `10px` }}> <FontAwesomeIcon icon={faCalendarAlt} /> {hit.date}</small>
                    <small><FontAwesomeIcon icon={faMugHot} /> Leitura de {parseInt(hit.readingTime.minutes)}min </small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: hit.description,
                      }}
                    />
                  </section>
                </article>
              )

            })
          }
        </div>
      )
        : (<p>Nenhuma publicação foi encontrada.</p>)
      }
    </div>
  ));



  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Publicações" />

      <div className="outer">
        <div className="inner">
          <InstantSearch searchClient={searchClient} indexName="Pages">
            <SearchBox className="search-button" translations={{ placeholder: 'Pesquise por uma publicação...'}}/>
            <Hits />
            
          </InstantSearch>
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: {frontmatter: {title: {nin: "bruce"}}}
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "DD MMMM, YYYY", locale: "pt-br")
            title
            description
            references
            categories
          }
          fields {
            slug
            readingTime {
              minutes
            }
          }
        }
      }
    }
  }
`
