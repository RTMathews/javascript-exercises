const leapYears = function(year) {
    if (year % 100 === 0 && year % 400 === 0)
    {
        
    }
    else
    {
        return false;
    }
};
console.log(leapYears(1996));

// Do not edit below this line
module.exports = leapYears;
