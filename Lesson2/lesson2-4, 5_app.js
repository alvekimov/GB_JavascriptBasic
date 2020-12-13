'use strict';
/* Урок 2.Задание 4.
Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя параметрами. 
Т.е. например, функция для сложения должна принимать два числа, складывать их и возвращать результат.
Обязательно использовать оператор return.
*/

/**
 * Функция складывает два числа
 * @param {number} arg1  первое число
 * @param {number} arg2  второе число
 * @returns {number} результат суммы двух чисел
 */
function operationAddition(arg1, arg2) {
    return arg1 + arg2;
}

/**
 * Функция вычитает два числа
 * @param {number} arg1 первое число
 * @param {number} arg2 второе число
 * @returns {number} результат вычитания из первого числа второго
 */
function operationSubtraction(arg1, arg2) {
    return arg1 - arg2;
}
/**
 * Функция делит два числа
 * @param {number} arg1 первое число
 * @param {number} arg2 второе число
 * @returns {number} результат деления первого числа на второе
 */
function operationDivision(arg1, arg2) {
    if (arg2 != 0) {
        return arg1 / arg2;
    } else {
        return "'на ноль делить нельзя'"; // можно заменить на throw 'на ноль делить нельзя' (остановит выполнение)
    }
}
/**
 * Функция умножает два числа
 * @param {number} arg1 первое число
 * @param {number} arg2 второе число
 * @returns {number} результат умножения первого числа на второе
 */
function operationMultiplication(arg1, arg2) {
    return arg1 * arg2;
}
console.log('lesson 2 task 4');
console.log(operationAddition(6, 2));
console.log(operationSubtraction(6, 2));
console.log(operationDivision(6, 2));
console.log(operationDivision(6, 0));
console.log(operationMultiplication(6, 2));

/* Урок 2.Задание 5.
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических операций
(использовать функции из задания 4) и вернуть полученное значение.
*/

/**
 * Функция В зависимости от переданного значения операции выполняет одну из арифметических операций.
 * @param {number} arg1 первое число
 * @param {number} arg2 второе число
 * @param {symbol} operation знак операции +, -, /, *
 * @returns {number} возвращает число после выполнения арифметической операции.
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return operationAddition(arg1, arg2);
            break;
        case '-':
            return operationSubtraction(arg1, arg2);
            break;
        case '/':
            return operationDivision(arg1, arg2);
            break;
        case '*':
            return operationMultiplication(arg1, arg2);
            break;
        default:
            return "Введена неверная команда. Введите '+','-','/','*'"; //можно заменить на throw (остановит выполнение)
    }
}
console.log('lesson 2 task 5');
console.log(mathOperation(8, 2, '+'));
console.log(mathOperation(8, 2, '-'));
console.log(mathOperation(8, 2, '/'));
console.log(mathOperation(8, 0, '/'));
console.log(mathOperation(8, 2, '*'));
console.log(mathOperation(8, 2, 'что-то'));