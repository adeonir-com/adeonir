import styled from 'styled-components'

export const FooterContainer = styled.footer`
  align-items: center;
  border-top: 1px solid var(--disabled);
  display: flex;
  height: 3.75rem;
  justify-content: center;
  width: 100%;
`

export const FooterText = styled.p`
  color: var(--disabled);
  font-size: 0.75rem;
  margin: 0 0.25rem;

  &:first-child {
    margin-left: 0;
  }
`

export const FooterLink = styled.a`
  color: var(--disabled);
  font-size: 0.75rem;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent);
  }
`
