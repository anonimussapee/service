const video=document.querySelectorAll("video");
for (const videos of video) {
    videos.addEventListener("click",()=>{
        if(videos.paused){
            videos.play();
            videos.loop=true;

        }else{
            videos.pause();
        }
    });
    videos.addEventListener("scroll",()=>{
        if(videos.scrollTop>200){
            videos.play();
        }else{
            videos.pause();
        }
    });
}