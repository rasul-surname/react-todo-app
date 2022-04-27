import React, {useState} from 'react';

import {ITime} from "../../../types/train";
import DisplayComponent from "./DisplayComponent";
import BtnComponent from "./BtnComponent";

const Train: React.FC = () => {
    const [time, setTime] = useState<ITime>({ms: 0, s: 0, m: 25});
    const [spacing, setSpacing] = useState<any>();
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
    }

    let updateMs = time.ms; let updateS = time.s; let updateM = time.m;

    function run() {
        if(updateS === 0) {
            updateM--;
            if(updateS === 0) {
                updateS = 59;
            }
        }
        if(updateMs === 0) {
            updateMs = 99;
            updateS--;
        }
        updateMs--;
        return setTime({s: updateS, m: updateM, ms: updateMs});
    }

    return (
        <div>
            <DisplayComponent minute={time.m} second={time.s} ms={time.ms} />
            <BtnComponent start={start} stop={stop} reset={reset} status={status} />
        </div>
    );
}

export default Train;