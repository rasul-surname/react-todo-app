import React, {useEffect, useMemo, useState} from 'react';
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import classes from './DisplayComponent.module.css';

interface InterfaceDisplayComponent {
    minutes: number;
    seconds: number;
}

const DisplayComponent: React.FC<InterfaceDisplayComponent> = ({minutes, seconds}) => {
    const [changingSeconds, setChangingSeconds] = useState(minutes * 60);

    const timerMinutes = minutes >= 10 ? minutes : "0" + minutes;
    const timerSeconds = seconds >= 10 ? seconds : "0" + seconds;

    const totalSeconds = useMemo(() => {
        return minutes * 60;
    }, []);

    const percentage = (changingSeconds / totalSeconds * 100).toFixed(5);

    useEffect(() => {
        setChangingSeconds(changingSeconds - 1);
    }, [seconds]);

    const red = '#f54e4e';

    return (
        <div className={classes.wrapper}>
            <div className={classes.timer}>
                <CircularProgressbar value={+percentage} text={timerMinutes + ' : ' + timerSeconds} styles={buildStyles({
                    textColor: '#000',
                    pathColor: red,
                    trailColor: '#ECECEC',
                })} />
            </div>
        </div>
    );
}

export default DisplayComponent;