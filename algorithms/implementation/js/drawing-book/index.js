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

function solve(n, p){
    const book = generateBook(n),
          pageTurns = [-1, -1];

    // Front side
    for (let i = 0; i < book.length; i++) {
        if (~book[i].indexOf(p)) {
            pageTurns[0] = i;
            break
        }
    }

    // Back side
    for (let i = book.length - 1; i >= 0; i--) {
        if (~book[i].indexOf(p)) {
            pageTurns[1] = book.length - 1 - i;
            break;
        }
    }

    return Math.min(...pageTurns);
}

function generateBook(n) {
    const book = [[null, 1]];
    for(let p = 2; p <= n; p+=2) {
        if (p === n) book.push([p, null]);
        else book.push([p, p+1]);
    }
    return book;
}

function main() {
    var n = parseInt(readLine());
    var p = parseInt(readLine());
    var result = solve(n, p);
    process.stdout.write(""+result+"\n");

}
