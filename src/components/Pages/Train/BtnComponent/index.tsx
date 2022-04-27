import React from 'react';
import classes from './index.module.css';
import start from "../../../../img/play-timer.svg";
import stop from "../../../../img/stop-timer.svg";
import reset from "../../../../img/reset-timer.svg";

interface BtnComponentInterface {
    start: () => any;
    stop: () => any;
    reset: () => any;
    status: boolean;
}

const BtnComponent: React.FC<BtnComponentInterface> = (props) => {

    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <img
                    className={classes.img__reset}
                    onClick={props.status ? props.reset : evt => {}}
                    style={props.status ? {} : {opacity: 0.3}}
                    src={reset}
                    alt="сбросить"
                />
                {
                    (props.status)?
                        <img className={classes.img__start} onClick={props.start} src={start} alt="старт"/> :
                        <img className={classes.img__stop} onClick={props.stop} src={stop} alt="стоп" />
                }
            </div>
        </div>
    );
}

export default BtnComponent;