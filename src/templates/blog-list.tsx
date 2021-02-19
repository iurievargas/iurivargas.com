// Gatsby supports TypeScript natively!
import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import { faCalendarAlt, faMugHot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import algoliasearch from "algoliasearch/lite"
import { connectHits, InstantSearch } from "react-instantsearch-dom"
import SearchBox from "react-instantsearch-dom/dist/cjs/widgets/SearchBox"
import Pagination from "react-instantsearch-dom/dist/cjs/widgets/Pagination"

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

const indexName = process.env.ALGOLIA_INDEX_NAME;

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  const Hits = connectHits(({ hits }) => (
    <>
      {hits.length > 0 ? (
        <div className="post-feed">
          {hits.map(hit => {
            const title = hit.title || hit.slug
            return (
              <article key={hit.slug}>
                <header>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}>
                    <Link style={{ boxShadow: `none` }} to={hit.slug}>
                      {title}
                    </Link>
                  </h3>
                  <small style={{ marginRight: `10px` }}>
                    {" "}
                    <FontAwesomeIcon icon={faCalendarAlt} /> {hit.formatedDate}
                  </small>
                  <small>
                    <FontAwesomeIcon icon={faMugHot} /> Leitura de{" "}
                    {parseInt(hit.readingTime.minutes)}min{" "}
                  </small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: hit.description,
                    }}/>
                </section>
              </article>
            )
          })}
          <Pagination/>
        </div>
        
      ) : (
        <p>Nenhuma publicação foi encontrada.</p>
      )}
    </>
  ))

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Publicações" />

      <div className="outer">
        <div className="inner">
          <InstantSearch searchClient={searchClient} indexName="master">
            <SearchBox
              className="search-button"
              translations={{ placeholder: "Pesquise por uma publicação..." }}
            />
            <Hits />
          </InstantSearch>
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query blogPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
