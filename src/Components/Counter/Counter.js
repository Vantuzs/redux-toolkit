import React from 'react';
import { increment,decrement } from '../../store/slices/counterSlice';
import { connect } from 'react-redux';

const Counter = (props) => {
    console.log(props);
    const {count,step,dispatch} = props
    return (
        <div>
            <p>Count: {count}</p>
            <p>Step: {step}</p>
            <button onClick={()=> dispatch(increment())}>Increment</button>
            <button onClick={()=> dispatch(decrement())}>Decrement</button>
        </div>
    );
}

function mapStateToProps(state){
    return state
}

// const mapStateToDispatch = {}

export default connect(mapStateToProps,null)(Counter);
