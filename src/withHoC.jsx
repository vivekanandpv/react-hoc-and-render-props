import React, { Component } from 'react';

export const withHoC = (BaseComponent) => {
  class HoC extends Component {
    displayAlert = () => {
      alert('Alert from HoC');
    };
    render() {
      return (
        <>
          <div className='wrapper'>
            <BaseComponent foo={123} handler={this.displayAlert} />
          </div>
        </>
      );
    }
  }

  return HoC;
};
