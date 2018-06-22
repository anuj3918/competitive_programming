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
        var min = Math.min.apply(null, salaries)
        
        var steps = 0;

        //  Increasing the salary of all but not the selected employee is same as saying
        //  decreasing the salary of only the selected employee
        for(let i=0; i<emp; i++) {
            steps += parseInt(salaries[i]);      
        }
        steps -= min * emp;
        console.log(steps);    
    }
}