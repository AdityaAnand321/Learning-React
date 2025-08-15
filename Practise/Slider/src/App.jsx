import React from 'react'
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import {useState} from 'react';

const App = () => {

  const data=[
    {name: "Aditya",roll:1},
    {name: "Aditya",roll:2},
    {name: "Aditya",roll:3},
    {name: "Aditya",roll:4},
    {name: "Aditya",roll:5},
    {name: "Aditya",roll:6},
  ]
  const [value,setValue]=useState(1);

  const filter=data.filter(item=>item.roll<=value);

  return (
    <div>
      <h2>Value: {value}</h2>
      <Slider
      min={0}
      max={10}
      value={value}
      onChange={(val)=>setValue(val)}
      />

      <ul>
        {filter.map((item,index)=>(
          <li key={index}>
            {item.name}-{item.roll}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
