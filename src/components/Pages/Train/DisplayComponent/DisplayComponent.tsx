import React from 'react';
import classes from './DisplayComponent.module.css';

interface DisplayComponentInterface {
    time: any;
    fixTime: any;
}

const DisplayComponent: React.FC<DisplayComponentInterface> = (props) => {

    return (
        <div>
            <div  className={classes.wrapper}>
                <div className={classes.time}>{props.time.h >= 10 ? props.time.h : "0" + props.time.h}</div>&#58;
                <div className={classes.time}>{props.time.m >= 10 ? props.time.m : "0" + props.time.m}</div>&#58;
                <div className={classes.time}>{props.time.s >= 10 ? props.time.s : "0" + props.time.s}</div>&#58;
                <div className={classes.time}>{props.time.ms >= 10 ? props.time.ms : "0" + props.time.ms}</div>
            </div>
            <div  className={classes.fixTime__list}>
                {props.fixTime.list.map((elem: any, index: number) => {
                    return (
                        <div className={classes.fixTime}>
                            <div className={classes.fixTime__desc}>
                                <p>Отрезок {index + 1}</p>
                                <p>Длительность</p>
                            </div>
                            <div>
                                <span>{elem.h >= 10 ? elem.h : "0" + elem.h}</span>&#58;
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