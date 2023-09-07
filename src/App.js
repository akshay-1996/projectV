import logo from './logo.svg';
import im1 from './images/images_1.jpeg';
import im2 from './images/images_2.jpeg';
import im3 from './images/images_3.jpeg';
import im4 from './images/images_4.jpeg';
import im5 from './images/images_5.jpeg';
import im6 from './images/images_6.jpeg';
import im7 from './images/images_7.jpeg';
import im8 from './images/images_8.jpg';
import im9 from './images/images_9.jpg';
import im10 from './images/images_10.jpg';
import im11 from './images/images_11.jpg';
import im12 from './images/images_12.jpg';
import im13 from './images/images_13.jpg';
import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  const [showlogo, setlogo] = useState(true)
  const [index, setIndex] = useState(0)

  const toggle = () => {
    setlogo(!showlogo)
  }

  const increment = (e) => {
    e.stopPropagation()
    if (index < Arr.length - 1) {
      setIndex(index + 1);
    }
    else{
      setIndex(0)
    }
  }

  const decrement = (e) => {
    e.stopPropagation()
    if(index > 0){
      setIndex(index - 1)
    }
  }

  const Arr = [im1,im2,im3,im4,im5,im6,im7,im8,im9,im10,im11,im12,im13]

  return (
    <div className="App">
      {showlogo ? 
        <header onClick={toggle} className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> 
        </header> :
        <header onClick={toggle} className='App-header'>
          <div className='Image-container'>
            <img src={Arr[index]} className='App-images' alt='logo' />
          </div>
          <div className='Button-group'>
            <button className='Button' style={{marginRight: '32px'}} onClick={decrement}>&lt;</button>
            <button className='Button' style={{marginLeft: '32px'}} onClick={increment}>&gt;</button>
          </div>
        </header>
      }
    </div>
  );
}

export default App;