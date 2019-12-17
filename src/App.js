import React, { useState } from 'react';
import './App.css';

import Canvas from './components/Canvas'
import Settings from './components/Settings'

const App = () => {

  const [colorState, setColorState] = useState('#000000')
  const [sizeState, setSizeState] = useState('4px')
  const [artState, setArtState] = useState([])


  const handleColorSelect = (e) => {
    console.log(e.target.value)
    setColorState(e.target.value)
  }

  const handleSizeSelect = (e) => {
    const size = e.currentTarget.dataset.size
    setSizeState(size)
  }

  const handleClearCanvas = () => {
    setArtState([])
  }

  return (
    <div className="App">
      <Settings 
        handleColorSelect={handleColorSelect}
        handleSizeSelect={handleSizeSelect}
        colorState={colorState}
        sizeState={sizeState}
        handleClearCanvas={handleClearCanvas}
        />
      <Canvas 
        colorState={colorState}
        sizeState={sizeState}
        artState={artState}
        setArtState={setArtState}
        />
    </div>
  );
}

export default App;
