import React from 'react';
import {Route, Routes} from "react-router-dom"

import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Pages/Profile/Profile";
import Train from "./components/Pages/Train/Train";
import Programs from "./components/Pages/Programs/Programs";
import Network from "./components/Pages/Network/Network";
import NotFoundPage from "./components/Pages/NotFoundPage/NotFoundPage";

const App: React.FC = () => {

    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path='/react-sport-house' element={<Profile/>}/>
                <Route path='/train' element={<Train/>}/>
                <Route path='/programs' element={<Programs/>}/>
                <Route path='/network' element={<Network/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
        </div>
    );
}

export default App;