
import React from 'react';
import './App.css';
function App(){
  return (
    <div className='App'>
        <div className='header-container'>
          <h1>
            Calculator App
          </h1>
        </div>
        <div className="calculator">
          <button className='operator'>AC</button>
          <button className='operator'>X</button>
          <button className='operator'>+</button>
          <button className='operatornull'></button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button className='operator'>x</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button className='operator'>-</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className='operator'>/</button>
          <button>%</button>
          <button>0</button>
          <button>.</button>
          <button className='operator'>=</button>
          
          

        </div>
    </div>
  );
}
export default App;