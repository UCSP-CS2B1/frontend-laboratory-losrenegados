// Param numbers: array of numbers
// Returns a sorted array
function insertion_sort(numbers) {
  let l = numbers.length;
  for (let i = 1; i < l; i++) {
    let guardar = numbers[i];
    let j = i - 1;
    while (j >= 0 && guardar < numbers[j]) {
      numbers[j + 1] = numbers[j];
      j--;
    }
    numbers[j + 1] = guardar;
  }
  return numbers;
}

// Param number: single integer
// Returns a single integer
function factorial(number) {
  if (number < 0) {
    console.log('No existe factorial de numeros negativos');
  } else if (number == 0) {
    return number = 1;
  } else {
    var i = 1;
    var j;
    for (j = number; j > 0; j--) {
      i = i * j;
    }
    return i;
  }
}

// Param number: single integer
// Returns a single integer
function fibonacci(number) {
  var l = number;
  var t1 = 0, t2 = 1, n = 0;
  for (let serie = 0; serie < l; serie++) {
    n = t1 + t2;
    t1 = t2;
    t2 = n;
  }
  return n;
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
