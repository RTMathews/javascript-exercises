const sumAll = function(num1, num2) {
    let finalSum = 0;
    if (num1 < 0 || num2 < 0)
    {
        return 'ERROR';
    }
    for (let i = num1; i < num2; i++)
    {
        i += finalSum;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
