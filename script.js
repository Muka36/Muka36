var title = document.querySelector(".counter");
var followers =document.querySelector(".followers")
let count = 1;

setInterval(()=>{
    if(count < 1000)
    count++;
    title.innerHTML= count
} ,1)

setTimeout(() =>{
   followers.innerHTML = "Followers in Instagram"
}, 5000)