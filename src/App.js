//import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

import Home from './Home';
import Login from './Login';
import { LoginContext } from './LoginContext';

function App() {

  const[username,setUsername]=useState("")
  const[price,setPrice]=useState("")
  const[quantity,setQuantity]=useState("")
  const[descrip,setDescrip]=useState("")

  const[showprofile,setShowprofile]=useState(false)

  return (
    <div className="App">
      <LoginContext.Provider value={{username,price,quantity,descrip,setUsername,setPrice,setQuantity,setDescrip,setShowprofile}}>
        {showprofile ? <Home/> : <Login/>}
      </LoginContext.Provider>
      
    </div>
  );
}

export default App;
