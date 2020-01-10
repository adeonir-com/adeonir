import React from 'react'

import getThemeColor from '~/utils/get_theme_color'

import links from './content'

import * as S from './styles'

const Navigation = () => (
  <S.NavigationWrapper>
    <S.NavigationList>
      {links.map((link, index) => (
        <S.NavigationItem key={index}>
          <S.NavigationLink
            to={link.url}
            cover
            direction='left'
            bg={getThemeColor()}
            duration={0.5}
            activeClassName='active'
          >
            {link.label}
          </S.NavigationLink>
        </S.NavigationItem>
      ))}
    </S.NavigationList>
  </S.NavigationWrapper>
)

export default Navigation
