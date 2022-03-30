const app = require('express')();
const http = require('http').createServer(app);

const socketio = require('socket.io');
const io = socketio(http);

const PORT = process.env.PORT || 5000 

const {addUser , getUser , removerUser} = require('./helpers');

io.on('connection' , (socket)=> {
    console.log('A user connected with socket_id: ' + socket.id);
    socket.on('create-room' , name=> {
       console.log("Recieved Room name : " + name); 
    }) 

    socket.on('join' , ({name , room_id , user_id})=> {
        const {error , user} = addUser({
        socket_id:socket.id,
        name,
        room_id,
        user_id
        
    })
    if(error){
        console.log("Error : " , error);
    }
    else {
        console.log(user , "joined");
    }
    });
    socket.on('sendMessage' , (message , room_id , callback) => {
       const user = getUser(socket.id);
       const msg = {
           name:user.name,
           user_id:user.user_id,
           room_id,
           text:message
       }
       console.log('Message : ' , msg);
       io.to(room_id).emit('message' , msg);
       callback();
    });
    socket.on('disconnect' , ()=> {
        const user = removerUser(socket.id);
        console.log("user : " , user , " removed succesfully");
    })
});

http.listen(PORT , ()=> {
    console.log("Listening on port : " + PORT);
})