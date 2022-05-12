import React from 'react';
import classes from './index.module.css';
import ButtonComponent from "../../../ButtonComponent/ButtonComponent";

interface BtnComponentInterface {
    start: () => void;
    stop: () => void;
    visibleBtn: boolean;
}

const BtnComponent: React.FC<BtnComponentInterface> = (props) => {
    const {start, stop, visibleBtn} = props;

    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                {
                    visibleBtn ?
                        <ButtonComponent value={'Начать'} size={'large'} onClick={start} />
                        :
                        <ButtonComponent value={'Стоп'} size={'large'} onClick={stop} />
                }
            </div>
        </div>
    );
}

export default BtnComponent;