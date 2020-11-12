# Zoom-Clone-nodejs-



웹 클라이언트와 서버간에 실시간 양방향 통신을 가능하게 할수 있는것이다.
npm install socket.io

const express = require("express");
const io = require("socket.io")(server);

io.on("connection", (socket) => {
  socket.on("join-room", (roomId) => {
    socket.join(roomId);
    socket.to(roomId).broadcast.emit("user-connected");
  });
});

--------------------------------------------------------------------------
캠+ 음성채팅 가능하게 한것

navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: true,
  })
  .then((stream) => {
    myVideoStream = stream;
    addVideoStream(myVideo, stream);

const addVideoStream = (video, stream) => {
  video.srcObject = stream;
  video.addEventLister("loadedmetadata", () => {
    video.play();
  });
  videoGrid.append(video);
};

--------------------------------------------------------------------------
peerjs
WebRTC라는 웹 브라우저 간에 플러그인의 도움 없이 서로 통신할 수 있도록 설계된 API를 쓸수있는 JS이다.
