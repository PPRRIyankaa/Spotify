console.log("Welcome To Spotify");
let audioELement = new Audio('songs/1.mp3');
let songIndex = 0;
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songname: "Punjabi Song",filepath: "songs/1.mp3", coverpath: "covers/1.jpg"},
    {songname: "Teri Mitti",filepath: "songs/2.mp3", coverpath: "covers/1.jpg"},
    {songname: "Stefflon",filepath: "songs/3.mp3", coverpath: "covers/1.jpg"},
    {songname: "Fanaa",filepath: "songs/4.mp3", coverpath: "covers/1.jpg"},
    {songname: "Chaand Baaliyan",filepath: "songs/5.mp3", coverpath: "covers/1.jpg"}
]

songItems.forEach((element, i)=>{
    element.getElementsByClassName('songname')[0].innerText = songs[i].songname; 
})



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
    //console.log('timeupdate');
    // update seekbar
    progress = parseInt((audioELement.currentTime/audioELement.duration)*100);
    //console.log(progress);
    myprogressbar.value = progress;
})
// audioELement.play();
myprogressbar.addEventListener('change' , ()=>{
    audioELement.currentTime = myprogressbar.value * audioELement.duration/100;
})


const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((ele)=>{
    ele.addEventListener('click', (e)=>{
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioELement.src = `songs/${index}.mp3`;
        audioELement.currentTime = 0;
        audioELement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <= 0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioELement.src = `songs/${songIndex +1}.mp3`;
    audioELement.currentTime = 0;
    audioELement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex >= 9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioELement.src = `songs/${songIndex+1}.mp3`;
    audioELement.currentTime = 0;
    audioELement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})