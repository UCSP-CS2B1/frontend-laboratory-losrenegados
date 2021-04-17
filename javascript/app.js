// Param numbers: array of numbers
// Returns a sorted array
function insertion_sort(numbers) {
  for(let i = 1; i < numbers.length; i++){
    for(let j = i; j > 0; j--){
      if(numbers[j] < numbers[j-1]){
        const a = numbers[j];
        numbers[j] = numbers[j-1];
        numbers[j-1] = a;
      }
      else{
        break;
      }
    }
    return numbers;
  }
}

// Param number: single integer
// Returns a single integer
function factorial(number) {
  var i = 1;
  var j;
  for (j = number; j > 0; j--) {
    i = i * j;
  }
  return i;
}

// Param number: single integer
// Returns a single integer
function fibonacci(number) {

  let serie = [ 1, 1 ];
  for (let i = 2; i < number; i++) {
    serie[i] = serie[i - 1] + serie[i - 2];
  }
  return serie[number - 1]
}

// Param expression: string containing a mathematical expression
// Returns an integer value
function evaluation(expression) {
  var resultado = 0;
  return resultado;
}

if (typeof process === 'object') {
  module.exports = {insertion_sort, factorial, fibonacci, evaluation};
}
