var testCaseUtil = require('../util/testCase');


function checkSolved(solution: string[]): boolean{
    return(solution.indexOf('-') ===  -1);
}

function flipCake(pancake: string){
    return pancake === '+' ? '-' : '+';
}

function flipCakesFromPosition(pancakes: string[], position: number){
    for(let i = position; i>=0; i--){
        pancakes[i] = flipCake(pancakes[i]);
    }
    return pancakes;
}

function makeCakesHappy(pancakes: string[]): number{
    let flips = 0;
    for(let i = 0; i <= pancakes.length; i++){
        let position = pancakes.length - i;
        if(pancakes[position] === '-'){
            pancakes = flipCakesFromPosition(pancakes, position);
            flips++;
        }
        if(checkSolved(pancakes)){
            return flips;
        }
    }
    return -1;
}

function solve(){
    let fileName: string = './data/2016_pancake_revenge/B-large-practice.in';
    let outputFile: string = './data/2016_pancake_revenge/B-large-practice.out';
    let testCases = testCaseUtil.readTestCases(fileName);
    let answers: any[] = []
    for(let testCase of testCases){
        answers.push(makeCakesHappy(testCase.split('')));
    }
    testCaseUtil.writeOutput(answers, outputFile);
    console.log('done');
}

solve();
