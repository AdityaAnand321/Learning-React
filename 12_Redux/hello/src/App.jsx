import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './redux/counterSlice';

export default function App() {
  const count = useSelector((state) => state.counter.value); // Redux se value le rahe
  const dispatch = useDispatch(); // Action dispatch karne ke liye

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Redux Counter</h1>
      <h2>{count}</h2>

      <button onClick={() => dispatch(increment())}>➕ Increment</button>
      <button onClick={() => dispatch(decrement())} style={{ margin: '0 10px' }}>
        ➖ Decrement
      </button>
      <button onClick={() => dispatch(reset())}>🔄 Reset</button>
    </div>
  );
}
