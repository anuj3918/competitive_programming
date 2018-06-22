var std_input = '';
var std_input_arr = [];
var std_line = '';

process.stdin.on('data', (data)=>{
    std_input += data;
});

process.stdin.on('end', ()=>{
    std_input_arr = std_input.split('\n');
    main()
});

// std_input = `2
// 4
// 1111
// 5
// 10001`

// std_input_arr = std_input.split('\n');
// main()

function main() {
    var ntests = parseInt(std_input_arr[0], 10)

    for(var t = 1; t <= ntests; t++) {
        var line1 = std_input_arr[t*2-1].split(' ');
        var n_str = parseInt(line1[0]);
        
        var str = std_input_arr[t*2];
        var indexes = [];

       //  removing overlapping houses that got counted
        for(let i=0; i<n_str; i++) {
            if(str[i] === '1') {
                indexes.push(i);
            }
        }

        var total_ones = indexes.length
        var total_substrings = total_ones + (total_ones*(total_ones - 1)/2)

        console.log(total_substrings);
    }
}