import React from 'react'
import algoliasearch from 'algoliasearch'
import { InstantSearch, SearchBox, Hits, Stats } from 'react-instantsearch-dom'

import Hit from './Hit'

import * as S from './styles'

const client = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

const index = process.env.GATSBY_ALGOLIA_INDEX_NAME

const Search = () => (
  <S.SearchContainer>
    <InstantSearch searchClient={client} indexName={index}>
      <SearchBox autoFocus translations={{ placeholder: 'Pesquisar...' }} />
      <Stats
        translations={{
          stats(nbHits, timeSpentMs) {
            return `${nbHits} resultados encontrados em ${timeSpentMs}ms`
          },
        }}
      />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  </S.SearchContainer>
)

export default Search
