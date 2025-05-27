import React from 'react';
import { increment,decrement,setStep } from '../../store/slices/counterSlice';
import { connect } from 'react-redux';
import { setLang } from '../../store/slices/langSlice';
import CONSTANTS from '../../constants';
const { LANGUAGE: {EN_US,UA_UA,PL_PL,DE_DE} } = CONSTANTS;

const tranclations = new Map([
    [
        EN_US,
        {
            countText: 'Count',
            stepText: 'Step',
            incrementText: 'Increment',
            decrementText: 'Decrement',
            setStepText: 'Set step'
        }
    ],[
        UA_UA,
        {
            countText: 'Значення лiчильнику',
            stepText: 'Крок',
            incrementText: 'Збiльшити значення',
            decrementText: 'Зменшити значення',
            setStepText: 'Зменити крок'
        }
    ],[
        PL_PL,
        {
            countText: 'znaczenie licznika',
            stepText: 'Krok',
            incrementText: 'zwiekszac',
            decrementText: 'zmniejszac',
            setStepText: 'ustawic krok'
        }
    ],[
        DE_DE,
        {
            countText: 'Zählerwert',
            stepText: 'SchriWert erhöhen',
            incrementText: 'Wert erhöhen',
            decrementText: 'Wert verringern',
            setStepText: 'Schritt ändern'
        }
    ]
])

const Counter = (props) => {
    console.log(props);
    const {language,counter : {count,step},increment,decrement,setStep,setLang} = props;

    const {countText,stepText,incrementText,decrementText,setStepText} = tranclations.get(language)

    return (
        <div>
            <select value={language} onChange={({target: {value}})=> setLang(value)}>
                <option value={EN_US}>English</option>
                <option value={UA_UA}>Ukrainian</option>
                <option value={PL_PL}>Polish</option>
                <option value={DE_DE}>Deutch</option>
            </select>

            <p>{countText}: {count}</p>
            <label>
                {setStepText} 
                <input type='number' value={step} onChange={({target: {value}})=> setStep(value)}/>
            </label>
            <p>{stepText}: {step}</p>
            <button onClick={() => increment()}>{incrementText}</button>
            <button onClick={() => decrement()}>{decrementText}</button>
        </div>
    );
}

function mapStateToProps(state){
    return {
        counter: state.counter,
        language: state.lang
    }
}

const mapDispatchToProps = {
    increment,
    decrement,
    setStep,
    setLang
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
