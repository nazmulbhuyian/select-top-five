// document.getElementById('btn-aguaro').addEventListener('click', function(){
//     const aguaroTextField = document.getElementById('aguaro');
//     const aguaroFieldString = aguaroTextField.innerText;

//     const ramosTextField = document.getElementById('ramos');
//     const ramosFieldString = ramosTextField.innerText;

//     const olField = document.getElementById('player-list');
//     const liElement = document.createElement('li');

//     liElement.innerText = aguaroFieldString;
//     olField.appendChild(liElement);

    
//     liElement.innerText = ramosFieldString;
//     olField.appendChild(liElement);
// })

// document.getElementById('btn-ramos').addEventListener('click', function(){

// const ramosTextField = document.getElementById('ramos');
//     const ramosFieldString = ramosTextField.innerText;

//     const olField = document.getElementById('player-list');
//     const liElement = document.createElement('li');
//     liElement.innerText = ramosFieldString;
//     olField.appendChild(liElement);
// })



function displayPlayerList(playerText){
    const olField = document.getElementById('player-list');
    const liElement = document.createElement('li');
    liElement.innerText = playerText;
    olField.appendChild(liElement);
    const olFieldNumber = olField.children;
    

}

document.getElementById('btn-aguaro').addEventListener('click', function(){
    const aguaroTextField = document.getElementById('aguaro');
    const aguaroFieldString = aguaroTextField.innerText;
    displayPlayerList(aguaroFieldString);
})