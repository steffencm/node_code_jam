"use strict";
var testCaseUtil = require('../util/testCase');
var fileName = './data/2016_counting_sheep/A-large-practice.in';
var outputFile = './data/2016_counting_sheep/A-large-practice.out';
function updateSeen(newNumbers, seenNumbers) {
    for (var _i = 0, newNumbers_1 = newNumbers; _i < newNumbers_1.length; _i++) {
        var newNumber = newNumbers_1[_i];
        seenNumbers[newNumber] = true;
    }
    return seenNumbers;
}
function isSolved(seenNumbers) {
    return seenNumbers.every(function (element, inx, array) {
        return element;
    });
}
function splitDigits(num) {
    var strNums = num.toString().split('');
    return strNums.map(function (strNum) {
        return parseInt(strNum);
    });
}
function createSeenNumbers() {
    var seenNumbers = [];
    for (var i = 0; i < 10; i++) {
        seenNumbers.push(false);
    }
    return seenNumbers;
}
function findSolution(n) {
    if (n === 0) {
        return 'INSOMNIA';
    }
    var seenNumbers = createSeenNumbers();
    var counter = 1;
    while (true) {
        var currentNumber = counter * n;
        seenNumbers = updateSeen(splitDigits(currentNumber), seenNumbers);
        if (isSolved(seenNumbers)) {
            return currentNumber;
        }
        counter++;
    }
}
var testCases = testCaseUtil.readTestCases(fileName);
var answers = [];
for (var _i = 0, testCases_1 = testCases; _i < testCases_1.length; _i++) {
    var testCase = testCases_1[_i];
    answers.push(findSolution(parseInt(testCase)));
}
testCaseUtil.writeOutput(answers, outputFile);
console.log('done');
