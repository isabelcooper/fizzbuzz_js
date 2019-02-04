function FizzBuzz() {
}
FizzBuzz.prototype.run = function(number) {
  var result = ""
  if (this.divisible(number, 3)) { result += "fizz" }
  if (this.divisible(number, 5)) { result += "buzz" }
  if (result === "" ) { result = number }
  return result
}

FizzBuzz.prototype.divisible = function(number, divided_by) {
  return number % divided_by === 0
}
