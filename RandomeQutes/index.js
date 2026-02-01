let p=document.querySelector('h3');
let nextbutton=document.querySelector('.next');
function loadQouts(){

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((rowdata)=>{
        return rowdata.json();
    })
    .then((data)=>{
        let rn=Math.floor(Math.random()*10)*10;
        p.textContent=data[rn].body;
    })
    .catch((err)=>{
        console.log(err);
    })
}
nextbutton.addEventListener('click',loadQouts);
