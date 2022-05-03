import React, {useState} from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {ITime} from "../../../types/train";

import DisplayComponent from "./DisplayComponent";
import BtnComponent from "./BtnComponent";
import CardsTasks from "./CardsTasks/CardsTasks";
import SplashScreen from "./SplashScreen/SplashScreen";

const Train: React.FC = () => {
    const {tasksOpen} = useTypedSelector(state => state.listReducer);
    const [time, setTime] = useState<ITime>({s: 0, m: 20});
    const [spacing, setSpacing] = useState<any>();
    const [status, setStatus] = useState<boolean>(true);

    const [activeTab, setActiveTab] = useState(-1);
    const [visible, setVisible] = useState(false);

    function connectTime(elem: any) {
        setActiveTab(elem.id);
        setTime({s: 0, m: elem.minutes});
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
            {visible ?
                <>
                    <DisplayComponent minute={time.m} second={time.s} />
                    <BtnComponent start={start} stop={stop} reset={reset} status={status} />
                </>
                :
                <>
                    <SplashScreen onClick={() => setVisible(!visible)} />
                    <CardsTasks list={tasksOpen} onClick={connectTime} activeTab={activeTab} />
                </>
            }

        </div>
    );
}

export default Train;