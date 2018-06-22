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

// std_input = `6
// gaga
// abcde
// rotor
// xyzxy
// abbaab
// ababc`

// std_input_arr = std_input.split('\n');
// main()

function main() {
    var ntests = parseInt(std_input_arr[0], 10)

    for(var t = 1; t <= ntests; t++) {
        var str = std_input_arr[t]
        var l = str.length
        var left = '', right = ''
        var mid = 0

        //  separating out left and right substrings, although its not needed but for clarity
        if(l % 2 === 1) {
            mid = (l-1)/2
            left = str.substr(0, mid)
            right = str.substr(mid+1, l+1)
        } else {
            mid = l/2
            left = str.substr(0, mid)
            right = str.substr(mid, l+1)
        }

        var map_left = {}, map_right = {}
        var isLapin = true;

        //  creating a dictionary map of each character present in left and right substrings
        for(let i=0; i<left.length; i++) {
            let left_char = left[i]
            let right_char = right[right.length-i-1]

            if(map_left.hasOwnProperty(left_char)){
                map_left[left_char]++
            } else {
                map_left[left_char] = 1
            }

            if(map_right.hasOwnProperty(right_char)){
                map_right[right_char]++
            } else {
                map_right[right_char] = 1
            }
        }

        //  if the total number of different characters in the two substrings is not equal then not a Lapindrome
        if(Object.keys(map_left).length !== Object.keys(map_right).length) {
            isLapin = false;
        } else {
            //  checking for validity of each character from the dictionary of substrings
            for(let char in map_left) {
                if(!map_right.hasOwnProperty(char)){
                    isLapin = false;
                    break;
                } else if(map_left[char] !== map_right[char]) {
                    isLapin = false;
                    break;
                }
            }
        }

        if(isLapin) {
            console.log("YES")
        } else {
            console.log("NO")
        }
    }
}