import React from 'react'

import links from './content'

import * as S from './styles'

const Menu = () => (
  <S.MenuWrapper>
    <S.MenuList>
      {links.map((link, index) => (
        <S.MenuItem key={index}>
          <S.MenuLink to={link.url} activeClassName='active'>
            {link.label}
          </S.MenuLink>
        </S.MenuItem>
      ))}
    </S.MenuList>
  </S.MenuWrapper>
)

export default Menu
