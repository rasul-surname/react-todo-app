import React, {useState} from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {ITime} from "../../../types/train";

import DisplayComponent from "./DisplayComponent";
import BtnComponent from "./BtnComponent";
import CardsTasks from "./CardsTasks/CardsTasks";

const Train: React.FC = () => {
    const {tasksOpen} = useTypedSelector(state => state.listReducer);
    const [time, setTime] = useState<ITime>({s: 0, m: 20});
    const [spacing, setSpacing] = useState<any>();
    const [status, setStatus] = useState<boolean>(true);

    function connectTime(elem: any) {
        const arr = elem.time.split(':');
        const minutes = arr[0];

        setTime({s: 0, m: minutes});
    }

    function start() {
        run();
        setStatus(false);
        setSpacing(setInterval(run, 1000));
    }

    function stop() {
        clearInterval(spacing);
        setStatus(true);
    }

    function reset() {
        setTime({s: 0, m: 0});
    }

    let updateS = time.s; let updateM = time.m;

    function run() {
        if(updateS === 0) {
            updateM--;
            if(updateS === 0) {
                updateS = 60;
            }
        }
        updateS--;
        return setTime({s: updateS, m: updateM});
    }

    return (
        <div>
            <DisplayComponent minute={time.m} second={time.s} />
            <BtnComponent start={start} stop={stop} reset={reset} status={status} />
            <CardsTasks list={tasksOpen} onClick={connectTime} />
        </div>
    );
}

export default Train;