import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { PriceTag } from 'styled-icons/icomoon/PriceTag'
import { Clock2 as Clock } from 'styled-icons/icomoon/Clock2'
import { LeftArrowAlt as LeftArrow } from 'styled-icons/boxicons-regular/LeftArrowAlt'

import getThemeColor from '~/utils/get_theme_color'

import Layout from '~/components/Layout'
import Seo from '~/components/Seo'

import * as S from '~/components/Post/styles'

const Post = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <Seo title={post.frontmatter.title} />
      <S.PostWrapper background={post.frontmatter.background}>
        <S.PostBackButton
          to='/blog'
          cover
          direction='left'
          bg={getThemeColor()}
          duration={0.5}
        >
          <LeftArrow size={24} />
        </S.PostBackButton>
        <S.PostHeader>
          <S.PostTag>
            <PriceTag size={20} />
            {post.frontmatter.category}
          </S.PostTag>
          <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
          <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
          <S.PostDate>
            <Clock size={20} />
            {post.frontmatter.date} - {post.timeToRead} minutos de leitura
          </S.PostDate>
        </S.PostHeader>
        <S.PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
      </S.PostWrapper>
    </Layout>
  )
}

export const query = graphql`
  query GetPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        background
        category
        title
        description
        date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
      }
      html
      timeToRead
    }
  }
`

Post.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        background: PropTypes.string,
        category: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        date: PropTypes.string,
      }),
      html: PropTypes.string,
      timeToRead: PropTypes.number,
    }),
  }).isRequired,
}

export default Post
