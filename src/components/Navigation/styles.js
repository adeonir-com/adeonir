import styled from 'styled-components'
import { Link } from 'gatsby'

import colors from '~/styles/colors'

export const NavigationWrapper = styled.nav`
  border-bottom: 1px solid var(--disabled);
  border-top: 1px solid var(--disabled);
  display: flex;
  flex: 1;
  justify-content: center;
  margin: 1rem 0;
  padding: 1rem 0;
  width: 100%;
`

export const NavigationList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
  list-style: none;
`

export const NavigationItem = styled.li`
  padding: 0.5rem 0;
  text-align: center;

  .active {
    color: var(--accent);
  }
`

export const NavigationLink = styled(Link)`
  color: ${colors.lighter};
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: var(--accent);
  }
`
