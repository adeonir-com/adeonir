import React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/Seo'

import * as S from '../styles/pages'

const SearchPage = () => (
  <Layout>
    <Seo title='Search' />
    <S.PageWrapper>
      <h1>Search</h1>
    </S.PageWrapper>
  </Layout>
)

export default SearchPage
