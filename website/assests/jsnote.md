JavaScript:

1. Introduction
- It is object oriented Programming language.
- The main function of js is make dynamic and interactive web pages and websites.
- It is a case-senctive language
- It allow only underscore ('_') and camelcase ('WebDevelopment'), it is not use of hyphone('-')

for connection
internal javascript: 
<script>
//code
</script>
</body>

External JS
<script src="assets/js/min.js"> </script>
</body>


2. Variables: it is a something that provide memory location  and store the value. 
variable declaration methods are:
var: 
- declare before use
- you can re-declare
	var x=10;
	var x=30; // use
- Scope ( global and local declaration)
- you can re-assign
	var x=20;
	    x=30;

let: 
- declare before use
- you can not re-declare
	let x=10;
	let x=30; // error
- Scope of the let is block of code. block of code refres to { ...}
- you can not re-assign
	let x=20;
	    x=30; // error

Const: 
- declare before use
- you can not re-declare
	const PI=3.14;
	const PI=3.14; // error
- Scope of the let is block of code. block of code refres to { ...}
- you can not re-assign
	const PI=3.14;
	    PI=3.14 + 5; // error

3. Output Methods
A. .innerHTML
e.g.
index.html
<p id="demo"> </p>

min.js
document.getElementById("demo").innerHTML= "Hello JavaScript";

B. document.write();
e.g.
document.wite("Hello JavaScript");

c. alert();
e.g.
alert(5+8);

D. colsole.log();
e.g.
colsole.log("Hello Ram");


4. Operators
a. Arithmetic Operators ( +, -, , /, %, *)
var x=20;
var y=30;
var z= x+y;
document.write(z);

b. Assignment Operators(-=, +=, /=, %=, *=)
var x=20;
var y=30;
document.write(x+=y);
Meaning: x+=y OR x=x+y

c. Logical Operators ( &&: (AND) , ||:(OR), !:(NOT))
var x=20;
var y=30;
var z= 10;
document.write(x>y || x>z);

d. Increment & Decrement operator(--, ++)
var x=20;
x++;
var y=30;
y--;
document.write("<br>" + "x is increment 20: to " + (x));
document.write("<br>" +  "y is decrement 30: to " +(y));

e. Comprasion Operators(==, ===, <, >, <=, >=, !=)
var x=20;
var y=30;
var z= 10;
document.write(x>y);


5. Conditional statement
if
e.g.
var x= 2;
var y= 4 ;
if(x>y){
document.write("<br>" + "X is greater number");
}

if else
e.g.
var x = 2;
var y = 4;
if (x > y) {
    document.write("<br>" + "X is greater number");
}
else{
    document.write("<br>" + "X is not greater number");
}

if else if
e.g.
var x = 2;
var y = 14;
var z= 6;
if (x > y && x>z) {
    document.write("<br>" + "X is greater number");
}
else if(y>z && y>x){
    document.write("<br>" + "Y is greater number");
}
else{
    document.write("<br>" + "Z is greater number");
}

loop
   while loop
e.g.
var i = 1;
while (i <= 10) {
    document.write("<br>" + i);
    i++;
}

   do while loop
e.g.
document.write("<br> This is DO while loop");
var i = 1;
do{
    document.write("<br>" + i);
    i++;
}
while (i <= 10);


   for loop
e.g.
document.write("<br> This is For loop");
var i=1;
for(i=1; i<=10; i++){
    document.write("<br>" + i);
    
}

switch statement
e.g.
var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Mon";
        break;
    case 2:
        day = "Tue";
        break;
    case 3:
        day = "Wed";
        break;
    case 4:
        day = "Thr";
        break;
    case 5:
        day = "Fri";
        break;
    case 6:
        day = "Sat";
        break;

}
document.write("<br>" + day);

break
continue (Assignment)


6. Function: block of code refresh that start from { .... }
pre-define function
Date();
getGay();
getMonth();

user define function
syntax:
function function_name(){
}

function myFunction(){
var x=30;
var y=50;
document.write("<br> " + (x+=y));
}
myFunction();

7. object
var laptop = {
    brand: "DELL",
    price: 89000,
    color: "black",
    RAM: "16GB"
};
document.write("<br> The laptop Brand is " + laptop.brand + "The laptop price is " + laptop.price);
document.getElementById("new").innerHTML= "<br> Laptop features: <br> <br>" + laptop.brand + "<br>" + laptop.price + "<br>" + laptop.color + "<br>" + laptop.RAM;

8. events
9. Array
10. Data type and String
11. CSS
12. form Validation
13. responsive Navigation
14. Slider ( Assignment)