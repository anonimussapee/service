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
var search=document.querySelector(".search-box");
search.addEventListener("keyup", ()=>{
console.log("esto"+search.value);
console.log(a[1]);
})