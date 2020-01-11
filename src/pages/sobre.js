import React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/Seo'

import * as S from '../styles/pages'

const AboutPage = () => (
  <Layout>
    <Seo title='Sobre Mim' />
    <Seo
      title='Sobre Mim'
      description='Saiba um pouco mais sobre o desenvolvedor deste blog.'
    />
    <S.PageWrapper>
      <S.PageTitle>Sobre Mim</S.PageTitle>
    </S.PageWrapper>
  </Layout>
)

export default AboutPage
