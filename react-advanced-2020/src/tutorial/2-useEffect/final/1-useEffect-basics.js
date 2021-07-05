import React, { useState, useEffect } from 'react';

// useEffect allows you to do a side effects (work outside a component !). That work could be: changing document title, sighup for subscription, fetching data, settingup event listener, etc. By default function inside useEffect runs after every re-render !!! Just this is power of useEffect.
// GENERAL RULL: We cannot use Hooks inside Conditions ! Instead, We can place Condition inside Hook
// You can have as many useEffects as you want !!!

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);


  
  useEffect(() => {
    console.log('call useEffect');                // it runs after render
    if (value > 0) {
      document.title = `New Messages(${value})`;  // it runs after render
    }
  }, [value]);  // Array Brackets means, second argument - lists of dependences. If you pass there some argument. If this argument will change, the function inside useEffect will run. So, useEffect funtionality depends on this argument. 



  // useEffect(() => {
  //   console.log('call useEffect');                // it runs after render
  //   if (value > 0) {
  //     document.title = `New Messages(${value})`;  // it runs after render
  //   }
  // }, []);  // Array Brackets means, second argument - lists of dependences. IN THIS CASE, function inside a useEffect run only once - on the INITIAL RENDER. It will not run second or third time after each RERENDERING! ONLY ONCE!


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
