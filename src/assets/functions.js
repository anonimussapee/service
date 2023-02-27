import a from './index.js';
document.querySelector(".burger").addEventListener("click", ()=>{
    let menu=document.querySelector(".slide--menu-burger");
    menu.style.right="0";
    menu.style.transition=".7s ease-in";
} );
document.querySelector(".close-menu").addEventListener("click", ()=>{
    let menu=document.querySelector(".slide--menu-burger");
    menu.style.right="-300px";
    menu.style.transition=".7s ease-in";
} );
var list_search=document.querySelector(".list-search");
var search=document.querySelector(".search-box");
search.addEventListener("keyup", ()=>{
    let viewlist=``;
    let listview;
    a[0].shift();
    listview=a[0].filter(item=>{
        let namee=item.name.toLowerCase();
        return namee.includes(search.value.toLowerCase());});
    console.log(listview);
    if(listview.length==0){
        list_search.innerHTML=`<article class="posts list">
        <div class="box-post""><p class="content">No hay resultados</p></div>
        </article>`;
    }else if(search.value.trim()===""){
        list_search.innerHTML=``;
    }else{ for (var i=0;i<listview.length;i++) {
        viewlist+=`<article class="posts list">
        <div class="box-post"><span class="more"></span>
        <span class="postuser img" style="background-image:url(${listview[i].img});"><div class="star-container">
        <p class="star checked">★</p>
        <p class="star checked">★</p>
        <p class="star">★</p>
        </div></span><div class="skill-name"><p class="content">${listview[i].clasificacion}</p><p class="content">${listview[i].name}</p><p class="content age">${listview[i].edad} Años</p></div></div>
        </article>`;
list_search.innerHTML=viewlist;}
   
    }

});
