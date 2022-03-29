import React, {useState} from 'react';

import DisplayComponent from "./DisplayComponent/DisplayComponent";
import BtnComponent from "./BtnComponent/BtnComponent";

import {IFixTime, ITime} from "../../../types/train";

import classes from './Train.module.css';

const Train: React.FC = () => {
    const [time, setTime] = useState<ITime>({ms: 0, s: 0, m: 0});
    const [spacing, setSpacing] = useState<any>();
    const [fixTime, setFixTime] = useState<IFixTime>({list: []});
    const [status, setStatus] = useState<boolean>(true);

    function start() {
        run();
        setStatus(false);
        setSpacing(setInterval(run, 10));
    }

    function stop() {
        clearInterval(spacing);
        setStatus(true);
    }

    function reset() {
        setTime({ms: 0, s: 0, m: 0});
        setFixTime({...fixTime, list:  []});
    }

    function fix() {
        return (
            fixTime.list.length ?
                setFixTime({...fixTime, list: [...fixTime.list, time]}) :
                setFixTime({...fixTime, list:  [time]})
        );
    }

    let updateMs = time.ms; let updateS = time.s; let updateM = time.m;

    function run() {
        if(updateS === 60) {
            updateM++;
            updateS = 0;
        }
        if(updateMs === 100) {
            updateS++;
            updateMs = 0;
        }
        updateMs++;
        return setTime({ms: updateMs, s: updateS, m: updateM});
    }

    return (
        <div className={classes.wrapper}>
            <DisplayComponent time={time} fixTime={fixTime} />
            <BtnComponent start={start} stop={stop} reset={reset} fix={fix} status={status} />
        </div>
    );
}

export default Train;