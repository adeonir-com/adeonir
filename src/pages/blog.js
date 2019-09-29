import React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import PostItem from '../components/PostItem'

import * as S from '../styles/pages'

const BlogPage = () => (
  <Layout>
    <Seo title='Blog' />
    <S.PageWrapper>
      <S.PageTitle>Blog</S.PageTitle>
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </S.PageWrapper>
  </Layout>
)

export default BlogPage
