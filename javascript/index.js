
let btn = document.querySelector('[data-btn]')
let display = document.querySelector('[data-value]')
let array1 = [20, 1, 7, 5, 6, 10]
btn.addEventListener('click',function(){
    sumofnum(array1)
})
function sumofnum(array) {
   let sum = 0
   let cont_Numbers = false;
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