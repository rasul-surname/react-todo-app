import React from 'react';
import ActivityChart from "../ActivityChart/ActivityChart";
import ListTasks from "../ListTasks/ListTasks";
import FormContainer from "../FormContainer/FormContainer";

const Profile = () => {

    return (
        <div>
            <ActivityChart />
            <ListTasks />
            <FormContainer />
        </div>
    );
}

export default Profile;