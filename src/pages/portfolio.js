import React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/Seo'

import * as S from '../styles/pages'

const PortfolioPage = () => (
  <Layout>
    <Seo title='Portfolio' description='Veja alguns trabalhos realizados.' />
    <S.PageWrapper>
      <S.PageTitle>Portfolio</S.PageTitle>
    </S.PageWrapper>
  </Layout>
)

export default PortfolioPage
