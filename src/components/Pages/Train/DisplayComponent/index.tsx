import React, {useEffect, useMemo, useState} from 'react';
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import classes from './index.module.css';

const DisplayComponent: React.FC = () => {
    const {time} = useTypedSelector(state => state.timeReducer);
    const {seconds, minutes} = time;
    const [changingSeconds, setChangingSeconds] = useState(minutes * 60);

    useEffect(() => {
        setChangingSeconds(changingSeconds - 1);
    }, [seconds]);

    const timerMinutes = minutes >= 10 ? minutes : "0" + minutes;
    const timerSeconds = seconds >= 10 ? seconds : "0" + seconds;

    const totalSeconds = useMemo(() => {
        return minutes * 60;
    }, []);

    const percentage = (changingSeconds / totalSeconds * 100).toFixed(5);

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