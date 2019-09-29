import styled from 'styled-components'

import colors from '~/styles/colors'

export const SocialWrapper = styled.nav`
  padding-bottom: 1rem;
  width: 100%;
`

export const SocialList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none;
`

export const SocialItem = styled.li``

export const SocialLink = styled.a`
  color: ${colors.lighter};
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: ${colors.accent};
  }
`

export const IconWrapper = styled.div`
  fill: ${colors.lighter};
  height: 1.5rem;
  width: 1.5rem;
`
