function reverseWords(outputArray, inputArray) {
    outputArray[i] = inputArray[i].reverse();
    var newSentence = outputArray[i].toString();
    //Find all commas
    var re = new RegExp(',', 'g');
    //Replace it with space
    newSentence = newSentence.replace(re, ' ');
    return newSentence;
}

//Main code
var fs = require('fs');
var argv = require('optimist').argv;

//Read data from file synchronously
var content = fs.readFileSync(argv._[0], 'utf8');

var inputArray = [], outputArray = [];
var stringsFromContent = content.split('\n');

for (var i = 0; i < stringsFromContent.length; i++) {
    inputArray[i] = stringsFromContent[i].split(' ');
}

for (var i = 0; i < inputArray.length; i++) {
    console.log(reverseWords(outputArray, inputArray));
}