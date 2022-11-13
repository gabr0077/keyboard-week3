const displaykey = document.querySelector('.key h2');
const displaykeycode = document.querySelector('.keycode h2');
const keycodediv = document.querySelector('.keycode');

window.addEventListener('keydown',(e)=>{

displaykey.innerHTML =e.key;
displaykeycode.innerHTML = e.keycode;

if(e.key === 33){

    displaykey.innerHTML = `'space'`
}


})