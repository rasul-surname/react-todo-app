import React, {useEffect} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchTasks} from "../../store/action_creators/list";
import {List, Spin} from "antd";
import ListTasksItem from "./ListTasksItem";

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
            ) : <Spin className="spin" size="large" />}

            {error ? <h1>{error}</h1> : ''}
        </>
    );
}

export default ListTasks;