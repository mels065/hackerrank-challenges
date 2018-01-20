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

function sockMerchant(n, ar) {
    const found = new Set();
    return ar.reduce((total, sock1, i) => {
        if (found.has(i) || i >= n) return total;

        return total + ar.reduce((increment, sock2, j) => {
            if (found.has(i) || j <= i || j >= n || found.has(j)) return increment;

            if (sock1 === sock2) {
                found.add(i);
                found.add(j);
                return 1;
            }

            return increment;
        }, 0)
    }, 0)
}

function main() {
    var n = parseInt(readLine());
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = sockMerchant(n, ar);
    process.stdout.write("" + result + "\n");

}
