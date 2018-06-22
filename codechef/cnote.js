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

function main() {
    var ntests = parseInt(std_input_arr[0], 10)
    var test=1; 

    for(var cases = 1; cases <= ntests; cases++) {
        var line1 = std_input_arr[test].split(' ');
        
        var X = parseInt(line1[0]);
        var Y = parseInt(line1[1]);
        var K = parseInt(line1[2]);
        var N = parseInt(line1[3]);
        var pages_needed = X-Y;
        var book_found = false;

        for(var bk=1; bk<=N; bk++){
            var book = std_input_arr[test+bk].trim().split(' '); 

            var P = parseInt(book[0], 10);
            var C = parseInt(book[1], 10);
            if(pages_needed <= P && K >= C){
                book_found = true;
                break;
            }
        }

        if(book_found) {
            console.log('LuckyChef');
        } else {
            console.log('UnluckyChef');
        }

        test = test + N +1;
    }
}