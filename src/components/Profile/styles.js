import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import colors from '~/styles/colors'

export const ProfileWrapper = styled.section`
  color: ${colors.lighter};
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
`

export const ProfileLink = styled(AniLink)`
  text-decoration: none;
  transition: color 0.3s;

  &:hover h1 {
    color: var(--accent);
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
  font-size: 0.9rem;
  font-weight: 300;
`
