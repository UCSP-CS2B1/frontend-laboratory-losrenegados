// Param numbers: array of numbers
// Returns a sorted array
function insertion_sort(numbers) {
  let l = numbers.length;
  for (let i = 1; i < l; i++) {
    let guardar = numbers[i];
    let j = i - 1;
    for (; j >= 0; j--) {
      if (guardar < numbers[j]) {
        numbers[j - 1] = numbers[j];
      } else {
        break;
      }
    }
    numbers[j - 1] = guardar;
  }
  return numbers;
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
  var resultado = 0, s = s.match(/[+\-]*(\.\d+|\d+(\.\d+)?)/g) || [];

  while (s.length) {
    total += parseFloat(s.shift());
  }
  return resultado;
}

if (typeof process === 'object') {
  module.exports = {insertion_sort, factorial, fibonacci, evaluation};
}
