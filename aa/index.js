const roulette = require('rus_roulette')

const perfectlySafeObject = {perfectlySafeProp: 'PerfectlySafeValue'}
const perfectlySafeObjectWinkWink = roulette(perfectlySafeObject)

console.log(perfectlySafeObjectWinkWink.perfectlySafeProp)