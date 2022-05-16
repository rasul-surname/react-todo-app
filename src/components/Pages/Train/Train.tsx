import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";

import DisplayComponent from "./DisplayComponent";
import BtnComponent from "./BtnComponent";
import CardsTasks from "./CardsTasks/CardsTasks";
import SplashScreen from "./SplashScreen/SplashScreen";
import {changeTime, nextStepTime} from "../../../store/action_creators/list";
import classes from "./Train.module.css";

const Train: React.FC = () => {
    const {tasksOpen} = useTypedSelector(state => state.listReducer);
    const dispatch = useDispatch();

    const [timerId, setTimerId] = useState<any>();
    const [visibleBtn, setVisibleBtn] = useState<boolean>(true);
    const [activeTask, setActiveTask] = useState(-1);
    const [visibleTimer, setVisibleTimer] = useState(false);

    useEffect(() => {
        if(tasksOpen.length !== 0) {
            connectTime(tasksOpen[0]);
        }
    }, []);

    function connectTime(elem: any) {
        setActiveTask(elem.id);
        dispatch(changeTime(elem.minutes));
    }

    function start() {
        run();
        setVisibleBtn(false);
        setTimerId(setInterval(run, 1000));
    }

    function stop() {
        clearInterval(timerId);
        setVisibleBtn(true);
    }

    function run() {
        dispatch(nextStepTime());
    }

    return (
        <div className={classes.content}>
            {visibleTimer ?
                <>
                    <DisplayComponent />
                    <BtnComponent start={start} stop={stop} visibleBtn={visibleBtn} />
                </>
                :
                <>
                    <SplashScreen onClick={() => setVisibleTimer(!visibleTimer)} />
                    <CardsTasks list={tasksOpen} onClick={connectTime} activeTask={activeTask} />
                </>
            }
        </div>
    );
}

export default Train;