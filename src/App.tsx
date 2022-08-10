import React from 'react';
import Navigation from "./components/Navigation";
import {Route, Routes} from "react-router-dom";
import LatestNews from "./pages/LatestNews";
import AdvancedSearch from "./pages/AdvancedSearch";

function App() {

    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<LatestNews />} />
                <Route path="/advanced" element={<AdvancedSearch />} />
            </Routes>
        </>
    );
}

export default App;