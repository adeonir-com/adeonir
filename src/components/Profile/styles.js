import styled from 'styled-components'
import { Link } from 'gatsby'

import colors from '~/styles/colors'

export const ProfileWrapper = styled.section`
  border-bottom: 1px solid ${colors.dark};
  color: ${colors.lighter};
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  padding-top: 2rem;
  width: 100%;
`

export const ProfileLink = styled(Link)`
  text-decoration: none;
  transition: color 0.3s;

  &:hover h1 {
    color: ${colors.accent};
  }
`

export const ProfileAuthor = styled.h1`
  color: ${colors.lighter};
  font-size: 1.75rem;
  margin: 1rem auto 0.75rem;
  transition: color 0.5s;
`

export const ProfilePosition = styled.h2`
  color: ${colors.light};
  font-size: 0.8rem;
  font-weight: 300;
`
