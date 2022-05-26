import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addTaskList} from "../../../../store/action_creators/list";

import TimeList from "./TimeList/TimeList";
import ProjectList from "./ProjectList/ProjectList";

import {Button, Form, Input, Modal} from "antd";
import {PlusCircleTwoTone } from "@ant-design/icons";

import clsx from 'clsx'
import classes from './FormContainer.module.css';

const FormContainer: React.FC = () => {
	const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const [visible, setVisible] = React.useState(false);
	const [disabled, setDisable] = useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);
	const [pomodoro, setPomodoro] = useState<number>(1);
	const [project, setProject] = useState<string>('Спорт');
	const minLengthInput = 3;

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		if(event.target.value.trim().length >= minLengthInput) {
			setDisable(false);
		}

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
		if(value.trim().length < minLengthInput) {
			setDisable(true);
		} else {
			setDisable(false);
			setConfirmLoading(true);

			dispatch(addTaskList(value, pomodoro, project));
			setValue('');
	
			setTimeout(() => {
				setVisible(false);
				setConfirmLoading(false);
			}, 800);
		}
    };

    const handleCancel = () => {
		setDisable(false);
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
                    placeholder={"Введите задачу"}
                    className={clsx(classes.input, disabled && classes.active)}
                />
				{disabled ? 
					<p className={clsx({[classes.warning]: disabled})}>
						Обязательное поле должно содержать не менее 3 символов
					</p>
					:
					''
				}
				<TimeList setPomodoro={setPomodoro} />
				<ProjectList project={project} setProject={setProject} />
            </Modal>
        </Form>
    );
}

export default FormContainer;