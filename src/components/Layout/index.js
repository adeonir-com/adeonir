import React from 'react'
import PropTypes from 'prop-types'
import { TransitionPortal } from 'gatsby-plugin-transition-link'

import Sidebar from '../Sidebar'
import Menu from '../Menu'
import Footer from '../Footer'

import GlobalSytles from '../../styles/global'
import * as S from './styles'

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalSytles />
      <TransitionPortal level='top'>
        <Sidebar />
      </TransitionPortal>
      <S.LayoutMain>
        {children}
        <Footer />
      </S.LayoutMain>
      <TransitionPortal level='top'>
        <Menu />
      </TransitionPortal>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
