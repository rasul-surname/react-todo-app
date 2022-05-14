import React from 'react';
import { Calendar } from "antd"

interface InterfaceEventCalendar {
	events: any[];
}

const EventCalendar: React.FC<InterfaceEventCalendar> = () => {

	return (
		<Calendar />
	)
}

export default EventCalendar;