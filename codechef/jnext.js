//console.time('test');
var std_input = '';
var std_input_arr = [];
var std_line = '';

// process.stdin.on('data', (data)=>{
//     std_input += data;
// });

// process.stdin.on('end', ()=>{
//     std_input_arr = std_input.split('\n');
//     main()
// });

std_input = `1
3
1 3 4`

std_input_arr = std_input.split('\n');
main()

function isMaxed(input) {
    let input_order = input.slice(0)
    input_order.sort((a, b) => b-a)
    if(input_order.join('') === input.join('')) {
        return true
    } else {
        return false
    }
}

function findSwapperInMaxedNumber(last_digit, num) {
    let n_digits = num.length
    let swapper = num[n_digits - 1]
    let swapper_index = n_digits - 1

    for(let i=n_digits-1; i>=0; i--) {
        if(parseInt(num[i]) > parseInt(last_digit)) {
            swapper = num[i]
            swapper_index = i
            break
        }
    }
    return { s_number: swapper, s_index: swapper_index }
}

function main() {
    var ntests = parseInt(std_input_arr[0], 10)
    for(var t = 1; t <= ntests; t++) {
        var l = parseInt(std_input_arr[2*t-1])
        var digits = std_input_arr[2*t]
        var digits_arr = digits.split(' ')

        for(let i=0; i<l; i++) {
            let number = digits_arr.slice(i, l)
            if(isMaxed(number) && number.length === l) {
                console.log(-1)
                break
            } else if(isMaxed(number)) {
                let last_digit = digits_arr[i-1]
                let swap = findSwapperInMaxedNumber(last_digit, number)
                
                let swap_number = swap.s_number
                let swap_index = parseInt(swap.s_index)

                digits_arr[i-1] = swap_number
                number[swap_index] = last_digit
                number.sort()

                console.log(digits_arr.slice(0, i).join('') + number.join(''))
                break
            }
        }
    }
    //console.timeEnd('test');
}