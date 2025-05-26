import React from 'react';
import { increment,decrement } from '../../store/slices/counterSlice';

const Counter = (props) => {
    return (
        <div>
            <p>Count: 1</p>
            <p>Step: 1</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter;
