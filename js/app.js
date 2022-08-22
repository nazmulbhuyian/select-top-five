
const cartArray = [];
function addToCart(element){
    const productName = element.parentNode.children[0].innerText;
    const productObj = {productName: productName}
    cartArray.push(productObj);
    element.setAttribute("disabled", true);
    element.style.backgroundColour  = 'gray';
    
    if(cartArray.length < 6){
        display(productName);
    }
    else{
        alert('plz')
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




// document.getElementById('btn-delete').addEventListener('click', function(){
//     const deleteButton = document.getElementById('btn-delete');
//     if(deleteButton === 'click'){
//         deleteButton.removeAttribute('disabled');     
//     }
//     else{
//         deleteButton.setAttribute('disabled', true);
//     }
// })

// const makebluebutton = document.getElementsByClassName('makeblue');
// makebluebutton.onclick = makeblue;
// function makeblue() {
//     document.body.style.backgroundColor = 'black';
// }