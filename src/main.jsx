import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "./context/Context";

export const AppState = createContext();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppState.Provider value={Context}>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </AppState.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
