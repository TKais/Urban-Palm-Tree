import PropTypes from 'prop-types';

function Page(props) {
  return (
    <div>
      <p>I'm the page component</p>
      {props.children}
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
}

export default Page;
