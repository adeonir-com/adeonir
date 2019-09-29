import styled from 'styled-components'

import colors from '~/styles/colors'

export const PaginationWrapper = styled.section`
  align-items: center;
  color: ${colors.gray};
  display: flex;
  font-size: 0.8rem;
  justify-content: space-between;
  text-transform: uppercase;

  a {
    align-items: center;
    color: ${colors.darker};
    display: flex;
    font-size: 0.8rem;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.3s ease;

    &:hover {
      color: ${colors.accent};
    }
  }
`
