import React from 'react';
import Demo from './Demo';
import Sample from './Sample';

function App() {
  const i = 100;
  return (
    <div className='App'>
      <h3>Higher Order Components and Render Props</h3>

      <hr />
      <Demo render={() => <Sample name='Sukesh' counter={i} />} />
    </div>
  );
}

export default App;
