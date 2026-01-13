/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {

let dp ={};
   const dec =(remStr)=>
    {

let n = remStr.length;
  if(remStr == '') return 1;

      let ans =0;


if(remStr in dp) return dp[remStr];

  let oneDigit = remStr.substring(n-1);
  let twoDigit = remStr.substring(n-2);

  if(oneDigit !=0)
  {
    ans += dec(remStr.substring(0, n-1));

  }
  if(twoDigit >= 10 && twoDigit <=26)
  {
    ans += dec(remStr.substring(0, n-2));
  }


dp[remStr] = ans;
  return ans;

    }

   return dec(s);

 
};