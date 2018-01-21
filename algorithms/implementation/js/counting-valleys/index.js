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

function countingValleys(n, s) {
    var elevation = 0,
        valleys = 0;

    for (let i = 0; i < n; i++) {
        let step = s[i];
        if (step === 'D') {
            elevation--;
        }
        else if (step === 'U') {
            if (elevation === -1) {
                valleys++;
            }
            elevation++;
        }
    }

    return valleys;
}

function main() {
    var n = parseInt(readLine());
    var s = readLine();
    var result = countingValleys(n, s);
    process.stdout.write("" + result + "\n");

}
