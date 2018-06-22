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
        var emp = parseInt(std_input_arr[test*2-1], 0);
        var salaries = std_input_arr[test*2].split(' ');
        
        var allEqual = false;
        var i=0;
        var steps = 0;
        while(!allEqual) {
            //  check if all salaries are equal
            salaries.sort();
            if(salaries[0] === salaries[emp-1]) {
                allEqual = true;
                break;
            }
            console.log("running");
            var diff = parseInt(salaries[emp-1]) - parseInt(salaries[0]);
            steps += diff;

            for(let i=0; i<salaries.length-1; i++) {
                salaries[i] = parseInt(salaries[i]) + diff;
            }
               
        }
        console.log(steps);    
    }
}