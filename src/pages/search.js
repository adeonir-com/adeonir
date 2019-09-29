import React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/Seo'

import * as S from '../styles/pages'

const SearchPage = () => (
  <Layout>
    <Seo title='Search' />
    <S.PageWrapper>
      <S.PageTitle>Search</S.PageTitle>
    </S.PageWrapper>
  </Layout>
)

export default SearchPage
