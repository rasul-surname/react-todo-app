import React from "react";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";

import ListTasks from "../ListTasks/ListTasks";
import withToggle from "../hocs/withToggle";

import {CaretDownOutlined, CaretUpOutlined} from "@ant-design/icons/lib";
import {Button} from "antd";

interface InterfaceCompletedTasks {
    visible: boolean;
    showContainer: () => void;
}

const CompletedTasks: React.FC<InterfaceCompletedTasks> = ({visible, showContainer}) => {
    const {tasksClosed} = useTypedSelector(state => state.listReducer);

    return (
        <>
            <Button type="primary" style={{marginBottom: '10px'}} icon={visible ? <CaretDownOutlined /> : <CaretUpOutlined />} size={'middle'} onClick={showContainer}>
                Завершенные
            </Button>
            {visible ? '' : <ListTasks list={tasksClosed} />}
        </>
    )
}

export default withToggle(CompletedTasks);