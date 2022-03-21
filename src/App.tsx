import React from 'react';
import Header from "./components/Header/Header";
import FormContainer from "./components/FormContainer/FormContainer";
import ListTasks from "./components/ListTasks/ListTasks";

const App: React.FC = () => {

    return (
    <div>
        <Header />
        <div className='content'>
            <ListTasks />
            <FormContainer />
        </div>
    </div>
  );
}

export default App;