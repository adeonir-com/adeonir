import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import * as S from "../styles/pages"

const IndexPage = () => (
  <Layout>
    <SEO title="Serviços" />
    <S.PageWrapper>
      <h1>Serviços</h1>
    </S.PageWrapper>
  </Layout>
)

export default IndexPage
