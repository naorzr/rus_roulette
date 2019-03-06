# rus_roulette
With todays technologies making good ol' simple coding runtime errors become harder and harder.  
Russian Roullete mission is to make your code unsafe again.

Powered by ES2015 proxies .
Equipped with the latest es6 arrow functions.
We are proud to present you russian roulette .

# Installation

With [npm](https://www.npmjs.com/)
```
npm i rus_roulette
```

# Example
All you need to do, is pass your favorite object to the roulette, use it as you would normally.. and just wait for it.
sooner or later, you'll get a runtime error.

```
const roulette = require('rus_roulette')

const perfectlySafeObject = {perfectlySafeProp: 'PerfectlySafeValue'}
const perfectlySafeObjectWinkWink = roulette(perfectlySafeObject)

console.log(perfectlySafeObjectWinkWink.perfectlySafeProp)
```

# Should I use this?
Only if you truely love your manager

# Disclaimer
Use at your own risk, may cause unexpected behaviours

# License
*rus_roulette* is available under the DOWHATEVERITSNOTLIKEIHAVEMONEYFORALAWYER license.

# Author
![@naorzr](https://cdn.pixabay.com/photo/2015/09/27/14/04/owl-960700__340.jpg)

Follow me on [Medium](https://medium.com/@naorzruk)
