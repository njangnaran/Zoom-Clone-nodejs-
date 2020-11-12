const express = require("express");
const app = express();
const server = app.listen(3030, () => {
  console.log("start server : localhost:3030");
});
const io = require("socket.io")(server);
const peerServer = ExpressPeerServer(server, {
  debug: true,
});

app.use(express.static("public"));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.get("/", function (req, res) {
  res.render("room.html");
});

io.on("connection", (socket) => {
  socket.on("join-room", (roomId) => {
    socket.join(roomId);
    socket.to(roomId).broadcast.emit("user-connected");
  });
});
