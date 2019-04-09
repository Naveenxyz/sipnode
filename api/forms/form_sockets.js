const formmodel = require("../../models/forms/forms_model");
const posts = io => {
    io.on("connection", socket => {
        console.log("connected sucessfull on form");
        socket.emit("post2", "whats uppppppp");
        socket.on("po", (s) => {
            console.log(s)
        })
        socket.on("comment", (data_comment) => {
            console.log("comment recieved")
            console.log(data_comment)
            io.emit("resp_comment", data_comment);
            socket.disconnect()
            // io.close()
        });
        socket.on("post", data => {
            if (!data) {
                return res.status(400).send("Request data is missing");
            }
            let model = new formmodel(data);
            model.upVotes = 0;
            model.downVotes = 0;
            model.dVoted = false;
            model.uVoted = false;
            model.noComments = 0;
            model.save();
            console.log(model);
            socket.broadcast.emit("post_resp", data);
            console.log(data);
            console.log("it works yay");
        });
        socket.on("hey", data => {
            console.log(data);
        });
    });
};

module.exports = posts;