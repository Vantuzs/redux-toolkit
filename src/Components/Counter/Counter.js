import React from 'react';
import { increment,decrement,setStep } from '../../store/slices/counterSlice';
import { connect } from 'react-redux';

const Counter = (props) => {
    console.log(props);
    const {count,step,increment,decrement,setStep} = props
    return (
        <div>
            <p>Count: {count}</p>
            <label>
                Set step: 
                <input type='number' value={step} onChange={setStep}/>
            </label>
            <p>Step: {step}</p>
            <button onClick={decrement}>Increment</button>
            <button onClick={increment}>Decrement</button>
        </div>
    );
}

function mapStateToProps(state){
    return {
        count: state.count,
        step: state.step
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increment: ()=> dispatch(increment()),
        decrement: ()=> dispatch(decrement()),
        setStep: ({target: {value}})=> dispatch(setStep(value))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
