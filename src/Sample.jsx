import React from 'react';

const Sample = (props) => {
  return (
    <>
      <h3>
        This is Sample: {props.name}; Counter: {props.counter}
      </h3>
    </>
  );
};

export default Sample;
