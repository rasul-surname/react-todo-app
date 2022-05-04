import React from 'react';
import {useTypedSelector} from "../../../../hooks/useTypedSelector";

import classes from './index.module.css';

const DisplayComponent: React.FC = () => {
    const {time} = useTypedSelector(state => state.timeReducer);
    const {seconds, minutes} = time;

    return (
        <div className={classes.wrapper}>
            <div className={classes.time}>{minutes >= 10 ? minutes : "0" + minutes}</div>&#58;
            <div className={classes.time}>{seconds >= 10 ? seconds : "0" + seconds}</div>
        </div>
    );
}

export default DisplayComponent;