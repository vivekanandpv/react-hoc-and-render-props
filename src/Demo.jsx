import React from 'react';

const Demo = (props) => {
  return (
    <>
      <h3>This is Demo wrapper</h3>
      <hr />
      {props.render ? props.render() : <p>Default Content</p>}
    </>
  );
};

export default Demo;
