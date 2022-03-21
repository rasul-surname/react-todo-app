import React, {useEffect} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchTasks} from "../../store/action_creators/list";
import ListTasksItem from "./ListTasksItem/ListTasksItem";
import {Spin} from "antd";
import classes from './ListTasks.module.css';

const ListTasks: React.FC = () => {
    const {listTasks, loading, error} = useTypedSelector(state => state.listReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasks());
    }, []);

    return (
        <>
            {loading ? (
                listTasks.map((elem) => (
                    <ListTasksItem id={elem.id} todo={elem.todo} in_progress={elem.in_progress} />
                    ))
            ) : <Spin className={classes.spin} size="large" />}

            {error ? <h1>{error}</h1> : ''}
        </>
    );
}

export default ListTasks;