var junker = new Car('Jalopy')

function Car (name) {
  Object.defineProperty(this, 'name', { value: name, enumerable: false })
}

Car.prototype.honk = function () {
  console.log('Aoogah aoogah!')
}

junker.mileage = 300000

console.log(Object.getOwnPropertyNames(junker))
// [ 'mileage', 'name' ]

