import React, { useState, useEffect } from 'react';

// useEffect allows you to do a side effects (work outside a component !). That work could be: changing document title, sighup for subscription, fetching data, settingup event listener, etc. By default function inside useEffect runs after every re-render !!! Just this is power of useEffect.
// GENERAL RULL: We cannot use Hooks inside Conditions ! Instead, We can place Condition inside Hook

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('call useEffect');                // it runs after render
    if (value > 0) {
      document.title = `New Messages(${value})`;  // it runs after render
    }
  });

  console.log('render component');  // render runnig
  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
