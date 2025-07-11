import { useState, useEffect } from 'react';

function App1(){
  const [count, setCount] = useState(0);
   const [count2, setCount2] = useState(0);

    useEffect(() => {
    console.log("This is useEffect hook");
  },[]);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <p>{count2}</p>
      <button onClick={() => setCount2(count2 + 1)}>Click Me</button>
    </>
  )
}



export default App1;