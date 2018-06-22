// function trailingZeroes(A){
//     var fact = 1;
//     var zero = 0;
//     for(var i=1; i<=A; i++){
//         fact = fact * i;
//         console.log("\n====")
//         console.log(fact)
//         while(fact % 10 === 0){
//             zero = zero + 1;
//             fact = fact / 10;
//         }
//         console.log(fact)
//     }
//     return zero;
// }

function trailingZeroes(A){
    if(A < 5){
        return 0;
    }
    var five = 0;
    for(var i=5; i<=A; i+=5){
        var temp = i;
        while(temp % 5 === 0){
            five = five + 1;
            temp = temp / 5;
        }
    }
    return five
}

console.time("countFive");
console.log(trailingZeroes(9247456));
console.timeEnd("countFive");
