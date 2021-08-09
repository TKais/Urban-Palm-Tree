import Link from 'next/link';
import Nav from './Nav';
import Searchbox from './Searchbox';
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
      <Searchbox />
    </HeaderStyles>
  );
}

export default Header;
