import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSelector";

import DisplayComponent from "./DisplayComponent/DisplayComponent";
import BtnComponent from "./BtnComponent/BtnComponent";
import CardsTasks from "./CardsTasks/CardsTasks";
import SplashScreen from "./SplashScreen/SplashScreen";

import classes from "./Train.module.css";

const Train: React.FC = () => {
    const {tasksOpen} = useTypedSelector(state => state.listReducer);

    const [time, setTime] = useState({minutes: 0, seconds: 0});
    let updateM = time.minutes;
    let updateS = time.seconds;

    const [timerId, setTimerId] = useState<any>();
    const [taskId, setTaskId] = useState(0);
    const [visibleBtn, setVisibleBtn] = useState<boolean>(true);
    const [visibleTimer, setVisibleTimer] = useState(false);

    function start() {
        run();
        setVisibleBtn(false);
        setTimerId(setInterval(run, 1000));
    }

    useEffect(() => {
        if (tasksOpen.length > 0 && tasksOpen.length !== 0) {
            connectTime(tasksOpen[0]);
        }
    }, []);

    function connectTime(elem: any) {
        setTaskId(elem.id);
    }

    function stop() {
        clearInterval(timerId);
        setVisibleBtn(true);
    }

    function run() {
        if (updateM === 0 && updateS === 0) {
            clearInterval(timerId);
        } else {
            if (updateS === 0) {
                updateM--;
                updateS = 60;
            }
            updateS--;
        }

        return setTime({minutes: updateM, seconds: updateS});
    }

    return (
        <div className={classes.content}>
            {visibleTimer ?
                <>
                    <DisplayComponent minutes={time.minutes} seconds={time.seconds}/>
                    <BtnComponent start={start} stop={stop} visibleBtn={visibleBtn}/>
                </>
                :
                <>
                    <SplashScreen onClick={() => setVisibleTimer(!visibleTimer)}/>
                    <CardsTasks list={tasksOpen} onClick={connectTime} taskId={taskId}/>
                </>
            }
        </div>
    );
}

export default Train;