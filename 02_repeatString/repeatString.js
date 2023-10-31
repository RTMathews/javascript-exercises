const repeatString = function(word, num) {
    let times = num;
    let string = "";

    if (times < 0)
    {
        return 'ERROR';
    }
    for (let i = 0; i < times; i++)
    {
        string += word;
    }
};

// Do not edit below this line
module.exports = repeatString;
