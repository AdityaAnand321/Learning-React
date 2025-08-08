// import React from 'react'
// import { useState,useReducer } from 'react';


// const initialState=0;

// const reducer=(state,action)=>{
//     switch(action)
//     {
//       case "Increment":
//         return state+1;
//       case "Decrement":
//         return state-1;
//       default:
//         return state;
//     }
// }


// const Counter = () => {
//     const[state,dispatch]=useReducer(reducer,initialState);//use Reducer hook dispatch return karta hai jisse ham reducer functions call karte hai 

//   return (
//     <div>
//       <p>{state}</p>
//       <button onClick={()=>dispatch("Increment")}>Increment</button>
//       <button onClick={()=>dispatch("Decrement")}>Decrement</button>
//     </div>
//   )
// }

// export default Counter


import React from 'react';
import {useState,useReducer} from 'react';

const initialValue=0;

const reducer=(state,action)=>{
  switch(action)
  {
    action:
  }
}

const Counter=()=>{
   const[state,dispatch]= useReducer(reducer,initialValue);

   return(  
    <div>

     <p>{state}</p>
   <div onClick={()=>dispatch("Increment")}>Increment</div>
   <div onClick={()=>dispatch("Decrement")}>Decrement</div>
    </div>


   )
  
}