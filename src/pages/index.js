import React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/Seo'

import * as S from '../styles/pages'

const HomePage = () => (
  <Layout>
    <Seo title='Home' />
    <S.PageWrapper>
      <S.PageTitle>Home</S.PageTitle>
    </S.PageWrapper>
  </Layout>
)

export default HomePage
