function sundaysInMonth(d) {
    //d.getMonth()+1 because we want to have first day of month, not the last day from previous month
    var numberOfDaysInMouth = new Date(d.getFullYear(), d.getMonth()+1, 0).getDate();
	//For function getDay(), 0 is a Sunday
    //(numberOfDaysInMouth )/ 7 = how many full weeks we have in month
    return Math.floor((numberOfDaysInMouth + (d.getDay() + 6) % 7) / 7); // = how many Sundays
}

function countMonthsWithFiveSundays(x, y) {
    var counter = 0;
    //Start with begin of months
    var beginDate = new Date('1 ' + x);
    var endDate = new Date('1 ' + y);
    while (beginDate <= endDate)
    {
        //Count the number of months in between(inclusive) that contains 5 Sundays
        if(sundaysInMonth(beginDate) == 5) counter++;
        //Go to the next month , f.e. 0 is January
        beginDate.setMonth(beginDate.getMonth() + 1);
    }
    return counter;
}

//Main code
var fs = require('fs');
var argv = require('optimist').argv;

//Read data from file synchronously
var content = fs.readFileSync(argv._[0],'utf8');

//Parse data from file to inputArray(x: beginMonth + endYear, y: endMonth + endYear) structure
var inputArray = [];
var contentLines = content.split('\n');
for (var i = 0; i < contentLines.length; i++) {
    var pair = contentLines[i].split(' ');
    inputArray[i] = {};
    //I'm kidding with this pair.length. It's static format of file, so you can index of word; 0,1,2..
    inputArray[i].x = pair[pair.length-4] + ' ' + pair[pair.length-3];
    inputArray[i].y = pair[pair.length-2] + ' ' + pair[pair.length-1];
}

for (var i = 0; i < inputArray.length; i++) {
	console.log(countMonthsWithFiveSundays(inputArray[i].x, inputArray[i].y));
}


