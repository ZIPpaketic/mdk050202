//Задача 1 
function add(a, b) {

    return a + b;

}

function subtract(a, b) {
    return a - b;
}

function power(a, b) {
    return Math.pow(a, b);
}

function divide(a, b) {
    if (b === 0) {
        return "Деление на ноль невозможно";
    }
    return a / b;
}
console.log(add(2, 3)); // 5 
console.log(subtract(5, 2)); // 3
console.log(power(2, 3)); // 8
console.log(divide(6, 2)); // 3
console.log(divide(6, 0)); // Деление на ноль невозможно


// Задание 2
function stringLength(str) {
    return str.length;
}
console.log(stringLength("Привет")); // 6


// Задание 3
function checkNumber(num) {
    if (num > 0) {
        console.log("Число положительное");
    } else if (num < 0) {
        console.log("Число отрицательное");
    } else {
        console.log("Число равно нулю");
    }
}
checkNumber(5); // Число положительное
checkNumber(-3); // Число отрицательное
checkNumber(0); // Число равно нулю


// Задание 4
function average(arr) {
    const sum = arr.reduce((a, b) => a + b, 0);
    return sum / arr.length;
}
console.log(average([1, 2, 3, 4, 5])); // 3


// Задание 5
const person = {
    name: "Иван",
    age: 30
};
console.log(person.name); // Иван
console.log(person.age); // 30


// Заданиеп 6 
function checkE(num){
    if (num % 2 === 0) {
        console.log(num + " - четное число");
    } else {
        console.log(num + " - нечетное число");
    }
}

// Задание 7 
function negative(num) {
    if (num < 0 ) {
        console.log("Число отрицательное")
    } else {
        cosole.log("Число не отрицательно")
    }
}

 negative(-10); // отриц
 negative(5); // не отриц


 // Задание 8 
 function Divisible(a, b) {
    if (b === 0) {
        return "Деление на 0 невозможно";
    }
    if (a % b === 0) {
        cosole.log(a + "делится на " + b + " без остатка");
    } else {
        console.log(a + " не делится на " + b + " без остатка");
    }
}

Divisible(10, 2); // 10 делится на 2 без остатка
Divisible(10, 3); // 10 не делится на 3 без остатка 
Divisible(10, 0); // Делание на ноль невозможно