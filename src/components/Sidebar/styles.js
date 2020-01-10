import styled from 'styled-components'

export const SidebarWrapper = styled.aside`
  align-items: center;
  background: var(--sidebar);
  display: flex;
  flex-direction: column;
  grid-area: sidebar;
  height: 100vh;
  overflow-y: auto;
  padding: 0 2rem;
  position: fixed;
  text-align: center;
  width: 20rem;
  transition: background 0.3s ease;
`
