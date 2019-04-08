import React, { useState } from 'react';

const Toggle = () => {
  const [isToggled, setToggle] = useState(false);
  return (
    <div>
      {isToggled && <h2>Hello</h2>}
      <button onClick={() => setToggle(!isToggled)}>Toggle</button>
    </div>
  );
};

export default Toggle;
