var colorTxt =document.getElementById('text');
var actionTxt=document.getElementById('action');
var colors=['red','yellow','blue'];
var pic=0;
let diffrentcolor=function(){
   colorTxt.style.color=colors[pic];
   pic++;
   if(pic >=3){
    pic=0;
   }
}
actionTxt.addEventListener("click",diffrentcolor)