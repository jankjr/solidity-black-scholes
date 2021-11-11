# Black scholes implemented in solidty

Proof of concept implementation of black scholes options pricing implemented in solidty.

Leverages the https://github.com/hifi-finance/prb-math for implementing exp, sqrt, and ln functions.

cumulative standard normal distribution is approximated using:

https://stackoverflow.com/a/59217784

## Example usage

```
const response = await pricingModule.callStatic.calculatePremiums(
    "1000000000000000000",          // Amount in fixed point with 18 digits (1.0)
    "4812000000000000000000",       // Current price 18 digits (4812 USD)
    "4812000000000000000000",       // Strike in 18 digits (4812 USD)
    "2592000",                      // Option period in seconds (30 days)

    "-150000000000000000",          // Swingrate percent (-15%) 18 digits
    "900000000000000000",           // Volatility (90%) 18 digits
    "0"                             // Risk free rate (0%) 18 digits
);

console.log(response.map(e => e.toString()));

// => [ '527254444128173300624', '467561200787957876456' ]
// 527.25 usd for call
// 456.75 usd for a put
```

## Gas cost

Pretty high. Likely useless on Ethereum.

## Is it secure?

None of this code is guaranteed to work. Use at own risk.

## Can I use it?

Go ahead