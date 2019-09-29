import React from 'react'
import { Search } from 'styled-icons/boxicons-regular/Search'
import { Sun } from 'styled-icons/boxicons-regular/Sun'

import * as S from './styles'

const Menu = () => (
  <S.MenuWrapper>
    <S.MenuLink to='/search' title='Pesquisar'>
      <S.MenuItem title='Mudar o tema'>
        <Search size={22} />
      </S.MenuItem>
    </S.MenuLink>
    <S.MenuItem title='Mudar o tema'>
      <Sun size={22} />
    </S.MenuItem>
  </S.MenuWrapper>
)

export default Menu
