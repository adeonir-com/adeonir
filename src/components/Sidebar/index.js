import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Profile from "../Profile"
import Menu from "../Menu"
import Social from "../Social"

import * as S from "./styles"

const Sidebar = () => {
  const { sidebarImage } = useStaticQuery(graphql`
    query {
      sidebarImage: file(relativePath: { eq: "sidebar-image.jpg" }) {
        childImageSharp {
          fixed(width: 320, height: 176) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <S.SidebarWrapper>
      <S.SidebarImage fixed={sidebarImage.childImageSharp.fixed} />
      <Profile />
      <Menu />
      <Social />
    </S.SidebarWrapper>
  )
}

export default Sidebar
