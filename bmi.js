const height = document.querySelector(".height");
const weight = document.querySelector(".weight");
const p1 = document.querySelector(".p1");
const calculateBmiButton = document.querySelector(".submit-button");


calculateBmiButton.addEventListener('click',()=>{
const newHeight = Number(height.value);
const newWeight = Number(weight.value);
console.log(newWeight);
console.log(newHeight);
const heightSquare = Math.pow(newHeight, 2);
console.log(heightSquare);
const bmi = newWeight/heightSquare;
p1.textContent = `Your bmi is ${bmi}`;
})