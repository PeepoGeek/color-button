import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

export const primaryColor = 'MediumVioletRed'
export const secondaryColor = 'MidnightBlue'

function App() {


  const [buttonColor, setButtonColor] = useState(primaryColor)
  const [checkToggle, setCheckToggle] = useState(false)
  const nextColor = buttonColor === primaryColor ? secondaryColor : primaryColor




  return (
    <div className="container">
      <button style={{ backgroundColor: checkToggle ? "grey" : buttonColor, color: "white" }}
        disabled={checkToggle}
        onClick={() => setButtonColor(nextColor)}
      >

        {`change to ${replaceCamelWithSpaces(nextColor)}`}
      </button>

      <input type={'checkbox'} id="disable-button-checkbox" onChange={(e) => setCheckToggle(e.target.checked)} />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
