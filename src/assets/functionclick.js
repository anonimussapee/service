function mostrar(id){
    let box=document.querySelector(`.user${id}`);
    let desc=document.querySelector(`.desc${id}`)
    let screenwidth=window.screen.width;
    let more=document.querySelector(`.more${id}`);
    more.style.backgroundImage="url(https://jobsrv.netlify.app/src/img/iconos/close.png)";
    more.style.width="35px";
    more.style.height="35px";
    more.setAttribute("onclick",`cerrarbox(${id})`);
    desc.style.visibility="visible";
    desc.style.position="relative";
    box.style.transition=".8s ease-in";
    if(screenwidth>=320 && screenwidth<375){
        box.style.width="280px";
        box.style.height="auto";
    }else if(screenwidth>=375 && screenwidth<425){
        box.style.width="340px";
        box.style.height="auto";
    }else if(screenwidth>=425){
        box.style.width="375px";
        box.style.height="auto";
    }
}
function cerrarbox(id){
    let box=document.querySelector(`.user${id}`);
    let desc=document.querySelector(`.desc${id}`)
    let screenwidth=window.screen.width;
    let more=document.querySelector(`.more${id}`);
    more.style.backgroundImage="url(https://jobsrv.netlify.app/src/img/iconos/more.png)";
    more.style.width="20px";
    more.style.height="20px";
    more.setAttribute("onclick",`mostrar(${id})`);
    desc.style.visibility="hidden";
    desc.style.position="fixed";
        box.style.width="270px";
        box.style.height="150px";
    
}