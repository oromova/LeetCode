// 58. Length of Last Word

var lengthOfLastWord = function(s) {
    const ar = s.trim().split(' ')
    let res = ar[ar.length -1].length

    return res;
};

console.log(lengthOfLastWord('Hello World'));