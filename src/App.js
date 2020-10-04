import React, { useState } from 'react';
import './App.css';

/**
 *
 * @param {*} param0
 */

const MyButton = ({
  className = '',
  mode = 'light',
  size = 'medium',
  ...otherProps
}) => {
  return (
    <button
      className={`${className} button--${mode} button--${size}`}
      {...otherProps}
    />
  );
};

function App() {
  const [mode, setMode] = useState('light');
  const [size, setSize] = useState('medium');

  const changeMode = (event) => {
    setMode(event.target.id);
  };

  const changeSize = (event) => {
    setSize(event.target.id);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Reusable Component</p>
        <MyButton size={size} mode={mode}>
          Learn React
        </MyButton>
        <hr />
        <section>
          <p>Mode</p>
          <button id="light" onClick={changeMode}>
            Light
          </button>
          <button id="dark" onClick={changeMode}>
            Dark
          </button>
        </section>
        <section>
          <p>Size</p>
          <button id="small" onClick={changeSize}>
            Small
          </button>
          <button id="medium" onClick={changeSize}>
            Medium
          </button>
          <button id="large" onClick={changeSize}>
            Large
          </button>
        </section>
      </header>
    </div>
  );
}

export default App;
