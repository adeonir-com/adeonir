import styled from 'styled-components'
import { Link } from 'gatsby'

import colors from '~/styles/colors'

export const MenuWrapper = styled.aside`
  align-items: center;
  display: flex;
  flex-direction: column;
  grid-area: menu;
  width: 3rem;
`

export const MenuLink = styled(Link)`
  display: block;
`

export const MenuItem = styled.span`
  color: ${colors.gray};
  cursor: pointer;
  display: block;
  height: 3rem;
  padding: 1rem;
  width: 3rem;
`
