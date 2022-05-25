import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {addActiveTask} from "../../../store/action_creators/list";

import DisplayComponent from "./DisplayComponent/DisplayComponent";
import BtnComponent from "./BtnComponent/BtnComponent";
import CardsTasks from "./CardsTasks/CardsTasks";
import SplashScreen from "./SplashScreen/SplashScreen";

import {GiHamburgerMenu} from "react-icons/gi";
import classes from "./Train.module.css";


const Train: React.FC = () => {
    const dispatch = useDispatch();
    const {tasksOpen} = useTypedSelector(state => state.listReducer);
    const {activeTask} = useTypedSelector(state => state.listReducer);

    const [timerId, setTimerId] = useState<any>();
    const [visibleBtn, setVisibleBtn] = useState<boolean>(true);
    const [visibleTimer, setVisibleTimer] = useState(false);

    const [time, setTime] = useState({minutes: activeTask.minutes, seconds: 0});
    let updateM = time.minutes;
    let updateS = time.seconds;

    useEffect(() => {
        if(tasksOpen.length !== 0) {
            dispatch(addActiveTask(tasksOpen[0].id, tasksOpen[0].todo, tasksOpen[0].minutes));
        }
    }, [tasksOpen]);

    useEffect(() => {
        setTime({minutes: activeTask.minutes, seconds: 0});
    }, [activeTask]);

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
            {tasksOpen.length === 0 ?
                <h1>У вас нет задач</h1>
            : visibleTimer ?
                    <>
                        <DisplayComponent minutes={time.minutes} seconds={time.seconds}/>
                        <BtnComponent start={start} stop={stop} visibleBtn={visibleBtn}/>
                    </>
                    :
                    <>
                        <p className={classes.content__title}>{activeTask.todo}</p>
                        <SplashScreen onClick={() => setVisibleTimer(!visibleTimer)}/>
                        <GiHamburgerMenu />
                        <p className={classes.content__subtitle}>Задачи</p>
                        <CardsTasks activeTaskId={activeTask.id} />
                    </>
            }
        </div>
    );
}

export default Train;