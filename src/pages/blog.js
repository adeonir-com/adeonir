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
      <PostItem
        slug='/404'
        category='JavaScript'
        background='#e5e942'
        title='Ipsum nostrud voluptate magna'
        text='Proident qui anim dolore non culpa in mollit ipsum incididunt tempor aliqua dolor nulla pariatur magna do adipisicing ut consequat'
        date='29 de Setembro de 2019'
        timeToRead='3'
      />
    </S.PageWrapper>
  </Layout>
)

export default BlogPage
