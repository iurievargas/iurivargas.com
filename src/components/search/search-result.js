import { faCalendarAlt, faMugHot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import { default as React } from "react"
import { connectStateResults, Highlight, Hits, Index, Snippet, PoweredBy } from "react-instantsearch-dom"

const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits
  return hitCount > 0 ? (
    <div className="HitCount">
      {hitCount} resultado{hitCount !== 1 ? `s` : ``}
    </div>
  ) : (
    <div className="HitCount">
        Nenhum resultado encontrado
    </div>
  )
})

const PageHit = ({ hit }) => (
  <div  className="PageHit">
    <Link to={hit.slug} style={{boxShadow: "none"}}>
      <Highlight attribute="title" hit={hit} tagName="mark" />  
      
        <div>
            <small style={{marginRight: `10px`}}> <FontAwesomeIcon icon={faCalendarAlt}/> {hit.date}</small>
            <small><FontAwesomeIcon icon={faMugHot} /> Leitura de {parseInt(hit.readingTime.minutes)}min </small>
        </div>
    </Link>
    
  </div>
)

const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <HitCount />
    <Hits className="Hits" hitComponent={PageHit} />
  </Index>
)

const SearchResult = ({ indices, className }) => (
  <div className={className}>
    {indices.map(index => (
      <HitsInIndex index={index} key={index.name} />
    ))}
  </div>
)

export default SearchResult