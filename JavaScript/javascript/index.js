var x = 10;
var y = 20;
console.log(x + y);

// marks 
var marks = 60;

if(marks< 40){
    console.log("You are Fail.")
}
else if (marks>=40 && marks<=100){
    console.log("You are Pass."); if(marks>=40 && marks<=60){
        console.log("You scored 3rd division.")
    }

    else if(marks>60 && marks<70){
        console.log("You scored 2nd division.")
    }
    else{
        console.log("You scored 1st division.")
    }
}
else{
    console.log("Invalid marks.")
}

// or
var marks = 100;
if (marks < 0 && marks > 100)
{
    console.log("invalid marks");
}
else if (marks < 40)
{
    console.log("fail");
}
else (marks > 40)
{
    console.log("pass");


if (marks>=40 && marks < 50)
{
    console.log("third division");

}
if (marks >= 50 && marks < 60)
{
    console.log("second division");
}
if (marks>=60 && marks <80)
{
    console.log("first division");
}
if (marks>=80 && marks<=100)
{
    console.log("distinction");
}
}

// write the program to add the two numbers
function addNumbers(num1, num2) {
    return num1 + num2;
  }
  
  // Testing the function
  const number1 = 5;
  const number2 = 10;
  const sum = addNumbers(number1, number2);
  console.log("The sum of ${number1} and ${number2} is ${sum}");

//   or
var num1= 20;
var num2= 30;
function add (num1, num2)
{
    return num1+num2;
}
