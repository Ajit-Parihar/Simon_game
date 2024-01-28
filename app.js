let boxs=document.querySelectorAll(".box");
let main=document.querySelector("#main");
let body=document.querySelector("body");
let h2=document.querySelector("h2");

let user=[];
let machine=[];
let start=false;
let level=0;
let high=0;
document.addEventListener("keypress",function(){
     if(start==false){
        start=true;
     }
     levelUp();
});

function levelUp(){
     user=[];
    level++;
    h2.innerText=`Level ${level}`;
    let num=Math.floor(Math.random()*4)+1;
    machine.push(num);
    if(num==boxs[0].innerText){
       
       flash(boxs[0]);
    }else if(num==boxs[1].innerText){
     
     flash(boxs[1]);
    }else if(num==boxs[2].innerText){
    
     flash(boxs[2]);
    }else{
     
     flash(boxs[3]);
    }
}

function flash(box){
     let color=box.style.backgroundColor;
     box.style.backgroundColor="white";
     setTimeout(function(){
          box.style.backgroundColor=color;
     },300);
}
function check(index){
     if(user[index]==machine[index]){
         if(user.length==machine.length){
          setTimeout(levelUp,1000);
         }
     }else{
          h2.innerText=`Game is over Your Score is ! ${level} 
              Press any key to start`;
              body.style.backgroundColor="red";
              setTimeout(function(){
               body.style.backgroundColor="white"
              },200);
              let h3=document.querySelector('h3');
              if(high<level){
                   high=level;
                   h3.innerText=`Highest Score ${high}`;
              }
          reset(); 
     }
}
function btnPress(event){
     user.push(event.target.innerText);
     flash(event.target); 
     check(user.length-1);
}

for(box of boxs){
   box.addEventListener("click",btnPress);
}

function reset(){
   start=false;
   machine=[];
   user=[];
   level=0;
}