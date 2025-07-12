import { useEffect, useState,useRef } from 'react'
 

function App() {
     let val=useRef(0);
   let normalvalue=0;
   const[count,setCount]=useState(0);
  let btnref=useRef();
  // function  handleIncrement(){
  //   val=val+1;
  //   console.log("Value of val: ",val);  //value bar bar 2 hi rahegi ye apni value update ny kar pa rha hai
  //   setCount(count+1);
  // }
  function handleIncrement(){
  val.current=val.current+1;
  console.log("value of val",val.current);
   }
  
  function changeColor(){
 btnref.current.style.color="red";

  }

  useEffect(()=>console.log("main firse render hogya"));
 return (
  <div>
    <button ref={btnref} onClick={handleIncrement}>Increment</button>
    <br />

     
    <p>val={val.current}</p>  
  

    <button  onClick={changeColor} >
      Change Color of 1st Button
    </button>

    <br/>
       <br/>

  Count: {count}
    <br/>
    <button onClick={()=>setCount(count+1)}>
    click
    </button>

    <p>normalValue={normalvalue}</p>
    <button onClick={()=>{normalvalue+=1; console.log(normalvalue)}}>click</button>

  </div>
 )
}

export default App
