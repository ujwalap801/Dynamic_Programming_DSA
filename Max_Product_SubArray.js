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