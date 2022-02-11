import "./App.css";
import * as React from "react";
import Inscription from "./Pages/inscription/inscription";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Connexion from "./Pages/connexion/connexion";
import Forgot_password from "./Pages/password_config/forgotPassword";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Inscription />} />
          <Route path="/Connexion" element={<Connexion />} />
          <Route path="/forgotPassword" element={<Forgot_password />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
