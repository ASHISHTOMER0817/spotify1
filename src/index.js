import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Songs from './songs/Songs.jsx'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
   <Route path="/" element={<App/>}/>  
   <Route path="/Songs" element={<Songs/>}/>
    </Routes>
  </BrowserRouter>
);
