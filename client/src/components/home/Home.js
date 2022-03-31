import React, { useState , useEffect } from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../UserContext.';
import Roomlist from './Roomlist';
import io from 'socket.io-client'
let socket ;
const Home = () => {
  const {user , setUser} = useContext(UserContext);
  const [room , setRoom] = useState('');
  const[rooms , setRooms] = useState([]);
    const ENDPT = 'localhost:5000';
    useEffect(() => {
      //socket = io(ENDPT);
       socket = io('http://localhost:5000', {transports: ['websocket', 'polling', 'flashsocket']});
    
      return () => {
        socket.emit('disconnect');
        socket.off();
      }
    }, [ENDPT])
    
    useEffect(()=> {
      socket.on('room-created' ,room=> {
        setRooms([...rooms , room]);
      } )
    } , [rooms])
   
    useEffect(()=> {
      console.log(rooms)
    } , [rooms])
   
    const handleSubmit = e => {
       e.preventDefault(); 
       socket.emit('create-room' , room);
       console.log(room);
       setRoom('');
    }
    
    const SetasSalena = ()=> {
       const salena = {
           name:"Salena",
           email:"salena1212@gmail.com",
           password:"1563733",
           id:'123'
       } 
       setUser(salena);
    }
    const SetasTaylor = ()=> {
        const taylor = {
            name:"Taylor",
           email:"taylor34212@gmail.com",
           password:"67787944",
           id:'124'
        }
        setUser(taylor);
    }
  return (
    <div>
        <div className="row">
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Welcome To Room {user ? user.name : ''}</span>
          <div className="row">
    <form onSubmit={handleSubmit} >
     
      <div className="row">
        <div className="input-field col s12">
          <input placeholder='Enter The room name'
           id="room" type="text" className="validate" value={room}
           onChange={e=> setRoom(e.target.value)}/>
          <label htmlFor="room">Room</label>
        </div>
      </div>
      <button className='btn'>Create Room</button>
      
    </form>
  </div>
        </div>
        <div className="card-action">
          <a href="#"onClick={SetasSalena}>SET AS Salena</a>
          <a href="#"onClick={SetasTaylor}>SET AS Taylor</a>
        </div>
      </div>
    </div>
    <div className='col s6 m5 offset-1'>
        <Roomlist rooms = {rooms}/>
    </div>
  </div>
       
       
        <Link to={'/chat'}>
        <button>Go to chat</button>
        </Link>
        </div>
  )
}

export default Home