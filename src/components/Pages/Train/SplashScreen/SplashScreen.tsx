import React from 'react';
import ButtonComponent from "../../../ButtonComponent/ButtonComponent";
import classes from './SplashScreen.module.css';

interface InterfaceSplashScreen {
    onClick: () => void;
}

const SplashScreen: React.FC<InterfaceSplashScreen> = ({onClick}) => {

    return (
        <>
            <div className={classes.animation}>
                Место для анимации
            </div>
            <div className={classes.button}>
                <ButtonComponent  value={'Начать'} size={'large'} onClick={onClick} />
            </div>
        </>
    );
}

export default SplashScreen;