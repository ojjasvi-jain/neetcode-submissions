class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
    let freq = new Map();
    let left = 0;
    let maxFreq = 0;
    let maxLength = 0;

      for (let right = 0; right < s.length; right++) {
         // increase frequency
         freq.set(s[right], (freq.get(s[right]) || 0) + 1);

         // track max frequency in window
         maxFreq = Math.max(maxFreq, freq.get(s[right]));

         // if window invalid, shrink it
         while ((right - left + 1) - maxFreq > k) {
               freq.set(s[left], freq.get(s[left]) - 1);
               left++;
         }

         // update result
         maxLength = Math.max(maxLength, right - left + 1);
      }

      return maxLength;
    }
}
//  0123456
// "AAABABB"
//      i
//        j 
// cnt = 2    
