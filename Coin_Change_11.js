// USING MAP IT WORKS WEEL BUT LEETCODE WILL NOT EXECUTE ALL TESTCASE BUT OUR  APPROACH IS CORRECT


/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {

let n= coins.length;
let dp = new Map();


let fn = (remS, start)=>
{

if(remS ==0) return 1;
if(remS <0) return  0;


let key = start +"-"+ remS;
if(key in dp) return dp[key];


let comb =0;

for(let i=start; i<n; i++)
{
comb += fn(remS - coins[i], i);
}

return dp[key] = comb;
}
  

  return fn(amount, 0);

};

// with 2D

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {

let n= coins.length;
let dp =Array.from({length: amount+1}, ()=> Array(n).fill(-1))


let fn = (remS, start)=>
{

if(remS ==0) return 1;
if(remS <0) return  0;


if(dp[remS][start] != -1)return dp[remS][start];

let comb =0;

for(let i=start; i<n; i++)
{
comb += fn(remS - coins[i], i);
}


  console.log(dp)

return dp[remS][start] = comb;
}
  


  return fn(amount, 0);

};