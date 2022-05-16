import React from 'react';
import {Route, Routes} from "react-router-dom";

import Header from "./components/Header/Header";
import Network from "./components/Pages/Network/Network";
import Programs from "./components/Pages/Programs/Programs";
import Train from "./components/Pages/Train/Train";
import Profile from "./components/Pages/Profile/Profile";
import NotFoundPage from "./components/Pages/NotFoundPage/NotFoundPage";

const App: React.FC = () => {

    return (
    <div className='wrapper'>
        <Header />
        <Routes>
            <Route path="/network" element={<Network />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/train" element={<Train />} />
            <Route path="/react-sport-house" element={<Profile />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </div>
  );
}

export default App;