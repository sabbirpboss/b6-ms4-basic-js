function changeValue(givenMoney, fruitsPrice) {
    const change = givenMoney - fruitsPrice;
    return change;
}

givenMoney = 1000;
fruitsPrice = 700;
change = changeValue(givenMoney, fruitsPrice);
console.log(change);