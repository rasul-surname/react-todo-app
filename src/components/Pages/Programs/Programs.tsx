import { Button, Modal, Row } from 'antd';
import { useState } from 'react';
import EventCalendar from './EventCalendar/EventCalendar';
import EventForm from './EventForm/EventForm';

const Programs = () => {
	const [modalVisible, setVisible] = useState(false);

    return (
        <div>
			<Modal
				title="Добавить задачу"
				visible={modalVisible}
				onCancel={() => setVisible(false)}
				footer={null}
			>
				<EventForm />
			</Modal>
			<Row justify="center">
				<Button
					onClick={() => setVisible(true)}
				>
					Добавить задачу
				</Button>
			</Row>
            <EventCalendar events={[]} />
        </div>
    );
}

export default Programs;