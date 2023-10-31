const sumAll = function(num1, num2) {
    let finalSum = 0;
    if (num1 < 0 || num2 < 0)
    {
        return 'ERROR';
    }
    else if (typeof num1 === 'string')
    {
        return 'ERROR';
    }
    if (num1 < num2)
    {
        for (let i = num1; i <= num2; i++)
        {
        finalSum = i + finalSum;
        }
        return finalSum;
    }
};
//console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
