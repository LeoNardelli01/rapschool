

var video = $("#video");
navigator.webcam = (navigator.getUserMedia);

function success(stream) {
  video.srcObject= stream
  console.log(video.srcObject)
  video.play
}
function error(error) {
  alert("sucecio un error");
  console.log(error);
}

$("#empezar").click(function(){
  navigator.webcam({video:true,audio:true}, success, error);
});
