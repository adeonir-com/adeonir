import styled from 'styled-components'

import colors from '~/styles/colors'

export const PostWrapper = styled.article`
  &::before {
    background: ${props =>
      props.background ? props.background : colors.accent};
    content: '';
    display: block;
    height: 4px;
    margin-left: -1rem;
    margin-top: 2.75rem;
    width: 30rem;
  }
`

export const PostHeader = styled.header`
  margin: 2rem auto;
  padding: 0 5rem;
  position: relative;
`

export const PostBackButton = styled.a`
  align-items: center;
  color: var(--button);
  cursor: pointer;
  display: flex;
  height: 3rem;
  justify-content: center;
  left: 20rem;
  position: absolute;
  top: 0;
  transition: all 0.3s ease;
  width: 3rem;

  &:hover {
    color: var(--accent);
  }
`

export const PostTitle = styled.h1`
  color: var(--title);
  font-size: 5rem;
  font-weight: 300;
  margin: 2rem 0;
  transition: color 0.2s ease;
`

export const PostDescription = styled.h2`
  color: var(--text);
  font-size: 2rem;
  font-weight: 300;
  line-height: 1.5;
  width: 80%;
  transition: color 0.2s ease;
`

export const PostTag = styled.div`
  align-items: center;
  color: var(--neutral);
  display: flex;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  transition: color 0.2s ease;

  svg {
    margin-right: 0.5rem;
  }
`

export const PostDate = styled.time`
  align-items: center;
  color: var(--neutral);
  display: flex;
  font-size: 0.8rem;
  font-weight: 700;
  margin-top: 2rem;
  text-transform: uppercase;

  svg {
    margin-right: 0.5rem;
  }
`

export const PostContent = styled.div`
  margin: auto;
  max-width: 70rem;
  padding: 2rem 5rem;

  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: var(--text);
    font-size: 1.25rem;
    font-weight: 300;
    letter-spacing: 0.069rem;
    line-height: 1.7;
    padding: 0 1.4rem;
  }

  p {
    margin: 0 auto 1.6rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
  }

  ul,
  ol {
    list-style: disc;
    margin: 0 auto 1.6rem;
    padding-left: 2.5rem;
  }

  li {
    padding: 0.625rem 0;

    & > ul {
      margin-bottom: 0;
    }
  }

  p,
  li {
    code {
      word-wrap: break-word;
    }
  }

  img {
    display: block;
    max-width: 100%;
  }

  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;
  }

  blockquote {
    border-left: 0.3rem solid var(--accent);
    color: var(--text);
    margin: 3.125rem auto;
    padding: 0 1.875rem;
  }

  hr {
    border: 1px solid var(--disabled);
    margin: 3rem auto;
  }
  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 700;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }
  h1 {
    font-size: 2.8rem;
  }

  h2 {
    font-size: 2.1rem;
  }

  h3 {
    font-size: 1.6rem;
  }

  h4 {
    font-size: 1.4rem;
  }

  h5 {
    font-size: 1.2rem;
  }

  strong {
    font-weight: 700;
  }

  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }
  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;

    &.lazyload {
      opacity: 0;
    }

    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }

  .gatsby-highlight {
    padding: 0 1.6rem 1.6rem;
  }

  .instagram-media {
    margin: 1rem auto !important;
  }

  a {
    border-bottom: 1px dashed var(--accent);
    color: var(--accent);
    text-decoration: none;
    transition: opacity 0.5s;

    svg {
      color: var(--text);
    }

    &:hover {
      opacity: 0.8;
    }
  }
`
