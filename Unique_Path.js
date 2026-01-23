/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {

    let dp = Array.from({ length: m }, () => Array(n).fill(-1));

    let fn = (x, y) => {
        if (x == 0 && y == 0) return 1;
        if (x < 0 || y < 0) return 0;

        if (dp[x][y] != -1) return dp[x][y];
        return dp[x][y] = fn(x - 1, y) + fn(x, y - 1);


    }
    return fn(m - 1, n - 1);

};


// Iteration

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {

    let dp = Array.from({length:m}, ()=>Array(n).fill(-1));

    for(let i=0;i<m;i++) dp[i][0] =1;
    for(let j=0;j<n;j++) dp[0][j] =1;


console.log(dp)
    for(let i=1; i<m;i++)
    {
        for(let j=1;j<n;j++)
        {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    

    return dp[m-1][n-1];
};