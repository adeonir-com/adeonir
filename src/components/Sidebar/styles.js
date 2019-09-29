import styled from 'styled-components'

import colors from '~/styles/colors'

export const SidebarWrapper = styled.aside`
  align-items: center;
  background: ${colors.darker};
  background: ${colors.darker};
  display: flex;
  flex-direction: column;
  grid-area: sidebar;
  height: 100vh;
  overflow-y: auto;
  padding: 0 2rem;
  position: fixed;
  text-align: center;
  width: 20rem;
`
