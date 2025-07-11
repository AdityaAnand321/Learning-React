import React, { useState } from 'react';
import { Bell } from 'lucide-react';

const counter = () => {
 const[count,setCount]=useState(0);
//console.log(useState(8)); //it will return [8, ƒunction]
console.log("bittu");
  const increment = ()=>{
   setCount(count+1);
   setCount(count+2);
   setCount(count+3);//bas 3 add hoga baki nhi.
    console.log(count);
  }
  return (
    <div className='counter-container'>
      <p id='para'> <Bell size={15}/><sup>{count}</sup> </p>
      <button id='btn' onClick={()=>increment()} >Click Me</button>
    </div>
  )
}
export default counter
