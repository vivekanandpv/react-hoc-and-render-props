import React from 'react';
import { withHoC } from './withHoC';

const Sample = (props) => {
  //  handler is now provided by HoC
  return (
    <h3 onClick={props.handler}>This is Sample Component foo: {props.foo}</h3>
  );
};

//  this can be deferred to a separate component
export default withHoC(Sample);
