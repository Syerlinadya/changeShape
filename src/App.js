import React, { useState } from 'react';
import './App.css';

function App() {
  const [isCircle, setIsCircle] = useState(true);

  return (
    <div className="App">
      <div className={isCircle ? "circle" : "square"}></div>
      <button className="tombol" onClick={() => setIsCircle(!isCircle)}>Change Shape</button>
    </div>
  );
}

export default App;
