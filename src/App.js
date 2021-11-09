// import logo from './logo.svg';
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alert from "./components/Alert";




function App() {


  //start var 'bgmode' to control theme of app 
  const [bgmode, setBgmode] = useState("light");


  const toggleBgMode = ()=>{
    if(bgmode === 'light'){
      setBgmode('dark');
      document.body.style.backgroundColor = '#0c215c';
      displayAlert('success', 'Dark mode has been enabled');

      setTimeout(() => {
        setAlert('');
      }, 2000);
    }
    else{
      setBgmode('light');
      document.body.style.backgroundColor = 'white';
      displayAlert('success', 'Light mode has been enabled');

      setTimeout(() => {
        setAlert('');
      }, 2000);
    }
  }

  const [alert, setAlert] = useState(null);

  const displayAlert = (type, message)=>{
    setAlert({
      type: type,
      alertmsg: message
    });

    setTimeout(() => {
      setAlert('');
    }, 2000);
  }


  return (
    <>
    {/* aboutText="Iam ekno. ka ..." */}
       <Navbar title="TextBlogUtils"  mode={bgmode} toggleMode={toggleBgMode} displayAlert={displayAlert}/> 

       <Alert alert={alert} />

      <div className="container">
        <TextForm heading="Enter text for Modification" mode={bgmode} displayAlert={displayAlert}/>
      </div>

      {/* <About/>; */}
    </>
  );
}



export default App;
