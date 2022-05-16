import React from 'react';

import TasksToday from "./TasksToday/TasksToday";
import TasksOverview from "./TasksOverview/TasksOverview";
import classes from './Profile.module.css';

const Profile = () => {

    return (
        <div className={classes.content}>
            <TasksOverview />
            <TasksToday />
        </div>
    );
}

export default Profile;