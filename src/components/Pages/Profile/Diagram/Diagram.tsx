import React from "react";
import withToggle from "../hocs/withToggle";
import {CaretDownFilled, CaretUpFilled} from "@ant-design/icons/lib";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";
import classes from "./Diagram.module.css";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";

const Diagram = (props: any) => {
    const {visible, showContainer} = props;
    const {listTasks} = useTypedSelector(state => state.listReducer);

    function getData(arr: any) {
        let map = new Map([
            ['Monday', 0],
            ['Tuesday', 0],
            ['Wednesday', 0],
            ['Thursday', 0],
            ['Friday', 0],
            ['Saturday', 0],
            ['Sunday', 0],
        ]);

        const obj: { name: string; uv: number; count: number; amt: number; }[] = [];

        for (let i = 0; i < arr.length; i++) {
            let current = arr[i].dayWeek;

            if (map.get(current) || map.get(current) === 0) {
                // @ts-ignore
                map.set(current, map.get(current) + 1);
            }
        }

        map.forEach((value, key, map) => {
            obj.push({name: key, uv: 20, count: value, amt: 1})
        })

        obj.map((elem) => {
            switch (elem.name) {
                case 'Monday':
                    return elem.name = 'Пн';
                case 'Tuesday':
                    return elem.name = 'Вт';
                case 'Wednesday':
                    return elem.name = 'Ср';
                case 'Thursday':
                    return elem.name = 'Чт';
                case 'Friday':
                    return elem.name = 'Пт';
                case 'Saturday':
                    return elem.name = 'Сб';
                case 'Sunday':
                    return elem.name = 'Вс';
                default:
                    return elem.name;
            }
        })

        return obj;
    }

    const data = getData(listTasks);

    return (
        <div className={classes.container}>
            <div className={classes.btnVisible} onClick={showContainer}>
                <p className={classes.title}>Диаграмма</p>
                {visible ? <CaretUpFilled/> : <CaretDownFilled/>}
            </div>
            {
                visible ?
                    <div className={classes.container__box}>
                        <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5
                            }}
                            barSize={20}
                        >
                            <XAxis dataKey="name" scale="point" padding={{left: 10, right: 10}}/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend/>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Bar dataKey="count" fill="#8884d8" background={{fill: "#eee"}}/>
                        </BarChart>
                    </div>
                    : ''
            }
        </div>
    )
}

export default withToggle(Diagram);