import videodata from './reelsdata.js';

var datavideos=[];
for(let i=0;i<videodata.length;i++){
    
    datavideos.push(document.querySelector(`.video${i}`));
}
var valueindex=0;
console.log(datavideos);

for (const videos of datavideos) {
    videos.addEventListener("click",()=>{
        if(videos.paused){
            videos.play();
            videos.loop=true;
           
        }else{
            videos.pause();
        }
    });
    };
    var videocontainer=document.querySelector(".app_video");
videocontainer.addEventListener("scroll",()=>{
    console.log("hiciste scroll");
    if(videocontainer.offSetHeight>500){
        console.log("hiciste scroll");
    }
});