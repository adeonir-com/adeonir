import React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/Seo'

import * as S from '../styles/pages'

const IndexPage = () => (
  <Layout>
    <Seo title='Portfolio' />
    <S.PageWrapper>
      <h1>Portfolio</h1>
    </S.PageWrapper>
  </Layout>
)

export default IndexPage
