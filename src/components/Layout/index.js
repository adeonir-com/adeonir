import React from "react"
import PropTypes from "prop-types"

import GlobalSytles from "../../styles/global"
import * as S from "./styles"
import Sidebar from "../Sidebar"

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalSytles />
      <Sidebar />
      <S.LayoutMain>{children}</S.LayoutMain>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
