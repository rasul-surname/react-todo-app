import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

import withToggle from "../hocs/withToggle";
import {getSpendTime, getRequiredTime} from "../../../../store/action_creators/list";

import {CaretDownFilled, CaretUpFilled} from "@ant-design/icons/lib";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";

import classes from './TasksOverview.module.css';
import CardTask from './CardTask/CardTask';

const TasksOverview = (props: any) => {
    const dispatch = useDispatch();
    const {visible, showContainer} = props;
    const {tasksOpen, tasksClosed, requiredHours, requiredMinutes, spendHours, spendMinutes} = useTypedSelector(state => state.listReducer);

	const requiredTime = (String(requiredHours).length == 1 ? '0' + requiredHours : requiredHours) + ' : ' + (String(requiredMinutes).length == 1 ? '0' + requiredMinutes : requiredMinutes);
	const spendTime = (String(spendHours).length == 1 ? '0' + spendHours: spendHours) + ' : ' + (String(spendMinutes).length == 1 ? '0' + spendMinutes: spendMinutes);

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
						<CardTask
							timeVisible={true}
							title={requiredTime}
							desc={'Расчетное время'}
						/>
						<CardTask
							timeVisible={true}
							title={spendTime}
							desc={'Потраченное время'}
						/>
						<CardTask
							title={tasksOpen.length}
							desc={'Ожидающие задачи'}
						/>
						<CardTask
							title={tasksClosed.length}
							desc={'Выполненные задачи'}
						/>
                    </div>
                    : ''
            }
        </div>
    );
}

export default withToggle(TasksOverview);