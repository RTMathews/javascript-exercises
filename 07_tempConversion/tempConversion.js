const convertToCelsius = function(temp) {
  let toC = (temp - 32) * 5 / 9;
  return Math.round(toC * 10) / 10;
};
//console.log(convertToCelsius(100));
const convertToFahrenheit = function(temp) {
  let toF = (temp * 1.8) + 32;
  return Math.round(toF * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
