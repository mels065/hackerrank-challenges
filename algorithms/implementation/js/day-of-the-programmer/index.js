process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function solve(year){
    // Complete this function
    const DAY_OF_THE_PROGRAMMER = 256;
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (((year >= 1700 && year <= 1917) && year % 4 == 0) ||
        (year >= 1919 && year <= 2700) && (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)))
        monthDays[1] = 29;
    else if (year === 1918)
        monthDays[1] = 15;

    var dayCount = 0,
        i = 0;
    while (dayCount + monthDays[i] <= DAY_OF_THE_PROGRAMMER) {
        dayCount += monthDays[i];
        i++;
    }

    const dayResult = DAY_OF_THE_PROGRAMMER - dayCount,
          monthResult = i + 1;

    return `${dayResult < 10 ? `0${dayResult}` : dayResult}.${monthResult < 10 ? `0${monthResult}` : monthResult}.${year}`
}

function main() {
    var year = parseInt(readLine());
    var result = solve(year);
    process.stdout.write(""+result+"\n");

}
