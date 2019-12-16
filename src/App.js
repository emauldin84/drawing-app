import React, { useState } from 'react';
import './App.css';

import Canvas from './components/Canvas'
import Settings from './components/Settings'

const App = () => {

  const [colorState, setColorState] = useState('black')
  const [sizeState, setSizeState] = useState('4px')

  const handleColorSelect = (e) => {
    console.log(e.target.value)
    setColorState(e.target.value)
  }

  const handleSizeSelect = (size) => {
    setSizeState(size)
  }

  return (
    <div className="App">
      <Settings handleColorSelect={handleColorSelect} handleSizeSelect={handleSizeSelect} colorState={colorState} sizeState={sizeState}/>
      <Canvas colorState={colorState} sizeState={sizeState}/>
    </div>
  );
}

export default App;
