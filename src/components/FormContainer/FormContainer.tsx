import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addTaskList} from "../../store/action_creators/list";
import {Form, Input} from "antd";

const FormContainer: React.FC = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    const keyPressHandler = (evt: React.KeyboardEvent) => {
        if(evt.key === 'Enter') {
            dispatch(addTaskList(value));

            setValue('');
        }
    }

    return (
        <Form>
            <Input
                value={value}
                onChange={changeHandler}
                onKeyPress={keyPressHandler}
                placeholder="Введите задачу" />
        </Form>
    );
}

export default FormContainer;