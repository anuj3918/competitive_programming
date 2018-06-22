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

    for(var t = 1; t <= ntests; t++) {
        var line1 = std_input_arr[2*t-1].split(' ');
        var line2 = std_input_arr[2*t].split(' ');

        var N = parseInt(line1[0]);     
        var mid = 1

        if(N % 2 == 0){
            mid = N/2 - 1;
        } else {
            mid = (N-1)/2;
        }     
        
        var old_Ai = 0
        var new_Ai = 1

        var front = 1
        var back = 1
        var isRainbow = true;

        for(let i=0; i<=mid; i++){
            front = parseInt(line2[i])
            back = parseInt(line2[N-i-1])

            if(front > 7 || back > 7 || front != back || (front != old_Ai && front != new_Ai)){
                isRainbow = false;
                break;
            }
            
            if(front == new_Ai && new_Ai < 7){
                old_Ai++;
                new_Ai++;
            }                   
        }

        if(isRainbow && front == 7) {
            console.log("yes");
        } else {
            console.log("no");
        }
    }
}