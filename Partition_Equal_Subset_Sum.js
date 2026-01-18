

// this will excute most of the test cases using map
var canPartition = function(arr) {

    let n = arr.length;
let sum = arr.reduce((arr, curr) => arr+curr);


if(sum % 2) return false;

sum = sum /2;

let dp ={};

    let fn = (remS, start)=>
    {

if(remS ===0) return true;
if(remS <0) return false;


let key =start + "-"+ remS;
if(key in dp)
{
    return dp[key];

}
for(let i= start; i<n;i++)
{

    if(fn((remS - arr[i]), i+1))
    {
        return  dp[key]= true;
    }
}

return dp[key]= false

    }

    return fn(sum, 0)

    
};


// Using 2D Array

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(arr) {

    let n = arr.length;
let sum = arr.reduce((arr, curr) => arr+curr);


if(sum % 2) return false;

sum = sum /2;

let dp = Array.from({length: sum+1}, ()=>Array(arr.length).fill(undefined));

    let fn = (remS, start)=>
    {

if(remS ===0) return true;
if(remS <0) return false;


if(dp[remS][start] != undefined) return  dp[remS][start];

for(let i= start; i<n;i++)
{

    if(fn((remS - arr[i]), i+1))
    {
        return  dp[remS][start]= true;
    }
}

return dp[remS][start]= false

    }

    return fn(sum, 0)

    
};