const chatmodel = require('../../models/chat/chat_model')
const csocket = io => {
    var nsp = io.of('chat')
    nsp.on("connection", (socket1) => console.log("namespace working"))
    io.on("connection", (socket) => {
        socket.emit("hey", "it works from chat")
        console.log("sucessfully connected on chat room")
    })

}
module.exports = csocket;