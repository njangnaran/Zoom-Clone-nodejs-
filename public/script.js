const socket = io("/");
const videoGrid = document.getElementById("video-grid");
console.log(videoGrid);
const myVideo = document.createElement("video");

myVideo.mute = true;

var peer = new Peer(undefined, {
  path: "/peer.js",
  host: "/",
  port: "3030",
});

let myVideoStream;
navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: true,
  })
  .then((stream) => {
    myVideoStream = stream;
    addVideoStream(myVideo, stream);


    peer.on('call',call => {
        call.answer.(stream)
        const video = document.createElement('video')
        call.on('stream',userVideoStream)
        addVideoStream(video,userVideoStream)
    })
  });


  
peer.on("open", (id) => {
  socket.emit("join-room");
});

socket.on("user-connected", () => {
  connectToUser();
});

const connectToUser = () => {
  console.log("new user");
};

const addVideoStream = (video, stream) => {
  video.srcObject = stream;
  video.addEventLister("loadedmetadata", () => {
    video.play();
  });
  videoGrid.append(video);
};
