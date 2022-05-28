import React, {useState} from 'react';

import User from "./User/User";
import TasksToday from "./TasksToday/TasksToday";
import TasksOverview from "./TasksOverview/TasksOverview";
import Diagram from "./Diagram/Diagram";
import classes from './Profile.module.css';

const Profile = () => {

    return (
        <div className={classes.content}>
            {/*<User />*/}
            <TasksOverview />
            <TasksToday />
            <Diagram />
        </div>
    );
}

export default Profile;