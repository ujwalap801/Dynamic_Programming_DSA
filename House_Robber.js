// TC:0(N) AND SC:0(N)
var rob = function (arr) {
  let n = arr.length;

  let dp = [];
  dp[0] = arr[0];
  dp[1] = Math.max(arr[1], dp[0]);

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 2] + arr[i], dp[i - 1]);
  }

  return dp[n - 1];
};

// TC:0(N) AND SC:0(N)

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (arr) {
  let n = arr.length;

  if (n == 1) return arr[0];
  // let dp= [];
  let p1 = arr[0];
  let p2 = Math.max(arr[1], arr[0]);

  for (let i = 2; i < n; i++) {
    let curr = Math.max(p1 + arr[i], p2);
    let temp = p2;
    p2 = curr;
    p1 = temp;
    curr++;
  }

  return p2;
};

// Using Recursion

// Recursive solution → O(n) space
var rob = function (arr) {
  let n = arr.length;
  if (n == 1) return arr[0];

  let store = {};
  function dp(i) {
    if (i == 0) return arr[0];
    if (i == 1) return Math.max(arr[0], arr[1]);

    if (store[i] !== undefined) return store[i];

    store[i] = Math.max(dp(i - 2) + arr[i], dp(i - 1));

    return store[i];
  }

  return dp(n - 1);
};
