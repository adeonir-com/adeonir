import styled from 'styled-components'

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
    background: var(--post);
    border-radius: 0.5rem;
    display: flex;
  }

  .ais-SearchBox-input {
    background: none;
    border: none;
    color: var(--text);
    font-size: 1.5rem;
    outline: none;
    padding: 1rem;
    width: 100%;

    &::placeholder {
      color: var(--neutral);
    }
  }

  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }

  .ais-Stats,
  .ais-Results {
    color: var(--neutral);
    font-size: 0.8rem;
    margin: 1rem 0;
  }
`
