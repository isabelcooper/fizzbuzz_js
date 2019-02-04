describe("Fizzbuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  it( "should return a number if it's not divisible by 3 or 5", function() {
    expect(fizzbuzz.run(1)).toEqual(1)
    expect(fizzbuzz.run(7)).toEqual(7)
  });

  it( "should return fizz if a number passed to it is divisable by 3", function() {
    expect(fizzbuzz.run(3)).toEqual("fizz")
    expect(fizzbuzz.run(2)).not.toEqual("fizz")
  });

  it( "should return buzz if a number passed to it is divisable by 5", function() {
    expect(fizzbuzz.run(5)).toEqual("buzz")
    expect(fizzbuzz.run(10)).toEqual("buzz")
  });

  it( "should return buzz if a number passed to it is divisable by 5", function() {
    expect(fizzbuzz.run(15)).toEqual("fizzbuzz")
    expect(fizzbuzz.run(30)).toEqual("fizzbuzz")
  });

});
