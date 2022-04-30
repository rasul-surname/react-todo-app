import React from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSelector";

import ListTasks from "./ListTasks/ListTasks";
import CompletedTasks from "./CompletedTasks/CompletedTasks";
import FormContainer from "./FormContainer/FormContainer";
import withToggle from "./hocs/withToggle";

import {CaretDownFilled, CaretUpFilled} from "@ant-design/icons/lib";
import classes from './Profile.module.css';

const Profile = (props: any) => {
    const {visible, showContainer} = props;
    const {tasksOpen} = useTypedSelector(state => state.listReducer);

    return (
        <div className={classes.wrapper}>
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
        </div>
    );
}

export default withToggle(Profile);