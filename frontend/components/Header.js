import Link from 'next/link';
import Nav from './Nav';
import { LogoStyles } from './styles/Main';

function Header(props) {
  return (
    <header>
      <div className="bar">
        <LogoStyles>
          <Link href="/">Urban Palm Tree</Link>
        </LogoStyles>
      </div>
      <div className="search">
        <p>Search placeholder</p>
      </div>
      <Nav />
    </header>
  );
}

export default Header;
