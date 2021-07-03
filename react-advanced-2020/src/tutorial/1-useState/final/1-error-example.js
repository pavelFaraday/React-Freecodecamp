import React from 'react';

const ErrorExample = () => {
  let title = 'random title';

  // There React cant change/rerender value of 'title' propery without useState Hook !
  // It can only change value in console!
  
  const handleClick = () => {
    title = 'hello people';
    console.log(title);
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
