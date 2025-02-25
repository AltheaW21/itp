for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    var fizz = "Fizz";
    }
  else fizz = "";
  if (i % 5 === 0) {
    var buzz = "Buzz";
    }
    else buzz = "";
  if (i % 3 === 0 || i % 5 === 0) {
    console.log (fizz + buzz);
    }
  else
    console.log (i);
  }