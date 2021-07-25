import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --green: #65B8BF;
    --hotpink: #F96CFF;
    --maxWidth: 1200px;
  }
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
