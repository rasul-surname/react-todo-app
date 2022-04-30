import React, {useState} from 'react';

const withToggle = (Component: any) => {
    return (props: any) => {
        const [visible, setVisible] = useState(true);

        function showContainer() {
            setVisible(!visible);
        }

        return (
            <Component visible={visible} showContainer={showContainer} {...props}/>
        )
    }
}

export default withToggle;