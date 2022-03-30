import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import { UserContext } from './UserContext.';
import './App.css';
import React , {useState} from 'react';
import Chat from './components/Chat/Chat';
import Home from './components/home/Home';
import Navbar from './components/layout/Navbar';
function App() {
 
  const [user , setUser] =  useState(null);
  return (
    <Router>
    <div className="App">
      <UserContext.Provider value={{user , setUser}}>
        <Navbar/>
        <Routes>
          <Route  path='/' element = {<Home />} />
          <Route  path = '/chat/:room_id/:room_name' element = {<Chat />} /> 
        </Routes>
      </UserContext.Provider>
      
    </div>
    </Router>
  );
}

export default App;
