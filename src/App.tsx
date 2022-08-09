import React from 'react';
import Navigation from "./components/Navigation";
import {Route, Routes} from "react-router-dom";
import LatestNews from "./pages/LatestNews";

function App() {

    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<LatestNews />} />
                <Route path="/login" />
            </Routes>
        </>
    );
}

export default App;