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
        var line1 = std_input_arr[test].split(' ');
        var n_words = parseInt(line1[0]);
        var n_phrases = parseInt(line1[1]);
        var words = std_input_arr[test+1].split(' ');
        var printer = [];

        for(let i=0; i<words.length; i++){
            
            let word = words[i]
            let isPresent = false;
            
            for(let j=1; j<=n_phrases; j++){
                let phrase = std_input_arr[test+1+j].split(' ');
                let index = phrase.indexOf(word); 
                if( index !== -1){
                    isPresent = true;
                    break;
                }
            }
            if(isPresent) {
                printer.push("YES");
            } else {
                printer.push("NO");
            }    
        }
        console.log(printer.join(' '));
        test = test + 2 + n_phrases;
    }
}