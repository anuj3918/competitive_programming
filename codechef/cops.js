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

// std_input = `3
// 4 7 8
// 12 52 56 8
// 2 10 2
// 21 75
// 2 5 8
// 10 51`

// std_input_arr = std_input.split('\n');
// main()

function main() {
    var ntests = parseInt(std_input_arr[0], 10)

    for(var t = 1; t <= ntests; t++) {
        var line1 = std_input_arr[t*2-1].split(' ');
        var n_M = parseInt(line1[0]);
        var X = parseInt(line1[1]);
        var Y = parseInt(line1[2]);

        var M = std_input_arr[t*2].split(' ');
        M = M.map((e)=>parseInt(e))
        M.sort(function(a, b){return a - b});

        // console.log("M: ", M);

        var starts = [], ends = []

        //  finding out the range of cops of each house
        M.forEach((m)=>{
            let s = parseInt(m) - X*Y - 1;
            let e = parseInt(m) + X*Y;
            if(s < 1){
                starts.push(0)
            } else {
                starts.push(s)
            }

            if(e > 100) {
                ends.push(100)
            } else {
                ends.push(e)
            }
        });

        // console.log("S: ", starts);
        // console.log("E: ", ends);

        var protected_houses = 0;
        for(let i=0; i<n_M; i++) {
            protected_houses += (ends[i] - starts[i])
        }

        //  removing overlapping houses that got counted
        for(let i=1; i<n_M; i++) {
            if(starts[i] < ends[i-1]) {
                protected_houses -= (ends[i-1] - starts[i])
            }
        }      

        console.log(100 - protected_houses);
    }
}