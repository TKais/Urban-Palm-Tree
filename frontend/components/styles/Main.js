import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --green: #65B8BF;
    --darkgreen: #74b560;
    --hotpink: #F96CFF;
    --maxWidth: 1200px;
    --fontFamily: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: var(--fontFamily);
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: var(--green);
  }
  a:hover {
    text-decoration: underline;
  }
  button {
    font-family: var(--fontFamily);
  }
`;

export const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

export const LogoStyles = styled.h1`
  background: var(--hotpink);
  font-size: 4rem;
  transform: skew(-7deg);
  margin-left: 2rem;
  a {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
  }
`;

export const HeaderStyles = styled.header`
  .bar {
    border-bottom: 10px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: center;
  }

  .search {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid var(--black, black);
  }
`;
