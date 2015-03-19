function main(){
    var T = parseInt(readLine());
    var currentTest = 1;
    
    while(currentTest <= T){
        var N = readLine();
        var M = parseInt(N.split(' ')[1]);
        N = parseInt(N.split(' ')[0]);
        var matrix = [];
        for(var i = 0; i < N; i++){
            var row = readLine().split('');
            matrix.push(row);
        }
        var K = parseInt(readLine());
        var realK = 0;
        matrix.forEach(function(row, rowIndex){
            row.forEach(function(cell, cellIndex){
                if(cell != '.' && cell != 'M')
                    return; //not a dot
                var nDots = 1;                
                if(cellIndex != 0){//not in the left side
                    if(row[cellIndex-1] == '.'){
                        nDots+=1;
                    }
                }
                if(cellIndex != row.length-1){//not in the right side
                    if(row[cellIndex+1] == '.'){
                        nDots+=1;
                    }
                }
                if(rowIndex != 0){//not in the top
                    if(matrix[rowIndex-1][cellIndex] == '.'){
                        nDots+=1;
                    }

                }
                if(rowIndex != matrix.length-1){//not in the botton
                    if(matrix[rowIndex+1][cellIndex] == '.'){
                        nDots+=1;
                    }
                }
              
                if(nDots >= 4){
                    realK += 1;        
                }else if(cell == 'M' && nDots == 3){
                    realK+=1;                    
                }
            })
        })
        if(K == realK)
            console.log('Impressed');
        else
            console.log('Oops!');
        currentTest += 1;
    }
}


/////////////STDIN CONFIG///////////////

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
