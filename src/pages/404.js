import React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/Seo'

import * as S from '../styles/pages'

const NotFoundPage = () => (
  <Layout>
    <Seo title='404: Not found' />
    <S.PageWrapper>
      <S.PageTitle>404</S.PageTitle>
    </S.PageWrapper>
  </Layout>
)

export default NotFoundPage
