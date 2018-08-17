"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
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
exports.readTestCases = readTestCases;
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
exports.writeOutput = writeOutput;
