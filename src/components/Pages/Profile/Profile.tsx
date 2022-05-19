import React from 'react';

import User from "./User/User";
import TasksToday from "./TasksToday/TasksToday";
import TasksOverview from "./TasksOverview/TasksOverview";
import classes from './Profile.module.css';

const Profile = () => {

    return (
        <div className={classes.content}>
            <User />
            <TasksOverview />
            <TasksToday />
        </div>
    );
}

export default Profile;