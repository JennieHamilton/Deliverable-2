
//Exercise 1:

var number = prompt("Enter a number!");

var sum = 0;
for (var i = 0; i <= number; i++) {
  console.log(i);
  sum = sum + i;
}
console.log(sum);



//Exercise 2:

var answer1 = prompt("Do you want to play?");
if (answer1 === "yes") {
  var output = "";
  do {
      var word = prompt("Enter a word.");
      output = output + " " + word;
      var answer2 = prompt("Do you want to play again?");
  }
  while (answer2 === "yes");
  console.log(output);
}



//Exercise 3:

var answer = prompt("Would you like to print your name?");

if (answer === "yes") {
  console.log("Hello. My name is Cecil.");
}

var output = "Hello. My name is Cecil.";
while (answer === "yes") {
  var answer = prompt("Would you like to print this again?");
  output = output + "!";
  console.log(output);
}



//Exercise 4:

var time = prompt("What time of day is it? (morning, noon, or evening)");

if (time === "morning") {
  console.log("Since it is morning, you should be eating breakfast. We suggest eggs and toast.");
} else if (time === "noon") {
  console.log("Since it is noon, you should be eating lunch. We suggest a salad.");
} else if (time === "evening") {
  console.log("Since it is evening, you should be eating dinner. We suggest chicken and rice.");
}
