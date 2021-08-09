import { useState } from 'react';
import Trigger from './Trigger';
import Menu from './Menu';

function Tooltip(props) {
  const [isOpen, setOpenState] = useState(false);

  function toggleOpenState() {
    setOpenState(!isOpen);
  }

  return (
    <>
      <Trigger type={props.type} triggerContent={props.triggerContent} handleClick={toggleOpenState} handleBlur={toggleOpenState} />
      {isOpen && <Menu content="Some example menu content" /> }
    </>
  )
}

export default Tooltip;
