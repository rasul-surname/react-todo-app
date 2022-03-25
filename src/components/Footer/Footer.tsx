import React from 'react';
import classes from './Footer.module.css';
import {Link} from "react-router-dom";

const Footer: React.FC = () => {

    return (
        <div className={classes.footer}>
            <div className={classes.footer__body}>
                <Link to="/network"  className={classes.footer__body__link}>Комьюнити</Link>
                <Link to="/programs"  className={classes.footer__body__link}>Программы</Link>
                <Link to="/train"  className={classes.footer__body__link}>Тренировка</Link>
                <Link to="/"  className={classes.footer__body__link}>Профиль</Link>
            </div>
        </div>
    );
}

export default Footer;