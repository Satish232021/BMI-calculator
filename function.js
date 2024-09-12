const heightElement = document.getElementById('height');
const weightElement = document.getElementById('weight');
const calculate = document.getElementById('total');
const bmiFinal = document.getElementById('final-bmi')
const weightCondition = document.getElementById('final-output');


weightElement.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        calculateBmi();
    }
});
heightElement.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        calculateBmi();
    }
});
calculate.addEventListener('click', calculateBmi);

let finalBmi ;

function calculateBmi() {

    if (heightElement.value === 0 || heightElement.value === '' || weightElement.value === 0 || weightElement.value === '') {
        alert ('Kindly enter the value');
        return;        
    }
    const height = +heightElement.value;
    const weight = +weightElement.value;

    finalBmi = (weight / Math.pow((height / 100) , 2)).toFixed(2);
    bmiFinal.value = finalBmi;

    if (finalBmi < 18.5) {
        weightCondition.innerText = 'UnderWeight';       
    }else if(finalBmi >= 18.5 && finalBmi <= 24.9){
        weightCondition.innerText = 'Normal Weight';
    }else if(finalBmi >= 25 && finalBmi <= 29.9){
        weightCondition.innerText = 'Overweight';
    }else if( finalBmi >= 30){
        weightCondition.innerText = 'Obesity';
    }
}