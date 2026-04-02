/* eslint-disable react-hooks/immutability */
import React, { useState } from "react";
import Navbar from "./assets/Component/Navbar";
import Textforms from "./assets/Component/Textforms";
import About from "./assets/Component/About";
import Alert from "./assets/Component/Alert";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode is enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route
              path="/"
              element={<Textforms mode={mode} showAlert={showAlert} />}
            />
            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>

      </BrowserRouter>
    </>
  );
}

export default App;