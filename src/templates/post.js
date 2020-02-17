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
  const post = data.wordpressPost
  post.category = post.categories[0].slug

  return (
    <Layout>
      <Seo
        title={post.title}
        description={post.description}
        image={post.image}
      />
      <S.PostWrapper background={`var(--${post.category})`}>
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
            {post.category}
          </S.PostTag>
          <S.PostTitle>{post.title}</S.PostTitle>
          <S.PostDescription>{post.description}</S.PostDescription>
          <S.PostDate>
            <Clock size={20} />
            {post.date}
          </S.PostDate>
        </S.PostHeader>
        <S.PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
      </S.PostWrapper>
    </Layout>
  )
}

export const query = graphql`
  query GetPostBySlug($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      id
      title
      slug
      categories {
        slug
      }
      date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
      featured_media {
        image: source_url
      }
      description: excerpt
      content
    }
  }
`

Post.propTypes = {
  data: PropTypes.shape({
    wordpressPost: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.shape({
        slug: PropTypes.string,
      }),
      content: PropTypes.string,
      categories: PropTypes.string,
      category: PropTypes.string,
      date: PropTypes.string,
      image: PropTypes.string,
    }),
  }).isRequired,
}

export default Post
