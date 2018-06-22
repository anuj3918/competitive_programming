const palindrome = (A) =>{
    let n = A.toString()
    let digits = n.split('');
    let l = digits.length
    let isPalindrome = true;
    for (let i = 0; i <= (l-1) / 2; i++) {
        const element = digits[i];
        // console.log(element, digits[l-i - 1])
        if(element !== digits[l - i - 1]){
            isPalindrome = false;
            break;
        }
    }

    return isPalindrome;
}

function reverse(num){
    if(num < 0){
        n = -num;
    }
    let rev = 0;
    let pow = 10;
    while(n >= 1){
        let digit = n % 10;
        rev = rev * pow + digit;
        n = Math.floor(n / 10);
    }

    if(num < 0){
        return -rev
    }
    return rev
}

console.log(reverse(-12))
// console.log(palindrome(12034))