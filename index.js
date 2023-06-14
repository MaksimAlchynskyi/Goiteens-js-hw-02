"use strict";
const temperatureCelsius = 25.0;
const temperatureFahrenheit = (temperatureCelsius * 9/5) + 32;
console.log("Temperature in Celsius->", temperatureCelsius);
console.log("Temperature in Fahrenheit->", temperatureFahrenheit);

const daysInMonth = 30;
const hoursInDay = 24;
const minutesInHour = 60;
const totalHours = daysInMonth * hoursInDay;
const totalMinutes = totalHours * minutesInHour;
console.log("В цьому місяці", totalHours, "годин і", totalMinutes, "хвилин.");

let healthLevel = 100;
let energyLevel = 80;
healthLevel -= 20;
energyLevel -= 30;
console.log("Рівень здоров'я після зменшеня->", healthLevel);
console.log("Рівень енергії після зменшеня->", energyLevel);

const purchaseAmount = 1000;
const discount = 10;
const discounted = purchaseAmount * (1 - discount / 100);
console.log("Сума товара з знишкою->", discounted);

const floatingNumber = 7.123567;
const roundedNumber = Math.floor(floatingNumber);
console.log("число заокруглене до меншого цілого числа->", roundedNumber);

const number = "4.12568234";
const decimalNumber = parseFloat(number);
console.log("Десяткове число->", decimalNumber);

const numberS = "71";
const numberI = parseInt(numberS);
console.log("Ціле число->", numberI);

const numberA = 64; 
const squareRoot = Math.sqrt(numberA);
console.log("Квадратний корінь числа->", squareRoot);

const valueI = 53;
const numberC = "123";
const numberB = parseInt(numberC);
console.log("Ціле число:", numberB);
const numberString = valueI.toString(); 
console.log("Рядок з числом:", numberString);