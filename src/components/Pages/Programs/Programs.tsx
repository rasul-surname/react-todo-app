import React, {useState} from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import { Modal, Row } from 'antd';
import EventCalendar from './EventCalendar/EventCalendar';
import EventForm from './EventForm/EventForm';
import ButtonComponent from "../../ButtonComponent/ButtonComponent";
import classes from './Programs.module.css';


const Programs = () => {
	const {listTasks} = useTypedSelector(state => state.listReducer);

	const [modalVisible, setVisible] = useState(false);

	function addNewTask() {
		setVisible(false);
	}

    return (
        <div className={classes.content}>
			<Modal
				title="Добавить задачу"
				visible={modalVisible}
				onCancel={() => setVisible(false)}
				footer={null}
			>
				<EventForm submit={addNewTask} />
			</Modal>
			<Row justify="center" className={classes.content__btn}>
				<ButtonComponent value={'Добавить задачу'} size={'large'} onClick={() => setVisible(true)} />
			</Row>
			<div className={classes.content__table}>
				<EventCalendar events={listTasks} />
			</div>
        </div>
    );
}

export default Programs;