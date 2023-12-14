function add7(number) {
  console.log(parseInt(number) + 7);
}

function checkAge(age) {
  return age > 18 ? true : confirm("Did your parents allow you");
}

function pow(num) {
  return num * num;
}

let multiply = (x, y) => x * y;

let ask = (question, yes, no) => {
  return confirm(question) ? yes() : no();
};

function capitalize(string = "") {
  trimmed = string.trim();
  return trimmed[0].toUpperCase() + trimmed.slice(1).toLowerCase();
}

function lastLetter(string) {
  string.trim();
  return string[-1];
}

function fizzbuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else console.log(i);
  }
}
let answer = parseInt(prompt("Enter number"));
fizzbuzz(answer);

// ask(
//   "Do you agree?",
//   () => alert("You agreed!"),
//   () => alert("You canceled!"),
// );
