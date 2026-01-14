/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let dp ={};

    let fn =(rems)=>
    {

     if(rems === '') return true;
     if(rems in dp) return dp[rems];

        let res = false;
        for(let i=0; i<rems.length;i++)
        {
            let subs = rems.substring(0, i+1);
            if(wordDict.includes(subs) && fn(rems.substring(i+1)))
            {
                res = true;
            }

        }

        dp[rems] = res;

        return res;

    }

    return fn(s);
    
};


// Bottom up approach
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let set = new Set(wordDict);

let n = s.length;
    let dp = new Array(n+1).fill(false);
    dp[0]= true;

    for(let  i=1;i<=s.length;i++)
    {
        for(let j=0; j<i;j++)
        {
            if(dp[j] && set.has(s.substring(j,i)))
            {
                dp[i] = true;
                break;
            }
        }
    }

    
    return dp[n];
};