import styled from 'styled-components'

export const PageWrapper = styled.section`
  h1 {
    color: #44475a;
    font-size: 2.25rem;
    font-weight: 600;
    text-transform: uppercase;

    &::after {
      background: #6b8cff;
      content: '';
      display: block;
      height: 2px;
      margin-left: -1rem;
      margin-top: 0.5rem;
      width: 20rem;
    }
  }
`
