import PropTypes from 'prop-types';
import Header from './Header';
import { GlobalStyles } from './styles/Main';

function Page(props) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <p>I'm the page component</p>
      {props.children}
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.any
}

export default Page;
