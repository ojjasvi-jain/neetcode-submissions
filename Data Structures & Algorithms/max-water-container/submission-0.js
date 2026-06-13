class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(h) {
      let i=0 ;
      let j = h.length-1;
      let maxArea = 0; 
       
       while(i<j)
       {
          maxArea = Math.max(maxArea , (j-i)*Math.min(h[i],h[j]))
          if(h[i]<h[j])
          {
            i++;
          }
          else{
             j--;
          }
       }

       return maxArea;
    }
}
