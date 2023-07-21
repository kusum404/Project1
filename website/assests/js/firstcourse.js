
document.getElementById("demo").innerHTML = "Hello World";
console.log("hello world");


document.write("<br>" + " Kusum");

document.write("<br>" + (2 + 3));

document.write("<br> <br>" + " Hi guys")

// alert("<br>" + (2+3));

// alert("I am a java");

console.log(100);

console.log("100+300");

var x = 10;
var y = 3;
var z = x % y;
document.write("<br>" + z);

// logical operators
var s = 20;
var t = 30;
var u = 10;
document.write("<br>" + (s > t && t > u));
document.write("<br>" + (s > t || t < u));
document.write("<br>" + (s != t));

// assignment operator
var x = 10;
var y = 30;
x += y;
// OR x = x + y;
document.write("<br>" + x);

// comprasion operators
var a = 40;
var b = 10;
document.write("<br>" + (a >= b));
// this check the value are equal or not
document.write("<br>" + (b == a));
// it check the value equal and data type
document.write("<br>" + (b === a));
// increment and decrement
var z = 100;
z++;
document.write("<br>" + z);


// conditional statement
// if condition
var a = 10;
var b = 20;
if (a > b) {
    document.write("<br>" + ("a is greater"));
}
else {
    document.write("<br>" + ("b is greater"));
}

// if else if
var x = 40;
var y = 60;
var z = 2000;
if (x > y && x > z) {
    document.write("<br>" + "x is greater");
}
else if (y > z && y > x) {
    document.write("<br>" + "y is greater");
}
else {
    document.write("<br>" + "z is greater");
}

// Nested if else
var x = 40;
var y = 30;
var z = 10;
if (x > y) {
    if (y > z) {
        document.write("<br>" + "y is greater");
    }
    else {
        document.write("<br>" + "z is greater");
    }
}
else {
    document.write("<br>" + "x is greater");
}

// loop
// while
var i = 1;
while (i <= 10) {
    i++;
    document.write("<br>" + i);

}

// do while
var i = 100;
do {
    document.write("<br>" + i);
    i++;
}
while (i <= 10);

// for while
var i = 1;
for (i = 1; i <= 10; i++) {
    document.write("<br>" + i);
}

// function
// pre defined function

// Date();
document.write("<br>" + Date());
document.write("<br>" + (new Date().getDay()));
document.write("<br>" + (new Date().getDate()));
document.write("<br>" + (new Date().getFullYear()));

// user defined function

function myfunction() {
    document.write("<br>" + "Kusum");
}
myfunction();

function add(a, b) {
    return a + b;
}
document.write("<br>" + add(2, 3));

// object

var marker = {
    color: "Red",
    price: 2000,
    weight: "2g"
};
document.write("<br> The color of marker is " + marker.color + "<br> The price of marker " + marker.price + "<br> The weight of marker is " + marker.weight);


function newCSS() {
    var x = document.getElementById("demos");
    x.style.padding = "2 rem";
    x.style.color = "#EC4D37";
    x.style.backgroundColor = "#FCFCFC";

}
newCSS();

document.getElementById("Pokhara").style.cssText = "color:#5F2F3F; background-color:#5F5F5F;";

// switch
var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday"
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;

}
document.write("<br>" + day);

//Array

var sname = ["Kusum", "Kanchan", "Punam", "Priyanka", "Swoekxhya"];
var rollNo = [17, 12, 23, 22, 26];
var address = ["Lakeside", "Hemja", "Bindabasini", "Archalbot", "Kaukhola"];
var phone = [986754321, 986543210, 986543207, 9764386544, 87423945753];

for (var i = 0; i <= 4; i++) {
    document.write("<br> <br>" + "Name is" + sname[i] + "<br>" + "Roll No is:" + rollNo[i] + "<br>" + "Address is" + address[i] + "<br>" + "PhoneNo is:" + phone[i]);
}


function swapNumbers(a, b) {
  // Swapping the values of a and b using destructuring assignment
  [a, b] = [b, a];
  return [a, b];
}

// Input two numbers from the user (you can use browser prompts or other input methods)
let num1 = parseFloat(prompt("Enter the first number: "));
let num2 = parseFloat(prompt("Enter the second number: "));

console.log("Before swapping: num1 =", num1, "num2 =", num2);

// Call the swapNumbers function and store the returned values
[num1, num2] = swapNumbers(num1, num2);

console.log("After swapping: num1 =", num1, "num2 =", num2);

