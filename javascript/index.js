
//Variable declaration
let numbers = [11, 2, 15, 24, 5, 9];
let answer = addUp(numbers);

// function that adds all numbers in an array
function addUp(numbers) {
    let total = numbers.reduce(function (x, y) {
      return x + y;
    }, 0);
    return total;
  }
  
  console.log('Total:', answer);