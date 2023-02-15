import React from 'react';


const CountdownWrapper = ( {children}) => {
  return (
    <div className="h-full w-64  bg-brand rounded-lg shadow-lg overflow-hidden mx-auto mt-10" css={{ width: '300px', height: '300px' }}>
      {children}
    </div>
  );
};

export default CountdownWrapper;
