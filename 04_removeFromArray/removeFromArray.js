const removeFromArray = function(array, ...args) {
    const newArr = [];
    array.forEach(items => {
        if (!args.includes(items))
        {
            newArr.push(items)
        }
    });
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
