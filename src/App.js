import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [myName, setMyName] = useState('Roshan is on');

  const changeName = () => {

    let val = myName;

    (val=== 'Roshan is on') ?
      setMyName('Bamidi Roshan') : setMyName('Roshan is on');
  }

  return (
    <div>
      <h1>{myName}</h1>
      <button onClick={changeName} >Click me plz</button>
      </div>
  );
}

export default App;
