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

function bonAppetit(n, k, b, ar) {
    var actual = Math.floor(
        ar.reduce((cur, next, i) => {
            if (i >= n || i == k) return cur;
            return cur + next;
        }, 0) / 2
    );

    if (actual != b) return b - actual;

    return 'Bon Appetit';
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var b = parseInt(readLine());
    var result = bonAppetit(n, k, b, ar);
    process.stdout.write("" + result + "\n");

}
