import styled from 'styled-components'
import { Link } from 'gatsby'

import colors from '~/styles/colors'

export const NavigationWrapper = styled.nav`
  flex: 1;
`

export const NavigationList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
  list-style: none;
`

export const NavigationItem = styled.li`
  padding: 0.5rem 0;

  .active {
    color: ${colors.accent};
  }
`

export const NavigationLink = styled(Link)`
  color: ${colors.lighter};
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: ${colors.accent};
  }
`
