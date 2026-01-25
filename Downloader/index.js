
let h3=document.querySelector('h3');
let bar=document.querySelector('.bar');
let percentage=document.querySelector('h4');
let fill=document.querySelector('.fill');
let totalTime=3;
let count=0;
let maxWidth=190;
let timer=setInterval(function(){
    if(count<100){
        count++;
        bar.style.width=(count * maxWidth / 100) + "px";
        percentage.textContent=`${count}%`;
    }
    else{
        percentage.textContent="Download completed";
        percentage.style.fontSize='25px';
        percentage.style.color='white';
        h3.style.display='none';
        clearInterval(timer);
    }
},30);
