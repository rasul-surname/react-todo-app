import {useState} from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import { Button, Modal, Row } from 'antd';
import EventCalendar from './EventCalendar/EventCalendar';
import EventForm from './EventForm/EventForm';
import classes from './Programs.module.css';
import clsx from "clsx";

const Programs = () => {
	const {listTasks} = useTypedSelector(state => state.listReducer);

	const [modalVisible, setVisible] = useState(false);

	function addNewTask() {
		setVisible(false);
	}

    return (
        <div className={clsx(classes.content, classes.wrapper)}>
			<Modal
				title="Добавить задачу"
				visible={modalVisible}
				onCancel={() => setVisible(false)}
				footer={null}
			>
				<EventForm submit={addNewTask} />
			</Modal>
			<Row justify="center">
				<Button
					onClick={() => setVisible(true)}
				>
					Добавить задачу
				</Button>
			</Row>
            <EventCalendar events={listTasks} />
        </div>
    );
}

export default Programs;