import React, { Component } from 'react';

export const withHoC = (BaseComponent) => {
  class HoC extends Component {
    render() {
      return (
        <>
          <div className='wrapper'>
            <BaseComponent foo={123} />
          </div>
        </>
      );
    }
  }

  return HoC;
};
