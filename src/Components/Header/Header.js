import React from 'react';
import { useSelector } from 'react-redux';
import cx from 'classnames';
import CONSTANTS from '../../constants';
import { setTheme } from '../../store/slices/themeSlice';
import styles from './Header.module.scss'
import { setLang } from '../../store/slices/langSlice';
const {THEMES} = CONSTANTS


const Header = (props) => {
    const theme = useSelector((state)=> state.theme);

    const className = cx(styles.header,{
        [styles.darkTheme]: theme === THEMES.DARK,
        [styles.lightTheme]: theme === THEMES.LIGHT
    })
    return (
        <header className={className}>
            <h1>My Counter</h1>
            <nav>
                <ul>
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                </ul>
            </nav>

            <div>
                <button onClick={()=> setTheme()}>Switch Theme</button>
            </div>
        </header>
    );
}

// const mapStateToProps = (state) =>{
//     return{
//         theme: state.theme,
//         language: state.lang
//     }
// }

// const mapDispatchToProps = {
//     setTheme,
//     setLang
// }

export default Header;
