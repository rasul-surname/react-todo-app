import React, {useState} from 'react';
import {useDispatch} from "react-redux";

import {Button, DatePicker, Form, Input, Modal, Row} from 'antd';
import {formatDate} from "../../../../utils/date";

import {addTaskList} from "../../../../store/action_creators/list";
import TimeList from "../../Profile/FormContainer/TimeList/TimeList";
import ProjectList from "../../Profile/FormContainer/ProjectList/ProjectList";

interface InterfaceEventForm {
	submit: () => void;
}

const EventForm: React.FC<InterfaceEventForm> = (props) => {
	const dispatch = useDispatch();
	const [event, setEvent] = useState({description: '', date: ''});

	const [pomodoro, setPomodoro] = useState<number>(1);
	const [project, setProject] = useState<string>('Спорт');

	const selectDate = (date: any) => {
		if(date) {
			setEvent({...event, date: formatDate(date.toDate())});
		}
	}

	function submitForm() {
		dispatch(addTaskList(event.description, pomodoro, project, event.date));
		props.submit();
	}

	return (
		<Form onFinish={submitForm}>
			<Form.Item>
				<p>Название задачи</p>
				<Input
					onChange={e => setEvent({...event, description: e.target.value})}
					value={event.description}
				/>
			</Form.Item>
			<Form.Item>
				<p>Дата события</p>
				<DatePicker
					style={{width: '100%'}}
					placeholder="Выберите дату задачи"
					onChange={(date) => selectDate(date)}
				/>
			</Form.Item>
			<Form.Item>
				<TimeList setPomodoro={setPomodoro} />
				<ProjectList project={project} setProject={setProject} />
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