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

    for(var test=1; test <= ntests; test++) {
        var line1 = std_input_arr[test*2-1].split(' ');
        var line2 = std_input_arr[test*2].split(' ');
        
        var elephants = parseInt(line1[0]);
        var candies = parseInt(line1[1]);

        var candies_needed = 0;
        for(var i=0; i< line2.length; i++){
            var Ak = parseInt(line2[i], 10);
            candies_needed += Ak;
            if(candies_needed > candies) {
                console.log('No');
                break;
            }
        }

        if(candies_needed <= candies){
            console.log('Yes');
        }
    }
}