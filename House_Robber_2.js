/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(arr) {

    let n =  arr.length;
    if(n ==1) return arr[0];
  


function Helper(start,end)
{

    let p1 =p2 =0;
    for(let i=start; i<=end;i++)
    {
        let curr = Math.max(arr[i] + p1, p2);
        let temp = p2;
    p2 = curr;
    p1 = temp;
    curr++;
    }

    return p2;  
}
    

return Math.max(Helper(0,n-2), Helper(1, n-1));

};