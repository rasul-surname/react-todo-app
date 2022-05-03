import React from 'react';
import classes from './index.module.css';
import ButtonComponent from "../../../ButtonComponent/ButtonComponent";

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
                <ButtonComponent value={'Сбросить'} size={'large'} onClick={props.reset} />
                {
                    (props.status)?
                        <ButtonComponent value={'Начать'} size={'large'} onClick={props.start} />:
                        <ButtonComponent value={'Стоп'} size={'large'} onClick={props.stop} />
                }
            </div>
        </div>
    );
}

export default BtnComponent;