import React, { Component } from 'react';

export const withHoC = (BaseComponent) => {
  class HoC extends Component {
    displayAlert = () => {
      alert('Alert from HoC');
    };
    render() {
      //    It is the HoC that receives the props
      //    So, it is necessary to pass the props down to the base component with spread operator
      return (
        <>
          <div className='wrapper'>
            <BaseComponent
              foo={123}
              handler={this.displayAlert}
              {...this.props}
            />
          </div>
        </>
      );
    }
  }

  return HoC;
};
