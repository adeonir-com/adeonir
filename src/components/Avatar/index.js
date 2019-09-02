import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styles'

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "avatar-image.jpg" }) {
          childImageSharp {
            fixed(width: 96, height: 96) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    `
  )

  return <S.AvatarImage fixed={avatarImage.childImageSharp.fixed} />
}

export default Avatar
