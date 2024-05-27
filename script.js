const displayResult = document.getElementById("result");
const randomNumber = document.getElementById("generate-btn");


randomNumber.addEventListener("click", ()=> {
    const minNum = document.getElementById("min");
    const min = parseInt(minNum.value);

    const maxNum = document.getElementById("max");
    const max = parseInt(maxNum.value);

   if(isNaN(min) || isNaN(max)){
    // displayResult.textContent = 'Result: Please enter valid number';
    // return;
    alert('Please enter a valid number')
    return;
   }

   if(min > max){
    // displayResult.textContent = ' Result: Min should be less than max';
    // return;
    alert('Min should be less than max')
    return;
   }
   const randomNumber = Math.floor(Math.random() * (max-min + 1)) + min;
   displayResult.textContent = ` ${randomNumber}`;
})