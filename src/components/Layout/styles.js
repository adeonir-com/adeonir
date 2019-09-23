import styled from 'styled-components'

import colors from '~/styles/colors'

export const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 20rem 1fr 3rem;
  grid-template-rows: 1fr;
  grid-template-areas: 'sidebar main menu';
`

export const LayoutMain = styled.main`
  background: ${colors.lighter};
  grid-area: main;
  min-height: 100vh;
  padding: 2rem 1rem 1rem 4rem;
`
