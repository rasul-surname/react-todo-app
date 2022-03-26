import React, {useState} from 'react';
import DisplayComponent from "./DisplayComponent/DisplayComponent";
import BtnComponent from "./BtnComponent/BtnComponent";
import classes from './Train.module.css';

const Train = () => {
    const [time, setTime] = useState({ms: 0, s: 0, m: 0, h: 0,});
    const [interv, setInterv] = useState();
    const [fixTime, setFixTime] = useState({
        list: [],
    });

    console.log(fixTime.list.length ? 'yes' : 'no');
    const [status, setStatus] = useState(true);

    const start = () => {
        run();
        setStatus(false);
        // @ts-ignore
        setInterv(setInterval(run, 10));
    }

    const stop = () => {
        clearInterval(interv);
        setStatus(true);
    }

    const reset = () => {
        setTime({ms: 0, s: 0, m: 0, h: 0,});
        setFixTime({...fixTime, list:  []});
    }

    const fix = () => {
        if(fixTime.list.length) {
            // @ts-ignore
            setFixTime({...fixTime, list: [...fixTime.list, time]});
        } else {
            // @ts-ignore
            setFixTime({...fixTime, list:  [time]});
        }
    }

    let updateMs = time.ms; let updateS = time.s; let updateM = time.m; let updateH = time.h;

    const run = () => {
        if(updateM === 60) {
            updateH++;
            updateM = 0;
        }
        if(updateS === 60) {
            updateM++;
            updateS = 0;
        }
        if(updateMs === 100) {
            updateS++;
            updateMs = 0;
        }
        updateMs++;
        return setTime({ms: updateMs, s: updateS, m: updateM, h: updateH});
    }

    return (
        <div className={classes.wrapper}>
            <DisplayComponent time={time} fixTime={fixTime} />
            <BtnComponent start={start} stop={stop} reset={reset} fix={fix} status={status} />
        </div>
    );
}

export default Train;