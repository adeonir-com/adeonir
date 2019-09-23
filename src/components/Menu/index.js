import React from 'react'
import { Search } from 'styled-icons/boxicons-regular/Search'
import { Bulb } from 'styled-icons/boxicons-regular/Bulb'

import * as S from './styles'

const Menu = () => (
  <S.MenuWrapper>
    <S.MenuLink to='/search' title='Pesquisar'>
      <S.MenuItem title='Mudar o tema'>
        <Search />
      </S.MenuItem>
    </S.MenuLink>
    <S.MenuItem title='Mudar o tema'>
      <Bulb />
    </S.MenuItem>
  </S.MenuWrapper>
)

export default Menu
