import { ClockCircleOutlined } from "@ant-design/icons";
import classes from './TimeSelect.module.css';

interface InterfaceTimeSelect {
	index: number;
	active: boolean;
	time: string;
	pomodoro: number;
	setPomodoro: (pomodoro: number) => void;
	handleClick: (index: number) => void;
}

const TimeSelect: React.FC<InterfaceTimeSelect> = ({index, active, time, pomodoro, setPomodoro, handleClick}) => {

	return (
		<>
			{active ?
				<div className={classes.container + ' ' + classes.container__active} onClick={() => {setPomodoro(pomodoro); handleClick(index)}}>
					<ClockCircleOutlined />
					{time}
				</div>
				:
				<div className={classes.container} onClick={() => {setPomodoro(pomodoro); handleClick(index)}}>
					<ClockCircleOutlined />
					{time}
				</div>
			}
			
		</>
	)
}

export default TimeSelect;