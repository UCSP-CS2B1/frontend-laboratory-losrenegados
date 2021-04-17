// Param numbers: array of numbers
// Returns a sorted array
function insertion_sort(numbers) {
  let i, j, mayor, tamanio = numbers.length
  for (i = 1; i < tamanio; i++) {
    mayor = numbers[i];
    j = i - 1;
    while (j >= 0 && numbers[j] > mayor) {
      numbers[j + 1] = mayor;
      j = j - 1;
    }
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
function evaluation(expression) { return expression; }

if (typeof process === 'object') {
  module.exports = {insertion_sort, factorial, fibonacci, evaluation};
}
