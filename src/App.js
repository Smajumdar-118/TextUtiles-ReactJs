
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert , setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  
  const toggleMode = ()=>{
    if(mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been Enabled" , "success")
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark Mode has been Enabled" , "success")
    }
  }
  
  return (
    
    <>
    <Router>
    <Navbar title="TextUtiles" about="About TextUtiles" mode={mode} toggleMode= {toggleMode}/>
    <Alert alert= {alert}/>
    <div className='container my-3'>
    <Routes>
      <Route exact path="/about" element={<About />}>
          
        </Route>
      <Route path="/" element={<TextForm heading="Enter Your Message to analyze" showAlert={showAlert}/>}>
        </Route>
        </Routes>

    </div>
    

    </Router>
    
    </>
   
  );
}

export default App;
