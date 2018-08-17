var testCaseUtil = require('../util/testCase');

let fileName: string = './data/2016_counting_sheep/A-large-practice.in';
let outputFile: string = './data/2016_counting_sheep/A-large-practice.out';

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
function findSolution(n: number): any{
    if(n === 0){
        return 'INSOMNIA';
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

let testCases = testCaseUtil.readTestCases(fileName);
let answers: any[] = []
for(let testCase of testCases){
    answers.push(findSolution(parseInt(testCase)));
}
testCaseUtil.writeOutput(answers, outputFile);

console.log('done');