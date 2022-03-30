import React from 'react'
import { Link } from 'react-router-dom'
import Room from './Room'
const Roomlist = ({rooms}) => {
  return (
    <div>
        {rooms && rooms.map(room => (
       <Link to={'/chat/' + room._id + '/' + room.name} key = {room._id} >
        <Room name={room.name} />
        </Link>
 ))} </div>
  )
}

export default Roomlist