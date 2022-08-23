document.getElementById('calculate').addEventListener('click', function(){
    const perPlayerHead = document.getElementById('player');
    const perPlayerHeadString = perPlayerHead.value;
    const perPlayer = parseFloat(perPlayerHeadString);
    
    const totalExpencesId = document.getElementById('total-expences');
    const totalExpencesString = totalExpencesId.innerText;
    const totalExpencesField = parseFloat(totalExpencesString);

    const ToalPlayerCoast = perPlayer * cartArray.length;
    totalExpencesId.innerText = ToalPlayerCoast;



})

document.getElementById('calculate-total').addEventListener('click', function(){

    const perPlayerHead = document.getElementById('player');
    const perPlayerHeadString = perPlayerHead.value;
    const perPlayer = parseFloat(perPlayerHeadString); 
    const ToalPlayerCoast = perPlayer * cartArray.length;   

    const managerInputField = document.getElementById('manager');
    const managerInputFieldString = managerInputField.value;
    const manager = parseFloat(managerInputFieldString);
    

    const coachInputField = document.getElementById('coach');
    const coachInputFieldString = coachInputField.value;
    const coach = parseFloat(coachInputFieldString);
    

    const totalCoastFieldId = document.getElementById('total-coast');
    const totalCoastString = totalCoastFieldId.innerText;
    const totalCoastField = parseFloat(totalCoastString);

    const totalCoast = ToalPlayerCoast + manager + coach;
    
    totalCoastFieldId.innerText = totalCoast;
})