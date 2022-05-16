import React from 'react';
import {Moment} from "moment";
import {formatDate} from "../../../../utils/date";
import {Calendar} from "antd"

interface InterfaceEventCalendar {
    events: any;
}

const EventCalendar: React.FC<InterfaceEventCalendar> = (props) => {

	function dateCellRender(value: Moment) {
		const formatedDate = formatDate(value.toDate());
		const currentDayEvent = props.events.filter((ev: { date: string; }) => ev.date === formatedDate);

		return (
			<div>
				{currentDayEvent.map((ev: any, index: number) => {
					return (
						<div style={{borderBottom: '1px solid #ccc'}} key={index}>{ev.todo}</div>
					)
				})}
			</div>
		);
	}

	return (
		<div>
			<Calendar dateCellRender={dateCellRender} />
		</div>
	)
}

export default EventCalendar;