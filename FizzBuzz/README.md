# FizzBuzz Markdown

I started off thinking that I would make a file that would make three if/else statements, one that prints "Fizz" when i is divisble by 3, "Buzz" when i is divisible by 5, and "FizzBuzz" when i is divisible by both. I then thought it would be more fun, and that the assignment lent itself to, creating a combination string that printed a combination of Fizz and Buzz and blank spaces based on whether or not i was divisible by 3 or 5. To do this, I first created a counter by creating a for loop with "i".

`for (let i = 1; i <= 100; i++)`

This wasn't too hard, as I used the template from the codealong from class.

I also knew that the last piece of code would need to print both the integers 1-100 and the Fizz Buzz string, so I made this code:

`if () {
    console.log ();
    }
  else
    console.log (i);`
	
Both the code inside the if statement and the console.log statement required some workshopping, but we'll get back to that. 

My initial if/else statements looked something like this:

`  if (i % 3 === 0) {
    fizz;
    }
  if (i % 5 === 0) {
    buzz;
    }`
	
Based on that, I changed my print statement to this:

`if () {
    console.log (fizz + buzz);
    }
  else
    console.log (i);`

However, the problem with this was that fizz and buzz ultimately mean nothing. I experimented with statements like "fizz = true", before remembering that fizz had to be a variable, and I had to define it as such, so I ended up writing "var fizz = true", which also did nothing. I then realize that I had to set my variable equal to a string if I wanted that string to be printed, so I ended up making something that looked like this:

`if (i % 3 === 0) {
    var fizz = "Fizz";
    }
  if (i % 5 === 0) {
    var buzz = "Buzz";
    }`
	
I was almost there, but I still hadn't put something in my final if statement. I knew that I wanted to convey that I wanted it to print Fizz or Buzz or FizzBuzz if i was divisible by 3 OR 5. I knew how to say divisible by 3 AND 5 (&&), but not the former statement, so I turned to Google, and ended up on [this website.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR) At this point, my final if statement looks like this:

`  if (i % 3 === 0 || i % 5 === 0) {
    console.log (fizz + buzz);
    }
  else
    console.log (i);`
	
However, when I try to run this code, every time I want it to print Fizz OR Buzz, it always says "FizzBuzz". I realized I needed to make my 2 previous if statements into if/else statements, the else being set to return a blank string.

`if (i % 3 === 0) {
    var fizz = "Fizz";
    }
	else fizz = ""
  if (i % 5 === 0) {
    var buzz = "Buzz";
    }
	else buzz = ""`
	
Notice how the variables only had to be declared once!

End scene.