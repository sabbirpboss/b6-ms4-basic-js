function findReminder(number1, number2) {
    const reminder = number1 % number2;
    return reminder;
}

number1 = 119;
number2 = 5;
reminder = findReminder(number1, number2);

console.log(reminder);
