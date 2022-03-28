import React, {useEffect, useState} from 'react';
import {Button} from "antd";
import {PlusCircleOutlined, SendOutlined} from "@ant-design/icons/lib";

const Programs = () => {
    const [state, setState] = useState({
        0: 0,
        1: 0,
    });
    const [list, setList] = useState([
        [
            {name: 'rating1', id: 'rating', value: ''},
            {name: 'rating1', id: 'rating', value: ''},
            {name: 'rating1', id: 'rating', value: ''},
            {name: 'rating1', id: 'rating', value: ''},
            {name: 'rating1', id: 'rating', value: ''},
            {name: 'rating1', id: 'rating', value: ''},
            {name: 'rating1', id: 'rating', value: ''},
            {name: 'rating1', id: 'rating', value: ''},
            {name: 'rating1', id: 'rating', value: ''},
            {name: 'rating1', id: 'rating', value: ''},
        ],
        [
            {name: 'rating2', id: 'rating', value: ''},
            {name: 'rating2', id: 'rating', value: ''},
            {name: 'rating2', id: 'rating', value: ''},
            {name: 'rating2', id: 'rating', value: ''},
            {name: 'rating2', id: 'rating', value: ''},
            {name: 'rating2', id: 'rating', value: ''},
            {name: 'rating2', id: 'rating', value: ''},
            {name: 'rating2', id: 'rating', value: ''},
            {name: 'rating2', id: 'rating', value: ''},
            {name: 'rating2', id: 'rating', value: ''},
        ],
    ])

    // добавляю свойство в state при создании нового набора
    useEffect(() => {
        setState({...state, [list.length - 1]: 0});
    }, [list]);

    const changeRadio = (indexChild: number, indexParent: number) => {
        setState({...state, [indexParent]: indexChild + 1});
    }

    // здесь нужно подумать как генерировать новый name
    const createSelection = () => setList([...list, [
                {name: '', id: 'rating', value: ''},
                {name: '', id: 'rating', value: ''},
                {name: '', id: 'rating', value: ''},
                {name: '', id: 'rating', value: ''},
                {name: '', id: 'rating', value: ''},
                {name: '', id: 'rating', value: ''},
                {name: '', id: 'rating', value: ''},
                {name: '', id: 'rating', value: ''},
                {name: '', id: 'rating', value: ''},
                {name: '', id: 'rating', value: ''},
            ]]);

    const sendAnswer = () => console.log(state);

    return (
        <div style={{width: '360px', margin: '0 auto'}}>
            {list.map((elemParent, indexParent) => {
                return (
                    <div style={{marginBottom: '10px'}}>
                        <p>Набор {indexParent + 1}</p>
                        {
                            elemParent.map((elemChild, indexChild) => {
                                return (
                                    <input
                                        type="radio"
                                        name={elemChild.name}
                                        id={elemChild.id + '-' + (indexChild + 1)}
                                        value={indexChild + 1}
                                        onClick={() => changeRadio(indexChild, indexParent)}
                                    />
                                )
                            }).reverse()
                        }
                    </div>
                )
            })}

            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>
                <Button
                    type="primary"
                    icon={<PlusCircleOutlined />}
                    onClick={createSelection}
                >
                    Создать набор
                </Button>
                <Button
                    type="primary"
                    icon={<SendOutlined />}
                    onClick={sendAnswer}
                >
                    Отправить
                </Button>
            </div>
        </div>
    );
}

export default Programs;