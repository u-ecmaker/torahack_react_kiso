import { useState } from 'react';

const TogleButton = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(prevOpen => !prevOpen);
  }

  return (
    <button onClick={toggle}>
      {open ? 'OPEN' : 'CLOSE'}
    </button>
  )
}

export default TogleButton;