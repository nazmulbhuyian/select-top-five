
const cartArray = [];
function addToCart(element){
    const productName = element.parentNode.children[0].innerText;
    const productObj = {productName: productName}
    cartArray.push(productObj);
    element.setAttribute("disabled", true);
    
    
    if(cartArray.length < 6){
        display(productName);
    }
    else{
        alert('You cannot select more than Five');
    }
    
}

function display(cartProduct){
    const playerList = document.getElementById('player-list');
    playerList.innerHTML = '';
    
    for(i = 0; i < cartProduct.length; i++){
        
        const name = cartArray[i].productName;

        const li = document.createElement('li');

        li.innerHTML = `
        <li class="text-white">${name} </li>
        `
        playerList.appendChild(li);

    }
    
}


const btnd = document.getElementById('btn-d');

btnd.addEventListener('click', function() {
  btnd.style.backgroundColor = 'gray';
  btnd.style.color = 'white';
});
const btni = document.getElementById('btn-i');

btni.addEventListener('click', function() {
  btni.style.backgroundColor = 'gray';
  btni.style.color = 'white';
});
const btns = document.getElementById('btn-s');

btns.addEventListener('click', function() {
  btns.style.backgroundColor = 'gray';
  btns.style.color = 'white';
});
const btna = document.getElementById('btn-a');

btna.addEventListener('click', function() {
  btna.style.backgroundColor = 'gray';
  btna.style.color = 'white';
});
const btnb = document.getElementById('btn-b');

btnb.addEventListener('click', function() {
  btnb.style.backgroundColor = 'gray';
  btnb.style.color = 'white';
});
const btnl = document.getElementById('btn-l');

btnl.addEventListener('click', function() {
  btnl.style.backgroundColor = 'gray';
  btnl.style.color = 'white';
});
 


