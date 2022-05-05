import React from 'react';
import {useTypedSelector} from "../../../../hooks/useTypedSelector";

import withToggle from "../hocs/withToggle";
import ListTasks from "../ListTasks/ListTasks";
import FormContainer from "../FormContainer/FormContainer";
import CompletedTasks from "../CompletedTasks/CompletedTasks";

import {CaretDownFilled, CaretUpFilled} from "@ant-design/icons/lib";
import classes from './TasksToday.module.css';

const TasksToday = (props: any) => {
    const {visible, showContainer} = props;
    const {tasksOpen} = useTypedSelector(state => state.listReducer);

    return (
        <div className={classes.container}>
            <div className={classes.btnVisible} onClick={showContainer}>
                <p className={classes.title}>Сегодня</p>
                {visible ? <CaretUpFilled /> : <CaretDownFilled />}
            </div>
            {
                visible ?
                    <div className={classes.container__box}>
                        <ListTasks list={tasksOpen} />
                        <CompletedTasks />
                        <FormContainer />
                    </div>
                    : ''
            }
        </div>
    );
}

export default withToggle(TasksToday);