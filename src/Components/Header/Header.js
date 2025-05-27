import React from 'react';
import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>My Counter</h1>
            <nav>
                <ul>
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                </ul>
            </nav>

            <div>
                <button onClic>Switch Theme</button>
            </div>
        </header>
    );
}

export default Header;
