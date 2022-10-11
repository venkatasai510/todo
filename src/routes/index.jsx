import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../container/home';


function AppRoutes() {
    <Router>
        <Routes>
            <Route exact path="/" element={<Home />} ></Route>
        </Routes>
    </Router>
}

export default AppRoutes;