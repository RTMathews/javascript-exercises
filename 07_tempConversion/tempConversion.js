const convertToCelsius = function(temp) {
  let toC = (temp - 32) * 5 / 9;
  return Math.round(toC);
};
console.log(convertToCelsius(100));
const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
