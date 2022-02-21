import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light") //Whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type:type
    })
    setInterval(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled" , "success");
      document.title = "Textutils - Light Mode" ;
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled" , "success");
      document.title = "Textutils - Dark Mode" ;
    }
  }

  return (
    <>
    <Router>
          <Navbar mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert}/>
          <div className='container my-3'>
          <Routes>
          <Route path="/about" element={<About mode={mode} />}>
          </Route>
          <Route path="/" element={<TextForm heading="Enter the Text to analyze" mode={mode} showAlert={showAlert}/>}>
          </Route>
          </Routes>
          </div>
    </Router>
    </>
  );
}

export default App;
