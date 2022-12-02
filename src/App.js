import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [buttonColor, setButtonColor] = useState('red')
  const [checkToggle, setCheckToggle] = useState(false)
  const nextColor = buttonColor === 'red' ? 'blue' : 'red'
  return (
    <div className="container">
      <button style={{ backgroundColor: buttonColor, color: "white" }}
        disabled={checkToggle}
        onClick={() => setButtonColor(nextColor)}
      >

        {`change to ${nextColor}`}
      </button>

      <input type={'checkbox'} id="disable-button-checkbox" onChange={(e) => setCheckToggle(e.target.checked)} />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
