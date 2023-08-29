import Navbar  from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import Alert from './Components/Alert'
import About from './Components/About';
import {Routes,Route,BrowserRouter as Router}from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState('null');

  const showAlert = (message,type) => {
      setAlert({
        msg : message,
        type : type
      })
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled','success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert('Light mode has been enabled','success');
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Text Utils" aboutText = "About" mode={mode} toggleMode={toggleMode}/> 
        <Alert alert={alert} />
        <Routes>
          <Route path="/About" element={<About mode={mode}/>}/> 
          <Route path="/" element={<TextForm showAlert={showAlert} title="Try Text Utils - Word Counter, Character Counter, Case Converter" mode={mode} className="my-3"/>}/>    
        </Routes>
      </Router>
    </>
  );
}

export default App;
 