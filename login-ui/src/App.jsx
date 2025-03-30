import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Welcome from "./pages/Welcome.jsx";
import "./Styles.css";

function App() {
    return (
        <Router>
            <Content />
        </Router>
    );
}

function Content() {
    const location = useLocation();

    return (
        <>
            {location.pathname !== "/welcome" && (
                <nav>
                    <ul>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </nav>
            )}
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/welcome" element={<Welcome />} />
            </Routes>
        </>
    );
}

export default App;