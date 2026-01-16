/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(arr) {
    
    let total = arr[0];
    console.log(total)
    let maxProd = new Array(arr.length).fill(0);
    let minProd = new Array(arr.length).fill(0);

    maxProd[0] = arr[0];
    minProd[0] = arr[0];

    for(let i=1; i<arr.length;i++)
    {
        let curr = arr[i];
        let maxCurr = maxProd[i-1] * arr[i];
        let minCurr = minProd[i-1] * arr[i];

        maxProd[i] = Math.max(curr, maxCurr, minCurr);
     
        minProd[i] = Math.min(curr, maxCurr, minCurr);
        total = Math.max(total, maxProd[i]);

    }

  
    return total;
};



// 2ND APPROACH

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(arr) {
    let n = arr.length;
    let leftProd = rightProd =1;
    let max = -Infinity;
    for(let i=0; i<n;i++)
    {
       leftProd =  leftProd *arr[i];
       rightProd = rightProd *arr[n-i-1];
       max= Math.max(leftProd, max, rightProd);
       if(leftProd ===0 ) leftProd =1;
       if(rightProd ===0) rightProd =1;

    }

    return max;

    
};