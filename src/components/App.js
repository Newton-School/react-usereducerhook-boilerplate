import React from 'react';
import '../styles/App.css';


//define the function and the actions


const App = () => {

  // define the variables in use Reducer
 

  return (
    <div id="main">
      {/* access  the variables */}
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: 'INCREMENT' });
          dispatch({ type: 'ToogleText' });
        }}
      >
        Click Here
      </button>
      
      {state.showText && <p>This Is The Text</p>}

    </div>
  );
};

export default App;
