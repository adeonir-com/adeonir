import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import PostItem from '../components/PostItem'

import * as S from '../styles/pages'

const BlogPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query getPosts {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              background
              category
              date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
              text
              title
            }
            timeToRead
          }
        }
      }
    }
  `)

  const postList = allMarkdownRemark.edges

  // console.log(allMarkdownRemark)

  return (
    <Layout>
      <Seo title='Blog' />
      <S.PageWrapper>
        <S.PageTitle>Blog</S.PageTitle>
        {postList.map(
          ({
            node: {
              frontmatter: { category, background, title, text, date },
              timeToRead,
              id,
              fields: { slug },
            },
          }) => (
            <PostItem
              key={id}
              slug={slug}
              category={category}
              background={background}
              title={title}
              text={text}
              date={date}
              timeToRead={timeToRead}
            />
          )
        )}
      </S.PageWrapper>
    </Layout>
  )
}

export default BlogPage
