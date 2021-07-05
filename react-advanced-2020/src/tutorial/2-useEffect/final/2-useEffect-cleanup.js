import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize', checkSize);
    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', checkSize);
      // It cleans up rerender history on events in browser. Every time, we use setEffect and change initial property of state - each time we rerender component and each time runs events too. So, every this running of event is saved in browser, that later couses problems. For this reason we need cleanup - remove EventListeners!

      
    };
  }, []); // good practice: use 'Dependence Array []' with cleanup (removeEventListener())

  console.log('render');
  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
