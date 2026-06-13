class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(h) {
      let preff = Array(h.length).fill(0);
      let suff = Array(h.length).fill(0);
      let total = 0;

      for(let i=1 ; i<h.length ; i++)
      {
         preff[i] = Math.max(preff[i-1] , h[i-1])
      } 
      for(let i=h.length-2 ; i>=0 ; i--)
      {
         suff[i] = Math.max(suff[i+1] , h[i+1])
      } 

      console.log({preff , suff})

      for(let i=0 ; i<h.length ; i++)
      {
         let val = Math.min(preff[i],suff[i]) - h[i] ;
         val = val<0 ? 0 : val;
         total = total + val;
      }

      return total;
    }
}

//  0 1 2 3 4 5 6 7 8 9
//     [0,2,0,3,1,0,1,3,2,1]
// preff: [0,0,2,2,3,3,3,3,3,3]

//   suff:[3,3,3,3,3,3,3,2,1,0]

//   2 + 
// [0,0,0,0,0,0,2,2,1,0]