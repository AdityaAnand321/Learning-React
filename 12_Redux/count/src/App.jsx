import { useState } from 'react' ;
import {useDispatch, useSelector} from 'react-redux';
import {increment,decrement} from './Counter/Slice';
import {login,logout} from './Counter/auth';

function App() { 
 const count=useSelector((state)=>state.counter.count);
 const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn);
 const dispatch=useDispatch();
const a=isLoggedIn?"Login":"Logout";

  return (
   <>
      <div>
       hi:  {count}
        <div>
          <button onClick={()=>dispatch(increment())}>Increment</button>
        </div>
        <div>
          <button onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>

        <hr /><br /><br />
          
           <p>{a}</p>
{
      !isLoggedIn ? (<button onClick={()=>dispatch(login())}>Login</button>) : (<button onClick={()=>dispatch(logout())}>Logout</button>)
}
      </div>
    </>
  )
}

export default App
