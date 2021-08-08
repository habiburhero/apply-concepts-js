// let factorial = 1;
// for (let i = 1; i <= 5; i++) {
//     factorial = factorial * i;
// }
// console.log(factorial);

function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * 1;
    }
    return factorial;
}

var firstFactorial = getFactorial(7);
console.log('factorial of 7 is ', firstFactorial);

var secondfactorial = getFactorial(9);
console.log('factoral of 9 is ', secondfactorial);


