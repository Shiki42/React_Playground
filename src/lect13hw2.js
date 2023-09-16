import React, { useState } from 'react';
import './l13hw2.css';

const App = () => {
  const Items = [...Array(20).keys()]
  const [color,setcolor] = useState(Items.map(()=>{return false}))
  const handleClick = (index) => {
    setcolor((prev)=>(prev.map((e,i)=>{if (i==index) {return !e} else {return e}})))
  }
  return (
    <div className="grid-container">
      {Items.map((item, index) => (
        <div key={index} className="grid-item" style = {{backgroundColor: color[index] ? 'white' : 'yellow',}} onClick={() => handleClick(index)}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default App;