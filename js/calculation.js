document.getElementById('calculate').addEventListener('click', function(){
    const perPlayerHead = document.getElementById('player');
    const perPlayerHeadString = perPlayerHead.value;
    const perPlayer = parseFloat(perPlayerHeadString);
    if(isNaN(perPlayer)){
        alert('plz confirm right information');
    }
    
    const totalExpencesId = document.getElementById('total-expences');
    const totalExpencesString = totalExpencesId.innerText;
    const totalExpencesField = parseFloat(totalExpencesString);

    const ToalPlayerCoast = perPlayer * playerArray.length;
    totalExpencesId.innerText = ToalPlayerCoast;

})

document.getElementById('calculate-total').addEventListener('click', function(){

    const perPlayerHead = document.getElementById('player');
    const perPlayerHeadString = perPlayerHead.value;
    const perPlayer = parseFloat(perPlayerHeadString); 
    const ToalPlayerCoast = perPlayer * playerArray.length;   

    const managerInputField = document.getElementById('manager');
    const managerInputFieldString = managerInputField.value;
    const manager = parseFloat(managerInputFieldString);
    if(isNaN(manager)){
        alert('plz confirm right information');
    }
    
    const coachInputField = document.getElementById('coach');
    const coachInputFieldString = coachInputField.value;
    const coach = parseFloat(coachInputFieldString);
    if(isNaN(coach)){
        alert('plz confirm right information');
    }

    const totalCoastFieldId = document.getElementById('total-coast');
    const totalCoastString = totalCoastFieldId.innerText;
    const totalCoastField = parseFloat(totalCoastString);

    const totalCoast = ToalPlayerCoast + manager + coach;
    
    totalCoastFieldId.innerText = totalCoast;
})