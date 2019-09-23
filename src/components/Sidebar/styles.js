import styled from 'styled-components'
import { OverlayScrollbarsComponent as Scrollbar } from 'overlayscrollbars-react'

import colors from '~/styles/colors'

export const SidebarWrapper = styled(Scrollbar)`
  background: ${colors.darker};
  grid-area: sidebar;
  height: 100vh;
  width: 20rem;

  .os-content {
    align-items: center;
    background: ${colors.darker};
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
    text-align: center;
  }
`
