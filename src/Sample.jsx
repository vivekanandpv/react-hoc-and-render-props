import React from 'react';
import { withHoC } from './withHoC';

const Sample = (props) => {
  return <h3>This is Sample Component</h3>;
};

//  this can be deferred to a separate component
export default withHoC(Sample);
