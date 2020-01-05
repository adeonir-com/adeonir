import styled from 'styled-components'

export const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
`

export const PageTitle = styled.h1`
  color: var(--title);
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-transform: uppercase;

  &::after {
    background: var(--accent);
    content: '';
    display: block;
    height: 4px;
    margin-left: -1rem;
    margin-top: 0.5rem;
    width: 30rem;
  }
`
