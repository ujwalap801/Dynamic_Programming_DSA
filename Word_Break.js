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