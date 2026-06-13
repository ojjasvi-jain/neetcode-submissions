class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
     let set = new Set();
     let i=0;
     let j=0; 
     let maxW = 0 ;

     while(j<s.length)
     {
        if(!set.has(s[j])){
          set.add(s[j])
        }
        maxW = Math.max(maxW , j-i+1)
        j++;
         while(set.has(s[j])){
             set.delete(s[i]);
             i++;
         }
       

        
     } 
      return maxW;
    }
}


// "zxyzxyz"
//   i  
//      j
//  {
//    z : 1
//    x : 2
//    y : 1
//  } 