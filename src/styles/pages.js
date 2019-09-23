import styled from 'styled-components'

import colors from '~/styles/colors'

export const PageWrapper = styled.section`
  h1 {
    color: ${colors.darker};
    font-size: 2.25rem;
    font-weight: 600;
    text-transform: uppercase;

    &::after {
      background: ${colors.accent};
      content: '';
      display: block;
      height: 2px;
      margin-left: -1rem;
      margin-top: 0.5rem;
      width: 20rem;
    }
  }
`
