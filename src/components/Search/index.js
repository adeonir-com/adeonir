import React from 'react'
import algoliasearch from 'algoliasearch'
import { InstantSearch, SearchBox, Hits, Stats } from 'react-instantsearch-dom'
import { LeftArrowAlt as LeftArrow } from 'styled-icons/boxicons-regular/LeftArrowAlt'

import Hit from './Hit'

import * as S from './styles'

const client = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

const index = process.env.GATSBY_ALGOLIA_INDEX_NAME

const Search = () => {
  function handleClick() {
    window.history.back()
  }

  return (
    <S.SearchContainer>
      <S.PostBackButton onClick={handleClick}>
        <LeftArrow size={24} />
      </S.PostBackButton>
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
}

export default Search
