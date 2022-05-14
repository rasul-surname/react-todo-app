import { Button, DatePicker, Form, Input, Row } from 'antd';
import React from 'react';

interface InterfaceEventForm {}

const EventForm: React.FC<InterfaceEventForm> = () => {

	return (
		<Form>
			<Form.Item
				label="Название задачи"
				name="description"
			>
				<Input />
			</Form.Item>
			<Form.Item
				label="Дата события"
				name="date"
			>
				<DatePicker />
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