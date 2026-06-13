class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(p) {
      let profit = 0 ;
      let buyVal = p[0] ;
      for(let i=0 ; i<p.length ; i++)
      {
         buyVal = Math.min(buyVal , p[i]);
         profit = Math.max(profit ,p[i] - buyVal ) 
      } 

      return profit
    }
}
