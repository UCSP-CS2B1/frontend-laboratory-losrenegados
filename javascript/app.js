// Param numbers: array of numbers
// Returns a sorted array
function insertion_sort(numbers) {

    

    return [-1];
}


// Param number: single integer
// Returns a single integer
function factorial(number) {

    //Write your code here

    return -1;
}

// Param number: single integer
// Returns a single integer
function fibonacci(number) {

    let serie = [1, 1];
    for (let i = 2; i < number; i++) {
        serie[i] = serie[i - 1] + serie[i - 2];
    }
    return serie[number - 1]
}

// Param expression: string containing a mathematical expression
// Returns an integer value
function evaluation(expression) {

    //Write your code here

    return -1
}


if(typeof process === 'object') {
    module.exports =  {
        insertion_sort,
        factorial,
        fibonacci,
        evaluation
    };
}
