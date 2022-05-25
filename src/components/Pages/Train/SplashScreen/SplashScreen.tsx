import React from 'react';
import ButtonComponent from "../../../ButtonComponent/ButtonComponent";
import classes from './SplashScreen.module.css';
import animation from '../../../../img/train_animation.png'

interface InterfaceSplashScreen {
    onClick: () => void;
}

const SplashScreen: React.FC<InterfaceSplashScreen> = ({onClick}) => {

    return (
        <>
            <div className={classes.animationImg}>
                <div className={classes.animation}>
                    <img src={animation} alt=""/>
                </div>
            </div>
            <div className={classes.button}>
                <ButtonComponent  value={'Начать'} size={'large'} onClick={onClick} />
            </div>
        </>
    );
}

export default SplashScreen;