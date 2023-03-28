//drums
const drum1 = document.querySelector(".drum1");
const drum2 = document.querySelector(".drum2");
const drum3 = document.querySelector(".drum3");
const drum4 = document.querySelector(".drum4");
const drum5 = document.querySelector(".drum5");
const drum6 = document.querySelector(".drum6");

// audios
var audio1 = new Audio("./audios/audio1.mp3");
var audio2 = new Audio("./audios/audio2.mp3");
var audio3 = new Audio("./audios/audio3.mp3");
var audio4 = new Audio("./audios/audio4.mp3");
var audio5 = new Audio("./audios/audio5.mp3");
var audio6 = new Audio("./audios/audio6.mp3");

// stop all audios
function stopAllAudios(currentAudio) {
  // audio1
  if (audio1 !== currentAudio) {
    audio1.pause();
    audio1.currentTime = 0;
  }
  // audio2
  if (audio2 !== currentAudio) {
    audio2.pause();
    audio2.currentTime = 0;
  }
  // audio2
  if (audio3 !== currentAudio) {
    audio3.pause();
    audio3.currentTime = 0;
  }
  // audio2
  if (audio4 !== currentAudio) {
    audio4.pause();
    audio4.currentTime = 0;
  }
  // audio2
  if (audio5 !== currentAudio) {
    audio5.pause();
    audio5.currentTime = 0;
  }
  // audio2
  if (audio6 !== currentAudio) {
    audio6.pause();
    audio6.currentTime = 0;
  }
}

// handling drums
drum1.addEventListener("click", () => {
  stopAllAudios(audio1);
  audio1.play();
});
drum2.addEventListener("click", () => {
  stopAllAudios(audio2);
  audio2.play();
});
drum3.addEventListener("click", () => {
  stopAllAudios(audio3);
  audio3.play();
});
drum4.addEventListener("click", () => {
  stopAllAudios(audio4);
  audio4.play();
});
drum5.addEventListener("click", () => {
  stopAllAudios(audio5);
  audio5.play();
});
drum6.addEventListener("click", () => {
  stopAllAudios(audio6);
  audio6.play();
});

//keypressing the events
document.addEventListener("keypress", (event) => {
  //console.log(event);
  playaudio(event);
});

function playaudio(event) {
  //console.log(event);
  //audio1
  if (event.key === "w") {
    stopAllAudios(audio1);
    audio1.play();
  }
  // for audio2
  if (event.key === "z") {
    stopAllAudios(audio2);
    audio2.play();
  }
  // for audio3
  if (event.key === "j") {
    stopAllAudios(audio3);
    audio3.play();
  }
  // for audio4
  if (event.key === "l") {
    stopAllAudios(audio4);
    audio4.play();
  }
  // for audio5
  if (event.key === "v") {
    stopAllAudios(audio5);
    audio5.play();
  }
  // for audio6
  if (event.key === "r") {
    stopAllAudios(audio6);
    audio6.play();
  }
}

// //playing the audio
// function playAudio(audio){
//     audio.play();
// }
