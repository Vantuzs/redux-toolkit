import React from 'react';
import * as counterActionCreators from '../../store/slices/counterSlice';
import { useSelector,useDispatch } from 'react-redux';
import * as langActionCreators from '../../store/slices/langSlice';
import CONSTANTS from '../../constants';
import styles from './Counter.module.scss';
import { setTheme } from '../../store/slices/themeSlice';
import cx from 'classnames';
import { bindActionCreators } from '@reduxjs/toolkit';
const { LANGUAGE: {EN_US,UA_UA,PL_PL,DE_DE}, THEMES } = CONSTANTS;

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
    const language = useSelector((state)=>state.lang);
    const theme = useSelector((state)=>state.theme);
    const {count,step} = useSelector((state)=>state.counter);
    const dispatch = useDispatch();

    const {setStep,setLang,increment,decrement} = bindActionCreators({ ...langActionCreators,...counterActionCreators }, dispatch);

    const {countText,stepText,incrementText,decrementText,setStepText} = tranclations.get(language);

    const className = cx({
        [styles.darkTheme]: theme === THEMES.DARK,
        [styles.lightTheme]: theme === THEMES.LIGHT
    })

    return (
        <div className={className}>
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


export default Counter;
