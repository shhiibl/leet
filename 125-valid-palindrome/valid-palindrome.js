/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    const plndrm = s.toLowerCase().replace(/[^a-z0-9]/g, '');


    return plndrm === plndrm.split('').reverse().join('');
};
