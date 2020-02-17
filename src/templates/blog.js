import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import PostItem from '../components/PostItem'
import Pagination from '../components/Pagination'

import * as S from '../styles/pages'

const Blog = props => {
  const posts = props.data.allWordpressPost.edges
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? '/blog' : `/blog/page/${currentPage - 1}`
  const nextPage = `/blog/page/${currentPage + 1}`

  return (
    <Layout>
      <Seo title='Blog' />
      <S.PageWrapper>
        <S.PageTitle>Blog</S.PageTitle>
        {posts.map(
          ({ node: { id, slug, title, categories, date, description } }) => {
            const category = categories[0].slug

            return (
              <PostItem
                key={id}
                slug={slug}
                category={category}
                background={`var(--${category})`}
                title={title}
                description={description}
                date={date}
              />
            )
          }
        )}
      </S.PageWrapper>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  )
}

export const query = graphql`
  query GetAllPosts($limit: Int!, $skip: Int!) {
    allWordpressPost(
      sort: { fields: date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          slug
          title
          categories {
            slug
          }
          date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
          description: excerpt
        }
      }
    }
  }
`

Blog.propTypes = {
  data: PropTypes.shape({
    allWordpressPost: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }).isRequired,
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number,
    numPages: PropTypes.number,
  }),
}

export default Blog
