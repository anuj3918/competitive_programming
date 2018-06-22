function largestNumber(A){
    A.sort(function(a, b){
        var x = a.toString()
        var y = b.toString()

        var num1 = x+y
        var num2 = y+x

        if(num1 > num2){
            return -1
        } else if(num1 < num2){
            return 1
        } else {
            return 0
        }
    });

   
    var answer = ''
    A.forEach(function(e){
        answer += e.toString();
    })
    
    var allZeroes = true;
    for(var i=0; i<answer.length; i++){
        if(answer[i] !== '0'){
            allZeroes = false;
            break;
        }
    }
    
    if(allZeroes) {
        return '0'
    }
    return answer; 
};

console.log(largestNumber([ 931, 94, 209, 448, 716, 903, 124, 372, 462, 196, 715, 802, 103, 740, 389, 872, 615, 638, 771, 829, 899, 999, 29, 163, 342, 902, 922, 312, 326, 817, 288, 75, 37, 286, 708, 589, 975, 747, 743, 699, 743, 954, 523, 989, 114, 402, 236, 855, 323, 79, 949, 176, 663, 587, 322 ]))
