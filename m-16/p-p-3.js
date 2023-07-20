function concatLines(firstLine, secondLine){
    const addLines = firstLine + secondLine;
    return addLines;
}

firstLine = "I am going to be";
secondLine = "an awesome web developer";
addLines = concatLines(firstLine, secondLine);

console.log(addLines);