import React from 'react';
import Header from "./components/Header/Header";
import ActivityChart from "./components/ActivityChart/ActivityChart";
import FormContainer from "./components/FormContainer/FormContainer";
import ListTasks from "./components/ListTasks/ListTasks";
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Network from "./components/Pages/Network";
import Programs from "./components/Pages/Programs";
import Train from "./components/Pages/Train/Train";
import Profile from "./components/Pages/Profile";
import NotFoundPage from "./components/Pages/NotFoundPage";

const App: React.FC = () => {

    return (
    <div className='wrapper'>
        <Header />
        <div className='content'>
            <Routes>
                <Route path="/network" element={<Network />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/train" element={<Train />} />
                <Route path="/" element={<Profile />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
        <Footer />
    </div>
  );
}

export default App;