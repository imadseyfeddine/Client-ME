import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Authentication from "./pages/Authentication";
import Sidebar from "./components/SideBar/Sidebar";
import Navbar1 from "./components/NavBar/Navbar1";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Authentication />} />
                <Route path="/sidebar" element={<Sidebar />} />
                <Route path="/navbar" element={<Navbar1/>} />
            </Routes>
        </Router>
    );
}

export default App;


