import React, {useState} from 'react';

import classes from './index.module.css';
import {Select} from "antd";

import StopWatch from "./Stopwatch";
import Timer from "./Timer";

const Train: React.FC = () => {
    const [mode, setMode] = useState(true);
    const { Option } = Select;

    function handleChange() {
        setMode(!mode);
    }

    return (
        <div className={classes.wrapper}>
            <Select defaultValue="stopwatch" style={{ width: 180 }} onChange={handleChange}>
                <Option value="stopwatch">Секундомер</Option>
                <Option value="timer">Таймер</Option>
            </Select>
            <div>
                {mode ? <StopWatch /> : <Timer />}
            </div>
        </div>
    );
}

export default Train;