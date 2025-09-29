/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    hh=s.trim()

    const words=hh.split(" ")
    return words[words.length - 1].length;
};