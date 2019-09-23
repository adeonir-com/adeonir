import React from 'react'

import links from './content'

import * as S from './styles'

const Navigation = () => (
  <S.NavigationWrapper>
    <S.NavigationList>
      {links.map((link, index) => (
        <S.NavigationItem key={index}>
          <S.NavigationLink to={link.url} activeClassName='active'>
            {link.label}
          </S.NavigationLink>
        </S.NavigationItem>
      ))}
    </S.NavigationList>
  </S.NavigationWrapper>
)

export default Navigation
