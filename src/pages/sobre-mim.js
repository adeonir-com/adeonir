import React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/Seo'

import * as S from '../styles/pages'

const IndexPage = () => (
  <Layout>
    <Seo title='Sobre Mim' />
    <S.PageWrapper>
      <h1>Sobre Mim</h1>
    </S.PageWrapper>
  </Layout>
)

export default IndexPage
