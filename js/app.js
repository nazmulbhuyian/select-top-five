
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



 


