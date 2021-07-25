import PropTypes from 'prop-types';
import Header from './Header';

function Page(props) {
  return (
    <div>
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
