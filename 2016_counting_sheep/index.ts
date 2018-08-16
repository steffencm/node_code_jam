import fs = require('fs');

let fileName: string = './2016_counting_sheep/A-large-practice.in';
let outputFile: string = './2016_counting_sheep/A-large-practice.out';
function readTestCases(fileName: string): number[]{
   
    let contents: string = fs.readFileSync(fileName, 'utf8');
    let lines: string[] = contents.split('\n');
    let numLines: number = parseInt(lines[0]);
    let testCases: number[] = [];
    for(let i = 1; i <= numLines; i ++){
        testCases.push(parseInt(lines[i]));
    }
    return testCases;
}

function updateSeen(newNumbers: number[], seenNumbers: boolean[]): boolean[]{
    for(let newNumber of newNumbers){
        seenNumbers[newNumber] = true;
    }
    return seenNumbers;
}

function isSolved(seenNumbers: boolean[]): boolean{
     return seenNumbers.every(function( element, inx, array){
         return element;
     });
}

function splitDigits(num: number): number[]{
    let strNums: string[] = num.toString().split('');
    return strNums.map(function(strNum){
        return parseInt(strNum)
    });

}

function createSeenNumbers(): boolean[]{
    let seenNumbers: boolean[] = [];
    for(let i = 0; i < 10; i++){
        seenNumbers.push(false);
    }
    return seenNumbers;
}
function findSolution(n: number): number{
    if(n === 0){
        return -1;
    }
    let seenNumbers: boolean[] = createSeenNumbers();
    let counter: number = 1;
    while(true){
        let currentNumber = counter * n;
        seenNumbers = updateSeen(splitDigits(currentNumber), seenNumbers);
        if(isSolved(seenNumbers)){
            return currentNumber;
        }
        counter++;
    }
    
}

function writeOutput(answers: number[], fileName: string){
    let stream = fs.createWriteStream(fileName);
    stream.once('open', function(fd){
        let counter: number = 1;
        for(let answer of answers){
            let strAnswer = (answer === -1 ) ? "INSOMNIA" : answer.toString(); 
            let line: string = 'Case #' + counter + ': ' + strAnswer + '\n';
            stream.write(line);
            counter++;
        }
        stream.end();
    })
}
let testCases = readTestCases(fileName);
let answers: number[] = []
for(let testCase of testCases){
    answers.push(findSolution(testCase));
}
writeOutput(answers, outputFile);

console.log('done');