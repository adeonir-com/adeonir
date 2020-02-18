import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import PostItem from '../components/PostItem'
import Pagination from '../components/Pagination'

import * as S from '../styles/pages'

const Blog = props => {
  const posts = props.data.allMarkdownRemark.edges
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
          ({
            node: {
              frontmatter: { title, description, date, category },
              timeToRead,
              id,
              fields: { slug },
            },
          }) => (
            <PostItem
              key={id}
              slug={slug}
              category={category}
              background={`var(--${category})`}
              title={title}
              description={description}
              date={date}
              timeToRead={timeToRead}
            />
          )
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
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
            category
          }
          html
          timeToRead
        }
      }
    }
  }
`

Blog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
      html: PropTypes.string,
    }),
  }).isRequired,
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number,
    numPages: PropTypes.number,
  }),
}

export default Blog
