import styled from 'styled-components'

import colors from '~/styles/colors'

export const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
`

export const PageTitle = styled.h1`
  color: ${colors.darker};
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-transform: uppercase;

  &::after {
    background: ${colors.accent};
    content: '';
    display: block;
    height: 4px;
    margin-left: -1rem;
    margin-top: 0.5rem;
    width: 30rem;
  }
`
