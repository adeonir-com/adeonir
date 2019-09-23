import styled from 'styled-components'
import { OverlayScrollbarsComponent as Scrollbar } from 'overlayscrollbars-react'

import colors from '~/styles/colors'

export const SidebarWrapper = styled(Scrollbar)`
  background: ${colors.darker};
  grid-area: sidebar;
  height: 100vh;
  padding: 0 2rem;
  width: 20rem;

  .os-content {
    align-items: center;
    background: ${colors.darker};
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`
