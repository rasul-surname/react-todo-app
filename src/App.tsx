import React from 'react';
import FormContainer from "./components/FormContainer/FormContainer";
import ListTasks from "./components/ListTasks/ListTasks";

const App: React.FC = () => {

    return (
    <div className='App'>
        <h1 style={{textAlign: "center"}}>Todo App</h1>
        <FormContainer />
        <ListTasks />
    </div>
  );
}

export default App;