import PropTypes from 'prop-types';
import Header from './Header';
import Tooltip from './Tooltip';
import Form from './Form';
import { GlobalStyles, InnerStyles } from './styles/Main';

function Page(props) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>
        {props.children}
        <Form />
        <Tooltip type="button" triggerContent="Info" />
      </InnerStyles>
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.any
}

export default Page;
