import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

let obj = {
  search: "Search"
};

function App() {
  const [mode, setMode] = useState('light'); // Whether mode is dark or light
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.title = 'TextUtils - Dark Mode';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils - Light Mode';
      showAlert("Light mode has been enabled", "success");
    }
  }
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <>
      {/* <Router> */}
      {/* Component "Navbar" with Props "title", "home", "about" and "object" */}
      <Navbar title="TextUtils" home="Home" about="About" object={obj} mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes>
          <Route path='/' element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />} />
          <Route path='/about' element={<About />} />
        </Routes> */}
        <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;