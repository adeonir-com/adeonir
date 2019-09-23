import styled from 'styled-components'
import { Link } from 'gatsby'

import colors from '~/styles/colors'

export const MenuWrapper = styled.nav`
  flex: 1;
`

export const MenuList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
  list-style: none;
`

export const MenuItem = styled.li`
  padding: 0.5rem 0;

  .active {
    color: ${colors.accent};
  }
`

export const MenuLink = styled(Link)`
  color: ${colors.white};
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: ${colors.accent};
  }
`
