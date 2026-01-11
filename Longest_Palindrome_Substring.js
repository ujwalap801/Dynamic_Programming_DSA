var longestPalindrome = function(s) {
    if (s.length === 0) return "";

    let n = s.length;
    let dp = Array.from({ length: n }, () => Array(n).fill(false));
    let ans = [0, 0];

    // Length 1
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }

    // Length 2
    for (let i = 0; i < n - 1; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            ans = [i, i + 1];
        }
    }

    // Length >= 3
    for (let len = 3; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            let j = i + len - 1;
            if (s[i] === s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
                ans = [i, j];
            }
        }
    }


    return s.substring(ans[0], ans[1] + 1);
};
