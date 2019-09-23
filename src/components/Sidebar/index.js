import React from 'react'

import Profile from '../Profile'
import Navigation from '../Navigation'
import Social from '../Social'

import * as S from './styles'

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <Navigation />
    <Social />
  </S.SidebarWrapper>
)

export default Sidebar
