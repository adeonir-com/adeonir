import React, { useState, useEffect } from 'react'
import { Search } from 'styled-icons/boxicons-regular/Search'
import { Sun } from 'styled-icons/boxicons-regular/Sun'

import getThemeColor from '~/utils/get_theme_color'

import * as S from './styles'

const Menu = () => {
  const [theme, setTheme] = useState(null)

  const isMode = theme === 'dark'

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  return (
    <S.MenuWrapper>
      <S.MenuLink
        to='/search'
        cover
        direction='right'
        bg={getThemeColor()}
        duration={0.5}
      >
        <S.MenuItem title='Pesquisar'>
          <Search size={22} />
        </S.MenuItem>
      </S.MenuLink>
      <S.MenuItem
        title='Mudar o tema'
        onClick={() => {
          window.__setPreferredTheme(isMode ? 'light' : 'dark')
        }}
      >
        <Sun size={22} />
      </S.MenuItem>
    </S.MenuWrapper>
  )
}

export default Menu
