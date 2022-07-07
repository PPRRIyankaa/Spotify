console.log("Welcome To Spotify");
let audioELement = new Audio('1.mp3');
let songIndex = 0;
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songs = [
    {songname: "Dilbar",filepath: "song/1.mp3", coverpath: "covers/1.jpg"},
    {songname: "Dilbar",filepath: "song/1.mp3", coverpath: "covers/1.jpg"},
    {songname: "Dilbar",filepath: "song/1.mp3", coverpath: "covers/1.jpg"},
    {songname: "Dilbar",filepath: "song/1.mp3", coverpath: "covers/1.jpg"},
    {songname: "Dilbar",filepath: "song/1.mp3", coverpath: "covers/1.jpg"}
]

masterplay.addEventListener('click', ()=>{
    if(audioELement.paused || audioELement.currentTime<=0){
        audioELement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioELement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
audioELement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    // update seekbar
    progress = parseInt((audioELement.currentTime/audioELement.duration)*100);
    console.log(progress);
    myprogressbar.value = progress;
})
// audioELement.play();
myprogressbar.addEventListener('change' , ()=>{
    audioELement.currentTime = myprogressbar.value * audioELement.duration/100;
})