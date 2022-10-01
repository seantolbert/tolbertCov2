import React, { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Context from "./context/Context";

export const AppState = createContext();

ReactDOM.createRoot(document.getElementById("root")).render(
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
