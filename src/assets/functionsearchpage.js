import a from './index.js';
var question=document.querySelector(".question_box");
var data_search_container=document.querySelector(".data--card-container");
console.log(data_search_container);
var search_page_box=document.querySelector(".search--page");
search_page_box.addEventListener('keyup',()=>{
let value_search =search_page_box.value;
console.log(value_search);
 let viewlist=``;
 let list_find;
 a[0].shift();
 list_find=a[0].filter(item=>{
     let namee=item.name.toLowerCase();
     return namee.includes(value_search.toLowerCase());});
     console.log(list_find);
     if(list_find.length==0){
        question.style.visibility="visible";
        question.style.height="auto";
        data_search_container.innerHTML=``;
     }else if(value_search.trim()==""){
        question.style.visibility="visible";
        question.style.height="auto";
        data_search_container.innerHTML=``;
     }else if(list_find.length>0){
        question.style.visibility="hidden";
        question.style.height="0px";
        list_find.map(item=>{
            viewlist+=`<article class="posts search">
            <div class="box-post">
            <span class="postuser img" style="background-image:url(${item.img});"></span><div class="skill-name"><p class="content skill">${item.clasificacion}</p><p class="content ">${item.name}</p><p class="content age">${item.edad} Años</p></div><div class="star-container">
            <p class="star checked">★</p>
            <p class="star checked">★</p>
            <p class="star">★</p>
            </div></div>
            </article>`;
        });
        data_search_container.innerHTML+=viewlist;
     }
});
