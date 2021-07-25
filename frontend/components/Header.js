import Link from 'next/link';
import Nav from './Nav';
import { LogoStyles, HeaderStyles } from './styles/Main';

function Header(props) {
  return (
    <HeaderStyles>
      <div className="bar">
        <LogoStyles>
          <Link href="/">Urban Palm Tree</Link>
        </LogoStyles>
      </div>
      <div className="search">
        <p>Search placeholder</p>
      </div>
      <Nav />
    </HeaderStyles>
  );
}

export default Header;
