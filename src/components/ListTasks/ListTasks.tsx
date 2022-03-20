import React, {useEffect} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchTasks} from "../../store/action_creators/list";
import {Card, List, Spin} from "antd";

const ListTasks: React.FC = () => {
    const {listTasks, loading, error} = useTypedSelector(state => state.listReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasks());
    }, []);

    return (
        <>
            {loading ? (
                <List
                    itemLayout="horizontal"
                    dataSource={listTasks}
                    renderItem={({todo}) => (
                        <Card style={{margin: '10px 0px'}}>{todo}</Card>
                    )}
                />
            ) : <Spin className="spin" size="large" />}
            {error ? <h1>{error}</h1> : ''}
        </>
    );
}

export default ListTasks;