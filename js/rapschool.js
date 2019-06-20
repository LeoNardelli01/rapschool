var config = {audio:false, video:true};

navigator.mediaDevices.getUserMedia(config).then(function(mediaStream){
  var video = document.getElementById('video');
   video.srcObject = mediaStream;
   video.play();
}).catch(function(err){
  console.log("puto error: " + err.message);
})
