import React, {useState} from 'react';
import {useDispatch} from "react-redux";

import { Button, DatePicker, Form, Input, Row } from 'antd';
import {formatDate} from "../../../../utils/date";

import {addTaskList} from "../../../../store/action_creators/list";
import TimeList from "../../Profile/FormContainer/TimeList/TimeList";

interface InterfaceEventForm {
	submit: () => void;
}

const EventForm: React.FC<InterfaceEventForm> = (props) => {
	const dispatch = useDispatch();
	const [event, setEvent] = useState({description: '', date: ''});
	const [pomodoro, setPomodoro] = useState<number>(1);

	const selectDate = (date: any) => {
		if(date) {
			setEvent({...event, date: formatDate(date.toDate())});
		}
	}

	function submitForm() {
		dispatch(addTaskList(event.description, pomodoro, event.date));
		props.submit();
	}

	return (
		<Form onFinish={submitForm}>
			<Form.Item
				label="Название задачи"
				name="description"
			>
				<Input
					onChange={e => setEvent({...event, description: e.target.value})}
					value={event.description}
				/>
			</Form.Item>
			<Form.Item
				label="Дата события"
				name="date"
			>
				<DatePicker
					onChange={(date) => selectDate(date)}
				/>
			</Form.Item>
			<Form.Item>
				<TimeList setPomodoro={setPomodoro} />
			</Form.Item>
			<Row justify="end">
				<Form.Item>
					<Button type="primary" htmlType="submit">
						Добавить задачу
					</Button>
				</Form.Item>
			</Row>
		</Form>
	)
}

export default EventForm;