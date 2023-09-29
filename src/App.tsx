import React, { useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Block from './component/Block';

function App() {
  const [state, setState]=useState(Array(9).fill('null'));
  const [current_turn, set_current_turn]=useState("X");
  const checkWinner=()=>{
    const win=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];
    for(let i = 0; i <window.length; i++) {
      const [a,b,c]=win[i];
  };
  const handleBlockClick = (index: number) => {
    const stateCopy=Array.from(state);
    stateCopy[index] = current_turn;
    set_current_turn(current_turn==='X' ? 'O' : 'X');
    setState(stateCopy);
  };

  return <div className='board'>
    <div className="board">
            <div className="row">
                <Block onclick={()=>handleBlockClick(0)} value={state[0]}/>
                <Block onclick={()=>handleBlockClick(1)} value={state[1]}/>
                <Block onclick={()=>handleBlockClick(2)} value={state[2]}/>
            </div>
            <div className="row">
                <Block onclick={()=>handleBlockClick(3)} value={state[3]}/>
                <Block onclick={()=>handleBlockClick(4)} value={state[4]}/>
                <Block onclick={()=>handleBlockClick(5)} value={state[5]}/>
            </div>
            <div className="row">
                <Block onclick={()=>handleBlockClick(6)} value={state[6]}/>
                <Block onclick={()=>handleBlockClick(7)} value={state[7]}/>
                <Block onclick={()=>handleBlockClick(8)} value={state[8]}/>
            </div>

        </div>
  </div>
}

export default App;
