/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param str string字符串 
 * @return string字符串
 */
 function getLongestPalindrome( str ) {
    // write code here
    let len = str.length;
    let max_len = 0;
    let index = 0;
    let sub = '';
    function reverse(str, l, r) {
        while(l>=0 && r<len) {
            if(str[l] == str[r]) {
                if(r-l+1 > max_len) {
                    sub = str.slice(l, r+1);
                    max_len = r-l+1;
                }
                l--; r++;
            } else {
                l++; r--;
                break;
            }
        }
        //return r-l;
    }
    for(let i = 0; i<len; i++) {
        reverse(str, i, i);
        reverse(str, i, i+1);
    }
    
    return sub;
    
}
module.exports = {
    getLongestPalindrome : getLongestPalindrome
};