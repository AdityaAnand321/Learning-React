import { useState, useEffect } from 'react';

//example 1: ye first time chalega fir jb jb  render hoga tab chalega.
// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("This is useEffect hook");
//   });
//   return (
//     <>
//     </>
//   )
// }
// export default App;

//example 2: jb jb render(dubara ye function call hoga.) hoga tab tab chalega. matlab jb jb count/count2 change ho rha use effect chalega check in console. q ki useState me jb koi value change hota hai vo component render karna. 
// function App() {

//example3: ye sirf first time chalega. jb jb state(count) change karenge tho ye funciton render karega(matlab dubara chalgega) fir v ye useEffect nhi chagelga agar argument me empty array deye hai tho.
// function App() {
//   const [count, setCount] = useState(0);
//    const [count2, setCount2] = useState(0);

//     useEffect(() => {
//     console.log("This is useEffect hook");
//   },[]);

//   return (
//     <>
//       <p>{count}</p>
//       <button onClick={() => setCount(count + 1)}>Click Me</button>
//       <p>{count2}</p>
//       <button onClick={() => setCount2(count2 + 1)}>Click Me</button>
//     </>
//   )
// }
// export default App

//example 4: ye first time chalge, fir jb count change hoga tabhi chalega. 
// function App() {
//   const [count, setCount] = useState(0);
//   const [count2, setCount2] = useState(0);

//   useEffect(() => {
//     console.log("This is useEffect hook.Count Changed");
//   }, [count]);

//   return (
//     <>
//       <p>{count}</p>
//       <button onClick={() => setCount(count + 1)}>Click Me</button>
//       <p>{count2}</p>
//       <button onClick={() => setCount2(count2 + 1)}>Click Me</button>
//     </>
//   )
// }

// //5 ye first time chalge, fir jb count2 change hoga tabhi chalega. 
// function App() {
//   const [count, setCount] = useState(0);
//   const [count2, setCount2] = useState(0);

//   useEffect(() => {
//     console.log("This is useEffect hook.Count Changed");
//   }, [count2]);

//   return (
//     <>
//       <p>{count}</p>
//       <button onClick={() => setCount(count + 1)}>Click Me</button>
//       <p>{count2}</p>
//       <button onClick={() => setCount2(count2 + 1)}>Click Me</button>
//     </>
//   )
// }
// export default App


 
//example 6: ye first time chalge, fir jb count and count2 change hoga tabhi chalega. 

//  function App() {
//   const [count, setCount] = useState(0);
//   const [count2, setCount2] = useState(0);

//   useEffect(() => {
//     console.log("only run when count1 changes");
//   }, [count ]);

//     useEffect(() => {
//     console.log("only run on count 2 changes.");
//   }, [count2]);

//   return (
//     <>
//       <p>{count}</p>
//       <button onClick={() => setCount(count + 1)}>Click Me</button>
//       <p>{count2}</p>
//       <button onClick={() => setCount2(count2 + 1)}>Click Me</button>
//     </>
//   )
// }
// export default App