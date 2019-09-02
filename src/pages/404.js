import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import * as S from "../styles/pages"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <S.PageWrapper>
      <h1>404</h1>
    </S.PageWrapper>
  </Layout>
)

export default NotFoundPage
