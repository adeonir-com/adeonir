import styled from "styled-components"

export const PageWrapper = styled.section`
  padding: 3rem 2rem 2rem 6rem;
  width: 100%;

  h1 {
    color: #44475a;
    font-size: 2.25rem;
    font-weight: 600;
    text-transform: uppercase;

    &::after {
      background: #1c7ed6;
      content: "";
      display: block;
      height: 2px;
      margin-top: 1rem;
      width: 20rem;
    }
  }
`
