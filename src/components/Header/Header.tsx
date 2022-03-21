import React from 'react';
import classes from './Header.module.css';

const Header: React.FC = () => {

    return (
        <div className={classes.header}>
            <h1 className={classes.header__title}>Sport House</h1>
        </div>
    );
}

export default Header;