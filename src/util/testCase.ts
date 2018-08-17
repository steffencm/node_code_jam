import fs = require('fs');

export function readTestCases(fileName: string): any[]{
   
    let contents: string = fs.readFileSync(fileName, 'utf8');
    let lines: string[] = contents.split('\n');
    let numLines: number = parseInt(lines[0]);
    let testCases: any[] = [];
    //String slice instead maybe?
    for(let i = 1; i <= numLines; i ++){
        testCases.push(lines[i]);
    }
    return testCases;
}

export function writeOutput(answers: any[], fileName: string){
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