import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import * as S from "../styles/pages"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <S.PageWrapper>
      <h1>Home</h1>
    </S.PageWrapper>
  </Layout>
)

export default IndexPage
