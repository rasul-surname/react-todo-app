import React from 'react';
import {Route, Routes} from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
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
                <Route path="/react-sport-house" element={<Profile />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
        <Footer />
    </div>
  );
}

export default App;