/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    let n = coins.length;

    let dp = new Array(amount + 1).fill(Infinity);

    dp[0] = 0;
    for (let rem = 1; rem <= amount; rem++) {

        for (let j = 0; j < n; j++) {
            let remAmount = rem - coins[j];
            if (remAmount >= 0) {

                dp[rem] = Math.min(dp[rem], 1 + dp[remAmount])
            }

        }
    }

    console.log(dp);

    return dp[amount] === Infinity ? -1 : dp[amount];


};