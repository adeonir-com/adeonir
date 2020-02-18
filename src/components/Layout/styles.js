import styled from 'styled-components'

export const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 20rem 1fr 3rem;
  grid-template-rows: 1fr;
  grid-template-areas: 'sidebar main menu';
`

export const LayoutMain = styled.main`
  display: flex;
  flex-direction: column;
  grid-area: main;
  justify-content: space-between;
  min-height: 100vh;
  padding: 3rem 1rem 0 5rem;
  transition: background 0.2s ease;
`
