import React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/Seo'

import * as S from '../styles/pages'

const AboutPage = () => (
  <Layout>
    <Seo title='Sobre Mim' />
    <S.PageWrapper>
      <S.PageTitle>Sobre Mim</S.PageTitle>
    </S.PageWrapper>
  </Layout>
)

export default AboutPage
