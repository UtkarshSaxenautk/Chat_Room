import React from 'react'

const Room = ({name}) => {
  return (
    <div>
         <div className="row">
    
      <div className="card">
       
        <div className="card-content">
          <p>{name}</p>
        </div>
      
      </div>
    
  </div>
            
    </div>
  )
}

export default Room