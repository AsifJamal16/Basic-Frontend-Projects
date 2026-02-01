let savebutton=document.querySelector('#save');
let inputBox=document.querySelector('.inputbox');
let updatebutton=document.querySelector('#update');
let paratext=document.querySelector('.storedName');
let newVal=localStorage.getItem('username');

if(newVal){
    paratext.textContent=`Stored Name: ${newVal}`;
}
savebutton.addEventListener('click',function(){
    localStorage.setItem('username', inputBox.value);
    newVal=inputBox.value;
    if(newVal.trim()!==''){
        paratext.textContent=`Stored Name: ${newVal}`;
        inputBox.value='';
    }
    else{
        alert('not a valid name')
    }
})
updatebutton.addEventListener('click',function(){
    localStorage.setItem('username', inputBox.value);
    newVal=inputBox.value;
    if(newVal.trim()!=''){
        paratext.textContent=`Stored Name: ${newVal}`;
        inputBox.value='';
    }
    else{
        alert('not a valid name')
    }
})