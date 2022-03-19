import React, {useEffect, useState} from 'react';
import {db} from "./firebase_config";
import {Form, Input, List, Card} from "antd";

const App: React.FC = () => {
    const [listTasks, setListTasks] = useState([]);
    const [value, setValue] = useState('');

    useEffect(() => {
        getListTasks();
    }, [value]);

    function getListTasks() {
        db.collection("todos").onSnapshot(function (querySnapshot: any) {
            setListTasks(
                querySnapshot.docs.map((doc:any) => ({
                    todo: doc.data().todo,
                }))
            )
        })
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    const keyPressHandler = (evt: React.KeyboardEvent) => {
        if(evt.key === 'Enter') {
            db.collection("todos").add({
                todo: value,
            });

            setValue('');
        }
    }

  return (
    <div className='App'>
        <h1 style={{textAlign: "center"}}>Todo App</h1>
        <Form>
            <Input
                value={value}
                onChange={changeHandler}
                onKeyPress={keyPressHandler}
                placeholder="Введите задачу" />
        </Form>
        <List
            itemLayout="horizontal"
            dataSource={listTasks}
            renderItem={({todo}) => (
                <Card style={{margin: '10px 0px'}}>{todo}</Card>
            )}
        />
    </div>
  );
}

export default App;