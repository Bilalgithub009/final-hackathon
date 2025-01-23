import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import ReactDOM from "react-dom/client";
import Login from './page/Login'
import Signup from './page/Signup'

function App() {
  

  return (
    <>
        <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
    {/* <BrowserRouter>
    <Routes>
       <Route path="/login" element={<Login/>}/>
       <Route path="/signup" element={<Signup/>}/> 
    
    
    </Routes>
    
    
    </BrowserRouter> */}
    {/* <Signup/> */}
    {/* <Login/> */}
    {/* import { useState } from "react";
    function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const handleSignup = () => {
      console.log("Email:", email);
      console.log("Password:", password);

      
  };
  
  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Sign up</button>
    </div>
  );
}

export default Signup; */}

    </>
  )
}

export default App
