import React from 'react'
import PropTypes from 'prop-types'

import Sidebar from '../Sidebar'
import Menu from '../Menu'

import GlobalSytles from '../../styles/global'
import * as S from './styles'

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalSytles />
      <Sidebar />
      <S.LayoutMain>{children}</S.LayoutMain>
      <Menu />
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
