import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import * as S from "./styles"

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "avatar-image.png" }) {
          childImageSharp {
            fixed(width: 160, height: 160) {
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
