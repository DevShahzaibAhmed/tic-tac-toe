import React, { useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Block from './component/Block';

function App() {
  const [state, setState]=useState(Array(9).fill('null'));
  return <div className='board'>
    <div className="board">
            <div className="row">
                <Block/>
                <Block/>
                <Block/>
            </div>
            <div className="row">
                <Block/>
                <Block/>
                <Block/>
            </div>
            <div className="row">
                <Block/>
                <Block/>
                <Block/>
            </div>

        </div>
  </div>
}

export default App;
