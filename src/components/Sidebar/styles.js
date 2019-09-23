import styled from 'styled-components'

import colors from '~/styles/colors'

export const SidebarWrapper = styled.aside`
  align-items: center;
  background: ${colors.darker};
  display: flex;
  flex-direction: column;
  grid-area: sidebar;
  height: 100vh;
  padding: 2rem;
  text-align: center;
  width: 20rem;
  overflow-y: auto;
`
