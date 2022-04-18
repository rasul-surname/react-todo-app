import React from 'react';

import {IDisplayComponent} from "../../../../types/displayComponent";

import classes from './index.module.css';

const DisplayComponent: React.FC<IDisplayComponent> = (props) => {
    const {minute, second, ms} = props;

    return (
        <div>
            <div className={classes.wrapper}>
                <div className={classes.time}>{minute >= 10 ? minute : "0" + minute}</div>&#58;
                <div className={classes.time}>{second >= 10 ? second : "0" + second}</div>&#58;
                <div className={classes.time}>{ms >= 10 ? ms : "0" + ms}</div>
            </div>
            <div className={classes.fixTime__list}>
                {props.fixTime.list.map((elem: any, index: number) => {
                    return (
                        <div key={index} className={classes.fixTime}>
                            <div className={classes.fixTime__desc}>
                                <p>Отрезок {index + 1}</p>
                                <p>Длительность</p>
                            </div>
                            <div>
                                <span>{elem.m >= 10 ? elem.m : "0" + elem.m}</span>&#58;
                                <span>{elem.s >= 10 ? elem.s : "0" + elem.s}</span>&#58;
                                <span>{elem.ms >= 10 ? elem.ms : "0" + elem.ms}</span>
                            </div>
                        </div>
                    )
                }).reverse()}
            </div>

        </div>
    );
}

export default DisplayComponent;