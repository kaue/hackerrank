function main(){
    var arrLen = parseInt(readLine());
    var arr = readLine().split(' ');
    if(arr.length != arrLen)
        return console.log('Wrong input.');
    var testArr = [];
    arr.forEach(function(n){
        var index = testArr.indexOf(n);
        if(index != -1)
            testArr.splice(index,1);
        else
            testArr.push(n);
    });
    if(testArr.length == 0)
        return console.log('No match.');
    if(testArr.length >= 2)
        return console.log('Multiple matches.');
    //Print the result
    console.log(testArr[0]);
}


/////////////

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
