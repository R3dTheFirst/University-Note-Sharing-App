import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Create from "./pages/Create";
import NotePage from "./pages/NotePage";
import Notes from "./pages/Notes";
import Account from "./pages/Account";
import Physics from "./pages/Physics";
import Mathematics from "./pages/Mathematics";
import CompSci from "./pages/Compsci";
import Other from "./pages/Other";
import Layout from "./components/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/create" element={<Create />} />
                <Route path="/notes" element={<Notes />} />
                <Route path="/notes/:id" element={<NotePage />} />
                <Route path="/account" element={<Account />} />
                <Route path="/physics" element={<Physics />} />
                <Route path="/maths" element={<Mathematics />} />
                <Route path="/compsci" element={<CompSci />} />
                <Route path="/other" element={<Other />} />
            </Routes>
        </Layout>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
