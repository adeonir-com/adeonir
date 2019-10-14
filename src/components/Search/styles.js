import styled from 'styled-components'

import colors from '~/styles/colors'

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }

  .ais-SearchBox-form {
    background: ${colors.white};
    border-radius: 0.5rem;
    display: flex;
  }

  .ais-SearchBox-input {
    background: none;
    border: none;
    color: ${colors.darker};
    font-size: 1.5rem;
    outline: none;
    padding: 1rem;
    width: 100%;

    &::placeholder {
      color: ${colors.gray};
    }
  }

  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }

  .ais-Stats {
    color: ${colors.gray};
    font-size: 0.8rem;
    margin: 1rem 0;
  }
`
