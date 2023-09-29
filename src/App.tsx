import React from 'react';
import logo from './logo.svg';
import './App.css';
import Block from './component/Block';

function App() {
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
