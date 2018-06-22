function gcd(A,B){
    if(A<B){
        var temp = A;
        A = B;
        B = temp;
    }
    var remainder = 1;
    while(remainder !== 0){
        remainder = A % B;
        A = B;
        B = remainder;
    }

    return A;
}

console.log(gcd(5,1))