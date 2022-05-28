import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addTaskList} from "../../../../store/action_creators/list";

import {formatDate} from "../../../../utils/date";
import {Button, DatePicker, Form, Input, Modal} from "antd";
import {PlusCircleTwoTone } from "@ant-design/icons";

import TimeList from "./TimeList/TimeList";
import ProjectList from "./ProjectList/ProjectList";

import clsx from 'clsx'
import classes from './FormContainer.module.css';

const FormContainer: React.FC = () => {
	const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const [visible, setVisible] = React.useState(false);
	const [disabled, setDisable] = useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);
    const [event, setEvent] = useState({description: '', date: ''});
    const [pomodoro, setPomodoro] = useState<number>(1);
	const [project, setProject] = useState<string>('Спорт');
	const minLengthInput = 3;

    const selectDate = (date: any) => {
        if(date) {
            setEvent({...event, date: formatDate(date.toDate())});
        }
    }

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

			dispatch(addTaskList(value, pomodoro, project, event.date));
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
                <p>Название задачи</p>
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
                <p>Дата события</p>
                <DatePicker
                    style={{width: '100%'}}
                    placeholder="Выберите дату задачи"
                    onChange={(date) => selectDate(date)}
                />
				<TimeList setPomodoro={setPomodoro} />
				<ProjectList project={project} setProject={setProject} />
            </Modal>
        </Form>
    );
}

export default FormContainer;