/*30. Create a simple calculator program in JavaScript which can perform the addition,
 substraction, multiplication and division on given numbers.*/

 let num1 = +prompt("enter first number");
 let num2 = +prompt("enter second number");
 let operation = prompt("enter the operation out of (Add, Sub, Mul, Div)");
 
 switch (operation){
   case "Add":
     alert (`The sum of ${num1} and ${num2} is ${num1 + num2}`);
     break;
   case "Sub":
     alert (`The subtraction of ${num1} and ${num2} is ${num1 - num2}`);
     break;
   case "Mul":
     alert (`The multiplication of ${num1} and ${num2} is ${num1 * num2}`);
     break;
   case "Div":
     alert (`The division of ${num1} and ${num2} is ${num1 / num2}`);
     break;
   default:
     alert("Enter a valid input");
 }