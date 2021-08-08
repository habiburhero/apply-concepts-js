function getFactorial(number) {
    let factoral = 1;
    let i = 1;
    while (i <= number) {
        factoral = factoral * i;
        i++;
    }
    return factoral;
}
const myFactorial = getFactorial(6);
console.log(myFactorial);
