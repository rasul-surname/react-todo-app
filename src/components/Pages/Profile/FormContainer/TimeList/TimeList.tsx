import { useState } from "react";
import TimeSelect from "../TimeSelect/TimeSelect";
import classes from './TimeList.module.css';

interface InterfaceTimeList {
	setPomodoro: any;
}

const TimeList: React.FC<InterfaceTimeList> = ({setPomodoro}) => {
	const [selected, setSelected] = useState(1);
	const pomodoroList = [
		{id: 1, value: "00:30"},
		{id: 2, value: "01:00"},
		{id: 3, value: "01:30"},
		{id: 4, value: "02:00"},
		{id: 5, value: "02:30"},
	];

	function handleClick(index: number) {
		setSelected(index);
	}

	return (
		<div className={classes.content}>
			<p className={classes.content__title}>Ожидаемое количество томатов</p>
			<div className={classes.content__row}>
			{pomodoroList.map((elem) => {
				return (
					<TimeSelect
						index={elem.id}
						active={elem.id <= selected}
						time={elem.value} 
						pomodoro={elem.id} 
						setPomodoro={setPomodoro}
						handleClick={handleClick} 
					/>
				)
			})}
		</div>
		</div>
	)
}

export default TimeList;