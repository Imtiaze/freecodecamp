const numberInputElement = document.getElementById('number'); const outputElement = document.getElementById('output'); 
const convertBtn = document.getElementById('convert-btn'); 

convertBtn.addEventListener("click", function() { 

  const inputNumber = parseInt(numberInputElement.value);
  
  if (isNaN(inputNumber)) { 
    outputElement.textContent = "Please enter a valid number"; 
  } 
  if (inputNumber < 0) { 
    outputElement.textContent = "Please enter a number greater than or equal to 1" 
  } 
});