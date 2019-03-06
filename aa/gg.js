module.exports = obj => new Proxy(obj,{
  get:(target, prop) => {
    if(Math.floor(Math.random() * 6) === 1) {
      throw Error('Bang')
    }
    else {
      return target[prop]
    }
  }
})
