
const playerArray = [];
function addToCart(element){
    const playerName = element.parentNode.children[0].innerText;
    const playerObj = {playerName: playerName}
    playerArray.push(playerObj);
    element.setAttribute("disabled", true);
    
    if(playerArray.length < 6){
        display(playerName);
        
    }
    else{
        alert('You cannot select more than Five');
    }
    
}

function display(allPlayer){
    const playerList = document.getElementById('player-list');
    playerList.innerHTML = '';
    
    for(i = 0; i < allPlayer.length; i++){
        
      const name = playerArray[i].playerName;

        const li = document.createElement('li');

        li.innerHTML = `
        <li class="text-white">${name} </li>
        `
        playerList.appendChild(li);
    }
    
}


const aguaro = document.getElementById('btn-aguaro');

aguaro.addEventListener('click', function() {
  aguaro.style.backgroundColor = 'gray';
  aguaro.style.color = 'white';
});
const neymar = document.getElementById('btn-neymar');

neymar.addEventListener('click', function() {
  neymar.style.backgroundColor = 'gray';
  neymar.style.color = 'white';
});
const ronaldo = document.getElementById('btn-ronaldo');

ronaldo.addEventListener('click', function() {
  ronaldo.style.backgroundColor = 'gray';
  ronaldo.style.color = 'white';
});
const messi = document.getElementById('btn-messi');

messi.addEventListener('click', function() {
  messi.style.backgroundColor = 'gray';
  messi.style.color = 'white';
});
const mbappe = document.getElementById('btn-mbappe');

mbappe.addEventListener('click', function() {
  mbappe.style.backgroundColor = 'gray';
  mbappe.style.color = 'white';
});
const ramos = document.getElementById('btn-ramos');

ramos.addEventListener('click', function() {
  ramos.style.backgroundColor = 'gray';
  ramos.style.color = 'white';
});
const dybala = document.getElementById('btn-dybala');

dybala.addEventListener('click', function() {
  dybala.style.backgroundColor = 'gray';
  dybala.style.color = 'white';
});
const maradona = document.getElementById('btn-maradona');

maradona.addEventListener('click', function() {
  maradona.style.backgroundColor = 'gray';
  maradona.style.color = 'white';
});
const pogba = document.getElementById('btn-pogba');

pogba.addEventListener('click', function() {
  pogba.style.backgroundColor = 'gray';
  pogba.style.color = 'white';
});
 


