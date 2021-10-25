// Credits : Font Awesome -> https://fontawesome.com
//           Google Fonts -> https://fonts.google.com

// Created By - GladCode - AYush RAmteke 

// All Songs list 
let songs = [
    { songName: "Whatever it Takes", filePath: "songs/Whatever it takes.mp3", coversPath: "covers/7.jpg" },
    { songName: "Unstopabble - Sia", filePath: "songs/unstopabble(sia).mp3", coversPath: "covers/2.jfif" },
    { songName: "theWorld - Nightmare", filePath: "songs/theWorld.mp3", coversPath: "covers/3.jfif" },
    { songName: "Rise up - TheFatRat", filePath: "songs/Rise_up.mp3", coversPath: "covers/4.jfif" },
    { songName: "On My Way - Alan Walker", filePath: "songs/on my way.mp3", coversPath: "covers/5.jfif" },
    { songName: "Legends Never Die - League of Legends", filePath: "songs/Legends_Never_die.mp3", coversPath: "covers/6.jfif" },
    { songName: "Alumina - Nightmare", filePath: "songs/Alumina.mp3", coversPath: "covers/1.jpg" }
];

let currentsoundGIF = document.getElementsByClassName("currentsoundGIF")






// All our DOM content 
// start-
let audioElement = new Audio("songs/Whatever it takes.mp3");
console.log(audioElement.duration);
let songsItems = Array.from(document.getElementsByClassName("song"));
let songIndex = 0;
let mainIndex;
let currentPlayingMusic = document.getElementsByClassName("currentPlayingMusic");
const musicBar = document.getElementById("music-bar");
const play = document.getElementById("play");
const gif = document.getElementById("gif");
const playingSong = Array.from(document.getElementsByClassName("allSongsAction"));
const mainSongName = document.getElementsByClassName("mainSongName");
var currentPlaying = document.getElementsByClassName("PLAYING");



const one = document.getElementById("00");
const two = document.getElementById("01");
const three = document.getElementById("02");
const four = document.getElementById("03");
const five = document.getElementById("04");
const six = document.getElementById("05");
const seven = document.getElementById("06");

const img0 = document.getElementById("img0") ;
const img1 = document.getElementById("img1") ;
const img2 = document.getElementById("img2") ;
const img3 = document.getElementById("img3") ;
const img4 = document.getElementById("img4") ;
const img5 = document.getElementById("img5") ;
const img6 = document.getElementById("img6") ;

const _0 = document.getElementById("0");
const _1 = document.getElementById("1");
const _2 = document.getElementById("2");
const _3 = document.getElementById("3");
const _4 = document.getElementById("4");
const _5 = document.getElementById("5");
const _6 = document.getElementById("6");


const backward = document.getElementById("backward")
const forward = document.getElementById("forward")
// end-




// changing all songs names and their filePath
songsItems.forEach((element, i) => {
    let Allcovers = element.querySelectorAll(".cover")
    Allcovers[0].src = songs[i].coversPath
    let AllNames = element.getElementsByClassName("Names");
    AllNames[0].innerHTML = songs[i].songName;
});




// Music bar code and setup
// start-
// code when musicBar clicked 
musicBar.addEventListener("click", () => {
    audioElement.currentTime = 0
    audioElement.currentTime = parseInt((musicBar.value * audioElement.duration) / 100);
    
})
// code for musicBar timeupdate 
audioElement.addEventListener("timeupdate" ,()=>{
    progress = parseInt((audioElement.currentTime / audioElement.duration)*100)
    musicBar.value =  progress
    if (musicBar.value >= 100) {
        musicBar.value = 0
        play.classList.add("fa-play-circle")
        play.classList.remove("fa-pause-circle")

        gif.style.opacity = "0"

        img0.classList.remove("imgBack")
        img1.classList.remove("imgBack")
        img2.classList.remove("imgBack")
        img3.classList.remove("imgBack")
        img4.classList.remove("imgBack")
        img5.classList.remove("imgBack")
        img6.classList.remove("imgBack")

        one.classList.remove("playingMusic")
        two.classList.remove("playingMusic")
        three.classList.remove("playingMusic")
        four.classList.remove("playingMusic")
        five.classList.remove("playingMusic")
        six.classList.remove("playingMusic")
        seven.classList.remove("playingMusic")

        _0.classList.remove("fa-pause-circle")
        _0.classList.add("fa-play-circle")
        _1.classList.remove("fa-pause-circle")
        _1.classList.add("fa-play-circle")
        _2.classList.remove("fa-pause-circle")
        _2.classList.add("fa-play-circle")
        _3.classList.remove("fa-pause-circle")
        _3.classList.add("fa-play-circle")
        _4.classList.remove("fa-pause-circle")
        _4.classList.add("fa-play-circle")
        _5.classList.remove("fa-pause-circle")
        _5.classList.add("fa-play-circle")
        _6.classList.remove("fa-pause-circle")
        _6.classList.add("fa-play-circle")

    }
})
// end-



// Play and Pause Button setUp 
// start-
play.addEventListener("click", playButtonAction)
function playButtonAction() {
    if (audioElement.paused) {
        audioElement.play()
        gif.style.opacity = "1"
        play.classList.remove("fa-play-circle")
        play.classList.add("fa-pause-circle")

        currentPlayingMusic[0].classList.remove("fa-play-circle")
        currentPlayingMusic[0].classList.add("fa-pause-circle")

        one.classList.add("playingMusic")
        


        img0.classList.add("imgBack")
        
    } else {
        audioElement.pause()
        gif.style.opacity = "0"
        play.classList.remove("fa-pause-circle")
        play.classList.add("fa-play-circle")  
        
        currentPlayingMusic[0].classList.add("fa-play-circle")
        currentPlayingMusic[0].classList.remove("fa-pause-circle")


        img0.classList.remove("imgBack")
        img1.classList.remove("imgBack")
        img2.classList.remove("imgBack")
        img3.classList.remove("imgBack")
        img4.classList.remove("imgBack")
        img5.classList.remove("imgBack")
        img6.classList.remove("imgBack")

        one.classList.remove("playingMusic")
        two.classList.remove("playingMusic")
        three.classList.remove("playingMusic")
        four.classList.remove("playingMusic")
        five.classList.remove("playingMusic")
        six.classList.remove("playingMusic")
        seven.classList.remove("playingMusic")
    }

        
}
// end-





// Forward and Backward setUp
// start-
// Forward setup 
// start - 
forward.addEventListener("click", function next() {
    if (songIndex >= 6) {
        songIndex = 0
    } else{
        songIndex += 1
    }
    audioElement.src = songs[songIndex].filePath
    audioElement.currentTime = 0;
    audioElement.play()
    mainSongName[0].innerHTML = songs[songIndex].songName
    play.classList.add("fa-pause-circle")
    play.classList.remove("fa-play-circle")


    // Gif setup in image while fire forward
    // For - 0 
    if (songIndex == 0) {
        one.classList.add("playingMusic")
        two.classList.remove("playingMusic")
        three.classList.remove("playingMusic")
        four.classList.remove("playingMusic")
        five.classList.remove("playingMusic")
        six.classList.remove("playingMusic")
        seven.classList.remove("playingMusic")


        img0.classList.add("imgBack")
        img1.classList.remove("imgBack")
        img2.classList.remove("imgBack")
        img3.classList.remove("imgBack")
        img4.classList.remove("imgBack")
        img5.classList.remove("imgBack")
        img6.classList.remove("imgBack")

        _0.classList.add("fa-pause-circle")
        _0.classList.remove("fa-play-circle")

        _1.classList.remove("fa-pause-circle")
        _1.classList.add("fa-play-circle")
        _2.classList.remove("fa-pause-circle")
        _2.classList.add("fa-play-circle")
        _3.classList.remove("fa-pause-circle")
        _3.classList.add("fa-play-circle")
        _4.classList.remove("fa-pause-circle")
        _4.classList.add("fa-play-circle")
        _5.classList.remove("fa-pause-circle")
        _5.classList.add("fa-play-circle")
        _6.classList.remove("fa-pause-circle")
        _6.classList.add("fa-play-circle")



        _0.classList.add("currentPlayingMusic")
        _1.classList.remove("currentPlayingMusic")
        _2.classList.remove("currentPlayingMusic")
        _3.classList.remove("currentPlayingMusic")
        _4.classList.remove("currentPlayingMusic")
        _5.classList.remove("currentPlayingMusic")
        _6.classList.remove("currentPlayingMusic")
        

        
    } 
    // for - 1
    else if (songIndex == 1) {
        two.classList.add("playingMusic")
        one.classList.remove("playingMusic")
        three.classList.remove("playingMusic")
        four.classList.remove("playingMusic")
        five.classList.remove("playingMusic")
        six.classList.remove("playingMusic")
        seven.classList.remove("playingMusic")



        img1.classList.add("imgBack")
        img0.classList.remove("imgBack")
        img2.classList.remove("imgBack")
        img3.classList.remove("imgBack")
        img4.classList.remove("imgBack")
        img5.classList.remove("imgBack")
        img6.classList.remove("imgBack")


        _1.classList.add("fa-pause-circle")
        _1.classList.remove("fa-play-circle" )

        _0.classList.remove("fa-pause-circle")
        _0.classList.add("fa-play-circle")
        _2.classList.remove("fa-pause-circle")
        _2.classList.add("fa-play-circle")
        _3.classList.remove("fa-pause-circle")
        _3.classList.add("fa-play-circle")
        _4.classList.remove("fa-pause-circle")
        _4.classList.add("fa-play-circle")
        _5.classList.remove("fa-pause-circle")
        _5.classList.add("fa-play-circle")
        _6.classList.remove("fa-pause-circle")
        _6.classList.add("fa-play-circle")


        _1.classList.add("currentPlayingMusic")
        _0.classList.remove("currentPlayingMusic")
        _2.classList.remove("currentPlayingMusic")
        _3.classList.remove("currentPlayingMusic")
        _4.classList.remove("currentPlayingMusic")
        _5.classList.remove("currentPlayingMusic")
        _6.classList.remove("currentPlayingMusic")
    }
    // for - 2 
  else if (songIndex == 2) {
        three.classList.add("playingMusic")
        one.classList.remove("playingMusic")
        two.classList.remove("playingMusic")
        four.classList.remove("playingMusic")
        five.classList.remove("playingMusic")
        six.classList.remove("playingMusic")
        seven.classList.remove("playingMusic")


        img2.classList.add("imgBack")
        img0.classList.remove("imgBack")
        img1.classList.remove("imgBack")
        img3.classList.remove("imgBack")
        img4.classList.remove("imgBack")
        img5.classList.remove("imgBack")
        img6.classList.remove("imgBack")



        _2.classList.add("fa-pause-circle")
        _2.classList.remove("fa-play-circle")

        _0.classList.remove("fa-pause-circle")
        _0.classList.add("fa-play-circle")
        _1.classList.remove("fa-pause-circle")
        _1.classList.add("fa-play-circle")
        _3.classList.remove("fa-pause-circle")
        _3.classList.add("fa-play-circle")
        _4.classList.remove("fa-pause-circle")
        _4.classList.add("fa-play-circle")
        _5.classList.remove("fa-pause-circle")
        _5.classList.add("fa-play-circle")
        _6.classList.remove("fa-pause-circle")
        _6.classList.add("fa-play-circle")


        _2.classList.add("currentPlayingMusic")
        _1.classList.remove("currentPlayingMusic")
        _0.classList.remove("currentPlayingMusic")
        _3.classList.remove("currentPlayingMusic")
        _4.classList.remove("currentPlayingMusic")
        _5.classList.remove("currentPlayingMusic")
        _6.classList.remove("currentPlayingMusic")
    }
    // for - 3
  else if (songIndex == 3) {
        four.classList.add("playingMusic")
        one.classList.remove("playingMusic")
        two.classList.remove("playingMusic")
        three.classList.remove("playingMusic")
        five.classList.remove("playingMusic")
        six.classList.remove("playingMusic")
        seven.classList.remove("playingMusic")


        img3.classList.add("imgBack")
        img0.classList.remove("imgBack")
        img1.classList.remove("imgBack")
        img2.classList.remove("imgBack")
        img4.classList.remove("imgBack")
        img5.classList.remove("imgBack")
        img6.classList.remove("imgBack")



        _3.classList.add("fa-pause-circle")
        _3.classList.remove("fa-play-circle")

        _0.classList.remove("fa-pause-circle")
        _0.classList.add("fa-play-circle")
        _2.classList.remove("fa-pause-circle")
        _2.classList.add("fa-play-circle")
        _1.classList.remove("fa-pause-circle")
        _1.classList.add("fa-play-circle")
        _4.classList.remove("fa-pause-circle")
        _4.classList.add("fa-play-circle")
        _5.classList.remove("fa-pause-circle")
        _5.classList.add("fa-play-circle")
        _6.classList.remove("fa-pause-circle")
        _6.classList.add("fa-play-circle")



        _3.classList.add("currentPlayingMusic")
        _1.classList.remove("currentPlayingMusic")
        _2.classList.remove("currentPlayingMusic")
        _0.classList.remove("currentPlayingMusic")
        _4.classList.remove("currentPlayingMusic")
        _5.classList.remove("currentPlayingMusic")
        _6.classList.remove("currentPlayingMusic")
    }
    // for - 4
  else if (songIndex == 4) {
        five.classList.add("playingMusic")
        one.classList.remove("playingMusic")
        two.classList.remove("playingMusic")
        three.classList.remove("playingMusic")
        four.classList.remove("playingMusic")
        six.classList.remove("playingMusic")
        seven.classList.remove("playingMusic")


        img4.classList.add("imgBack")
        img0.classList.remove("imgBack")
        img1.classList.remove("imgBack")
        img2.classList.remove("imgBack")
        img3.classList.remove("imgBack")
        img5.classList.remove("imgBack")
        img6.classList.remove("imgBack")



        _4.classList.add("fa-pause-circle")
        _4.classList.remove("fa-play-circle")

        _0.classList.remove("fa-pause-circle")
        _0.classList.add("fa-play-circle")
        _2.classList.remove("fa-pause-circle")
        _2.classList.add("fa-play-circle")
        _3.classList.remove("fa-pause-circle")
        _3.classList.add("fa-play-circle")
        _1.classList.remove("fa-pause-circle")
        _1.classList.add("fa-play-circle")
        _5.classList.remove("fa-pause-circle")
        _5.classList.add("fa-play-circle")
        _6.classList.remove("fa-pause-circle")
        _6.classList.add("fa-play-circle")



        _4.classList.add("currentPlayingMusic")
        _1.classList.remove("currentPlayingMusic")
        _2.classList.remove("currentPlayingMusic")
        _3.classList.remove("currentPlayingMusic")
        _0.classList.remove("currentPlayingMusic")
        _5.classList.remove("currentPlayingMusic")
        _6.classList.remove("currentPlayingMusic")
    }
    // for - 5
  else if (songIndex == 5) {
        six.classList.add("playingMusic")
        one.classList.remove("playingMusic")
        two.classList.remove("playingMusic")
        three.classList.remove("playingMusic")
        four.classList.remove("playingMusic")
        five.classList.remove("playingMusic")
        seven.classList.remove("playingMusic")


        img5.classList.add("imgBack")
        img0.classList.remove("imgBack")
        img1.classList.remove("imgBack")
        img2.classList.remove("imgBack")
        img3.classList.remove("imgBack")
        img4.classList.remove("imgBack")
        img6.classList.remove("imgBack")



        _5.classList.add("fa-pause-circle")
        _5.classList.remove("fa-play-circle")

        _0.classList.remove("fa-pause-circle")
        _0.classList.add("fa-play-circle")
        _2.classList.remove("fa-pause-circle")
        _2.classList.add("fa-play-circle")
        _3.classList.remove("fa-pause-circle")
        _3.classList.add("fa-play-circle")
        _4.classList.remove("fa-pause-circle")
        _4.classList.add("fa-play-circle")
        _1.classList.remove("fa-pause-circle")
        _1.classList.add("fa-play-circle")
        _6.classList.remove("fa-pause-circle")
        _6.classList.add("fa-play-circle")




        _5.classList.add("currentPlayingMusic")
        _1.classList.remove("currentPlayingMusic")
        _2.classList.remove("currentPlayingMusic")
        _3.classList.remove("currentPlayingMusic")
        _4.classList.remove("currentPlayingMusic")
        _0.classList.remove("currentPlayingMusic")
        _6.classList.remove("currentPlayingMusic")
    }
  else if (songIndex == 6) {
        seven.classList.add("playingMusic")
        one.classList.remove("playingMusic")
        two.classList.remove("playingMusic")
        three.classList.remove("playingMusic")
        four.classList.remove("playingMusic")
        five.classList.remove("playingMusic")
        six.classList.remove("playingMusic")


        img6.classList.add("imgBack")
        img0.classList.remove("imgBack")
        img1.classList.remove("imgBack")
        img2.classList.remove("imgBack")
        img3.classList.remove("imgBack")
        img4.classList.remove("imgBack")
        img5.classList.remove("imgBack")



        _6.classList.add("fa-pause-circle")
        _6.classList.remove("fa-play-circle")

        _0.classList.remove("fa-pause-circle")
        _0.classList.add("fa-play-circle")
        _2.classList.remove("fa-pause-circle")
        _2.classList.add("fa-play-circle")
        _3.classList.remove("fa-pause-circle")
        _3.classList.add("fa-play-circle")
        _4.classList.remove("fa-pause-circle")
        _4.classList.add("fa-play-circle")
        _5.classList.remove("fa-pause-circle")
        _5.classList.add("fa-play-circle")
        _1.classList.remove("fa-pause-circle")
        _1.classList.add("fa-play-circle")



        _6.classList.add("currentPlayingMusic")
        _1.classList.remove("currentPlayingMusic")
        _2.classList.remove("currentPlayingMusic")
        _3.classList.remove("currentPlayingMusic")
        _4.classList.remove("currentPlayingMusic")
        _0.classList.remove("currentPlayingMusic")
        _5.classList.remove("currentPlayingMusic")
    }
})
backward.addEventListener("click", function back() {
    if (songIndex <= 0) {
        songIndex = 0
    } else{
        songIndex -= 1
    }
    audioElement.src = songs[songIndex].filePath
    audioElement.play()
    mainSongName[0].innerHTML = songs[songIndex].songName
    audioElement.currentTime = 0;
    musicBar.value = 0;
    play.classList.add("fa-pause-circle")
    play.classList.remove("fa-play-circle")

    if (songIndex == 0) {
        one.classList.add("playingMusic")
        two.classList.remove("playingMusic")
        three.classList.remove("playingMusic")
        four.classList.remove("playingMusic")
        five.classList.remove("playingMusic")
        six.classList.remove("playingMusic")
        seven.classList.remove("playingMusic")


        img0.classList.add("imgBack")
        img1.classList.remove("imgBack")
        img2.classList.remove("imgBack")
        img3.classList.remove("imgBack")
        img4.classList.remove("imgBack")
        img5.classList.remove("imgBack")
        img6.classList.remove("imgBack")

        _0.classList.add("fa-pause-circle")
        _0.classList.remove("fa-play-circle")

        _1.classList.remove("fa-pause-circle")
        _1.classList.add("fa-play-circle")
        _2.classList.remove("fa-pause-circle")
        _2.classList.add("fa-play-circle")
        _3.classList.remove("fa-pause-circle")
        _3.classList.add("fa-play-circle")
        _4.classList.remove("fa-pause-circle")
        _4.classList.add("fa-play-circle")
        _5.classList.remove("fa-pause-circle")
        _5.classList.add("fa-play-circle")
        _6.classList.remove("fa-pause-circle")
        _6.classList.add("fa-play-circle")



        _0.classList.add("currentPlayingMusic")
        _1.classList.remove("currentPlayingMusic")
        _2.classList.remove("currentPlayingMusic")
        _3.classList.remove("currentPlayingMusic")
        _4.classList.remove("currentPlayingMusic")
        _5.classList.remove("currentPlayingMusic")
        _6.classList.remove("currentPlayingMusic")
        

        
    } 
    // for - 1
    else if (songIndex == 1) {
        two.classList.add("playingMusic")
        one.classList.remove("playingMusic")
        three.classList.remove("playingMusic")
        four.classList.remove("playingMusic")
        five.classList.remove("playingMusic")
        six.classList.remove("playingMusic")
        seven.classList.remove("playingMusic")



        img1.classList.add("imgBack")
        img0.classList.remove("imgBack")
        img2.classList.remove("imgBack")
        img3.classList.remove("imgBack")
        img4.classList.remove("imgBack")
        img5.classList.remove("imgBack")
        img6.classList.remove("imgBack")


        _1.classList.add("fa-pause-circle")
        _1.classList.remove("fa-play-circle" )

        _0.classList.remove("fa-pause-circle")
        _0.classList.add("fa-play-circle")
        _2.classList.remove("fa-pause-circle")
        _2.classList.add("fa-play-circle")
        _3.classList.remove("fa-pause-circle")
        _3.classList.add("fa-play-circle")
        _4.classList.remove("fa-pause-circle")
        _4.classList.add("fa-play-circle")
        _5.classList.remove("fa-pause-circle")
        _5.classList.add("fa-play-circle")
        _6.classList.remove("fa-pause-circle")
        _6.classList.add("fa-play-circle")


        _1.classList.add("currentPlayingMusic")
        _0.classList.remove("currentPlayingMusic")
        _2.classList.remove("currentPlayingMusic")
        _3.classList.remove("currentPlayingMusic")
        _4.classList.remove("currentPlayingMusic")
        _5.classList.remove("currentPlayingMusic")
        _6.classList.remove("currentPlayingMusic")
    }
    // for - 2 
  else if (songIndex == 2) {
        three.classList.add("playingMusic")
        one.classList.remove("playingMusic")
        two.classList.remove("playingMusic")
        four.classList.remove("playingMusic")
        five.classList.remove("playingMusic")
        six.classList.remove("playingMusic")
        seven.classList.remove("playingMusic")


        img2.classList.add("imgBack")
        img0.classList.remove("imgBack")
        img1.classList.remove("imgBack")
        img3.classList.remove("imgBack")
        img4.classList.remove("imgBack")
        img5.classList.remove("imgBack")
        img6.classList.remove("imgBack")



        _2.classList.add("fa-pause-circle")
        _2.classList.remove("fa-play-circle")

        _0.classList.remove("fa-pause-circle")
        _0.classList.add("fa-play-circle")
        _1.classList.remove("fa-pause-circle")
        _1.classList.add("fa-play-circle")
        _3.classList.remove("fa-pause-circle")
        _3.classList.add("fa-play-circle")
        _4.classList.remove("fa-pause-circle")
        _4.classList.add("fa-play-circle")
        _5.classList.remove("fa-pause-circle")
        _5.classList.add("fa-play-circle")
        _6.classList.remove("fa-pause-circle")
        _6.classList.add("fa-play-circle")


        _2.classList.add("currentPlayingMusic")
        _1.classList.remove("currentPlayingMusic")
        _0.classList.remove("currentPlayingMusic")
        _3.classList.remove("currentPlayingMusic")
        _4.classList.remove("currentPlayingMusic")
        _5.classList.remove("currentPlayingMusic")
        _6.classList.remove("currentPlayingMusic")
    }
    // for - 3
  else if (songIndex == 3) {
        four.classList.add("playingMusic")
        one.classList.remove("playingMusic")
        two.classList.remove("playingMusic")
        three.classList.remove("playingMusic")
        five.classList.remove("playingMusic")
        six.classList.remove("playingMusic")
        seven.classList.remove("playingMusic")


        img3.classList.add("imgBack")
        img0.classList.remove("imgBack")
        img1.classList.remove("imgBack")
        img2.classList.remove("imgBack")
        img4.classList.remove("imgBack")
        img5.classList.remove("imgBack")
        img6.classList.remove("imgBack")



        _3.classList.add("fa-pause-circle")
        _3.classList.remove("fa-play-circle")

        _0.classList.remove("fa-pause-circle")
        _0.classList.add("fa-play-circle")
        _2.classList.remove("fa-pause-circle")
        _2.classList.add("fa-play-circle")
        _1.classList.remove("fa-pause-circle")
        _1.classList.add("fa-play-circle")
        _4.classList.remove("fa-pause-circle")
        _4.classList.add("fa-play-circle")
        _5.classList.remove("fa-pause-circle")
        _5.classList.add("fa-play-circle")
        _6.classList.remove("fa-pause-circle")
        _6.classList.add("fa-play-circle")



        _3.classList.add("currentPlayingMusic")
        _1.classList.remove("currentPlayingMusic")
        _2.classList.remove("currentPlayingMusic")
        _0.classList.remove("currentPlayingMusic")
        _4.classList.remove("currentPlayingMusic")
        _5.classList.remove("currentPlayingMusic")
        _6.classList.remove("currentPlayingMusic")
    }
    // for - 4
  else if (songIndex == 4) {
        five.classList.add("playingMusic")
        one.classList.remove("playingMusic")
        two.classList.remove("playingMusic")
        three.classList.remove("playingMusic")
        four.classList.remove("playingMusic")
        six.classList.remove("playingMusic")
        seven.classList.remove("playingMusic")


        img4.classList.add("imgBack")
        img0.classList.remove("imgBack")
        img1.classList.remove("imgBack")
        img2.classList.remove("imgBack")
        img3.classList.remove("imgBack")
        img5.classList.remove("imgBack")
        img6.classList.remove("imgBack")



        _4.classList.add("fa-pause-circle")
        _4.classList.remove("fa-play-circle")

        _0.classList.remove("fa-pause-circle")
        _0.classList.add("fa-play-circle")
        _2.classList.remove("fa-pause-circle")
        _2.classList.add("fa-play-circle")
        _3.classList.remove("fa-pause-circle")
        _3.classList.add("fa-play-circle")
        _1.classList.remove("fa-pause-circle")
        _1.classList.add("fa-play-circle")
        _5.classList.remove("fa-pause-circle")
        _5.classList.add("fa-play-circle")
        _6.classList.remove("fa-pause-circle")
        _6.classList.add("fa-play-circle")



        _4.classList.add("currentPlayingMusic")
        _1.classList.remove("currentPlayingMusic")
        _2.classList.remove("currentPlayingMusic")
        _3.classList.remove("currentPlayingMusic")
        _0.classList.remove("currentPlayingMusic")
        _5.classList.remove("currentPlayingMusic")
        _6.classList.remove("currentPlayingMusic")
    }
    // for - 5
  else if (songIndex == 5) {
        six.classList.add("playingMusic")
        one.classList.remove("playingMusic")
        two.classList.remove("playingMusic")
        three.classList.remove("playingMusic")
        four.classList.remove("playingMusic")
        five.classList.remove("playingMusic")
        seven.classList.remove("playingMusic")


        img5.classList.add("imgBack")
        img0.classList.remove("imgBack")
        img1.classList.remove("imgBack")
        img2.classList.remove("imgBack")
        img3.classList.remove("imgBack")
        img4.classList.remove("imgBack")
        img6.classList.remove("imgBack")



        _5.classList.add("fa-pause-circle")
        _5.classList.remove("fa-play-circle")

        _0.classList.remove("fa-pause-circle")
        _0.classList.add("fa-play-circle")
        _2.classList.remove("fa-pause-circle")
        _2.classList.add("fa-play-circle")
        _3.classList.remove("fa-pause-circle")
        _3.classList.add("fa-play-circle")
        _4.classList.remove("fa-pause-circle")
        _4.classList.add("fa-play-circle")
        _1.classList.remove("fa-pause-circle")
        _1.classList.add("fa-play-circle")
        _6.classList.remove("fa-pause-circle")
        _6.classList.add("fa-play-circle")




        _5.classList.add("currentPlayingMusic")
        _1.classList.remove("currentPlayingMusic")
        _2.classList.remove("currentPlayingMusic")
        _3.classList.remove("currentPlayingMusic")
        _4.classList.remove("currentPlayingMusic")
        _0.classList.remove("currentPlayingMusic")
        _6.classList.remove("currentPlayingMusic")
    }
  else if (songIndex == 6) {
        seven.classList.add("playingMusic")
        one.classList.remove("playingMusic")
        two.classList.remove("playingMusic")
        three.classList.remove("playingMusic")
        four.classList.remove("playingMusic")
        five.classList.remove("playingMusic")
        six.classList.remove("playingMusic")


        img6.classList.add("imgBack")
        img0.classList.remove("imgBack")
        img1.classList.remove("imgBack")
        img2.classList.remove("imgBack")
        img3.classList.remove("imgBack")
        img4.classList.remove("imgBack")
        img5.classList.remove("imgBack")



        _6.classList.add("fa-pause-circle")
        _6.classList.remove("fa-play-circle")

        _0.classList.remove("fa-pause-circle")
        _0.classList.add("fa-play-circle")
        _2.classList.remove("fa-pause-circle")
        _2.classList.add("fa-play-circle")
        _3.classList.remove("fa-pause-circle")
        _3.classList.add("fa-play-circle")
        _4.classList.remove("fa-pause-circle")
        _4.classList.add("fa-play-circle")
        _5.classList.remove("fa-pause-circle")
        _5.classList.add("fa-play-circle")
        _1.classList.remove("fa-pause-circle")
        _1.classList.add("fa-play-circle")

        

        _6.classList.add("currentPlayingMusic")
        _1.classList.remove("currentPlayingMusic")
        _2.classList.remove("currentPlayingMusic")
        _3.classList.remove("currentPlayingMusic")
        _4.classList.remove("currentPlayingMusic")
        _0.classList.remove("currentPlayingMusic")
        _5.classList.remove("currentPlayingMusic")
    }
})

// end-










// Code for All songs in queue
// start-
playingSong.forEach(element =>{
    element.addEventListener("click", playButtonClick)
});
function playButtonClick(e) {
    var songIndex = parseInt(e.target.id)
    
    if (e.target.classList.contains("fa-play-circle")) {
        audioElement.src = songs[songIndex].filePath;
        audioElement.play();
        mainSongPlayed()
        e.target.classList.remove("fa-play-circle")
        e.target.classList.add("fa-pause-circle")

        e.target.classList.add("currentPlayingMusic")

        play.classList.remove("fa-play-circle")
        play.classList.add("fa-pause-circle")
        gif.style.opacity = "1"

    } else {
        audioElement.pause()
        mainSongPlayed()
        e.target.classList.add("fa-play-circle")
        e.target.classList.remove("fa-pause-circle")

        e.target.classList.remove("currentPlayingMusic")

        play.classList.add("fa-play-circle")
        play.classList.remove("fa-pause-circle")

        gif.style.opacity = "0"
        
    }
    audioElement.currentTime = 0
    mainSongName[0].innerHTML = songs[songIndex].songName


// Showing current Playing songs 
    if (songIndex == 0) {
        one.classList.add("playingMusic")
        two.classList.remove("playingMusic")
        three.classList.remove("playingMusic")
        four.classList.remove("playingMusic")
        five.classList.remove("playingMusic")
        six.classList.remove("playingMusic")
        seven.classList.remove("playingMusic")


        img0.classList.add("imgBack")
        img1.classList.remove("imgBack")
        img2.classList.remove("imgBack")
        img3.classList.remove("imgBack")
        img4.classList.remove("imgBack")
        img5.classList.remove("imgBack")
        img6.classList.remove("imgBack")

        
    } 
    else if (songIndex == 1) {
        two.classList.add("playingMusic")
        one.classList.remove("playingMusic")
        three.classList.remove("playingMusic")
        four.classList.remove("playingMusic")
        five.classList.remove("playingMusic")
        six.classList.remove("playingMusic")
        seven.classList.remove("playingMusic")



        img1.classList.add("imgBack")
        img0.classList.remove("imgBack")
        img2.classList.remove("imgBack")
        img3.classList.remove("imgBack")
        img4.classList.remove("imgBack")
        img5.classList.remove("imgBack")
        img6.classList.remove("imgBack")
    }
  else if (songIndex == 2) {
        three.classList.add("playingMusic")
        one.classList.remove("playingMusic")
        two.classList.remove("playingMusic")
        four.classList.remove("playingMusic")
        five.classList.remove("playingMusic")
        six.classList.remove("playingMusic")
        seven.classList.remove("playingMusic")


        img2.classList.add("imgBack")
        img0.classList.remove("imgBack")
        img1.classList.remove("imgBack")
        img3.classList.remove("imgBack")
        img4.classList.remove("imgBack")
        img5.classList.remove("imgBack")
        img6.classList.remove("imgBack")
    }
  else if (songIndex == 3) {
        four.classList.add("playingMusic")
        one.classList.remove("playingMusic")
        two.classList.remove("playingMusic")
        three.classList.remove("playingMusic")
        five.classList.remove("playingMusic")
        six.classList.remove("playingMusic")
        seven.classList.remove("playingMusic")


        img3.classList.add("imgBack")
        img0.classList.remove("imgBack")
        img1.classList.remove("imgBack")
        img2.classList.remove("imgBack")
        img4.classList.remove("imgBack")
        img5.classList.remove("imgBack")
        img6.classList.remove("imgBack")
    }
  else if (songIndex == 4) {
        five.classList.add("playingMusic")
        one.classList.remove("playingMusic")
        two.classList.remove("playingMusic")
        three.classList.remove("playingMusic")
        four.classList.remove("playingMusic")
        six.classList.remove("playingMusic")
        seven.classList.remove("playingMusic")


        img4.classList.add("imgBack")
        img0.classList.remove("imgBack")
        img1.classList.remove("imgBack")
        img2.classList.remove("imgBack")
        img3.classList.remove("imgBack")
        img5.classList.remove("imgBack")
        img6.classList.remove("imgBack")
    }
  else if (songIndex == 5) {
        six.classList.add("playingMusic")
        one.classList.remove("playingMusic")
        two.classList.remove("playingMusic")
        three.classList.remove("playingMusic")
        four.classList.remove("playingMusic")
        five.classList.remove("playingMusic")
        seven.classList.remove("playingMusic")


        img5.classList.add("imgBack")
        img0.classList.remove("imgBack")
        img1.classList.remove("imgBack")
        img2.classList.remove("imgBack")
        img3.classList.remove("imgBack")
        img4.classList.remove("imgBack")
        img6.classList.remove("imgBack")
    }
  else if (songIndex == 6) {
        seven.classList.add("playingMusic")
        one.classList.remove("playingMusic")
        two.classList.remove("playingMusic")
        three.classList.remove("playingMusic")
        four.classList.remove("playingMusic")
        five.classList.remove("playingMusic")
        six.classList.remove("playingMusic")


        img6.classList.add("imgBack")
        img0.classList.remove("imgBack")
        img1.classList.remove("imgBack")
        img2.classList.remove("imgBack")
        img3.classList.remove("imgBack")
        img4.classList.remove("imgBack")
        img5.classList.remove("imgBack")
    }
}
function mainSongPlayed() {
    playingSong.forEach(items => {
        items.classList.add("fa-play-circle")
        items.classList.remove("fa-pause-circle")
        items.classList.remove("currentPlayingMusic")
    })
}
// end-


// Still not completed 😒