function renderButton({ triggerContent, handleClick, handleBlur }) {
  return (
    <button onClick={handleClick} onBlur={handleBlur}>
      { triggerContent }
    </button>
  )
}

function renderLink({ triggerContent, href }) {
  return (
    <a href={ href }>
      { triggerContent }
    </a>
  );
}

function Trigger(props) {
  return props.type === 'button' ? renderButton(props) : renderLink(props);
}

export default Trigger;
