import React from 'react';
import UserList from "./UserList/UserList";
import classes from './Network.module.css';

const Network = () => {

    return (
        <div className={classes.content}>
            <UserList />
        </div>
    );
}

export default Network;