import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchTask} from "../store/action_creators/list";

const TodoList: React.FC = () => {
    const {list, loading, error} = useTypedSelector(state => state.listReducer);
    const dispatch = useDispatch();
    console.log(list);

    useEffect(() => {
        dispatch(fetchTask());
    }, []);

    if(loading) {
        return <h1>Идёт загрузка...</h1>
    }
    if(error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {list.map(task =>
                <p key={task.id}>{task.title}</p>
            )}
        </div>
    );
}

export default TodoList;