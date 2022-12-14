
import './App.css';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const [ user, setLoginUser] = useState({})

  useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("MyUser")))
  }, [])

  const updateUser = (user) => {
    localStorage.setItem("MyUser", JSON.stringify(user))
    setLoginUser(user)
  }
  return (
    <div className="App">
     {/* <h1>Hello page</h1> */}
     <BrowserRouter>
     <Routes>
     <Route  path="/" element={
              user && user._id ? <Home updateUser={updateUser} /> : <Login updateUser={updateUser} />
            }/>
            
          
    
     <Route path="/register" element={<Register/>}/> 
      <Route path="/login" element={<Login updateUser={updateUser}/>}/>
     
     </Routes>
     
     </BrowserRouter>
     
   
     
    </div>
  );
}

export default App;
