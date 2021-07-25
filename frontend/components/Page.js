import PropTypes from 'prop-types';
import Header from './Header';
import { GlobalStyles, InnerStyles } from './styles/Main';

function Page(props) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>
        {props.children}
      </InnerStyles>
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.any
}

export default Page;
