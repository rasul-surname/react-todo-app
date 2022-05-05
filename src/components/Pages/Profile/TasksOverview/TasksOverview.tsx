import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

import withToggle from "../hocs/withToggle";
import {getSpendTime, getRequiredTime} from "../../../../store/action_creators/list";

import {CaretDownFilled, CaretUpFilled} from "@ant-design/icons/lib";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";

import classes from './TasksOverview.module.css';

const TasksOverview = (props: any) => {
    const dispatch = useDispatch();
    const {visible, showContainer} = props;
    const {tasksOpen, tasksClosed, requiredHours, requiredMinutes, spendHours, spendMinutes} = useTypedSelector(state => state.listReducer);

    useEffect(() => {
        dispatch(getRequiredTime());
        dispatch(getSpendTime());
    }, [tasksClosed, tasksOpen]);

    return (
        <div className={classes.container}>
            <div className={classes.btnVisible} onClick={showContainer}>
                <p className={classes.title}>Обзор задач</p>
                {visible ? <CaretUpFilled /> : <CaretDownFilled />}
            </div>
            {
                visible ?
                    <div className={classes.container__boxes}>
                        <div className={classes.container__box}>
                            <div>
                                <div className={classes.container__boxNoteTitle}><span>час</span><span>мин</span></div>
                                <p className={classes.container__boxTitle}>
                                    {String(requiredHours).length == 1 ? '0' + requiredHours: requiredHours} : {String(requiredMinutes).length == 1 ? '0' + requiredMinutes: requiredMinutes}
                                </p>
                                <p className={classes.container__boxDesc}>Расчетное время</p>
                            </div>
                        </div>
                        <div className={classes.container__box}>
                            <div>
                                <div className={classes.container__boxNoteTitle}><span>час</span><span>мин</span></div>
                                <p className={classes.container__boxTitle}>
                                    {String(spendHours).length == 1 ? '0' + spendHours: spendHours} : {String(spendMinutes).length == 1 ? '0' + spendMinutes: spendMinutes}
                                </p>
                                <p className={classes.container__boxDesc}>Потраченное время</p>
                            </div>
                        </div>
                        <div className={classes.container__box}>
                            <div>
                                <p className={classes.container__boxTitle}>{tasksOpen.length}</p>
                                <p className={classes.container__boxDesc}>Ожидающие задачи</p>
                            </div>
                        </div>
                        <div className={classes.container__box}>
                            <div>
                                <p className={classes.container__boxTitle}>{tasksClosed.length}</p>
                                <p className={classes.container__boxDesc}>Выполненные задачи</p>
                            </div>
                        </div>
                    </div>
                    : ''
            }
        </div>
    );
}

export default withToggle(TasksOverview);