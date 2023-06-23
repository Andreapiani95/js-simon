const numbersArray = [];

while (numbersArray.length < 5){
    const singleNumber = randomNumber (1, 100);
    numbersArray.push(singleNumber);
}

document.querySelector('h2').innerHTML = numbersArray;

setTimeout( 
    function (){
        document.querySelector('h2').classList.add('none');
        const arrayFromPrompt = [];
    
        for (i = 0; i < 5; i++){
            let numberFromPrompt = parseInt(prompt ('Inserisci un numero tra quelli che vedevi'));
            arrayFromPrompt.push(numberFromPrompt);
        }
    
        for (i = 0; i <5; i++){
            arrayFromPrompt[i] = numbersArray[i];
        }
    },
    30 * 1000
);




//Functions

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


