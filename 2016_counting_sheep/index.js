"use strict";
exports.__esModule = true;
var fs = require("fs");
var fileName = './2016_counting_sheep/A-large-practice.in';
var outputFile = './2016_counting_sheep/A-large-practice.out';
function readTestCases(fileName) {
    var contents = fs.readFileSync(fileName, 'utf8');
    var lines = contents.split('\n');
    var numLines = parseInt(lines[0]);
    var testCases = [];
    for (var i = 1; i <= numLines; i++) {
        testCases.push(parseInt(lines[i]));
    }
    return testCases;
}
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
        return -1;
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
function writeOutput(answers, fileName) {
    var stream = fs.createWriteStream(fileName);
    stream.once('open', function (fd) {
        var counter = 1;
        for (var _i = 0, answers_1 = answers; _i < answers_1.length; _i++) {
            var answer = answers_1[_i];
            var strAnswer = (answer === -1) ? "INSOMNIA" : answer.toString();
            var line = 'Case #' + counter + ': ' + strAnswer + '\n';
            stream.write(line);
            counter++;
        }
        stream.end();
    });
}
var testCases = readTestCases(fileName);
var answers = [];
for (var _i = 0, testCases_1 = testCases; _i < testCases_1.length; _i++) {
    var testCase = testCases_1[_i];
    answers.push(findSolution(testCase));
}
writeOutput(answers, outputFile);
console.log('done');
