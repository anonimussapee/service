import videodata from "./reelsdata.js";
var view=``;
var container_reels=document.querySelector(".app_video");
for(let i=0;i<videodata.length;i++){
    view+=`<div class="video">
    <div class="header_icons">
        <span class="material-symbols-outlined">
            arrow_back
            </span>
            <p>Reels Job</p>
            <span class="material-symbols-outlined">
                photo_camera
                </span>
    </div>
    <video src="${videodata[i]}" class="video_player video${i}"></video>
    <div class="footer_icons">
        <div class="user_text" >
            <div class="user_avatar img" style="background-image: url(./src/img/fondos/mifoto.jpg);"></div><p class="username">John Córdova - <button>Seguir</button></p>
        </div>
        <div class="footer_video_name">
            <span class="material-symbols-outlined">
                travel_explore
                </span>
                <marquee >busqueda del conocimiento</marquee>
        </div>
    </div>
    <div class="video_footer_actions">
        <div class="video_actions_right">
            <span class="material-symbols-outlined">
                favorite
            </span>
            <span class="material-symbols-outlined">
                    comment
            </span>
            <span class="material-symbols-outlined">
                send
            </span>
            <span class="material-symbols-outlined">
                more_horiz
            </span>
        </div>
    </div>
</div>`;
}

container_reels.innerHTML+=view;