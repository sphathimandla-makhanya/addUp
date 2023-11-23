
// //Variable declaration
// let numbers = [11, 2, 15, 24, 5, 9];
// let answer = addUp(numbers);

// // function that adds all numbers in an array
// function addUp(numbers) {
//   let total = numbers.reduce(function (x, y) {
//     return x + y;
//   }, 0);
//   return total;
// }
  
//   // console.log(answer);

//   let btn= document.querySelector('[data-btn]')
// btn.addEventListener('click', )
// let view= document.querySelector('[data-value]')

// let btn1= document.querySelector('[data-btn1]')
// btn1.addEventListener('click', function () {
//     view.value="";
// })

let btn = document.querySelector('[data-btn]')
let display = document.querySelector('[data-value]')
let array1 = [20, 1, 7, 5, 6, 10]
btn.addEventListener('click',function(){
    sumofnum(array1)
})
function sumofnum(array) {
   let sum = 0
   let hasNumbers = false;
   for(let x = 0;x<array.length;x++){
    if(typeof array[x] === 'number'){
        sum += array[x]
        cont_Numbers= true;
    }
   }
   if(cont_Numbers){
    display.value = `Total: ${sum}`
   } else {
    display.value = 'provide only numbers'
   }
}