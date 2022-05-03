import React from 'react';
import {Button} from "antd";

interface InterfaceButtonComponent {
    value: string;
    size: any;
    onClick: () => void;
}

const ButtonComponent: React.FC<InterfaceButtonComponent> = ({value, size, onClick}) => {

    return (
        <Button type="primary" size={size} onClick={onClick}>
            {value}
        </Button>
    );
}

export default ButtonComponent;