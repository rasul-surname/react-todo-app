import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addTaskList} from "../../../../store/action_creators/list";
import {Button, Form, Input, Modal} from "antd";
import {PlusCircleTwoTone } from "@ant-design/icons";
import classes from './FormContainer.module.css';
import TimeList from "./TimeList/TimeList";

const FormContainer: React.FC = () => {
	const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);
	const [pomodoro, setPomodoro] = useState<number>(1);

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    const keyPressHandler = (evt: React.KeyboardEvent) => {
        if(evt.key === 'Enter') {
            handleOk();
        }
    }

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setConfirmLoading(true);

        dispatch(addTaskList(value, pomodoro));
        setValue('');

        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
        }, 800);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    return (
        <Form>
            <Button className={classes.button} size="large" icon={<PlusCircleTwoTone />} onClick={showModal}>
                Добавить задачу
            </Button>
            <Modal
                title="Добавить задачу"
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <Input
                    value={value}
                    onChange={changeHandler}
                    onKeyPress={keyPressHandler}
                    placeholder="Введите задачу"
                    className={classes.input}
                />
				<TimeList setPomodoro={setPomodoro} />
            </Modal>
        </Form>
    );
}

export default FormContainer;