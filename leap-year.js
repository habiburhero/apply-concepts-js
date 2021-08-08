function leapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    else {
        return false;

    }
}

const myYear = 2087;
const isMyYearLeapYear = leapYear(myYear);
console.log("is my year leap year", isMyYearLeapYear);

const yourYear = 2024;
const isYourYearLeapYear = leapYear(yourYear);
console.log("is your year leap year", isYourYearLeapYear);